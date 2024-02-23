import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Nav from './Nav';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 text-white py-4 relative">
      <div className="container mx-auto flex items-center justify-between px-4">
        <h1 className="text-2xl font-bold">Website Modern</h1>
        <button onClick={toggleMenu} className="md:hidden">
          <FontAwesomeIcon icon={faBars} className="text-white" />
        </button>
      </div>
      <Nav isOpen={isOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;

