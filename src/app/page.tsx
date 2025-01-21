import Header  from "./components/layout/header";
import Navbar from './components/layout/navbar';
import Home from './components/home';

export default function APP() {
  return (
    // Redirect to the home page when the app loads
    <main className="min-h-screen">
      <Header />
      <Navbar />
      <Home />
    </main>
  );
}
