import React from 'react'
import Header from './components/Header'
import Products from './components/products'
import Footer from './components/Footer' 





export default function App() {

const [products, setProducts] = React.useState([]);

React.useEffect(() => {
  fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => setProducts(data.products))
    .catch(error => console.error('Error fetching products:', error));
}, []);
console.log(products);







  return (

       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products products={products} />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>


    // <div>
    //   <Header />
    //   <Products products={products} />
    //   <Footer />
    // </div>
  )
}
