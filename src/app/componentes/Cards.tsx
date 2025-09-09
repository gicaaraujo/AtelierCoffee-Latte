'use client'
import "./Cards.css";
import { itens } from "../data/produtos";
import HeartLike from "./HeartLike";
import useAlert from "../hooks/useAlerts";

export default function Cards(){
  const{ ConfirmAlert, doubleAlert } = useAlert();
    return(
      <section className="cards-section">
        <h1 className="cards-title">MENU</h1>
        <main className="cards-container">
              {itens.map((product, index)=>(
                <div key={index} className="card">
                    <div className="card-image-wrapper">
                        <img className="card-image" src={product.image} alt={product.title} />
                    </div>
                    <div className="card-content">
                        <div>
                            <h3 className="card-title">{product.title}</h3>
                            <HeartLike initialCount={product.like} />
                            <p className="card-description"> {product.description}</p>
                        </div>
                         <button className="card-button" onClick={()=> doubleAlert()}> Comprar: {product.price}</button>
                    </div>
                </div>
              ))}
        </main>
      </section>
    );
}