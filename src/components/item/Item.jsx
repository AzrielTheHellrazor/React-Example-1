import './Item.css'
import logo from '../../assets/pp.jpg'

function Item(body){

    return (
        <div className='itemWrapper'>
            <div className='itemTitle'><img src={logo} alt="Pussy" /></div>
            <div className='itemBody'>{body}</div>
        </div>
        
    );

}

export default Item;