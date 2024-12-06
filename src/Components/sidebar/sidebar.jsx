import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Package, ShoppingBag, MessageSquare, Users, Calendar, Menu, LayoutDashboard } from 'lucide-react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Set initial state based on screen size and update on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) { // lg breakpoint
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };

        // Set initial state
        handleResize();

        // Add resize listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const menuItems = [
        { name: 'Dashboard', icon: <LayoutDashboard />, path: '/adminDashboard' },
        { name: 'Products', icon: <Package />, path: '/admin/products' },
        { name: 'Orders', icon: <ShoppingBag />, path: '/admin/orders' },
        { name: 'Complaints', icon: <MessageSquare />, path: '/admin/complaints' },
        { name: 'Customers', icon: <Users />, path: '/admin/customers' },
        { name: 'Calendar', icon: <Calendar />, path: '/admin/calendar' },
    ];

    const toggleSidebar = () => {
        if (window.innerWidth < 1024) { // Only allow toggle on smaller screens
            setIsOpen(!isOpen);
        }
    };

    return (
        <>
            {/* Toggle button for small screens */}
            <button 
                onClick={toggleSidebar}
                className="fixed top-4 left-4 p-2 rounded-lg hover:bg-pink-200 lg:hidden z-50"
            >
                <Menu size={24} />
            </button>

            <div className={`fixed left-0 top-0 h-screen bg-pink-50 shadow-lg transition-all duration-300 flex flex-col 
                lg:translate-x-0 lg:w-64
                ${isOpen ? 'w-64' : 'w-20'}`}
            >
                <div className="flex items-center p-4">
                    {isOpen && (
                        <div className="text-2xl font-bold text-gray-800">
                            Mera Bestie
                        </div>
                    )}
                </div>

                <div className="flex-grow flex items-center">
                    <ul className="space-y-2 p-4 w-full">
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`flex items-center p-2 rounded-lg transition-colors
                                        ${location.pathname === item.path 
                                            ? 'bg-pink-200 text-pink-800' 
                                            : 'text-gray-700 hover:bg-pink-100'}
                                        ${isOpen ? 'justify-start space-x-4' : 'justify-center'}`}
                                >
                                    <span className="text-xl">{item.icon}</span>
                                    {isOpen && <span>{item.name}</span>}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-auto">
                    <div className={`p-4 ${isOpen ? 'block' : 'hidden'}`}>
                        <p className="text-center text-gray-600 mb-2">
                            Please, manage your products through the button below.
                        </p>
                        <button className="w-full bg-pink-300 text-white py-2 rounded hover:bg-pink-400">
                            + Add Product
                        </button>
                    </div>

                    <footer className={`text-center text-gray-500 text-sm p-4 ${isOpen ? 'block' : 'hidden'}`}>
                        Mera Bestie Admin Dashboard © 2023
                    </footer>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
