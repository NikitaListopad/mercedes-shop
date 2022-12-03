

const ItemCard = ({item}) => {

    return (
        <li className='shopItem'>
            <div className='imageBackground'>
                <img src={item.photo} alt={item.title} className='cardImage'/>
            </div>
            <h4 className='cardTitle'>{item.title}</h4>
            <span className='cardPrice'>{item.price}</span>
        </li>
    )
}

export default ItemCard;