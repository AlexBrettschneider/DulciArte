function updateCount(button, increment) {
    const countSpan = button.parentElement.querySelector('.count');
    let count = parseInt(countSpan.textContent);
    count = Math.min(Math.max(count + increment, 0), 9); // Max 9 bombones
    countSpan.textContent = count;
  }
  
  function openOrderForm() {
    document.querySelector('.order-popup').classList.remove('hidden');
  }
  
  function sendOrder() {
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    if (name && date) {
      const emailBody = `Nombre: ${name}\nFecha de entrega: ${date}`;
      window.open(`mailto:tucorreo@empresa.com?subject=Pedido Bombones&body=${encodeURIComponent(emailBody)}`);
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
  