import express from "express"
import cors from "cors"
import connectDB from "./db.js";
import dotenv from "dotenv";
import todoRouter from "./routes/todoRoutes.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
connectDB();

app.use(express.json());

app.use("/todo",todoRouter);
app.use(cors({
    origin : "http://localhost:5173"
}))

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})

// const todos = [
//   {id: 100, task: "todo1", completed: false},
//   {id: 101, task: "todo2", completed: false},
//   {id: 102, task: "todo3", completed: false},
//   {id: 103, task: "todo4", completed: false},
// ]

// // implement the below routes



// // Get all todos
// app.get("/todo", (req, res) => {
//   res.status(200).json({
//     data: todos,
//     message: "Todos fetched successfully",
//   });
// });



// // Create a todo
// app.post("/todo", (req, res) => {
//   const { task, completed = false } = req.body;

//   if (!task || typeof task !== "string" || task.trim() === "") {
//     return res.status(400).json({
//       message: "Task is required and must be a non-empty string",
//     });
//   }

//   if (typeof completed !== "boolean") {
//     return res.status(400).json({
//       message: "Completed must be a boolean",
//     });
//   }

//   const newTodo = {
//     id: todos.length > 0
//       ? Math.max(...todos.map((todo) => todo.id)) + 1
//       : 100,
//     task: task.trim(),
//     completed,
//   };

//   todos.push(newTodo);

//   res.status(201).json({
//     data: newTodo,
//     message: "Todo created successfully",
//   });
// });



// // Toggle completed status
// app.patch("/todo/toggle-completed/:id", (req, res) => {
//   const id = Number(req.params.id);

//   if (Number.isNaN(id)) {
//     return res.status(400).json({
//       message: "Todo ID must be a number",
//     });
//   }

//   const todo = todos.find((todo) => todo.id === id);

//   if (!todo) {
//     return res.status(404).json({
//       message: "Todo not found",
//     });
//   }

//   todo.completed = !todo.completed;

//   res.status(200).json({
//     data: todo,
//     message: "Todo completed status toggled successfully",
//   });
// });

// // Edit a todo
// app.put("/todo/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const { task, completed } = req.body;

//   if (Number.isNaN(id)) {
//     return res.status(400).json({
//       message: "Todo ID must be a number",
//     });
//   }

//   const todo = todos.find((todo) => todo.id === id);

//   if (!todo) {
//     return res.status(404).json({
//       message: "Todo not found",
//     });
//   }

//   if (
//     task !== undefined &&
//     (typeof task !== "string" || task.trim() === "")
//   ) {
//     return res.status(400).json({
//       message: "Task must be a non-empty string",
//     });
//   }

//   if (completed !== undefined && typeof completed !== "boolean") {
//     return res.status(400).json({
//       message: "Completed must be a boolean",
//     });
//   }

//   if (task !== undefined) {
//     todo.task = task.trim();
//   }

//   if (completed !== undefined) {
//     todo.completed = completed;
//   }

//   res.status(200).json({
//     data: todo,
//     message: "Todo updated successfully",
//   });
// });



// // Delete a todo
// app.delete("/todo/:id", (req, res) => {
//   const id = Number(req.params.id);

//   if (Number.isNaN(id)) {
//     return res.status(400).json({
//       message: "Todo ID must be a number",
//     });
//   }

//   const todoIndex = todos.findIndex((todo) => todo.id === id);

//   if (todoIndex === -1) {
//     return res.status(404).json({
//       message: "Todo not found",
//     });
//   }

//   const deletedTodo = todos.splice(todoIndex, 1)[0];

//   res.status(200).json({
//     data: deletedTodo,
//     message: "Todo deleted successfully",
//   });
// });