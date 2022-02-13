import {tdElems, notes } from '../main.js'
const popup = document.querySelector('.popup')
const popupClose = document.querySelector('.close-popup')
const popupBg = document.querySelector('.popup__bg')
const popupCloseBtn = document.querySelector('.closeModalBtn')
const popupNotes = document.querySelector('.popup__notes')

let id
function openNoteModal() {
  tdElems.forEach(elem => {
    if (elem.innerText != '') {
      elem.addEventListener('click', (e) => {
        popup.classList.add('open')
        id = e.target.id
      })
    }
  })
  popupClose.addEventListener('click', () => {
		popup.classList.remove('open')
	})
	popupBg.addEventListener('click', () => {
		popup.classList.remove('open')
	})
	popupCloseBtn.addEventListener('click', () => {
		popup.classList.remove('open')
	})
}

export {openNoteModal, popup, id}