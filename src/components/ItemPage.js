
const ItemPage = ({item}) => {

    const {title, price, photo} = item;

    return (
        <div className='itemContainer'>
            <div className='imagesBlock'>
                <img src={photo} alt="Photo" className='mainItemPhoto'/>
            </div>
            <div className='aboutBlock'>
                <h1 className="itemTitle">{title}</h1>
                <span className="itemPrice">{price}</span>
            </div>
        </div>
    )
}

export default ItemPage;