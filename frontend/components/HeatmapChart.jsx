import React from 'react';
import { HeatMap } from 'react-chartjs-2';

const HeatmapChart = ({ data }) => {
    const heatmapData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Correlation Matrix',
                data: data.values,
                backgroundColor: (context) => {
                    const value = context.dataset.data[context.dataIndex];
                    const alpha = value ? (value + 1) / 2 : 0; // Normalize value for color intensity
                    return `rgba(255, 99, 132, ${alpha})`; // Example color
                },
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="heatmap-chart">
            <h2 className="text-lg font-semibold">Heatmap Visualization</h2>
            <HeatMap data={heatmapData} />
        </div>
    );
};

export default HeatmapChart;