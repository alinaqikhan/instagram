import React, { useEffect } from 'react';
import Header from '../components/Header';

const Dashboard = () => {
    useEffect(() => {
        document.title = 'Instagram';
    }, [])
    return (
        <div className="bg-gray-background">
            <Header />
            <div className="grid">
            </div>
        </div>
    )
}

export default Dashboard
