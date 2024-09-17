from dbmanagemt import DbManagement
from repositories import UserRepository


connection_url = 'postgresql://postgres:SaSha310631@localhost:5432/todopixel'
connect_to_database = DbManagement(connection_url)
repo = UserRepository(connect_to_database)
user = {
    "id" : "7",
    "username" : "ian3",
    "password":"123456",
    "email" : "ian@ian.com",
    "xp_user" : 45
}

print(user['id'])
repo.update_user(user)

