# Run the app

First you need to have postgres installed with a database called ```anki_clone```,
a user called ```anki``` with password ```anki_clone```. The sequelize library use these credentials to connect to the database.
Then you can run :  
- ```node dbconfig/connectionTest.js``` to ensure the connection has been made 
- ```node dbconfig/populate.js``` to populate the database.  

If you encounter some issues, you can run the following sql commands as user ```postgres```:  
```sql
GRANT ALL ON SCHEMA public TO anki;
GRANT ALL ON DATABASE anki_clone TO anki;
ALTER DATABASE anki_clone OWNER TO anki;
```

If you still encounter issues, you can modify the credentials in the ```model.js``` file:
```js
const sequelize = new Sequelize(
    'anki_clone',
    'postgres',
    null
```
so that you connect to the database with the admin user postgres, but this is not recommended.


To build & serve the app :
- Install the dependencies with ```npm install```
- Build the front end files with ```npm run build``` or ```ng build --output-hashing none```
- Serve the files with ```node backend/server.js```