import { CREATETODO, EDITTODO } from "./todoActins";

const initialState = []

const todoReducer = (state = initialState , actions) => {

    switch(actions.type){
        case CREATETODO : 
            {
                let Obj = {
                    id : state.length , task : actions.paylod
                }

                return [...state,Obj]
            }

        case EDITTODO :
             {
                // let tempState = state;
                // let filteredArray = state.filter(item => item.id == actions.paylod.id);
                // let filterdObj = filteredArray[0];
                // let filteredIndex = state.findIndex(item => item.id == actions.paylod.id);
                // filterdObj.task = actions.paylod.updatedTask
                // tempState[filteredIndex] = filterdObj
                // console.log(tempState)
                // return state

                return state.map(item => 
                    item.id == actions.paylod.id ? ({id : item.id , task : actions.paylod.updatedTask}) : item
                )

             }
        default : 
        return state
        
    }

}

export default todoReducer