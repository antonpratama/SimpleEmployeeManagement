import expresss from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import EmployeeRoute from "./routes/EmployeeRoute.js";
import DepartmentRoute from "./routes/DepartmentRoute.js";
import UsersRoute from "./routes/UsersRoute.js";

dotenv.config();
const app = expresss();
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser());
app.use(expresss.json());
app.use(EmployeeRoute);
app.use(DepartmentRoute);
app.use(UsersRoute);

app.listen(5000, () => console.log('Server up and running'));