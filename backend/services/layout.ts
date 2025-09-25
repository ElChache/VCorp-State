import { 
  GraphNode, 
  CollectionNode, 
  JobNode, 
  GraphLayout, 
  SquadColumn, 
  GraphEdge,
  GraphPosition 
} from '../types/index.js';

export interface LayoutConfig {
  columnWidth: number;
  columnSpacing: number;
  nodeHeight: number;
  nodeSpacing: number;
  collectionNodeWidth: number;
  jobNodeWidth: number;
}

export class LayoutEngine {
  private config: LayoutConfig = {
    columnWidth: 280,
    columnSpacing: 40,
    nodeHeight: 80,
    nodeSpacing: 20,
    collectionNodeWidth: 200,
    jobNodeWidth: 180
  };

  /**
   * Generate sophisticated layout with proper squad columns and dependency flow
   */
  generateLayout(
    collections: CollectionNode[], 
    jobs: JobNode[], 
    edges: GraphEdge[]
  ): GraphLayout {
    
    // Step 1: Create squad columns
    const squadColumns = this.createSquadColumns(jobs);
    
    // Step 2: Assign jobs to columns based on squad
    const squadJobMap = this.assignJobsToSquads(jobs, squadColumns);
    
    // Step 3: Build dependency graph for vertical ordering
    const dependencyGraph = this.buildDependencyGraph(collections, jobs, edges);
    
    // Step 4: Calculate vertical positions using topological sort
    const verticalPositions = this.calculateVerticalPositions(dependencyGraph);
    
    // Step 5: Position all nodes
    this.positionNodes(collections, jobs, squadColumns, squadJobMap, verticalPositions);
    
    return {
      squads: squadColumns,
      width: squadColumns.length * (this.config.columnWidth + this.config.columnSpacing),
      height: Math.max(800, verticalPositions.maxDepth * 120 + 200)
    };
  }

  private createSquadColumns(jobs: JobNode[]): SquadColumn[] {
    const squads = new Map<string, SquadColumn>();
    const squadOrder = ['Product Designer', 'Architect', 'FE Squad', 'BE Squad', 'AI Squad', 'QA Squad'];
    
    // Collect unique squads from jobs
    jobs.forEach(job => {
      if (!squads.has(job.data.squad)) {
        squads.set(job.data.squad, {
          squad_slug: job.data.squad.toLowerCase().replace(/\s+/g, '_'),
          squad_name: job.data.squad,
          color: this.getSquadColor(job.data.squad),
          x_position: 0, // Will be set below
          width: this.config.columnWidth
        });
      }
    });
    
    // Order squads according to standard pipeline flow
    const orderedSquads: SquadColumn[] = [];
    
    squadOrder.forEach(squadName => {
      if (squads.has(squadName)) {
        orderedSquads.push(squads.get(squadName)!);
      }
    });
    
    // Add any remaining squads not in the standard order
    squads.forEach((squad, name) => {
      if (!squadOrder.includes(name)) {
        orderedSquads.push(squad);
      }
    });
    
    // Set x positions
    orderedSquads.forEach((squad, index) => {
      squad.x_position = index * (this.config.columnWidth + this.config.columnSpacing);
    });
    
    return orderedSquads;
  }

  private assignJobsToSquads(jobs: JobNode[], squadColumns: SquadColumn[]): Map<string, JobNode[]> {
    const squadJobMap = new Map<string, JobNode[]>();
    
    squadColumns.forEach(squad => {
      squadJobMap.set(squad.squad_slug, []);
    });
    
    jobs.forEach(job => {
      const squadSlug = job.data.squad.toLowerCase().replace(/\s+/g, '_');
      if (squadJobMap.has(squadSlug)) {
        squadJobMap.get(squadSlug)!.push(job);
      }
    });
    
    return squadJobMap;
  }

