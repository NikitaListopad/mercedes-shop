import ItemCard from "./ItemCard";

const items = [
    {title: 'Диски AMG 20', price: '800$', photo: 'https://www.alloyhub.com/wp-content/uploads/2022/06/DSC_0990-scaled.jpg'},
    {title: 'Диски для Mercedes S -class', price: '8300$', photo: 'https://www.alloyhub.com/wp-content/uploads/2022/06/DSC_0990-scaled.jpg'},
    {title: 'Диски 19 LORINSER LM5 для Mercedes S -class', price: '400$', photo: 'https://www.alloyhub.com/wp-content/uploads/2022/06/DSC_0990-scaled.jpg'},
    {title: 'Диски AMG 22', price: '1800$', photo: 'https://www.alloyhub.com/wp-content/uploads/2022/06/DSC_0990-scaled.jpg'},
    {title: 'Диски AMG 22', price: '1800$', photo: 'https://www.alloyhub.com/wp-content/uploads/2022/06/DSC_0990-scaled.jpg'},
    {title: 'Диски AMG 22', price: '1800$', photo: 'https://www.alloyhub.com/wp-content/uploads/2022/06/DSC_0990-scaled.jpg'},
    {title: 'Диски AMG 22', price: '1800$', photo: 'https://www.alloyhub.com/wp-content/uploads/2022/06/DSC_0990-scaled.jpg'},
];

export const ItemsList = () => {

    return (
            <ul className='itemsList'>
                {items.map(item =>
                    <ItemCard item={item}/>
                )}
            </ul>
    )
}