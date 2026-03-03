const dependencias = {
    'IFD0175': ['IFD0171', 'IFD0173', 'MAT0025'],
    'IFD0177': ['IFD0171', 'IFD0173', 'MAT0025'],
    'MAT0026': ['MAT0025'],
    'ECL0033': ['CEL0088'],
    'ENC0035': ['IFD0171', 'MAT0026', 'MAT0031'],
    'ENC0241': ['IFD0171', 'MAT0025', 'IGD0173'],
    'ENC0240': ['IGD0173'],
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
    'ENC0002': ['SOL0042', 'MAT0025'],
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

function verificarGrade() {
    let mudanca = false;
    Object.keys(dependencias).forEach(id => {
        const div = document.getElementById(id);
        if (!div) return;
        const input = div.querySelector('input');
        const reqs = dependencias[id];
        const liberada = reqs.every(reqId => {
            const r = document.querySelector(`#${reqId} input`);
            return r && r.checked;
        });

        if (liberada) {
            input.disabled = false;
        } else {
            if (!input.disabled || input.checked) {
                input.disabled = true;
                input.checked = false;
                div.classList.remove('concluida');
                mudanca = true;
            }
        }
    });
    if (mudanca) verificarGrade();
}

document.querySelectorAll('input').forEach(i => {
    i.addEventListener('change', function() {
        this.parentElement.classList.toggle('concluida', this.checked);
        verificarGrade();
    });
});

verificarGrade();
