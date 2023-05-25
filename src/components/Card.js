import React,{useEffect, useRef, useState} from 'react';
import { useDispatchCart,useCart } from './usecontextusereducer';
export default function Card(props) {
  let data = useCart();
  const priceRef = useRef();
  let dispatch = useDispatchCart();
  let options = props.options;
  let priceOptions = Object.keys(options);
  
  const [qty,setQty] = useState(1);
  const [size,setSize] = useState("");

  const handleAdd = async() => {
    
      //await dispatch({ type:"add",id:props.productItem._id,name:props.productItem.name,price:props.productprice,qty:qty,size:size})
          await dispatch({
            type: "ADD",
            id: props.productItem._id,
            name: props.productItem.name,
            price: price,
            qty: qty,
            size: size,
          })

      console.log(data)
    
    
  };

  let price = qty * parseInt(options[size]);

  useEffect(() => {
    setSize(priceRef.current.value)
  },[])


  return (
    <div>
      <div>
        <div
          className="card m-2"
          style={{ width: "18rem", " maxHeight": "360px" }}
        >
          <img
            src={props.productItem.img}
            className="card-img-top"
            alt="..."
            style={{ height: "120px", objectFit: "fill" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.productItem.name}</h5>

            <div className="container w-100">
              <select
                className="m-2 h-100 w-1 bg-success"
                onChange={(e) => setQty(e.target.value)}
              >
                {Array.from(Array(5), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>

              <select
                className="bg-success " ref={priceRef}
                onChange={(e) => setSize(e.target.value)}
              >
                {priceOptions.map((item) => {
                  return (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>

              <div className="fs-4">{price}৳</div>
            </div>
            <hr></hr>
            <button
              className="btn btn-success justify-center ms-2"
              onClick={handleAdd}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
