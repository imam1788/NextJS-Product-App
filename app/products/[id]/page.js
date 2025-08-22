"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();
        const found = data.find((p) => p.id.toString() === id);
        setProduct(found || null);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-4 border-gradient-to-r from-blue-500 to-purple-600 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl text-gray-600">Product not found!</p>
        <button
          onClick={() => router.push("/products")}
          className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-blue-500 transition"
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-center p-6 bg-gray-100">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-xl w-full border-t-8 border-blue-500 hover:shadow-3xl transition">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.name}</h1>
        <p className="text-gray-700 mb-6">{product.description}</p>
        <p className="text-2xl font-extrabold text-blue-600 mb-2">Price: ${product.price}</p>
        <p className="text-sm text-gray-500 mb-6">Added by: {product.user}</p>

        <button
          onClick={() => router.push("/products")}
          className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-500 transition"
        >
          Back to Products
        </button>
      </div>
    </div>
  );
}
