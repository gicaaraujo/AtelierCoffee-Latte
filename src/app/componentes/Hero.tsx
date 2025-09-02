import "./Hero.css"

export default function Hero() {
    return(
        <section className="hero-section">
            <div className="hero-text">
                <h1 className="hero-title">BEM-VINDO AO</h1>
                <h2 className="hero-subtitle">Atelier Coffee & Latte</h2>
                <h3 className="hero-phrase">Nada como uma boa xícara de café para começar bem o dia!</h3>
                <p className="hero-description">Seu dia começa aqui no Atelier Coffee&Latte,
                    um espaço para pausar e saborear a vida, onde cada xícara é feita com arte e carinho!
                </p>
            </div>
            <div className="hero-image">
                <img src="coffe&latte.png" alt="primeira" />
            </div>
        </section>
    )
}