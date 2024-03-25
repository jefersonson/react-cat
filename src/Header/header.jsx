
import './header.css'
const Header = () =>{
    return(
        <header className='MeuHeader'>
        <img src="icon" alt="" />
            <ul>
                <a href=""><li>Login</li></a>
                <a href=""><li>Registrar</li></a>
                <a href=""><li>Sobre</li></a>
            </ul>
        </header>
    )
}
export default Header;