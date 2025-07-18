import "./Product.css";

function Product({ title, price, features }) {
    return(
        <div className="Product">
            <h3>{title}</h3>
            <h5>Price : {price}</h5>
            <h6>Feature: {features}</h6>
        </div>
    );
}

export default Product;