[stack overflow](https://stackoverflow.com/questions/44376002/what-are-my-options-for-storing-data-when-using-react-native-ios-and-android)

I am still new in the React Native world, and generally in the mobile/native world as well, and I am finding the documentation a bit lacking when it comes to data persistence.

What are my options for storing data in React Native and the implications of each type? For instance, I see that there is local storage and async storage, but then I also see things like Realm, and I'm confused how all of this would work with an outside database.

I specifically want to know:

    What are the different options for data persistence?
    For each, what are the limits of that persistence (i.e., when is the data no longer available)? For example: when closing the application, restarting the phone, etc.
    For each, are there differences (other than general setup) between implementing in iOS vs Android?
    How do the options compare for accessing data offline? (or how is offline access typically handled?)
    Are there any other considerations I should keep in mind?

Thanks for your help!

---

Async Storage (formerly "built-in" to React Native, now moved on its own)

I use AsyncStorage for an in-production app. Storage stays local to the device, is unencrypted (as mentioned in another answer), goes away if you delete the app, but should be saved as part of your device's backups and persists during upgrades (both native upgrades ala TestFlight and code upgrades via CodePush).

Conclusion: Local storage; you provide your own sync/backup solution.

SQLite

Other projects I have worked on have used sqlite3 for app storage. This gives you an SQL-like experience, with compressible databases that can also be transmitted to and from the device. I have not had any experience with syncing them to a back end, but I imagine various libraries exist. There are RN libraries for connecting to SQLite.

Data is stored in your traditional database format with databases, tables, keys, indices, etc. all saved to disk in a binary format. Direct access to the data is available via command line or apps that have SQLite drivers.

Conclusion: Local storage; you supply the sync and backup.

Firebase

Firebase offers, among other things, a real time noSQL database along with a JSON document store (like MongoDB) meant for keeping from 1 to n number of clients synchronized. The docs talk about offline persistence, but only for native code (Swift/Obj-C, Java). Google's own JavaScript option ("Web") which is used by React Native does not provide a cached storage option (see 2/18 update below). The library is written with the assumption that a web browser is going to be connecting, and so there will be a semi-persistent connection. You could probably write a local caching mechanism to supplement the Firebase storage calls, or you could write a bridge between the native libraries and React Native.

Update 2/2018 I have since found React Native Firebase which provides a compatible JavaScript interface to the native iOS and Android libraries (doing what Google probably could/should have done), giving you all the goodies of the native libraries with the bonus of React Native support. With Google's introduction of a JSON document store beside the real-time database, I'm giving Firebase a good second look for some real-time apps I plan to build.

The real-time database is stored as a JSON-like tree that you can edit on the website and import/export pretty simply.

Conclusion: With react-native-firebase, RN gets same benefits as Swift and Java. [/update] Scales well for network-connected devices. Low cost for low utilization. Combines nicely with other Google cloud offerings. Data readily visible and editable from their interface.

---

chatgpt3.5 *how can i deal with data storage in react native*

In React Native, you can deal with data storage using various approaches based on your application's requirements. Here are some common methods for data storage:

1. **AsyncStorage:**

   AsyncStorage is a simple, key-value pair storage system provided by React Native. It is asynchronous and primarily used for storing small amounts of data persistently. AsyncStorage is suitable for storing simple data like user preferences, authentication tokens, etc.

   ```javascript
   import AsyncStorage from '@react-native-async-storage/async-storage';

   // Storing data
   const storeData = async () => {
     try {
       await AsyncStorage.setItem('@key', 'value');
     } catch (error) {
       console.error('Error storing data:', error);
     }
   };

   // Retrieving data
   const retrieveData = async () => {
     try {
       const value = await AsyncStorage.getItem('@key');
       if (value !== null) {
         console.log(value);
       }
     } catch (error) {
       console.error('Error retrieving data:', error);
     }
   };
   ```

2. **SQLite Database:**

   SQLite is a lightweight, embedded database that you can use in React Native applications for more complex data storage needs. The `react-native-sqlite-storage` library provides a convenient way to interact with SQLite databases.

   ```bash
   npm install react-native-sqlite-storage
   ```

   ```javascript
   import SQLite from 'react-native-sqlite-storage';

   const db = SQLite.openDatabase({ name: 'mydatabase.db', location: 'default' });

   // Creating a table
   db.transaction((tx) => {
     tx.executeSql(
       'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT);'
     );
   });

   // Inserting data
   db.transaction((tx) => {
     tx.executeSql('INSERT INTO users (name, email) VALUES (?, ?)', ['John Doe', 'john@example.com']);
   });

   // Querying data
   db.transaction((tx) => {
     tx.executeSql('SELECT * FROM users', [], (_, { rows }) => {
       console.log(rows.raw());
     });
   });
   ```

3. **Realm Database:**

   Realm is a mobile database that provides a simple and efficient way to work with data in React Native applications. It supports offline-first functionality and has a reactive architecture.

   ```bash
   npm install realm
   ```

   ```javascript
   import Realm from 'realm';

   // Defining a schema
   const UserSchema = {
     name: 'User',
     properties: {
       id: 'int',
       name: 'string',
       email: 'string',
     },
   };

   const realm = new Realm({ schema: [UserSchema] });

   // Writing data
   realm.write(() => {
     const newUser = realm.create('User', { id: 1, name: 'John Doe', email: 'john@example.com' });
   });

   // Querying data
   const users = realm.objects('User');
   console.log(users);
   ```

Choose the data storage method that aligns with the complexity and requirements of your React Native application. AsyncStorage is suitable for simple data, SQLite for relational databases, and Realm for a reactive, offline-first approach.