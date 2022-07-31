import axios from "axios"
import { GET_F, GET_S, POST_F, POST_S } from "./types";


export const getTodos=()=>(dispatch)=>
{
    axios.get("http://localhost:5000/")
    .then((res)=>dispatch({type:GET_S,payload:res.data}))
    .catch((err)=>dispatch({type:GET_F}))
}

export const postTodos=(payload)=>(dispatch)=>
{
    return axios.post("http://localhost:5000/",payload)
    .then((res)=>{ dispatch({type:POST_S})})
    .catch((err)=>{dispatch({type:POST_F})})
}

export const delTodo=(id)=>(dispatch)=>
{
    return axios.delete("http://localhost:5000/",{data:id})
    .then((res)=>{ dispatch({type:POST_S})})
    .catch((err)=>{dispatch({type:POST_F})})
}

export const editTodos=(data)=>(dispatch)=>
{
    return axios.put("http://localhost:5000/",data)
    .then((res)=>{ dispatch({type:POST_S})})
    .catch((err)=>{dispatch({type:POST_F})})
}