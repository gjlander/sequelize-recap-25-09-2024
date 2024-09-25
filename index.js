// Import express and the db file just for side effects (to connect to the database)
import express from 'express';
import {
    createUser,
    deleteUser,
    getUserById,
    getUsers,
    updateUser,
    loginUser,
} from './controllers/users.js';
import {
    getDucks,
    createDuck,
    getDuckById,
    updateDuck,
    deleteDuck,
} from './controllers/ducks.js';
// import './db/index.js';
import './db/associations.js';

// Create an express app
const app = express();

// Set a port from the environment variable or default to 8080
const port = process.env.PORT || 8080;

// This line lets us use the JSON body of a request in our routes as req.body
app.use(express.json());

// app.route() helps us define handlers for different HTTP methods on the same route
app.route('/users').get(getUsers).post(createUser);
app.route('/users/:id').get(getUserById).put(updateUser).delete(deleteUser);
//will create token later on, that will be used to authenticate user
app.route('/users/login').post(loginUser);

//duck routes
app.route('/ducks').get(getDucks).post(createDuck);
app.route('/ducks/:id').get(getDuckById).put(updateDuck).delete(deleteDuck);

// Start the server
app.listen(port, () => console.log(`Server is running on port ${port}`));
