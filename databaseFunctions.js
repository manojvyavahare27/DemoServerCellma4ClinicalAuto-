// databaseFunctions.js

import { createConnection } from 'mysql';

let databaseConnection; // Variable to store the database connection instance

const dbConfig = {
	 host: "10.0.0.72",
    user: "Manoj.vyavahare",
    password: "Welcome@123",
    port:3314,
    //database: "cellma4_api",
    database: "cellma4_loadtesting_9sep25",
    connectionLimit: 10
};

async function openDatabaseConnection() {
	// Open MySQL database connection
	databaseConnection = createConnection(dbConfig);

	// Connect to the database
	databaseConnection.connect((err) => {
		if (err) {
			console.error('Error connecting to MySQL database:', err.message);
			throw err;
		}
		console.log('Connected to MySQL database');
	});
}

async function closeDatabaseConnection() {
	// Close MySQL database connection
	if (databaseConnection) {
		databaseConnection.end((err) => {
			if (err) {
				console.error('Error closing MySQL database connection:', err.message);
				throw err;
			}
			console.log('Closed MySQL database connection');
		});
	}
}

export default {
	openDatabaseConnection,
	closeDatabaseConnection
};