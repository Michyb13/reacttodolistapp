import React from "react"
import List from "./components/List"
import './App.css';
import { FaPlus  } from "react-icons/fa"
import { nanoid } from "nanoid"


function App() {
  
const [items, setItems] = React.useState(JSON.parse(localStorage.getItem("list"))||[])

const [body, setBody] = React.useState("")




React.useEffect(() => {
    localStorage.setItem("list" ,JSON.stringify(items))
}, [items])

function handleChange(event){
    const {value} = event.target
    setBody(value)
}

function addNewTask(){
    setItems(prevItems => {
        return [
            ...prevItems,
            {
                id: nanoid() ,
                task: body,
                isComplete: false
            }
        ]
        
    })
    setBody("")
}

function completeTask(id){
        setItems(prevItems => prevItems.map(item => {
           return  item.id === id ?
            {...item , isComplete: !item.isComplete} :
            item
        }))
        
}

function deleteTask(id){
    setItems(prevItems => prevItems.filter(item => item.id !== id))
}



const list = items.map(item => {
    return (
        <List 
        key={item.id} 
        task={item.task} 
        complete={item.isComplete}
        done={() => completeTask(item.id)}
        delete= {() => deleteTask(item.id)}
        />
    )
})


return(
    <main>
        <h1 className="header-text"> Simple To-Do List📝</h1>
        <div className="header">
            <input 
            type="text" 
            placeholder="Enter your Task" 
            className="input-field"
            value={body}
            onChange={handleChange}
            name="body"
            />
            <button 
            className="add-button"
            onClick={addNewTask}
            >
                < FaPlus className="add-icon" />
            </button>
        </div>
        <div className="list-container">
           {items.length === 0  ? <h1 className="message">No Uncompleted Tasks</h1> : list}
        </div>
    </main>
)

}

export default App;
