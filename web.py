import os
from werkzeug.utils import secure_filename
from flask import Flask, render_template, url_for, request, jsonify

app = Flask(__name__)
app.config['DEBUG'] = True

_allowed_extensions = ['png', 'PNG', 'jpg', 'JPG', 'jpeg']


def _type_check(file_name: str) -> bool:
    return '.' in file_name and file_name.rsplit('.', 1)[1] in _allowed_extensions


@app.route('/')
def index():
    return '请使用http://192.168.86.32:8888/upload来上传测试图片'


@app.route('/upload', methods=['POST', 'GET'])
def upload():
    if request.method == 'POST':
        f = request.files['file']
        flag = _type_check(f.filename)
        if not (f and flag):
            return jsonify({'error': 1001,
                            'message': 'image type:png,PNG,jpg,JPG,jpeg'})

        basepath = os.path.dirname(__file__)
        upload_path = os.path.join(basepath, 'static/download', secure_filename(f.filename))
        f.save(upload_path)
        print('Save image')
    return render_template('upload.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8888)
