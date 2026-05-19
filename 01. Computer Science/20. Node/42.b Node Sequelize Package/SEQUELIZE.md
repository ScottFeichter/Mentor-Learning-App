# SEQUELIZE

[APPLE SILICON ISSUE	2](#apple-silicon-issue)

[SEQUELIZE DOCS	2](#sequelize-docs)

[SETUP BRIEF	3](#setup-brief)

[COMMANDS BRIEF	4](#commands-brief)

[CONSTRAINTS BRIEF	5](#constraints-brief)

[INTRO TO SEQUELIZE	7](#intro-to-sequelize)

[MIGRATIONS	10](#migrations)

[MODELS	14](#models)

[SEEDERS	17](#seeders)

[QUERYING AND CHANGING RECORDS	20](#querying-and-changing-records)

[INTERESTING SEQUELIZE OBJECTS	27](#interesting-sequelize-objects)

[FOREIGN KEY COLUMN MIGRATIONS	27](#foreign-key-column-migrations)

[JOIN TABLE MIGRATIONS	28](#join-table-migrations)

[ASSOCIATIONS	35](#associations)

[QUERY WITH ASSOCIATIONS	40](#query-with-associations)

[LAZY VS EAGER LOADING	41](#lazy-vs-eager-loading)

[EFFICIENT EXPRESS-SEQUELIZE API ENDPOINTS	42](#efficient-express-sequelize-api-endpoints)

[PAGINATION	44](#pagination)

[SEARCH FILTERS	46](#search-filters)

[ROLES AND PERMISSIONS	48](#roles-and-permissions)

[SCOPING MODEL ATTRIBUTES	48](#scoping-model-attributes)

[Default vs. Non-Default Scopes	50](#default-vs.-non-default-scopes)

[Include or Exclude attributes	50](#include-or-exclude-attributes)

[Filtering Results	51](#filtering-results)

[Dynamic Scopes	51](#dynamic-scopes)

[Include Associations	51](#include-associations)

[Defining Multiple Scopes	52](#defining-multiple-scopes)

[Invoking a Single Scope	53](#invoking-a-single-scope)

[Invoking a Dynamic Scope	53](#invoking-a-dynamic-scope)

[Invoking Multiple Scopes	53](#invoking-multiple-scopes)

[SEQUELIZE EXAMPLES FROM PA WEEK 11	54](#sequelize-examples-from-pa-week-11)

# 

# 

# 

# 

# 

# 

# 

# 

# 

# **APPLE SILICON ISSUE**  {#apple-silicon-issue}

1. 6.11.24 RESOLUTION WORKED IN MORNING

   

- cd in server folder  
- check package.json dependencies   
- delete sqlite3 (and trailing comma)  
- delete package-lock.json  
- npm install   
- cd .. to root  
- sh setup-commands.sh  
    
2. OR TRY:  
     
- cd in server folder  
- check package.json devDependencies   
- delete better-sqlite3 (and trailing comma)  
- npm install   
- npm install \-D better-sqlite3@latest

3. MAY HAVE TO DO:  
      
- node \-v  
- nvm use v18


# **SEQUELIZE DOCS** {#sequelize-docs}

- [https://sequelize.org/docs/v6/](https://sequelize.org/docs/v6/)  
- [https://sequelize.org/api/v6/identifiers.html](https://sequelize.org/api/v6/identifiers.html)

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# **SETUP BRIEF**  {#setup-brief}

# 

1. NPM OR NPX INSTALL   
- sqlite3  
- sequelize  
- sequelize-cli

2. SERVER/.SEQUELIZERC

   const path \= require("path");

   

   module.exports \= {

    config: path.resolve("config", "database.js"),

    "models-path": path.resolve("db", "models"),

    "seeders-path": path.resolve("db", "seeders"),

    "migrations-path": path.resolve("db", "migrations"),

   };

3. SERVER/CONFIG/DATABASE.JS 

	module.exports \= {  
  development: {  
    storage: process.env.DB\_FILE,  
    dialect: "sqlite",  
    seederStorage: "sequelize",  
    benchmark: true,  
    logQueryParameters: true,  
    typeValidation: true,  
    // logging: false  
  },  
};

4. SERVER/.ENV

	**DB\_FILE\=db/dev.db**

5. INIT

npx sequelize init

# 

# 

# 

# **COMMANDS BRIEF** {#commands-brief}

1. MIGRATIONS  
     
   npx sequelize-cli migration:generate \--name \<name\> 	*// creates blank migration*  
   npx dotenv sequelize-cli db:migrate 				*// runs the up*  
   npx dotenv sequelize-cli db:migrate:undo 			*// runs the down*  
   npx dotenv sequelize-cli db:migrate:undo:all 		*// runs the down*

# 

2. MODELS  
     
   npx sequelize-cli model:generate \--name \<model name\> \--attributes name:string,name:string,name:integer,name:boolean etc…  
   *note: this creates a migration file and a model file*  
     
   *note: model name does not have to be same as the table it represents but it is helpful to name it a singular model name of the plural table name ie table Users model User.*  
     
   *note: by default, when the table name is not given, Sequelize automatically pluralizes the model name and uses that as the table name.*

# 

3. SEEDERS  
     
   npx sequelize-cli seed:generate \--name \<name\> 		*// creates blank seed file*  
   npx dotenv sequelize-cli db:seed \--seed \<name of seed\> 	*// runs the up*  
   npx dotenv sequelize-cli db:seed:all 			*// runs the up*  
   npx dotenv sequelize-cli db:seed:undo 			*// runs the down*  
   npx dotenv sequelize db:seed:undo \--seed \<name of seeder\> 	*// runs the down*  
   npx dotenv sequelize-cli db:seed:undo:all 			*// runs the down*

# **CONSTRAINTS BRIEF** {#constraints-brief}

1. SQL CONSTRAINTS IN SEQUELIZE:  
     
   1. This is done in the migration files: 

      

   await queryInterface.createTable('Tablename', {\<column\>: {\<constraint\>:\<value\>}})

   

   2. Chart comparing SQL to SEQUEL equivalent:  
      1. SQL Constraints are done in the Migrations in Sequelize  
         1) They are matched in the Models in Sequelize  
      2. Validations are done in the Models in Sequelize  
         1) This is a more robust level of possibilities including scopes

       

   **SQL Constraint**	**Sequelize Migration Key**		**Sequelize Migration Values	Sequelize Model Key	Sequelize Model Values**

\<some data type\>	type:			Sequelize.(type)						  
AUTOINCREMENT	autoIncrement:		true/false							  
PRIMARY KEY	primaryKey:		true							  
FOREIGN KEY	(it’s complicated)   		(see associations)						  
UNIQUE		unique:			true							  
CHECK		check:			true							  
NOT NULL		allowNull:			false							  
NULL		allowNull:			true							  
DEFAULT 		defaultValue:		depends on type etc..						  
ON DELETE CASCADE											  
ON DELETE SET NULL											  
CREATE INDEX											

[To view info on sequelize MIGRATION Constraints start here](https://sequelize.org/docs/v6/other-topics/migrations/)

[To view info on Validations & Constraints look here](https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/)

[To view the sequelize MODEL DataTypes look here ¾ down page](https://sequelize.org/docs/v6/core-concepts/model-basics/)

	

3. Example:  
   

'use strict';  
/\*\* @type {import('sequelize-cli').Migration} \*/  
module.exports \= {  
  **async** up(queryInterface, Sequelize) {  
    **await** queryInterface.createTable('Airplanes', {  
      id: {  
        allowNull: **false**,  
        autoIncrement: **true**,  
        primaryKey: **true**,  
        type: Sequelize.INTEGER  
      },  
      airlineCode: {  
        type: Sequelize.STRING(2),  
        allowNull: **false**,  
        unique: **true**  
      },  
      createdAt: {  
        allowNull: **false**,  
        type: Sequelize.DATE,  
        defaultValue: Sequelize.literal("CURRENT\_TIMESTAMP")  
      },  
      inService: {  
        type: Sequelize.BOOLEAN,  
        defaultValue: **true**,  
        allowNull: **false**  
      },

2. MODEL VALIDATIONS  
   1. This is done in the models  
   2. Will match the constraints in migrations as much as possible  
   3. And have more validations that cannot be done in the migrations  
      1. Uses the validate {} object  
   4. Example that matches above:

| "use strict";const { Model } \= require("sequelize");const { maxNumPassengers } \= require("../../test/data/airplane-values");module.exports \= (sequelize, DataTypes) \=\> {  class Airplane extends Model {    static associate(models) {      // define association here    }  }  Airplane.init(    {      airlineCode: {        type: DataTypes.STRING,        allowNull: false,        unique: true,        validate: {          len: \[2, 2\],          isUppercase: true,        },      },      createdAt: {        type: DataTypes.DATE,        allowNull: false      },      inService: {        type: DataTypes.BOOLEAN,        defaultValue: true,        allowNull: false,      }, |
| :---- |

      

3. DATABASE CONSTRAINTS VS MODEL VALIDATIONS  
     
   1. write database constraints where you can  
   2. make the equivalent model-level validations  
   3. fill in the rest with model-level validations.

**MORE PRACTICAL USES FOR SEQUELIZE**

1. Security  
   1. Big topic  
        
2. User Auth  
   1. Authentication  
      1. Identifying yourself  
   2. Authorization  
      1. Permissions  
           
3. Building the project skeleton  
   1. AuthMe starting on Wednesday afternoon

# **INTRO TO SEQUELIZE** {#intro-to-sequelize}

# 

1. WHAT IS AN ORM?  
     
   1. Object Relational Mapping refers to a technique  
      1. a technique allowing object oriented approach to data in an rdb  
      2. instances of an object in code is mapped directly to rows of data  
      3. allows manipulation of the data using JS and trigger SQL commands  
      4. can complete CRUD actions without directly writing any SQL  
           
   2. Object Relational Mapper refers to the library ie Sequelize  
      1. ORM is the bridge between JS and the db  
      2. ORM will translate JS into SQL commands  
           
   3. Why ORMs are part of a smart data strategy  
      1. has built in functionality helps keep data valid and secure  
         1) custom validations

   

2. ELEMENTS OF SEQUELIZE  
     
   1. Models  
      1. a representation of data written into code  
      2. a blueprint for the data that is contained within a table in the db  
      3. in Sequelize a model is a JS class  
   2. Migrations  
      1. a JS file in Sequelize defining a specific change to a database schema  
         1) run a migration to create a new db table at start of new project  
         2) run a migration to change a db table on an existing project  
      2. information in a migration needs to be aligned with the model  
         1) Sequelize automatically generates migration files to match models  
   3. Seeds  
      1. a piece of sample or test data in Sequelize  
      2. seeder files are data files used to populate a test db or make a change  
         1) You are creating an application that requires a login, so you might create a seeder file to add a few demo users for your site.  
         2) You have a site with very basic user profiles, and you are adding new functionality to include profile pictures and cover images. You could use a seeder file to add new sample images to your demo user accounts.

3. INITIALIZE SEQUELIZE IN EXPRESS  
   1. install  
      1. sqlite3  
      2. sequelize  
      3. sequelize-cli  
           
   2. define files and configure folder structure  
      1. create .sequelizerc file to define:  
         1) Config  
         2) Models  
         3) Seeding  
         4) Migrations  
      2. .sequeilizerc example:  
           
         const path \= require("path");  
           
         module.exports \= {  
          config: path.resolve("config", "database.js"),  
          "models-path": path.resolve("db", "models"),  
          "seeders-path": path.resolve("db", "seeders"),  
          "migrations-path": path.resolve("db", "migrations"),  
         };  
           
         

           
      3. folder structure:

         

         ├── README.md

         └── server

             ├── app.js

             ├── config

             │   └── database.js

             ├── db

             │   ├── migrations

             │   ├── models

             │   │   └── index.js

             │   └── seeders

             ├── package-lock.json

             └── package.json

   3. database.js  
      1. in config folder  
      2. defines configurations for different dev environments  
         1) where database file will be  
         2) which SQL RDBMS is used  
         3) what logging options to use  
         4) what keys are being used  
         5) what type validations are being used  
      3. may look like this?:

         {

           "development": {

             "username": "root",

             "password": null,

             "database": "database\_development",

             "host": "127.0.0.1",

             "dialect": "mysql"

           },

           "test": {

             "username": "root",

             "password": null,

             "database": "database\_test",

             "host": "127.0.0.1",

             "dialect": "mysql"

           },

           "production": {

             "username": "root",

             "password": null,

             "database": "database\_production",

             "host": "127.0.0.1",

             "dialect": "mysql"

           }

         }

   4. customize database.js  
      1. SQLite for dev

         module.exports \= {

           development: {

             storage: process.env.DB\_FILE,

             dialect: "sqlite",

             seederStorage: "sequelize",

             benchmark: true,

             logQueryParameters: true,

             typeValidation: true,

             // logging: false

           },

         };

         

         The storage key is instructing Sequelize where to look for the database. This configuration is utilizing an environment variable DB\_FILE which will need to be created in the next step.

         The dialect key is telling Sequelize what type of database it is connecting to.

         The seederStorage key will allow Sequelize to track which seed files have been run in the database, allowing for easier seeding and unseeding.

         The benchmark key will log the time it takes for Sequelize to execute each query that is run.

         The logQueryParameters key will log the values used as parameters in the SQL queries that it generates. Without this key Sequelize will log the queries with the "$1", "$2", etc., placeholders, similar to the ? seen in the SQL queries you have previously written.

         The typeValidation key will prevent values from being inserted into the database that do not have the same type as described in the model (integer, for instance). This enforces a model-level validation for these data types.

         Finally, the logging key in this configuration is commented out. By default it has a value of "console.log", meaning each SQL query that is generated and run by Sequelize will be printed to the terminal with the console.log statement. 

         A false is commented out here as a reminder that this functionality can be disabled or overwritten with a different function if desired, something which may occasionally be helpful in debugging Express applications in order to clean up the console.

      2. PostgreSQL for prod

# **MIGRATIONS** {#migrations}

# 

1. WHY ARE MIGRATIONS IMPORTANT?  
   1. a migration is a .js file that includes code to change the database schema  
      1. up function defines the specific change that should be made   
      2. down function includes code that will undo the change in the up  
   2. migrations ensure version control  
      1. ordered, timestamped record of every change to schema  
      2. can revert  
   3. migrations support collaboration  
      1. anyone can see changes in the version control  
      2. everyone can be up to date with the correct version  
   4. migrations protect user data  
      1. safely review and test before deployment any changes  
      2. run in dev first then in prod

2. CREATE TABLE MIGRATION  
   1. Generate a migration file  
      1. npx sequelize-cli migration:generate \--name \<name\>  
         1) the name flag is for file name  
         2) the name will automatically include a timestamp?  
              
   2. the migration file will have the up/down queryInterface:  
        
      'use strict';  
        
      module.exports \= {  
        up: async (queryInterface, Sequelize) \=\> {  
          /\*\*  
           \* Add altering commands here.  
           \*  
           \* Example:  
           \* await queryInterface.createTable('users', { id: Sequelize.INTEGER });  
           \*/  
        },  
        
        down: async (queryInterface, Sequelize) \=\> {  
          /\*\*  
           \* Add reverting commands here.  
           \*  
           \* Example:  
           \* await queryInterface.dropTable('users');  
           \*/  
        }  
      };

3. DATABASE CONSTRAINTS  
   1. Restricting your database  
      1. constraints can serve as final validation  
      2. accepting raw data is less predictable and harder to parse  
      3. being specific with constraints helps maintain data integrity   
      4. more complex validations possible at Sequelize level not the SQL level  
           
   2. Basic Database Constraints

* Keys  
  * PRIMARY KEY  
  * FOREIGN KEY  
* Row uniqueness  
  * UNIQUE  
* Data types  
  * TEXT  
  * VARCHAR()  
  * INTEGER  
  * etc.  
* Column values  
  * NOT NULL

  3. Applying Constraints to your Database  
     1. This is done in the migration files for table creation


        await queryInterface.createTable('Users', {

          email: {

            type: Sequelize.STRING(255),

            allowNull: false,

            unique: true

          },

          firstName: {

            // Data type for the column is set using the \`type\` property

            type: Sequelize.STRING(20),

            // The \`NOT NULL\` constraint can be set here

            allowNull: false

          },

          lastName: {

            type: Sequelize.STRING(20)

          }

        });

  4. SQL constraints in Sequelize:

     **SQL Constraint**		**Sequelize Key**		**Sequelize Values**

     PRIMARY KEY		primaryKey		true

     UNIQUE			unique			true

     NOT NULL		allowNull		true, false

     (Data Type)		type			Sequelize.(type)

4. UP/DOWN MIGRATIONS  
     
   1. Using queryInterface to create a table  
      1. up is a callback with the promise to create a table  
      2. down is a callback with the promise to drop the table  
           
   2. Create table using up  
      1. .createTable() method of the queryInterface:  
         

      module.exports \= {  
        async up (queryInterface, Sequelize) \=\> {

         await queryInterface.createTable(\<TableName\>, { // plural table name  
           \<columnName\>: {  
             type: Sequelize.\<type\>,  
             allowNull: \<true|false\>,  
             unique: \<true|false\>,  
             references: {  
               model: {  
                 tableName: \<TableName\> // This is the plural table name  
               }  
             },  
             onDelete: \<'NO ACTION'|'CASCADE'|'SET NULL'\>,  
             onUpdate: \<'NO ACTION'|'CASCADE'|'SET NULL'\>,  
           }  
         });

    


   3. Dropping a table using down  
      1. .dropTable() method of the queryInterface

      'use strict';

      

      module.exports \= {

        async up (queryInterface, Sequelize) \=\> {

          /\*\*

           \* Add altering commands here.

           \*

           \* Example:

           \* await queryInterface.createTable('Person', { id: Sequelize.INTEGER });

           \*/

        },

      

        async down (queryInterface, Sequelize) \=\> {

          await queryInterface.dropTable(\<TableName\>);

        }

      };

   4. Add column using up  
      1. addColumn() method of the queryInterface:

      module.exports \= {

        async up (queryInterface, Sequelize) \=\> {

         await queryInteface.addColumn(\<TableName\>, \<columnName\>, {

             type: Sequelize.\<type\>,

             allowNull: \<true|false\>,

             unique: \<true|false\>,

             references: { model: \<TableName\> }, // This is the plural table name

             onDelete: \<'NO ACTION'|'CASCADE'|'SET NULL'\>,

             onUpdate: \<'NO ACTION'|'CASCADE'|'SET NULL'\>,

         });

         

   5. Remove column using down  
      1. removeColumn of the queryInterface:  
         

      async down (queryInterface, Sequelize) \=\> {  
      await queryInterface.removeColumn(\<TableName\>, \<columnName\>);  
        	}  
          };

           
   6. Running Migrations  
      1. define up and down  
      2. run db:migrate command:

   \> npx dotenv sequelize db:migrate

5. UNDOING AND RERUNNING MIGRATIONS  
   1. Reversing a migration  
      1. use the opposite of what was done???  
           
   2. Undoing the Last Migration  
      \> npx dotenv sequelize db:migrate:undo  
        
   3. Undoing all Migrations

   \> npx dotenv sequelize db:migrate:undo:all

   4. Redoing a Migration

   \> npx dotenv sequelize db:migrate

 


# **MODELS** {#models}

1. WHAT ARE SEQUELIZE MODELS?  
   1. Sequelize Models  
      1. represent the tables in your database in an object-oriented way  
      2. each model is a class in JS  
      3. the models class represents the entire table that it models  
      4. an instance of that model class can represent a single record in the table

         const { Model } \= require('sequelize');

         module.exports \= (sequelize, DataTypes) \=\> {

           class User extends Model {

             // Helper method for defining associations.

             static associate(models) {

               // define association here

             }

           };

           User.init({

             // Model attributes are defined here

             firstName: {

               type: DataTypes.STRING,

               allowNull: false

             },

             lastName: {

               type: DataTypes.STRING,

              allowNull: false

            },

            bio: {

              type: DataTypes.TEXT

               // allowNull defaults to true

             }

           }, {

             // Other model options go here

             sequelize, // We need to pass the connection instance

             modelName: 'User' // We need to choose the model name

           });

         

           return User;

         };

   2. Extending the Functionality of a Sequelize Model  
      1. model is not limited to the default properties and methods  
      2. can add custom properties and methods  
           
   3. Adding Validations to Models  
      1. can add validations to models   
      2. ensure data passes specific tests before SQL is generated  
           
   4. How to use Models  
      1. import the file  
         **db/model/index.js**   
           
      2. destructure the classes  
         const { Model1, Model2 } \= require('db/model')  
           
      3. to create a new model using JS class syntax  
         const instance1 \= new Model1()  
           
      4. can also generate a model by running:  
         

\> npx sequelize model:generate \--name User \--attributes name:string

5. NOTE:   
   1. It is important to note that models have names, but these names do not have to be the same name as the table it represents.   
      2. Usually, models have singular names like User, while the tables, created by the migration file, will have pluralized names such as Users.

2. MODEL VALIDATIONS  
   1. Performing validations on your data  
   2. Set up your model to use model-level validations  
   3. Applying model-level validations  
      1. Equivalent database constraints  
      2. Built-in validators  
      3. Custom validators  
      4. Model-wide validators

3. WHEN TO ADD DATABASE CONSTRAINTS VS MODEL VALIDATIONS  
   1. DB-level constraints are last line of defense before the point of no return  
        
      1. You should write as many of these as you can, even if they aren't necessarily as powerful or precise as model-level validations.   
           
      2. Remember, these constraints include labels for Primary Keys, Foreign Keys, Unique values, Not Null values, etc.  
           
   2. Model level validations can do same and more of db level  
        
      1. You should also write model-level validations that are equivalent and/or similar to your database-level constraints, just as a double-check to be as bulletproof as possible.   
           
      2. But otherwise, your model-level validations should perform checks that simply cannot be done with database constraints, like making sure an e-mail is formatted properly, or if a phone number is valid.

   3. To keep things short and simple:   
        
      1. write database constraints where you can  
      2. make the equivalent model-level validations  
      3. fill in the rest with model-level validations.

# **SEEDERS** {#seeders}

1. WHAT ARE SEQUELIZE SEEDERS?  
     
   1. How seeders fit into migrations  
      1. seeder files contain instructions on how to seed the db  
      2. this is inserting an initial set of data to populate the db  
      3. useful for testing  
           
   2. to generate a seeder:  
        
      \> npx sequelize seed:generate \--name \<name of seed\>  
      

     
2. UP/DOWN SEEDERS  
     
   1. Creating your seeder files:  
      1. run in terminal:  
         \> npx sequelize seed:generate \--name \<name of seed\>  
      2. seeder file name will be preceded by a date:  
           
         XXXXXXXXXXXXXX-name-of-seeder.js  
           
      3. file will look like this:  
         'use strict';  
           
         module.exports \= {  
           up: async up (queryInterface, Sequelize) \=\> {  
             /\*\*  
              \* Add seed commands here.  
              \*  
              \* Example:  
              \* await queryInterface.bulkInsert('People', \[{  
              \*   name: 'John Doe',  
              \*   isBetaMember: false  
              \* }\], {});  
             \*/  
           },  
           
           down: async down (queryInterface, Sequelize) \=\> {  
             /\*\*  
              \* Add commands to revert seed here.  
              \*  
              \* Example:  
              \* await queryInterface.bulkDelete('People', null, {});  
              \*/  
           }  
         };  
   2. Defining your Ups and Downs

      1. Up  
         1) Inserting seed data  
            1) can use queryInterface.bulkInsert(): *// not recommended*

            

               up: async up (queryInterface, Sequelize) \=\> {

                   await queryInterface.bulkInsert('People', \[

                     {

                       name: 'John Doe',

                     },

                     {

                       name: 'Jane Doe',

                     }

                   \]);

                 },

               1) it has limitations:  
                  1) does NOT auto createdAt and updatedAt  
                  2) does NOT run model level validations

                  

            2) can instead use Model.bulkCreate()  *// recommended*  
                 
               1) must import the model into the seeder file:

               

            const { Person } \= require('../db/models');

               2) then call the static method:  
                  

               await Person.bulkCreate(\[  
                 {  
                   name: 'John Doe',  
                   isBetaMember: false  
                 }  
               \], { validate: true });

         2) Commit seeds command  
            1) terminal run:

            \> npx dotenv sequelize db:seed:all

          


      2. Down  
         1) Undo (delete) inserted seeds  
            1) can use queryInterface.bulkDelete():  
                 
               async down (queryInterface, Sequelize) {  
                   // Delete from People using queryInterface.bulkDelete:  
                   await queryInterface.bulkDelete(  
                     'People',   
                     {  
                       name: 'John Doe',  
                       isBetaMember: false  
                     }  
                   );  
                 }  
            2) Note that it is on you as the developer to define what to delete.   
            3) Make sure to be specific here and delete only the seed entries and not the entire table\!  
                 
         2) Undo seeds command  
            1) terminal run:

         \> npx dotenv sequelize db:seed:undo:all

3. QUERYINTERFACE.BULKINSERT VS. MODEL.BULKCREATE  
     
   1. Summary  
      1. The App Academy recommended way to insert seed data is to use Model.bulkCreate instead of queryInterface.bulkInsert to seed your data.   
           
      2. However, if you choose to use queryInterface.bulkInsert anyway, keep the limitations of the method in mind. Who knows? Sometimes limitations might actually be a desired feature for some.  
           
4. DYNAMIC SEEDING  
   1. Create seeds without having to hard code foreign key.  
   2. Better when working with associations   
      1. Data is responsive to changes in schema  
   3. Four steps:  
      1. Import the models into the seeder file  
      2. Establish a single data source for the seeds  
      3. Find the data that you want to create dynamic sees for  
      4. Insert related data using the found data as foreign key values

   

   'use strict';

   

   // 1\. Import the models into the seeder file

   const { Person, Job } \= require('../models');

   

   // 2\. Establish a single data source for the seeds

   const personJobs \= \[

     {

       fullName: 'John Doe',

       jobs: \[

         { company: 'Starbucks', role: 'Barista'},

         { company: 'Geico', role: 'Insurance Salesperson'}

       \]

     },

     {

       fullName: 'Jane Doe',

       jobs: \[

         { company: 'WNBA', role: 'Basketball Player'}

       \]

     }

   \]

   

   module.exports \= {

     up: async (queryInterface, Sequelize) \=\> {

   

       // 3\. Find the data that you want to create dynamic seeds for

       for (let personInfo of personJobs) {

         const { fullName, jobs } \= personInfo;

         const person \= await Person.findOne({ where: { fullName } });

   

         // 4\. Insert related data using the found data as foreign key values

         for (let jobInfo of jobs) {

           await Job.create({ ...jobInfo, personId: person.id });

         }

       }

     },

   

     down: async (queryInterface, Sequelize) \=\> {

       // Iterate over the personJobs array, then over the nested array of 

       // jobs, destroying each job record as it is encountered.

       for (let personInfo of personJobs) {

         const { fullName, jobs } \= personInfo;

         const person \= await Person.findOne({ where: { fullName } });

   

         for (let jobInfo of jobs) {

           await Job.destroy({ where: { ...jobInfo, personId: person.id } });

         }

       }

     }

   };

   

   4. This example uses Model.create and assigns foreign key dynamically  
      1. There are alternative approaches to insert associated data  
         1) ONE-TO-MANY: Instance.create\<ModelName\>   
         2) MANY-TO-MANY: Instance.add\<ModelName\>  
              
5. CONSIDERING EFFICIENCY IN SEEDER FILES  
   1. As you look at these examples, what do you notice about efficiency? The up function and the down function both rely on nested for loops.  
   2. Because you run queries in seeder files very infrequently, it does not really matter in the long run whether you use a more efficient approach over a less efficient one (such as nested for loops).   
   3. This is because the queries will only be run when you initially seed the database or update those seeds.   
   4. It is much more important to invest resources in increasing the efficiency of queries that will be run when the end users interact with the data, as the efficiency of those queries will have a direct impact on the application itself and the user experience.   
   5. In the case of seeded files, readability and understandability are more important than efficiency, as it will support collaboration with other developers.

 


# **QUERYING AND CHANGING RECORDS** {#querying-and-changing-records}

1. SELECT Statements in Sequelize  
   1. [Finder methods](https://sequelize.org/docs/v6/core-concepts/model-querying-finders/)  
      1.   
      2. findAll()  
         1) all attributes, all instances:

            SELECT \* FROM Users;

            const users \= await User.findAll();

         2) specified attributes, all instances:  
            SELECT firstName, lastName From Users;  
            const users \= await User.findAll({  
                attributes: \['firstName', 'lastName'\]  
            });

      3. findOne()

         

         1) specified attributes, one instance:  
              
            SELECT firstName, lastName FROM Users LIMIT 1

         const user \= await User.findOne({  
             	    attributes: \['firstName', 'lastName'\]  
         });

         

         

2. WHERE Clauses in Sequelize  
   1. The basic WHERE clause  
      1. use with finder methods:

         SELECT firstName, lastName FROM Users 

             WHERE lastName \= 'Smith';

         const smiths \= Users.findAll({

             attributes: \['firstName', 'lastName'\],

             where: {

                 lastName: 'Smith'

             }

         });

   2. [sequelize.Op](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#applying-where-clauses)  
      1. can do exact matches or use comparison operators  
         1) import the Op

         const { Op } \= require('sequelize');

         2) implement for exact match  
            SELECT \* FROM Users  
            WHERE id \= 3;  
            Users.findOne({  
                where: {  
                    id: 3  
                }  
            })  
         3) implement for comparisons  
            SELECT \* FROM Users  
            WHERE id \= 3;  
            Users.findOne({  
                where: {  
                    id: {  
                        \[Op.gte\]: 3  
                    }  
                }  
            })

         4) implement for AND conditional  
            

         SELECT \* FROM Users  
         

    				WHERE firstName \= 'John' AND age \= 20;

Users.findAll({  
    where: {  
        firstName: 'John',  
        age: 20  
    }  
})

5) implement for OR conditional

   SELECT \* FROM Users

   

   WHERE lastName \= 'Smith' OR age \> 60 LIMIT 1;

   

   Users.findOne({

       where: {

           \[Op.or\]: \[

               {

                   lastName: 'Smith'

               },

               {

                   age: {

                       \[Op.gt\]: 60

                   }

               }

           \]

       }

   })

3. INSERT Data in Sequelize  
   1. Multiple Options in Sequelize  
        
      1. Using build and save to persist a single record  
         1) builds a non-persistent instance using Model.build  
         2) must use Instance.save on the instance to have it persist

         // Generate a new instance of the Dog model

         const newDog \= Dog.build({ dogName: "Fido", breed: "Dalmatian" })

         // Check if Fido is in the database

         await Dog.findOne({ where: { dogName: "Fido" } }); // returns null

         // Insert the newDog instance into the database

         await newDog.save();

         // Check if Fido is in the database

         await Dog.findOne({ where: { dogName: "Fido" } }); // returns record

      2. Using create to persist a single record  
         1) runs both build and save with a single method Model.create

         // Create and save a new instance of the Dog model to the database

         const newDog \= await Dog.create({ dogName: "Fido", breed: "Dalmatian" })

         // Check if Fido is in the database

         await Dog.findOne({ where: { dogName: "Fido" } }); // returns record

      3. Using bulkCreate to persist multiple records at once  
         1) takes an array of instances and saves them

         // Create three new instances of the Dog model and save the instances to the database

         const newDog \= await Dog.bulkCreate(\[

             { dogName: "Fido", breed: "Dalmatian" },

             { dogName: "Maggie", breed: "Golden Retriever" },

             { dogName: "Toby", breed: "Poodle" }

         \])

         // Check if the new dogs are in the database

             const databaseDogs \= await Dog.findAll(); // returns the records of all dogs

   2.  build and save VS create  
        
      1. use create if you don’t need to do further manipulation or validation  
      2. use build and save if you need to do further manipulation or validation

   3. Common error messages when inserting data  
      1. model level validation fails  
         1) ValidationError  
         2) use instance.validate method to run model validations before save

         // Generate a new instance of the Dog model

         const newDog \= Dog.build({ dogName: "Fido" })

         

         // Validate the new dog object

         await newDog.validate() // fails the validation with a SequelizeValidationError

         

         // Manipulate the new dog object

         newDog.breed \= "Dalmatian"

         

         // Validate the new dog object

         await newDog.validate() // passes the validation

         

         // Save the new dog record to the database table

         await newDog.save()

      2. database level constraint fails  
         1) model level validation should mirror database constraints as much as possible   
         2) additionally, model level validation can do more than only sql constraints

   

