import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { FaHome, FaInfoCircle, FaEnvelope, FaMoon, FaSun } from "react-icons/fa";
import axios from 'axios';

function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [openDialog, setOpenDialog] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.error(error),
  });

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
        headers: {
          Authorization: `Bearer ${tokenInfo?.access_token}`,
          Accept: 'Application/json',
        },
      })
      .then((resp) => {
        localStorage.setItem('user', JSON.stringify(resp.data));
        setOpenDialog(false);
        window.location.reload();
      })
      .catch((err) => console.error('Error fetching user profile:', err));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className={`header ${darkMode ? 'dark-mode' : ''}`}>
      <div className="header-left">
        <img src="/logo.svg" alt="Logo" className="logo" />
        {/* Navigation Links */}
        <nav className="nav-links">
          <a href="/" className="nav-item">
            <FaHome />
            Home
          </a>
          <a href="/about" className="nav-item">
            <FaInfoCircle />
            About
          </a>
          <a href="/contact" className="nav-item">
            <FaEnvelope />
            Contact
          </a>
        </nav>
      </div>

      <div className="header-right">
        {/* User Info */}
        {user ? (
          <>
            <span className="greeting">Hello, {user?.name.split(' ')[0]}</span>
            <div className="nav-buttons">
              <a href="/create-trip">
                <Button variant="outline" className="btn">Create Trip</Button>
              </a>
              <a href="/my-trips">
                <Button variant="outline" className="btn">My Trips</Button>
              </a>
            </div>
            <Popover>
              <PopoverTrigger>
                <img src={user?.picture} alt="User" className="user-avatar" />
              </PopoverTrigger>
              <PopoverContent>
                <button
                  className="logout-btn"
                  onClick={() => {
                    googleLogout();
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  Logout
                </button>
              </PopoverContent>
            </Popover>
          </>
        ) : (
          <Button onClick={() => setOpenDialog(true)}>Sign In</Button>
        )}
      </div>

      {/* Theme Toggle */}
      <button className="theme-toggle" onClick={toggleDarkMode}>
        {darkMode ? <FaSun className="icon" /> : <FaMoon className="icon" />}
      </button>

      {/* Sign-In Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg" alt="Logo" className="logo-large" />
              <h2 className="dialog-title">Sign In with Google</h2>
              <p>Sign in to the app with Google authentication securely.</p>
              <Button onClick={login} className="google-btn">
                <FcGoogle className="google-icon" />
                Sign In With Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </header>
  );
}

export default Header;
