const requisitos = {
    // 2º Nível
    'ECL0033': ['CEL0088'],
    'IFD0175': ['IFD0171', 'IFD0173', 'MAT0025'],
    'IFD0177': ['IFD0171', 'IFD0173', 'MAT0025'],
    'MAT0026': ['MAT0025'],
    // 3º Nível
    'ENC0035': ['IFD0171', 'MAT0026', 'MAT0031'],
    'ENC0240': ['IGD0173'],
    'ENC0241': ['IFD0171', 'MAT0025', 'IGD0173'],
    'ENC0266': ['IFD0175'],
    'ENC0267': ['IGD0173', 'ENC0053'],
    'ENC0268': ['IQD0125'],
    'MAT0027': ['MAT0025', 'MAT0026'],
    // 4º Nível
    'ENC0037': ['MAT0027', 'ENC0035'],
    'ENC0235': ['ENC0241', 'ENC0240', 'MAT0027'],
    'ENC0269': ['CEL0088'],
    'ENC0270': ['CEL0088'],
    'ENC0272': ['IQD0125'],
    'ENC0273': ['IQD0125'],
    // 5º Nível
    'ENC0183': ['ENC0235'],
    'ENC0251': ['ENC0267', 'ENC0037'],
    'ENC0252': ['ENC0267', 'ENC0037'],
    'ENC0274': ['MAT0027'],
    'ENC0275': ['MAT0027'],
    // 6º Nível
    'ENC0001': ['ENC0037', 'IQD0125'],
    'ENC0002': ['SOL0042'],
    'ENC0166': ['ENC0037', 'ENC0267', 'ENC0274'],
    'ENE0001': ['MAT0027', 'MAT0031'],
    'EPR0068': ['ENC0274'],
    // 7º Nível
    'ENC0004': ['ECL0033', 'ENC0251', 'ENC0166'],
    'ENC0007': ['ENC0251', 'ENC0001'],
    'ENC0010': ['ENC0251', 'ENC0001'],
    'ENC0052': ['ENC0183', 'ENC0001'],
    'EPR0059': ['EPR0068'],
    'FDD0282': ['ENC0002'],
    // 8º Nível
    'ENC0013': ['ENC0275'],
    'ENC0015': ['ENC0166', 'ENC0001'],
    'ENC0016': ['ENC0183', 'ENC0037'],
    'ENC0025': ['EPR0059'],
    // 9º Nível
    'ENC0026': ['FDD0282', 'EPR0059'],
    'ENC0028': ['ENC0025'],
    // 10º Nível
    'ENC0030': ['ENC0028'],
    'ENC0031': ['FDD0282', 'ENC0016', 'ENC0015']
};

function verificarGrade() {
    Object.keys(requisitos).forEach(idAlvo => {
        const idsNecessarios = requisitos[idAlvo];
        const inputAlvo = document.querySelector(`#${idAlvo} input`);
        
        // Verifica se todos os pré-requisitos estão marcados
        const liberado = idsNecessarios.every(idReq => {
            const checkReq = document.querySelector(`#${idReq} input`);
            return checkReq && checkReq.checked;
        });

        if (inputAlvo) {
            inputAlvo.disabled = !liberado;
            // Se um pré-requisito for desmarcado, desmarca o dependente
            if (!liberado) {
                inputAlvo.checked = false;
                inputAlvo.parentElement.classList.remove('concluida');
            }
        }
    });
}

document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        this.parentElement.classList.toggle('concluida', this.checked);
        verificarGrade();
    });
});

// Inicialização
verificarGrade();
