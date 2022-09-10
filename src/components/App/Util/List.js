import React from 'react'
import ListItem from './ListItem'
import './List.css'


  
function List(props) {

   
   
  return (
    <div className='list-container'>
        {/* dynamic rendering -data driven rendering */}
        {props.todos.map( todo => (
            <ListItem text={todo.text}/>
        ))}
        
    </div>
  )
}

export default List