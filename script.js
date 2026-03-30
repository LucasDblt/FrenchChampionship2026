// ==========================================
// script.js - LOGIQUE ET INTERACTIVITÉ
// ==========================================

// --- 1. INITIALISATION DES STATS ---
try {
    const tabContainer = document.getElementById('tabContainer');
    const cardsContainer = document.getElementById('cardsContainer');
    Object.keys(cubeData).forEach((event, index) => {
        const btn = document.createElement('button');
        btn.className = `tab-btn ${index === 0 ? 'active' : ''}`;
        btn.innerText = event.toUpperCase();
        btn.onclick = () => {
            document.querySelectorAll('.event-card').forEach(c => c.style.display = 'none');
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.getElementById(`card-${event}`).style.display = 'block';
            btn.classList.add('active');
        };
        tabContainer.appendChild(btn);
        const div = document.createElement('div');
        div.id = `card-${event}`; div.className = "event-card";
        div.style.display = index === 0 ? 'block' : 'none';
        div.innerHTML = `<div class="header">${event.toUpperCase()}</div>` + 
            cubeData[event].map((p, i) => `<div class="row"><div class="rank">${i+1}</div><a href="https://www.worldcubeassociation.org/persons/${p[2]}" target="_blank" class="player-link">${p[0]}</a><div class="time">${p[1]}</div></div>`).join('');
        cardsContainer.appendChild(div);
    });
} catch(e) { console.log("Données cubeData non trouvées."); }

// --- 2. GESTION DES ONGLETS ET DÉBATS ---
let currentD = -1;

function switchMode(m, btn) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('sec-' + m).classList.add('active');
    btn.classList.add('active');
}

function nextDebat() { 
    currentD = (currentD + 1) % debats.length; 
    document.getElementById('debat-text').innerText = debats[currentD]; 
}

// --- 3. LOGIQUE DES MOTS CROISÉS ---
let currentGridId = 'grille_cdf2025';
let activeWordId = null; 

document.getElementById('grid-selector').addEventListener('change', (e) => {
    currentGridId = e.target.value;
    activeWordId = null; 
    initGrid();
});

function initGrid() {
    const container = document.getElementById('crossword-container');
    const cluesList = document.getElementById('clues-list');
    if(!container || !cluesList) return; 
    
    container.innerHTML = '';
    cluesList.innerHTML = '';
    window.cellsNeeded = {}; 

    const words = gridsData[currentGridId];

    words.sort((a,b) => a.y === b.y ? a.x - b.x : a.y - b.y);
    let numCounter = 1;
    const startPoints = {};
    words.forEach(w => {
        const key = `${w.x}-${w.y}`;
        if(!startPoints[key]) startPoints[key] = numCounter++;
        w.num = startPoints[key];
        w.solved = localStorage.getItem(`found_${currentGridId}_${w.id}`) === "true";
    });
    
    let maxX = 0, maxY = 0;
    words.forEach(w => {
        let endX = w.direction === 'horizontale' ? w.x + w.mot.length - 1 : w.x;
        let endY = w.direction === 'verticale' ? w.y + w.mot.length - 1 : w.y;
        if (endX > maxX) maxX = endX;
        if (endY > maxY) maxY = endY;
    });

    container.style.gridTemplateColumns = `repeat(${maxX}, 30px)`;
    container.style.gridTemplateRows = `repeat(${maxY}, 30px)`;

    words.forEach(w => {
        for (let i = 0; i < w.mot.length; i++) {
            let cx = w.direction === 'horizontale' ? w.x + i : w.x;
            let cy = w.direction === 'verticale' ? w.y + i : w.y;
            let cId = `${cx}-${cy}`;
            if (!window.cellsNeeded[cId]) {
                window.cellsNeeded[cId] = { expected: w.mot[i], words: [] };
            }
            window.cellsNeeded[cId].words.push(w);
            if (i === 0) window.cellsNeeded[cId].startNum = w.num;
        }
    });

    const savedData = JSON.parse(localStorage.getItem(`save_${currentGridId}`)) || {};

    for (let y = 1; y <= maxY; y++) {
        for (let x = 1; x <= maxX; x++) {
            const cellId = `${x}-${y}`;
            const wrapper = document.createElement('div');
            wrapper.className = 'cell-wrapper';

            const input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 1;
            input.dataset.x = x;
            input.dataset.y = y;
            input.id = `cell-${cellId}`;

            if (window.cellsNeeded[cellId]) {
                if(window.cellsNeeded[cellId].startNum) {
                    const numSpan = document.createElement('span');
                    numSpan.className = 'cell-number';
                    numSpan.innerText = window.cellsNeeded[cellId].startNum;
                    wrapper.appendChild(numSpan);
                }

                input.className = 'cell';
                input.dataset.expected = window.cellsNeeded[cellId].expected;
                if (savedData[cellId]) input.value = savedData[cellId];
                
                input.addEventListener('input', handleInput);
                input.addEventListener('keydown', handleKeydown);
                input.addEventListener('focus', handleFocus);
                input.addEventListener('click', handleClickToggle);

            } else {
                input.className = 'cell empty';
                input.disabled = true;
            }
            wrapper.appendChild(input);
            container.appendChild(wrapper);
        }
    }

    words.forEach(w => {
        const li = document.createElement('li');
        li.className = `clue-item ${w.solved ? 'solved' : ''}`;
        li.id = `clue-${w.id}`;
        li.onclick = () => focusWordFromClue(w.id);
        
        const dirLabel = w.direction === 'horizontale' ? 'Horizontale' : 'Verticale';
        li.innerHTML = `<button class="hint-btn" onclick="event.stopPropagation(); giveHint('${w.id}')">💡 Indice</button>
                        <strong>${w.num}. (${dirLabel})</strong> ${w.indice}`;
        cluesList.appendChild(li);
    });
}