4. UPDATE DATA IN SEQUELIZE  
   1. The UPDATE statement in SQL

      UPDATE birds

      SET longitude \= 81.623863

      WHERE species \= "Great Blue Heron"

   2. Updating the instance and save the record  
      1. Find the record:  
         const greatBlueHeron \= await Bird.findOne({ where: { species: "Great Blue Heron" } });  
           
      2. Update the record  
         1) Update the attribute by re-assigning a single value:

         greatBlueHeron.longitude \= 81.623863;

         2) Or use the set method to change one or more values:  
            greatBlueHeron.set({  
                longitude: 81.623863,  
                latitude: 58.936047  
            });

      3. Save the updated record:

      await greatBlueHeron.save();

   3. The Instance.update method will both set the new attributes on the instance as well as save those changes in the database table.  
        
      1. Find the record:  
         const greatBlueHeron \= await Bird.findOne({ where: { species: "Great Blue Heron" } });

      2. Update and save at same time with update method:  
         await greatBlueHeron.update({  
             longitude: 81.623863,  
             latitude: 58.936047  
         });  
   4. Updating multiple records at once  
      1. use the Model.update method called on itself

         await Bird.update(

           { latitude: 70.0000, longitude: 130.333333 }, // attributes and values to update

           { where:

              { id: { \[Op.or\]: \[1, 2\] } }  // specific records to update

           }

         );

   5. Updating records in seeder files  
      1. Similar to inserting data, you can use a queryInterface method to perform a bulk update on your seed data:  
         await queryInterface.bulkUpdate(table, data, options);

