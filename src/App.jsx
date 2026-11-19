import s from "./App.module.css";
import { Menu } from "./components/menu";
import alan from "../public/images/alan.jpg"
function App() {
  return (
    <>
      <Menu />
      <div className={s.wrapHome}>
        <div className={s.section1}>
          <div className={s.wrapImage}>
            <img className={s.imgSection1} src={alan} alt="" />
          </div>
          <div className={s.wrapTexts}>
            <h1 className={s.tituloSection1}>Título de Página</h1>
            <p className={s.textSection1}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              quae minus voluptatum nemo neque sit voluptates? Eaque, tenetur
              animi laboriosam laudantium doloribus repellat non reprehenderit
              incidunt cupiditate perspiciatis harum praesentium!
            </p>
            <button className={s.btnSection1}>CLIQUE</button>
          </div>
        </div>
        <div className={s.section2}>
          <iframe
            className={s.vid}
            src="https://www.youtube.com/embed/i14e-0iuyTU?si=gBH1UFj6Vi74L4_x"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default App;
