import { Header } from "../../components/Header/Header";
import s from './Home.module.scss';

export function Home() {
  return (
    <div>
      <Header/>
      <section className={s.home}>
        <h1>Bem-vindo à Home Page</h1>
        <p>Esta é a página principal da aplicação.</p>
      </section>
    </div>
  );
}