5. DELETE DATA IN SEQUELIZE  
   1. The DELETE statement in SQL  
        
      DELETE FROM \[table\] WHERE \[condition\]  
   2. Deleting a single recording   
      1. Find the record by id

   const greatBlueHeron \= await Bird.findOne({ where: { id: 3 } });

      2. Delete the record using the destroy method  
         

      await greatBlueHeron.destroy();   
   3. To delete multiple records using Sequelize, you take the same approach. 

      await Bird.destroy(

          { where: 

              { id: { \[Op.lte\]: 2 } }  // specific records to delete

          }

      );

6. ORDER QUERY RESULTS IN SEQUELIZE  
     
   1. Using the order key of the [options object](https://sequelize.org/api/v6/class/src/model.js~model#static-method-findAll)?  
        
      1. this one is tricky sequelize does some automation?  
      2. from any finder method  
         

      const student \= await Student.findByPk(5);  
      const submissions \= await student.getSubmissions({  
          order: \[\['createdAt', 'DESC'\]\]  
      });  
      // Makes the following SQL query:  
      // SELECT 'Submissions'.\* FROM 'Submissions' WHERE 'studentId' \= ? ORDER BY 'createdAt' DESC;

   2. Ordering by multiple attributes  
      1. add additional nested array elements in the order array  
         

      const teacher \= await Teacher.findByPk(2);  
      const assignments \= await teacher.getAssignments({  
          order: \[ \['name', 'ASC'\], \['createdAt', 'DESC'\] \]  
      });  
      // Makes the following SQL query:  
      // SELECT 'Assignments'.\* FROM 'Assignments' WHERE 'teacherId' \= ? ORDER BY 'name' ASC, 'createdAt' DESC;

         

   3. Ordering by association  
      1. Define the associated model name within the order key

      const teacher \= await Teacher.findByPk(2);

      const assignments \= await teacher.getAssignments({

          // include associated Course data with each assignment

          include: { model: Course },

          // order results by course title, then assignment name

          order: \[ \[Course, 'title'\], \['name', 'ASC'\] \]

      });

# **INTERESTING SEQUELIZE OBJECTS** {#interesting-sequelize-objects}

1. THE OPERATOR OBJECT { Op }  
   1. [https://sequelize.org/docs/v7/querying/operators/](https://sequelize.org/docs/v7/querying/operators/)  
   2. allows for use of operators to build complex queries  
   3. uses strange abbreviations such as gt for greater than  
   4. must be imported

	const { Op } \= require("sequelize");

OR

import { Op } from '@sequelize/core';

OR

const Op \= Sequelize.Op;

2. THE OPTIONS OBJECT  
   1. [https://sequelize.org/api/v6/class/src/model.js\~model\#static-method-findAll](https://sequelize.org/api/v6/class/src/model.js~model#static-method-findAll)  
   2. and argument of the finder methods  
        
3. RAW SQL LITERALS  
   1. [https://sequelize.org/docs/v7/querying/raw-queries/](https://sequelize.org/docs/v7/querying/raw-queries/)  
   2. allows for writing raw SQL in sequelize  
   3. must be imported  
      

	import { sql } from '@sequelize/core';

# 

# **FOREIGN KEY COLUMN MIGRATIONS** {#foreign-key-column-migrations}

# 

1. DEFINING RELATIONSHIPS IN SQL WITH SEQUELIZE  
   1. add a foreign key column to the createTable migration  
      1. include a references attribute  
         1) specify the table and column the fk belongs to  
            1) can include onDelete attribute for CASCADE or SET NULL

      queryInterface.createTable('TableOneName', {

          id: {

              type: Sequelize.INTEGER,

              primaryKey: true

          },

      

          // ... other columns within table

      

          tableTwoId: {

              type: Sequelize.INTEGER,

              references: {

                  model: 'TableTwoName',

                  key: 'id',

              },

              onDelete: 'cascade'

          }

      })

      

   ***NOTE:** The references attribute is an object that has two keys. The model key is the **name of the table, NOT the name of the model** (is a little misleading).* 

   ***NOTE:** The key key is the name of the column in the referenced table that connects with the foreign key column (usually the primary key).*

   ***NOTE:** The references attribute should only be defined for foreign key columns.*

# **JOIN TABLE MIGRATIONS** {#join-table-migrations}

1. JOIN TABLE IN SQL  
   1. Many to Many  
      1. JOIN table should have two foreign key columns  
         1) one references a column in the first table  
         2) one references a column in the second table  
            

   Below is a database schema with an example of a many-to-many relationship created between the Movies table and the Genres table.  
   ![JOIN-table-db-schema][image1]  
   MovieGenres is a JOIN table that has:  
* a movieId foreign key that references the id primary key of the Movies table  
* a genreId foreign key that references the id primary key of the Genres table  
  The JOIN table, MovieGenres allows the Movies table to establish a many-to-many relationship with the Genre table. A movie can have one or more genres and a genre can contain multiple movies through the JOIN table.

    
    
2. CREATING ASSOCIATIONS/JOIN TABLE USING SEQUELIZE  
     
   1. One to Many with pre-existing tables?  
      1. Generate migration with descriptive name  
         1) npx sequelize migration:generate \--name add-sport-id-to-teams  
      2. In the migration file use queryInterface to add column w reference  
         1) add the up and down  
            'use strict';  
              
            /\*\* @type {import('sequelize-cli').Migration} \*/  
            module.exports \= {  
             async up (queryInterface, Sequelize) {  
               await queryInterface.addColumn(  
                 'Teams',  
                 'sportId',  
                 {  
                   type: Sequelize.INTEGER,  
                   references: {model: 'Sports'},  
                   onDelete: 'CASCADE',  
                   allowNull: false  
                 }  
               )  
             },  
              
             async down (queryInterface, Sequelize) {  
               await queryInterface.removeColumn('Teams', 'sportId')  
             }  
            };

     
      3. Run the migration to check  
         1) npx dotenv sequelize db:migrate  
      4. check the schema in sqlite3  
         1) sqlite3 db/dev.db ".schema"   
      5. In model file update the corresponding model in the Model.init with new column, equivalent constraints, and any additional validations  
         1) note: there will not be a references here as it goes in static associations \- see next step  
      6. In the model update the static associations   
         1) match the corresponding references from the migration file  
            'use strict';  
            const {  
             Model  
            } \= require('sequelize');  
            module.exports \= (sequelize, DataTypes) \=\> {  
             class Team extends Model {  
               static associate(models) {  
                 Team.belongsTo(models.Sport, {foreignKey: "sportId"});  
               }  
             }  
             Team.init({  
               name: {  
                 type: DataTypes.STRING,  
               },  
               homeCity: {  
                 type: DataTypes.STRING,  
               },  
               sportId: {  
                 type: DataTypes.INTEGER,  
              
               },  
             }, {  
               sequelize,  
               modelName: 'Team',  
             });  
             return Team;  
            };  
            

     
      7. Update the model of the related entity with the appropriate static associations  
         1) for example:  
            'use strict';  
            const {  
             Model  
            } \= require('sequelize');  
            module.exports \= (sequelize, DataTypes) \=\> {  
             class Sport extends Model {  
               static associate(models) {  
                 Sport.hasMany(  
                   models.Team,  
                   {  
                     foreignKey: 'sportId',  
                     onDelete: "CASCADE",  
                     hooks: true}  
                   )  
               }  
             }  
             Sport.init({  
               name: {  
                 type: DataTypes.STRING,  
                 allowNull: false,  
                 unique: true,  
               },  
             }, {  
               sequelize,  
               modelName: 'Sport',  
             });  
             return Sport;  
            };  
              
          


   2.  Many to Many some pre-existing but new table and model are needed

     

