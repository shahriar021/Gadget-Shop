import React from 'react';
import { Link } from 'react-router-dom';
import Badge from "react-bootstrap/Badge";
import Model from "../Model";
import Cart from '../screens/Cart';
import { useCart } from './usecontextusereducer';

export default function Navbar() {
   let data = useCart();
  const [cartVIew,setCartView] = React.useState(false)
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <img
          alt="logo"
          className="logo"
          src="https://media.istockphoto.com/id/1340117122/photo/cube-with-shopping-trolley-symbol-on-the-laptop-keyboard.jpg?b=1&s=170667a&w=0&k=20&c=PU8iTTvTj6TV6_Quy9Z7KQJoOgY-rp_rqI9FbFNFYEw="
        />
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            Gadget Shop
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWpYy6HaX-Fhi08Tlm6woOZF023kfFrp3gbeTQXIchn4-yV3Nx-1LaXiHu0Om9qIR5MTA&usqp=CAU"
                    style={{ height: "40px" }}
                  />{" "}
                </Link>
              </li>

              {localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <Link className="nav-link active fs-5 mx-5 " to="/">
                    my orders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>

            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link className="btn bg-white text-success mx-1" to="/login">
                  Log in
                </Link>

                <Link className="btn bg-white text-danger mx-1" to="/signup">
                  Sign up
                </Link>
              </div>
            ) : (
              <div>
                <div
                  className="btn bg-light text-success mx-2"
                  onClick={() => {
                    setCartView(true);
                  }}
                >
                  Cart{" "}
                  <Badge pill bg="danger">
                    {data.length}
                  </Badge>
                </div>
                {cartVIew ? (
                  <Model onClose={() => setCartView(false)}><Cart/></Model>
                ) : null}
                <div
                  className="btn bg-light text-danger mx-2"
                  onClick={handleLogout}
                >
                  Log out
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
