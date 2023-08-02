import React from 'react';

const DashboardCard = ({ metricName,metricAmount }) => {
    return (

        <div className="p-5 bg-white rounded shadow-sm dark:bg-gray-800 w-60">
            <div className="text-base text-gray-400 dark:text-gray-300">{metricName}</div>
            <div className="flex items-center pt-1">
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{metricAmount} </div>
            </div>
        </div>

    );
};

export default DashboardCard;
