"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LatestProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        const latest = data.slice(-3).reverse();
        setProducts(latest);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-lg">No products available yet.</p>
      </div>
    );
  }

  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-800">
        Latest Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg p-6 transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-2 text-gray-800">{product.name}</h3>
            <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
            <p className="text-blue-600 font-semibold text-lg mb-2">${product.price}</p>
            <button
              onClick={() => router.push(`/products/${product.id}`)}
              className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-500 transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/products"
          className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-full hover:from-blue-500 hover:to-purple-500 transition"
        >
          See All Products
        </Link>
      </div>
    </section>
  );
}