window.resetGrid = function() {
    if(confirm("Veux-tu vraiment effacer toute la grille actuelle et recommencer ?")) {
        localStorage.removeItem(`save_${currentGridId}`);
        gridsData[currentGridId].forEach(w => {
            localStorage.removeItem(`found_${currentGridId}_${w.id}`);
            w.solved = false;
        });
        initGrid();
    }
};

function focusWordFromClue(wordId) {
    activeWordId = wordId;
    const wordObj = gridsData[currentGridId].find(w => w.id === wordId);
    const firstCell = document.getElementById(`cell-${wordObj.x}-${wordObj.y}`);
    if(firstCell) {
        firstCell.focus();
        if(firstCell.value !== '') firstCell.setSelectionRange(0, 1);
    }
    updateClueHighlight();
}

function handleFocus(e) {
    const cellId = `${e.target.dataset.x}-${e.target.dataset.y}`;
    const wordsForCell = window.cellsNeeded[cellId].words;
    if(!activeWordId || !wordsForCell.some(w => w.id === activeWordId)) {
        activeWordId = wordsForCell[0].id;
    }
    updateClueHighlight();
}

function handleClickToggle(e) {
     const cellId = `${e.target.dataset.x}-${e.target.dataset.y}`;
     const wordsForCell = window.cellsNeeded[cellId].words;
     if(wordsForCell.length > 1) {
         activeWordId = (activeWordId === wordsForCell[0].id) ? wordsForCell[1].id : wordsForCell[0].id;
         updateClueHighlight();
     }
}

function updateClueHighlight() {
    document.querySelectorAll('.clue-item').forEach(li => li.classList.remove('clue-active'));
    if(activeWordId) {
        const activeClue = document.getElementById(`clue-${activeWordId}`);
        if(activeClue) activeClue.classList.add('clue-active');
    }
}

function handleKeydown(e) {
    if (e.key === 'Backspace') {
        const cellId = `${e.target.dataset.x}-${e.target.dataset.y}`;
        const wordsForCell = window.cellsNeeded[cellId].words;
        const isSolvedCell = wordsForCell.some(w => w.solved);
        
        // Si la case est déjà vide, OU qu'elle appartient à un mot trouvé (verrouillé) : on recule sans rien effacer
        if (e.target.value === '' || isSolvedCell) {
            e.preventDefault();
            focusPrevCell(e.target);
        }
    }
}

function handleInput(e) {
    const input = e.target;
    const typedValue = input.value.toUpperCase();

    const cellId = `${input.dataset.x}-${input.dataset.y}`;
    const wordsForCell = window.cellsNeeded[cellId].words;
    const isSolvedCell = wordsForCell.some(w => w.solved);

    // PROTECTION DES MOTS DÉJÀ TROUVÉS
    if (isSolvedCell) {
        input.value = input.dataset.expected; // On force la bonne lettre
        if (typedValue !== '' && typedValue !== input.dataset.expected) {
            // Petite animation de refus sur la case
            input.classList.add('error-anim');
            setTimeout(() => input.classList.remove('error-anim'), 500);
        }
        if (typedValue !== '') focusNextCell(input);
        return; // On bloque la suite pour ne pas corrompre la sauvegarde
    }

    input.value = typedValue;

    const savedData = JSON.parse(localStorage.getItem(`save_${currentGridId}`)) || {};
    savedData[cellId] = input.value;
    localStorage.setItem(`save_${currentGridId}`, JSON.stringify(savedData));

    if (input.value !== '') {
        focusNextCell(input);
    }

    wordsForCell.forEach(w => validateWord(w));
}

