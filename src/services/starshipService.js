import { mockStarships } from '../data/mockStarships.js';

const BASE_URL = 'https://swapi.info/api';

/**
 * Fetches all starships from SWAPI
 * @returns {Promise<Array>} An array containing all starships
 */
export const index = async () => {
  try {
    // Using mock data for testing purposes.
    // In a production environment, this would be replaced with a real API call.
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return mockStarships;
    
    /* 
    // Original code for real API (disabled due to CORS issues)
    const response = await fetch(`${BASE_URL}/starships/`);
    
    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Failed to fetch starships.');
    }
    
    const data = await response.json();
    
    // SWAPI returns paginated data, so we need to fetch all pages
    let allStarships = data.results;
    let nextUrl = data.next;
    
    // Fetch remaining pages if they exist
    while (nextUrl) {
      const nextResponse = await fetch(nextUrl);
      
      if (!nextResponse.ok) {
        throw new Error('Failed to fetch additional starships.');
      }
      
      const nextData = await nextResponse.json();
      allStarships = [...allStarships, ...nextData.results];
      nextUrl = nextData.next;
    }
    
    return allStarships;
    */
  } catch (error) {
    console.error('Error fetching starships:', error);
    throw error;
  }
};

/**
 * Fetches a specific starship by ID
 * @param {string|number} id - The ID of the starship
 * @returns {Promise<Object>} The starship data
 */
export const show = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/starships/${id}/`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch starship with ID: ${id}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching starship ${id}:`, error);
    throw error;
  }
};




