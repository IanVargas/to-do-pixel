from repositories import UserRepository
from flask import Flask,jsonify,request
from flask.views import MethodView
from dbmanagemt import DbManagement
from repositories import UserRepository

connection_url = 'postgresql://postgres:SaSha310631@localhost:5432/todopixel'
connect_to_database = DbManagement(connection_url)

class UserView(MethodView):
    repository = UserRepository(connect_to_database)

    def get(self,user_id):
        get_user = self.repository.get_user(user_id)
        return jsonify(get_user),200
    
    def delete(self,user_id):
        delete_user = self.repository.delete_user(user_id)
        return jsonify(delete_user),200

    def post(self):
        user_info = request.json
        self.repository.create_user(user_info)
        return jsonify(user_info['id']),200

