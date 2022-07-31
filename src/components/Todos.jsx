import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delTodo, editTodos, getTodos, postTodos } from '../redux/action';

const Todos = () => {
    const dispatch=useDispatch();
    const todos=useSelector((state)=>state.todos);
    const ref=useRef();
    const handlePost=()=>
    {
      const payload={
        "id":Date.now(),
        "todo":ref.current.value,
        "status":false
      }
      ref.current.value&&dispatch(postTodos(payload)).then((res) => {
        dispatch(getTodos());
      });
    }

    const handleDel=(el)=>
    {
      let id={id:el.id}
      dispatch(delTodo(id)).then((res) => {
        dispatch(getTodos());
      });
    }

    const handleEdit=(el)=>
    {
      let data={
        "id":el.id,
        "todo":ref.current.value,
        "status":el.status
      }

      dispatch(editTodos(data)).then((res) => {
        dispatch(getTodos());
      });
    }


    useEffect(()=>
    {
       dispatch(getTodos())
    },[dispatch]);


    
  return (
    <div>
      <h2>Todos</h2>
      <div>
        <input ref={ref} />
        <button onClick={handlePost}>POST</button>
      </div>
      <div>
        {
          todos.map((el)=>
          (
            <div key={el.id} style={{display:'flex',margin:"auto",marginTop:"10px",width:"250px",border:"1px solid black",justifyContent:'center',alignItems:'center',gap:"20px"}}>
              <p>{el.todo}</p>
              <button onClick={()=>handleEdit(el)}>PUT</button>
              <button onClick={()=>handleDel(el)}>DELETE</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Todos