import { useEffect, useRef, type ReactNode } from 'react'
import './gridBg.css'

type GridBgProps = {
    color?: string
    cellSize?: number
    cellGap?: number
    children?: ReactNode
    className?: string
    random?: boolean
}

const randomColors = [
    '#171717',
    '#120000',
    '#120a00',
    '#121200',
    '#001200',
    '#001212',
    '#000012',
    '#120012'
]

export function GridBg({
    color = '#171717',
    cellSize = 8,
    cellGap = 2,
    children,
    className,
    random
}: GridBgProps) {
    const wrapRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const wrap = wrapRef.current
        const canvas = canvasRef.current
        if (!wrap || !canvas) return

        const ctx = canvas.getContext('2d', { alpha: true })
        if (!ctx) return

        const wrapEl: HTMLDivElement = wrap
        const canvasEl: HTMLCanvasElement = canvas
        const context: CanvasRenderingContext2D = ctx

        const dpr = window.devicePixelRatio || 1

        function draw() {
            const CELL_SIZE = window.innerWidth < 768 ? 3 : cellSize
            const CELL_GAP = window.innerWidth < 768 ? 1 : cellGap
            const CELL_STEP = CELL_SIZE + CELL_GAP
            const width = wrapEl.clientWidth
            const height = wrapEl.clientHeight
            const cols = Math.floor(width / CELL_STEP)
            const rows = Math.floor(height / CELL_STEP)

            canvasEl.width = width * dpr
            canvasEl.height = height * dpr
            context.setTransform(dpr, 0, 0, dpr, 0, 0)
            context.clearRect(0, 0, width, height)
            if(!random){
                context.fillStyle = color
            }

            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    context.fillRect(col * CELL_STEP, row * CELL_STEP, CELL_SIZE, CELL_SIZE)
                    if(random){
                        context.fillStyle = randomColors[Math.floor(Math.random() * randomColors.length)]
                    }
                }
            }
        }

        draw()

        const observer = new ResizeObserver(draw)
        observer.observe(wrapEl)
        window.addEventListener('resize', draw)

        return () => {
            observer.disconnect()
            window.removeEventListener('resize', draw)
        }
    }, [color, cellSize, cellGap])

    return (
        <div ref={wrapRef} className={`grid-bg${className ? ` ${className}` : ''}`}>
            <canvas ref={canvasRef} className="grid-bg-canvas"></canvas>
            <div className="grid-bg-content">{children}</div>
        </div>
    )
}
