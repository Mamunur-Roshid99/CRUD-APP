import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => {
        navigate("/show-books", {replace: true})
      }}>Go To Show Books</button>
    </div>
  )
}

export default Home
