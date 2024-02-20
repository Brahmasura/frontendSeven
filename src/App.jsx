import style from "./App.module.scss";
import girl from "./assets/avatar-jessica.jpeg";

function App() {
  return (
    <>
      <main>
        <div className={style.containerOne}>
          <img src={girl} alt="main pic" />
          <h1>Jessica Randell</h1>
          <h2>London, United Kingdom</h2>
          <h3>&quot;Front-end developer and avid reader.&quot;</h3>

          <button>Github</button>
          <button>Frontend Mentor</button>
          <button>Linkedin</button>
          <button>Twitter</button>
          <button>Instagram</button>
        </div>
      </main>
    </>
  );
}

export default App;