  private buildDependencyGraph(
    collections: CollectionNode[], 
    jobs: JobNode[], 
    edges: GraphEdge[]
  ): Map<string, { node: GraphNode; dependencies: string[]; dependents: string[] }> {
    
    const graph = new Map();
    
    // Initialize all nodes in graph
    [...collections, ...jobs].forEach(node => {
      graph.set(node.id, {
        node,
        dependencies: [],
        dependents: []
      });
    });
    
    // Build dependency relationships from edges
    edges.forEach(edge => {
      if (graph.has(edge.source) && graph.has(edge.target)) {
        // source -> target means target depends on source
        graph.get(edge.target).dependencies.push(edge.source);
        graph.get(edge.source).dependents.push(edge.target);
      }
    });
    
    return graph;
  }

  private calculateVerticalPositions(
    dependencyGraph: Map<string, any>
  ): { positions: Map<string, number>; maxDepth: number } {
    
    const positions = new Map<string, number>();
    const visited = new Set<string>();
    let maxDepth = 0;
    
    // Topological sort with depth calculation
    const calculateDepth = (nodeId: string): number => {
      if (visited.has(nodeId)) {
        return positions.get(nodeId) || 0;
      }
      
      visited.add(nodeId);
      const nodeInfo = dependencyGraph.get(nodeId);
      
      if (!nodeInfo || nodeInfo.dependencies.length === 0) {
        positions.set(nodeId, 0);
        return 0;
      }
      
      // Position is 1 + max depth of dependencies
      const depthFromDependencies = Math.max(
        ...nodeInfo.dependencies.map((depId: string) => calculateDepth(depId))
      ) + 1;
      
      positions.set(nodeId, depthFromDependencies);
      maxDepth = Math.max(maxDepth, depthFromDependencies);
      
      return depthFromDependencies;
    };
    
    // Calculate depth for all nodes
    dependencyGraph.forEach((_, nodeId) => {
      if (!visited.has(nodeId)) {
        calculateDepth(nodeId);
      }
    });
    
    return { positions, maxDepth };
  }

  private positionNodes(
    collections: CollectionNode[],
    jobs: JobNode[],
    squadColumns: SquadColumn[],
    squadJobMap: Map<string, JobNode[]>,
    verticalPositions: { positions: Map<string, number>; maxDepth: number }
  ): void {
    
    // Position collections (they float between columns or span multiple)
    collections.forEach(collection => {
      const depth = verticalPositions.positions.get(collection.id) || 0;
      collection.position = {
        x: 50, // Left side of graph
        y: 100 + depth * 120
      };
    });
    
    // Position jobs within their squad columns
    squadColumns.forEach((squad, columnIndex) => {
      const squadJobs = squadJobMap.get(squad.squad_slug) || [];
      
      // Group jobs by their vertical depth
      const depthGroups = new Map<number, JobNode[]>();
      squadJobs.forEach(job => {
        const depth = verticalPositions.positions.get(job.id) || 0;
        if (!depthGroups.has(depth)) {
          depthGroups.set(depth, []);
        }
        depthGroups.get(depth)!.push(job);
      });
      
      // Position jobs within each depth group
      depthGroups.forEach((jobsInDepth, depth) => {
        jobsInDepth.forEach((job, indexInDepth) => {
          job.position = {
            x: squad.x_position + 50, // Center in column
            y: 100 + depth * 120 + indexInDepth * (this.config.nodeHeight + 10)
          };
        });
      });
    });
  }

  private getSquadColor(squadName: string): string {
    const colors: Record<string, string> = {
      'Product Designer': '#3B82F6', // Blue
      'Architect': '#8B5CF6',        // Purple
      'FE Squad': '#10B981',         // Emerald
      'BE Squad': '#F59E0B',         // Amber
      'AI Squad': '#EF4444',         // Red
      'QA Squad': '#6B7280'          // Gray
    };
    
    return colors[squadName] || '#6B7280';
  }
}