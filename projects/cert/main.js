const btn = document.getElementById('btn')
const name = document.getElementById('name')
const course = document.getElementById('course')
const currentDate = document.getElementById('currentDate')
const startDate = document.getElementById('startDate')
const finishDate = document.getElementById('finishDate')
const year = document.getElementById('year')

let nameInfo = document.getElementById('name-info')
let courseInfo = document.getElementById('course-info')
let currentDateInfo = document.getElementById('certificate-date-info')
let startDateInfo = document.getElementById('date-start-info')
let finishDateInfo = document.getElementById('date-end-info')
let yearInfo = document.getElementById('year-info')

btn.addEventListener('click', () => {
  nameInfo.innerText = name.value
  courseInfo.innerText = course.value
  currentDateInfo.innerText = currentDate.value
  startDateInfo.innerText = startDate.value
  finishDateInfo.innerText = finishDate.value
  yearInfo.innerText = year.value
})