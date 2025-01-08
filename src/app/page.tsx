import Navbar from "./components/navbar";
import Header from "./components/header";
import Home from "./components/home";

export default function APP() {
  return (
    <main className="min-h-screen">
      <Header />
      <Navbar />
      <Home />
    </main>
  );
}
