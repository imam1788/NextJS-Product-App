import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductHighlights from "@/components/ProductHighlights";
import Footer from "@/components/Footer";
import LatestProducts from "@/components/LatestProducts";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <LatestProducts></LatestProducts>
      <ProductHighlights />
      <Footer />
    </main>
  );
}
