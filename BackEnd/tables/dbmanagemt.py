import sqlalchemy
from sqlalchemy import create_engine,insert
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
                query_response = connection.execute(query)
                connection.commit()
                return query_response.inserted_primary_key[0]
        except Exception as error:
            print(error)
            
    def get_information(self,query):
        try:
            with self.establish_connection.connect() as connection:
                result = connection.execute(query)
                rows = []
                for row in result:
                    rows.append(row)
            return rows
        except Exception as error:
            print(error)

