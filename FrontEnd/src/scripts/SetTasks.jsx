import { getTasks } from "./TaskManagement";
import { useEffect, useState } from "react";
import LoadingPage from "../components/LoadingPage"
import DeleteTask from "./DeleteTask";
import '../stylesheets/tasks.css';
import PixelContainer from '../components/PixelContainer';
import send from '../stylesheets/images/send.png'
import { submitTask } from "../scripts/TaskManagement";

const SetTasksList = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newTask,setNewTask] = useState('');
    const [inputValidation, setInputValidation] = useState(false);

    useEffect(() => {
        const getTasksData = async () => {
            const userTasks = await getTasks();
            setTasks(userTasks);
            setLoading(false);
        };

        getTasksData();
    },[]);

    function deleteTask(taskid) {
        const taskmapresult = tasks.filter((task)=>{
            if(taskid != task.id){
                return task
            }
        })
        setTasks(taskmapresult)
    }

    const submitNewTask = async () =>{
        if(newTask.trim() !== '') {
            setInputValidation(true);
            const pushItemList = await submitTask(newTask);
            tasks.push(pushItemList);
            setTasks(tasks);
            setNewTask(''); 
        }
    };


    if(loading){
        return(
        <><LoadingPage/></>)
    }

    return(
        <>
        <ul>
                {tasks && tasks.length > 0 ? (  
                    tasks.map((task,index) => (
                        <div key={index}>
                            <li className="task-text"
                                id={task.id} >{task.task} 
                                <DeleteTask taskToDelete={task.id}  refreshTasksOnPage={deleteTask}/>
                            </li>
                        </div>
                    ))
                ) : (
                    <li className="task-text">No tasks available.</li>
                )}
            </ul>
            <div>
                <PixelContainer>
                    <input
                        type='text'
                        className={`input-pixel `}
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <button type="submit"  onClick={ inputValidation? submitNewTask: submitNewTask } 
                    ><img className="send-image" src={send}/></button>
                </PixelContainer>
            </div>
        </>

    )


}






export default SetTasksList