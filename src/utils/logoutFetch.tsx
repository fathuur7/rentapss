const logoutFetch = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'  // Penting untuk mengirim cookies
      });
      
      if (!response.ok) {
        throw new Error('Logout failed');
      }
  
      const data = await response.json();
      console.log('Logout successful:', data);
      return data;
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  };
  
  export default logoutFetch;