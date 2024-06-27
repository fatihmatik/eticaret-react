import React, { useState, useEffect } from "react";
import LogIn from "../components/LogIn";
import { useLocalStorageForProfile } from "../utils/useLocalStorageForProfile";

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
        <div>
          <h1>Welcome to your profile!</h1>
          <button onClick={handleLogout}>Log out</button>
        </div>
      ) : (
        <LogIn />
      )}
      <div className="flex justify-center">
        <button
          className="bg-red-500 text-black"
          onClick={() => removeItem("profileFlag")}
        >
          Remove Flag
        </button>
      </div>
    </>
  );
};

export default Profile;
