

const getProducts = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/products', { cache: 'no-store' });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return res.json();
    } catch (error) {
      console.log("Error fetching products", error);
    }
  };

export default function ProductList() {
  return (
    <div>
      product list
    </div>
  )
}
