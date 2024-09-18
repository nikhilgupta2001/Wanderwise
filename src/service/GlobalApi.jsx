import axios from 'axios';

const BASE_URL = 'https://api.unsplash.com/search/photos';

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Client-ID Bdz-xKi8UNSSE5PqS10qjwMlr0pLOqilHD5lbxPFqFg',  // Replace with your API key
  },
};

// Use axios.get() instead of post()
export const GetPlaceDetails = (data) => 
  axios.get(BASE_URL, {
    params: {
      query: data.textQuery,  // Place name
      per_page: data.per_page || 1,  // Number of photos to fetch
    },
    ...config,
  });
