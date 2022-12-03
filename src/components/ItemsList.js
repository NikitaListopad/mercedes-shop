const items = [
    {title: 'Диски AMG 20', price: '800$', photo: 'https://www.alloyhub.com/wp-content/uploads/2022/06/DSC_0990-scaled.jpg'},
    {title: 'Диски AMG 19', price: '8300$', photo: 'https://www.alloyhub.com/wp-content/uploads/2022/06/DSC_0990-scaled.jpg'},
    {title: 'Диски AMG 21', price: '400$', photo: 'https://www.alloyhub.com/wp-content/uploads/2022/06/DSC_0990-scaled.jpg'},
    {title: 'Диски AMG 22', price: '1800$', photo: 'https://www.alloyhub.com/wp-content/uploads/2022/06/DSC_0990-scaled.jpg'},
];

export const ItemsList = () => {

    return (
            <ul className='itemsList' style={{display: 'grid', gridTemplateColumns: 'repeat(3, lfr)'}}>
                {items.map(item =>
                    <li style={{display: 'flex', flexDirection: 'column', maxWidth: '300px'}}>
                        <img src={item.photo} alt={item.title}/>
                        <span>{item.title}</span>
                        <span>{item.price}</span>
                    </li>
                )}
            </ul>
    )
}