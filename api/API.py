from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_socketio import SocketIO

app = Flask(__name__)
CORS(app, resources={r"/garrafas": {"origins": "http://localhost:3000"}})
socketio = SocketIO(app, cors_allowed_origins="*")

# Lista para armazenar dados
garrafas = [
    {
        'title': 'Mesa 01',
        'id': 1,
        'temperature': "5",
        'status': 'Cheia',
        'ligado': 1,
        'nomeChip': 'Atender Mesa'
    },
]

# Função para verificar se o title da garrafa já existe
def verificar_dados_garrafa(title):
    for garrafa in garrafas:
        if garrafa['title'] == title:
            return garrafa
    return False

# Rota de teste da API
@app.route('/ping-pong', methods=['GET'])
def pingPong():
    return 'Funcionando!'

# Rota para listar dados em tempo real da bebida
@app.route('/garrafas', methods=['GET'])
def listar_dados_garrafa():
    return jsonify(garrafas)


# Rota para adicionar dados do Raspberry Pi via POST
@app.route('/dadosPost', methods=['POST'])
def adicionar_dados():
    try:
        nova_bebida = request.get_json()
        title = nova_bebida.get('title')

        # Verificar se um título duplicado já existe
        if verificar_dados_garrafa(title):
            return jsonify({"error": "Numero da garrafa já existe"}), 400

        # Se não houver título duplicado, adicione os novos dados
        garrafas.append(nova_bebida)

        # Enviar a atualização para todos os clientes WebSocket
        socketio.emit('atualizacao', nova_bebida)
        
        return jsonify({"message": "Dados adicionados com sucesso!"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400



#Rota para atualizar dados da garrafa
@app.route('/atualizar_garrafa/<int:id>', methods=['PUT'])
def atualizar_garrafa(id):
    try:
        dados_atualizados = request.get_json()

        # Encontre a garrafa com o ID correspondente na lista de garrafas
        for garrafa in garrafas:
            if garrafa['id'] == id:
                # Atualize as informações da garrafa
                garrafa['temperature'] = dados_atualizados.get('temperature', garrafa['temperature'])
                garrafa['nomeChip'] = dados_atualizados.get('nomeChip', garrafa['nomeChip'])
                garrafa['status'] = dados_atualizados.get('status', garrafa['status'])
                garrafa['ligado'] = dados_atualizados.get('ligado', garrafa['ligado'])
                return jsonify({"message": "Garrafa atualizada com sucesso"}), 200

        return jsonify({"error": "Garrafa não encontrada"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 400

socketio.run(app,port=5000,host='localhost')





  

