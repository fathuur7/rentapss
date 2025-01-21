'use client';

import React from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/navigation'; // Perubahan di sini

const IntroPage = () => {
//   const router = useRouter(); // Masih bisa digunakan seperti sebelumnya

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link href="/" className="text-xl font-bold text-blue-600">
              YourBrand
            </Link>
          </div>
          <div className="flex gap-x-6">
            <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900">
              Log in
            </Link>
            <Link 
              href="/signup"
              className="rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-500"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative isolate pt-14">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-200 to-blue-400 opacity-30"></div>
        </div>

        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Discover Amazing Products Just For You
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Browse through our curated collection of premium products. Find exactly what you need with our smart recommendations.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <button
                  onClick={() => router.push('/products')}
                  className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Start Shopping
                </button>
                <button
                  onClick={() => router.push('/about')}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              About
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              Contact
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              Terms
            </Link>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; 2025 YourBrand. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IntroPage;
