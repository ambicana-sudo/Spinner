import React from "react";

const RightBox = (props)=>{
    return(
        <>
            <div className="product-display" style={{display: `flex`, flexFlow: `row wrap`}}>
                {props.product.map((product)=>{
                    return(
                        <div className="products" style={{width: `25%`}}>
                            <div className="product_image">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMpQFPDJxFLnGcMxW4_j575pAyWoyuYS1cCamvXYkyNg&s"></img>
                            </div>
                            <h4 className="product_title">{product.name}</h4>
                            <h4 className="product_cat">{product.category}</h4>
                            <p className="product_price">{product.price}</p>
                        </div>
                    )
                })}
                
            </div>
        </>
    )
}
export default RightBox