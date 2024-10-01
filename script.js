require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize the API client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function runGemini() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = "What are the top 10 campsites that take reservations in Arizona?";

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log("Gemini says:", text);
  } catch (error) {
    console.error("Error calling Gemini API:", error);
  }
}

runGemini();

const defaultBaseUrl = 'http://localhost:3000/campgrounds';

class CampgroundService {
    constructor(baseURL) {
        this.baseURL = baseURL || defaultBaseUrl;
    }

    async getAllCampgrounds() {
        const url = `${this.baseURL}campgrounds`;
        const response = await fetch(url);
        return response.json(); // Return the JSON data
    }
}
class CampgroundSelect {
    constructor(el) {
        this.el =el;
        this.el.addEventListener('change', (e) => this.onChange(e));
    }

    onChange(e){
        console.log('changed');
    }
}

const service = new CampgroundService();

const campgrounds = await service.getAllCampgrounds();

const campgroundSelect = document.querySelector('#campgrounds');

const fetchGet = async () => {
        try {
        let response = await fetch(URL);
        let data = await response.json();
        console.log(campgrounds); 
    } catch (error) {
        console.error('Error:', error);
    }
}
//get one item
const fetchGetOne = async (id) => {
        try {
        let response = await fetch(baseURL + '/' + id);
        let data = await response.json();
        console.log(data); // Do something with the data here!
    } catch (error) {
        console.error('Error:', error);
    }
}

const container = document.getElementById('campground-list'); // Assuming you have a container element

const renderPosts = async () => {
    const res = await fetch(baseURL);
    const posts = await res.json();

    let template = '';
    posts.forEach(post => {
        template += `
        <div class="post">
        <h2>${post.campground}</h2> 
        </div>
        `;
    });

    container.innerHTML = template; 
};

    const fetchDelete = async () => {
                try {
            let response = await fetch(baseURL + "/" + id, {
                method: 'DELETE'
            });
            let data = await response.json();
            console.log(data); // Do something with the data here!
        } catch (error) {
            console.error('Error:', error);
        }
    }


container.innerHTML = template;

}

window.addEventListener('DOMContentLoaded', (e) => renderPosts());

const campgrounds = [
    { id: 1, campground: "Grand Canyon National Park Campground" },
    { id: 2, campground: "Horseshoe Bend Campground" },
    { id: 3, campground: "Sedona Red Rock Country Campground" },
    { id: 4, campground: "Catalina State Park Campground" },
    { id: 5, campground: "Kartchner Caverns State Park Campground" },
    { id: 6, campground: "Dead Horse Ranch State Park Campground" },
    { id: 7, campground: "Canyon de Chelly National Monument Campground" },
    { id: 8, campground: "Organ Pipe Cactus National Monument Campground" },
    { id: 9, campground: "Aravaipa Canyon Wilderness Campground" },
    { id: 10, campground: "Petrified Forest National Park Campground" }
];

function populateDropdown() {
    const dropdown = document.getElementById('campground-dropdown');
    <select id="campground-dropdown"></select>

    // Create a default option
    const defaultOption = document.createElement('option');
    defaultOption.textContent = 'Select a campground';
    defaultOption.value = '';
    dropdown.appendChild(defaultOption);

    // Loop through the campgrounds and create an option for each
    campgrounds.forEach(campground => {
        const option = document.createElement('option');
        option.textContent = campground.campground; // Display name
        option.value = campground.id; // Use ID as the value
        dropdown.appendChild(option);
    });
}

// Call the function to populate the dropdown
populateDropdown();

function submitCampsite() {
    const name = document.getElementById('campsiteName').value;
    const location = document.getElementById('campsiteLocation').value;
    const number = document.getElementById('campsiteNumber').value;

    // Add new row to the table
    const tableBody = document.querySelector('.campground-list');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${location}</td>
        <td>${number}</td>
        <td>
            <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
            <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
        </td>
    `;
    tableBody.appendChild(newRow);

    // Clear the input fields
    document.getElementById('campsiteName').value = '';
    document.getElementById('campsiteLocation').value = '';
    document.getElementById('campsiteNumber').value = '';
}


