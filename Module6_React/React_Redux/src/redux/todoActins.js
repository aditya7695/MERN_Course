export const CREATETODO = "CREATETODO"
export const EDITTODO = "EDITTODO"

export const createTodo = (paylod) => {
    return {type : CREATETODO , paylod}
}
export const editTodo = (paylod) => {
    return {type : EDITTODO , paylod}
}