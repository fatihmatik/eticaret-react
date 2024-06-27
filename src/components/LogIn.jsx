import React, { useEffect, useState } from "react";
import { useLocalStorageForProfile } from "../utils/useLocalStorageForProfile";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileData } from "../redux/profileSlicer.js";

const LogIn = () => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profileData.data);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const { setItem } = useLocalStorageForProfile("profileFlag");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // Check if username and password match any profile data
    const matchedProfile = profileData.find(
      (profile) =>
        profile.username === username && profile.password === password
    );

    if (matchedProfile) {
      setItem(true);
      alert("Login successful!");
      window.dispatchEvent(new Event("login")); // Trigger custom event
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div>
          <p>id, password</p>
          <p>admin, admin123</p>
          <p>fatih, fatih123</p>
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="alan.turing1936"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="sifre123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
