# postman-pipeline

### Multiple approaches to create a spark pipelines for data  ingestiona and querying

### Points to achieve
- [x] Your code should follow concept of OOPS
- [x] Non-blocking parallel ingestion
- [x] Updating products in the table based on `sku` as the primary key
- [x] Count aggregated names of products.
- [x] Multiple notebook runs without truncating the created table

The spark-mongo approach is best suited for this task, as data modelling is the concern. Quering and updating documnts on constrainsts is relatively easier.