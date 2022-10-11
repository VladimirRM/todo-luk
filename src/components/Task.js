 import React from "react"

 const Task = ({task,...props}) =>{
    const ActionBtn = ()=>
    <div>{task.done?<p>Done</p>:
      <p>Not</p>}</div>
    return(
        <div className="task">
            <p>{task.title}</p>
            <ActionBtn></ActionBtn>

        </div>
    )

 }

 export default Task;