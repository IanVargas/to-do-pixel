import {useCallback, useEffect, useState } from "react";
import SetTasksList from "../scripts/setTasks";
import { submitTask } from "../scripts/TaskManagement";

function LoadMainPage(){
    const [newTask,setNewTask] = useState('');
    
    function submitNewTask(e){
        e.preventDefault();
        const submitTaskToApi = submitTask(newTask)
        return(
            <>
             <SetTasksList/>
            </>
        )
    }
    return(
        <>
        <SetTasksList/>
        <input
        type='text'
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit" onClick={submitNewTask}>submit</button>
        </>
    );
}




export default LoadMainPage;