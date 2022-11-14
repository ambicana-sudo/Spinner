import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Ecobox = (props)=>{
    return(
        <div className="box">
            <div className="product-image">
                <img src={props.item.image} alt=""/>
            </div>
            <div className="product-info">
                <h3 className="product-name">{props.item.name}</h3>
                <button className="wishlist">
                    <img src='https://icons.veryicon.com/png/o/commerce-shopping/fine-edition-mall-icon/wishlist-1.png'/>
                </button>
                <button className="cart">
                <img src='https://cdn-icons-png.flaticon.com/512/263/263142.png'/>
                </button>
            </div>
        </div>
    )
}
export default Ecobox