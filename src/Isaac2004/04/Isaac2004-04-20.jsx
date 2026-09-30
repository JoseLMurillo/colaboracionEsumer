export default function Isaac20040420() {
    return (
        <div className="pagina">
            <header className="header">
                <nav className="navbar">
                    <h1>Mi Página Web</h1>

                    <ul className="menu">
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#sobre-mi">Sobre mí</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section id="inicio" className="hero">
                    <h2>¿Qué tal, damas y caballeros? 👋</h2>
                    <p>
                        Bienvenidos a mi página web. Este es un ejemplo
                        de una estructura HTML más completa usando React.
                    </p>

                    <button onClick={() => alert("¡Bienvenido!")}>
                        Haz clic aquí
                    </button>
                </section>

                <section id="sobre-mi" className="contenido">
                    <article className="card">
                        <h2>Sobre mí</h2>
                        <p>
                            Estoy aprendiendo desarrollo web y creando
                            interfaces cada vez más completas.
                        </p>
                    </article>

                    <article className="card">
                        <h2>Mis habilidades</h2>

                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                        </ul>
                    </article>
                </section>
            </main>

            <footer id="contacto" className="footer">
                <p>© 2026 Isaac20040420 — Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}