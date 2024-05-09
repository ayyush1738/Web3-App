import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectNetwork from "./components/MetaSwap";


export default function App() {
  return (
    <main className="main bg-gray-900 h-screen">
      <Navbar />
      <Hero />
      <SelectNetwork/>
    </main>
  );
}
