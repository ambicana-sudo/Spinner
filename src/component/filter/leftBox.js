import React from "react";

const LeftBox = (props)=>{
    
    return(
        <>
            <div className="menu_items">
                {props.categoryList.map((list)=>{
                    return(
                        <button onClick={()=> props.filterProduct(list)}>{list}</button>
                    )
                })}
            </div>
        </>
    )
}
export default LeftBox