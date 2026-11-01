export const INCREMENT = "INCREMENT";
export const INCREMENTBY = "INCREMENTBY";
export const DECREMENT = "DECREMENT";

export const increment = () =>{
    return {type : INCREMENT}
}
export const incrementBy = (paylod) =>{
    return {type : INCREMENTBY , paylod}
}
export const decrement = () =>{
    return {type : DECREMENT}
}