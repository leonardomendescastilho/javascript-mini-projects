const container = document.querySelector('.container');

const role = [
  'Web Developer ',
  'JavaScript Developer ',
  'TypeScript Developer ',
  'React Developer ',
  'Leonardo Mendes',
];

console.log(role.length)



let roleIndex = 0;
let charIndex = 0;


function updateText() {

  container.innerHTML = `<h1>I'm ${roleIndex === 4 ? '' : 'a'} ${role[
    roleIndex
  ].slice(0, charIndex)}</h1>`;

  charIndex++;

  if (charIndex === role[roleIndex].length) {
    charIndex = 0;
    roleIndex++;
    if (roleIndex === role.length) {
 
      roleIndex = 0;
      setTimeout(updateText, 5000)
      return;
    } 
  }

  setTimeout(updateText, 100);
}

updateText();

