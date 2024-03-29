
import Navbar from "./components/ui/Navbar";
import Banner from "./components/Banner";
import MiniSlider from "./components/Slider";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <div className="px-3 md:px-32 ">
        <MiniSlider />
        <Gallery />
      </div>
    </main>
  );
}

