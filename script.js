const boldBtn = document.querySelector('#bold-btn')
const underlineBtn = document.querySelector('#underline-btn')
const italicBtn = document.querySelector('#italic-btn')
const indentButton = document.querySelector('#indent-btn')
const undoButton = document.querySelector('#undo-btn')
const redoButton = document.querySelector('#redo-btn')


const h1Button = document.querySelector('#h1-btn')
const h2Button = document.querySelector('#h2-btn')
const h3Button = document.querySelector('#h3-btn')
const h4Button = document.querySelector('#h4-btn')
const h5Button = document.querySelector('#h5-btn')
const h6Button = document.querySelector('#h6-btn')

const bButton = document.querySelector('#b-btn')
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
    content.innerText = '<!DOCTYPE html>\n <html lang="en"> \n <!--When you see this, this is a "comment" and is not read as HTML by the browser.--> \n\n <!--The head tag is where you store information like your websites title, favicon, etc.--> \n<head> \n <title>Page Title</title> \n </head>\n \n <!--The body tag is where you will write most of your HTML.--> \n <body> \n\n<h1>Welcome To My HTML Page</h1>\n <h4>Catchy slogan here :)</h4> \n\n </body> \n\n</html>'
})

drkBtn.addEventListener('click', () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
})

srcButton.addEventListener('click', () => {
    window.location.assign('https://gitfront.io/r/user-3101836/dQJRFYBQt69t/EzPz/');
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

h1Button.addEventListener('click', () => {
    document.execCommand('formatBlock', false, '<h1>');
})

h2Button.addEventListener('click', () => {
    document.execCommand('formatBlock', false, '<h2>');
})

h3Button.addEventListener('click', () => {
    document.execCommand('formatBlock', false, '<h3>');
})

h4Button.addEventListener('click', () => {
    document.execCommand('formatBlock', false, '<h4>');
})

h5Button.addEventListener('click', () => {
    document.execCommand('formatBlock', false, '<h5>');
})

h6Button.addEventListener('click', () => {
    document.execCommand('formatBlock', false, '<h6>');
})

bButton.addEventListener('click', () => {
    document.execCommand('formatBlock', false, '<body>');
})

