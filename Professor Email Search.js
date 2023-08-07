// Import the 'axios' library for making HTTP requests
const axios = require('axios');

// Function to search for a professor's email using their name and college's email domain
async function searchProfessorEmail(name, emailDomain) {
  try {
    const query = `${name} "${emailDomain}"`;
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

    // Send GET request to Google Search
    const response = await axios.get(searchUrl);

    // You can process the 'response' here to extract relevant information
    console.log(response.data);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Example usage
searchProfessorEmail('徐邦寧', '@pu.edu.tw');