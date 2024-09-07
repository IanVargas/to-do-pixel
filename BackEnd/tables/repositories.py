from sqlalchemy import insert,update,delete
from table_creation import user_table,task_status_table,tasks_table,character_table

class UserRepository:
    def __init__ (self,engine):
        self.engine = engine

    def create_user(self,new_user):
        try:
            with self.engine.connect() as connection:
                connection.execute(insert(user_table),new_user)
        except Exception as error:
            print("error")