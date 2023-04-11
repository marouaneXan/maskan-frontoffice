import React, { useContext, useEffect, useState } from 'react'
import Image from "next/image"
import backgrounImage from "../../../public/mh-morocco-banner.webp"
import Link from 'next/link'
import { toast } from 'react-toastify'
import Spinner from '@/components/partials/spinner'
import { AuthContext } from '@/context/auth'
import Router from 'next/router'

const Register = () => {
  const { register, loading, connected } = useContext(AuthContext)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { name, dateOfBirth, city, phone, email, password } = formData
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
        name,
        dateOfBirth,
        city,
        phone,
        email,
        password
      }
      register(data)
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
        <h1 className="text-3xl md:text-4xl font-bold">Register</h1>
        <form className="flex flex-col space-y-2 items-center max-w-[500px] mx-auto w-full border p-8 rounded-md text-black bg-gray-100/90">
          <div className='w-full flex gap-2'>
            <div className="w-full">
              <label
                htmlFor="name"
                className="flex mb-2 flex-start text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                name="name"
                onChange={onChange}
                value={name}
                type="text"
                id='name'
                placeholder="Name"
                className="border rounded-md p-2 w-full border-blue-500"
              />

            </div>
            <div className="w-full">
              <label
                htmlFor="dateOfBirth"
                className="flex mb-2 flex-start text-sm font-medium text-gray-900"
              >
                Birthday
              </label>
              <input
                name="dateOfBirth"
                onChange={onChange}
                value={dateOfBirth}
                type="date"
                id='dateOfBirth'
                className="border rounded-md p-2 w-full border-blue-500"
              />
            </div>
          </div>
          <div className='flex gap-2 w-full'>
            <div className="w-full">
              <label
                htmlFor="city"
                className="flex mb-2 flex-start text-sm font-medium text-gray-900"
              >
                City
              </label>
              <input
                name="city"
                onChange={onChange}
                value={city}
                type="text"
                id='city'
                placeholder="City"
                className="border rounded-md p-2 w-full border-blue-500"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="phone"
                className="flex mb-2 flex-start text-sm font-medium text-gray-900"
              >
                Phone
              </label>
              <input
                name="phone"
                onChange={onChange}
                value={phone}
                type="number"
                id='phone'
                placeholder="Phone"
                className="border rounded-md p-2 w-full border-blue-500"
              />
            </div>
          </div>
          <div className='flex gap-2 w-full'>
            <div className="w-full">
              <label
                htmlFor="email"
                className="flex mb-2 flex-start text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                name="email"
                onChange={onChange}
                value={email}
                type="email"
                id='email'
                placeholder="Email"
                className="border rounded-md p-2 w-full border-blue-500"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="password"
                className="flex mb-2 flex-start text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                name="password"
                onChange={onChange}
                value={password}
                type="password"
                id='password'
                placeholder="Password"
                className="border rounded-md p-2 w-full border-blue-500"
              />
            </div>
          </div>
          <button
            onClick={onSubmit}
            type="button"
            className="p-3 rounded-lg w-full border bg-violet-500 text-white "
          >
            {loading ? <Spinner /> : 'Register'}
          </button>
          <div className="mt-6 text-grey-dark">
            Already have an account {' '}
            <Link className="text-blue-600 hover:underline" href="/auth/register">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register