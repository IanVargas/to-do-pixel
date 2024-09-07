import sqlalchemy
from sqlalchemy import create_engine
from table_creation import create_tables_database

connection_url = 'postgresql://postgres:SaSha310631@localhost:5432/todopixel'
engine = create_engine(connection_url, echo=True)
create_tables_database(engine)

