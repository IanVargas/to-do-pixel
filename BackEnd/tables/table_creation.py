from sqlalchemy import Table, Column, Integer, String, MetaData,ForeignKey,Date

metadata_connection = MetaData()

def create_tables_database(engine):
    try: 
        metadata_connection.create_all(engine,checkfirst=True)
    except Exception as e:
        print(e)


user_table = Table(
    "users",
    metadata_connection,
    Column("id",Integer,primary_key=True,autoincrement=True),
    Column("username",String),
    Column("password",String),
    Column("email",String),
    Column("xp_user",Integer),
)
task_status_table = Table (
    "status",
    metadata_connection,
    Column("id",Integer,primary_key=True),
    Column("status",String,nullable=False)
)
tasks_table = Table(
    "tasks",
    metadata_connection,
    Column("id",Integer,primary_key=True,autoincrement=True),
    Column("task",String),
    Column("date_created",Date),
    Column("date_closed",Date,nullable=True),
    Column("user_id",ForeignKey("users.id"),nullable=False),
    Column("status_id",ForeignKey("status.id"),nullable=False)
)
character_table = Table(
    "character",
    metadata_connection,
    Column("id",Integer,primary_key=True,autoincrement=True),
    Column("character_path",String),
    Column("user_id",ForeignKey("users.id"),nullable=False)
)

