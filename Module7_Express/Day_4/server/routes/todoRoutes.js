import express from "express"
import { getTodo , createTodo , toggleCompleted , updateTodo , deleteTodo } from "../controllers/todoController.js";

const router = express.Router();

router.get("/",getTodo);
router.post("/",createTodo);
router.patch("/toggle-completed/:id",toggleCompleted);
router.put("/:id",updateTodo);
router.delete("/:id",deleteTodo);

export default router;