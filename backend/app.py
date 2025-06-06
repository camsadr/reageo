from flask import Flask, jsonify, send_from_directory
import sqlite3

app = Flask(__name__)

# Configura o caminho para o frontend
@app.route('/')
def serve_index():
    return send_from_directory('../frontend', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('../frontend', path)

def get_db_connection():
    conn = sqlite3.connect('reageo.db')
    conn.row_factory = sqlite3.Row # Permite acessar colunas por nome
    return conn

# Simula dados de regiões no banco de dados
def init_db():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS regioes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            tipo_evento TEXT NOT NULL,
            probabilidade INTEGER NOT NULL,
            ultimo_evento TEXT NOT NULL,
            lat REAL,
            lon REAL
        )
    ''')
    # Insere dados se a tabela estiver vazia
    cursor.execute("SELECT COUNT(*) FROM regioes")
    if cursor.fetchone()[0] == 0:
        cursor.execute("INSERT INTO regioes (nome, tipo_evento, probabilidade, ultimo_evento, lat, lon) VALUES (?, ?, ?, ?, ?, ?)",
                       ('Sul - RS', 'Enchente', 85, '20/05/2024 - Atingiu 100k pessoas', -30.0346, -51.2177))
        cursor.execute("INSERT INTO regioes (nome, tipo_evento, probabilidade, ultimo_evento, lat, lon) VALUES (?, ?, ?, ?, ?, ?)",
                       ('Nordeste - CE', 'Seca', 70, '15/03/2023 - Atingiu lavouras', -3.7319, -38.5267))
        cursor.execute("INSERT INTO regioes (nome, tipo_evento, probabilidade, ultimo_evento, lat, lon) VALUES (?, ?, ?, ?, ?, ?)",
                       ('Centro-Oeste - MT', 'Incêndio', 60, '01/08/2023 - Atingiu áreas de floresta', -15.5961, -56.0972))
    conn.commit()
    conn.close()

# Inicializa o banco de dados ao iniciar a aplicação
with app.app_context():
    init_db()

@app.route('/api/regioes')
def get_regioes():
    conn = get_db_connection()
    regioes = conn.execute('SELECT * FROM regioes').fetchall()
    conn.close()
    return jsonify([dict(row) for row in regioes])

if __name__ == '__main__':
    app.run(debug=True)