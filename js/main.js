// ==================== СЛАЙДЕР ГАЛЕРЕИ ====================
const slider = document.getElementById('gallerySlider');

function slideGallery(direction) {
    if (slider) {
        const scrollAmount = 320;
        slider.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    }
}

// ==================== ФОРМА ====================
const orderForm = document.getElementById('orderForm');
if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const inputs = this.querySelectorAll('input');
        let isEmpty = false;
        inputs.forEach(input => {
            if (!input.value.trim()) isEmpty = true;
        });
        
        if (isEmpty) {
            alert('Пожалуйста, заполните все поля формы');
            return;
        }
        
        alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
        this.reset();
    });
}
