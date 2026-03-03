const dependencias = {
    // 2º Nível
    'IFD0175': ['IFD0171', 'IFD0173', 'MAT0025'],
    'IFD0177': ['IFD0171', 'IFD0173', 'MAT0025'],
    'MAT0026': ['MAT0025'],
    'ECL0033': ['CEL0088'],

    // 3º Nível
    'ENC0035': ['IFD0171', 'MAT0026', 'MAT0031'],
    'ENC0241': ['IFD0171', 'MAT0025', 'IGD0173'],
    'ENC0240': ['IGD0173'],
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
    'ENC0002': ['SOL0042', 'MAT0025'],
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
    'ENC0031': ['FDD0282', 'ENC0016', 'ENC0015'],

    // --- OPTATIVAS ---
    'CDS0008': ['CDS0007'],
    'CEL0019': ['IQD0051'],
    'CEL0054': ['IQD0125'], 
    'ENC0003': ['ENC0269', 'SOL0042'],
    'ENC0011': ['ENC0166', 'ENC0275'],
    'ENC0012': ['ENC0269'],
    'ENC0014': ['ENC0037'],
    'ENC0017': ['ENC0235'],
    'ENC0018': ['ENC0269', 'IQD0125'],
    'ENC0019': ['ENC0251', 'ENC0001'],
    'ENC0020': ['ENC0251', 'ENC0001'],
    'ENC0021': ['ENC0016'],
    'ENC0022': ['ENC0166', 'ENC0015'],
    'ENC0023': ['ENC0026', 'ENC0267'],
    'ENC0032': ['ENC0016'],
    'ENC0033': ['ENC0183'],
    'ENC0050': ['ENC0235'],
    'ENC0051': ['ENC0251', 'ENC0252'],
    'ENC0064': ['ENC0251', 'ENC0252'],
    'ENC0162': ['ENC0251', 'ENC0252', 'ENC0166'],
    'ENC0165': ['ENC0251', 'ENC0252', 'ENC0166'],
    'ENC0169': ['ENC0251', 'ENC0252', 'ENC0166'],
    'ENC0172': ['ENC0251', 'ENC0252', 'ENC0166'],
    'ENC0182': ['ENC0251', 'ENC0252'],
    'ENC0187': ['ENC0251', 'ENC0252', 'ENC0166'],
    'ENC0188': ['ENC0241', 'ENC0240'],
    'ENC0237': ['ENC0235'],
    'ENC0238': ['ENC0240', 'ENC0241'],
    'ENC0239': ['ENC0235'],
    'ENC0245': ['ENC0251', 'ENC0252', 'ENC0166'],
    'ENC0253': ['ECL0033'],
    'ENC0261': ['ENC0263'],
    'ENC0264': ['ENC0267'],
    'ENC0271': ['ENC0268'],
    'ENC0279': ['ENC0037', 'ENC0235'],
    'ENC0281': [['ENC0268'], ['ENC0052']], 
    'ENC0282': ['ENC0166'],
    'ENE0002': ['MAT0027', 'MAT0031'],
    'ENM0174': ['ENE0001'],
    'FAV0215': ['CEL0054'],
    'FGA0107': ['IFD0171', 'IFD0173'],
    'IQD0063': ['IQD0051'],
    'IQD0118': ['IQD0125'],
    'MAT0028': ['MAT0027'],
    'MAT0048': ['MAT0026']
};

function verificarGrade() {
    let mudancaDetectada = false;
    const saveState = {};

    Object.keys(dependencias).forEach(idAlvo => {
        const divMateria = document.getElementById(idAlvo);
        if (!divMateria) return;

        const input = divMateria.querySelector('input');
        const listaReqs = dependencias[idAlvo];

        // Lógica de verificação
        const habilitada = listaReqs.every(reqId => {
            const reqInput = document.querySelector(`#${reqId} input`);
            return reqInput && reqInput.checked;
        });

        if (habilitada) {
            input.disabled = false;
            divMateria.classList.remove('bloqueada');
        } else {
            if (!input.disabled || input.checked) {
                input.disabled = true;
                input.checked = false;
                divMateria.classList.remove('concluida');
                divMateria.classList.add('bloqueada');
                mudancaDetectada = true;
            }
        }
        saveState[idAlvo] = input.checked;
    });

    localStorage.setItem('unb_ambiental_data', JSON.stringify(saveState));
    if (mudancaDetectada) verificarGrade();
}

function carregarDados() {
    const dados = JSON.parse(localStorage.getItem('unb_ambiental_data') || '{}');
    Object.keys(dados).forEach(id => {
        const div = document.getElementById(id);
        if (div) {
            const input = div.querySelector('input');
            input.checked = dados[id];
            if (dados[id]) div.classList.add('concluida');
        }
    });
    verificarGrade();
}

document.querySelectorAll('input').forEach(chk => {
    chk.addEventListener('change', function() {
        this.parentElement.classList.toggle('concluida', this.checked);
        verificarGrade();
    });
});

window.onload = carregarDados;
