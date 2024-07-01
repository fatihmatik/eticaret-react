import React, { useState, useEffect } from "react";
import LogIn from "../components/LogIn";
import { useLocalStorageForProfile } from "../utils/useLocalStorageForProfile";
import Welcome from "../components/Welcome";

const Profile = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { setItem, removeItem } = useLocalStorageForProfile("profileFlag");

  useEffect(() => {
    // Function to handle updates when profileFlag changes in localStorage
    const handleStorageChange = () => {
      const isLoggedIn = localStorage.getItem("profileFlag") === "true";
      setLoggedIn(isLoggedIn);
    };

    // Add event listener to listen for custom "login" event
    const handleLoginEvent = () => {
      setLoggedIn(true);
    };
    window.addEventListener("login", handleLoginEvent);

    // Check initial profileFlag value on component mount
    const isLoggedIn = localStorage.getItem("profileFlag") === "true";
    setLoggedIn(isLoggedIn);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("login", handleLoginEvent);
    };
  }, []);

  const handleLogout = () => {
    setItem(false); // Set profileFlag to false in localStorage
    setLoggedIn(false); // Update state to reflect logged out status
    alert("Logged out successfully!");
  };

  return (
    <>
      {loggedIn ? (
        <Welcome userName={String("User")} logFunc={handleLogout} />
      ) : (
        <LogIn />
      )}
    </>
  );
};

export default Profile;
