const PORT = 3000;

const defaultBaseUrl = `http://localhost:${PORT}/campgrounds/`;

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => addCampground(e));

const getAllCampgrounds = async (baseURL) => {
   try {
     let response = await fetch(`${baseURL}`);
     let data = await response.json();
     console.log('Campgrounds:', data);
     showCampgrounds(data); //<-- Calls our function to display the data
   } catch (error) {
    console.error('Error fetching campgrounds:', error);
   }
}
//NOTE: Calling to get all campgrounds
getAllCampgrounds(defaultBaseUrl);

function showCampgrounds(data){
    console.log('showCampgrounds:', data);
    let tbody = document.getElementById('tbody');
    for(let item of data){

    // Create a new row and cells
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');

    // add delete button
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.onclick = function() {
        deleteCampground(item.id); //FIXME - NEEDS THIS BUILT
    }
    }



    // Fill the cells with data
    td1.textContent = item.campground;
    td2.textContent = item.location;
    td3.appendChild(deleteButton);
   

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody.appendChild(tr);
    }


const deleteCampground = async (id) => {
    try {
        let response = await fetch(`${defaultBaseUrl}${id}`, {
            method: 'DELETE'
        });
        let data = await response.json();
        console.log('Campground deleted:', data);
        showCampgrounds(data);
    } catch (error) {
        console.error('Error deleting campground:', error);
    }
}

const addCampground = async () => {
    e.preventDefault();
    let campground = document.getElementById('campground').value;
    let location = document.getElementById('location').value;
    let newCampground = {
        campground: campground,
        location: location
    };
    try {
        let response = await fetch(defaultBaseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCampground)
        });
        let data = await response.json();
        console.log('New campground added:', data); // Do something with the data here!

        document.getElementById('campground').value = '';
        document.getElementById('location').value = '';

        getAllCampgrounds(defaultBaseUrl);
    } catch (error) {
        console.error('Error adding campground:', error);
    }
};