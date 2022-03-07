from flask import Flask, request
import configs

app = Flask(__name__)
app.config.from_object(configs.DevelopmentConfig)


# 首頁，不限 methods
@app.route('/')
def index():
    return 'Hello World'


# POST methods(POST 大寫，要有s跟中括號)
@app.route('/posttest', methods=['POST'])
def posttest():
    return 'post test success'


@app.route('/home/<username>')
def home_page(username):
    return f"Hello {username}"


@app.route('/add/<int:a>/<int:b>')
def add(a, b):
    return str(a + b)


if __name__ == "__main__":
    app.run()
