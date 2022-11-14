import React, { useEffect } from "react";
import { useState } from "react";

const LightBox = ()=>{
    const [selectedItem, setSelectedItem] = useState(0)

    const bgColor = ['red', 'yellow', 'limegreen']


    useEffect(()=>{
        let initialCount = selectedItem;
        
        const timer = setInterval(() => {
            let count = initialCount++

            if(initialCount === 3){
                initialCount = 0
                
            //    clearInterval(timer)
            }

            console.log(count, initialCount)

            setSelectedItem(count)

          }, 3000)
          
    }, [])

    
    
    return(
        <section>
            <h2>Traffic Light</h2>
            <div className="light-box">
                {bgColor.map((item, id)=>{
                    return(
                        <div className='light'
                        style={{background: item, opacity: id === selectedItem ? 1 : .4 }} >
                        </div>
                    )
                })}
            </div>
            {/* <button onClick={()=> stopLight()}>Stop</button> */}
        </section>
    )
}
export default LightBox 