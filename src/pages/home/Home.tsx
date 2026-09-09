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
                                possibilidade muito grande de tranformação de software em arte (principalmente através dos jogos). Mais tarde, encontrei a música e o design como
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
                    <h3>Popup</h3>
                    <p>texto do popup</p>
                    7° Feira de Ciências Júnior PUCPR
                    3° Mostra Paralela da PUCPR
                    SBPC JOVEM 2023- UFPR
                    4° Edição da Mostra Nacional de Feiras de Ciências
                    Indiretamente da XII Feira de Inovação das Ciências e Engenharias (FIciencias 2023)
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
                        <h3 className="popup-body-item-title">Aplicação para colaboração e.feito Social + Colégios Sociais Maristas - 2025</h3>
                        <p className="popup-body-item-text"> A aplicação é dividida em duas partes, a Landing Page e uma plataforma de gerenciamento. As duas partes foram
                            montadas com HTML, CSS e JavaScript.
                        </p>
                        <p className="popup-body-item-text">O destaque de desenvolvimento da Landing Page é o formulário de doações, que se conecta a um banco de dados no 
                            Firebase e registra as informações do doador e da doação separadamente.
                        </p>
                        <p className="popup-body-item-text">Ao acessar a Landing Page, existem botões de "Entrar na Plataforma" e "Cadastrar-se". Esses botões levam às secções de login
                            e registro, respectivamente, da plataforma Amigo Marista. É necessário criar uma conta (grátis) para acessar a plataforma.
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
