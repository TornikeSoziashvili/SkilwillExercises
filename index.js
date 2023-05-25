//1)
const button = document.getElementById('hider');
const text = document.getElementById('text');

button.addEventListener('click', function(){
  if(text.style.display === 'none'){
    text.style.display = 'block';
  }else {
    text.style.display = 'none';
  }
})

//2)
const divElement = document.createElement('div')
divElement.querySelector('divElement')
divElement.id = 'card'
document.body.appendChild(divElement)

const newElement = document.createElement('h2');
newElement.textContent = 'Vaniko'
divElement.appendChild(newElement)

const linkElement = document.createElement('a');
linkElement.querySelector('linkElement');
linkElement.href = "#"
linkElement.innerText = 'Go to Profile'
divElement.appendChild(linkElement)
