
import { useEffect, useState } from 'react'
import './App.css'
import Nav from './Navigation/Nav'
import Product from './Products/Product'
import Recommended from './Recommended/Recommended'
import SideBar from './Sidebar/SideBar'
import data from './DataBase/data'
import Card from './Components/Card'

function App() {


  const [query, setQuery] = useState(''); //State to manage search query

  const [selectedCategory, useSelectedCategory] = useState(null); // Sate to manage filters (Categories, colors, Price and Buttons)


// ---------Input Filter--------------
  const handleInputChange = (e)=>{
    setQuery(e.target.value);
  }

  const filteredItems= data.filter((item)=>
    
    item.title.includes(query) //Array mai sirf woh items(objects) honge jinka title includes/matches with query
    
  )



  // ---------Radio Filter--------------
  const handleChange = (e)=>{
    useSelectedCategory(e.target.value);
  }

  //-----------Button Filter--------------
  const handleClick = (e)=>{
    useSelectedCategory(e.target.value);
  }

  //----------Final Filtering--------------
  const filterData = (data, selectedCategory, query) => {
      
          let filteredProducts = data

          //Filtering Input Itmes
          if(query){
            filteredProducts = filteredItems;
          }

          //Filtering By Selected Category
          if(selectedCategory){
            filteredProducts = filteredProducts.filter((item)=>{
              return(
                item.category === selectedCategory || item.color === selectedCategory || item.newPrice === selectedCategory || item.company === selectedCategory
              )
            })
          }
          return filteredProducts // An array of all the objects after filtering 
          .map((eachItem)=>{
              return <Card
                      img = {eachItem.img}
                      title = {eachItem.title}
                      prevPrice = {eachItem.prevPrice}
                      newPrice = {eachItem.newPrice}
                      reviews = {eachItem.reviews}
                    
                    />  
          }) 

  }
  
  const result = filterData(data,selectedCategory,query);
  // console.log(selectedCategory)

  return (
    <>
      <SideBar handleChange = {handleChange}/>
      <Nav handleInput = {handleInputChange} />
      <Recommended handleClick= {handleClick} />
      <Product products={result}/>

    </>
  )
}

export default App