function focusNextCell(currentInput) {
    if(!activeWordId) return;
    const wordObj = gridsData[currentGridId].find(w => w.id === activeWordId);
    let currentX = parseInt(currentInput.dataset.x);
    let currentY = parseInt(currentInput.dataset.y);
    
    let lastX = wordObj.direction === 'horizontale' ? wordObj.x + wordObj.mot.length - 1 : wordObj.x;
    let lastY = wordObj.direction === 'verticale' ? wordObj.y + wordObj.mot.length - 1 : wordObj.y;
    if (currentX === lastX && currentY === lastY) return; 

    let nextX = wordObj.direction === 'horizontale' ? currentX + 1 : currentX;
    let nextY = wordObj.direction === 'verticale' ? currentY + 1 : currentY;
    
    const nextCell = document.getElementById(`cell-${nextX}-${nextY}`);
    if(nextCell) {
        nextCell.focus();
        nextCell.setSelectionRange(0, 1);
    }
}

function focusPrevCell(currentInput) {
    if(!activeWordId) return;
    const wordObj = gridsData[currentGridId].find(w => w.id === activeWordId);
    let currentX = parseInt(currentInput.dataset.x);
    let currentY = parseInt(currentInput.dataset.y);
    
    let prevX = wordObj.direction === 'horizontale' ? currentX - 1 : currentX;
    let prevY = wordObj.direction === 'verticale' ? currentY - 1 : currentY;
    
    const prevCell = document.getElementById(`cell-${prevX}-${prevY}`);
    if(prevCell) prevCell.focus();
}

function validateWord(wordObj) {
    // Si le mot est déjà trouvé, on n'a plus besoin de le revérifier
    if (wordObj.solved) return; 

    let isFull = true;
    let isCorrect = true;
    const cells = [];
    
    for (let i = 0; i < wordObj.mot.length; i++) {
        let cx = wordObj.direction === 'horizontale' ? wordObj.x + i : wordObj.x;
        let cy = wordObj.direction === 'verticale' ? wordObj.y + i : wordObj.y;
        const cell = document.getElementById(`cell-${cx}-${cy}`);
        cells.push(cell);
        
        if (cell.value === '') { isFull = false; isCorrect = false; }
        else if (cell.value !== cell.dataset.expected) { isCorrect = false; }
    }

    if (isCorrect) {
        wordObj.solved = true;
        localStorage.setItem(`found_${currentGridId}_${wordObj.id}`, "true");
        document.getElementById(`clue-${wordObj.id}`).classList.add('solved');
        
        document.getElementById('modal-title').innerText = "Mot trouvé ! 🎉";
        document.getElementById('anecdote-text').innerText = wordObj.anecdote ? wordObj.anecdote : "Bien joué, tu as trouvé : " + wordObj.mot + " !";
        document.getElementById('close-modal').innerText = "Super !";
        document.getElementById('anecdote-modal').classList.remove('hidden');
        
    } else if (isFull && !isCorrect) {
        cells.forEach(c => c.classList.add('error-anim'));
        
        setTimeout(() => {
            cells.forEach(c => {
                c.classList.remove('error-anim');
                
                const cId = `${c.dataset.x}-${c.dataset.y}`;
                const intersectingWords = window.cellsNeeded[cId].words;
                const isProtected = intersectingWords.some(w => w.solved);
                
                if (!isProtected) {
                    c.value = '';
                    const savedData = JSON.parse(localStorage.getItem(`save_${currentGridId}`)) || {};
                    delete savedData[cId];
                    localStorage.setItem(`save_${currentGridId}`, JSON.stringify(savedData));
                }
            });
            cells[0].focus();
        }, 500);
    }
}

window.giveHint = function(wordId) {
    const wordObj = gridsData[currentGridId].find(w => w.id === wordId);
    if(!wordObj || wordObj.solved) return;

    document.getElementById('modal-title').innerText = "💡 Indice";
    document.getElementById('anecdote-text').innerText = wordObj.hintText;
    document.getElementById('close-modal').innerText = "Fermer";
    document.getElementById('anecdote-modal').classList.remove('hidden');
};

document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('anecdote-modal').classList.add('hidden');
});

window.addEventListener('DOMContentLoaded', () => {
    initGrid();
});