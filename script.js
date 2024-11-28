    // Função de envio com validação
    function Enviar() {
        var nome = document.getElementById("nomeid");
        var email = document.getElementById("emailid"); // Corrigido: capturando o e-mail

        if (nome.value.trim() !== "") {
            alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
        } else {
            alert("Por favor, preencha o nome.");
            return;
        }

        // Validação do e-mail
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            alert("Por favor, insira um e-mail válido.");
            return;
        }
    }

    // Modal "Sobre"
    const sobreModal = document.getElementById('modal-sobre');
    const btnSaibaMais = document.getElementById('btn-saiba-mais');
    const closeSobreModal = document.getElementById('close-modal');

    btnSaibaMais.addEventListener('click', () => {
        sobreModal.style.display = 'flex';
    });

    closeSobreModal.addEventListener('click', () => {
        sobreModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === sobreModal) {
            sobreModal.style.display = 'none';
        }
    });

    // Galeria
const galleryImages = document.querySelectorAll('.galeria img'); // Todas as imagens da galeria
const galleryModal = document.getElementById('modal'); // Modal da galeria
const galleryModalImage = document.getElementById('modal-image'); // Imagem dentro do modal
const closeGalleryModal = document.getElementById('close-gallery-modal'); // Botão de fechar

// Abre o modal ao clicar na imagem
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        galleryModal.style.display = 'flex'; // Mostra o modal
        galleryModalImage.src = image.src; // Define a imagem no modal
    });
});

// Fecha o modal ao clicar no botão de fechar
closeGalleryModal.addEventListener('click', () => {
    galleryModal.style.display = 'none'; // Esconde o modal
});

// Fecha o modal ao clicar fora da imagem
window.addEventListener('click', (event) => {
    if (event.target === galleryModal) {
        galleryModal.style.display = 'none'; // Esconde o modal
    }
});
