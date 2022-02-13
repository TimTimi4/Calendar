import { popup, id } from './openNote.js'
const saveBtn = document.querySelector('.saveBtn')
const textarea = document.querySelector('.popup-form__descField')

import { notes, render, tdElems } from '/main.js'


export function saveNote() {
  saveBtn.addEventListener('click', (e) => {
    const newNote = {
      id: id,
      text: [textarea.value],
    }
    if (notes.length !== 0) {
      notes.forEach(note => {
        if (note.id == newNote.id) note.text.push(textarea.value)
        else notes.push(newNote)
      })
    } else notes.push(newNote)
    
    localStorage.setItem('note', JSON.stringify(notes))

    // if (textarea.value != '') {
    // 	const newNote = {
    // 		id: String(tasks.length + 1),
    // 		icon: true,
    // 		text: textarea.value,
    // 	}
    // 	tasks.push(newTask)
    // 	render()
    // 	localStorage.setItem('task', JSON.stringify(tasks))

    // 	input.value = ''
    textarea.value = ''

    popup.classList.remove('open')
    tdElems.forEach(elem => {
      render(elem)
    });
    // 	titleError.classList.remove('open')
    // }
  })
}

