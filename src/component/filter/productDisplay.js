import React from "react";
import {useState} from 'react'
import RightBox from "./rightBox";
import LeftBox from "./leftBox";

const ProductDisplay = ()=>{
    const ProductList = [
        {
            "name": "Samba OG Shoes",
            "price": 100,
            "brand": "Addidas",
            "quantity": 12,
            "category": "Shoes",
            "id": "1004",
        },
        {
            "name": "Original Athletic Club Allover Print Hoodie",
            "price": 50,
            "brand": "Addidas",
            "quantity": 12,
            "category": "Clothing",
            "id": "1034",
          },
          {
            "name": "Game and Go Pullover Hoodie",
            "price": 30,
            "brand": "Addidas",
            "quantity": 15,
            "category": "Clothing",
            "id": "1134",
          },
          {
            "name": "Adicolor Essentials Trefoil Tank Top",
            "price": 15,
            "brand": "Addidas",
            "quantity": 20,
            "category": "Clothing",
            "id": "1135",
          },
          {
            "name": "Future Icons Logo Graphic Tee",
            "price": 18,
            "brand": "Addidas",
            "quantity": 20,
            "category": "Clothing",
            "id": "1136",
          },
          {
            "name": "Sport Waist Pack",
            "price": 15,
            "brand": "Random",
            "quantity": 7,
            "category": "Accessories",
            "id": "0236",
          },
          {
            "name": "Prime Backpack",
            "price": 65,
            "brand": "Addidas",
            "quantity": 7,
            "category": "Accessories",
            "id": "0233",
          },
          {
            "name": "adidas Z.N.E. 01 True Wireless Earbuds",
            "price": 200,
            "brand": "Addidas",
            "quantity": 3,
            "category": "Accessories",
            "id": "0235",
          }
    ]

    const [products, setProducts] = useState(ProductList)

    const categories = new Set(products.map((item)=>{
        return item.category
    }))

    const allCategory = ['All', ...categories]

    const [categoryList, setCategoryList] = ([allCategory])

    const filterProduct = (category)=>{
        const newProduct = [...products];

        if(category === 'All'){
            setProducts(ProductList)
            return;
        }
        const filteredProduct = newProduct.filter((item)=>{
            return item.category === category
        })
        setProducts(filteredProduct)
    }
    
    return(
        <>
        <h1>Filter Product</h1>
        <section className="filter-section" style={{display:`flex`}}>
            <LeftBox categoryList={categoryList} filterProduct={filterProduct}/>
            <RightBox product={products}/>
            </section>
        </>
    )
}
export default ProductDisplay