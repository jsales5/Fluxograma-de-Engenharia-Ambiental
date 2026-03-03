const dependencias = {
    // 1 -> 2
    'CEL0088': ['ECL0033'],
    'IFD0171': ['IFD0175'],
    'IFD0173': ['IFD0177'],
    'MAT0025': ['MAT0026'],
    // 2 -> 3
    'MAT0026': ['MAT0027', 'ENC0035'],
    'IFD0175': ['ENC0035'],
    'IGD0173': ['ENC0241', 'ENC0240'],
    'IQD0125': ['ENC0268'],
    // 3 -> 4
    'MAT0027': ['ENC0275'],
    'ENC0035': ['ENC0037'],
    'ENC0241': ['ENC0235'],
    'ENC0268': ['ENC0037'],
    'ENC0263': ['ENC0269'], 
    'IQD0125': ['ENC0272', 'ENC0273'],
    // 4 -> 5
    'ENC0235': ['ENC0183'],
    'ENC0037': ['ENC0251', 'ENC0252'],
    // 5 -> 6
    'ENC0251': ['ENC0166', 'ENC0001'],
    // 6 -> 7
    'ENC0166': ['ENC0004', 'ENC0007', 'ENC0010', 'ENC0052'],
    // 7 -> 8
    'ENC0007': ['ENC0015'],
    'ENC0052': ['ENC0016'],
    // 9 -> 10
    'ENC0028': ['ENC0030'],
    'ENC0026': ['ENC0031']
};

document.querySelectorAll('input[type="checkbox"]').forEach(check => {
    check.addEventListener('change', function() {
        const materiaId = this.parentElement.id;
        const liberados = dependencias[materiaId];

        this.parentElement.classList.toggle('concluida', this.checked);

        if (liberados) {
            liberados.forEach(id => {
                const el = document.querySelector(`#${id} input`);
                if (el) {
                    el.disabled = !this.checked;
                    if (!this.checked) {
                        el.checked = false;
                        el.parentElement.classList.remove('concluida');
                        el.dispatchEvent(new Event('change'));
                    }
                }
            });
        }
    });
});
