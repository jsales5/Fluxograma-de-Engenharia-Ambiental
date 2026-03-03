const dependencias = {
    'MAT0025': ['MAT0026'],
    'MAT0026': ['MAT0027', 'ENC0035'],
    'IFD0171': ['IFD0175'],
    'IFD0173': ['IFD0177'],
    'IQD0125': ['ENC0268'],
    'IGD0173': ['ENC0241', 'ENC0240'],
    // Adicione as demais conexões do fluxograma aqui
};

document.querySelectorAll('input[type="checkbox"]').forEach(input => {
    input.addEventListener('change', function() {
        const materiaDiv = this.parentElement;
        const idMateria = materiaDiv.id;
        
        materiaDiv.classList.toggle('concluida', this.checked);

        if (dependencias[idMateria]) {
            dependencias[idMateria].forEach(idAlvo => {
                const alvo = document.querySelector(`#${idAlvo} input`);
                if (alvo) alvo.disabled = !this.checked;
            });
        }
    });
});
