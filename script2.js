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

const defaultBaseUrl = 'http://localhost:3000/';

class CampgroundService {
    constructor(baseURL) {
        this.baseURL = baseURL || defaultBaseUrl;
    }

    async getAllCampgrounds() {
        const url = `${this.baseURL}campgrounds`;
        const response = await fetch(url);
        return response.json();
    }
}

class CampgroundSelect {
    constructor(el) {
        this.el = el;
        this.el.addEventListener('change', (e) => this.onChange(e));
    }

    onChange(e) {
        console.log('Campground changed:', e.target.value);
    }
}

const service = new CampgroundService();

async function initialize() {
    const campgrounds = await service.getAllCampgrounds();
    populateDropdown(campgrounds);
}

function populateDropdown(campgrounds) {
    const dropdown = document.getElementById('campground-dropdown');

    // Clear existing options
    dropdown.innerHTML = '';

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

// Call the function to initialize the dropdown on page load
window.addEventListener('DOMContentLoaded', initialize);

// Submit campsite function
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