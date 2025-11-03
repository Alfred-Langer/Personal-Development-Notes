# What is SQL?

SQL or Structured Query Language is the language used when interacting with Relational Databases.It lets us easily access, manipulate, organize, and analyze large amounts of data through "queries".

# What are Databases and Tables?

Databases are structures in which we store large amounts of data within "tables". Tables are similar to spreadsheets in that data is structured within rows and columns. Only in Databases, the rows are known as "records" and the columns are known as "fields". Database tables also allow for much more capability than a typical spreadsheet because they can contain much more data, you can have relationships between the tables which can allow for better orgnaziation and data retrieval, and they can be encrypted.

# Fields and Records

Like mentioned before, tables contain fields(columns) and records(rows). Each record is an instance of of data for that table. Each field is a specific variable for that instance of data. For example, if we had a Database table called Students. That table could have fields such as FirstName, LastName, Grade, Ethnicity, etc. And let's say you had that information for 5 students, then you would have five records that can be inserted into your table.

# Relational Databases.

As metioned before, Databases that are Relational can allow for tables to be connected with each other and thus share information. For example if you had that table of Students and you added an extra field called TeacherId. And then you had a table of Teachers. Those tables would have a relationship/connection allowing you to answer questions like, "Who is the teacher for Izzy?", "How many students does Sharon have?", "Does every teacher have more than 20 students?"

# Querying Databases vs Spreadsheets

One of the biggest advantages of Databases is that multiple users can write queries simultaneously to access and analyze data without modifying the underlying database. When a database is queried, the data stored inside does not change; rather, the database information is accessed and presented according to the instructions in the query. This prevents the common spreadsheet problem where someone accidentally modifies data while trying to view it.
