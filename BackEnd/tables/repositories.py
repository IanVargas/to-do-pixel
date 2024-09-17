from sqlalchemy import insert,update,delete,select
from table_creation import user_table,task_status_table,tasks_table,character_table


class UserRepository:

    def __init__(self,db_connection):
        self.db_connection = db_connection

    def create_user(self,new_user):
        create_query = (insert(user_table)
                        .values(new_user))
        self.db_connection.upload_to_database(create_query)

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




