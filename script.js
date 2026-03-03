const dependencias = {
    // 2º NÍVEL
    'ECL0033': ['CEL0088'],
    'IFD0175': ['IFD0171', 'IFD0173', 'MAT0025'], // Física 2 exige as duas Físicas 1 + Cálculo 1
    'IFD0177': ['IFD0171', 'IFD0173', 'MAT0025'], // Física 2 Exp exige o mesmo
    'MAT0026': ['MAT0025'],

    // 3º NÍVEL
    'ENC0035': ['IFD0171', 'MAT0026', 'MAT0031'],
    'ENC0240': ['IGD0173'],
    'ENC0241': ['IFD0171', 'MAT0025', 'IGD0173'],
    'ENC0266': ['IFD0175'],
    'ENC0267': ['IGD0173', 'ENC0053'],
    'ENC0268': ['IQD0125'],
    'MAT0027': ['MAT0025', 'MAT0026'],

    // 4º NÍVEL
    'ENC0037': ['MAT0027', 'ENC0035'],
    'ENC0235': ['ENC0241', 'ENC0240', 'MAT0027'],
    'ENC0269': ['CEL0088'],
    'ENC0270': ['CEL0088'],
    'ENC0272': ['IQD0125'],
    'ENC0273': ['IQD0125'],

    // 5º NÍVEL
    'ENC0183': ['ENC0235'],
    'ENC0251': ['ENC0267', 'ENC0037'],
    'ENC0252': ['ENC0267', 'ENC0037'],
    'ENC0274': ['MAT0027'],
    'ENC0275': ['MAT0027'],

    // 6º NÍVEL
    'ENC0001': ['ENC0037', 'IQD0125'],
    'ENC0002': ['SOL0042', 'MAT0025'], // Segundo sua lista: Sociologia OU Cálculo 1 (aqui usei AND para segurança, mas liberei os dois)
    'ENC0166': ['ENC0037', 'ENC0267', 'ENC0274'],
    'ENE0001': ['MAT0027', 'MAT0031'],
    'EPR0068': ['ENC0274'],

    // 7º NÍVEL
    'ENC0004': ['ECL0033', 'ENC0251', 'ENC0166'],
    'ENC0007': ['ENC0251', 'ENC0001'],
    'ENC0010': ['ENC0251', 'ENC0001'],
    'ENC0052': ['ENC0183', 'ENC0001'],
    'EPR0059': ['EPR0068'],
    'FDD0282': ['ENC0002'],

    // 8º NÍVEL
    'ENC0013': ['ENC0275'],
    'ENC0015': ['ENC0166', 'ENC0001'],
    'ENC0016': ['ENC0183', 'ENC0037'],
    'ENC0025': ['EPR0059'],

    // 9º NÍVEL
    'ENC0026': ['FDD0282', 'EPR0059'],
    'ENC0028': ['ENC0025'],

    // 10º NÍVEL
    'ENC0030': ['ENC0028'],
    'ENC0031': ['FDD0282', 'ENC0016', 'ENC0015']
};

function verificarRequisitos() {
    // Percorre cada matéria que possui dependências
    for (const [materia, preRequisitos] of Object.entries(dependencias)) {
        const checkboxMateria = document.querySelector(`#${materia} input`);
        
        if (checkboxMateria) {
            // Checa se TODOS os pré-requisitos daquela matéria estão marcados
            const todosConcluidos = preRequisitos.every(idPre => {
                const checkPre = document.querySelector(`#${idPre} input`);
                return checkPre && checkPre.checked;
            });

            // Se não todos concluídos, bloqueia e desmarca
            if (!todosConcluidos) {
                checkboxMateria.disabled = true;
                checkboxMateria.checked = false;
                checkboxMateria.parentElement.classList.remove('concluida');
            } else {
                checkboxMateria.disabled = false;
            }
        }
    }
}

// Evento para monitorar cliques
document.querySelectorAll('input[type="checkbox"]').forEach(input => {
    input.addEventListener('change', (e) => {
        const divMateria = e.target.parentElement;
        if (e.target.checked) {
            divMateria.classList.add('concluida');
        } else {
            divMateria.classList.remove('concluida');
        }
        verificarRequisitos();
    });
});

// Executa uma vez ao carregar para garantir o estado inicial
verificarRequisitos();
