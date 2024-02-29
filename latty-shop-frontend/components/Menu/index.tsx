'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUser, faClipboardList, faShoppingBag, faStar, faHeart } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 z-50">
      <button className="p-2" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg">
          <button className="p-2 absolute right-0" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
          </button>
          <ul className="py-4">
            <li className="flex items-center py-2 px-4">
              <FontAwesomeIcon icon={faUser} className="w-6 h-6 mr-2" />
              <a href="#">My Account</a>
            </li>
            <li className="flex items-center py-2 px-4">
              <FontAwesomeIcon icon={faClipboardList} className="w-6 h-6 mr-2" />
              <a href="#">My Data</a>
            </li>
            <li className="flex items-center py-2 px-4">
              <FontAwesomeIcon icon={faShoppingBag} className="w-6 h-6 mr-2" />
              <a href="#">My Orders</a>
            </li>
            <li className="flex items-center py-2 px-4">
              <FontAwesomeIcon icon={faStar} className="w-6 h-6 mr-2" />
              <a href="#">Reviews</a>
            </li>
            <li className="flex items-center py-2 px-4">
              <FontAwesomeIcon icon={faHeart} className="w-6 h-6 mr-2" />
              <a href="#">Favorites</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;