import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductHighlights from "@/components/ProductHighlights";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <ProductHighlights />
      <Footer />
    </main>
  );
}
