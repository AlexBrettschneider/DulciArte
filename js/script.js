let totalCount = 9; // Máximo inicial para la caja de 9 bombones
let totalUnitsAllowed = totalCount; // Máximo permitido según cajas seleccionadas
const boxPrice = 10; // Precio con descuento por caja
const originalPrice = 12; // Precio original por caja

// Actualizar el contador de cajas y recalcular precios
function updateBoxes(change) {
    const boxCount = document.getElementById('box-count');
    const discountedPriceDisplay = document.querySelector('.discounted-price'); // Precio con descuento
    const originalPriceDisplay = document.querySelector('.original-price'); // Precio original
    let value = parseInt(boxCount.textContent) + change;

    if (value >= 1) {
        boxCount.textContent = value;
        totalUnitsAllowed = value * totalCount; // Actualizar el máximo permitido

        // Recalcular precios
        const totalDiscountedPrice = value * boxPrice;
        const totalOriginalPrice = value * originalPrice;

        discountedPriceDisplay.textContent = `${totalDiscountedPrice.toFixed(2)}€`;
        originalPriceDisplay.textContent = `${totalOriginalPrice.toFixed(2)}€`;

        resetCounters(); // Reiniciar los contadores de sabores
    }
}

// Actualizar el contador de bombones por sabor
function updateCount(event, button, increment) {
    event.stopPropagation();
    const countSpan = button.parentElement.querySelector('.count');
    const flavorCards = document.querySelectorAll('.count');

    let currentTotal = Array.from(flavorCards).reduce((sum, card) => sum + parseInt(card.textContent), 0);
    let newCount = parseInt(countSpan.textContent) + increment;

    // Verificar si se excede el límite
    if (newCount >= 0 && (currentTotal + increment) <= totalUnitsAllowed) {
        countSpan.textContent = newCount;
    } else {
        alert(`No puedes seleccionar más de ${totalUnitsAllowed} bombones en total.`);
    }
}

// Reiniciar los contadores de sabores
function resetCounters() {
    document.querySelectorAll('.count').forEach(span => (span.textContent = "0"));
}

// Girar tarjeta de sabor para mostrar ingredientes
function flipCard(card) {
    card.classList.toggle('flipped');
}

// Mostrar el formulario al final de la selección
function showForm() {
    document.getElementById('order-form').classList.remove('hidden');
}

// Validar la fecha mínima de entrega (4 días después del día actual)
document.addEventListener("DOMContentLoaded", function () {
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date();
        today.setDate(today.getDate() + 4); // Sumar 4 días
        const minDate = today.toISOString().split('T')[0];
        dateInput.setAttribute('min', minDate);

        // Validación manual para móviles y navegadores no compatibles
        dateInput.addEventListener('input', function () {
            const selectedDate = new Date(this.value);
            if (selectedDate < today) {
                alert("Por favor, selecciona una fecha que sea al menos 4 días después de hoy.");
                this.value = ""; // Borra la fecha seleccionada inválida
            }
        });
    }
});


