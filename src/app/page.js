"use client";

import { ToastContainer } from "react-toastify";
import Header from '@/components/Header';
import About from '@/components/About';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import PriceChartCard from '@/components/PriceChartCard';

export default function Home() {
  return (
    <div>
      <Header />

      <div className='px-6 md:px-28 text-center bg-gray-50 text-3xl md:text-6xl font-bold py-16 md:py-28'>
        <h1>Chennai Super Kings (CSK) Shares</h1>
      </div>

      <main className="flex flex-col md:flex-row md:justify-between px-6 md:px-32 py-10 md:py-16 gap-10">

        <PriceChartCard price="185" change="+5" percentageChange="2.78" />

        <ContactForm />

      </main>

      <About />

      <hr className="mx-6 md:mx-28 h-px border-0 bg-gray-300" />

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        closeOnClick
        theme="colored"
      />
    </div>
  );
}
