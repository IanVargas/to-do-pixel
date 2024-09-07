class User():
    def __init__(self,id,username,password,email,xp_user):
        self.id = id
        self.username = username
        self.password = password
        self.email = email
        self.xp_user = xp_user



class Task():
    def __init__(self,task, date_created,status):
        self.task = task
        