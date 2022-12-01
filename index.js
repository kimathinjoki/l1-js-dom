// TODO: Listen for page loading (window)
const print = (tag, value) =>{
    console.log(tag,value);
}


window.onload = () =>{
    console.log("Window:", "Loaded")
}

// TODO: Listen for page loading (document)

document.addEventListener("DOMContentLoaded", (e)=> {
    // console.log('event', e)
    // TODO: Access the h1 in HTML page
    const h1 = document.getElementById("app_title")
    print(h1);
    // TODO: Change color of app_title
    h1.classList.add('title')
    // TODO: Change color of app_paragraph
    const p = document.getElementById("app_paragraph")
    p.classList.add("paragraph")
    // TODO: Change color of main page
    const body = document.querySelector('body');
    body.classList.add("main")
    // TODO: Add a new element to the container
    const div = document.getElementById('container');
    const header = document.createElement('h2')
    header.innerText = 'Newly created'
    div.appendChild(header)
    // TODO: Remove the h1 from the page
    const b1 = document.getElementById('btn-title').addEventListener('click',()=> h1.remove())
    const b2 = document.getElementById('btn-paragraph').addEventListener('click', ()=>{})
    const b3 = document.getElementById('btn-main').addEventListener('click', ()=>{
        div.remove()
    })

    document.addEventListener('mousedown', ()=> print('Mousedown', 'hello'))




})





// TODO: Listen for three mouse events

function amClicked(){
    alert('Feels nice to be clicked')
}

// const b1 = document.getElementById('btn-title').addEventListener('click',()=> h1.remove())
// const b2 = document.getElementById('btn-paragraph').addEventListener('click', ()=>{})
// const b3 = document.getElementById('btn-main').addEventListener('click', ()=>{
//     div.remove()
// })

