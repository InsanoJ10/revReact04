import s from './menu.module.css'
import {link} from 'react-router'

export const Menu = () => {
    return(
        <nav className={s.menu}>
            <Link to="/">Home</Link>
            <Link to="">Gráficos</Link>
            <Link to="">Produtos</Link>
            < Link to="">Contato</Link>
        </nav>
    )
}
