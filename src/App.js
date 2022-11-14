
// import { useEffect, useState } from 'react';
import './App.css';
// import Box from './component/box';
import UserDetails from './component/user-detail';
import ColorWheel from './component/color-wheel';
import NumList from './component/numberList';
import Chat from './component/chat-box/chat';
import Shape from './component/shape';
// import Ecobox from './component/eco-box';
import Names from './component/filter-nameList';
// import ProductDisplay from './component/filter/productDisplay';
import DynamicStyle from './component/dynamicStyle-input';
import LightBox from './component/trafficeLight.js/lightBox';

const App = ()=>{
	// const dbArr  = [{
	// 	name: 'nestle coffee',
	// 	price: '500',
	// 	image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE_gcOE8tjHRpPDjPkNw4quvB096PHVNG6bmhJ3mGPnA&s",
	// 	currency: '$'
	//  },{
	// 	name: 'starsbucks',
	// 	image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE_gcOE8tjHRpPDjPkNw4quvB096PHVNG6bmhJ3mGPnA&s",
	// 	price: '450',
	// 	currency: '$'
	//  },{
	// 	name: 'kitkat',
	// 	price: '900',
	// 	image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE_gcOE8tjHRpPDjPkNw4quvB096PHVNG6bmhJ3mGPnA&s",
	// 	currency: '$'
	//  }]

	// return(
	// 	<div className='box-wrap'>
	// 		{dbArr.map((item, id)=>{
	// 			return(
	// 				<Ecobox item={item}/>
	// 			)
	// 		})}
			
	// 	</div>
	// )




















	// const [number, setNumber] =useState(0)

	// const increament = ()=>{
	// 	let newNumber = number
	// 	const timer = setInterval(()=>{
	// 		let newNumber = newNumber + 1;
	// 		setNumber(newNumber)
	// 	},2000)
	// }

	// useEffect(()=>{
	// 	increament()
	// },[])

	// useEffect(()=>{
	// 	let newNumber = number
	// 	setInterval(()=>{

	// 		setNumber(newNumber++)
	// 	},2000)
	// },[])

	// const stopCount = ()=>{
	// 	clearInterval()
	// }

	// return(
	// 	<>	
	// 	<p style={{color: `red`, textAlign: `center`,fontSize: `30px`}}>{number}</p>
	// 	<button onClick={()=> stopCount()}>Stop Counter</button>
	// 	</>
	// )
	
	return(
		<div>
			<LightBox/>
			<ColorWheel />
			<Chat/>
			<UserDetails/>
			<Shape/>
			<NumList />
			<Names/>
			<DynamicStyle/>
			{/* <ProductDisplay/> */}
		</div>
	)
}

export default App;
