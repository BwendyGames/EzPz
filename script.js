const boldBtn = document.querySelector('#bold-btn')
const underlineBtn = document.querySelector('#underline-btn')
const italicBtn = document.querySelector('#italic-btn')
const indentButton = document.querySelector('#indent-btn')
const undoButton = document.querySelector('#undo-btn')
const redoButton = document.querySelector('#redo-btn')
const hButton = document.querySelector('#h-btn')
const srcButton = document.querySelector('#src-btn')

const txtBtn = document.querySelector('#txt-btn')
const htmlBtn = document.querySelector('#html-btn')
const drkBtn = document.querySelector('#drk-btn')

const content = document.querySelector("#content")
const filename = document.querySelector("#filename-input")

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

srcButton.addEventListener('click', () => {
    window.location.assign('https://github.com/HollowNexus/EzPz');
})

undoButton.addEventListener('click', () => {
    document.execCommand('undo')
})

redoButton.addEventListener('click', () => {
    document.execCommand('redo')
})

boldBtn.addEventListener('click', () => {
    document.execCommand('bold')
})

underlineBtn.addEventListener('click', () => {
    document.execCommand('underline')
})

italicBtn.addEventListener('click', () => {
    document.execCommand('italic')
})

indentButton.addEventListener('click', () => {
    document.execCommand('indent')
})

hButton.addEventListener('click', () => {
    document.execCommand('heading')
})