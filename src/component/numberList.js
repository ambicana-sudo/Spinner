import { useState } from "react"

const NumList = ()=>{

   const arr = [4,32,55,221,555]

   const [numbers, setNumbers] = useState(arr)

    const deleteNum = (num)=>{
		const newArr= arr.filter((item)=>{
			if(item !== Number(num)){
				 return item
			}
		})
		setNumbers(newArr)
	}

	return(
		<>
			<section className='numList'>
				<h2>Delete Number</h2>
				<ul>
					{numbers.map((item)=>{
						return(
							<li>{item * 2}</li>
						)																						
					})}
				</ul>

				<input placeholder='Enter Number' onKeyUp={(e)=>deleteNum(e.target.value)}></input>
			</section>
		</>
	)
}
export default NumList