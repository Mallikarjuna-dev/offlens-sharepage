'use client';

import Image from 'next/image';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState } from 'react';

const data = {
    daily: [
        { date: 'Mar 1', price: 180 },
        { date: 'Mar 2', price: 185 },
        { date: 'Mar 3', price: 190 },
        { date: 'Mar 4', price: 188 }
    ],
    weekly: [
        { date: 'Week 1', price: 170 },
        { date: 'Week 2', price: 175 },
        { date: 'Week 3', price: 180 },
        { date: 'Week 4', price: 185 }
    ],
    monthly: [
        { date: 'Oct', price: 217 },
        { date: 'Nov', price: 210 },
        { date: 'Dec', price: 196 },
        { date: 'Jan', price: 188 },
        { date: 'Feb', price: 192 }
    ],
};

const PriceChartCard = ({ price, change, percentageChange }) => {
    const [timeFrame, setTimeFrame] = useState('daily');

    return (
        <div className="w-full md:w-7/12">
            <div className="items-center space-x-3 space-y-3">
                <Image src="/csk-logo.avif" className='border rounded-md' alt="csk share logo" width={100} height={100} />
                <h2 className="text-xl md:text-2xl font-semibold">Chennai Super Kings (CSK) Share Price</h2>
            </div>

            <div className="flex items-center mt-3">
                <p className="text-3xl md:text-4xl font-bold text-yellow-500 pr-3">₹{price}</p>
                <p className={`text-lg ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {change >= 0 ? '+' : '-'}₹{Math.abs(change)} ({percentageChange}%)
                </p>
            </div>

            <div className="mt-6">
                <div className="mb-4 space-x-2">
                    {['daily', 'weekly', 'monthly'].map((frame) => (
                        <button
                            key={frame}
                            className={`px-3 py-2 rounded-md ${timeFrame === frame ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
                            onClick={() => setTimeFrame(frame)}
                        >
                            {frame.charAt(0).toUpperCase() + frame.slice(1)}
                        </button>
                    ))}
                </div>

                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data[timeFrame]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="price" stroke="#ffcc00" strokeWidth={3} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default PriceChartCard;
