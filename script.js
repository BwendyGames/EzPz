const boldBtn = document.querySelector('#bold-btn')
const underlineBtn = document.querySelector('#underline-btn')
const italicBtn = document.querySelector('#italic-btn')

const txtBtn = document.querySelector('#txt-btn')
const htmlBtn = document.querySelector('#html-btn')
const drkBtn = document.querySelector('#drk-btn')

const content = document.querySelector("#content")
const filename = document.querySelector("#filename-input")

boldBtn.addEventListener('click', () => {
    document.execCommand('bold')
})

underlineBtn.addEventListener('click', () => {
    document.execCommand('underline')
})

italicBtn.addEventListener('click', () => {
    document.execCommand('italic')
})

txtBtn.addEventListener('click', () => {
    const a = document.createElement('a')
    const blob = new Blob([content.innerText])
    const dataUrl = URL.createObjectURL(blob)
    a.href = dataUrl
    a.download = filename.value + ".txt"
    a.click() 
})

htmlBtn.addEventListener('click', () => {
    const a = document.createElement('a')
    const blob = new Blob([content.innerHTML])
    const dataUrl = URL.createObjectURL(blob)
    a.href = dataUrl
    a.download = filename.value + ".html"
    a.click() 
})

drkBtn.addEventListener('click', () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
})


const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 200);
})