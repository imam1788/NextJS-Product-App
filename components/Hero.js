import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center text-center px-6 py-28 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 animate-pulse"></div>

      <h2 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
        Welcome to MyStore
      </h2>
      <p className="max-w-2xl text-lg md:text-xl mb-8 drop-shadow">
        Discover amazing products at unbeatable prices. Sign in to add your own products and manage them easily!
      </p>
      <Link
        href="/products"
        className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
      >
        Explore Products
      </Link>
    </section>
  );
}
