// ------------------------------------------------------------------ //
//                        Weather API                                 //
// ------------------------------------------------------------------ //

// API Key and API URL
const apiKey = '16f342f7a193c9654f7f78cca463b624'; // Your OpenWeatherMap API key
const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather'; // URL for weather data endpoint

// Function to fetch weather data from the API
async function getWeatherData(location) {
  // Construct the full API URL with location and API key
  const apiUrl = `${weatherApiUrl}?q=${location}&appid=${apiKey}`;
  
  try {
    // Fetch weather data from the API
    const response = await fetch(apiUrl);
    
    // Check if the response indicates an error
    if (!response.ok) {
      throw new Error('Weather data not available for the specified location.');
    }
    
    // Parse the response JSON data and return it
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle errors and log them
    console.error('Error fetching weather data:', error);
    return null; // Return null to indicate failure
  }
}

// Function to show weather popup
function showWeatherPopup(location) {
  // Call the getWeatherData function
  getWeatherData(location)
    .then((data) => {
      if (data) {
        // Select popup elements by their IDs
        const weatherPopup = document.getElementById('weatherPopup');
        const weatherLocation = document.getElementById('weatherLocation');
        const weatherDescription = document.getElementById('weatherDescription');
        const weatherTemperature = document.getElementById('weatherTemperature');

        // Populate popup with weather data
        weatherLocation.textContent = `Location: ${data.name}`;
        weatherDescription.textContent = `Weather: ${data.weather[0].description}`;
        weatherTemperature.textContent = `Temperature: ${Math.round(data.main.temp - 273.15)}°C`;
        
        // Display the weather popup
        weatherPopup.style.display = 'block';
      } else {
        // Handle case when weather data is not available
        console.error('Weather data is null or undefined.');
      }
    })
    .catch((error) => {
      // Handle errors from getWeatherData
      console.error('Error fetching weather data:', error);
    });
}

// Function to close weather popup
function closeWeatherPopup() {
  // Hide the weather popup
  const weatherPopup = document.getElementById('weatherPopup');
  weatherPopup.style.display = 'none';
}

// Event listener for clicks outside the weather popup
window.addEventListener('click', (event) => {
  const weatherPopup = document.getElementById('weatherPopup');
  const exitIcon = document.getElementById('exitIcon');

  // Check if the clicked element is not the weatherPopup or exitIcon
  if (event.target !== weatherPopup && event.target !== exitIcon) {
    closeWeatherPopup();
  }
});

// Event listener for the exit icon
const exitIcon = document.getElementById('closeButton');
exitIcon.addEventListener('click', () => {
  closeWeatherPopup();
});

// Event listener for the route images
const routeImages = document.querySelectorAll('.image-api');
routeImages.forEach((image) => {
  image.addEventListener('click', (event) => {
    event.preventDefault();
    const location = image.dataset.location; // Get the location from the data-location attribute
    
    if (location) {
      showWeatherPopup(location);
    } else {
      console.error('Location data attribute not found.');
    }
  });
});


// ------------------------- //
//          Sudo Code        //
// ------------------------- //
//  1. where and what is the API
//    i. obtain the current weather conditions
//  2. Fetching the API data.
//    i. requesting indormation from the API
//  3. How do i display the collected data from the API 
//    i. Modal? popup?
//  4. How do i close the weather discription window?
//    i. Exit button vs click out side the element

// ----------------------------------------------------------------- //
//                    Function Notes / Understandings
// ----------------------------------------------------------------- //

//  1.  |-----  const apiKey = '16f342f7a193c9654f7f78cca463b624';
//              const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather'; -----| 
//
//              apiKey:         This constant stores the API key that is used to authenticate and access the OpenWeatherMap API.
//              weatherApiUrl:  This constant stores the base URL for the OpenWeatherMap API's weather data endpoint.

//  2.  |----- async function getWeatherData(location) {
//                const apiUrl = `${weatherApiUrl}?q=${location}&appid=${apiKey}`;
//                try {
//                  const response = await fetch(apiUrl);
//                  if (!response.ok) {
//                    throw new Error('Weather data not available for the specified location.');
//                  }
//                  const data = await response.json();
//                  return data;
//                } catch (error) {
//                  console.error('Error fetching weather data:', error);
//                  return null; -----| 
//
//                  - getWeatherData(location): This is an asynchronous function that takes a location parameter and fetches weather data from the OpenWeatherMap API for that location.
//                  - It constructs the full API URL using the location and apiKey.
//                  - It uses the fetch function to make an HTTP GET request to the API.
//                  - If the response is not successful (indicated by response.ok being false), an error is thrown.
//                  - If the response is successful, it parses the JSON data from the response and returns it.
//                  - If an error occurs during the fetch or JSON parsing, it logs the error and returns null.
//
//      |----- function showWeatherPopup(location) {
//                getWeatherData(location)
//                  .then((data) => { -----| 
//
//                  - showWeatherPopup(location): This function takes a location parameter and displays weather information in a popup.
//                  - It calls the getWeatherData function to retrieve weather data for the specified location.
//                  - If weather data is available (data is not falsy), it selects elements in the popup by their IDs and populates them with weather information.
//                  - It converts the temperature from Kelvin to Celsius.
//                  - Finally, it displays the weather popup by setting its display style property to 'block'.
//
//      |----- function closeWeatherPopup() { -----| 
//
//          closeWeatherPopup(): This function hides the weather popup by setting its display style property to 'none'.

//  3.  |----- Setting Event Listeners for 'closebutton', 'imageapi', 'exiticon' -----| 
//
//                  - The first event listener closes the weather popup when a click occurs outside the popup or on the exit icon.
//                  - The second event listener closes the popup when the exit icon is clicked.
//                  - The third event listener handles clicks on route images by preventing the default action, 
//                  retrieving the location from the data-location attribute of the clicked image, 
//                  and then showing the weather popup for that location using the showWeatherPopup function.
//                  These event listeners provide the interactive behavior for displaying and hiding the weather popup and handling interactions with route images.