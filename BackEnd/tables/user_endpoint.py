from flask import Flask
from views import UserView,loginView,taskView,RegisterView
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])
login_view_func = loginView.as_view('login_api_endpoint')
task_view_func = taskView.as_view('tasks_endpoint')
register_view_func = RegisterView.as_view('register_api_endpoint')
app.add_url_rule('/login', methods=['POST'],view_func=login_view_func)


app.add_url_rule('/main', methods=['POST'],view_func=task_view_func)
app.add_url_rule('/main/<string:user_id>', methods=['GET'],view_func=task_view_func) 

app.add_url_rule('/register', methods=['POST'],view_func=register_view_func)


app.run(host="localhost", debug=True)