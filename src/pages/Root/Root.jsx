import React from 'react';
import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer';
import Home from '../home/Home';

const Root = () => {
    return (
      <div>
        <Navbar />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
};

export default Root;