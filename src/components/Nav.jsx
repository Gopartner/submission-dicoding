import React from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faTasks, faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Nav.module.css'; // Sesuaikan dengan lokasi file CSS Anda
import logo from '../assets/logo.svg';


const cx = classNames.bind(styles);

const Nav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      {isOpen && (
        <SweetAlert
          title="Menu"
          showConfirm={false}
          showCancel={false}
          closeOnClickOutside={true}
          onConfirm={toggleMenu}
          customClass={cx("nav-sweetalert")}
          customButtons={
            <button onClick={toggleMenu} className={cx("close-button")}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          }
        >
          <div className={cx("header")}>
        <img src={logo} alt="Logo" className={cx("logo")} />
          </div>
          <ul className={cx("menu-list")}>
            <li>
              <a href="/" className="flex items-center space-x-2 text-lg">
                <FontAwesomeIcon icon={faHome} className="text-xl" />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="/about" className="flex items-center space-x-2 text-lg">
                <FontAwesomeIcon icon={faInfoCircle} className="text-xl" />
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="/tasks" className="flex items-center space-x-2 text-lg">
                <FontAwesomeIcon icon={faTasks} className="text-xl" />
                <span>Tasks</span>
              </a>
            </li>
            <li>
              <a href="/contact" className="flex items-center space-x-2 text-lg">
                <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </SweetAlert>
      )}
    </>
  );
};

export default Nav;

