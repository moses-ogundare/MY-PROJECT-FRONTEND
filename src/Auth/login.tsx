import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import useShopContext from '../Context/useShopContext'
import { useNavigate } from 'react-router-dom'


function Login() {
  const navigate = useNavigate()
  interface LoginResponse {
    token: string;
    user: {
      id: string;
      email: string;
      name: string;
      role: string;
    }
  }

  const Context = useShopContext()
  const backendUrl = Context?.backendUrl || "https://my-project-backend-nx0l.onrender.com"
  const [email, setEmail ] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const submit = async (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
      setLoading(true)
      setError(null)

      try {
        const response = await axios.post<LoginResponse>(`${backendUrl}/api/auth/login`, {
          email,
          password
        })
        if(response.status===200){
          navigate("/")
        }
        // if (response.data.user.role==="admin"){
        //   navigate("/admin")
        // }
      } catch (error) {
        console.error(error)
        setError("Login failed. Please check your credentials.")
      } finally {
        setLoading(false)
      }
  }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-center font-bold text-lg mb-4">
          MENTORSHIP PLATFORM LOGIN PAGE
        </h1>

        <form onSubmit={submit} className="mt-2 space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              required
            />
          </div>

          {error && (
            <div className="bg-red-100 text-red-600 p-2 rounded text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-blue-600 font-medium hover:underline"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login
