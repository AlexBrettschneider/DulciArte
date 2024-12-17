let totalCount = 9; // Cambiar a 12 en 12-bombones.html
let currentCount = 0;

function updateBoxes(change) {
    const boxCount = document.getElementById('box-count');
    let value = parseInt(boxCount.textContent) + change;
    if (value >= 1) {
        boxCount.textContent = value;
        totalCount = value * (totalCount === 9 ? 9 : 12); // Ajuste dinámico
        resetCounters();
    }
}

function updateCount(event, button, increment) {
    event.stopPropagation(); // Evita conflictos con flip
    const countSpan = button.parentElement.querySelector('.count');
    let count = parseInt(countSpan.textContent) + increment;

    if (count >= 0 && currentCount + increment <= totalCount) {
        countSpan.textContent = count;
        currentCount += increment;
    }
}

function flipCard(card) {
    card.classList.toggle('flipped');
}

function showForm() {
    document.getElementById('order-form').classList.remove('hidden');
}

function submitOrder() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const date = document.getElementById('date').value;
    const comments = document.getElementById('comments').value;
    const boxCount = document.getElementById('box-count').innerText; // Cantidad de cajas

    // Recoger los sabores seleccionados y sus cantidades
    const flavorCards = document.querySelectorAll('.flavor-wrapper');
    let flavorsSummary = "";
    flavorCards.forEach((card, index) => {
        const flavorName = card.querySelector('.flavor-name').innerText;
        const count = card.querySelector('.count').innerText;

        if (parseInt(count) > 0) { // Solo incluye sabores seleccionados
            flavorsSummary += `- ${flavorName}: ${count} unidades%0A`;
        }
    });

    // Validación de campos obligatorios
    if (name && address && date) {
        const subject = "Pedido de Bombones - DulciArte";
        const body = `Nombre: ${name}%0A` +
                     `Dirección: ${address}%0A` +
                     `Fecha de Entrega: ${date}%0A` +
                     `Comentarios: ${comments}%0A%0A` +
                     `Cantidad de Cajas: ${boxCount}%0A` +
                     `Detalle de sabores:%0A${flavorsSummary}`;

        // Reemplaza con tu correo
        window.location.href = `mailto:corizam.cz@gmail.com?cc=alexbrett1996@gmail.com&subject=${subject}&body=${body}`;

    } else {
        alert("Por favor, completa todos los campos obligatorios antes de confirmar el pedido.");
    }
}


function resetCounters() {
    currentCount = 0;
    document.querySelectorAll('.count').forEach(span => (span.textContent = "0"));
}
