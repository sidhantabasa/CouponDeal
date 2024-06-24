import { Link, Navigate } from "react-router-dom";

const UserInfo = () => {

  // logout function
  const logout = () => {
    localStorage.clear("users");
     window.location.reload();
    
  };

  return (
    <>
      <div className="absolute right-0 m-5 mt-80 w-56 rounded-lg shadow-lg bg-[#2a323c] text-white flex flex-col items-center p-4">
        <img
          src="https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg"
          alt="user"
          className="h-10 w-10 rounded-full bg-white mb-2"
        />
        <h1 className="text-center">user name</h1>
        <h2 className="text-center">user_mail</h2>
        <hr className="w-full my-2" />
        <button className="text-md font-medium mb-2">Manage Profile</button>
        <Link
           to="/"
          onClick={logout} 
          className="bg-red-600 text-md font-bold px-4 mt-4 py-1 rounded-lg hover:bg-red-700"
        >
          Logout
        </Link>
      </div>
    </>
  );
};

export default UserInfo;

