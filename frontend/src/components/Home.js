import {useEffect, useState} from 'react'
import {createTodo, getAllTodo} from '../actions/todoActions'

function Home(){
    //This is for the create todo function, which saves a new document to the database
    const [data, setData] = useState({id: '', title:'', description: ''})

    //This is fo 
    const [allTodos, setAllTodos] = useState([])
    useEffect = (() => {
        fetchTodo();
        console.log('todos', allTodos)
    })

    

    function handleChange(event){
        setData({...data, [event.target.name]: event.target.value})
    }

    function handleSubmit(){
        console.log('title', data.title)
        console.log('description', data.description)
        const body = {title: data.title, description: data.description}
        createTodo(body).then((res)=>{console.log('response', res)}).catch((err)=>{console.error(err)})

    }

    const fetchTodo = async () => {
        const res = await getAllTodo()
        setAllTodos(res.data)
        console.log(allTodos)
        }
    

    return(
        <div>
            <label> Title: </label>
            <input type='text' name='title'  placeholder="Enter title" onChange={handleChange}/> 
            
            <br/>
            
            <label> Description: </label>
            <input type='text' name='description'  placeholder="Enter description" onChange={handleChange}/> 
            
            <br/>

            <button type="button" onClick={handleSubmit}> Hello!</button> <br/>
            <button className = "btn btn-primary" onClick={fetchTodo}> Fetch </button>
            <div>
                {allTodos.map((elem, i) =>(
                    <div key={i}>
                        <h3>{elem.title}</h3>
                        <p>{elem.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home