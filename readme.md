# Instagram Clone

## Contributors

### Aaron

> Backend / API / Server

### Maks

> Front End &

### Kirsi

> Database & Model Logic

## Documentation

### API Routes

### DB Schema & Firebase implementation

To run this sample, you need the following prerequisites.

Software prerequisites:

Sqlite 
SQL Server Management Studio, preferably June 2016 release or later (version >= 13.0.15000.23).
(to build sample apps) Visual Studio 2015.
(to run ETL jobs) SQL Server 2016 Integration Services


To get your database and firebase for this igclone app working you must make sure your database is set up and configured properly. Take the the following steps to get things
working.

Step 1 : Make sure you have the sqlite dependency on your package.json. If not, npm install --save sqlite so to start your schema for your db. 

Step 2: Build up your schema by creating the following tables:
	- Users
	- Follows
	- Posts 

Step 3: Create a 'get' function to grab the users' information from the users table and join it with the 'follow' so to get the feeds under your api.js file. 

Step 4: Implement firebase to store your photos on your db storage. 

Step 5: Create a file to hold your firebase functions and config of your storage.

Step 6: Make sure to link your firebase file and your html file where you'll be rendering your feeds. 

### Front End Framework










