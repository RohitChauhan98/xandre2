'use client'
import React from 'react';

const Dashboard: React.FC = () => {
    const [selectedTab, setSelectedTab] = React.useState('operations');

    return (
        <div className="p-4 space-y-4">
            {/* Tabs */}
            <div className="flex items-center space-x-4">
                <button onClick={()=>{setSelectedTab("operations")}} className="px-4 py-2 font-semibold text-white bg-black rounded-full">Operations</button>
                <button onClick={()=>{setSelectedTab("performance")}} className="px-4 py-2 font-semibold text-gray-700 border border-gray-300 rounded-full">Performance</button>
                <button onClick={()=>{setSelectedTab("settings")}} className="px-4 py-2 font-semibold text-gray-700 border border-gray-300 rounded-full">Settings</button>
                <div className="ml-auto flex items-center space-x-2">
                    <span className="text-gray-600">Active properties</span>
                    <div className="flex items-center border border-gray-300 rounded-md px-2 py-1">
                        <span className="text-gray-400">🔍</span>
                        <input
                            type="text"
                            placeholder="Search by property ID, name or location"
                            className="ml-2 bg-transparent outline-none"
                        />
                    </div>
                </div>
            </div>


            {selectedTab === "operations" && <div className="grid grid-cols-5 gap-4 p-4 bg-white border rounded-md shadow">
                <div className="text-center">
                    <h3 className="text-sm font-medium text-gray-600">Reservations</h3>
                    <p className="mt-2 text-2xl font-bold">28</p>
                </div>
                <div className="text-center">
                    <h3 className="text-sm font-medium text-gray-600">Arrivals</h3>
                    <p className="mt-2 text-2xl font-bold">12</p>
                </div>
                <div className="text-center">
                    <h3 className="text-sm font-medium text-gray-600">Departures</h3>
                    <p className="mt-2 text-2xl font-bold">9</p>
                </div>
                <div className="text-center">
                    <h3 className="text-sm font-medium text-gray-600">Reviews</h3>
                    <p className="mt-2 text-2xl font-bold">25</p>
                </div>
                <div className="text-center">
                    <h3 className="text-sm font-medium text-gray-600">Cancellation</h3>
                    <p className="mt-2 text-2xl font-bold">0</p>
                </div>
            </div>}


            {selectedTab === "performance" && <div>
                <p>Strengthen your offering by understanding guest demand</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </div>}

            {selectedTab === "settings" && <div className="grid grid-cols-5 gap-4 p-4 bg-white border rounded-md shadow">
                <div className="text-center">
                    <h3 className="text-sm font-medium text-gray-600">Reservations</h3>
                    <p className="mt-2 text-2xl font-bold">28</p>
                </div>
                <div className="text-center">
                    <h3 className="text-sm font-medium text-gray-600">Arrivals</h3>
                    <p className="mt-2 text-2xl font-bold">12</p>
                </div>
                <div className="text-center">
                    <h3 className="text-sm font-medium text-gray-600">Departures</h3>
                    <p className="mt-2 text-2xl font-bold">9</p>
                </div>
                <div className="text-center">
                    <h3 className="text-sm font-medium text-gray-600">Reviews</h3>
                    <p className="mt-2 text-2xl font-bold">25</p>
                </div>
                <div className="text-center">
                    <h3 className="text-sm font-medium text-gray-600">Cancellation</h3>
                    <p className="mt-2 text-2xl font-bold">0</p>
                </div>
            </div>}
        </div>
    );
};

export default Dashboard;
