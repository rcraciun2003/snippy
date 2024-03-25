// services/ApiService.js

// Function to get token from somewhere, e.g., localStorage
function getToken() {
  // You should implement the logic to retrieve your token here
  // For example, from localStorage:
  //return localStorage.getItem('token');
  return '8|DC9SgiKR657wV8bdOmuWeOJClblbPu1KxXrG3LuF01ba809a';
}

async function fetchWithToken(url, options = {}) {
  const token = getToken();
  console.log('token', token);
  if (!token) {
    console.error('Token not found');
    return;
  }

  const headers = new Headers(options.headers || {});
  headers.append('Authorization', `Bearer ${token}`);
  headers.append('Accept', 'application/json');
  headers.append('Content-Type', 'application/json');
  console.log('headers', headers);

  const response = await fetch(url, {
    ...options,
    headers: headers,
  });

  if (!response.ok) {
    // Handle response errors here
    const error = new Error('An error occurred while fetching the data.');
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  return response.json(); // Assumes JSON response
}

export const apiService = {
  async getSnippets() {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    return await fetchWithToken(`${baseUrl}snippets`);
  },

  // {==================================== Add more API interactions here as needed ===========================}

  // Deletion of a snippet function
  async deleteSnippet(id) {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      return await fetchWithToken(`${baseUrl}snippets/${id}`, {
        method: 'DELETE',
      });
    } catch (err) {
      throw new Error('Failed to delete snippet');
    }
  },
};
