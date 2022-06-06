import React from 'react';
import axios from 'axios';

const Todos = () => {
    const [todo,setTodo] = React.useState("");
    const [show,setShow] = React.useState([]);
    const handleSubmit = (e)=>{
        e.preventDefault()
        const payload = {
            title: todo,
            status: false
        }
        axios.post("http://localhost:8080/",payload).then(setShow([...show,payload]));
        setTodo("")
    }
    const handleDelete = (id)=>{
      axios.delete(`http://localhost:8080/${id}`)
      let filterData = show.filter((e)=>id!==e.id);
      setShow([...filterData])
    }
    const handleToggle = (id)=>{
        show.map((e)=>e.id===id?e.status=!e.status:e);
      setShow([...show])
    }
    const getData = ()=>{
      axios.get("http://localhost:8080/todos").then(({show})=>setShow(show))
    }

    React.useEffect(()=>{
        getData()
    },[])
  return (
    <div className='new-todo'>
      <h3>Todos</h3>
      <form onSubmit={handleSubmit}>
          <input  type="text" 
           value={todo} 
           onChange={(e)=>setTodo(e.target.value)}/>
          <input type="submit" value="Add Todo" />
      </form>
      <div>
        {show.map((e)=>{
          return <div key={e.id} >
          
            <h4>{e.title} 
            <span style={{color:"red", fontSize:"12px"}}>--{e.status?"Done":"Not Done"}</span>
            <input type="checkbox" onClick={()=>handleToggle(e.id)} />
            </h4> 
            <button onClick={()=>handleDelete(e.id)}>Delete Todo</button>
          </div>
        })}
      </div>
    </div>
  )
}

export default Todos