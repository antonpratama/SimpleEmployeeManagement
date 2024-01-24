import expresss from "express";
import cors from "cors";
import EmployeeRoute from "./routes/EmployeeRoute.js";
import DepartmentRoute from "./routes/DepartmentRoute.js";

const app = expresss();
app.use(cors());
app.use(expresss.json());
app.use(EmployeeRoute);
app.use(DepartmentRoute);

app.listen(5000, () => console.log('Server up and running'));