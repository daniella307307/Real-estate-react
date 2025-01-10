import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Profile() {
  const { id } = useParams(); // Retrieve the dynamic ID from the URL
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
    avatar: null,
  });

  useEffect(() => {
    // Check if there's an authentication token in localStorage
    const authToken = localStorage.getItem("authToken");

    if (authToken) {
      // Dynamically pass the ID in the URL
      axios
        .get(`http://localhost:8080/api/v1/user/id:${id}`, {
          headers: { Authorization: `Bearer ${authToken}` },
        })
        .then((response) => {
          setUser({
            name: response.data.name,
            email: response.data.email,
            role: response.data.role,
            password: response.data.password,
            avatar: response.data.avatar || null,
          });
        })
        .catch((error) => {
          console.error("Error fetching user data", error);
        });
    }
  }, [id]); // Dependency array added to re-run when `id` changes

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-orange-300">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 max-w-md flex flex-col items-center justify-center space-y-6">
        {/* Display avatar */}
        <img
          src={user.avatar || "https://via.placeholder.com/200"}
          alt="profile"
          className="rounded-full w-32 h-32 object-cover mb-4 shadow-lg"
        />

        {/* Display user details */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            {user.name}
          </h1>
          <h2 className="text-md text-gray-500 mb-2">{user.email}</h2>
          <h3 className="text-md text-gray-500 mb-4">{user.role}</h3>
        </div>

        {/* Edit Button (optional) */}
        <button
          className="bg-orange-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-600 transition-all"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
