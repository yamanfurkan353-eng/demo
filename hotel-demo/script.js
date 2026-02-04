// Rezervasyon butonları için tıklama olayı
const reservationButtons = document.querySelectorAll('.btn');
reservationButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Rezervasyon sayfasına yönlendiriliyorsunuz...');
    });
});

// Form gönderme işlemi
const contactForm = document.querySelector('#contact form');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Mesajınız başarıyla gönderildi!');
        contactForm.reset();
    });
}

// Smooth scrolling için
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});