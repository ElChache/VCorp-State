// Test script to debug the API call
console.log('Testing API call...');

fetch('http://localhost:3001/api/projects')
  .then(response => {
    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);
    return response.json();
  })
  .then(data => {
    console.log('API Response:', data);
    console.log('Number of projects:', data.length);
  })
  .catch(error => {
    console.error('API Error:', error);
  });