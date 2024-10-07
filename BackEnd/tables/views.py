from repositories import UserRepository
from flask import Flask,jsonify,request,Response
from flask.views import MethodView
from dbmanagemt import DbManagement
from repositories import UserRepository, TaskRepository
from jwt_manager import JWT_Manager


jwt_secret,jwt_transcript = "pixelapp","HS256"
connection_url = 'postgresql://postgres:SaSha310631@localhost:5432/todopixel'
connect_to_database = DbManagement(connection_url)

class UserView(MethodView):
    repository = UserRepository(connect_to_database)

    def get(self,user_id):
        get_user = self.repository.get_user(user_id)
        return jsonify(get_user), 200
    
    def delete(self,user_id):
        delete_user = self.repository.delete_user(user_id)
        return jsonify(delete_user),200

    def post(self):
        user_info = request.json
        self.repository.create_user(user_info)
        return jsonify(user_info['id']),200

class loginView(MethodView):
    repository = UserRepository(connect_to_database)
    jwt_manager = JWT_Manager(jwt_secret,jwt_transcript)

    def post(self):
        user_info = request.get_json()
        print(user_info.get("email"))
        print(type(user_info.get("password")))
        if user_info.get("email") == None or user_info.get("password") == None:
            return Response(status = 400)
        else:
            check_user = self.repository.get_user_by_email(user_info.get("email"))
            if(check_user.email == user_info.get("email") and check_user.password == user_info.get('password')):
                token = self.jwt_manager.encode({"id" : check_user.id})
                return jsonify(token = token), 200

class taskView(MethodView):
    repository = TaskRepository(connect_to_database)
    jwt_manager = JWT_Manager(jwt_secret,jwt_transcript)
    
    def post(self):
        task_info = request.json
        decoded_token = self.jwt_manager.decode(task_info['user_id'])
        task_info['user_id'] = decoded_token['id']
        response =  self.repository.create_task(task_info)
        return jsonify(response),200

    def get(self,user_id):
        decoded_token = self.jwt_manager.decode(user_id)
        get_user = self.repository.get_tasks(decoded_token['id'])
        return jsonify(get_user),200
    
class RegisterView(MethodView):
    repository = UserRepository(connect_to_database)
    jwt_manager = JWT_Manager(jwt_secret,jwt_transcript)
    
    def post(self):
        new_user = request.get_json()

        if new_user : 
            try:
                register_user = self.repository.create_user(new_user)
                if register_user:
                    token = self.jwt_manager.encode({"id" : register_user})
                    return jsonify(token = token),200
            except Exception as e: 
                print(e)
                error = f"Not able to register user {e}"
                return (error), 400

        