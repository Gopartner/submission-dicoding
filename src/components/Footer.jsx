import React from 'react';
import footerData from '../data/footer.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { author, copyright } = footerData;

  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <div className="container mx-auto">
        <p className="text-sm">{author} &copy; {currentYear}</p>
        <p className="text-xs">{copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;

