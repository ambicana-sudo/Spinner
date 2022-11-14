import {useEffect, useState} from 'react';

const Shape = ()=>{
    const [height, setHeight] = useState(100)
    const [width, setWidth] = useState(100)
    const [rotate, setRotate] = useState(0)
    const [radius, setRadius] = useState('0%')
    let [number, setNumber] = useState(0)


    const adjustNum = (action)=>{
        setNumber(action)
    }

    const adjustHeight = (val)=>{
        setHeight(val)
    }

    const adjustWidth = (action)=>{
        setWidth(action)
    }

    const FormHeight = (val)=>{
        setHeight(val)
    }

    const FormWidth = (val)=>{
        // setWidth(width + parseInt(val))
        setWidth(val)
    }

    const rotation = (val)=>{
        setRotate(val)
    }


    return(
        <>
            <section style={{textAlign: `center`, margin: `30px 0`}}>
                <h2>Counter</h2>
                <button onClick={()=> adjustNum(number++)}>+</button>
                <p>{number}</p>
                <button onClick={()=>  adjustNum(number--)}>-</button>
            </section>

            <section style={{textAlign: `center`, margin: `90px 0`}}>
                <h2>Shape Adjustment</h2>
                <div className='square' style={{height: `${height}px`, width: `${width}px`, transform: `rotate(${rotate}deg)`, borderRadius: `${radius}`, margin: `10px auto`, lineHeight: `${height}px`}} onClick={()=> setRadius(`50%`)}>Square</div>

                <button onClick={()=> adjustHeight(height+60)}>Height +</button>

                <button onClick={()=>  adjustHeight(height-60)}>Height -</button>

                <button onClick={()=> adjustWidth(width+60)}>Width +</button> 

                <button onClick={()=> adjustWidth(width-60)}>Width -</button>
                
                <button onClick={()=> setRotate(50)}>Rotate</button>

                <div className='form'>
                    <input placeholder='height' onKeyUp={(e)=> FormHeight(e.target.value)}></input>
                    <input placeholder='width' onKeyUp={(e)=> FormWidth(e.target.value)}></input>
                    <input placeholder='heirotateght' onKeyUp={(e)=> rotation(e.target.value)}></input>
                    <button>Login</button>
                </div>
            </section>

            
        </>
    )

}
export default Shape