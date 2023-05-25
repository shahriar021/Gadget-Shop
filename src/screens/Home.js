import React,{useState,useEffect} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from "../components/Card";
import Carousal from '../components/Carousal';

export default function Home() {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [productCat,setproductCat] = useState([])

  const loadProducts = async () => {
    let res = await fetch("http://localhost:8000/api/productdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
        },)

        res = await res.json()
        setProducts(res[0])
        setproductCat(res[1])
        
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="form-inline ">
          <div className="d-flex ">
            <input
              className="form-control mr-sm-5 bg-light m-5 rounded w-100 h-100 bg-light"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* <button className="btn btn-primary btn-sm m-5" type="submit">
              Search
            </button> */}
          </div>
        </div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !!important" }}
        >
          <div className="carousel-indicators" id="carousels">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://source.unsplash.com/random/900×700/?gadgets,tech"
                className="carousel-item2"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/900×700/?tech brands"
                className="carousel-item2"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/900×700/?tech offers"
                className="carousel-item2"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="bg-black">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="bg-black">Next</span>
          </button>
        </div>
      </div>
      <div className="container">
        {productCat !== [] ? (
          productCat.map((data) => {
            return (
              <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                </div>
                <hr />
                {products !== [] ? (
                  products
                    .filter(
                      (item) =>
                        item.CategoryName === data.CategoryName &&
                        item.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((filterItems) => {
                      return (
                        <div
                          key={filterItems._id}
                          className="col 12 col md 6 col lg 3"
                        >
                          <Card
                            productItem = {filterItems}
                            options={filterItems.options[0]}
                            
                          ></Card>
                        </div>
                      );
                    })
                ) : (
                  <div>""</div>
                )}
              </div>
            );
          })
        ) : (
          <div>""</div>
        )}
        {/* <div>
        <Card />
        
      </div> */}
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
  
}
