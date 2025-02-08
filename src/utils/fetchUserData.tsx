export const fetchUserData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/users/me", {
        method: "GET",
        credentials: "include", // Agar cookies dikirim otomatis
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

        const data = await response.json();
        return data;
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };
