import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({title, data, percentage, unit}) => {
    const getGaugeColor = (percent) => {
        if (percent < 30) return '#ef4444'; // red
        if (percent < 70) return '#f59e0b'; // amber
        return '#10b981'; // green
    };
    
    return (
        <div className={styles.card}>
            <h2 className={styles.cardTitle}>{title}</h2>
            <div className={styles.progressContainer}>
                <div 
                    className={styles.progressBar}
                    style={{
                        width: `${percentage}%`,
                        backgroundColor: getGaugeColor(percentage)
                    }}
                />
            </div>
            <div className={styles.progressLabel}>
                {data} {unit}
            </div>
        </div>
    );
}

export default ProgressBar;