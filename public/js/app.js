const
  hint = document.querySelector('#hint'),
  content = document.querySelector('#content'),
  button = document.createElement('button');

hint.style.display = 'none';
button.innerText = 'Show Hint';
hint.after(button);

button.addEventListener('click', () => {
  hint.style.display = 'block';
  hint.style.cursor = 'pointer';
  button.style.display = 'none';
});

hint.addEventListener('click', () => {
  hint.style.display = 'none';
  button.style.display = 'block';
});


