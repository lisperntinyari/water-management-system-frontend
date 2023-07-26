import React from 'react';
import DashboardCard from "./DashboardCard.jsx";

const DashboardInfo = () => {
    return (
        <section className="w-full h-screen bg-gray-900 p-8">
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                <DashboardCard metricAmount={70000} metricName="Total No. of House Units"/>
                <DashboardCard metricAmount={45000} metricName="Total amount Paid"/>
                <DashboardCard metricAmount={7000} metricName="Total amount not Paid"/>
            </div>
        </section>
    );
};

export default DashboardInfo;
