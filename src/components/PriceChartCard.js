import Image from 'next/image';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState } from 'react';

const data = {
    daily: [
        { date: 'Mar 1', price: 180 },
        { date: 'Mar 2', price: 185 },
        { date: 'Mar 3', price: 190 },
        { date: 'Mar 4', price: 188 },
    ],
    weekly: [
        { date: 'Week 1', price: 170 },
        { date: 'Week 2', price: 175 },
        { date: 'Week 3', price: 180 },
        { date: 'Week 4', price: 185 },
    ],
    monthly: [
        { date: 'Oct', price: 217 },
        { date: 'Nov', price: 210 },
        { date: 'Dec', price: 196 },
        { date: 'Jan', price: 188 },
        { date: 'Feb', price: 192 },
    ],
};

const PriceChartCard = ({ price, change, percentageChange }) => {
    const [timeFrame, setTimeFrame] = useState('daily');

    return (
        <div className="w-8/12">
            <div className="">
                <Image src="/csk-logo.avif" alt="csk share logo" width={50} height={50} />
                <h2 className="text-2xl font-semibold my-3">Chennai Super Kings (CSK) Share Price</h2>
                <div className='flex items-center'>
                    <p className="text-4xl font-bold text-yellow-500 pr-3">₹{price}</p>
                    <p className={`text-lg ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {change >= 0 ? '+' : '-'}₹{Math.abs(change)} ({percentageChange}%)
                    </p></div>
            </div>

            <div className="bg-white mt-6">
                <div className="mb-4 space-x-2">
                    {['daily', 'weekly', 'monthly'].map((frame) => (
                        <button
                            key={frame}
                            className={`px-4 py-2 rounded-md ${timeFrame === frame ? 'bg-yellow-500 text-white' : 'bg-gray-200'
                                }`}
                            onClick={() => setTimeFrame(frame)}
                        >
                            {frame.charAt(0).toUpperCase() + frame.slice(1)}
                        </button>
                    ))}
                </div>

                <ResponsiveContainer width="80%" height={350}>
                    <LineChart data={data[timeFrame]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis domain={['auto', 'auto']} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="price" stroke="#ffcc00" strokeWidth={3} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
};

export default PriceChartCard;
