## A Spark-Postgres pipeline to ingest and query products data

### Dependencies and Instructions for code run
1. Add postgres JDBC driver [JAR](https://jdbc.postgresql.org/download/postgresql-42.2.14.jar) to `spark/jars/` directory
2. `pyspark --jars postgresql-42.2.13.jar`

### Notebook run creates three tables on the database 
1. `postman.products` - contains the data from CSV file.
2. `postman.no_of_products` - contains count aggregated data of the names of products.
3. `postman.products1` - contains `sku` grouped data with flexible `JSON` schema.

### The SQL file contains
1. Manual generation of the `JSON` schema for the `postman.products1` table
2. Adds `PRIMARY KEY` constrainsts on `postman.products1`