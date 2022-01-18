import { useEffect, useState } from "react";
import axios from "axios";
import "./Premium.css";

const Premium = () => {
  const [premiums, setPremium] = useState([]);
  //Peticion api classNameNames
  const getPremium = async () => {
    const response = await axios.get(
      `https://apipdtc.herokuapp.com/bulldog/premium`
    );
    setPremium(response.data);
  };
  useEffect(() => {
    getPremium();
  }, []);
  console.log(premiums);
  return (
    <div className="premium-container">
      <h2 className="text-center mt-4 mb-4">Las más premium</h2>
      <div className="card-container">
        {premiums.map((premium) => (
          <div className=" shadow card-premium">
            <div className="img-container">
              <img
                src={require(`../../assets/img/premium/${premium.imagen}.png`)}
                alt="Card image cap"
              />
            </div>
            <div className="card-body px-4 py-0 ">
              <h5 className="card-title">{premium.nombre}</h5>
              {premium.ingredientes.map((ingrediente) => (
                <p className="card-text d-inline ml-2">{ingrediente}. </p>
              ))}
              <div className="btn-price">
                <button className="btn btn-warning text-light ">
                  <p className="btn-order"> Ordenar </p>
                </button>
                <p>${premium.precio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Premium;
