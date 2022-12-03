
const navItems = [
    {link: '', text: 'Об оплате'},
    {link: '', text: 'Доставка'},
    {link: '', text: 'О нас'},
    {link: '', text: 'Контакты'},
]

export const Navigation = (props) => {
    return (
        <nav className='navigation'>
            <ul className='navigationList'>
                {navItems.map(item =>
                    <li className='navItem'>{item.text}</li>
                )}
            </ul>
        </nav>
    )
}