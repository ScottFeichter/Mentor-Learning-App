

# SQL and SQLITE3

[SQLite3	2](#sqlite3)

[OVERVIEW	2](#overview)

[Terms	2](#terms)

[Relationships	2](#relationships)

[Join Tables	3](#join-tables)

[SQLITE3 PARTICULARS	3](#sqlite3-particulars)

[Case	3](#case)

[Misc	3](#misc)

[Sqlite3 Cli	3](#sqlite3-cli)

[Types	4](#types)

[Comparison Operators:	4](#comparison-operators:)

[Arithmetic Operators:	5](#arithmetic-operators:)

[Wildcards	5](#wildcards)

[Logic Operators:	5](#logic-operators:)

[Column Constraints	5](#column-constraints)

[TABLE CONSTRUCTION	6](#table-construction)

[Boilerplate	6](#boilerplate)

[Pragma	6](#pragma)

[Drop Table If Exists	6](#drop-table-if-exists)

[Dropping A Table (Different Use Case Then Above)	6](#dropping-a-table-\(different-use-case-then-above\))

[Creating A Table	6](#creating-a-table)

[Adding Primary Keys	6](#adding-primary-keys)

[Adding Foreign Keys	7](#adding-foreign-keys)

[Using Default Values	7](#using-default-values)

[CRUD OPERATIONS	7](#crud-operations)

[Posting To A Table (Inserting)	7](#posting-to-a-table-\(inserting\))

[Getting From A Table (Querying)	7](#getting-from-a-table-\(querying\))

[Putting/Patching A Table (Updating)	11](#putting/patching-a-table-\(updating\))

[Deleting From A Table (Deleting)	12](#deleting-from-a-table-\(deleting\))

[ADVANCED TOPICS	12](#advanced-topics)

[Other Important Sql Commands	12](#other-important-sql-commands)

[Aggregate Functions	13](#aggregate-functions)

[Sub Queries	14](#sub-queries)

[I. Sql Efficiency	14](#sql-efficiency)

[II. Intro To Sql Indexes	15](#intro-to-sql-indexes)

[III. Create Index	15](#create-index)

[IV. Benchmark Sql Queries	16](#benchmark-sql-queries)

[V. Sidenote:	16](#sidenote:)

[VI. N+1 Queries	17](#n+1-queries)

[VII. Avoiding N+1 Queries	18](#avoiding-n+1-queries)

[VIII. Intro To Sql Injection	18](#intro-to-sql-injection)

[IX. Avoiding Sql Injection Attacks	18](#avoiding-sql-injection-attacks)

[OLD NOTES	18](#old-notes)

# SQLite3 {#sqlite3}

## **OVERVIEW** {#overview}

### **Terms** {#terms}

**Data \-**  the specific values populated in a record as information describing and entity instance  
**Database** \- stored collection of data in a structure  
**Relational DB \-** store data in rows and columns of tables  
**SQL \-** a declarative language for manipulating data in databases  
**RDBMS** \- software that manages an RDB ie SQLite3  
**Schema** \- the collection of tables and procedures for a db  
**Table \-**  a db structure that describes one type of entity ie dogs (aka entities)  
**Record \-** a row of a table whose values describe an individual instance of an entity   
**Field \-** a column of a table that describes a property of an entity   
**Key \-** a column heading value of a table???  
**Primary Key \-** a key whose value will be a unique identifier for a record in a table  
**Foreign Key** \- a reference to the primary key column of another table  
**Join Table** \- keeps track of connections only, for a many to many (can have \> 2 foreign keys)    
**Statements** \- SQL keywords used to execute actions desired to perform on a db

### **Relationships** {#relationships}

### 

1. WHY?  
   1. establish connection between pair of tables   
   2. helps minimize redundant data  
   3. enables to fetch data through other tables  
        
2. 3 RELATIONSHIPS  
   1. One to One  
      1. not common  
      2. one row in table A references one and only one row in table B  
      3. each student has only one id and each id has only one student  
   2. One to Many  
      1. most common  
      2. one row in table A references one, many, or all rows in table B  
         1) One person can hold many job titles  
      3. A Foreign Key always goes on the many side of the one to many relationship  
   3. Many to Many  
      1. each row in table A can be references by many rows in table B  
         1) each person can read multiple books.  
         2) each book can be read by multiple people

         

### **Join Tables** {#join-tables}

what is a join table?

##  **SQLITE3 PARTICULARS** {#sqlite3-particulars}

### **Case** {#case}

### 

tables\_and\_columns\_use\_snake\_case\_and\_often\_plural\_ie\_grades

### **Misc** {#misc}

**whitespace** 	\= sqlite3 ignores 

**true/on/yes** 	\= 1  
**false/off/no** 	\= 0

### **Sqlite3 Cli** {#sqlite3-cli}

sqlite3 				\= open and run  
sqlite3 example.db		\= open and create new or run existing  
.read sqlfile.sql		\= read the .sql file to the .db file  
.schema			\= display the schema of the db  
.table				\= display the tables in the db  
.headers on			\= turn on display headers  
.mode box			\= display in a box  
.help				\= display all CLI commands for help  
SELECT \* FROM \<table\>	\= select all from a table and display  
ctrl \+ D				\= exit

### **Types** {#types}

### 

DB Numeric Types

- INTEGER(total number of digits)  
- DECIMAL(total number of digits, number of digits after decimal point)   
  - // called REAL in SQLite  
- BIGINT   
  - // SQLite uses NUMERIC which can auto convert between other types  
    

DB String Types

- VARCHAR  
- VARCHAR(maximum amount of chars)  
- TEXT


DB Boolean Types

- TRUE   
  - // SQLite3 uses 1 also  
- FALSE   
  - // SQLite3 uses 0 also  
    

DB Other Types

- BLOB   
  - // data stored exactly as it was input  
- TIMESTAMP   
  - // created\_at TIMESTAMP NOT NULL DEFAULT CURRENT\_TIMESTAMP

### 

### **Comparison Operators:**  {#comparison-operators:}

Operator	Meaning			Syntax  
\=		Equals				a \= b  
\!=		Not equal to			a \!= b  
\<\>		Not equal to			a \<\> b  
\>		Greater than			a \> b  
\<		Less than			a \< b  
\>=		Greater than or equal to	a \>= b  
\<=		Less than or equal to		a \<= b  
\!\<		Not less than			a \!\< b  
\!\>		Not greater than		a \!\> b	

### **Arithmetic Operators:**  {#arithmetic-operators:}

Operator	Meaning	Syntax  
\+		Addition	a \+ b  
\-		Subtraction	a \- b  
\*		Multiplication	a \* b  
/		Division	a / b  
%		Modulus	a % b (returns remainder)

### **Wildcards** {#wildcards}

### 

**%** 	\= zero or more characters  
**\_** 	\= single character  
**\[ \]** 	\= any single character within brackets  
**^** 	\= any character not in brackets  
**\-**  	\= any single character within a specific range	

### **Logic Operators:**  {#logic-operators:}

ALL		TRUE if all of the subquery values meet the condition.  
AND		TRUE if all the conditions separated by AND are TRUE.  
ANY		TRUE if any of the subquery values meet the condition.  
BETWEEN	TRUE if the operand is within the range of comparisons.  
EXISTS	TRUE if the subquery returns one or more records.  
IN		TRUE if the operand is equal to one of a list of expressions.  
LIKE		TRUE if the operand matches a pattern (accepts "wildcards").  
NOT		Displays a record if the condition(s) is NOT TRUE.  
OR		TRUE if any of the conditions separated by OR is TRUE.  
SOME		TRUE if any of the subquery values meet the condition.

### **Column Constraints** {#column-constraints}

### 

NULL				represents empty column value	  
NOT NULL			prevents null from being possible  
DEFAULT			if no value given will have default  
PRIMARY KEY			automatically unique id for a record  
FOREIGN KEY			references other table primary key  
AUTOINCREMENT		causes default value to be next integer  
UNIQUE			ensures all values in a column are different  
CHECK				ensures values in a column satisfy a condition  
CREATE INDEX		used to create/retrieve data from db quickly  
ON DELETE CASCADE  
ON DELETE SET NULL

## **TABLE CONSTRUCTION** {#table-construction}

### **Boilerplate** {#boilerplate}

PRAGMA foreign\_keys \= 1;  
DROP TABLE IF EXISTS \<table\>;

### **Pragma** {#pragma}

### 

1. Specific to sqlite3  
   1. PRAGMA foreign\_keys \= 1;  
      1. need to cause read in errors with foreign keys  
      2. tells sqlite3 to enforce foreign key constraints  
      3. 1 is on 0 is off

   

### **Drop Table If Exists** {#drop-table-if-exists}

### 

DROP TABLE IF EXISTS «table name»;

- likely to be in opposite order as CREATE TABLE

### **Dropping A Table (Different Use Case Then Above)** {#dropping-a-table-(different-use-case-then-above)}

### 

DROP TABLE «table name»;

### **Creating A Table** {#creating-a-table}

CREATE TABLE \<table\_name\> (  
\<key\> \<DATATYPE\>(optional constraint) NOT NULL,	  
    			);

### 

### **Adding Primary Keys** {#adding-primary-keys}

### 

CREATE TABLE \<table\_name\> (  
	id INTEGER PRIMARY KEY AUTOINCREMENT,  
	etc…  
);

### 

### **Adding Foreign Keys** {#adding-foreign-keys}

### 

*next line way:* // directly below the created column

\<column name\> INTEGER,  
FOREIGN KEY (\<column name\>) REFERENCES \<other table\> (id) 

*inline way:*

\<column\_name\> INTEGER REFERENCES \<other\_table\> (id)

### **Using Default Values** {#using-default-values}

### 

		\<key\> \<TYPE\> DEFAULT \<value\>

### 

## **CRUD OPERATIONS** {#crud-operations}

### **Posting To A Table (Inserting)** {#posting-to-a-table-(inserting)}

### 

Insert to a table \= 	INSERT INTO table\_name (column1\_name, column2\_name)

VALUES (column1\_value, column2\_value);

Multiple insert \= 	INSERT INTO friends (first\_name, last\_name)

VALUES

  ('Rose', 'Tyler'),

  ('Martha', 'Jones'),

  ('Donna', 'Noble'),

  ('River', 'Song');

Defaults only \= 	INSERT INTO table\_name DEFAULT VALUES;

### **Getting From A Table (Querying)** {#getting-from-a-table-(querying)}

### 

- always begin with SELECT \<column or \*\>  
- always next command FROM \<table\>  
- a basic query  
    
  SELECT \<column\>  
  FROM \<table\>  
    
- a basic query multiple  
    
  SELECT \<column1\>, \<column2\>  
  FROM \<table\>  
    
- a basic query all

	SELECT \*  
FROM \<table\>

- exclude duplicate rows from the set of result row  
    
  SELECT DISTINCT \<column\>  
  FROM \<table\>  
    
- a query with condition to filter  
    
  SELECT   
  FROM   
  WHERE \<condition\> // ie age \> 17

- a query with sorted results  
    
  SELECT   
  FROM   
  ORDER BY \<column\>  
  DESC/ASC  
    
- a query with sorted results by two criteria  
    
  SELECT   
  FROM   
  ORDER BY \<column1\> DESC/ASC, \<column1\> DESC/ASC


- a query with a limit to amount of results  
    
  SELECT 

  FROM

  WHERE  
  LIMIT \<number\>  
    
- a query for the first x amount of records  
    
  SELECT TOP \<number\> 

  FROM \<table\>  
  ???  
    
- a creative trick since bottom is not command for last x amount of records uses 	  
  	

		SELECT   
FROM   
ORDER BY \<column\>  
DESC  
LIMIT \<number\>

- a query filtering two conditions together  \- needs check

		SELECT   
		FROM  
		WHERE  
		AND  
		

- a query filtering two conditions if either  \- needs check

		SELECT   
		FROM  
		WHERE  
		OR

- a query filtering three conditions if either  \- needs check

		SELECT   
		FROM  
		WHERE  
		OR  
		OR

- a query using IN as shorthand for multiple OR to get either of the values \- needs check

		SELECT   
		FROM	  
		WHERE column   
IN (value1, value2)

- a query same as above but exclusionary  \- needs check

		SELECT   
		FROM	  
		WHERE column   
NOT IN (value1, value2)

- a query using BETWEEN to grab a range

		SELECT   
		FROM	  
		WHERE column   
BETWEEN value1 // note BETWEEN is inclusive\!\!\!  
AND value2

- a query exclusionary

		SELECT   
		FROM  
		WHERE NOT

- a query to grab nulls or not nulls

		SELECT   
		FROM	  
		WHERE column IS NULL/IS NOT NULL

- a query that skips the first 10 rows

		SELECT   
		FROM	  
		WHERE column   
OFFSET 10 // if a limit the offset must be last?

### 

#### **Join Query Example**

### 

SELECT tools.name, tools.price, purchases.quantity  
FROM tools  
JOIN purchases ON purchases.tool\_id \= tools.id  
WHERE tools.name LIKE 'Pipe%'  
ORDER BY tools.name ASC, purchases.quantity ASC;

#### **Multi Join Query Example**

### 

SELECT toys.name  
FROM toys  
JOIN cats ON cats.id \= toys.cat\_id  
JOIN cat\_owners ON cat\_owners.cat\_id \= cats.id  
JOIN owners ON owners.id \= cat\_owners.owners\_id  
WHERE owners.first\_name \= “Hermione”;

#### **Another Multi Join Query Example**

### 

SELECT toys.name  
FROM toys  
JOIN cats ON cats.id \= toys.cat\_id  
JOIN cat\_owners ON cat\_owners.cat\_id \= cats.id  
JOIN owners ON owners.id \= cat\_owners.owners\_id  
WHERE owners.first\_name \= “Hermione”;  
   

#### **Aliases**

### 

1. To avoid namespace collisions

   SELECT caption AS banana

   FROM posts;      

   

### **Putting/Patching A Table (Updating)** {#putting/patching-a-table-(updating)}

UPDATE table\_name  
SET column\_name \= \`new\_value\`  
WHERE condition \= \`condition\_value\` AND  con2 \= \`con\_val2\`;

#### **Silent Failures And Errors**

### 

1. When updating if no rows match the WHERE the UPDATE will fail silently.   
   1. There is no error message and the table is unchanged.   
2. Sometimes you will receive an error when updating data.   
   1. Example: Error: UNIQUE constraint failed: friends.id  
      1. If trying to add a new record with already taken id and id is Primary Key or set to Unique

### **Deleting From A Table (Deleting)** {#deleting-from-a-table-(deleting)}

DELETE FROM table\_name   
WHERE condition;

*a blank WHERE will delete everything\!\!\!\!*

*be mindful of ON DELETE CASCADE*  
*be mindful of ON DELETE SET NULL*

DELETE \* FROM puppies;

#### **On Delete** 

### 

- ON DELETE CASCADE  
  - delete something that something else relies on  
  - add this to the FK column  
  - on the child table  
      
- ON DELETE SET NULL  
  - sets value to null of something else relies on  
  - add this to the FK column  
  - *WILL NOT WORK IF THE COLUMN IS SET TO NOT NULL*


    

## 

## 

## **ADVANCED TOPICS** {#advanced-topics}

### **Other Important Sql Commands** {#other-important-sql-commands}

### 

CREATE DATABASE   
ALTER DATABASE   
ALTER TABLE   
CREATE INDEX   
DROP INDEX 

### **Aggregate Functions** {#aggregate-functions}

### 

1. EAGER LOADING  
2. LAZY LOADING  
   1. aggregate functions  
      1. place them inside SELECT statement  
      2. invoke them with ()  
         1) SELECT \<function\>(\<column\>) FROM (\<table\>);  
      3. if more than one column name in SELECT it will only return the first instance  
         1) SELECT image\_id, AVG(rating), rating  
         2) FROM ratings  
            

- average


SELECT AVG(rating)   
AS OverallAverage  
FROM ratings  
WHERE image\_id \= 4

- count  
  - how many records in column

SELECT COUNT(\*)   
FROM posts;

- min  
  - lowest in column

SELECT MIN(rating)   
FROM ratings  
WHERE image\_id \= 8;

- max  
  - highest in column

SELECT MAX(rating)   
FROM ratings  
WHERE image\_id \= 8;

- sum  
  - sum column in integers

SELECT SUM(rating)   
FROM ratings;

- total  
  - same as sum column but returns floating point

SELECT TOTAL(rating)   
FROM ratings;

- group by  
  - have aggregate happen on specific groups of data  
  - only way to return multiple things from an aggregate function  
  - will return a single instance per group

SELECT AVG(rating)   
FROM ratings  
GROUP BY image\_id;

- having  
  - acts like a WHERE clause for the groups made by GROUP BY

SELECT image\_id, AVG(rating)   
FROM ratings  
GROUP BY image\_id  
HAVING AVG(rating) \> 4;

### **Sub Queries** {#sub-queries}

## 

1. ### **Sql Efficiency** {#sql-efficiency}

   1. Efficiency is important in SQL so the user does not suffer a wait for loading or an unresponsive server, and consequently abandon your application.   
      1. Database connections cost a lot of time  
         1) Minimize number of database connections  
            1) Use subquery or JOIN to reduce operations  
      2. Large datasets are more resource intensive  
         1) Limit the amount returned to only those needed  
   2. If query execution time is bottlenecked consider an index  
      1. Creating an index on a field maintains and ordered record of table entries  
      2. This will slow down operations but dramatically increase search speed   
         1) via binary search against the ordered index

2. ### **Intro To Sql Indexes** {#intro-to-sql-indexes}

   1. **lookup \-** searching for rows in a table  *by column value*  
   2. **SQL Index \-** an applied data structure that SQL uses to make lookup faster  
      1. Sorts unordered data values in index column  
      2. using a PRIMARY KEY or UNIQUE automatically creates a SQL index  
         1) like a set()?  
              
   3. Time Complexity of operations  
      1. No index   
         1) Pros  
            1) Insertion/deletion O(1)  
         2) Cons  
            1) Search O(n)  
                 
      2. Yes index \= O(log n)  
         1) Pros  
            1) Search O(log n)  
         2) Cons  
            1) insertion/deletion O(log n)  
            2) more space required  
                 
   4. When to use indexes?  
      1. only use indexes for columns that will have more lookup operations that insertion/deletion operations  
           
   5. **B-tree \-**  similar to a binary search tree  
      1. SQL uses this to store data for the SQL index  
      2. values in indexed column will be sorted and paired with a pointer  
      3. pointer references database row  
         1) this appears to be indexing the foreign keys such that the many of a one to many is consolidated  
              
            

3. ### **Create Index** {#create-index}

     
   1. CREATE INDEX index\_name ON table\_name(column\_list);  
        
      1. first column in column list matters  
         1) use the most commonly filtered column first in list  
            1) this maximizes efficiency  
      2. if  a column already is defined as UNIQUE no need to create index  
         1) SQL automatically creates it under the hood  
              
   2. CREATE UNIQUE INDEX index\_name ON table\_name(column\_list);  
        
      1. this defines a UNIQUE constraint by creating an index on a column after table creation if it had not already been defined  
      2. can use UNIQUE constraint on a combination of columns  
         1) UNIQUE on multiple individual columns  
         2) UNIQUE across multiple columns

         

   3. DROP INDEX idx\_cookies\_type\_chocolate;  
        
      1. removes a SQL index  
           
   4. Searching for index names on a table  
        
      1. **.indexes** 		     // returns list of all indexes  
      2. **.indexes ?table\_name?** // returns list of all indexes on that table  
      3. **.indexes %keyword%**    // returns list of all indexes including keyword  
           
   5. Altering Indexed Tables  
      1. If you drop a column on a table that has an index defined, that column name will be removed from any index that it is included in.   
      2. It will NOT drop the entire index, but just remove the dropped column from the existing index. The index will retain its original name.  
         

4. ### **Benchmark Sql Queries** {#benchmark-sql-queries}

   

   1. **.timer on**  
      2. run an initial query to get initial time  
      3. EXPLAIN QUERY PLAN \[query\]  
         1) SCAN \- going through each row (no index)  
         2) SEARCH \- only visiting some rows (index thus binary search)  
            1) will be followed by the index being applied  
      4. if no index, add index  
      5. EXPLAIN QUERY PLAN again to confirm that the index is being used  
      6. run query again to get the new time  
      7. **.timer off**  
         

5. ### **Sidenote:**  {#sidenote:}

   1. THE EXERCISE FOR BENCHMARK HAS US RUN A SHELL SCRIPT

   

      1. set-upcommands.sh is the file in the root  
      2. it has several commands including:   
         1) cd, rm, npm install   
         2) sqlite3 practice.db “.read cats.sql”  
      3. **sh setup-commands.sh**   
         1) the command we used to run the script

      

      

6. ### **N+1 Queries** {#n+1-queries}

     
   1. Is when run initial query then iterate over those results and run an additional query on each result.  
      1. 1 represents the initial query  
      2. N represents the number of results  
         1) each result will need an additional query  
         2) the total therefore is N+1  
            1) perhaps easier said as results amount \+ 1?  
                 
   2. Each SQL query makes a single call to the database.   
      1. N grows as the database grows as records are inserted over time.   
         1) The cost grows as the database size grows.   
         2)   
   3. You can always avoid N+1  
      1. By planning and building a well constructed query.  
         1) To get all the data in one call to the db.  
              
   4. Try to never use N+1 queries such as this:  
      	SELECT \* FROM cats;  
      	SELECT \* FROM toys WHERE cat\_id \= 1;   
      SELECT \* FROM toys WHERE cat\_id \= 2;  
      SELECT \* FROM toys WHERE cat\_id \= 3;  
      SELECT \* FROM toys WHERE cat\_id \= 4;  
      SELECT \* FROM toys WHERE cat\_id \= 5;  
        
        
        
   5. Resolving N+1 Queries into a Single Query: 

      SELECT cats.\*, toys.\* 

      FROM cats 

      JOIN toys ON toys.id \= cats.toy\_id;

      

      

7. ### **Avoiding N+1 Queries** {#avoiding-n+1-queries}

   1. Recognize   
      1. How many queries am I making?  
         1) If the answer is 1 it is not an N+1  
         2) If the answer is more than 1 continue to next question  
      2. Is the number of queries dependent on the number of results of initial?  
         1) If the answer is no it is not an N+1  
         2) If the answer is yes it is N+1 (at least?)  
              
   2. Replace  
      1. Can it be done in a single query?  
      2. If not single, multiple but fewer than N+1?

         

         

8. ### **Intro To Sql Injection** {#intro-to-sql-injection}

   1. SQL Injection is raw SQL being entered in a search or form input field  
      1. this is bad  
      2. involves replacing a dynamic value in a SQL statement with SQL code   
      3. with harmful intent  
      4. all user inputs must be protected against SQL injections 

9. ### **Avoiding Sql Injection Attacks** {#avoiding-sql-injection-attacks}

   1. dynamic SQL statements must be sanitized\!\!\!  
      1. check if any SQL code inside the values   
      2. or wrapping the dynamic value so if there is it doesn’t execute  
   2. sanitizing with SQL is very difficult  
   3. instead you can using a built in sanitizer that comes with all ORMs  
      

   

# OLD NOTES {#old-notes}

DBeaver is an IDE for SQL

SQL is not case sensitive BUT THE DATA ENTRIES ARE\! 

Nonetheless you should make the KEYWORDS CAPITAL for readability

**Script** \- A script or scripting language is a computer language with a series of commands within a file capable of being executed without being compiled. (interpreted???)

Good examples of server-side scripting languages include Perl, PHP, and Python. 

The best example of a client side scripting language is JavaScript. A full list of scripting languages and other programming languages are found in our programming language definition.

Script files are not attached to the DB for example. You can have a script in a text file and run it in any DB so to speak. The text file may be saved as a .sql file for example but it is really just a text file. 

SELF STUDY TIME TOPICS (04/07/2022):

\>\>\>SQL

\-Query Basics

    **\-What is a result set?**

An SQL result set is a set of rows from a database, as well as metadata about the query such as the column names, and the types and sizes of each column. Depending on the database system, the number of rows in the result set may or may not be known. Usually, this number is not known up front because the result set is built on-the-fly.

A result set is effectively a table. The ORDER BY clause can be used in a query to impose a certain sort condition on the rows. Without that clause, there is no guarantee whatsoever on the order in which the rows are returned.

    **\-What does '\*' do in a query?**

\* is a metacharacter used in database while a select statement projection(columns).

In select statement \* means we want to retrieve all columns of that table.

    **\-How do you select specific columns?**  
To select columns, choose one of the following options: Type SELECT , followed by the names of the columns in the order that you want them to appear on the report. Use commas to separate the column names.

    **\-What is an alias?**

SQL aliases are used to give a table, or a column in a table, a temporary name.

Aliases are often used to make column names more readable.

An alias only exists for the duration of that query.

An alias is created with the AS keyword.

    **\-"where" keyword**

The WHERE clause is used to filter records.

It is used to extract only those records that fulfill a specified condition.

The WHERE clause is not only used in SELECT statements, it is also used in UPDATE, DELETE, etc.\!

    **\-"where not" keyword**

The WHERE clause can be combined with AND, OR, and NOT operators.

The AND and OR operators are used to filter records based on more than one condition:

The AND operator displays a record if all the conditions separated by AND are TRUE.  
The OR operator displays a record if any of the conditions separated by OR is TRUE.  
The NOT operator displays a record if the condition(s) is NOT TRUE.

    **\-How do I reference null values?**

It is not possible to test for NULL values with comparison operators, such as \=, \<, or \<\>.

We will have to use the IS NULL and IS NOT NULL operators instead.

[https://www.w3schools.com/sql/sql\_null\_values.asp](https://www.w3schools.com/sql/sql_null_values.asp)

    **\-"like" keyword**

The LIKE operator is used in a WHERE clause to search for a specified pattern in a column.

There are two wildcards often used in conjunction with the LIKE operator:

 The percent sign (%) represents zero, one, or multiple characters

 The underscore sign (\_) represents one, single character

    **\-"order by" keyword**

The SQL ORDER BY Keyword

The ORDER BY keyword is used to sort the result-set in ascending or descending order.

The ORDER BY keyword sorts the records in ascending order by default. To sort the records in descending order, use the DESC keyword.

    **\-"between" keyword**

The BETWEEN operator selects values within a given range. The values can be numbers, text, or dates.

The BETWEEN operator is inclusive: begin and end values are included.

    **\-"in" keyword**

The IN operator allows you to specify multiple values in a WHERE clause.

The IN operator is a shorthand for multiple OR conditions.

**\-What is an aggregate function?** 

    \-What are some examples of aggregate functions?  
    \-What do count, max, min, avg, sum, and distinct do?  
    \-"group by" keyword  
    \-"having" keyword

[https://www.tutorialgateway.org/sql-aggregate-functions/](https://www.tutorialgateway.org/sql-aggregate-functions/)

**\-What is a scalar function?**

    \-What are some examples of scalar functions?  
    \-What do abs, floor, ceil, trunc, upper, lower, length do?  
    \-How do I retreive the current time using SQL?

**\-What is a subquery?**

https://www.w3resource.com/sql/subqueries/understanding-sql-subqueries.php

**\-What is a natural key vs a surrogate key?**

Natural key is defined yourself \- surrogate key gets generated randomly

**\-What is a composite key?**

Combination of two different keys that are unique in value

**\-What is a candidate key?**

Candidate key is a single key or a group of multiple keys that uniquely identify rows in a table.

* SELECT \- extracts data from a database  
* UPDATE \- updates data in a database  
* DELETE \- deletes data from a database  
* INSERT INTO \- inserts new data into a database  
* CREATE DATABASE \- creates a new database  
* ALTER DATABASE \- modifies a database  
* CREATE TABLE \- creates a new table  
* ALTER TABLE \- modifies a table  
* DROP TABLE \- deletes a table  
* CREATE INDEX \- creates an index (search key)  
* DROP INDEX \- deletes an index

Multiplicity \- the relationship between tables/entities

Many to many   
One to many  
Many to one  
One to one