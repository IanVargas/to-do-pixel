import sqlalchemy
from sqlalchemy import create_engine
from table_creation import create_tables_database

class DbManagement:

    def __init__(self,connection_url):
        self.engine = connection_url
        try:
            self.establish_connection = self.create_connection(connection_url)
        except Exception as e:
            pass

    def create_connection(self,connection_url):
        try:
            engine = create_engine(connection_url, echo=True)
            create_tables_database(engine)
            return engine
        except Exception as error:
            print(error)  
                    
    def upload_to_database(self,query):
        try:
            with self.establish_connection.connect() as connection:
                connection.execute(query)
                connection.commit()  
        except Exception as error:
            print(error)
            
    def get_information(self,query):
        try:
            with self.establish_connection.connect() as connection:
                test = connection.execute(query)
                for row in test:
                    return row
        except Exception as error:
            print(error)

