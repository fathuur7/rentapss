
import { useState, useEffect } from "react";

interface UserData {
  id: number;
  name: string;
  email: string;
  telegram: string;
}

export const useUserData = ( ) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
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
        setUserData(data);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return userData;
};

// Gunakan hook ini di komponen React

