// import './App.css';
import ProductCard from "./components/ProductCard";
import { products } from "./ProductData";

function App() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index)=> (
          <ProductCard product={product} key={index}/>
        ))}
      </div>
    </div>
  );
}

export default App;
