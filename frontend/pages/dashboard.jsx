import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DendrogramChart from '../components/DendrogramChart';
import HeatmapChart from '../components/HeatmapChart';

const Dashboard = () => {
    const [data, setData] = useState(null);
    const [country, setCountry] = useState('USA');
    const [period, setPeriod] = useState('Pre-COVID');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/results/`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    const handlePeriodChange = (event) => {
        setPeriod(event.target.value);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <div className="mb-4">
                <label className="mr-2">Select Country:</label>
                <select value={country} onChange={handleCountryChange}>
                    <option value="USA">USA</option>
                    <option value="Tunisia">Tunisia</option>
                </select>
                <label className="ml-4 mr-2">Select Period:</label>
                <select value={period} onChange={handlePeriodChange}>
                    <option value="Pre-COVID">Pre-COVID</option>
                    <option value="COVID">COVID</option>
                    <option value="Post-COVID">Post-COVID</option>
                </select>
            </div>
            <DendrogramChart data={data.dendrogram} country={country} period={period} />
            <HeatmapChart data={data.correlationMatrix} title="Correlation Matrix" />
            <HeatmapChart data={data.distanceMatrix} title="Distance Matrix" />
        </div>
    );
};

export default Dashboard;