import { useState, useEffect } from "react";
import Product from "./Product";
import gridIcon from "../assets/icons/grid.svg"

const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log("Error fetching products", error);
    return { products: [] }; 
  }
};

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [viewAsGrid, setViewAsGrid] = useState(false); 

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  return (
    <div className="my-4">
     
      <button
        onClick={() => setViewAsGrid(!viewAsGrid)}
        className="position-button-grid my-4 px-4 py-3 border-green-700  shadow-lg text-sm  bg-gray-100 rounded-lg hover:bg-gray-200"
      >
        {viewAsGrid ? 'הצג כרשימה' : 'הצג ככרטיסים'}
      </button>

  
      <div className={viewAsGrid ? 'grid grid-cols-3 gap-4' : ''}>
        {products.map((p) => (
          <Product key={p.id} product={p} viewAsGrid={viewAsGrid} />
        ))}
      </div>
    </div>
  );
}
