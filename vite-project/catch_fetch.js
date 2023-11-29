// make function to get image from an api site that generates random images
// api - application programming interface - define how apps or devices can communicate with one another
export function fetchRandomCatImage() {
    // define your api URL and fetch database
    const apiUrl = 'https://cataas.com/cat?json=true';
    fetch(apiUrl)
    // once api has been fetched, use .then() method - commonly used with Promises - which handle asynchronous operations 
    .then((response) => response.json())
    // .then() method to attach callbacks that will be executed when the Promise is resolved with a value 
    .then((data) => {
        const catData = data;
        // link the div that we will be adding the data to
        const catImageContainer = document.getElementById('catImageContainer');
        if (catData._id) {
            // create element
            const catImage = document.createElement('img');
            // detail what will be IN the element
            catImage.src = `https://cataas.com/cat/${catData._id}`;
            catImage.alt = 'Random Cat displayed on screen.';
            // append element
            catImageContainer.appendChild(catImage);
        }
    })
        // catch and express the error code
        .catch((error) => {
            console.error('Error fetching cat image:' , error);
        });
    }