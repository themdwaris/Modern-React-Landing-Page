import React, { useState } from "react";
import { useUserContext } from "../context/UseContext";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/UserTheme";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {user,setUser } = useUserContext();
  const {themeToggle}=useTheme()
  const navigate = useNavigate()
  
  return (
    <div className={`w-full ${themeToggle?"bg-gray-900":"bg-gradient-to-b from-blue-50 via-red-50 to-transparent"}`}>
      <div className="pb-10 pt-24 max-w-7xl mx-auto px-5 md:px-0  ">
        <div className="max-w-md mx-auto p-5 rounded-xl bg-blue-50 flex flex-col gap-4 items-center dark:bg-gray-500">
          <h1 className="text-2xl font-semibold dark:text-gray-200">Login</h1>
          <input
            className="w-full p-3 border-none outline-red-400 rounded-lg"
            value={username}
            type="text"
            placeholder="Username "
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="w-full p-3 border-none outline-red-400 rounded-lg"
            value={password}
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-full p-3 rounded-lg text-white bg-red-500 cursor-pointer transition-transform"
            onClick={(e) => {
              e.preventDefault();
              setUser({ username, password });

              
                if(user.password=="1234"){
                    navigate("/admin")
                  }else{
                    alert("Please enter right password")
                  }
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
