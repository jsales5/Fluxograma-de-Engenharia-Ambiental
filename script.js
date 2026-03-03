const dependencias = {
    'MAT0025': ['MAT0026'],
    'IFD0171': ['IFD0175'],
    'IFD0173': ['IFD0177'],
    'MAT0026': ['MAT0027', 'ENC0035'], // Cálculo 2 libera Cálculo 3 e Mec. Sólidos
    'IFD0175': ['ENC0035'],            // Física 2 também libera Mec. Sólidos
    'IGD0173': ['ENC0241'],            // Geologia libera Geotecnia 1
    'ENC0241': ['ENC0235'],            // Geotecnia 1 libera 2
    'ENC0268': ['ENC0037'],            // Ciência dos Mat. libera Transf. Energia
    'ENC0028': ['ENC0030'],            // Projeto Final 1 libera o 2
    'ENC0026': ['ENC0031']             // Impactos libera Gestão Ambiental
};

document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const idMateria = this.parentElement.id;
        const liberados = dependencias[idMateria];

        if (this.checked) {
            this.parentElement.classList.add('concluida');
        } else {
            this.parentElement.classList.remove('concluida');
        }

        if (liberados) {
            liberados.forEach(idAlvo => {
                const alvo = document.querySelector(`#${idAlvo} input`);
                if (alvo) {
                    alvo.disabled = !this.checked;
                    if (!this.checked) {
                        alvo.checked = false;
                        alvo.parentElement.classList.remove('concluida');
                        alvo.dispatchEvent(new Event('change'));
                    }
                }
            });
        }
    });
});
