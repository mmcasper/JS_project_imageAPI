//const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
//const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

/*fetch('https://dog.ceo/api/breeds/list')
    .then(respone => respone.json())
    .then(data => generateOptions(data.message))*/


fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => generateImage(data.message))


// ------------------------------------------
//  HELPER FUNCTIONS>
// ------------------------------------------
/*function generateOptions(data) {
    const options = data.map(item => `
        <option value='${item}'>${item}</option>
    `).join('');
    select.innerHTML = options;
}*/


function generateImage(data) {
    const html =`
    <img src='${data}' alt>

    `;
    card.innerHTML = html;
}

//    <p>Click to view images of ${select.value}s</p>
// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------