'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';


interface Coin {
    id: string;
    market_cap_rank: number;
    name: string;
    symbol: string;
    image: string;
    current_price: number;
    price_change_percentage_24h: number;
    market_cap: number;
}

const LivePrices: React.FC = () => {
    const [coins, setCoins] = useState<Coin[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [query, setQuery] = useState<string>('');


    useEffect(() => {
        let isMounted = true;
        const fetchCoins = async () => {
            try {
                setLoading(true);
                const res = await axios.get<Coin[]>(
                    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false'
                );
                   console.log(res.data)
                if (isMounted) setCoins(res.data);
            } catch (err) {
                if (isMounted) setError('Failed to fetch coin data');
            } finally {
                if (isMounted) setLoading(false);
            }
        };
        fetchCoins();
        return () => { isMounted = false };
    }, []);
    const filtered = coins.filter(c =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.symbol.toLowerCase().includes(query.toLowerCase())
    );
    return (
        <motion.section className='bg-white'>
            <div className="max-w-6xl mx-auto bg-white">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Live Prices</h2>
                <p className="text-sm text-gray-600 mb-6">Data from CoinGecko API — updates on page load.</p>


                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search by name or symbol..."
                        className="w-full md:w-72 px-4 py-2 rounded-lg border shadow-sm placeholder-gray-500 text-black focus:text-black focus-visible:text-black"
                    />
                    <div className="text-sm text-gray-500">Showing {filtered.length} / {coins.length} coins</div>
                </div>
                {loading ? (
                    <div className="text-center py-12 text-gray-500">Loading...</div>
                ) : error ? (
                    <div className="text-center py-12 text-red-600">{error}</div>
                ) : (
                    <div className="overflow-x-auto bg-white rounded-lg shadow">
                        <table className="w-full text-sm md:text-base">
                            <thead className="bg-gray-100 text-gray-700">
                                <tr>
                                    <th className="p-3 text-left">#</th>
                                    <th className="p-3 text-left">Coin</th>
                                    <th className="p-3 text-center">Symbol</th>
                                    <th className="p-3 text-right">Current Price</th>
                                    <th className="p-3 text-right">24h Change</th>
                                    <th className="p-3 text-right">Market Cap</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((c) => (
                                    <tr key={c.id} className="border-t hover:bg-gray-50">
                                        <td className="p-3 text-black">{c.market_cap_rank}</td>
                                        <td className="p-3 flex items-center gap-3">
                                            <img src={c.image} alt={c.name} className="w-7 h-7 rounded-full" />
                                            <div>
                                                <div className="font-medium text-black">{c.name}</div>
                                                <div className="text-xs text-black">{c.symbol.toUpperCase()}</div>
                                            </div>
                                        </td>
                                        <td className="p-3 text-center uppercase text-black">{c.symbol}</td>
                                        <td className="p-3 text-right text-black">${c.current_price.toLocaleString()}</td>
                                        <td className={`p-3 text-right ${c.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                            {c.price_change_percentage_24h?.toFixed(2)}%
                                        </td>
                                        <td className="p-3 text-right text-black">${c.market_cap.toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </motion.section >
    );
};


export default LivePrices;