const div = document.createElement('div');
div.classList.add('wrapper');
document.body.appendChild(div);
const ul = `
<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>
`;
div.innerHTML = ul;
console.log(div);

const img = document.createElement('img');
img.src = 'https://picsum.photos/500';
img.width = 250;
img.classList.add('cute');
img.height = 250;
img.alt = ' cute puppy';
div.appendChild(img);

const myHTML = `
<div class ="myDiv">
    <p>Paragraph One</>
    <p>Paragraph Two</>
</div>
`;
const ulElement = div.querySelector('ul');
console.log(ulElement);
ulElement.insertAdjacentHTML('beforebegin', myHTML);

const myDiv = div.querySelector('.myDiv');
console.log(myDiv);
console.log(myDiv.children);

myDiv.firstElementChild.remove();

function generatePlayerCard(name, age, height) {
  const html = `
    <div class="playerCard">
        <h2>${name} - ${age}</h2>
        <p>Their heigt is ${height} and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!</p>
    <button class="delete" type="button">&times; Delete</button>
    </div>
    `;
  return html;
}

const cards = document.createElement('div');
cards.classList.add('cards');
let cardsHTML = generatePlayerCard('wes', 12, 150);
cardsHTML += generatePlayerCard('scott', 12, 150);
cardsHTML += generatePlayerCard('kait', 12, 150);
cardsHTML += generatePlayerCard('snickers', 12, 150);

cards.innerHTML = cardsHTML;
div.insertAdjacentElement('beforebegin', cards);

const buttons = document.querySelectorAll('.delete');
console.log(buttons);

function deleteCard() {
  console.log('DELETE CARD! TODO');
}

buttons.forEach((button => button.addEventListener('click', deleteCard));
