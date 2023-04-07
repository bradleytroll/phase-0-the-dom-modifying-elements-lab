const mainElement = document.querySelector('#main');
mainElement.remove();

const newHeader = document.createElement("h1");
newHeader.setAttribute('id', 'victory');
newHeader.innerHTML = 'Bradley is the champion!';
document.body.appendChild(newHeader);
