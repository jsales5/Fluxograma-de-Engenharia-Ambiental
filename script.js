:root {
    --bg-body: #0d1117;
    --bg-card: #161b22;
    --border: #30363d;
    --text: #c9d1d9;
}

body {
    background-color: var(--bg-body);
    color: var(--text);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 20px;
}

#grade-container {
    display: flex;
    gap: 15px;
    overflow-x: auto;
    padding-bottom: 20px;
}

.semestre {
    min-width: 280px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 10px;
}

h2 {
    color: #58a6ff;
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 15px;
}

.materia {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    margin: 8px 0;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: bold;
    color: #000;
}

/* Cores do Fluxograma Ambiental */
.vermelho { background-color: #ff5555; }
.laranja { background-color: #ffaa00; }
.amarelo { background-color: #f1c40f; }
.azul { background-color: #3498db; }
.verde { background-color: #2ecc71; }
.cinza { background-color: #95a5a6; }
.roxo { background-color: #9b59b6; }

.concluida {
    opacity: 0.2;
    text-decoration: line-through;
    filter: grayscale(1);
}

input[type="checkbox"] {
    width: 18px;
    height: 18px;
}
