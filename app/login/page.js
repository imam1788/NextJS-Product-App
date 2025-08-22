"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const handleLogin = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 px-4">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl max-w-md w-full p-10 text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-blue-600">
          Welcome Back!
        </h1>
        <p className="text-gray-700 mb-8">
          Sign in with Google to manage your products and explore amazing items.
        </p>
        <button
          onClick={handleLogin}
          className="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
