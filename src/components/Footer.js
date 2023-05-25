import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {

  const feedbuttono = () => {
    alert("Your complain is registered");
  }

  return (
    <div>
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0 text-muted">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0 text-muted">
                  Features
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0 text-muted">
                  Pricing
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0 text-muted">
                  FAQs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0 text-muted">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>offline office</h5>
            <ul className="nav flex-column">
              
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0 text-muted">
                  sector 3, Uttara, Dhaka
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Contact</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0 text-muted">
                  +0886549875
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0 text-muted">
                  +0886549875
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0 text-muted">
                  gadget@gmail.com
                </Link>
              </li>
              
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Complaint Box</h5>

              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">
                  complain
                </label>
                <label for="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="complain"
                />
                <br />
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={feedbuttono}
                >
                  Drop
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2023 Gadget Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <Link className="link-dark" href="#">
                <svg className="bi" width="24" height="24"></svg>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="link-dark" href="#">
                <svg className="bi" width="24" height="24"></svg>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="link-dark" href="#">
                <svg className="bi" width="24" height="24"></svg>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
