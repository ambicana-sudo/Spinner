import React from 'react'

const Names = ()=>{
    const arr =  ['hari','shyam','ambika', 'hari', 'ambika']

    const duplicateItem = ()=>{
        let name = '';
        arr.filter((item ,index)=>{
          if(arr.indexOf(item) !== index){
           name = item
          }
        //   console.log(index, arr.indexOf(item))
        })
        return name
      }

    return(
        <section style={{textAlign: `center`}}>
        <h2>Names</h2>
            {arr.map((item)=>{
                return(
                    <li style={{color: duplicateItem() === item ? 'red' : 'black'}}>{item}</li>
                )
            })}
        </section>
    )
}
export default Names