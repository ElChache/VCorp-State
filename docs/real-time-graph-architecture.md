# Real-Time Graph Architecture - Column-Based Implementation

1. **Group Jobs by Squad**: Use roles to assign jobs to columns
2. **Find First Jobs**: 
   - **Column 1**: Jobs whose inputs are NOT outputs of any other job
   - **Other Columns**: Jobs whose inputs match previous column's outputs
3. **Follow the Chain**: From first jobs, follow job → outputs → consuming jobs
4. **Stack Vertically**: Position jobs in chain order with simple Y spacing
5. **Add Collections**: Place input/output collections above/below their jobs
