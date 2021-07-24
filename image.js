const card = document.querySelector('.card');

//Fetch images
fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => generateImage(data.message))

//Function to generate image
function generateImage(data) {
    const html =`
    <img src='${data}' alt>
    `;
    card.innerHTML = html;
}