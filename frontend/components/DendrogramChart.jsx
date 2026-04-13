import React from 'react';
import Plot from 'react-plotly.js';

const DendrogramChart = ({ data }) => {
    const layout = {
        title: 'Hierarchical Risk Parity Dendrogram',
        height: 600,
        width: 800,
        showlegend: false,
        xaxis: {
            title: 'Distance',
            showgrid: false,
            zeroline: false,
        },
        yaxis: {
            title: 'Assets',
            showgrid: false,
            zeroline: false,
        },
    };

    return (
        <div className="dendrogram-chart">
            <Plot
                data={data}
                layout={layout}
                config={{ responsive: true }}
            />
        </div>
    );
};

export default DendrogramChart;