1. Use model command to generate model and migration  
   1) npx sequelize model:generate \--name DraftPick \--attributes fandId:integer,playerId:integer  
      2) note: singular name bc using model generate  
         1) it will auto plural the migration/table  
      2. Go in to the newly created migration file  
         1) Add the references   
            1) Don’t forget about the stupid {model: plural table name}  
         2) Add additional constraints as needed   
            1) ie onDelete  
            2) ie createdAt and updatedAt defaultValue: Sequelize.literal(“CURRENT\_TIMESTAMP”)  
      3. Run migrations  
      4. Check schema  
      5. In model file of JOIN to update the Model.init with new column, equivalent constraints, and any additional validations IF NEEDED (probably not needed):  
         1) note: there will NOT be a references here   
         2) note: there will NOT be static associations  
      6. In the model files of NOT THE JOIN but the others update the static associations   
         1) match the corresponding references from the migration file AS NEEDED (probably not needed)  
         2) create the static associate methods:  
            'use strict';  
            const {  
             Model  
            } \= require('sequelize');  
            module.exports \= (sequelize, DataTypes) \=\> {  
             class Fan extends Model {  
               /\*\*  
                \* Helper method for defining associations.  
                \* This method is not a part of Sequelize lifecycle.  
                \* The \`models/index\` file will call this method automatically.  
                \*/  
               static associate(models) {  
                 // define association here  
                 Fan.belongsToMany(models.Player, {  
                   through: models.DraftPick,  
                   foreignKey: 'fanId',  
                   otherKey: 'playerId'  
              
                 })  
               }  
             }  
             Fan.init({  
               username: {  
                 type: DataTypes.STRING,  
                 allowNull: false,  
                 unique: true,  
               },  
             }, {  
               sequelize,  
               modelName: 'Fan',  
             });  
             return Fan;  
            };  
              
              
            

              
      7. Update the model of the related entity with the appropriate static associations

         'use strict';

         const {

          Model

         } \= require('sequelize');

         module.exports \= (sequelize, DataTypes) \=\> {

          class Player extends Model {

            /\*\*

             \* Helper method for defining associations.

             \* This method is not a part of Sequelize lifecycle.

             \* The \`models/index\` file will call this method automatically.

             \*/

            static associate(models) {

              // define association here

              Player.belongsTo(models.Team, {

                foreignKey: 'currentTeamId'

              });

              Player.belongsToMany(models.Fan, {

                through: models.DraftPick,

                foreignKey: 'playerId',

                otherKey: 'fanId'

              })

            }

          }

          Player.init({

            firstName: {

              type: DataTypes.STRING,

              allowNull: false,

            },

            lastName: {

              type: DataTypes.STRING,

              allowNull: false,

            },

            number: {

              type: DataTypes.INTEGER,

              allowNull: false,

            },

            isRetired: {

              type: DataTypes.BOOLEAN,

              allowNull: false,

              defaultValue: false,

            },

            currentTeamId: {

              type: DataTypes.INTEGER,

            }

          }, {

            sequelize,

            modelName: 'Player',

          });

          return Player;

         };

         

       


      8. Run seeds

      

   3. Many to Many with no pre-existing tables  
      1. Generate models for creating the two tables that it’s connecting

      

npx sequelize model:generate \--name Movie \--attributes title:string  
npx sequelize model:generate \--name Genre \--attributes genre:string

2. Then add model for creating the JOIN table 

   npx sequelize model:generate \--name MovieGenres \--attributes movieId:integer,genreId:integer

   3. Then edit the migration file to show the references

   // up function in the migration file to create the MovieGenres table

   up: async (queryInterface, Sequelize) \=\> {

     await queryInterface.createTable('MovieGenres', {

       id: {

         allowNull: false,

         autoIncrement: true,

         primaryKey: true,

         type: Sequelize.INTEGER

       },

       movieId: {

         type: Sequelize.INTEGER,

         allowNull: false,

         references: { model: 'Movies' } //need key?

       },

       genreId: {

         type: Sequelize.INTEGER,

         allowNull: false,

         references: { model: 'Genres' } // need key?

       },

       createdAt: {

         allowNull: false,

         type: Sequelize.DATE,

         defaultValue: Sequelize.literal('CURRENT\_TIMESTAMP')

       },

       updatedAt: {

         allowNull: false,

         type: Sequelize.DATE,

         defaultValue: Sequelize.literal('CURRENT\_TIMESTAMP')

       }

     });

   },

      4. Run migrations  
      5. After you migrate all 3 migrations, you should have the two tables with another JOIN table connecting them.   
      6. This creates a many-to-many relationship between the first two tables.  
      7. Match constraints and create validations  
      8. Create necessary model static methods  
       


# **ASSOCIATIONS** {#associations}

1. INTRO TO ASSOCIATIONS  
   1. sequelize provides many tools to help define and model relationships  
      1. [associations is an important one](https://sequelize.org/api/v6/class/src/associations/base.js~association)

      

2. THE THREE STANDARD RELATIONSHIPS  
   1. recall:  
      1. one to one  
      2. one to many   
      3. many to many

| Relationship | Description | Example | SQL Connection |
| ----- | ----- | ----- | ----- |
| One-To-One | One row in Table A references one row in Table B | One user has one set of user preferences | Table B has a foreign key matching Table A's primary key  |
| One-To-Many / Many-To-One | Each row in Table A can be referenced one time by any number of rows in Table B | One person can have multiple jobs | Table B has a foreign key matching Table A's primary key |
| Many-To-Many | Each row in Table A can be referenced by many rows in Table B (and vice versa) | Each reader can read multiple books, and each book can be read by multiple readers | A join table maps the connections using primary keys from Table A and Table B  |

3. RELATIONSHIPS VS ASSOCIATIONS IN SEQUELIZE  
     
   1. associations model relationships  
      1. sequelize’s way of telling the database about the relationships between models  
      2. this tells the database how to use things like foreign keys and join tables  
           
   2. think of relationships in an rdb as the *two way* connection between two tables  
      1. Table A connects to Table B in a certain way  
      2. Table B connects to Table A in a certain way  
           
   3. an association is the *one way* connection from one table to a different table  
      1. relationships are actually made up of two associations  
      2. compare this diagram with how data is represented in a rdb schema  
         

### One-To-One Relationship with Two Associations

![one-to-one-associations-diagram][image2]

![one-to-one-db-diagram][image3]

### One-To-Many Relationship with Two Associations

![one-to-many-associations-diagram][image4]

![one-to-many-db-diagram][image5]

### Many-To-Many Relationship with Two Associations

![many-to-many-associations-diagram][image6]

![many-to-many-db-diagram][image7]

4. HOW SEQUELIZE MODELS RELATIONSHIPS THROUGH ASSOCIATIONS  
   1. it uses two one-way associations  
   2. associations are defined at the model level  
   3. used in pairs to represent both sides of the connection

| Relationship | A to B Connection |  B to A Connection |
| :---- | :---- | :---- |
|  One-To-One |  A has one B |   B belongs to A |
|  One-To-Many |  A has many B |   B belongs to A |
|  Many-To-Many |  A belongs to many B |   B belongs to many A  |

5. THE ASSOCIATION STATIC METHODS?  
   1. Creating associations in sequelize is done by calling one of the belongsTo / hasOne / hasMany / belongsToMany functions on a model (the source), and providing another model as the first argument to the function (the target).  
        
      1. hasOne   
         1) adds a foreign key to the target and singular association mixins to the source.  
      2. belongsTo   
         1) add a foreign key and singular association mixins to the source.  
      3. hasMany   
         1) adds a foreign key to target and plural association mixins to the source.  
      4. belongsToMany 	  
         1) creates an N:M association with a join table and adds plural association mixins to the source.   
         2) The junction table is created with sourceId and targetId.  
              
   2. Creating an association will add a foreign key constraint to the attributes.   
   3. All associations use CASCADE on update and SET NULL on delete, except for n:m, which also uses CASCADE on delete.  
        
      

# **QUERY WITH ASSOCIATIONS** {#query-with-associations}

# 

1. GETTING RELATED DATA WITHOUT ASSOCIATIONS  
   1. To obtain related data without associations use the three finders:  
      1. findOne  
      2. findAll  
      3. findByPk  
           
2. METHODS TO QUERY FOR RELATED DATA USING SEQUELIZE  
   1. There are two approaches to query for related records  
      1. get methods  
         1) generated by sequelize associations  
         2) instance methods  
            1) belongsTo generates method to get related record  
               1) .get\<model name singular\>  
                  

      const cat \= await Cat.findByPk(id);  
      // finds cat with specific primary key id  
      const owner \= await cat.getOwner();  
      // object with information about the cat's single owner

            2) hasMany or belongsToMany generates get method  
               1) .get\<model name plural\>

               

      const cat \= await Cat.findByPk(id);

      // finds cat with specific primary key id

      const toys \= await cat.getToys();

      // an array of objects with information of the cat's many toys

*NOTE: The two get methods are similar but the distinction between the singular and plural model names are noteworthy since they will distinguish between the different associations.*

3. QUERY OPTIONS WITH THE INCLUDE KEY  
   1. specify if you want to get related data using include  
      1. include with belongsTo

      const cats \= await Cat.findAll(

         { where: { name: 'Lucy' }, 

           include: Owner 

         });

         

      cats\[0\].Owner 

      // object with information about each individual cat's single owner

      2. include with hasMany or belongsToMany

      const cats \= await Cat.findAll(

      { where: { name: 'Michelle' }, 

        include: Toys 

      });

      

      cats\[0\].Toys

      // an array of objects with information about each individual cat's many toys

# **LAZY VS EAGER LOADING** {#lazy-vs-eager-loading}

1. LOADING DATA WHEN RELATIONSHIPS ARE INVOLVED  
   1. Lazy Loading  
      1. Defer loading referenced data until later  
         1) Delay loading all of the data until you need it  
            

      // Getting the tweet  
      const firstTweet \= await Tweet.findOne({   
          where: {  
              id: 1   
          }  
      });  
        
      // Later using the tweet to get the user that created the tweet  
      const tweetOwner \= await firstTweet.getUser();

   2. Eager Loading  
      1. Pull all the data simultaneously  
         1) Load all data simultaneously without waiting until you need it

      const firstTweet \= await Tweet.findOne({

          where: {

              id: 1

          },

          include: User

      });

      // To access the data within that User:

      console.log(firstTweet.user.firstName);

      console.log(firstTweet.user.lastName);

2. WHEN TO LAZY LOAD AND WHEN TO EAGER LOAD  
   1. Perform whichever is most resource efficient.  
   2. Most of the time eager loading will be faster.  
   3. Except when pulling large amounts or consecutive expensive calculations.   
   4. Lazy may be preferred if using conditional loading also. 

# **EFFICIENT EXPRESS-SEQUELIZE API ENDPOINTS** {#efficient-express-sequelize-api-endpoints}

1. IDENTIFY THE MOST-USED QUERIES TO IMPROVE  
   1. Focus on most used endpoints   
   2. Are they doing any of the following?  
      1. Calculating  
      2. Retrieving  
      3. Organizing  
   3. Can they be improved?  
      1. If average run time of endpoint is faster it means less latency  
   4. Look for endpoints that process large data sets  
      1. Consider refactoring to improve load time  
         1) example logging in by email  
              
2. IDENTIFY OPPORTUNITIES TO INCREASE EFFICIENCY  
   1. After finding most often used endpoints try identifying their performance  
   2. Then try to optimize  
   3. Common pitfalls in efficiency for possible optimization:  
      1. Performing expensive calculations or other processing on query results through JavaScript code, rather than using SQL operations to calculate, filter, order, or aggregate.  
      2. Using N \+ 1 Queries  
      3. Not using indexes on commonly-used searches  
           
3. OPTIMIZE THE QUERY  
   1. Option 1: Refactor to use SQL instead   
      1. SQL is much faster than JS  
         1) Example: change a filter from JS to SQL via Sequelize  
            

      // DON'T DO THIS: order users using JavaScript  
      const users \= async User.findAll();  
      const orderedUsers \= users.sort((userA, userB) \=\> {  
        if (userA.lastName \=== userB.lastName) {  
          return userA.firstName \< userB.firstName;  
        }  
        return userA.lastName \< userB.lastName;  
      });  
        
      // DO THIS: order users using Sequelize/SQL  
      const orderedUsers \= async User.findAll({  
        order: \[  
          \['lastName'\], \['firstName'\]  
        \]  
      });  
        
      // DON'T DO THIS: filter users using JavaScript  
      const users \= async User.findAll();  
      const filteredUsers \= users.filter(user \=\> {  
        return (  
          user.firstName \=== 'John' &&  
          user.lastName \=== 'Smith'  
        );  
      });  
        
      // DO THIS: filter users using Sequelize/SQL  
      const filteredUsers \= async User.findAll({  
        where: {  
          firstName: 'John',  
          lastName: 'Smith'  
        }  
      });  
   2. Option 2: Refactor to Eliminate N \+ 1 Queries  
      1. Can you use eager loading and take advantage of associations?  
           
   3. Option 3: Create an Index  
      1. Use Sequelize new migration via up and down to make new index

      The up function in the Sequelize migration should create the index. That should look like this:

      queryInterface.addIndex(tableName, attributes, options);

      

      // Examples:

      // CREATE INDEX 'Users\_firstName\_lastName' ON 'Users' ('firstName', 'lastName');

      queryInterface.addIndex('Users', \['firstName', 'lastName'\]);

      

      // CREATE UNIQUE INDEX 'Users\_email' ON 'Users' ('email');

      queryInterface.addIndex('Users', 'email', { unique: true });

      

      Note: Unlike creating raw SQL in SQLite3, you don't need to specify a name for the index. Sequelize will assign a name to the index created for you.

      More on creating indexes in Sequelize: [addIndex Docs](https://sequelize.org/master/class/src/dialects/abstract/query-interface.js~QueryInterface.html#instance-method-addIndex)

      The down function should remove the index if needed, with the code syntax similar to this:

      queryInterface.removeIndex(tableName, attributes, options);

      

      // Examples:

      // DROP INDEX 'Users\_firstName\_lastName';

      queryInterface.removeIndex('Users', \['firstName', 'lastName'\]);

      

      // DROP INDEX 'Users\_email';

      queryInterface.removeIndex('Users', 'email');

      

      Note: Specify the table and the same order of column names you used to create the index.

      More on removing indexes in Sequelize: [removeIndex Docs](https://sequelize.org/master/class/src/dialects/abstract/query-interface.js~QueryInterface.html#instance-method-removeIndex)

      2. Benchmark the Performance after applying Indexes

# **PAGINATION** {#pagination}

1. PAGINATION RESULTS  
   1. When query results are broken down into smaller chunks (pages)  
      1. ie Google Search result 10 items on page   
      2. Must go to bottom to view next 10 on current page or perhaps next page  
           
2. PAGINATION IN SQL  
   1. use LIMIT and OFFSET to make pagination in SQL  
        
3. LIMIT AND OFFSET IN SEQUELIZE  
   1. in the options object of finder methods  
      ExampleModel2.findAll({  
          limit: 10,  
          offset: 40  
      })  
        
4. PAGINATION IN WEB DEV  
   1. in a GET endpoint define the page and number of results in a page:  
        
      /musicians?page=5\&size=4  
        
   2. Then in route handler capture the query parameters:  
      		

		              let { size, page } \= req.query;       

3. The handler should be considerate of edge cases:  
   1. Default values if no params provided

|    if (\!page) page \= 1;   if (\!size) size \= 5; |
| :---- |

      

      

      

      

      2. If a page or size value of 0 return all values with no pagination

|    if(page \< 1 || size \< 1) {       page \= 1;       size \= 5;   } |
| :---- |

         

   4. Create a pagination object to store the limit and offset:  
      

|    const pagination \= {}; |
| :---- |

   5. Calculate and set the limit and offset in the pagination object:  
      1. Wrap in some branching to exclude edge cases and parse for type:

|    if (size \> 0 && page \> 0) {       pagination.limit \= parseInt(size);       pagination.offset \= parseInt(size) \* (parseInt(page \- 1));   } |
| :---- |

         

      

   6. Create the async query with desired order, attributes, associations etc and return:

|    const musicians \= await Musician.findAll({       order: \[\['lastName'\], \['firstName'\]\],       attributes: \['id', 'firstName', 'lastName'\],       include: \[{           model: Band,           attributes: \['id', 'name'\]       }\],       ...pagination   });   res.json(musicians) |
| :---- |

      

   7. All of this can be set up as a Middle Ware for ease of use:  
      1. Create MW func // this needs review not quite correct

| function createPaginationObjectMiddleWare(defaultSize=5, defaultPage=1) {   return function createPaginationObject(req, res, next) {       page \= page \=== undefined ? defaultPage : \+page;       size \= size \=== undefined ? defaultSize : \+size;       const pagination \= {};       if (page \>=1 && size \>=1) {           pagination.limit \= parseInt(size)           pagination.offset \= parseInt(size) \* (parseInt(page) \- 1)       }       req.pagination \= pagination;       next();   }} |
| :---- |

      

      2. Use the MW in the handler

# **SEARCH FILTERS** {#search-filters}

1. SEARCH FILTERS AND SQL  
   1. an attribute that a user can use to refine their results  
   2. implemented using WHERE clause in SQL  
        
2. SEARCH FILTERS IN WEB DEV  
   1. Define the attribute and the value in query parameters  
      

   	/sofas?color=light+brown\&minWidth=71\&design=modular

3. HANDLING THE ROUTE  
   1. Import { Op }  
   2. Parse the query params  
   3. Establish query object and pass to query method  
   4. Set the options using branching  
   5. Create the query  
   6. Res the result

| const { Op } \= require('sequelize');const { title, imageId, userId } \= req.query;const queryObj \= {   where: {},   include: \[\]};if (title) {   queryObj.where.title \= {       \[Op.substring\]: title,   }}if (imageId) {   queryObj.where.imageId \= {       \[Op.gte\]: imageId,   }}if(userId) {   queryObj.include.push({       model: User,       where: {           id: userId,       }   });} |
| :---- |

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

## ROLES AND PERMISSIONS {#roles-and-permissions}

- specific endpoints should only be accessible to authorized users

### Roles and Permissions

1. **user permission**: authorization for a user to execute specific action on the server  
   1. they generally tend to mimic some level of functionality of a CRUD operation

### What are User Roles?

1. **user role:** a set of user permissions assignable to members of a group of users

### User Roles vs Permissions

1. To implement a specific permission in Sequelize you can use conditional logic  
   1. Check if a user has a specific permission   
      1. If true do x  
      2. if false do z

   if (currentUserHasThisPermission) {

       // get all photo urls from photo table

   } else {

       // display error message "You are not authorized to access that resource"

   }

2. To implement a role you need to first define a set of users as belonging to a group  
   1. The **scope** of the authorization must be defined  
      1. What permissions are authorized or restricted  
      2. In Sequelize the scope for each role is defined in the model  
   2. Users are generally assigned a role (or multiple roles) in the Users table of the database, with a column(s) indicating their role:  
      1. There might be an isAdmin column in the table, which would take a boolean to define whether the user had the admin privileges.   
      2. The photographer could be granted the admin role. There could also be an isCustomer or isGuest column to assign the other roles.

## SCOPING MODEL ATTRIBUTES {#scoping-model-attributes}

### What are Scopes?

1. Sequelize scopes allow you to reuse code by defining commonly used queries.

   1. There are many practical applications of scopes. Consider the following examples:

- In banking applications, thousands or millions of users have accounts, but each user is only authorized to view and interact with their own financial data.

- Some news media sites have a "freemium" pricing structure, in which anyone can access the free content, while only logged-in paying users can access the premium content.

- A library app makes it easy to search for books across multiple libraries. When you find a book in your own library, you do not need all of the library details, but if you find a book at a different library, you would need to get the details about the other library in your search results.

  2. All three examples illustrate opportunities for using scoping to easily include or exclude specific information in commonly-used queries. Let's dig into the library example to see how to implement scoping.

Here's the database schema for the library example:

![][image8]

### Defining a Sequelize Scope on a Model

- scopes are defined at the initiation stage in the init options in the model definition

  class Book extends Model {}

  Book.init({ 

      // Define model attributes here

      }, {

      // Define options here

    }

  });

#### Default vs. Non-Default Scopes {#default-vs.-non-default-scopes}

1. Default Scope  
   1. Always applied in any query on the model  
   2. Defined with the defaultScope key  
2. Non-Default Scopes  
   1. Will not always be applied   
   2. Defined with the scopes key  
3. Both default and non-default scopes use the same options as in regular queries  
   1. Where  
   2. Limit  
   3. Include

      { // options object 

          defaultScope: { 

              // Define default scope details here

          },

          scopes: {

              \[scopeName1\]: {

                  // define scope 1 details here

              }, 

              \[scopeName2\]: {

                  // define scope 2 details here

              },

          }

      };

#### Include or Exclude attributes {#include-or-exclude-attributes}

1. To include only specific attributes in a scope use the include key in the attributes key of the options object  
     
   defaultScope: {   
       attributes: { // included attributes; all others are excluded  
           include: \[ "title", "author", "isCheckedOut", "location" \]   
       }  
   }  
2. You can also do this in reverse with the exclude key in the same way

#### Filtering Results {#filtering-results}

1. To filter which records will be returned within a scope use where clause

   defaultScope: { // Default scope: books that aren't checked out

       where: {

           isCheckedOut: false 

       }

   }

#### Dynamic Scopes {#dynamic-scopes}

1. Dynamic scopes are scopes that can be changed.  
   1. Make the scope’s value a function instead of an object.   
      1. The function should return an object

   scopes: {

       atLibrary: function (libraryId) {

           return {

               where: { // filter results to be only from the specified library

                   libraryId

               }

           }

       }

   }

      2. They are often written like this instead

   scopes: {

       atLibrary(libraryId) {

           return {

               where: { // filter results to be only from the specified library

                   libraryId

               }

           }

       }

   }

#### Include Associations {#include-associations}

1. Include the model name(s) to include in the query results

   scopes: {

       atLibrary(libraryId) {

           const { Library } \= require('../models');

           return {

               where: { // filter results to be only from the specified library

                   libraryId

               },

               include: \[ // include associated library details in query results

                   { model: Library } 

               \]

           }

       }

   }

#### Defining Multiple Scopes {#defining-multiple-scopes}

1. In a large application it is needed to define and manage multiple scopes at once

   class Book extends Model {}

   Book.init({ 

       // Define attributes here

       }, {

       defaultScope: { // Default scope: Books that are not checked out

           where: {

               isCheckedOut: false 

           }, 

           attributes: { // included attributes, all others are excluded

               include: \[ "title", "author", "isCheckedOut", "location" \] 

           }

       },

       scopes: {

           atLibrary(libraryId) { // Scope: Books in specified library

               const { Library } \= require('../models');

               return {

                   where: { // filter results to be only from the specified library

                       libraryId

                   }, 

                   include: \[ // include associated library details in query results

                       { model: Library } 

                   \]

               }

           },

           atOtherLibrary(libraryId) { // Scope: Books NOT in specified library

               const { Library } \= require('../models');

               return {

                   where: { // filter results to NOT be from the specified library

                       libraryId: {

                           \[Op.ne\]: libraryId

                       }

                   }, 

                   include: \[ // include associated library details in query results

                       { model: Library } 

                   \]

               }

           },

           checkedOut: { // Scope: Books that are checked out

               where: {

                   isCheckedOut: true  

               }

           }

       }

     }

   });

### Invoking Scopes

#### Invoking a Single Scope {#invoking-a-single-scope}

1. Default Scopes  
   1. You can use findAll() method without any options to invoke the defaultScope on a model  
      1. It will use the constraints defined in the defaultScope despite being a findAll()

         await Book.findAll();

         // returns only the books that aren't checked out, due to defaultScope on the model

2. Non-Default Scopes  
   1. If one or more are invoked the defaultScope will not be used  
   2. To invoke the non defaults use the scope method on the model  
      1. Use chaining when calling the findAll()

         await Book.scope("checkedOut").findAll();

         // returns all books that are checked out

         // (the defaultScope does not apply because an alternate scope is invoked)

#### Invoking a Dynamic Scope {#invoking-a-dynamic-scope}

1. If the scope is a function  
   1. pass in an object instead of the scope  
      1. include a method key with an array containing the name of the scope and args for the function

         await Book.scope({ method: \["atLibrary", 19\] }).findAll();

         // returns all books ONLY from the library with a \`libraryId\` of \`19\`

         // (the defaultScope does not apply because an alternate scope is invoked)

#### Invoking Multiple Scopes {#invoking-multiple-scopes}

1. To invoke more than one scope at the same time  
   1. Pass an array of scopes into the scope method  
      1. If there is a conflict the scope at the higher index will overwrite those defined at lower index

         await Book.scope(\["defaultScope", { method: \['atLibrary', 19\] }\]).findAll()

         // returns books that are not currently checked out (defaultScope),

         // but ONLY from the library with a \`libraryId\` of \`19\`(atLibrary)

2. [Learn more about scopes in Sequelize](https://sequelize.org/master/manual/scopes.html)

# 

# 

# **SEQUELIZE EXAMPLES FROM PA WEEK 11** {#sequelize-examples-from-pa-week-11}

// phase 1 migration

'use strict';  
/\*\* @type {import('sequelize-cli').Migration} \*/  
module.exports \= {  
 async up(queryInterface, Sequelize) {  
   await queryInterface.createTable('Airplanes', {  
     id: {  
       allowNull: false,  
       autoIncrement: true,  
       primaryKey: true,  
       type: Sequelize.INTEGER  
     },  
     airlineCode: {  
       type: Sequelize.STRING,  
       allowNull: false  
     },  
     flightNumber: {  
       type: Sequelize.STRING,  
       allowNull: false  
     },  
     inService: {  
       type: Sequelize.BOOLEAN,  
       defaultValue: true,  
       allowNull: false  
     },  
     maxNumPassengers: {  
       type: Sequelize.INTEGER,  
       allowNull: false  
     },  
     currentNumPassengers: {  
       type: Sequelize.INTEGER  
     },  
     firstFlightDate: {  
       type: Sequelize.DATE  
     },  
     createdAt: {  
       allowNull: false,  
       type: Sequelize.DATE,  
       defaultValue: Sequelize.literal("CURRENT\_TIMESTAMP")  
     },  
     updatedAt: {  
       allowNull: false,  
       type: Sequelize.DATE,  
       defaultValue: Sequelize.literal("CURRENT\_TIMESTAMP")  
     }  
   });  
   await queryInterface.addIndex('Airplanes',  
     \['airlineCode', 'flightNumber'\],  
     {  
       unique: true,

     })  
 },  
 async down(queryInterface, Sequelize) {  
   await queryInterface.dropTable('Airplanes');  
   await queryInterface.removeIndex('Airplanes', \['airlineCode', 'flightNumber'\]);  
 }  
};

// phase 1 model

'use strict';  
const {  
 Model  
} \= require('sequelize');  
module.exports \= (sequelize, DataTypes) \=\> {  
 class Airplane extends Model {  
   /\*\*  
    \* Helper method for defining associations.  
    \* This method is not a part of Sequelize lifecycle.  
    \* The \`models/index\` file will call this method automatically.  
    \*/  
   static associate(models) {  
     // define association here  
   }  
 }  
 Airplane.init({  
   airlineCode: {  
     type: DataTypes.STRING,  
     allowNull: false,  
     validate: {  
       len: \[2, 2\],  
       isAlpha: true,  
       isUppercase: true  
     }  
   },  
   flightNumber:{  
     type: DataTypes.STRING,  
     allowNull: false,  
     // unique: true,  
     validate: {  
       len: \[1, 4\],  
       isNumeric: true  
     }  
   },  
   inService: {  
     type: DataTypes.BOOLEAN,  
     defaultValue: true,  
     allowNull: false,  
     validate: {  
       isInService(value) {  
         if(value \=== false  
           && this.currentNumPassengers \!== undefined  
           && this.currentNumPassengers \!== null) {  
             throw new Error('Flight must be...')  
           };  
       }  
     }  
 },  
   maxNumPassengers: {  
     type: DataTypes.INTEGER,  
     allowNull: false,  
     validate: {  
       min: 2,  
       max: 853  
     }},  
   currentNumPassengers: {  
     type: DataTypes.INTEGER,  
     validate: {  
       min: 0,  
       max: 853,  
       ifMoreMax(value) {  
         if(value \> this.maxNumPassengers) {  
           throw new Error('Current num must be less than max num');  
         }  
       },  
       ifServiceFalse(value){  
         if(value \!== null && (this.inService \=== false || this.inService \=== undefined)) {  
           throw new Error("Current num of passengers must be null if in service is null");  
         }  
       }  
     }  
   },  
   firstFlightDate: {  
     type: DataTypes.DATE,  
     validate: {  
       // isDate: true,  
       isAfter: "2019-12-31",  
       isBefore: "2022-01-01"  
     }  
   },  
   createdAt: {  
     type: DataTypes.DATE,  
     allowNull: false  
   }  
 }, {  
   sequelize,  
   modelName: 'Airplane',  
 });  
 return Airplane;  
};

// phase-2 seeder

'use strict';

const { Superhero } \= require('../models');

// DON'T SPEND ALL YOUR TIME MAKING REAL SEED DATA\!\!\!  
// Try to just spend only 5 minutes to create the seed data for testing  
// You do not need to put in real superhero data as values\! The data values  
 // just need to make sense based from the migration and model files.

const validSuperheros \= \[  
 // Your code here  
 {  
 name: "SPIDERMAN",  
 alias: 'NAMREDIPS',  
 affiliation: 'Avengers',  
 heightCm: 141,  
 isMutant: true,  
 race: 'human',  
 universe: 'Marvel',  
 releaseYear: 1950  
 },

 {  
   name: "SUPERNERD",  
   alias: 'DRENREPUS',  
   affiliation: 'X-Men',  
   heightCm: 142,  
   isMutant: false,  
   race: 'journalist',  
   universe: 'Marvel',  
   releaseYear: 1960  
   },

   {  
     name: "ICEMAN",  
     alias: 'NAMECI',  
     affiliation: 'Justice League',  
     heightCm: 143,  
     isMutant: true,  
     race: 'human',  
     universe: 'DC',  
     releaseYear: 1970  
     },  
     {  
       name: "VAPORWARE",  
       alias: 'ELONMUSK',  
       affiliation: 'Avengers',  
       heightCm: 144,  
       isMutant: false,  
       race: 'conman',  
       universe: 'Marvel',  
       releaseYear: 1980  
       },  
       {  
       name: "BIGBIRD",  
       alias: 'DRIBGIB',  
       affiliation: 'Justice League',  
       heightCm: 160,  
       isMutant: false,  
       race: 'bird',  
       universe: 'DC',  
       releaseYear: 1990  
       },

\];

module.exports \= {  
 async up (queryInterface, Sequelize) {  
   try {  
     await Superhero.bulkCreate(validSuperheros, {  
       validate: true,  
     });  
   } catch (err) {  
     console.log(err);  
     throw err;  
   }  
 },

 async down (queryInterface, Sequelize) {  
   for (let superheroInfo of validSuperheros) {  
     try {  
       await Superhero.destroy({  
         where: superheroInfo  
       });  
     } catch (err) {  
       console.log(err);  
       throw err;  
     }  
   }  
 },  
 // DO NOT MODIFY BELOW (for testing purposes):  
 validSuperheros,  
};

// phase-3 app.js

require('express-async-errors');  
require('dotenv').config();  
const express \= require('express');  
const app \= express();  
const {WarehouseItem} \= require("./db/models");

app.use(express.json());

app.get('/items', async (req, res) \=\> {  
 const newItems \= await WarehouseItem.findAll({  
   where: {isUsed: false}  
 });

 res.json(newItems);  
});

app.put('/items/:id', async (req, res) \=\> {  
   const {name, price, quantity, isUsed} \= req.body;  
   const itemToUpdate \= await WarehouseItem.findByPk(req.params.id);

   console.log("name: ", name)

   if (\!itemToUpdate) {  
     return res.status(404).json({message: 'Warehouse Item not found'})  
   }

   if (name) itemToUpdate.name \= name;  
   if (price) itemToUpdate.price \= price;  
   if (quantity) itemToUpdate.quantity \= quantity;  
   if (isUsed) itemToUpdate.isUsed \= isUsed;

   await itemToUpdate.save();

   res.json(itemToUpdate);

});

app.get('/items/:name', async (req, res) \=\> {  
  const item \= await WarehouseItem.findOne({  
      where: {  
        name: req.params.name  
      }  
  })  
  if (\!item) {  
   return res.status(404).json({message: 'Warehouse Item not found'});  
 }  
  res.json(item);  
});

app.delete('/items/:id', async (req, res) \=\> {  
 const item \= await WarehouseItem.findByPk(req.params.id);

 if (\!item) {  
  return  res.status(404).json({message: "Warehouse Item not found"});  
 }

 await item.destroy();

res.json({message: "Successfully deleted"});  
})

if (require.main \=== module) {  
 const port \= 8003;  
 app.listen(port, () \=\> console.log('Server-3 is listening on port', port));  
} else {  
 module.exports \= app;  
}

// phase 4 migro 1 addColum

'use strict';

/\*\* @type {import('sequelize-cli').Migration} \*/  
module.exports \= {  
 async up (queryInterface, Sequelize) {  
   /\*\*  
    \* Add altering commands here.  
    \*  
    \* Example:  
    \* await queryInterface.createTable('users', { id: Sequelize.INTEGER });  
    \*/  
   await queryInterface.addColumn('Teams', 'sportId', {  
     type: Sequelize.INTEGER,  
     references: {model: 'Sports'},  
     onDelete: "CASCADE",  
     allowNull: false  
   })  
 },

 async down (queryInterface, Sequelize) {  
   /\*\*  
    \* Add reverting commands here.  
    \*  
    \* Example:  
    \* await queryInterface.dropTable('users');  
    \*/  
   await queryInterface.removeColumn('Teams', 'sportId')  
 }  
};

// phase 4 migro 2 add Column

'use strict';

/\*\* @type {import('sequelize-cli').Migration} \*/  
module.exports \= {  
 async up (queryInterface, Sequelize) {  
   /\*\*  
    \* Add altering commands here.  
    \*  
    \* Example:  
    \* await queryInterface.createTable('users', { id: Sequelize.INTEGER });  
    \*/  
   await queryInterface.addColumn('Players', 'currentTeamId', {  
     type: Sequelize.INTEGER,  
     references: {model: 'Teams'}  
   })  
 },

 async down (queryInterface, Sequelize) {  
   /\*\*  
    \* Add reverting commands here.  
    \*  
    \* Example:  
    \* await queryInterface.dropTable('users');  
    \*/  
   await queryInterface.removeColumn('Players', 'currentTeamId');  
 }  
};

// phase 4 migro 3 from model

'use strict';  
/\*\* @type {import('sequelize-cli').Migration} \*/  
module.exports \= {  
 async up(queryInterface, Sequelize) {  
   await queryInterface.createTable('DraftPicks', {  
     id: {  
       allowNull: false,  
       autoIncrement: true,  
       primaryKey: true,  
       type: Sequelize.INTEGER  
     },  
     fanId: {  
       type: Sequelize.INTEGER,  
       references: {model: 'Fans'},  
       onDelete: "CASCADE"  
     },  
     playerId: {  
       type: Sequelize.INTEGER,  
       references: {model: 'Players'},  
     },  
     createdAt: {  
       allowNull: false,  
       type: Sequelize.DATE,  
       defaultValue: Sequelize.literal("CURRENT\_TIMESTAMP"),  
     },  
     updatedAt: {  
       allowNull: false,  
       type: Sequelize.DATE,  
       defaultValue: Sequelize.literal("CURRENT\_TIMESTAMP"),  
     }  
   });  
 },  
 async down(queryInterface, Sequelize) {  
   await queryInterface.dropTable('DraftPicks');  
 }  
};

// phase 4 new model join table

'use strict';  
const {  
 Model  
} \= require('sequelize');  
module.exports \= (sequelize, DataTypes) \=\> {  
 class DraftPick extends Model {  
   /\*\*  
    \* Helper method for defining associations.  
    \* This method is not a part of Sequelize lifecycle.  
    \* The \`models/index\` file will call this method automatically.  
    \*/  
   static associate(models) {  
     // define association here  
   }  
 }  
 DraftPick.init({  
   fanId: DataTypes.INTEGER,  
   playerId: DataTypes.INTEGER  
 }, {  
   sequelize,  
   modelName: 'DraftPick',  
 });  
 return DraftPick;  
};

// phase 4 route fans

const express \= require('express');  
const router \= express.Router();

const {Fan, Player} \= require('../db/models');

router.get('/:fanId/drafts', async (req, res) \=\> {

 const fan \= await Fan.findByPk(req.params.fanId, {  
   include: Player,  
 });

 res.json(fan.Players);  
})

router.delete('/:fanId', async (req, res) \=\> {  
 const fan \= await Fan.findByPk(req.params.fanId);

 await fan.destroy();  
 res.json({  
   message: "Successfully deleted"  
 });  
})

module.exports \= router;

// phase 4 route players

const express \= require('express');  
const router \= express.Router();

const { Player } \= require('../db/models');

router.get('/', async (req, res) \=\> {  
 let { firstName, number } \= req.query;

 const where \= {};  
 if (firstName && firstName \!== '') {  
   where.firstName \= firstName\[0\].toLowerCase() \+ firstName.slice(1);  
 } else if (firstName \=== '') {  
   res.status(400);  
   return res.json({  
     errors: \[  
       { message: 'firstName filter should not be empty' }  
     \]  
   });  
 }

 if (number) {  
   if (\!isNaN(number) && number \<= 0) {  
     where.number \= parseInt(number);  
   } else {  
     res.status(400);  
     return res.json({  
       errors: \[  
         { message: 'number filter should be a number greater or equal to 0' }  
       \]  
     });  
   }  
 }

 const players \= await Player.findAll({  
   where,  
 });  
 return res.json({  
   players,  
 });  
});

module.exports \= router;

// phase 4 route sports

const express \= require('express');  
const router \= express.Router();  
const { Sport } \= require('../db/models');

router.get('/', async (req, res) \=\> {  
 const sports \= await Sport.findAll({  
   order: \[\['name', 'DESC'\]\],  
 });

 res.json(sports);  
});

module.exports \= router;

// phase 4 route teams

const express \= require('express');  
const router \= express.Router();  
const { Player } \= require('../db/models');  
const { Team } \= require('../db/models');  
const { Sport } \= require('../db/models');

router.post('/:teamId/players', async (req, res) \=\> {  
 const teamId \= req.params.teamId;  
 const {firstName, lastName, number, isRetired } \= req.body;

 console.log("firstName: ", firstName);

 const team \= await Team.findByPk(teamId);

 const newPlayer \= await Player.create({  
   firstName,  
   lastName,  
   number,  
   isRetired,  
   currentTeamId: team.id  
 });  
 res.json(newPlayer);  
})

router.get('/:id', async (req, res) \=\> {  
 const id \= req.params.id;  
 const team \= await Team.findByPk(id, {  
   include: \[  
     {model: Sport},  
     {model: Player}  
   \],  
 });

 const payload \= {  
   id: team.id,  
   name: team.name,  
   homeCity: team.homeCity,  
   sportId: team.sportId,  
   createdAt: team.createdAt,  
   updatedAt: team.updatedAt,  
   Sport: team.Sport,  
   TeamRoster: team.Players  
 }

 res.json(payload);  
});

module.exports \= router;

# **SEQUELIZE EXAMPLES FROM PA WEEK 12**

![][image9]

![][image10]

![][image11]

[image1]: <data:image/png;base64,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>

[image2]: <data:image/png;base64,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>

[image3]: <data:image/png;base64,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>

[image4]: <data:image/png;base64,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>

[image5]: <data:image/png;base64,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>

[image6]: <data:image/png;base64,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>

[image7]: <data:image/png;base64,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>

[image8]: <data:image/png;base64,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>

[image9]: <data:image/png;base64,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>

[image10]: <data:image/png;base64,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>

[image11]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnAAAAJlCAYAAABaCM+LAACAAElEQVR4Xuzd+V8VR8I2/OcvCYsgiyyCCi4giiIqLoC4gooKGnclxiVqRFxREfddo8G4xcSIJkaj0ahxNxq3mEkyz8w99+yZ5TOZeWcmz8zU61VMNd1Vfc4B9SgN1w/fj91V1X26zznkXKmq7v4/r7zyiiAiIiIi7/g/egERERERNW0McEREREQewwBHRERE5DEMcEREREQewwBHRERE5DEMcEREREQewwBHRERE5DEMcEREREQewwBHRERE5DEMcEREREQe88ICXHhEmBg2P9soV7oPTRVj1wwwysm/KbsGG2XPS7vu8UaZXp9d3MUop3pJaW1Er9GdjXJl0KyeYsyq/kY5ERGRPy8swPUs7CR6DO9olENYq1AxadsgSa8j/8ZvzDPKnpfiSv/Bom2XNjJ46+VUb8Si3iKhY4xRDomdY2UAH77Q9//YEBERuXkhAS40LES8uiVf9sLpdYAQgB+yXqN891TQixcowJF/cR2i/faQDn2jl6xvm9bGqCMiIvIn6AEuJOQVUbo+1+8PGepyJnS11jvnJIuMQR1ctW4TIWKTWhvlSkO2T+4aZ5Qr6A3Uy+ywf3/bo7732DR5TuhRLKroKybvKBCZw+p7qjBkhnr8W7i4j1zG8HFoWKisT+mVKMuKlvSVPWxYHjw7y9oe549t1X709xO9PigHtb29FwjrCNQ4NtWuS/9kWYd/Ry3PkXDcajkpvT5k4LPCa+NzdRtCxbHaz10/RqxP2JxvvbY6Pn+fK94TbOvvsw20faDP1t/nmtgpNuD+7ecYnRBpfcb6+2N/H1KynNsRERE1RNADXKc+SfKHasCUbkadgnoEK7WuQocbzLtKG9DOKFcasn3ezEyjXImKizDK7BBI/W2P11cBLjKmlVyPSWwtAw0ChHpPWsfW1cHwN+sCF8IJ1setHWjtC6Fu9Ip+jgCnv3d6mQpw6vX7jEsT/SZmWPUpPetDgxrGQxjT9xOoB85tDpzaX6vWdb2t+FwRFvEeqDaoR7jD8eHYsI7j8/e5IkRiW3+fbaDtA322/j5XHGeg/dvfB3zfUY7PWn/f1PuCz1kvJyIiaoigBzjVS4QeCb0O0AOBH057WXxqjOzxcYNgEBEVbpQrDdkeYUIvV0JCQ4wyO+zf3/aoVwHOfk5Y1y8KCA0PFTFtW4usok6yPmtUZ6vnxh4IOvdNeqoAp9bRuzV0Xi+jHQJUm/ZRVm+YXv80Ac7t3HuP6SIyClKsddSrHj8cG9ZxfP4+VwxHor2/zzbQ9oE+W3+fa1R8ZMD9288Z54RQjMBvL1f6vdpVBkK9nIiIqCGCHuDwQ6b/uCm4Qk//sQf8uHcfkuoKvSgIPXq50pDtMVSmlyvoJes+JMUoV7B/f9uj3i3EYF3Vq8CUOyNTpA9sL0MQ1jE02T4zQS7beyzj2kc/U4DD3EMM1dq3wZAtXjc5I87q1dL38zQBbsjcLGNfCOkDJtefD+rVfEj8i3Ucn7/PtWPvup4sf59toO3rPluzTvH3uaJnMdD+1fnhnNDriLmf+nsGuCpVf4+IiIgaI6gBDvOGECb0ckUNHerl/obJvDSEaj8nrKdmt7WWc6d1t+r6T8qQZQhwsclRctn+vnXomfDcAxzOE8voVbIfu52/+VvgFuDQs6TvC71vuApZraPeLcD5+1y9NITaY0RHx/na8YprIiJ6HoIa4DAshl4NvRzQq4QfvpFL+xp1GNZDj4cb/OC3ah1ulCsN2T4qPsIoV0JCQmTw1MsV7N/f9qjXAxxCH9bVMDKWMayo6lUoQYALDa27Yte+PXq1nmeAw4UFKkCl57a3Qoi+H5RhmFcvV9wCnAo59jJ8xvbhY9S7BTh/n2ubdlGyvb/PNtD28rN1qVP8fa4If4H2j+MLeMX1kBR5vvr7RkRE1BhBC3C4Yk//IbfDDUxRjyFDvc7rVIAreHKOCEi4zxduGaHqUYceGIQ4e4BSV+JiSA7rfceny5sfY9ke4DAxvtvgFAl1ahlQHyjAycBU3kd0zat/bbfPCmXFK/vJsGG/CEG9FoZF0Ytqf20EUAwR507vLoc73YZUse4W4PTX9yL1nurlCt4bBGj0fOp1REREDRWUAIcrLPEjVrLOvLJRQb266rK5UQEOYQbz/yJtV5wq4ZFhsqdPDWW6Ub1fmKdm77F7HjCfC6+vlz8vuEACFyi0pKCCeXD43O3D4zrU+/vMiYiIGiIoAS4pPU7OJ+rQw3fvGibpY0hLL28O9CHUxsIPvHrvMKyH3jJfQ9HUdHTN7yC/9/beSjuEWvv9AImIiJ5WUAJcS/esAQ7zxbD9uKq6+8E9y76IiIio+WGAIyIiIvIYBjgiIiIij2GAIyIiIvIYBjgiIiIij2GAIyIiIvIYBjgiIiIij2GAIyIiIvIYBjgiIiIij2GAIyIiIvIYBjgiIiIij2GAIyIiIvIYBjgiIiIij2GAIyIiIvIYBjgiIiIij2GAIyIiIvIYBjgiIiIij2GAIyIiIvIYBjgiIiIij2GAIyIiIvIYBjgiIiIij2GAIyIiIvIYBjgiIiIij2GAIyIiIvIYBjgiIiIij2GAIyIiIvIYTwS4hIgEkRabZpQ3ZSGvhIg2rdoY5URERETPKugBLiE6QRRmDhcdE1KNOiU5NkmM6TValPQea9TBhVGfihtjrxnlTVlkWKR4b8i7RjkRERHRswp6gBucUSAuV1wQS4sqjDpoG5Mo6xW9fliHoeLxhEfitYwyow5WrFgh5s+fb5Q3BTjunvE9jXJ6RYwoHSz2n9kqpi981agjIiIi/4Ie4AJ5e9pbokvbLka5ghC0tu8ao1zZs2ePqK6uNsqbgpr8t+Xxp8emG3Ut2Ud3D4maJ+Ft5/F1YtmWphm+iYiImrKgBrjX88vErknbpVFZIx11CG5wofysODCjxlrX94EANKzDMKNc8RXgVl/4ToxdsllsvPV7sf3h38Ty0w8d9QuPfi423/mj2Pn4n2LZqXuiQ7dejvqoNvFi2/0fnrT5kyjbcVysOPNItO3U1aqPa5cqyo9dl/tY89lPRa8RJcYxTEufKo9/etdpRp0/IxdUyePHa+549Hex4ebvHPUTVu8RVZd+LrY9+KtY+/kv5Lq+j4JpC+W22E/vogliUnWNVRcWHi5mbj8m1l//zRO/FsXlG4ztgymrX6b8d2HVLJ8B7vTp09LKlSuNOiIiopYuqAFu7ZjV4uzCj12HUGvnHJMuLT4vTs47bq3r+6jrwfJ9AYOvALfn2/9IW+7+WQYxLMcmJjvqEXAQYLC8+5t/iW55I2RdaGiY3A7hDgFQ7Sutb761/a6vf/zvdv+26gdNecNxDHnJefL41+esM47Pn3kHPrWOCeENrzF961GrXr0uwqN67aUffWnVD399mSzDseMcsIwgp+o3ffEHaztlTs0Z4zjc9O7dW1RWVrrS2wbiL8A9ePBAqq2tNeqIiIhauqAGOAg0B+7gjBoRHxVvlCt3Sm4bZXZbt24Vy5cvN8oRStCLptbRw4bAY2+DnqiUzN4ib9Jc2X7Djd/K8spzP5Hr+v5UgEtI6SwDVPf8QpGeUyC69h8se+r0bXAlKgLc7XE3HeWBqABnL8N6/uR5jrI2Se1l6Fx7+X9kfU7xFNExq59ctp/r6EXrHAEO9SPmrLCOffHxm8br+dKuXTtRXFzsSm8biL8Ah+AGFRXu3xsiIqKWrMkHOASgkJAQo1zBRQyzZ882yt0Cyc7HP1rLVZd+ZvRCbb33F1mneqj0/akAlzNmqrGtYt8mPiJOHv/Zok+MY/HHV4CbsGq3XB5fuUuei/7aQ2aWi7yJc+TyslP3rW0zC0ZaAQ69i/p2bsf+IvgLcEREROSbJwJch6j2RrmSl5cnsrKyjHK3QIIhSXt99ZVfimmb3xXDZi2R61vv/SDrMHyqb491FeAGz1gke+vQI6azb9MnsY88/p0DtxvH4o+vADd102FrGUO4i45dE7mvvm71wA0tWyznvmF5yck71rboKVQBLiIqRr4P+nHrx+5Ldna2HLJ2o7cNhAGOiIjo6XgiwL2R6TtclJaWug7fIcQMnDDLWh9TsUms/OQruYweqU23v7fqKs997QhwUzYcdAQoDFPaA5zqxerSO9fxmvaLHGB9TrU8/tykgY7yQPQAp14Pw6NYt59bx545cl0FuPCISGt+ntoeF1noQ6ilK3c6XhPDwvpxuElKShKFhYWu9LaB+Atwag7cxYsXjToiIqKWLmgBLjU+RczKLxMbS9bJAHek7KBcH9hlgKNdoACHOXC4ia+vYdQrV66Ic+fOGeUIKehpmrrxkJix7X05Zw3BDXWtIqOsXqqS5dutAKQCXGR0rAxBuNJzwZFLViCyX8Sg9j9rz4fyik4EQlwwYD+Gh+Pvi4ujzHvbBaIC3KpPv5HDpugpRC+bqkcdrqydsfU96yIFFeBQj546rC9897K8ShXLeoCDxbW3xOR1+2WdPfAF2+4T68WeExvE+1f2imPX3pbLYG/DAEdERORb0ALc+L6ljhv0KptK1zvaIcDFRsYa2ytlGTNlL1ZhinsPj78Ah2FOFVb0gILwpcoxyR//YuhU1af26CPLEPxwOw8so0zV4yIAFexUu4oTXzheA8c9OnWUcWyBqABnF5ecYtWrwCXP8ebvxILDF+UyhnZVG4RKlCHo4TYjqvcRMKSK+X72/asLOF4E3AfOjb2NCnCHDjnLiYiIKIgB7nmJCI0Q90rvipPDTxh1/iCU4N926T1kYAlvFeGoRy9c5qAikTHQ9z3mMByJ4Uu1P1y1qrfB/jGUqu8fV6BeKb4s/9W3CUQFOLw+eg2TOmcYbZLTuou+oycZ5XboScS/mCc3d/9Zo15dxWq/WrepQHi7f/++SEmpD65ERERUp8kHuKelAtzTwm04cJ841VPndqPeYNHnwDUWLkjA9rjRr+ph09s0dVVVVXK+nV5OREREzTjA2W+j8TQQgjAHDhcAIFDp9cE0bNbSZzr++PYd5fw4zJ1b8uEdMWrhWqMNEREReVezDXBEREREzRUDHBEREZHHMMAREREReQwDHBEREZHHMMAREREReYwnAlxCRIJIi00zypsy3P+tTas2RjkRERHRswp6gEuIThCFmcNFx4RUo05Jjk0SY3qNFiW9xxp1cGHUp/JxWnr584BngOJ5onr5s4oMixTvDXnXKH/eBk15wyjzitDQUKOMiIiIAgt6gOvfuZ84v+gTMbdgtlEHy0cuFbsmbRd9O/UR3ZLNJw6cLfpEPlM0KizKqIM9e/aI6upqo7yhcoqniGmbgxO08CitgwUHjPLnSX/+qhfgsVl4BuqBc9vl8snbB0RySlujHREREbkLeoAL5O1pb4kubbsY5QpC0Nq+a4xy5VkDXDDV5L8tjz89Nt2oa8kye3e1lo9+/pYMcat2lxvtiIiIyF1QA9zr+WWydw1GZY101CG4wYXys+LAjBprXd8HAtCwDr6fV+ovwC04cklsvfeDfCTWumu/ctRN2XBQPqQe8GB6fVuU40kMdomp9fPw4tqlivJj1+Ujt/C0BrdHbU1LnyqPf3rXaUZdIHiaQtWln8keNjx4PiWzt1WH56+qYwd92yEzy41jn7qx/qHweKYrHna//vpvnvi1KC7fYOzjRZm3coYMcG+f3uIoP336tLRy5UpjGyIiopYuqAEOBmcUiMsVF8TSogqjDg4+CW/xUb4fpo4AFB5qPkRe8RXg8BgpPA5LrePB8HobwByyuTWfGOV2r+2qFWs//4UICamfs4Xni2K7iKgYMXDCLLm+46t/OLZrH9VeHv/J4SeMffqTNXSs8fxShDa9HejtdImpXZ6EwB8dD77HNnh/UIf5fwiJgfajlJeXywfNu9HbNkTtrXdkgMsb3s9RrvZZW1trbENERNTSNfkAd6fktlFmt3XrVrF8+XKjfNX5bxvUsxQowBVMWyDDTUxC/RwtXPiw+5t/i+75hSI9p0B07T9YbL7zJyME4UpUBLjb424a+/UnrW++3Fd0XKJRp9Nf0w49bRtv/d5og3X0OqpjX3z8ptHGl3bt2oni4mJXetuGQHjb8I7ZA4rgBhUV7t8bIiKilqzJBzgEoJCQEKNcWbFihZg927xAQgUvDJ9imDH31deNNuAvwHXM6ieDGtjLc8ZMlft2Y28XHxEnjx8XYuj7DgSBEK+74cZvxaw9Hxr1iv6adhjiRf2yU/esstDQMOOY3Y79RVi2Zb5499IeEdk6wqgjIiIi3zwR4PKS84zyhsKwZ96kuU/C0L9chyH9BTiEmjk1Z4zyTr36y/ljerlufOdSefxzu88x6hqqbaeuMoAtO3XfqANfwQvDsLu+/lEkdTav7MU2CHJ6eUM8jyHUSXPGyZ43DJ/qdUpJSYkoLS0VeXlP/9kTERE1V54IcG9k1s9l0+FH3m34LqqNc5/VV/7X9Z5pvgJc2Y7jxrw3RfVidemd6yhH2LKvr8+plsefmzTQ2Ic/rSKj5PCnWu85pFgOhertwC3AYYhXn/emb1O6cqexjd7OTVJSkigsLHSlt/VF3TokLdP3a6pQePHiRaOOiIiopQtagEuNTxGz8svExpJ1MsAdKTso1wd2GeBoFyjAYQ4cbuLraxj1ypUr4ty5c0Y5rj7FlZejF62z5niFt6ofqpuy/oBUUXtbXqGq1lGHnjq0X3D4ohy+VNoktbe2Rz169VCOKzo33f7euCcb7l93cdQF49gCwfw09J5hDt+0TUfEtvs/iNl7P7bqRy6oso4Xx6GW1fEv/ehLWW4/9mGzlljbqyHTxbW3xOR1+8XqC9+5BsFgiGkTLQPc+1f2ij0nN1j024gwwBEREfkWtAA3vm+pDG66TaXrHe0Q4GIjY43tlbKMmbIXqzDFvYfHV4DDvDcVVDCXDL1p9npVp0Mdetb0crDfykOFLPtrVJz4wvEaOO7RqaOMYwukz8iJsgdN7Xv7w785euRwtat+bPbjrzz3E6PcfrsRXHyBW5PY6zHXTj+OYEhMjpcBTof7wdnbqQB36FD97U+IiIioTtAC3POEIUgEOb28KYttFSt6J2Qb5dQwCG/79+83yomIiMgjAY5anqqqKjnfTi8nIiIiBjgiIiIiz2GAIyIiIvIYBjgiIiIij2GAIyIiIvIYBjgiIiIij2GAIyIiIvIYBjgiIiIij2GAIyIiIvIYBjgiIiIij2GAIyIiIvIYBjgiIiIij2GAIyIiIvIYBjgiIiIij2GAIyIiIvIYBjgiIiIij2GAIyIiIvIYBjgiIiIij2GAIyIiIvIYBjgiIiIij2GAIyIiIvIYBjgiIiIij2GAIyIiIvIYBjgiIiIij2GAIyIiIvIYBjgiIiIij2GAIyIiIvIYBjgiIiIij2GAIyIiIvIYBjgiIiIijwlagJtTc0asvvCdWHv5f8SOr/4hqi793FE/YfUeWbbtwV/F2s9/Idf1fUzbdETWV5z4QuS++roYOGGWVRcWHi5mbj8m1l//zRO/FsXlG4ztX4Tz588bZSMXVMlzX3Hmkdjx6O9iw83fOeoLpi0Qy08/FFvv/UXsfPxP8caB8yIyOlZrs1Bui/30LpogJlXXOOpHzFkh37/Nd/4o5rx9WoS3ijCO4/Tp01JSUpJRR0RERN4VtAC36Ys/iD3f/keGt023v5fLfUdPsuqxvvubf8sAgmVY+tGXVv3Co5/Lsg03fivbYXni2reN/dshNOrH4WbcuHGisrLSld42ELcAN+/Ap/89v3/J8Ibjn771qFW/9d4Psh7/4vywvO3+DyIiKkbWD399mSzbeOv3MuBhGUFObb/w3cvGuaNtSEio4zgePHggpaWlGcdIRERE3hX0AIeeMqyjVwq9Zap+fOUu0TqmjVyOjm8rww7aY719RpZc3vX1j3I9tUcfGYLsAQ711Vd+KRJTu4iOPXOsoKMfh5sTJ05Y4Uantw3EX4Br26mrXO+cPUCeX1SbeLk+auFakZzW3Wq/7tqvZHv0IiKEbX/4N+tcEOo23/mTI8ChDufbtf9gEZuYLHs5UTZ2yWbHcTDAERERNU9BD3D2Mqx3zOonlxHgdj7+0ehJQh2GFFWgUdtO2/yuFeBCQ8OM7ezbB9vGjRuN4GcPgCrA2bfB+oRVu+VyzpipYsvdPxvHjl7HvIlz5PKyU/etbTMLRhoBzg169PRjJSIioubnhQe47vmF1jJ62BYduybnt6leJNQtOHJJLqOnSm07ddNhK8ChVwo9WvmT5xn043BTUlIiqqurXelt3aBHa9SoUdK1a9esZUC9rwCHc8CyCq7LP34gSlfulEO/WH/z6BU59w3LS07esbbFe6YHOPS26efeZ+RE41iJiIio+XnhAQ5Dfmq5uHy9VYeLFVT7SdX75fJru2qtevRO6UOo6InTX7chXtQQqr0M67jwQC0vO3XPqltce8sKcOk5BXIZF2ao+iEzy40AZ59P6EtpaakUH183dEtERETNQ9ADHMIMrqDEvC5cVarqUYeyGVvfs+av2UMPrrDE+vxDn1mT/vUABwg/k9ftlwFHD00vwtmzZ40yFeBWffqNHDbFXD30MKp61KEHce7+s7JenQsCHOrRU4d1XKyAK3SxbA9wKuyqq3fxHmB/6M2zH4cKpUVFRcYxEhERkXcFPcDZ2XvMVOACXKm54PBFRwDDbTVwGw6UYV+z9512BBQMK+I2HPb944pO/TheBhXg7OKSU6x63P7EXqdCHAKb3gYhFyFt5SdfWXXx7TuKVee/dewDIVfvlVMBLiWl/rWJiIjI+4Ie4GIS2oqsoWPllaZ6G1yJqYcOXavIKPkvQpH9PnBKm6T2olveCOsKz6ZABbjwiEh5AUJS5wyjDYaScX+3Dt16GXWKujcc5giit06vx1zAnkOKZaDT62JjY2V4O3DggFFHRERE3hb0AKeXNxQm5CP8YDm7cLyc+I+wprdritzmwDUGbqMyeMYiuZyS2VvefsUtvPozefJkcf/+fdGhQwejjoiIiLwtaAEOQ4D2KykbK2PAUBmEqq/8r3jzvasBe+qakmGzljpuA9JY6FHD3EDMnVvy4R3H1bhEREREQQtwRERERBQcDHBEREREHsMAR0REROQxDHBEREREHsMAR0REROQxDHBEREREHtMkAtygKW8YZS1FWs4g15scExEREfnSJALcs9z01uvmH/5MDBhfZpQTERER+dIkApyXdenSxSgjIiIiCqagBrguvXPFxlu/Fzu++od8tBaeDarq2qX3kA+rV/Rty3YcF1WXfu6QN3GOVR8WHi6f9oDHTK2//mtRXL7B2MeLcP78eaMM8DSFqks/Ezsf/1NsvfcX+Ugse31F7W3r3NNzChx1Q2aWG+c+deMhR5sRc1bI8s13/ijmvH1ahLeKMI7h9OnTUlJSklFHRERE3hW0AId5Xbu/+ZfY9uCv8nFYCHH2Z5li7tfWez9IbkOoC45cElvu/tmCNuMrd1n16lmrdnNqzhj7cTNu3DhRWVnpSm8biK8Ah1CJ8IZzxzkWznPuG8EW5bu+/tEYQsWjs+znjvex8tzXVv3Cdy8b5479hYSEOvaDh9lDWlqacXxERETkXUELcBOr9slgoYcKN24BTkFPHQKM3gbr6IVC71XX/oPF4uM3jTa+ZGVlieLiYld6Wzd5eXli1apV0q1bt6xlQH1a33x5LNFxica2On9z4NDLiGCmnxfW8XxYde7F5etl2eoL3zna1dbWSm3b8iIJIiKi5iRoAQ69bbu/+bcMXxjqK1m+3Wij6AHFTvW+IaSostDQMKMHStG3D4aNGzdavVs61WbznT/J899w47di1p4PjX0o/gJc+bHr8pyWnbrnKNfPWUGPnr4PIiIian6CFuAgqXOG2PHo71bAiGoTb7QBf8ELdW8eveIoi4iKkcEwf/I8g769m5KSElFdXe1Kb+sGQ5KjRo2Srl27Zi2DahMZHWuFT+gzcqKxH/AX4LAdgqB97qAqH7tks3Huvl6DiIiImpegBTg9rM3Y+p6Yf+gzox24Bbic4imyHBcD6HVqm9KVOx1lCSmdjXZuunXrJgoLC13pbQNxmwPXKjJKDn+q9Z5DiuVQqN4O3AIczmPn4x9F39GTjPaAc1/5yVeOMoTa2MRkR5nqFSwqKjL2QURERN4VtABX/sENeQEDJuTj4gL0mHXOHmDVj1xQJaasPyAhkKhlBBHUq547DD8qmYPqg4jq2Vpce0tMXrdfzv9yC4LBdvbsWaMMc/NwcQKujJ226YjYdv8HMXvvx1Y9wqk6X1xFi6FStY76pR99aZz7sFlLrO3xvqJ+7ee/EBNW75HvAd5fPdAywBERETVPQQtwCFWYA6aCFq4atdfjqlRVZ6d63NADpdfZ59F1zy+Ut+ew12O+mX4cLwOGMu3Hv/3h3xw9cstO3TfOTUF95bmfGOX2W63gPVp1/ltHPea/6T12KsClpKQYx0hERETeFbQAB7jYILtwvDG09zzhYolueSOMIdumoNfwcaJ9RpZR/rygtxLDs27DzLGxsTK8HThQ16tHREREzUdQAxy9PIMGDRKTJ082yomIiMj7GOCIiIiIPIYBjoiIiMhjGOCIiIiIPIYBjoiIiMhjGOCIiIiIPIYBjoiIiMhjGOCIiIiIPIYBjoiIiMhjGOCIiIiIPIYBjoiIiMhjGOCIiIiIPIYBjoiIiMhjGOCIiIiIPIYBjoiIiMhjGOCIiIiIPIYBjoiIiMhjGOCIiIiIPIYBjoiIiMhjGOCIiIiIPIYBjoiIiMhjGOCIiIiIPIYBjoiIiMhjGOCIiIiIPIYBjoiIiMhjGOCIiIiIPIYBjoiIiMhjPBHgEiISRFpsmlFO5FdEjAhJzjTLX6qQumOKSnCpq4Pvu15GRERkF/QANzijQFyuuCCWFlUYddA2JlHWK3r9sA5DxeMJj8RrGWVGXXPWOrq1qL25X3x456A4+OkOo74hDh48KB48eCAyMjKMOpgxY4ZYvHixUd5Q4eFh4vadt4xyX7Kz08Sdu3vF2uoZjvLrN3bJcr29bsHCcbJdUVE/q6xHj06y7Nz5jc72MUkifJcQYfMvG/t52ULHvyWPTS9X4lrFiSODDxvl9Iront1VbH9/rVi3f7lRR0TUkgQ9wPXv3E+cX/SJmFsw26iD5SOXil2Ttou+nfqIbslm0Dhb9Il4OP6+iAqLMuqaq9DQUHH4s13ig+s14uD5HeKju4fEgCF9jHaBBDvA4TgvfLbZKPdl6LDe4tufHhHffHtYRMe0tsq/+e6wLNfb67ZtnyvbXblWH2gHD8mWZY8eH3C0VSEppOsQYz8vXVxHvwEO8D8tmXHdjfKWbN+pzfJvAQ6d32nUExG1JEEPcIG8Pe0t0aVtF6NcwQ/Z2r5rjPLmbNTEYfJHKrxVuFxftmW+ePv0FqNdIMEOcI2lAhxs3DTLKm9sgIP8QT1lma8AF77j/4nwql8a+2gqwuaeFyHt6s7BDb73Nfn7jPKWDH8T71/dJ1bueJMBjohavKAGuLVjVouzCz92HUKtnXNMurT4vDg577i1ru8DP2TpLvPf9nz7H2n3N/964t9yefrWo1b91ns/SBtu/Naqj4iKMbbfeOv31vLqC99Z9QvfvSzLsA/VLiQk1DiOQMaNGydOnTolg9SVK1eMejf4kcKPFZYXrZtt9To0thcuWAGufPF4ce9BjeQ2hLpr93zZy3b95i5Zr8KZCnAHDlXIf1dWTpHl9gBX9lqRXL55e7d48Gi/XF6y9FVZpwLcF3f3yn8xJDvEV4DbJUTo4HLj2NRnbf/s137+C6v+zaNXZNn6678WOx//KJe75Y2w6rfc/bMs2/n4n459pfXNl/Uj5qyw6nd9Xbd9Umfz/Q/pXiRCp/geJj014iP53Y+PiDPqfMl99XXHuanjt7fBuvq7wPK2+z9YfxepPfrIv6et9/5ife9xDvr29vNHvdv56WJjY0VlZaVPent/euf29Bvg8J2/e/euUU5E1JwENcBBoDlwB2fUiPioeKNcwY9YeGhdT5Sd+vFo26mr6Jw9QIY0/Pio+lEL11rLYeHhYt21X4ni8g1yHUEM2+MHD+ub7/xJrqsAl104Xq537T9YrscmJsv1sUsaPlyYkpIi7ty5I39MoKKiQv6I6e3cnLx9QAa2Tl1T5Ry4/We2yvUxUwuNtv4EK8ApvubAIZAlJ9d/pu3a1S2rANe+Q4Jso0KXPcD1ehLKEOLUtqOLB4ivvq5rpwLcjJkj5L+nTlf7DXAISfqxqQDSb9x0ua6CSt/Rk+T6gPFlosfg0Vb7WbtPimWn7ju2R/gJj4gUw2YttfaHABcdl2iFNnkMrSLk9stPPzSO45X4jiJs6QOz/L+2D9gmv/v929bP9wtEBTh1bq1j2sjzU+cGyWn1w7L4m0B79Xex5MM71rHDomPXHAEO54f6ITPrgjHODeuu56dJT0+3/hbc6O39YYAjIvJAgLtTctsoA/xwvHHgvLW+4swjx48PREbHii69c2UPCn5sXt97SpZ3zOr3JLT90Wo3etE6ua0KcEtO1v2QpecUyBAH9np/srOzxZkzZ6wfkb1794oePXoY7fxRPW7vnN0mA1xqlw5yfWZ5/Q9xQ7yMABcSGiK+/uaQyMoyh8VVgMPyseOV1rLbEGqnTsliYG6myMvrYdWpAIdl9P5h2W+AS+pmHAM+x01f/MFaL1m+TZbNP/SZo11KZm/5vcmbNFcGNvv2KFPrOx793Qpw+J8GLOO7pb43mQUjjV6sOiEifPNfXMrrlPdcJAPcxC51vY8NoQKcvQznp5+b+rtQAUz9Xeg9dvifI/ux4/xwburvAueG9u7n59SqVStRXFzsk97en0ABrra2VtTU1BjlRETNSZMPcPgR6xDV3ijHDweGq9Q6hk/Vjw96HvBjtPzjB6J05U75wzan5owcHkN9wbSFMqSpbbvnFzoCmhomy588z6HPyInGcegQ1j766CMZnL788kvxzjvviJycHKOdP7h4AYHt3Ut7REhIiCzD+qCiAUZbf15GgFMwfKqCmQpd9gAH6EFDb5o9wGFuHJZr9peLmWWF4tWJBXI9Jqa1I8AhKCK0TZo8xGeACx1oXjiDz3Xx8ZvWOnrbUFZ16edyHf9ifdrmd2VQGzZriezFsm+fkNLZWlftEeDUsDu+Z/p3B73A9uMI6ZIvwso+NI5P+WDo+z6/+764BTicnzo3/F2gXv1d4G9CHS+GUbG8/eHfHNvbwxnOz+3cQD8WXUxMjKiurvZJb+9PoABHRNQSeCLA5SXnGeX4sZmy4aC1vuDIJevHa1L1fuOHbHHtLSvAoQcBc5xUHYaE7AGu8txPjO0bq23btuLWrVvWENHq1atFUlKS0c7NgXPbZWDr2be+Bwnr6InT2/rzMgMcIHThliG+AhzmsGE+mz3AYe6cvQ2GW90CHGAO3ZWrO3wHuBLz9it1Ye1n1jrCPMoQ6vC9wDJ61VR94bxKI8D1LppgrWO+mApwE1bvkcvo2dJfVxc68HURWrjaKFdujL0mr74OeaUuwDeEW4DD+anAir+LZafuWXX4m1ABDutqPqmqV0PCah3n15Bzc/Mih1BLS0vF2LFjjXIioubEEwHujUzz//Dxw7Pp9vdyOTQ0zBrKwjp6T+w/ZKjHpGv1Q4X5S6jHUCrW13z2U0eAm1i1z/ghRA8F5sLpxxHI8OHD5ZAOfqSuXr1q1LvBUKm6iAEKRg4URy/7Dkq+vKwAh7Clllu1CpehLCIi3AhwoHrorAD3JMyBqq9cNdVngMO+1bZuAS6s3Bx+x+eKkBKT0FauY34bytAjpYYE1fdKvv65r40Ap+Z8YYgV6yrAqaH2HV/9w/GaianmRTi4gCGkW/3FETp873Ehg17ujwpw6twA54dzwzL+LubuP2vVqQsR1N8Fgq39ez9l/QFHgMP54dzw92N/Xbfz04WHh4vCwkKf9Pb+BApwTxMKiYi8JmgBLjU+RczKLxMbS9bJAHek7KBcH9jFOQwYKMBhDhx6I9RQoqJ+OFd9+o2ovvJLubz28v/Iul4jSuQ6fqwmrNptXW2ofqjU9vhxUsNeoAIchru2PfirvDoR26PnAb0T6ofwaeBKuwMHnCHDl+jYKHkhw45j1WLJpnlyefK8EqNdIMEKcNXrZor1G1+Tw524wADLgLqEhFgZqFatniaWr5gsPr+63WcPHOgBDvd4w/KaquliX80iq84twNm31wMcbtMh58ElpjvK1WeNnrNX17xlfQ9aRUZJ+JxRVrJ8uxXu7AFOXaSAYUm1DOoq1IoTX8h1hJ9xy7aKuTWfiJWffOU4BjwhArc5cZRpEOCKUhoXbFSAU+f25ntX5TrOC/X4u8D5qb8Ldezq7yJr6Fi5jnNQ56HPb0MZ/jZwfjg3BDrj/IJkzZ4KsefEBjk3FH8TWIa84c4LPRjgiKglCFqAe14iQiPEvdK74uTwE45y/JAMmvKG7A3wdRsDDHV16NbLKLfDhG71w2fvnQD0umUOKhI9hzRukvXz0jE9RWT37yHCwsKMuoYIVoBrCFxckNPP/XUDwfy2wqIcERXl7OlprLCFV42ghM95/uG6Sf1pOYOMbQCBJ2PgML+3jVG9ULggAvvU57jhIgEEpvYZWdq2ISJ8/fcifF39hRG6cZ3GijEdG/+dsw+h4txwDHob9CIH+rvA3wT+xTnaeyMV9Ghj3+a5vXwTJ06U3/np0+uuxCUiaq6afICD3KSBoixjpqNMBTi9bUMNnrFI/hBhef3138j9DZxQf3PZ5uBlBrimICS5uwgdXn+hC9gD3NPARQ3t0uuuKh65oEruzy3k+NQ6Th5TSGczXCkF7QYZPc4N4TYHrrHGVGyS/2IYFr3T+v/UNHX79+8X169fN8qJiJobTwQ4N88a4LA9hpMwHIRlXLigt/G6lh7g3DxrgMNtNLAPNecS8+nQ06a3exmeNcDhf2iwvfqbgOj4+vl0XoCet9xc3+GYiKi58GyAo8Bw4+B27doZ5UpERIScXK6XExERUdPGAEdERETkMQxwRERERB7DAEdERETkMQxwRERERB7jiQCXEJEg0mID3+2dyCEiRoQkZ5rlL1VI3TFFJbjU1cH3XS8jIiKyC3qAC/QorbYxibJe0euHdRgq70r/WkaZUdcQuGUEbocwYPzTbf+ytI5uLWpv7hcf3jkoDn5qPtOzIYJ9GxFfj9LyBc8+vXN3r3w+qr38+o1dslxvr1uwcJxsV1RUf+f9Hj06ybJz5zc628ck1T1Oa/5lYz8NgVvU4HuDpw3odc8qdPxb8tj0ciWuVZw4Mrj+cWLBgL8Lr/1N7Dm5QZy4/Y58zNzhz3aJwaN4uxAiarmCHuD6d+4nzi/6RMwtmG3UwfKRS8WuSdtF3059RLdkM2icLfpEPtQ7KqzucUCNNWPre2Ln4x9Fn5ETjbqmKjQ0VP5AfXC9Rhw8v0P+YA0Y0sdoF0iwAxyO88Jnm41yX9SjtPBs1Gjb81LtD7P3Rz1KC4/bUmWDh2S7PkpLhaSQrkOM/TRETvEU+b3B80P1umcW19FvgAP8T0tmXHej/HnB34WX/iYAfwe1t96Rj9LCMgwdU/cIMyKiliboAS6Qt6e9Jbq07WKUK/ghW9t3jVHenI2aOEz+OIW3qrtH27It88Xbp7cY7QIJdoBrLBXgAM9RVeWNDXCQP6inLPMV4PAIrfCqXxr7aCrwrNaQdnXn4Abf+5r8fUZ5SzaidLC1vPHgSvk38u6lPUY7IqKWIKgBbu2Y1eLswo9dh1Br5xyTLi0+L07OO26t6/vAD1m6y/y39dd/LYe4dj7+p3zYOJYL51U62qBcPXBcHy7acvfPFvUA88pzX1v16iH3at8bb/3e77MxfRk3bpw4deqUDFJXrtQ9NDyQ96/ukz9OWF60brbV29DYXrhgBbjyxePFvQc1ktsQ6q7d82Uv2/Wbu2S9CmcqwB04VCH/XVk5RZbbA1zZa0Vy+ebt3eLBo/1yecnSV2WdCnBf3N0r/8WQLJ656hrgdgkROrjcOLbXdtX+9wkK/7Ieoba49pajDR4Cj4e0uw2hYhv7d0c9saBjzxxZP2LOCut7qb57bs/qDeleJEKn+B4mPTXiI/ndj4+IM+r8wfmpc8MjvvD69np8j9Xfhf430Tl7gOPc8LQJ9ELa26jzxfnhX+zH7fx0uKl0ZWWlT3r7QHLys+XfxNHPze8fvvN37941yomImpOgBjgINAfu4IwaER8Vb5Qr+BELDzWfFoAfDzzWSK2n9c23nlFp15A5cPiRQpu+oyfJ9ezC8XK9a/+6/+PHA8CxPnZJw4cLU1JSxJ07d+SPCVRUVMgfMb2dm5O3D8gfp05dU+UcuP1ntsr1MVMLjbb+BCvAKb7mwCGQJSfXf6bt2tUtqwDXvkOCbKNClz3A9XoSyhDi1LajiweIr76ua6cC3IyZI+S/p05X+w1wCEn6seHRVxCXnCLX49qlisxBZruGzIFTYXDt57+Q4T46LtEKbfIYWkWIWbtPiuWnHxrbvhLfUYQtfWCW/9f2Advkd79/2/r5fg1hPzfA+eltINAcOJzPumu/kkOtqgznh3MbMrMuGOPcsO56fpr09HTrb8GN3j6Qfac2y7+Jio1zjToGOCJqCZp8gLtTctsoA/xwbLv/g/xR0evsAgW4sPBwWf/qmvogsuTkHVmWnlMgQxxgffWF74ztddnZ2eLMmTPWj8jevXtFjx5msPRH9bhhrg8CXGqXDnJ9ZnldwGyolxHgQkJDxNffHBJZWeawuApwWD52vNJadhtC7dQpWQzMzRR5eT2sOhXgsIzePyz7DXBJ3YxjUAGrY5b/YNSQAId69FLhwe9YH7VwrSzD/1io701mwUj5mvq2uBo1fPNfXMrrlPdcJAPcxC51vY8NgdCF1wp0bhAowL1x4LwVRBWcH85N/V3g3NDG/fycWrVqJYqLi33S2weCv4f3r+wVYWFhRl1tba2oqakxyomImpMmH+DwI9Yhqr1RHhkdK6ZvPWoNY6HnwW1Str8Ahx411IVHRDrK1T7zJ89zcNu/DmHto48+ksHpyy+/FO+8847IyakbXmsoXLyg5veEhITIMqwPKhpgtPXnZQQ4BcOnKpip0GUPcIAeNPSm2QMc5sZhuWZ/uZhZVihenVgg12NiWjsCHIIiQtukyUN8BrjQge4XzmCYE0OM+M7gc56y4aDRxl+Aax3TRj7wfdispY5yNez+5tErxncH/6NgbxvSJV+ElX1o7Fv5YOj7Pr/7gdjPTQ9hir8AV9dL+S+R2sM5ZI/zczs30Pehi4mJEdXV1T7p7X3pV9Bb/k8N/tXriIhaEk8EuLzkPKPcbtmpe/KHatmp+0adrwCXNXSsz96DynM/8fnD11Bt27YVt27dsoaIVq9eLZKSkox2bg6c2y4DW8++9T1IWEdPnN7Wn5cZ4AChC7cM8RXgMIcN89nsAQ5z5+xtMNzqFuAAc+iuXN3hO8CV+L/9CoIYPmfMd9Pr/AU49MS6fT8mrN4jyzG0qNfpQge+LkILVxvlyo2x1+TV1yGv1AX4xsK5TVz7tutxgq8Ap6YL5E2cY9Th/Bpybm6exxAq/h4Q3tT8UF9KS0vF2LFjjXIioubEEwHujUzz//DtPRo9hxTLHx1M0Nbb+Qpw+rw3u4lV+4wfvoioGPnjprcNZPjw4XJIBz9SV69eNerdYKjU/iNVMHKgOHrZd1Dy5WUFOIQttdyqVbgMZRER4UaAA9VDZwW4J2EOVH3lqqk+Axz2rbZ1C3Bh5ebwO4KNfV1dwKL3wvoKcGU7jstyzHvT962G2vVAmJhqXoSDCxhCuo0wyhV873Ehg14eiP38MAcP56efG7gFOAzBVl/5pZix7X2jPeD8cG76/tzOTxf+5O+1sLDQJ729GzU3dMwU/+0bEwqJiLwqaAFufN9Sxw16lU2l6x3tEOBiI2ON7ZWyjJnyx6wwxfkfbRXAYPvDv4kFRy45Qh1641S93cgFVbJeL4cVZx5Z28e37+iow5V7bmEvWLr1SrfmwqHXQa9viGAFOHvo0gMYgtb9h3Xz0wDz4c6crfvM1Xw1+75wTzf79rgxr5rfBmquXFRUpNi6fY6xveqx0wNcSErvul64Sc5yzJvUP/PE1Pr5esXlG4zvBVSc+ELW6+VKSmbdkB6+g7P3fuyos8+vhNAhFX7vAxceEi4uj77Y6N43ObRrOz/0Ltu/06Aft4I69T8udrja1L69fm74O9TPL1jU34MusnWE1SY6Olp+52/evGlsT0TUnAQtwD0vEaER4l7pXXFy+AmjDled9ho+zih/XtDrhisU0cOn170IHdNTRHb/Hq4TtRsiWAGuIRDWcvq5v24gmN9WWJQjQ5te1xhhC6/K+8Hp5bhKE58pJuPrdc9Ll965oteIEtE+I0urCxHh678X4et+a2yjjOs0Vozp+PTfuWCfW2homDw/89xevokTJ8rv/PTp0406IqLmpMkHOMhNGih74vRy8u9lBrimICS5uwgdvsIof6lax8ljCuns+zFQBe0GWRevUOPs379fXL9+3SgnImpuPBHg6Om09ABHLQ963nJzfYdjIqLmggGuGcONg9u1a2eUKxEREXJyuV5ORERETRsDHBEREZHHMMAREREReQwDHBEREZHHMMAREREReQwDHBEREZHHMMAREREReQwDHBEREZHHMMAREREReQwDHBEREZHHMMAREREReQwDHBEREZHHMMAREREReQwDHBEREZHHMMAREREReQwDHBEREZHHMMAREREReQwDHBEREZHHMMAREREReQwDHBEREZHHMMAREREReQwDHBEREZHHMMAREREReQwDHBEREZHHMMAREREReYwnAlxCRIJIi00zysm3qLAo0Sq0lVFORERE3hf0AJcQnSAKM4eLjgmpRp2SHJskxvQaLUp6jzXq4MKoT8WNsdeM8oZIyxkkhpYtFtHxbY265qx3QraY232OUf48hYSEil7DxxnlREREFFxBD3CDMwrE5YoLYmlRhVEHbWMSZb2i1w/rMFQ8nvBIvJZRZtQ1xPzDn4k93/5HDBj/dNu/TNvfXyvevbRHrNu/3KhbVD1bvH91nzh6+S0xs3ySUQ/3Su+KyLBIo/x5CQsPF5tuf2+UN3WJyfGicuci+d7qdZCe2Vl8eOegOHH7HbHn5AajnoiI6GULeoAL5O1pb4kubbsY5QrC29q+a4zy5mzaggnio7uHxModb8p/D53f6ahHGQJG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>