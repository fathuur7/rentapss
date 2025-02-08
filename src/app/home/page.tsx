'use client'
import Header  from "../../components/layout/header";
import Navbar from '../../components/layout/navbar';
import HomeComponent from '../../components/home/home';
import {fetchUserData} from '../../utils/fetchUserData';
import { useEffect , useState} from "react";
interface UserData {
  id: number;
  name: string;
  email: string;
  // Add other properties as needed
}

export default function home() {
  // Fetch user data upon app load
  const [userData , setUserData] = useState<UserData | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserData();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchData();
  }, []);
  
  console.log(userData);

  


  
  return (
    // Redirect to the home page when the app loads
    <main className="min-h-screen">
      <Header />
      <Navbar />
      <HomeComponent />
    </main>
  );
}
