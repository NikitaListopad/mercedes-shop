

const ItemCard = ({item}) => {

    return (
        <li className='shopItem'>
            <div className='imageBackground'>
                <img src={item.photo} alt={item.title} className='cardImage'/>
            </div>
            <h4 className='cardTitle'>{item.title}</h4>
            <div className='cardAbout'>
                <span className='cardPrice'>{item.price}</span>
                <button className='aboutButton'>
                    О товаре
                </button>
            </div>
        </li>
    )
}

export default ItemCard;