import { getTasks } from "./TaskManagement";
import { useEffect, useState } from "react";
import LoadingPage from "../components/LoadingPage"


function SetTasksList(){
    const [tasks, setTasks] = useState([]);
    const [loading , setLoading] = useState(true)

    useEffect(() => {
        const getTasksData = async () => {
            const userTasks = await getTasks();
            setTasks(userTasks);
            setLoading(false)
        }
        getTasksData();
    },[]);

    if(loading){
        return(
        <><LoadingPage/></>)
    }

    return(
        <>
        <ul>
                {tasks && tasks.length > 0 ? (
                    tasks.map((task,index) => (
                        <>
                        <div>
                        <li id={task.id} key={index}>{task.task} <button>delete</button></li>
                        </div>
                        </>
                    ))
                ) : (
                    <li>No tasks available.</li>
                )}
            </ul>
        </>

    )


}






export default SetTasksList