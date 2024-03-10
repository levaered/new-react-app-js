import './App.css';
import UserCard from '../User/UserCard';
import Avatar from '../../avatar.jpg'
import ProductCard from '../ProductCard/ProductCard';

import airpods from '../../ProductImages/airpods.webp';
import ipad102 from '../../ProductImages/ipad-102.webp';
import iphone15ProBlack from '../../ProductImages/iphone-15-pro-256-black.webp';
import iphone15ProBlue from '../../ProductImages/iphone-15-pro-256-blue.webp';
import iphoneSE from '../../ProductImages/iphone-se.webp';
import powerAdapter from '../../ProductImages/power-adapter.jpg';

import Product from '../Product/Product';

function App() {
  
  const products = [
    {
      title: "Сетевое ЗУ адаптер Apple 20W USB-C Power Adapter",
      image: powerAdapter,
      price: 849,
    },
    {
      title: "Наушники AirPods Pro 2nd gen. (MQD83)",
      image: airpods,
      price: 8699,
    },
    {
      title: "Apple iPhone 15 Pro Max 256GB eSIM (Black Titanium)",
      image: iphone15ProBlack,
      price: 47649,
    },
    {
      title: "Apple iPhone SE 2022 128GB (Midnight)",
      image: iphoneSE,
      price: 19000,
    },
    {
      title: "Apple iPhone 15 Pro Max 256GB (Blue Titanium)",
      image: iphone15ProBlue,
      price: 49000,
    },
    {
      title: "Apple iPad 10.2 2021 Wi-Fi 64GB Space Grey (MK2K3)",
      image: ipad102,
      price: 11899,
    },
     
  ];

  return (
    <div className="App">
      {products.map((product, index) => (
          <Product title={product.title} image={product.image}/>
      ))}
      
    </div>
  );
}

export default App;