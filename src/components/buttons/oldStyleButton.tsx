import './old-style-button.css'

export function OldStyleButton({ children }: { children: React.ReactNode }) {
    return (
        <>
        <div className="button">
            <div className="button-margin4"></div>
            <div className="button-margin3"></div>
            <div className="button-margin2"></div>
            <div className="button-margin1"></div>
            <div className="button-bg"></div>

            <div className="button-content">
                {children}
            </div>
        </div>
        </>
    )
}