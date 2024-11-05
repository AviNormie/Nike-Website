import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BACKEND_URL}/login`, { email, password });
      if (res.data.message === 'success') {
        navigate('/');
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.log(error);
      alert('Network error, try again');
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <form onSubmit={handleSubmit} method="post">
        <div className="flex flex-col shadow-2xl bg-slate-50 gap-2 border-[2px] border-coral-red pt-32 pb-32 pl-24 pr-24 rounded-lg">
          <h1 className="font-bold text-coral-red text-3xl">Enter your details to Login</h1>
          <input onChange={(e) => setEmail(e.target.value)} className="flex border-[3px] bg-slate-100 border-coral-red rounded-sm p-3 w-full" type="email" placeholder="E-mail" name="email" />
          <input onChange={(e) => setPassword(e.target.value)} className="flex border-[3px] bg-slate-100 border-coral-red rounded-sm p-3 w-full" type="password" placeholder="Password" name="password" />
          <button type="submit" className="border bg-green-500 text p-2 font-bold text-xl">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
