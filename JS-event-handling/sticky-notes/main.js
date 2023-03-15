const textInput = document.querySelector('.text-input');
const addNoteBtn = document.querySelector('.add-note');
const notesContainer = document.querySelector('#notes-container');

addNoteBtn.addEventListener('click', () => {
  const newNote = document.createElement('textarea');
  newNote.classList.add('note');
  newNote.value = textInput.value;
  notesContainer.appendChild(newNote);
  textInput.value = '';
});