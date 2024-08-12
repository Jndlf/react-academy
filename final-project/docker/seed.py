import os
import json
from pymongo import MongoClient

def seed_database():
    mongo_url = os.getenv("MONGO_URL", "mongodb://mongo:27017")
    client = MongoClient(mongo_url)
    db = client["games"]
    collection = db["games"]

    # Lese die JSON-Datei
    with open("/data/games_data.json", "r") as file:
        data = json.load(file)

    # Leere die Datenbank (falls erforderlich) und füge die Daten ein
    collection.delete_many({})
    collection.insert_many(data)

    print("Daten erfolgreich eingefügt!")

if __name__ == "__main__":
    seed_database()

