import { useState } from 'react';
const ColorWheel = ()=>{
    const colors = ["maroon","red","tomato","yellow","gold","orange","darkblue","skyblue","aqua","green","limegreen","lightgreen"]
    
    const [position, setPosition] = useState(-15)
    const [currentSelected, setCurrentSelected] = useState(0)
    const spinTimer = ()=>{
        let a
        if(currentSelected.length> 0 && currentSelected.length<12){
            a = currentSelected
        }else{
            a= 0
        }
        
        let interval =  setInterval(()=>{   
            a++
            if(a === 12){
                a = 0;
            }
            setCurrentSelected(a)
            setPosition(prevState => prevState - 30)
            
        },100)

        setTimeout(()=>{
            clearInterval(interval)
            interval = 0    
        }, Math.floor(Math.random() * 3000))
    }

    
    return(
        <section>
        <h2>Wheel of Fortune</h2>
        <div className='colorfulbg'>
            <div className='pointer'></div>
            
            <div className="circle" style={{transform:`rotate(${position}deg)`}}>
                <ul>
                    {colors.map((item, id)=>{
                        return(
                            <li style={{background: item}}><span className='text'>{id}</span></li>
                        )
                    })}
                </ul>
            </div>
            <button className='spin' onClick={()=> spinTimer()}>Spin</button>
            <h2>{currentSelected}</h2>
        </div>
        </section>
    )
}
export default ColorWheel