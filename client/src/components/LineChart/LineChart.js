import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import styles from './LineChart.module.css';

const LineChartCard = ({data, title}) => {
    // Custom tooltip style object
    const tooltipStyle = {
        backgroundColor: 'white',
        border: '1px solid #f0f0f0',
        borderRadius: '4px',
        padding: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    };
    
    // Function to get chart height based on window width
    const getChartHeight = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth <= 480) return 200;
            if (window.innerWidth <= 768) return 250;
            return 300;
        }
        return 300; // Default height
    };
    
    // Custom formatter for X-axis labels on small screens
    const formatXAxisTick = (value) => {
        if (typeof window !== 'undefined' && window.innerWidth < 480) {
            return value.substring(0, 3);
        }
        return value;
    };
    
    return (
        <div className={styles.chartContainer}>
            <div className={styles.chartHeader}>
                <h2 className={styles.chartTitle}>{title}</h2>
            </div>
            <div className={styles.chartWrapper} style={{ height: getChartHeight() }}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart 
                        data={data}
                        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis 
                            dataKey="date" 
                            tick={{fontSize: 12}}
                            tickFormatter={formatXAxisTick}
                            padding={{ left: 10, right: 10 }}
                        />
                        <YAxis 
                            tick={{fontSize: 12}} 
                            width={40}
                            axisLine={false}
                            tickLine={false}
                        />
                        <Tooltip contentStyle={tooltipStyle} />
                        <Legend 
                            wrapperStyle={{fontSize: 12, paddingTop: 10}}
                            iconSize={8}
                            align="center"
                            verticalAlign="bottom"
                        />
                        <Line
                            type="monotone"
                            dataKey="page_views"
                            stroke="#2563eb"
                            isAnimationActive={true}
                            animationEasing="linear"
                            strokeWidth={2}
                            dot={{ r: typeof window !== 'undefined' && window.innerWidth < 480 ? 2 : 4 }}
                            activeDot={{ r: typeof window !== 'undefined' && window.innerWidth < 480 ? 5 : 7 }}
                            name="Page Views"
                            animationDuration={1000}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default LineChartCard;