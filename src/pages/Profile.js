// src/pages/Profile.js
import React, { useState } from "react";

const Profile = () => {
  // Example user data state (can be replaced with actual user data)
  const [userData, setUserData] = useState({
    username: "johndoe",
    fullName: "John Doe",
    email: "johndoe@example.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, libero ut fermentum.",
    location: "Istanbul, Turkey",
    // Add more fields as needed
  });

  const handleUpdateBio = (newBio) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      bio: newBio,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-semibold mb-4">Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: User Info */}
          <div>
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="rounded-full h-24 w-24 mx-auto mb-4"
            />
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold">{userData.fullName}</h3>
              <p className="text-gray-600">@{userData.username}</p>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">
                <span className="font-semibold">Email:</span> {userData.email}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Location:</span>{" "}
                {userData.location}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Website:</span>{" "}
                <a
                  href={userData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {userData.website}
                </a>
              </p>
            </div>
          </div>
          {/* Right Column: Editable Bio */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Bio</h3>
            <p className="text-gray-700 mb-4">{userData.bio}</p>
            <textarea
              className="border rounded-lg w-full p-2 text-gray-700"
              value={userData.bio}
              onChange={(e) => handleUpdateBio(e.target.value)}
              rows={4}
              placeholder="Enter your bio..."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
