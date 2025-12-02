const contactForm = document.getElementById('contact-form');

const encode = (value) => encodeURIComponent(value || '').replace(/%20/g, '+');

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const telefono = document.getElementById('telefono')?.value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (!nombre || !correo) return;

  const subject = encode(`Consulta Empoderados Plus - ${nombre}`);
  const body = encode(`Nombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono || 'No informado'}\n\nMensaje:\n${mensaje}`);

  window.location.href = `mailto:hernan.sanchez@bancamia.com.co?subject=${subject}&body=${body}`;
});
