from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from bson import ObjectId
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

app.config["MONGO_URI"] = os.getenv("MONGO_URL", "mongodb://localhost:27017/games")
mongo = PyMongo(app)

@app.route('/games', methods=['GET'])
def get_games():
    games = mongo.db.games.find()
    game_list = []
    for game in games:
        game['_id'] = str(game['_id'])
        del game['_id']
        game.pop('__v', None)
        game_list.append(game)
    return jsonify(game_list)

@app.route('/games', methods=['POST'])
def create_game():
    last_game = mongo.db.games.find().sort('id', -1).limit(1)
    new_id = last_game[0]['id'] + 1 if last_game.count() > 0 else 1
    new_game = {
        'id': new_id,
        'name': request.json.get('name'),
        'release_date': request.json.get('release_date'),
        'price': request.json.get('price'),
        'description': request.json.get('description')
    }
    mongo.db.games.insert_one(new_game)
    new_game['_id'] = str(new_game['_id'])
    del new_game['_id']
    return jsonify(new_game)

@app.route('/games/<int:id>', methods=['PUT'])
def update_game(id):
    updated_game = mongo.db.games.find_one_and_update(
        {'id': id},
        {'$set': request.json},
        return_document=True
    )
    if updated_game:
        updated_game['_id'] = str(updated_game['_id'])
        del updated_game['_id']
    return jsonify(updated_game)

@app.route('/games/<int:id>', methods=['DELETE'])
def delete_game(id):
    mongo.db.games.find_one_and_delete({'id': id})
    return jsonify({'message': 'Game deleted'})

@app.route('/games/<int:id>', methods=['GET'])
def get_game(id):
    game = mongo.db.games.find_one({'id': id})
    if not game:
        return jsonify({'message': 'Game not found'}), 404

    game['_id'] = str(game['_id'])
    del game['_id']
    return jsonify(game)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=1337, debug=True)
