const dependencias = {
    // 1º para 2º
    'CEL0088': ['ECL0033'],
    'IFD0171': ['IFD0175'],
    'IFD0173': ['IFD0177'],
    'MAT0025': ['MAT0026'],
    'IGD0173': ['ENC0241', 'ENC0240'],
    'IQD0125': ['ENC0268', 'ENC0272', 'ENC0273'],

    // 2º para 3º
    'MAT0026': ['MAT0027', 'ENC0035'],
    'IFD0175': ['ENC0035'],
    'MAT0031': ['ENC0275'],

    // 3º para 4º
    'ENC0035': ['ENC0037'],
    'ENC0268': ['ENC0037'],
    'ENC0241': ['ENC0235'],
    'MAT0027': ['ENC0274', 'ENC0275'],
    'ENC0263': ['ENC0269', 'ENC0270'],

    // 4º para 5º
    'ENC0235': ['ENC0183'],
    'ENC0037': ['ENC0251', 'ENC0252'],

    // 5º para 6º
    'ENC0251': ['ENC0166', 'ENC0001'],
    'ENC0274': ['ENC0166'],
    'ENC0275': ['ENC0001'],

    // 6º para 7º
    'ENC0166': ['ENC0004', 'ENC0007', 'ENC0010', 'ENC0052'],
    'ENE0001': ['EPR0068'],

    // 7º para 8º
    'ENC0004': ['ENC0013'],
    'ENC0007': ['ENC0015'],
    'ENC0052': ['ENC0016'],
    'EPR0059': ['ENC0025'],

    // 8º para 9º
    'ENC0013': ['ENC0026'],
    'ENC0025': ['ENC0028'],

    // 9º para 10º
    'ENC0028': ['ENC0030'],
    'ENC0026': ['ENC0031']
};

document.querySelectorAll('input[type="checkbox"]').forEach(check => {
    check.addEventListener('change', function() {
        const id = this.parentElement.id;
        const liberados = dependencias[id];
        
        this.parentElement.classList.toggle('concluida', this.checked);

        if (liberados) {
            liberados.forEach(alvoId => {
                const alvoInput = document.querySelector(`#${alvoId} input`);
                if (alvoInput) {
                    alvoInput.disabled = !this.checked;
                    if (!this.checked) {
                        alvoInput.checked = false;
                        alvoInput.parentElement.classList.remove('concluida');
                        alvoInput.dispatchEvent(new Event('change'));
                    }
                }
            });
        }
    });
});
