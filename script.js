const dependencias = {
    'IFD0175': ['IFD0171', 'IFD0173', 'MAT0025'],
    'IFD0177': ['IFD0171', 'IFD0173', 'MAT0025'],
    'MAT0026': ['MAT0025'],
    'ENC0035': ['IFD0171', 'MAT0026', 'MAT0031'],
    'ENC0240': ['IGD0173'],
    'ENC0241': ['IFD0171', 'MAT0025', 'IGD0173'],
    'ENC0266': ['IFD0175'],
    'ENC0267': ['IGD0173', 'ENC0053'],
    'ENC0268': ['IQD0125'],
    'MAT0027': ['MAT0025', 'MAT0026'],
    'ENC0037': ['MAT0027', 'ENC0035'],
    'ENC0235': ['ENC0241', 'ENC0240', 'MAT0027'],
    'ENC0269': ['CEL0088'],
    'ENC0270': ['CEL0088'],
    'ENC0272': ['IQD0125'],
    'ENC0273': ['IQD0125'],
    'ENC0183': ['ENC0235'],
    'ENC0251': ['ENC0267', 'ENC0037'],
    'ENC0252': ['ENC0267', 'ENC0037'],
    'ENC0274': ['MAT0027'],
    'ENC0275': ['MAT0027'],
    'ENC0001': ['ENC0037', 'IQD0125'],
    'ENC0002': ['SOL0042'],
    'ENC0166': ['ENC0037', 'ENC0267', 'ENC0274'],
    'ENE0001': ['MAT0027', 'MAT0031'],
    'EPR0068': ['ENC0274'],
    'ENC0004': ['ECL0033', 'ENC0251', 'ENC0166'],
    'ENC0007': ['ENC0251', 'ENC0001'],
    'ENC0010': ['ENC0251', 'ENC0001'],
    'ENC0052': ['ENC0183', 'ENC0001'],
    'EPR0059': ['EPR0068'],
    'FDD0282': ['ENC0002'],
    'ENC0013': ['ENC0275'],
    'ENC0015': ['ENC0166', 'ENC0001'],
    'ENC0016': ['ENC0183', 'ENC0037'],
    'ENC0025': ['EPR0059'],
    'ENC0026': ['FDD0282', 'EPR0059'],
    'ENC0028': ['ENC0025'],
    'ENC0030': ['ENC0028'],
    'ENC0031': ['FDD0282', 'ENC0016', 'ENC0015']
};

// Lógica de Co-requisitos (marcar um marca o outro e vice-versa)
const corequisitos = {
    'ENC0269': 'ENC0270', 'ENC0270': 'ENC0269',
    'ENC0272': 'ENC0273', 'ENC0273': 'ENC0272',
    'ENC0251': 'ENC0252', 'ENC0252': 'ENC0251'
};

function atualizarGrade() {
    Object.keys(dependencias).forEach(idAlvo => {
        const requisitos = dependencias[idAlvo];
        const inputAlvo = document.querySelector(`#${idAlvo} input`);
        
        // Só libera se TODOS os requisitos estiverem marcados
        const liberado = requisitos.every(reqId => {
            const checkReq = document.querySelector(`#${reqId} input`);
            return checkReq && checkReq.checked;
        });

        if (inputAlvo) {
            inputAlvo.disabled = !liberado;
            if (!liberado) {
                inputAlvo.checked = false;
                inputAlvo.parentElement.classList.remove('concluida');
            }
        }
    });
}

document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const idAtual = this.parentElement.id;
        
        // Lógica de Co-requisito
        if (corequisitos[idAtual] && this.checked) {
            const par = document.querySelector(`#${corequisitos[idAtual]} input`);
            if (par && !par.disabled) par.checked = true;
            par.parentElement.classList.add('concluida');
        }

        this.parentElement.classList.toggle('concluida', this.checked);
        atualizarGrade();
    });
});

atualizarGrade(); // Roda ao carregar
