import './footer.css'
import gatoIcon from './nobare.png'


const Footer = () =>{
    return(
        <footer className="MeuFooter">
            <img src={gatoIcon} alt="" />
            <p>&copy; Todos so direitos reservados</p>
        </footer>
    )
}

export default Footer