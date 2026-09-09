import { useRef, useState, type MouseEvent, type ReactNode } from 'react'
import './popup.css'
import React, { useEffect, Children } from 'react'

type PopupProps = {
    children?: ReactNode
    isActive?: boolean
    className?: string
    title?: string
    closePopup?: ReactNode
}

let z = 1
const MIN_WIDTH = 800
const MIN_HEIGHT = 500
//const MAX_HEIGHT = screen.height

function randomStartPercent() {
    return `${45 + Math.random() * 10}%`
}

export function Popup({ children, isActive = false, className, title, closePopup }: PopupProps) {
    const popupRef = useRef<HTMLDivElement>(null)
    const [zIndex, setZIndex] = useState(1)
    const [pinned, setPinned] = useState(false)
    const [pos, setPos] = useState(() => ({
        left: randomStartPercent(),
        top: randomStartPercent(),
    }))

    useEffect(() => {
        if (!isActive){
            if(popupRef.current){
                setPos({ left: randomStartPercent(), top: randomStartPercent() })
                setPinned(false)
                if (parseInt(popupRef.current.style.height) > screen.height - 200){
                    popupRef.current.style.width = '70%'
                    popupRef.current.style.height = '70%'
                }
            }
            return
        }
        z += 1
        setZIndex(z)
    }, [isActive])

    function bringToFront() {
        z += 1
        setZIndex(z)
    }

    function pinPopup(popup: HTMLDivElement) {
        const rect = popup.getBoundingClientRect()
        const left = `${rect.left}px`
        const top = `${rect.top}px`
        popup.style.transform = 'none'
        popup.style.left = left
        popup.style.top = top
        setPinned(true)
        setPos({ left, top})
        return rect
    }

    function blockPageSelection() {
        document.body.style.userSelect = 'none'
        document.getSelection()?.removeAllRanges()
        document.addEventListener('selectstart', preventSelection)
    }

    function restorePageSelection() {
        document.body.style.userSelect = ''
        document.removeEventListener('selectstart', preventSelection)
    }

    function preventSelection(event: Event) {
        event.preventDefault()
    }

    function dragPopup(event: MouseEvent<HTMLDivElement>) {
        const popup = popupRef.current
        if (!popup) return
        event.preventDefault()

        const rect = pinPopup(popup)
        const startX = event.clientX
        const startY = event.clientY
        const l = rect.left
        const t = rect.top
        blockPageSelection()

        const drag = (moveEvent: globalThis.MouseEvent) => {
            moveEvent.preventDefault()
            if(((parseInt(popup.style.left)) <= -popup.offsetWidth + 100) && moveEvent.clientX < startX){
                popup.style.left = `${-popup.offsetWidth + 100}px`
            }else if(((parseInt(popup.style.left)) >= window.innerWidth - 100) && moveEvent.clientX > startX){
                popup.style.left = `${window.innerWidth - 100}px`
            }else{
                popup.style.left = `${l + moveEvent.clientX - startX}px`
            }
            
            if(((parseInt(popup.style.top)) <= 0) && moveEvent.clientY < startY){
                popup.style.top = `${0}px`
            }else if(((parseInt(popup.style.top)) >= window.innerHeight - 60) && moveEvent.clientY > startY){
                popup.style.top = `${window.innerHeight - 60}px`
            }else{
                popup.style.top = `${t + moveEvent.clientY - startY}px`
            }
        }

        const mouseUp = () => {
            restorePageSelection()
            setPos({ left: popup.style.left, top: popup.style.top })
            document.removeEventListener('mousemove', drag)
            document.removeEventListener('mouseup', mouseUp)
        }

        document.addEventListener('mousemove', drag)
        document.addEventListener('mouseup', mouseUp)
    }

    function resizePopup(event: MouseEvent<HTMLDivElement>) {
        const popup = popupRef.current
        if (!popup) return
        event.preventDefault()

        const rect = pinPopup(popup)
        const startX = event.clientX
        const startY = event.clientY
        const startW = rect.width
        const startH = rect.height
        blockPageSelection()

        const drag = (moveEvent: globalThis.MouseEvent) => {
            moveEvent.preventDefault()
            popup.style.width = `${Math.max(MIN_WIDTH, startW + moveEvent.clientX - startX)}px`
            /*if(parseInt(popup.style.height) >= MAX_HEIGHT - 200){
                popup.style.height = `${MAX_HEIGHT - 200}px`
            }else{*/
                popup.style.height = `${Math.max(MIN_HEIGHT, startH + moveEvent.clientY - startY)}px`
            //}
        }

        const mouseUp = () => {
            restorePageSelection()
            document.removeEventListener('mousemove', drag)
            document.removeEventListener('mouseup', mouseUp)
        }

        document.addEventListener('mousemove', drag)
        document.addEventListener('mouseup', mouseUp)
    }

    return (
        <div
            ref={popupRef}
            className={['popup', className, isActive ? 'is-active' : ''].filter(Boolean).join(' ')}
            style={{
                zIndex,
                left: pos.left,
                top: pos.top,
                transform: pinned ? 'none' : undefined,
            }}
            onMouseDown={(event) => {
                event.stopPropagation()
                bringToFront()
            }}
        >   
            <div className="margin4"></div>
            <div className="margin3"></div>
            <div className="margin2"></div>
            <div className="margin1"></div>
            
            {children}
            
            <div
                className="corner"
                onMouseDown={(event) => {
                    event.stopPropagation()
                    bringToFront()
                    resizePopup(event)
                }}
            />

            <div 
                className="popup-header"
                onMouseDown={(event) => {
                    event.stopPropagation()
                    dragPopup(event)
                    bringToFront()
                }}
            >
                <h2 className="popup-header-title w95fa-font">{title}</h2>
            </div>
            
            <div className="close-popup-group button">
                <div className="button-margin4"></div>
                <div className="button-margin3"></div>
                <div className="button-margin2"></div>
                <div className="button-margin1"></div>
                {closePopup}
            </div>
        </div>
    )
}
