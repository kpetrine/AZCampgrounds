//javascript for details.html
const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');


const renderDetails = async () => {
    const res = await fetch('http://localhost:3000/posts' + id )
    const post = await res.json();
    
    const template =`
    <h1>${post.gampground}</h1>
    <p>${post.location}</p>
     `
container.innerHTML = template;
}

window.addEventListener('DOMContentLoaded' , () => renderDetails());
