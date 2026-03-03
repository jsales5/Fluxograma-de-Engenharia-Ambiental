const dependencias = {
    // 1 -> 2
    'CEL0088': ['ECL0033'],
    'IFD0171': ['IFD0175'],
    'IFD0173': ['IFD0177'],
    'MAT0025': ['MAT0026'],
    'IGD0173': ['ENC0241', 'ENC0240'],
    'IQD0125': ['ENC0268', 'ENC0272', 'ENC0273'],
    // 2 -> 3
    'MAT0026': ['MAT0027', 'ENC0035'],
    'IFD0175': ['ENC0035'],
    'MAT0031': ['ENC0275'],
    // 3 -> 4
    'ENC0035': ['ENC0037'],
    'ENC0268': ['ENC0037'],
    'ENC0241': ['ENC0235'],
    'MAT0027': ['ENC0274', 'ENC0275'],
    'ENC0263': ['ENC0269', 'ENC0270'],
    // 4 -> 5
    'ENC0235': ['ENC0183'],
    'ENC0037': ['ENC0251', 'ENC0252'],
    // 5 -> 6
    'ENC0251': ['ENC0166', 'ENC0001'],
    'ENE0001': ['EPR0068'],
    // 6 -> 7
    'ENC0166': ['ENC0004', 'ENC0007', 'ENC0010', 'ENC0052'],
    'EPR0068': ['EPR0059'],
    // 7 -> 8
    'ENC0004': ['ENC0013'],
    'ENC0007': ['ENC0015'],
    'ENC0052': ['ENC0016'],
    // 8 -> 9
    'ENC0013': ['ENC0026'],
    'ENC0025': ['ENC0028'],
    // 9 -> 10
    'ENC0028': ['ENC0030'],
    'ENC0026': ['ENC0031']
};

document.querySelectorAll('input[type="checkbox"]').forEach(check => {
    check.addEventListener('change', function() {
        const idMateria = this.parentElement.id;
        const liberados = dependencias[idMateria];
        
        this.parentElement.classList.toggle('concluida', this.checked);

        if (liberados) {
            liberados.forEach(idAlvo => {
                const inputAlvo = document.querySelector(`#${idAlvo} input`);
                if (inputAlvo) {
                    inputAlvo.disabled = !this.checked;
                    if (!this.checked) {
                        inputAlvo.checked = false;
                        inputAlvo.parentElement.classList.remove('concluida');
                        inputAlvo.dispatchEvent(new Event('change'));
                    }
                }
            });
        }
    });
});
