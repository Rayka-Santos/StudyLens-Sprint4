import { Link } from "react-router-dom"

function Home() {
  return (
    <>

    <header className="bg-esa-950 text-white p-8">

        <div className="max-w-7xl mx-auto grid gap-6 lg:grid-cols-2 items-center">
            <div className="flex flex-col gap-4">
                <p className="text-esa-400 font-bold">ESTUDE COM MAIS ORGANIZAÇÃO</p>
                <h1 className="text-4xl font-bold leading-tight my-5">Dúvidas e conteúdos em um só lugar.</h1>
                <p>O StudyLens reúne materiais de estudo para organizar conteúdos e facilitar a revisão.</p>
                <Link className="rounded text-white bg-esa-700 hover:bg-esa-400 px-4 py-3" to="/login">Acessar o StudyLens</Link>
            </div>

            <img className="w-2/3 mx-auto rounded-3xl" src="/img/tela-inicial.png" alt="Tela inicial do StudyLens" />
        </div>
    </header>

    <main>
        <section id="solucao" className="bg-esa-950 text-white p-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center my-5">
                    <p>A SOLUÇÃO</p>
                    <h2 className="text-4xl font-bold leading-tight my-5">Estudar de forma simples.</h2>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="border border-white/15 bg-white/5 rounded-xl p-4 flex flex-col justify-center gap-4">
                        <h2 className="text-xl font-bold my-2">O problema</h2>
                        <p>Dúvidas e materiais ficam espalhados. O StudyLens reúne tudo em uma interface simples.</p>
                    </div>

                    <div className="grid gap-4">
                        <div className="border border-white/15 bg-white/5 rounded-xl p-4"><h2 className="text-xl font-bold my-2">01. Registre</h2><p>Reúna o conteúdo dos seus exercícios e materiais.</p></div>
                        <div className="border border-white/15 bg-white/5 rounded-xl p-4"><h2 className="text-xl font-bold my-2">02. Organize</h2><p>Identifique a matéria e planeje sua revisão.</p></div>
                        <div className="border border-white/15 bg-white/5 rounded-xl p-4"><h2 className="text-xl font-bold my-2">03. Revise</h2><p>Pratique e confira os conteúdos que você registrou.</p></div>
                    </div>
                </div>
            </div>
        </section>

        <section id="publico" className="bg-white text-slate-900 p-8">
            <div className="max-w-7xl mx-auto grid gap-6 lg:grid-cols-2 items-center">
                <div>
                    <div className="my-5">
                        <p>PÚBLICO-ALVO</p>
                        <h2 className="text-4xl font-bold leading-tight my-5">Para quem estuda.</h2>
                    </div>
                    <p>Voltado a estudantes que querem concentrar dúvidas, exercícios e resumos.</p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="border-2 border-esa-700 rounded-xl p-4"><h2 className="text-xl font-bold my-2">Ensino Médio</h2><p>Revisões e dúvidas.</p></div>
                    <div className="border-2 border-esa-700 rounded-xl p-4"><h2 className="text-xl font-bold my-2">Faculdade</h2><p>Disciplinas organizadas.</p></div>
                    <div className="border-2 border-esa-700 rounded-xl p-4"><h2 className="text-xl font-bold my-2">Vestibulares</h2><p>Exercícios e revisão.</p></div>
                    <div className="border-2 border-esa-700 rounded-xl p-4"><h2 className="text-xl font-bold my-2">Autodidatas</h2><p>Materiais em ordem.</p></div>
                </div>
            </div>
        </section>

        <section id="galeria" className="bg-esa-950 text-white p-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center my-5">
                    <p>GALERIA</p>
                    <h2 className="text-4xl font-bold leading-tight my-5">Protótipos do StudyLens.</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    <div className="border border-white/15 bg-white/5 rounded-xl p-4 text-center">
                        <img className="w-2/3 mx-auto rounded-xl" src="/img/tela-inicial.png" alt="Tela inicial do StudyLens" />
                        <h2 className="text-xl font-bold my-2">Tela inicial</h2>
                        <p>Área para dúvidas e consultas.</p>
                    </div>

                    <div className="border border-white/15 bg-white/5 rounded-xl p-4 text-center">
                        <img className="w-2/3 mx-auto rounded-xl" src="/img/tela-pastas.png" alt="Tela de pastas do StudyLens" />
                        <h2 className="text-xl font-bold my-2">Pastas</h2>
                        <p>Organização por assunto.</p>
                    </div>

                    <div className="border border-white/15 bg-white/5 rounded-xl p-4 text-center">
                        <img className="w-2/3 mx-auto rounded-xl" src="/img/tela-perfil.png" alt="Tela de perfil do StudyLens" />
                        <h2 className="text-xl font-bold my-2">Perfil</h2>
                        <p>Dados do usuário.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="equipe" className="bg-white text-slate-900 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center my-5">
                    <p>NOSSA EQUIPE</p>
                    <h2 className="text-4xl font-bold leading-tight my-5">Quem desenvolveu.</h2>
                    <p>Conheça os integrantes responsáveis pelo StudyLens.</p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <div className="border-2 border-esa-700 rounded-xl p-4 text-center">
                        <h2 className="text-xl font-bold my-2">João Pedro Sato</h2>
                        <p className="text-esa-700 font-bold">RM 571358</p>
                        <p>Desenvolvedor principal</p>
                    </div>
                    <div className="border-2 border-esa-700 rounded-xl p-4 text-center">
                        <h2 className="text-xl font-bold my-2">Rayka Figueiredo</h2>
                        <p className="text-esa-700 font-bold">RM 573888</p>
                        <p>Designer</p>
                    </div>
                    <div className="border-2 border-esa-700 rounded-xl p-4 text-center">
                        <h2 className="text-xl font-bold my-2">Vinicius Poletti</h2>
                        <p className="text-esa-700 font-bold">RM 570710</p>
                        <p>Programador</p>
                    </div>
                    <div className="border-2 border-esa-700 rounded-xl p-4 text-center">
                        <h2 className="text-xl font-bold my-2">Alice Lima</h2>
                        <p className="text-esa-700 font-bold">RM 569069</p>
                        <p>Idealizadora</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-esa-700 text-white p-8" id="contato">
    <div className="max-w-7xl mx-auto grid gap-6 lg:grid-cols-2">

        <div>
            <div className="my-5">
                <p>CONTATO</p>
                <h2 className="text-4xl font-bold leading-tight my-5">Fale conosco</h2>
            </div>

            <p>
                Entre em contato com nossa equipe para saber mais sobre o StudyLens.
            </p>
        </div>

        <div className="flex flex-col gap-4">
            <p>
                <span className="font-bold">E-mail:</span>
                s_joaopedro@hotmail.com
            </p>

            <p>
                <span className="font-bold">Telefone:</span>
                (11) 94802-4495
            </p>

            <p>
                <span className="font-bold">GitHub:</span>
                <a href="https://github.com/JoaoSato" target="_blank">
                    github.com/JoaoSato
                </a>
            </p>
        </div>

    </div>
</section>
    </main>

    </>
  )
}

export default Home
