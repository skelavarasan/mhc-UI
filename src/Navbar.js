import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
 return (
    <nav className="bg-blue-500 p-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white font-bold text-xl">
            Mettler Health
          </Link>
        </div>
      </div>
    </nav>
 );
}

export default Navbar;