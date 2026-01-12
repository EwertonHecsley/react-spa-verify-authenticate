import { Link } from "react-router-dom"
import s from './Header.module.scss'

export const Header = ()=> {
    return (
        <header className={s.header}>
            <section>
                <h1>Logomarca</h1>
            </section>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/member">Membros</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}