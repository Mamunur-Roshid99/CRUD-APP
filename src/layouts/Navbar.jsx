import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="NavLink">
        Home
      </Link>
      <Link to="/show-books" className="NavLink">
        Show Books
      </Link>
      <Link to="/add-book" className="NavLink">
        Add Book
      </Link>
    </nav>
  );
}

export default Navbar
