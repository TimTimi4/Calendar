import { openNoteModal } from './moduls/openNote.js';
import { saveNote } from './moduls/saveNote.js';

const currentDate = new Date()

const getMonth = () => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November', 'December']
  const monthIndex = currentDate.getMonth()
  const currentMonth = months[monthIndex]
  return currentMonth
}
const monthTitle  = document.querySelector('.calendar__title')
monthTitle.innerText = getMonth()

const calendar = document.querySelector('.table')

function createCalendar(elem, year, month) {
  let startOfMonth = new Date(year, month)
  let table = '<table><tr><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th></tr><tr>';
  for (let i = 0; i < getDay(startOfMonth); i++) {
    table += '<td></td>';
  }
  while (startOfMonth.getMonth() == month) {
    table += '<td>' + startOfMonth.getDate() + '<i></i>' + '</td>';
    if (getDay(startOfMonth) % 7 == 6) {
      table += '</tr><tr>';
    }
    startOfMonth.setDate(startOfMonth.getDate() + 1);
  }
  if (getDay(startOfMonth) != 0) {
    for (let i = getDay(startOfMonth); i < 7; i++) {
      table += '<td></td>';
    }
  }
  table += '</tr></table>';
  elem.innerHTML = table;
}
function getDay(date) { 
  let day = date.getDay();
  if (day == 0) day = 7;
  return day-1;
}
createCalendar(calendar, currentDate.getFullYear(), currentDate.getMonth())


function getNotesFromLocalStorage() {
	const save = JSON.parse(localStorage.getItem('note'))
	return save || []
}
const notes = getNotesFromLocalStorage()

const tdElems = Array.from(document.getElementsByTagName('td'))
const iElems = Array.from(document.getElementsByTagName('i'))
iElems.forEach(elem => {
  elem.classList.add('fas', 'fa-exclamation')
})

const render = (elem) => {
  notes.forEach(note => {
    if (note.id === elem.id) {
      elem.querySelector('i').classList.add('icon')
    }
  })
}

const renderNotes = (elem) => {
  notes.forEach(note => {
    if (note.id === elem.id) {
      elem.innerHTML = note.text
    }
  })
}

openNoteModal()

tdElems.forEach(elem => {
  if (elem.innerText === String(currentDate.getDate())) {
    elem.classList.add('today')
  }
  if (elem.innerText != '') {
    elem.setAttribute('id', elem.innerText)
    elem.classList.add('notEmpty')
  }
  render(elem)
})

saveNote()

export {tdElems, notes, render, renderNotes}