const monthName = document.querySelector('.month-name');
const dayName = document.querySelector('.day-name');
const dayNumber = document.querySelector('.day-number');
const yearNumber = document.querySelector('.year');

const newDate = new Date();
const month = newDate.getMonth();

yearNumber.textContent = `${newDate.getFullYear()}`;
monthName.textContent = `${newDate.toLocaleDateString('pt-br', {
  month: 'long',
})}`;
dayName.textContent = `${newDate.toLocaleDateString('pt-br', {
  weekday: 'long',
})}`;

dayNumber.textContent = `${newDate.getDate()}`