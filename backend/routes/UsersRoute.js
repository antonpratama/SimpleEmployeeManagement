import express from "express";
import {getUsers,
        register,
        login,
        getUserById,        
        // createUser,
        updateUser,
        deleteUser,
        logout
} from "../controller/UsersController.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controller/RefreshToken.js";

const UsersRoute = express.Router();

UsersRoute.get('/users', verifyToken, getUsers);
UsersRoute.get('/users/:id', getUserById);
UsersRoute.post('/users', register);
UsersRoute.post('/login', login);
UsersRoute.get('/token', refreshToken);
UsersRoute.delete('/logout', logout);
// UsersRoute.post('/users', createUser);
UsersRoute.patch('/users/:id', updateUser);
UsersRoute.delete('/users/:id', deleteUser);

export default UsersRoute;