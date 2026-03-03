const regras = {
    // Matéria: [Lista de IDs que ela precisa para ser liberada]
    'ECL0033': ['CEL0088'],
    'IFD0175': ['IFD0171'],
    'IFD0177': ['IFD0173'],
    'MAT0026': ['MAT0025'],
    'ENC0035': ['MAT0026', 'IFD0175'],
    'MAT0027': ['MAT0026'],
    'ENC0240': ['IGD0173'],
    'ENC0241': ['IGD0173'],
    'ENC0268': ['IQD0125'],
    'ENC0037': ['ENC0035', 'ENC0268'],
    'ENC0235': ['ENC0241'],
    'ENC0269': ['ENC0263'],
    'ENC0270': ['ENC0263'],
    'ENC0272': ['IQD0125'],
    'ENC0273': ['IQD0125'],
    'ENC0183': ['ENC0235'],
    'ENC0251': ['ENC0037'],
    'ENC0252': ['ENC0037'],
    'ENC0274': ['MAT0027'],
    'ENC0275': ['MAT0027', 'MAT0031'],
    'ENC0001': ['ENC0251'],
    'ENC0002': ['SOL0042'],
    'ENC0166': ['ENC0251'],
    'ENE0001': ['IFD0175'],
    'EPR0068': ['MAT0031'],
    'ENC0004': ['ENC0166'],
    'ENC0007': ['ENC0001', 'ENC0166'],
    'ENC0010': ['ENC0166'],
    'ENC0052': ['ENC0166'],
    'EPR0059': ['EPR0068'],
    'FDD0282': ['SOL0042'],
    'ENC0015': ['ENC0007', 'ENC0272'],
    'ENC0016': ['ENC0052'],
    'ENC0055': ['ECL0033'],
    'ENC0025': ['EPR0059'],
    'ENC0026': ['ENC0004', 'FDD0282'],
    'ENC0028': ['ENC0025'],
    'ENC0030': ['ENC0028'],
    'ENC0031': ['ENC0026', 'ENC0015', 'ENC0016']
};

function verificarBloqueios() {
    Object.keys(regras).forEach(materiaId => {
        const preRequisitos = regras[materiaId];
        const inputMateria = document.querySelector(`#${materiaId} input`);
        
        // Verifica se todos os pré-requisitos estão marcados
        const todosConcluidos = preRequisitos.every(id => {
            const preCheck = document.querySelector(`#${id} input`);
            return preCheck && preCheck.checked;
        });

        if (inputMateria) {
            inputMateria.disabled = !todosConcluidos;
            if (!todosConcluidos) {
                inputMateria.checked = false;
                inputMateria.parentElement.classList.remove('concluida');
            }
        }
    });
}

document.querySelectorAll('input[type="checkbox"]').forEach(check => {
    check.addEventListener('change', function() {
        this.parentElement.classList.toggle('concluida', this.checked);
        verificarBloqueios(); // Reavalia o fluxo inteiro a cada clique
    });
});

// Inicializa o estado dos campos ao carregar a página
verificarBloqueios();
