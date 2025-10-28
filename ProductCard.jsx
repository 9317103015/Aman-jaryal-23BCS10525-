import React from "react";

const ProductCard = ({ name, price, inStock }) => {
  return (
    <div style={styles.card}>
      <h3 style={{ fontWeight: "bold" }}>{name}</h3>
      <p>Price: ${price}</p>
      <p>Status: {inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid lightgray",
    width: "200px",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    margin: "10px",
    boxShadow: "0px 0px 6px rgba(0,0,0,0.1)"
  }
};

export default ProductCard;
