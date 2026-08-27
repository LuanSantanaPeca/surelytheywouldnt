import { AsciifyLogoPhysics } from '../../assets/asciify/asciify'
import './logo.css'

function Test(){
    let text = 'Homer'
    let textList = text.split('')
    return(  
        <div className="test">
            {textList.map((letter, index) => (
                <h1>{letter}</h1>
            ))}
        </div>
    )
}

export default function Logo(){
    return(
        <>
            <AsciifyLogoPhysics imagePath="/imgs/image.png"/>
        </>
    )
}