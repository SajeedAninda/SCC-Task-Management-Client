import React from 'react';
import "./dashboard.css"
import DashboardProfile from './DashboardProfile';
import TaskList from './TaskList';
const Dashboard = () => {
    return (
        <div className='dashboardBg mx-auto w-[90%] my-8 rounded-xl px-4 py-6'>
            <div className='flex justify-center items-center'>
                <DashboardProfile></DashboardProfile>
            </div>
            <div>
                <TaskList></TaskList>
            </div>
        </div>
    );
};

export default Dashboard;