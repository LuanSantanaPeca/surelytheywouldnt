import { useAsciifyLogoPhysics } from '../../assets/asciify/asciify'
import { GridBg } from '../../assets/backgrounds/gridBg'
import './logo.css'

export default function Logo(){
    const { canvasRef, logoImgRef } = useAsciifyLogoPhysics()

    return(
        <section className="hero">
            <GridBg color="#171717">
                <canvas ref={canvasRef}></canvas>
                <div className="logo">
                    <img ref={logoImgRef} src="/imgs/image.png" id="source" />
                </div>
            </GridBg>
        </section>
    )
}
