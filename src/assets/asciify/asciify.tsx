import { useEffect, useRef } from 'react'
import './asciify.css'

export function AsciifyLogoPhysics({imagePath}: {imagePath: string}){
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const logoImgRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d", {alpha: true})
        if (!ctx) return

        const canvasEl: HTMLCanvasElement = canvas
        const context: CanvasRenderingContext2D = ctx

        let CELL_SIZE = 8
        let CELL_GAP = 2
        let CELL_STEP = CELL_SIZE + CELL_GAP
        const GRID_COLOR = '#171717'
        const CHAR_COLOR = "#dadada"
        const ASCII_CHARS = " .:+*SURELYTHEYWOULDNT"
        const THRESHOLD = 0.5
        const PUSH_RADIUS = 5.5
        const PUSH_FORCE = 10
        const SPRING = 0.1
        const DAMPING = 0.5
        const dpr = window.devicePixelRatio || 1

        let cols = 0, rows = 0, cells: unknown[] = []

        function setupCanvas(){
            CELL_SIZE = window.innerWidth < 768 ? 3 : 8
            CELL_GAP = window.innerWidth < 768 ? 1 : 2
            CELL_STEP = CELL_SIZE + CELL_GAP
            cols = Math.floor(window.innerWidth / CELL_STEP)
            rows = Math.floor(window.innerHeight / CELL_STEP)
            canvasEl.width = window.innerWidth / dpr
            canvasEl.height = window.innerHeight / dpr
            context.setTransform(dpr, 0, 0, dpr, 0, 0)
        }

        function drawGrid(){
            context.clearRect(0, 0, window.innerWidth, window.innerHeight)
            context.fillStyle = GRID_COLOR
            for(let row=0; row<rows; row++){
                for(let col=0; col<cols; col++){
                    ctx?.fillRect(col*CELL_STEP, row*CELL_STEP, CELL_SIZE, CELL_SIZE)
                }
            }
        }

        setupCanvas()
        drawGrid()

        function sampleLogoIntoCells(){
            const logoImg = logoImgRef.current
            if (!logoImg) return
            const rect = logoImg.getBoundingClientRect()
            const logoCols = Math.ceil(rect.width / CELL_STEP)
            const logoRows = Math.ceil(rect.height / CELL_STEP)
            const startCol = Math.floor(rect.left / CELL_STEP)
            const startRow = Math.floor(rect.top / CELL_STEP)

            const sampleCanvas = document.createElement('canvas')
            if(!sampleCanvas) return
            sampleCanvas.width = logoCols
            sampleCanvas.height = logoRows
            const sampleCtx = sampleCanvas.getContext("2d")
            if(!sampleCtx) return
            sampleCtx.fillStyle = "#000"
            sampleCtx.fillRect(0, 0, logoCols, logoRows)
            sampleCtx.drawImage(logoImg, 0, 0, logoCols, logoRows)
            const { data } = sampleCtx.getImageData(0, 0, logoCols, logoRows)

            cells = []
            for(let row=0; row<rows; row++){
                for(let col=0; col<cols; col++){
                    const inLogo =
                        col >= startCol &&
                        col < startCol + logoCols &&
                        row >= startRow &&
                        row < startRow + logoRows
                    let isLit = false, char = " "
                    if(inLogo){
                        const idx = ((row - startRow) * logoCols + (col - startCol)) * 4
                        const brightness = (data[idx] * 0.299 + data[idx + 1] * 0.587 + data[idx + 2] * 0.114) / 255
                        isLit = brightness > THRESHOLD
                        char = isLit ? 
                            ASCII_CHARS[
                                Math.min(
                                    ASCII_CHARS.length - 1,
                                    Math.floor(brightness * ASCII_CHARS.length),
                                )
                            ]
                            : " "
                    }
                    cells.push({
                        col,
                        row,
                        char,
                        isLit,
                        offsetX: 0,
                        offsetY: 0,
                        velX: 0,
                        velY: 0,
                    })
                }
            }
        }

        function renderFrame(){
            if(!ctx) return
            ctx.font = `${CELL_SIZE + 2}px monospace`
            ctx.textBaseline = "top"
            ctx.textAlign = "center"
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

            ctx.fillStyle = GRID_COLOR
            for(const cell of cells as {col: number, row: number}[]){
                ctx.fillRect(cell.col * CELL_STEP, cell.row * CELL_STEP, CELL_SIZE, CELL_SIZE)
            }

            ctx.fillStyle = CHAR_COLOR
            for(const cell of cells as {col: number, row: number, char: string, isLit: boolean, offsetX: number, offsetY: number, velX: number, velY: number}[]){
                if(!cell.isLit) continue
                const x = (cell.col + Math.round(cell.offsetX)) * CELL_STEP
                const y = (cell.row + Math.round(cell.offsetY)) * CELL_STEP
                ctx.fillText(cell.char, x + CELL_SIZE / 2, y)
            }
        }

        function init(){
            setupCanvas()
            sampleLogoIntoCells()
            renderFrame()
        }

        window.addEventListener('resize', init)
        logoImgRef.current?.complete ? init() : logoImgRef.current?.addEventListener('load', init)

        setInterval(() => {
            for (const cell of cells as {col: number, row: number, char: string, isLit: boolean, offsetX: number, offsetY: number, velX: number, velY: number}[]){
                if(cell.isLit){
                    cell.char = ASCII_CHARS[Math.floor(Math.random() * ASCII_CHARS.length)]
                }
            }
            renderFrame()
        }, 200)

        let mouse = { col: -999, row: -999, isMoving: false }
        let idleTimer = null as unknown

        function updatePhysics(){
            for(const cell of cells as {col: number, row: number, char: string, isLit: boolean, offsetX: number, offsetY: number, velX: number, velY: number}[]){
                if (!cell.isLit) continue
                if(mouse.isMoving){
                    const dx = cell.col + cell.offsetX - mouse.col
                    const dy = cell.row + cell.offsetY - mouse.row
                    const dist = Math.sqrt(dx * dx + dy * dy)
                    if (dist < PUSH_RADIUS && dist > 0){
                        const force = (1 - dist / PUSH_RADIUS) ** 2 * PUSH_FORCE
                        cell.velX += (dx / dist) * force
                        cell.velY += (dy / dist) * force
                    }
                }
                cell.velX += -cell.offsetX * SPRING
                cell.velY += -cell.offsetY * SPRING
                cell.velX *= DAMPING
                cell.velY *= DAMPING
                cell.offsetX += cell.velX
                cell.offsetY += cell.velY
                if(Math.abs(cell.offsetX) < 0.01 && Math.abs(cell.velX) < 0.01){
                    cell.offsetX = cell.velX = 0
                }
                if(Math.abs(cell.offsetY) < 0.01 && Math.abs(cell.velY) < 0.01){
                    cell.offsetY = cell.velY = 0
                }
            }
        }

        function animationLoop(){
            updatePhysics()
            renderFrame()
            requestAnimationFrame(animationLoop)
        }

        window.addEventListener('mousemove', (e) => {
            mouse.col = e.clientX / CELL_STEP
            mouse.row = e.clientY / CELL_STEP
            mouse.isMoving = true
            clearTimeout(idleTimer as unknown as number)
            idleTimer = setTimeout(() => {
                mouse.isMoving = false
            }, 50)
        })

        window.addEventListener('mouseleave', () => {
            mouse.col = mouse.row = -999
            mouse.isMoving = false
        })

        animationLoop()

        return () => window.removeEventListener('resize', init)
    }, [])

    return(
        <section className="hero">
            <canvas ref={canvasRef}></canvas>

            <div className="logo">
                <img ref={logoImgRef} src={imagePath} id="source" />
            </div>
        </section>
    )
}
