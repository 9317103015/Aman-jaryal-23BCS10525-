import React from "react";
import ProductCard from "./ProductCard";

function App() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Products List</h2>
      
      <div style={styles.list}>
        <ProductCard name="Wireless Mouse" price={25.99} inStock={true} />
        <ProductCard name="Keyboard" price={45.5} inStock={false} />
        <ProductCard name="Monitor" price={199.99} inStock={true} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    border: "2px solid black",
    padding: "20px",
    margin: "20px",
    borderRadius: "10px"
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "20px"
  },
  list: {
    display: "flex",
    justifyContent: "space-evenly"
  }
};

export default App;
