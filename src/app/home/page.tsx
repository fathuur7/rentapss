'use client'
import Header  from "../../components/layout/header";
import Navbar from '../../components/layout/navbar';
import HomeComponent from '../../components/home/home';
import { useEffect , useState} from "react";



export default function home() {
  // Fetch user data upon app load
  return (
    // Redirect to the home page when the app loads
    <main className="min-h-screen">
      <Header />
      <Navbar />
      <HomeComponent />
    </main>
  );
}
