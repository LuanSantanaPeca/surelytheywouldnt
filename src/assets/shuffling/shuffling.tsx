import { useEffect, useRef } from 'react'
import './shufflingTitle.css'

const SPECIAL_CHARS = [...'!@£$%&}{":;?><][+=-_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz']

class Title {
    idx = 0
    frame = 0
    intersecting = false
    originalString: string
    spans: HTMLSpanElement[] = []
    rafId: number | null = null
    hoverRafIds = new Map<HTMLSpanElement, number>()
    element: HTMLElement
    isAnimating = false

    constructor(element: HTMLElement) {
        this.element = element
        this.originalString = element.innerText
        this.createSpans()
    }

    createSpans() {
        let innerHtml = ''
        for (let i = 0; i < this.originalString.length; i++) {
            innerHtml += `<span>${this.originalString[i]}</span>`
        }
        this.element.innerHTML = innerHtml
        this.spans = [...this.element.querySelectorAll('span')]
    }

    animate() {
        if (this.idx !== this.originalString.length && this.intersecting) {
            this.isAnimating = true
            const span = this.spans[this.idx]
            span.style.opacity = '1'
            span.style.transform = 'translateX(0)'
            if (this.frame % 3 === 0 && span.innerText !== ' ') {
                span.innerText = SPECIAL_CHARS[Math.floor(Math.random() * SPECIAL_CHARS.length)]
            }
            if (this.frame % 36 === 0 && this.frame !== 0) {
                span.innerText = this.originalString[this.idx]
                this.idx++
            }
            this.frame++
            this.rafId = requestAnimationFrame(() => this.animate())
            return
        }
        this.isAnimating = false
    }

    cancelHover(spans: HTMLSpanElement[]) {
        spans.forEach((span) => {
            const id = this.hoverRafIds.get(span)
            if (id !== undefined) {
                cancelAnimationFrame(id)
                this.hoverRafIds.delete(span)
            }
        })
    }
    cancelHoverLetter(span: HTMLSpanElement) {
        const id = this.hoverRafIds.get(span)
        if (id !== undefined) {
            cancelAnimationFrame(id)
            this.hoverRafIds.delete(span)
        }
    }

    reset() {
        if (this.rafId !== null) {
            cancelAnimationFrame(this.rafId)
            this.rafId = null
        }
        this.hoverRafIds.forEach((id) => cancelAnimationFrame(id))
        this.hoverRafIds.clear()
        this.idx = 0
        this.frame = 0
        this.intersecting = false
        this.isAnimating = false
        this.spans.forEach((span) => {
            span.style.opacity = '0'
            span.style.transform = 'translateX(-20px)'
        })
    }

    hoverWhole() {
        if (this.isAnimating) return
        this.spans.forEach((span, i) => {
            const originalChar = this.originalString[i] ?? ''
            const HOVER_FRAMES = 300

            const stop = () => {
                this.cancelHover(this.spans)
                for(let i=0; i<this.spans.length; i++){
                    this.spans[i].textContent = this.originalString[i] ?? ''
                }
                this.hoverRafIds.clear()
            }

            const scramble = (frame: number) => {
                if (frame >= HOVER_FRAMES) {
                    this.hoverRafIds.delete(span)
                    return
                }
                if (originalChar !== ' ' && frame % 3 === 0) {
                    this.spans[Math.floor(Math.random() * this.spans.length)].textContent = SPECIAL_CHARS[Math.floor(Math.random() * SPECIAL_CHARS.length)]
                }
                const id = requestAnimationFrame(() => scramble(frame + 1))
                this.hoverRafIds.set(span, id)
            }

            span.addEventListener('mouseover', () => {
                this.cancelHover(this.spans)
                scramble(0)
            })
            span.addEventListener('mouseout', stop)
        })
    }

    hoverLetter() {
        if (this.isAnimating) return
        this.spans.forEach((span, i) => {
            const originalChar = this.originalString[i] ?? ''
            const HOVER_FRAMES = 300

            const stop = () => {
                this.cancelHoverLetter(span)
                span.textContent = originalChar
            }

            const scramble = (frame: number) => {
                if (frame >= HOVER_FRAMES) {
                    this.hoverRafIds.delete(span)
                    return
                }
                if (originalChar !== ' ' && frame % 5 === 0) {
                    span.textContent = SPECIAL_CHARS[Math.floor(Math.random() * SPECIAL_CHARS.length)]
                }
                const id = requestAnimationFrame(() => scramble(frame + 1))
                this.hoverRafIds.set(span, id)
            }

            span.addEventListener('mouseover', () => {
                this.cancelHoverLetter(span)
                scramble(0)
            })
            span.addEventListener('mouseout', stop)
        })
    }
}

export function ShufflingTitleEnterOnly({ title, rootMargin, threshold }: { title: string, rootMargin: string, threshold: number }) {
    const headingRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        const element = headingRef.current
        if (!element) return

        const instance = new Title(element)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    instance.intersecting = true
                    instance.animate()
                } /*else {
                    instance.reset()
                }*/
            })
        }, {
            rootMargin: rootMargin,
            threshold: threshold,
        })

        observer.observe(element)
        element.style.opacity = '1'

        return () => {
            observer.disconnect()
            instance.reset()
        }
    }, [title])

    return (
        <h1 ref={headingRef}>{title}</h1>
    )
}

export function ShufflingTitleHoverLetter({ title, rootMargin, threshold }: { title: string, rootMargin: string, threshold: number }) {
    const headingRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        const element = headingRef.current
        if (!element) return

        const instance = new Title(element)
        instance.hoverLetter()
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    instance.intersecting = true
                    instance.animate()
                } /*else {
                    instance.reset()
                }*/
            })
        }, {
            rootMargin: rootMargin,
            threshold: threshold,
        })

        observer.observe(element)
        element.style.opacity = '1'

        return () => {
            observer.disconnect()
            instance.reset()
        }
    }, [title])

    return (
        <h1 ref={headingRef}>{title}</h1>
    )
}


export function ShufflingTitleHoverWhole({ title, rootMargin, threshold }: { title: string, rootMargin: string, threshold: number }) {
    const headingRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        const element = headingRef.current
        if (!element) return

        const instance = new Title(element)
        instance.hoverWhole()
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    instance.intersecting = true
                    instance.animate()
                } /*else {
                    instance.reset()
                }*/
            })
        }, {
            rootMargin: rootMargin,
            threshold: threshold,
        })

        observer.observe(element)
        element.style.opacity = '1'

        return () => {
            observer.disconnect()
            instance.reset()
        }
    }, [title])

    return (
        <h1 ref={headingRef}>{title}</h1>
    )
}