import { deleteTasks } from "./TaskManagement";
import trash from '../stylesheets/images/trash.png'
import '../stylesheets/trash.css'

const DeleteTask = ({taskToDelete,  refreshTasksOnPage}) => {


    const deleteAndUpdate = async () =>  { 
        refreshTasksOnPage(taskToDelete); 
        await deleteTasks(taskToDelete);
    }

    return(
    <button onClick={deleteAndUpdate}><img className="trash-can" src={trash} /></button>
    )

}



export default DeleteTask