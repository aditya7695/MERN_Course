import Todo from "../models/todoModel.js";

export const getTodo = async(req,res) => {
    try{
        const todos = await Todo.find()
        res.status(200).json(
            {
                data : todos,
                message : "Data fetched successfully"
            }
        )
    }catch(err){
        res.status(500).json({
            error : err.message,
            message : "Error in data fetching"
        })
    }
};

export const createTodo = async(req,res) => {
    
    try { 
        const { task, completed = false } = req.body;
      
        if (!task || typeof task !== "string" || task.trim() === "") {
          return res.status(400).json({
            message: "Task is required and must be a non-empty string",
          });
        }
      
        if (typeof completed !== "boolean") {
          return res.status(400).json({
            message: "Completed must be a boolean",
          });
        }
      
      const newTodo = await Todo.create({
          task : task.trim(),
          completed
      })
      
        res.status(201).json({
          data: newTodo,
          message: "Todo created successfully",
        });
      
    } catch (err) {
        res.status(500).json({
            error : err.message ,
            message : "Error in creating Todo"
        })
    }
}

export const toggleCompleted = async() => {

};
// const id = Number(req.params.id);
//   const { task, completed } = req.body;

//  

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

export const updateTodo = async(req,res) => {
try {

    const { task, completed } = req.body;
    const id = req.params.id ;


    if(task !== undefined && ( typeof task !== "string" || task.trim() == "")){
        res.status(400).json({
            message : "Task should not be empty"
        })
    }

    if(completed !== undefined && typeof completed !== "boolean"){
        res.status(400).json({
            message : "Completed should be boolean"
        })
    }

    const updateData = {};
    if(task !== undefined ){
        updateData.task = task.trim()
    }
    if(completed !== undefined){
        updateData.completed = completed;
    }

    const updatedTodo = await Todo.findByIdAndUpdate(id , updateData , {new : true , runValidators : true});

    if(!updatedTodo){
        res.status(404).json({
            message : "Todo not found"
        })
    }

    res.status(200).json({
        data : updateTodo,
        message : "Todo updated Successfully"
    })

   

} catch (err) {
    
    res.status(500).json({
        error : err.message,
        message : "Error in update data"
    })
}
};
export const deleteTodo = async => {

};