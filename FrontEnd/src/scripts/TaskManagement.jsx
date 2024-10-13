import { getCoockie } from "./coockieManagement";
import axios from "axios";
import moment from 'moment';

const user_token = getCoockie()

export async function getTasks(){
    const user_token_get = await getCoockie()
    const url=`http://localhost:5000/main/${user_token_get}`
    const task_lis = await axios.get(url);
    return task_lis.data;
}


export async function submitTask(newTask){
    const url=`http://localhost:5000/main`
    const date = moment()
    const todayDate = date.format('YYYY-MM-DD')
    let submitTasktoApi = {
        'task' : newTask,
        'date_created' : todayDate,
        'user_id':user_token,
        'status_id':1
    }
    const submitToApi = await axios.post(url,submitTasktoApi)
    submitTasktoApi.id = submitToApi.data
    return submitTasktoApi;
    
}

export async function deleteTasks(taskToDelete) {
    const url = `http://localhost:5000/main/${taskToDelete}`;
    await axios.delete(url);
}
