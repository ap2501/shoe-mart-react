import { useEffect, useState } from 'react';
import './App.css';
import Nav from './Navigation/Nav';
import Product from './Products/Product';
import Recommended from './Recommended/Recommended';
import SideBar from './Sidebar/SideBar';
import data from './DataBase/data';
import Card from './Components/Card';

function App() {
  const [query, setQuery] = useState(''); // State to manage search query
  const [selectedCategory, setSelectedCategory] = useState(null); // State for filters
  const [showModal, setShowModal] = useState(false); // State for desktop version prompt

  // Input filter handler
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Radio filter handler
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Button filter handler
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Filter items based on search query
  const filteredItems = data.filter((item) =>
    item.title.includes(query)
  );

  // Final filtering
  const filterData = (data, selectedCategory, query) => {
    let filteredProducts = data;
    if (query) {
      filteredProducts = filteredItems;
    }
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter((item) => {
        return (
          item.category === selectedCategory ||
          item.color === selectedCategory ||
          item.newPrice === selectedCategory ||
          item.company === selectedCategory
        );
      });
    }
    return filteredProducts.map((eachItem) => (
      <Card
        key={eachItem.id} // each item has a unique key
        img={eachItem.img}
        title={eachItem.title}
        prevPrice={eachItem.prevPrice}
        newPrice={eachItem.newPrice}
        reviews={eachItem.reviews}
      />
    ));
  };

  const result = filterData(data, selectedCategory, query);

  // Check if in mobile version
  useEffect(() => {
    if (window.innerWidth < 768) {
      setShowModal(true);
    }
  }, []);

  // Handler to dismiss the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Switch to Desktop Version</h2>
            <p>For the best experience, please switch to the desktop version.</p>
            <button className="modal-btn" onClick={handleCloseModal}>
              Continue on Mobile
            </button>
          </div>
        </div>
      )}
      <SideBar handleChange={handleChange} />
      <Nav handleInput={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Product products={result} />
    </>
  );
}

export default App;
