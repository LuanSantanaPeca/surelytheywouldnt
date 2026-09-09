import './info-card.css'

export function InfoCard({ children, direction, infoText, translateAmountX, translateAmountY }: 
    { children: React.ReactNode, direction: string, infoText: string, translateAmountX: number, translateAmountY: number }) {
    return (
        <div className="info-hover">  
            {children}
            <div className={`info-card ${direction}`} style={{marginTop: translateAmountY, marginLeft: translateAmountX}}>
                {infoText}
                <div className="info-card-direction-border"></div>
                <div className="info-card-direction"></div>
            </div>
        </div>
    )
}