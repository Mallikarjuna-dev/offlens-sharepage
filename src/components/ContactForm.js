'use client';

import { useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const response = await axios.post('/api/google-sheet', formData);
            setStatus('success');
            toast.success('Form submitted Successfully!', {
                position: "top-right",
                autoClose: 2000,
                theme: "colored",
            });
            // alert(response.data.message);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            toast.error('Error submitting form!', {
                position: "top-right",
                autoClose: 2000,
                theme: "colored",
            });
            // alert('Error submitting form');
        }
    };

    return (
        <section id="contact" className="w-full md:w-4/12 border rounded-md border-gray-200 p-6">
            <h2 className="text-xl md:text-3xl font-semibold mb-5">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border rounded-md" placeholder="Name*" required />
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-md" placeholder="Email*" required />
                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full p-4 border rounded-md" placeholder="Message*" required />
                <button type="submit" className="bg-green-500 text-white w-full font-semibold rounded-full py-3 hover:bg-green-600">{status === 'loading' ? 'Submitting...' : 'Submit'}</button>
                <button
                    className="bg-white border border-gray-200 text-grey-300 font-semibold w-full rounded-full py-3 hover:bg-teal-600 hover:text-white transition"
                >Get Connected Now
                </button>
            </form>
        </section>
    );
};

export default ContactForm;








