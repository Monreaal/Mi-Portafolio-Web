from flask import Flask, render_template
from livereload import Server

app = Flask(__name__)

@app.route('/')
def inicio():
    return render_template('index.html')

if __name__ == '__main__':
    # Activamos el debug de Flask para los errores en código
    app.debug = True
    
    # Envolvemos la app de Flask con el servidor de LiveReload
    server = Server(app.wsgi_app)
    
    # Le decimos exactamente qué carpetas debe vigilar
    server.watch('templates/')
    server.watch('static/css/')
    
    # Levantamos el servidor exponiéndolo a tu red local
    server.serve(host='0.0.0.0', port=5000)