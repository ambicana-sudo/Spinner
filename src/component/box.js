import {useEffect, useState} from 'react';

const Box = (props) =>{
    const [changeShape, setChangeShape] = useState('0')

    // useEffect(()=>{
    //     console.log('test')
    // }, [changeShape])

    return(
        <div className='box__container' style={{ transform: `translateY(${changeShape}px)`, height: props.height, width: props.width, background: props.color, borderRadius: props.radius,}} onClick={()=>setChangeShape('50')}>
            <h3>React Box</h3>
        </div>
    )
}
export default Box 