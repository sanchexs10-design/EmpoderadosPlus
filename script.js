const form = document.getElementById('simulator-form');
const cuotaEl = document.getElementById('cuota');
const interesEl = document.getElementById('interes');
const totalEl = document.getElementById('total');

const currency = (value) =>
  value.toLocaleString('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 });

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  const monto = Number(document.getElementById('monto').value);
  const plazo = Number(document.getElementById('plazo').value);
  const tasa = Number(document.getElementById('tasa').value) / 100;

  if (!monto || !plazo || !tasa) return;

  const tasaMensual = Math.pow(1 + tasa, 1 / 12) - 1;
  const cuota = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazo));
  const totalPagado = cuota * plazo;
  const interes = totalPagado - monto;

  cuotaEl.textContent = currency(cuota);
  interesEl.textContent = currency(interes);
  totalEl.textContent = currency(totalPagado);
});
