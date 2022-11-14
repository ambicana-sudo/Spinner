import React from "react";
import { useState } from "react";

const DynamicStyle = ()=>{

    const [objStyle, setObjStyle] = useState();

	const dynamicStyle = (value)=>{
		// console.log(value)

		const splitObj = value.split("=")
		console.log(splitObj[1])

		const obj = {}
		obj[splitObj[0]] = splitObj[1]

		console.log(obj)
		setObjStyle(obj)

		// let {...obj} = splitObj
		// // console.log(obj[0])
	}

    return(
        <section>
            <h2>Dynamic Styled box</h2>
			<div className='box' style={objStyle}></div>
			<input placeholder='Enter bgcolor & width' onKeyUp={(e)=> dynamicStyle(e.target.value)}></input>
        </section>
    )
}
export default DynamicStyle