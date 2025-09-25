# Real-Time Graph Architecture - Column-Based Implementation

## Core Principle
**Frontend builds 7 independent column trees. Backend sends small event updates via WebSocket.**

### Key Insight: Simplification
The graph is NOT a complex dependency graph - it's **7 INDEPENDENT COLUMNS (trees)**!

## Column-Based Design Principles

### 1. Seven Independent Squad Columns
```clojure
(def squad-columns
  [{:slug "human" :name "Human Director" :x 100}
   {:slug "pd" :name "Product Designer" :x 250} 
   {:slug "arch" :name "Architect" :x 400}
   {:slug "fe" :name "FE Squad" :x 550}
   {:slug "be" :name "BE Squad" :x 700}
   {:slug "ai" :name "AI Squad" :x 850}
   {:slug "qa" :name "QA Squad" :x 1000}])
```

### 2. Data-Driven Column Structure
- **Each column builds its tree dynamically** from actual job input/output data
- **No hardcoded assumptions** about tree shapes, document names, or flow patterns
- **Algorithm analyzes job relationships** to determine tree structure and positioning
- **Document nodes duplicate automatically** based on which columns reference them
- **Completely generic** - works with any project template or job configuration

### 3. Automatic Document Duplication
Instead of complex cross-column arrows, **documents duplicate automatically**:
- Algorithm scans all jobs to find which documents are needed in which columns
- Documents appear in every column that has jobs consuming or producing them
- Each column becomes completely self-contained and independent
- Eliminates need for horizontal arrows or cross-column dependencies

## Implementation Structure

#### Generic Tree Building Algorithm
```clojure
(defn build-column-tree
  "Build tree dynamically from job input/output relationships"
  [squad-slug squad-jobs all-documents column-x]
  (let [;; 1. Analyze job relationships to build tree structure
        tree-structure (analyze-job-dependencies squad-jobs)
        
        ;; 2. Find all documents needed by this column's jobs
        needed-documents (find-documents-for-jobs squad-jobs all-documents)
        
        ;; 3. Position nodes based on tree structure (not hardcoded)
        positioned-jobs (position-jobs-in-tree tree-structure column-x)
        positioned-docs (position-documents-for-jobs positioned-jobs needed-documents)
        
        ;; 4. Create vertical edges within the tree
        tree-edges (build-tree-edges positioned-jobs positioned-docs)]
    
    {:job-nodes positioned-jobs
     :document-nodes positioned-docs
     :edges tree-edges}))
```

#### Graph Assembly
```clojure
(defn build-graph-data
  "Build React Flow graph with data-driven column trees"
  [collections documents jobs squads roles]
  (let [;; Group jobs by their assigned squad (data-driven)
        jobs-by-squad (group-jobs-by-squad jobs roles)
        
        ;; Build each column tree independently using actual job data
        column-trees (map (fn [column]
                           (build-column-tree (:slug column)
                                            (get jobs-by-squad (:slug column) [])
                                            documents
                                            (:x column)))
                         squad-columns)
        
        ;; Combine all trees (completely generic)
        all-nodes (mapcat #(concat (:job-nodes %) (:document-nodes %)) column-trees)
        all-edges (mapcat :edges column-trees)]
    
    {:nodes all-nodes :edges all-edges}))
```

### Layout Characteristics

#### Positioning Strategy
- **X-axis**: Fixed column positions (100, 250, 400, 550, 700, 850, 1000px)
- **Y-axis**: Vertical stacking within each column (120px spacing)
- **Document placement**: Duplicated in columns that consume/produce them
- **No cross-column edges**: Each column flows independently

#### Ultra-Simple Algorithm
1. **Group Jobs by Squad**: Use roles to assign jobs to columns
2. **Find First Jobs**: 
   - **Column 1**: Jobs whose inputs are NOT outputs of any other job
   - **Other Columns**: Jobs whose inputs match previous column's outputs
3. **Follow the Chain**: From first jobs, follow job → outputs → consuming jobs
4. **Stack Vertically**: Position jobs in chain order with simple Y spacing
5. **Add Collections**: Place input/output collections above/below their jobs

#### Key Insight: It's Just Simple Chains!
- **Each column is mostly a straight line** of jobs flowing down
- **No complex graph algorithms** - just follow input/output references
- **Tree structure is static** - only job/collection states change in real-time
- **Document duplication** eliminates need for cross-column arrows

### Benefits of Column-Based Approach

#### Simplicity
- **No complex dependency analysis** required
- **No cross-column arrow management** 
- **Each column independent** - easier to debug and maintain
- **Template matching** - directly reflects the visual design

#### Performance
- **Linear layout complexity** instead of graph algorithms
- **Simple positioning calculations** 
- **Predictable rendering** - no edge overlap issues
- **Easy to extend** - just add more columns

#### User Experience  
- **Clear visual hierarchy** - left to right squad progression
- **Easy to follow** - vertical flow within each column
- **Familiar pattern** - matches organizational structure
- **Scalable design** - can handle many jobs per column

### React Flow Integration
```clojure
;; Still uses React Flow for benefits like:
;; - Zoom/pan controls
;; - Click handling  
;; - Visual rendering
;; - Edge drawing (vertical within columns)

;; But with simplified layout logic:
(defn graph-component []
  [react-flow 
   {:nodes (clj->js nodes)           ; Simple column-positioned nodes
    :edges (clj->js vertical-edges)  ; Only vertical edges within columns  
    :fitView false                   ; Let columns display naturally
    :defaultViewport {:zoom 1.0}}])  ; Full zoom for readability
```

This column-based approach is much simpler to implement, debug, and maintain while perfectly matching the intended visual design.