const fullName = 'Adekomi Solomon';
const   Height = '1.7ft';
const Country = 'Nigeria';
let displayText = document.getElementById("displayText");
let btn = document.getElementById("btn");

btn.addEventListener('click', display);

function display(){
    displayText.innerHTML = `<p>Name: ${fullName} </p>
    <p>Height: ${Height} </p> <p>Country: ${Country}</p>`;
}