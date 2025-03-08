"use client"

import {ToastContainer} from "react-toastify";
import Header from '@/components/Header';
import About from '@/components/About';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import PriceChartCard from '@/components/PriceChartCard';

export default function Home() {
  return (
    <div>
      <Header />

      <div className='px-28 text-center bg-gray-50 text-6xl font-bold py-28'>
        <h1>Chennai Super Kings (CSK) Shares</h1>
      </div>

      <main className="flex px-32 py-16">

        <PriceChartCard price="185" change="+5" percentageChange="2.78" />

        <ContactForm />

      </main>

      <About />

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
