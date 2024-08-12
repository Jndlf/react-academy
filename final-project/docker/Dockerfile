# Verwende ein offizielles Python-Image als Basis
FROM python:3.11-slim

# Setze das Arbeitsverzeichnis
WORKDIR /server

# Kopiere die requirements-Datei und installiere die Abhängigkeiten
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Kopiere den Rest des Anwendungscodes
COPY . .

# Exponiere den Port, auf dem Flask läuft
EXPOSE 1337

# Starte die Flask-Anwendung
CMD ["python", "server.py"]
