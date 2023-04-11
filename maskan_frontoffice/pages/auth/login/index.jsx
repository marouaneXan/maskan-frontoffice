import React, { useContext, useEffect, useState } from 'react'
import Image from "next/image"
import backgrounImage from "../../../public/mh-morocco-banner.webp"
import Link from 'next/link'
import { toast } from 'react-toastify'
import Spinner from '@/components/partials/spinner'
import { AuthContext } from '@/context/auth'
import Router from 'next/router'

const Login = () => {
  const { login, loading } = useContext(AuthContext)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  const onSubmit = async () => {
    if (!email || !password) {
      toast.error('Please add all fields')
    }
    else {
      const data = {
        email,
        password
      }
      login(data)
    }
  }
  const loggedIn = () => {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('token')
      const client_id = localStorage.getItem('client_id')
      if (token) {
        const payload = JSON.parse(atob(token.split('.')[1]))
        if (payload) {
          return client_id === payload.id
        }
      }
    } else {
      return false
    }
  }
  useEffect(() => {
    loggedIn() ? Router.push('/') : Router.push('/auth/login')
  }, [loggedIn])
  return (
    <div className="w-full h-screen relative">
      <Image
        className="w-full h-full object-cover"
        src={backgrounImage}
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0 w-full h-full flex flex-col space-y-6 justify-center text-center text-white p-4">
        <h1 className="text-3xl md:text-4xl font-bold">Login</h1>
        <form className="flex flex-col space-y-2 items-center max-w-[500px] mx-auto w-full border p-8 rounded-md text-black bg-gray-100/90">
          <div className="w-full">
            <label
              htmlFor="email"
              className="flex mb-2 flex-start text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              name="email"
              type="text"
              id='email'
              placeholder="Email"
              value={email}
              className="border rounded-md p-2 w-full border-blue-500"
              onChange={onChange}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="email"
              className="flex mb-2 flex-start text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              id='password'
              value={password}
              placeholder="Password"
              className="border rounded-md p-2 w-full border-blue-500"
              onChange={onChange}
            />
          </div>
          <button
            type="button"
            onClick={onSubmit}
            className="p-3 rounded-lg w-full border bg-violet-500 text-white "
          >
            {loading ? <Spinner /> : 'Login'}
          </button>
          <div className="mt-6 text-grey-dark">
            I do not have an account?
            <Link className="text-blue-600 hover:underline" href="/auth/register">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login