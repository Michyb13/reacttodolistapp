import { FaTrashAlt } from "react-icons/fa"
import "../App.css"

function List(props){
   const styleOne = {
        backgroundColor : props.complete ? "#00FF00" : "#FFFFFF"
   }
   const styleTwo ={
        textDecoration: props.complete ? "line-through" : "none" ,
        opacity: props.complete ? "0.5" : "1"
   }
   
    return(
        <div className="list-item">
            <div className="complete-check"
                onClick={props.done}
                style={styleOne}
            >
             </div>
            <h3 className="item-text"
                style={styleTwo}
            >
                {props.task}
            </h3>
            <button className="delete-button" 
                 onClick={props.delete}
            >
            <FaTrashAlt className="delete-icon"  
             />
            </button>
        </div>
    )
}

export default List