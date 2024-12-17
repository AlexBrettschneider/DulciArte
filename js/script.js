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

    if (name && address && date) {
        const body = `Nombre: ${name}\nDirección: ${address}\nFecha: ${date}\nComentarios: ${comments}`;
        window.open(`mailto:tucorreo@empresa.com?subject=Pedido Bombones&body=${encodeURIComponent(body)}`);
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

function resetCounters() {
    currentCount = 0;
    document.querySelectorAll('.count').forEach(span => (span.textContent = "0"));
}
