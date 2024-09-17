from flask import Flask
from views import UserView

app = Flask(__name__)
user_view_func = UserView.as_view('user_api_endpoint')
app.add_url_rule('/users/<int:user_id>',methods=['GET','DELETE'],view_func=user_view_func)
app.add_url_rule('/users/', methods=['PUT','POST'], view_func=user_view_func)
app.run(host="localhost", debug=True)
