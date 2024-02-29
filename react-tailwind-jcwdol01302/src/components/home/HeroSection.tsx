import style from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={style.hero}>
      <div className="container">
        <div style={{ height: 400 }}>
          <h1> Yudhistira media </h1>
          <h3> Your Problem's Solution</h3>
        </div>
      </div>
    </section>
  );
}
