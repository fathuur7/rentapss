import Header  from "../components/layout/header";
import Navbar from '../components/layout/navbar';
import HomeComponent from '../components/home/home';

export default function Home() {
  return (
    // Redirect to the home page when the app loads
    <main className="min-h-screen">
      <Header />
      <Navbar />
      <HomeComponent />
    </main>
  );
}
