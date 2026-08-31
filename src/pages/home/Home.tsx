import { useAsciifyLogoPhysics } from '../../assets/asciify/asciify'
import { GridBg } from '../../assets/backgrounds/gridBg'
import './home.css'
import { ShufflingTitleHoverWhole } from '../../assets/shuffling/shuffling'

export default function Home(){
    const { canvasRef, logoImgRef } = useAsciifyLogoPhysics("#ffffffA0", "#ff000040", true)

    return(
        <>
            <section className="hero">
                <GridBg cellSize={2} cellGap={1}>
                    <canvas ref={canvasRef}></canvas>
                    <div className="portfolio">
                        <img ref={logoImgRef} src="/imgs/titles/portfolio.png" id="source" />
                    </div>
                </GridBg>
            </section>
            <section className="sct1">
                <GridBg color="#171717" cellSize={2} cellGap={1}>
                    <div className="inner-margins">
                        <div className="title"><ShufflingTitleHoverWhole title="Testando" rootMargin="0px" threshold={0.0} /></div>
                    </div>
                </GridBg>
            </section>
        </>
    )
}
