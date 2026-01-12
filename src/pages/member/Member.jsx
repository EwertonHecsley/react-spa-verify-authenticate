import {Header} from '../../components/Header/Header';
import s from './Member.module.scss';

export const Member = ()=> {
    return (
        <div>
            <Header/>
            <section className={s.member}>
                <h1>Área de Membros</h1>
                <p>Bem-vindo à área restrita para membros autenticados.</p>
            </section>
        </div>
    )
}