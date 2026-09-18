import { useAsciifyLogoPhysics } from '../../assets/asciify/asciify'
import { GridBg } from '../../assets/backgrounds/gridBg'
import './home.css'
import '../../App.css'
import { ShufflingTitleHoverLetter } from '../../assets/shuffling/shuffling'
import { OldStyleButton } from '../../components/buttons/oldStyleButton'
import { InfoCard } from '../../components/infoCard/infoCard'
import { Popup } from '../../assets/popup/popup'
import { useEffect, useState } from 'react'


export default function Home(){
    const { canvasRef, logoImgRef } = useAsciifyLogoPhysics("#ffffffA0", "#ff000040", true)
    const [isActiveAbout, setIsActiveAbout] = useState(false)
    const [isActiveInic, setIsActiveInic] = useState(false)
    const [isActiveProgramming, setIsActiveProgramming] = useState(false)

    /*function swapImage(src1: string, src2: string){
        let imageSrc = src1
        useEffect(() => {
            if(imageSrc == src1) imageSrc = src2
            if(imageSrc == src2) imageSrc = src1
        }, [imageSrc])
        return imageSrc
    }*/

    return(
        <>
            <section className="hero">
                <GridBg cellSize={2} cellGap={1}>
                    <canvas ref={canvasRef}></canvas>
                    <div className="portfolio">
                        <img ref={logoImgRef} src="/imgs/titles/portfolioff.png" id="source" />
                    </div>
                </GridBg>
            </section>
            <section className="sct1">
                <GridBg color="#171717" cellSize={2} cellGap={1}>
                    <div className="inner-margins">
                        <div className="buttons-sct1">
                            <div className="button-group" style={{paddingTop: '20px'}}>
                                <div className="title wordcraft-font" onClick={() => {isActiveAbout ? setIsActiveAbout(false) : setIsActiveAbout(true)}}>
                                    <OldStyleButton>
                                        <ShufflingTitleHoverLetter title="Sobre" rootMargin="0px" threshold={0.0} />
                                    </OldStyleButton>
                                </div>
                            </div>
                            <div className="button-group">
                                <div className="title wordcraft-font" onClick={() => {isActiveInic ? setIsActiveInic(false) : setIsActiveInic(true)}}>
                                    <OldStyleButton>
                                        <ShufflingTitleHoverLetter title="Iniciação &nbsp; Científica" rootMargin="0px" threshold={0.0} />
                                    </OldStyleButton>
                                </div>
                            </div>
                            <div className="button-group">
                                <div className="title wordcraft-font" onClick={() => {isActiveProgramming ? setIsActiveProgramming(false) : setIsActiveProgramming(true)}}>
                                    <OldStyleButton>
                                        <ShufflingTitleHoverLetter title="Programação" rootMargin="0px" threshold={0.0} />
                                    </OldStyleButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </GridBg>
            </section>
            <section className="sct2">
                <GridBg color="#171717" cellSize={2} cellGap={1}>
                    <div className="inner-margins">
                        <div className="buttons-sct2">
                            <a href="https://www.instagram.com/surelytheywouldnt/" target="_blank" className="external-link wordcraft-font">
                                <OldStyleButton>
                                    <img src="/imgs/icons/instagramIcon.png" alt="Instagram" />
                                </OldStyleButton>
                            </a>
                            <a href="https://github.com/LuanSantanaPeca" target="_blank" className="external-link wordcraft-font">
                                <OldStyleButton>
                                    <img src="/imgs/icons/githubIcon.png" alt="Github" />
                                </OldStyleButton>
                            </a>
                        </div>
                    </div>
                </GridBg>
            </section>


            <Popup isActive={isActiveAbout} className='popup' title='Sobre'
                closePopup = {
                    <span onClick={() => setIsActiveAbout(false)} className="close-popup">
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" className="border-x">
                            <path d="M1.41 0l-1.41 1.41.72.72 1.78 1.81-1.78 1.78-.72.69 1.41 1.44.72-.72 1.81-1.81 1.78 1.81.69.72 1.44-1.44-.72-.69-1.81-1.78 1.81-1.81.72-.72-1.44-1.41-.69.72-1.78 1.78-1.81-1.78-.72-.72z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" className="x">
                            <path d="M1.41 0l-1.41 1.41.72.72 1.78 1.81-1.78 1.78-.72.69 1.41 1.44.72-.72 1.81-1.81 1.78 1.81.69.72 1.44-1.44-.72-.69-1.81-1.78 1.81-1.81.72-.72-1.44-1.41-.69.72-1.78 1.78-1.81-1.78-.72-.72z" />
                        </svg>
                    </span>
                }
            >
                <div className="popup-body">
                    <div className="popup-sobre-sct">
                        <div className="popup-body-img perfil">
                            <img src="imgs/luanPhoto.jpeg" alt="" />
                        </div>
                        <div className="popup-body-item">
                            <h3 className="popup-body-item-title">Luan Enrico Santana Peça</h3>
                            <p className="popup-body-item-text">Sou um programador e artista, atualmente cursando o 4° período de Engenharia de Software. Desde cedo vi uma 
                                possibilidade muito grande de transformação de software em arte (principalmente através dos jogos). Mais tarde, encontrei a música e o design como
                                outros meios de avançar ainda mais minha forma de ver e consumir as coisas.
                            </p>
                            <p className="popup-body-item-text">Estudei todo meu ensino médio no Colégio Sesi da Indústria, que possui uma metodologia de ensino baseada na
                                divisão de turmas em grupos de 6 estudantes, estudantes esses que fazem grande parte dos trabalhos passados em conjunto. Essa experiência, junto ao meu 
                                atual estágio como desenvolvedor, me proporciona uma grande confiança na minha capacidade de trabalhar e render bem em equipe.
                            </p>
                            <p className="popup-body-item-text">Atualmente meu principal foco é melhorar minhas capacidades de design para ter a capacidade de desenvolver 
                                aplicações web integralmente, desde a concepção até a implementação final.
                            </p>
                        </div>
                    </div>
                </div>
            </Popup>
            <Popup isActive={isActiveInic} className='popup' title='Iniciação Científica'
                closePopup = {
                    <span onClick={() => setIsActiveInic(false)} className="close-popup">
                         <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" className="border-x">
                            <path d="M1.41 0l-1.41 1.41.72.72 1.78 1.81-1.78 1.78-.72.69 1.41 1.44.72-.72 1.81-1.81 1.78 1.81.69.72 1.44-1.44-.72-.69-1.81-1.78 1.81-1.81.72-.72-1.44-1.41-.69.72-1.78 1.78-1.81-1.78-.72-.72z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" className="x">
                            <path d="M1.41 0l-1.41 1.41.72.72 1.78 1.81-1.78 1.78-.72.69 1.41 1.44.72-.72 1.81-1.81 1.78 1.81.69.72 1.44-1.44-.72-.69-1.81-1.78 1.81-1.81.72-.72-1.44-1.41-.69.72-1.78 1.78-1.81-1.78-.72-.72z" />
                        </svg>
                    </span>
                }
            >
                <div className="popup-body">
                    <div className="popup-body-item">
                        <h3 className="popup-body-item-title">Entre os anos de 2022 e 2023 fiz parte de um projeto de iniciação científica na escola em que estudava.</h3>
                        <p className="popup-body-item-text">O projeto, chamado Elementria, era basicamente um jogo de cartas (estilo super trunfo) didático, baseado na 
                            tabela periódica. 
                        </p>
                        <div className="popup-body-img" style={{marginBottom: '35px', marginTop: '15px'}}>
                            <img style={{height: '300px', width: '220px'}} src="imgs/iniciacaoCientifica/dorsoCartasElementria.png" alt="Carta do elemento carbono feita em MDF. Carbono está escrito no canto esquerdo superior do retângulo de madeira. No centro superior o símbolo do carbono (C). Abaixo do símbolo, massa atômica (12 u), densidade (3,51 g/cm³), raio atômico (70pm) e ponto de fusão (3550 °C) do carbono são especificados." />
                            <p className='popup-body-img-subtitle'>Dorso das cartas/Logo do projeto</p>
                        </div>
                        <p className="popup-body-item-text">Cada carta era um elemento da tabela periódica, possuindo os respectivos valores de massa atômica, densidade, 
                            raio atômico e ponto de fusão. Os valores escolhidos tinham o objetivo de, enquanto ensinando, também manter o jogo balanceado, e não somente 
                            quanto maior sua massa atômica (assim também o seu número de elétrons, nêutrons, prótons, camadas de valência, etc) melhor.
                        </p>
                        <p className="popup-body-item-text">O jogo em si funcionava da seguinte forma:</p>
                        <ul className="popup-body-item-list">
                            <li>As cartas são embaralhadas e distribuídas igualmente para todos os jogadores, com as faces viradas para baixo.</li>
                            <li>Cada jogador pega seu monte de cartas e pode ver seu baralho, mas não é permitido que a ordem das cartas seja rearranjada.</li>
                            <li>Após a distribuição, o jogo segue uma fórmula repetida de rodadas: 
                                <ul style={{margin: '5px 0 10px 15px'}}>
                                    <li>O jogador que venceu a rodada anterior (o jogador que inicia o jogo pode ser escolhido aleatoriamente) escolhe uma das 4 categorias 
                                        presentes em sua carta (idealmente escolhendo o valor com mais chance de ser o maior quando comparado com outras cartas).</li>
                                    <li>Todos os jogadores revelam o valor de suas próprias cartas referentes à categoria selecionada.</li>
                                    <li>O jogador com a carta com maior valor pega todas as cartas de seus oponentes e, juntamente com a carta que acabou de utilizar,
                                        as coloca no final de seu baralho.
                                    </li>
                                    <li>Vence quem tiver todas as cartas ou, após um tempo determinado de jogo, possuir a maior quantidade de cartas em seu próprio baralho.</li>
                                </ul>
                            </li>
                        </ul>
                        <p className="popup-body-item-text">Além de ser um jogo educativo, o projeto também envolvia a acessibilidade do ensino proporcionado pelo jogo 
                            para pessoas com deficiências visuais, possuindo braille (além do texto em português) para todas as informações da "carta".
                        </p>
                        <p className="popup-body-item-text">A ideia inicial era realmente ser um jogo de cartas tradicional, mas percebemos que dificilmente o papel aguentaria o 
                            manuseio constante desse material, especialmente os relevos em braille, além também da limitação de tamanho mínimo em que esses relevos ainda são
                            legíveis. Fizemos então, posteriormente, outros protótipos em MDF e acrílico que, por mais que tenham ficado longe da ideia inicial, ainda poderiam
                            servir bem como material didático. Nas fotos seguintes o braille é meio difícil de enxergar, mas está dentro dos retângulos mais escuros embaixo 
                            das informações.
                        </p>
                        <div className="popup-body-divided-sct-imgs" style={{marginTop: '25px', marginBottom: '40px'}}>
                            <div className="popup-body-img">
                                <img src="imgs/iniciacaoCientifica/cartaCMDF.png" alt="Carta do elemento carbono feita em MDF. Carbono está escrito no canto esquerdo superior do retângulo de madeira. No centro superior o símbolo do carbono (C). Abaixo do símbolo, massa atômica (12 u), densidade (3,51 g/cm³), raio atômico (70pm) e ponto de fusão (3550 °C) do carbono são especificados." />
                                <p className='popup-body-img-subtitle'>Carta do elemento carbono feita em MDF</p>
                            </div>
                            <div className="popup-body-img">
                                <img src="imgs/iniciacaoCientifica/cartasMDF.png" alt="Pilha de cartas com a mesma estrutura da carta da imagem anterior, com elementos variados como Fósforo, Sódio, Potássio e Cobre." />
                                <p className='popup-body-img-subtitle'>Coleção de cartas produzidas em MDF de variados elementos</p>
                            </div>
                        </div>
                        <p className="popup-body-item-text">No tempo que eu participei do projeto, tivemos a oportunidade de apresentar nossa ideia em diversas feiras e 
                            exposições, sendo elas:
                        </p>
                        <ul className="popup-body-item-list">
                            <li>7ª Feira de Ciências Júnior PUCPR + 3ª Mostra Paralela da PUCPR;</li>
                            <li>SBPC JOVEM 2023 - UFPR;</li>
                            <li>4ª Edição da Mostra Nacional de Feiras de Ciências;</li>
                            <li>XII Feira de Inovação das Ciências e Engenharias - FIciencias 2023 (não consegui participar dessa feira, mas ainda fazia parte do projeto na época).</li>
                        </ul>
                        <div className="popup-body-divided-sct-imgs" style={{marginTop: '25px', marginBottom: '35px'}}>
                            <div className="popup-body-img">
                                <img src="imgs/iniciacaoCientifica/sbpc.png" alt="Equipe Elementria apresentando no SBPC JOVEM 2023. A equipe consiste de três mulheres e um homem, todos posando para a foto. Estão em um galpão, onde é possível ver outros estandes de projetos atrás. À frente, em uma mesa, estão expostos os materiais do projeto." />
                                <p className='popup-body-img-subtitle'>Equipe Elementria apresentando no SBPC JOVEM 2023</p>
                            </div>
                            <div className="popup-body-img">
                                <img src="imgs/iniciacaoCientifica/mcti.png" alt="Equipe Elementria no Ministério da Ciência, Tecnologia e Inovação. A equipe consiste de duas mulheres e dois homens. Um dos homens é o professor orientador. Todos os quatro posam para a foto segurando uma bandeira do Paraná. Ao fundo há uma bandeira do Brasil em um pedestal. À frente, há um estande com as letras MCTI em branco." />
                                <p className='popup-body-img-subtitle'>Equipe Elementria no Ministério da Ciência, Tecnologia e Inovação</p>
                            </div>
                        </div>
                        <div className="popup-body-img" style={{maxWidth: '550px', marginBottom: '35px'}}>
                            <img src="imgs/iniciacaoCientifica/certificadoPUCPR.jpeg" alt="Carta do elemento carbono feita em MDF. Carbono está escrito no canto esquerdo superior do retângulo de madeira. No centro superior o símbolo do carbono (C). Abaixo do símbolo, massa atômica (12 u), densidade (3,51 g/cm³), raio atômico (70pm) e ponto de fusão (3550 °C) do carbono são especificados." />
                            <p className='popup-body-img-subtitle'>Certificado de 2° Lugar na Categoria Voto Popular da 7ª Feira de Ciências Júnior PUCPR</p>
                        </div>
                    </div>

                    <div className="popup-body-item"><p className="popup-body-item-text"><b>Infelizmente o projeto não está mais ativo e nunca chegou a realmente ser produzido, mas os registros do processo ainda existem em: </b></p></div>
                    <a href="https://www.instagram.com/ic.elementria/" target="_blank" className="popup-list-button">
                        <OldStyleButton>
                            <div className="popup-list-button-text">
                                <div className="light-bg">
                                    <img src="/imgs/icons/instagramIcon.png" alt="Ícone do Instagram"></img>
                                </div>
                                <p>Instagram do Projeto!</p>
                            </div>
                        </OldStyleButton>
                    </a>
                </div>
            </Popup>
            <Popup isActive={isActiveProgramming} className='popup' title='Programação'
                closePopup = {
                    <span onClick={() => setIsActiveProgramming(false)} className="close-popup">
                         <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" className="border-x">
                            <path d="M1.41 0l-1.41 1.41.72.72 1.78 1.81-1.78 1.78-.72.69 1.41 1.44.72-.72 1.81-1.81 1.78 1.81.69.72 1.44-1.44-.72-.69-1.81-1.78 1.81-1.81.72-.72-1.44-1.41-.69.72-1.78 1.78-1.81-1.78-.72-.72z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" className="x">
                            <path d="M1.41 0l-1.41 1.41.72.72 1.78 1.81-1.78 1.78-.72.69 1.41 1.44.72-.72 1.81-1.81 1.78 1.81.69.72 1.44-1.44-.72-.69-1.81-1.78 1.81-1.81.72-.72-1.44-1.41-.69.72-1.78 1.78-1.81-1.78-.72-.72z" />
                        </svg>
                    </span>
                }
            >
                <div className="popup-body">
                    {/*<p className="popup-body-text">Os projetos estão organizados do mais antigo para o mais recente.</p>*/}
                    <div className="popup-body-item">
                        <h3 className="popup-body-item-title">Fake Pinterest - 2023</h3>
                        <p className="popup-body-item-text">Projeto de Desenvolvimento Web feito em HTML (estrutura), CSS (estilização) e Python (lógica) como parte de um
                            curso básico de Python. Mexe com a criação de bancos de dados locais, assim como o armazenamento e manipulação desses dados.
                        </p>
                        <p className="popup-body-item-text">Tem o intuito de replicar algumas funções básicas do Pinterest, como criação de conta, login, separação do conteúdo
                            mostrado por perfil e upload de imagens.
                        </p>
                        <p className="popup-body-item-text">Não é um projeto hosteado online, ou seja, para visualização será necessário o download do código na máquina.
                            Para rodar a aplicação siga as instruções do arquivo ReadMe do repositório.
                        </p>
                        <p className="popup-body-item-text">Foi meu primeiro contato com desenvolvimento web e, por mais que simples, me mostrou que os grandes aplicativos
                            podem ser quebrados em funcionalidades menores que, com algum esforço, podem ser replicadas e até melhoradas (não que tenha ocorrido a melhoria
                            nesse caso).
                        </p>
                    </div>
                    <a href="https://github.com/LuanSantanaPeca/fakepinterest" target="_blank" className="popup-list-button">
                        <OldStyleButton>
                            <div className="popup-list-button-text">
                                <div className="dark-bg">
                                    <img src="/imgs/icons/htmlIcon.png" alt="Ícone do HTML" id="html"></img>
                                    <img src="/imgs/icons/cssIcon.png" alt="Ícone do CSS" id="css"></img>
                                    <img src="/imgs/icons/pythonIcon.png" alt="Ícone do Python"></img>
                                </div>
                                <p>Acesse o repositório aqui!</p>
                            </div>
                        </OldStyleButton>
                    </a>

                    <div className="popup-body-item">
                        <h3 className="popup-body-item-title">Aplicação Web para colaboração e.feito Social + Colégios Sociais Maristas - 2025</h3>
                        <p className="popup-body-item-text"> A aplicação é dividida em duas partes, a Landing Page e uma plataforma de gerenciamento. As duas partes foram
                            montadas com HTML, CSS e JavaScript.
                        </p>
                        <p className="popup-body-item-text">O destaque de desenvolvimento da Landing Page é o formulário de doações, que se conecta a um banco de dados no 
                            Firebase e registra as informações do doador e da doação separadamente.
                        </p>
                        <p className="popup-body-item-text">Ao acessar a Landing Page, existem botões de "Entrar na Plataforma" e "Cadastrar-se". Esses botões levam às secções de login
                            e registro, respectivamente, da plataforma Amigo Marista. É necessário criar uma conta (grátis) para acessar a plataforma.
                        </p>
                        <p className="popup-body-item-text">Esse projeto foi meu primeiro contato real com bancos de dados, o que foi um desafio no início. No entanto, como era
                            um sistema simples (pegar as informações do formulário e armazená-las) consegui eventualmente fazer com que funcionasse de forma adequada. Isso serviu
                            como base para outros projetos, onde hoje mexo com o Supabase, utilizando diretamente SQL para realizar edições necessárias.
                        </p>
                        <span className="repository-warning popup-body-item-text">Infelizmente, por ser um projeto da empresa em que trabalho, e não meu, não posso disponibilizar o repositório. 
                            Ainda assim, atesto que a maior parte do código foi planejada e escrita por mim.
                        </span>
                        <span className="repository-warning popup-body-item-text">Utilização da IDE Cursor (que disponibiliza diversos agentes de IA) para escrita de algumas
                            partes do código.
                        </span>
                    </div>
                    <a href="https://colegiosmaristas.com.br/escolas-sociais/amigomarista" target="_blank" className="popup-list-button">
                        <OldStyleButton>
                            <div className="popup-list-button-text">
                                <div className="dark-bg">
                                    <img src="/imgs/icons/htmlIcon.png" alt="Ícone do HTML" id="html"></img>
                                    <img src="/imgs/icons/cssIcon.png" alt="Ícone do CSS" id="css"></img>
                                    <img src="/imgs/icons/jsIcon.png" alt="Ícone do Javascript" id="js"></img>
                                </div>
                                <p>Acesse o site aqui!</p>
                            </div>
                        </OldStyleButton>
                    </a>
                     
                    <div className="popup-body-item">
                        <h3 className="popup-body-item-title">Site Institucional para e.feito Social - 2026</h3>
                        <p className="popup-body-item-text">Site feito inteiramente em React, com separação somente entre arquivos TypeScript e CSS.</p>
                        <p className="popup-body-item-text">Destaque de desenvolvimento para as animações de slide e fade que foram componentes desenvolvidos do zero para
                            esse projetos, que permitem a transformação de qualquer elemento HTML em um elemento com a animação escolhida, sem alterar suas propriedades.
                        </p>
                        <p className="popup-body-item-text">O scroll da página também é controlado pelo site, ao invés de pelo navegador, a fim de dar uma sensação de rolagem mais "lisa".</p>
                        <p className="popup-body-item-text">Foi nesse projeto que eu aprendi de fato a transformar um design pronto (no Figma nesse caso) em uma página real;
                            quais elementos devem ser descartados ou alterados em prol da performance da aplicação e como alterar para que ele seja utilizável tanto no
                            PC quanto no mobile (sem perder identidade).</p>
                        <span className="repository-warning popup-body-item-text">Infelizmente, por ser um projeto da empresa em que trabalho, e não meu, não posso disponibilizar o repositório. 
                            Ainda assim, atesto que a maior parte do código foi planejada e escrita por mim.
                        </span>
                        <span className="repository-warning popup-body-item-text">Utilização da IDE Cursor (que disponibiliza diversos agentes de IA) para escrita de algumas
                            partes do código.
                        </span>
                    </div>
                    <a href="https://www.efeito.social/" target="_blank" className="popup-list-button">
                        <OldStyleButton>
                            <div className="popup-list-button-text">
                                <div className="dark-bg">
                                    <img src="/imgs/icons/reactIcon.png" alt="Ícone do React"></img>
                                </div>
                                <p>Acesse o site aqui!</p>
                            </div>
                        </OldStyleButton>
                    </a>

                    {/*<a href="https://github.com/LuanSantanaPeca/pokemoncopia" target="_blank" className="popup-list-button">
                        <OldStyleButton>
                            <div className="popup-list-button-text">
                                <div className="light-bg">
                                    <img src="/imgs/icons/javaIcon.png" alt="Ícone do Java"></img>
                                </div>
                                <p>Cópia de Pokemon para projeto de faculdade - 2026</p>
                            </div>
                        </OldStyleButton>
                    </a>*/}

                    <p className="popup-body-text">Caso esse portfólio possa também ser considerado um projeto, disponibilizo ele no link a seguir:</p>
                    <a href="https://github.com/LuanSantanaPeca/surelytheywouldnt" target="_blank" className="popup-list-button">
                        <OldStyleButton>
                            <div className="popup-list-button-text">
                                <div className="dark-bg">
                                    <img src="/imgs/icons/reactIcon.png" alt="Ícone do React"></img>
                                </div>
                                <p>Acesse o repositório desse portfólio aqui!</p>
                            </div>
                        </OldStyleButton>
                    </a>
                </div>
            </Popup>
        </>
    )
}
