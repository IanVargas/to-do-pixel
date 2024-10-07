from sqlalchemy import insert,update,delete,select
from table_creation import user_table,task_status_table,tasks_table,character_table


class UserRepository:

    def __init__(self,db_connection):
        self.db_connection = db_connection

    def create_user(self,new_user):
        create_query = (insert(user_table)
                        .values(new_user))
        create_new_user = self.db_connection.upload_to_database(create_query)
        return create_new_user


    def delete_user(self,user_id):
        delete_query = delete(user_table).where(user_table.c.id == user_id)
        self.db_connection.upload_to_database(delete_query)
        
    def update_user(self,user_info):
        update_query = (update(user_table)
                        .where(user_table.c.id == user_info['id'])
                        .values(user_info)
                        )
        self.db_connection.upload_to_database(update_query)
    
    def get_user(self,id):
        get_query = (select(user_table).where(user_table.c.id == id))
        get_result = self.db_connection.get_information(get_query)
        user_information = {
            'id' : get_result[0],
            'username': get_result[1]
        }
        return user_information
    
    def get_user_by_email (self,user_email):
        print(user_email)
        get_query_by_email = (select(user_table).where(user_table.c.email == user_email))
        get_result = self.db_connection.get_information(get_query_by_email)
        user_information = {
            'id' : get_result[0],
            'username': get_result[2],
            'password': get_result[3]
        }
        return get_result


class TaskRepository:

    def __init__ (self,db_connection):
        self.db_connection = db_connection

    def create_task(self,task):
        print("HERE I AM HERE!!!!!",task)
        create_query = (insert(tasks_table)
                        .values(task))
        response = self.db_connection.upload_to_database(create_query)
        return response

    def delete_task(self,task):
        delete_query = (delete(tasks_table)
                        .where(tasks_table.c.task == task['task'])
                        .where(tasks_table.c.user_id == task['user_id']))
        response = self.db_connection.upload_to_database(delete_query)  
        return response
    
    def get_tasks(self,user_id):
        tasks_response = []
        get_tasks_query = (select(tasks_table).where(tasks_table.c.user_id== user_id))
        task_query_response = self.db_connection.get_information(get_tasks_query)
        for tasks in task_query_response:
            task_information = {
                'id' : tasks[0],
                'task' : tasks[1],
                'date_created' : tasks[2],
                'date_closed' : tasks[3],
                'status' : tasks[5]
            }   
            tasks_response.append(task_information)
        return tasks_response