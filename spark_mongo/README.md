## A Spark-Mongo pipeline to ingest and query products data

### Dependencies and Instructions for code run
1. Add Mongo Spark Connector [JAR](https://repo1.maven.org/maven2/org/mongodb/spark/mongo-spark-connector_2.11/2.4.2/mongo-spark-connector_2.11-2.4.2.jar) to `spark/jars/` directory
2. `pyspark --jars mongo-spark-connector_2.11-2.4.2.jar`

### The .js file contains
1. Qeries for searching and updating as per imposed constrainsts on `sku` 