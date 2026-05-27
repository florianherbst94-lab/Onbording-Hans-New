"use client"

import React, { useRef, useState, useCallback, useEffect } from "react"
import SignatureCanvas from "react-signature-canvas"
import { Button } from "./Button"
import styles from "./SignaturePad.module.css"

interface SignaturePadProps {
  onSign: (dataUrl: string) => void
}

export function SignaturePad({ onSign }: SignaturePadProps) {
  const sigCanvas = useRef<SignatureCanvas>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [isEmpty, setIsEmpty] = useState(true)
  const isDrawingRef = useRef(false)
  const hasInitializedRef = useRef(false)

  const clear = () => {
    sigCanvas.current?.clear()
    setIsEmpty(true)
  }

  const save = () => {
    if (sigCanvas.current?.isEmpty()) {
      return
    }
    const dataUrl = sigCanvas.current?.getTrimmedCanvas().toDataURL("image/png")
    if (dataUrl) {
      onSign(dataUrl)
    }
  }

  const handleBegin = () => {
    isDrawingRef.current = true
    setIsEmpty(false)
  }

  const handleEnd = () => {
    isDrawingRef.current = false
  }

  // Resize the canvas to match the wrapper dimensions.
  // Only runs once on mount and avoids clearing while drawing.
  const resizeCanvas = useCallback(() => {
    const canvas = sigCanvas.current?.getCanvas()
    const wrapper = wrapperRef.current
    if (!canvas || !wrapper) return

    // Never resize while the user is actively drawing
    if (isDrawingRef.current) return

    const wrapperWidth = wrapper.offsetWidth
    const wrapperHeight = wrapper.offsetHeight

    if (wrapperWidth <= 0 || wrapperHeight <= 0) return

    const ratio = Math.max(window.devicePixelRatio || 1, 1)
    const targetWidth = wrapperWidth * ratio
    const targetHeight = wrapperHeight * ratio

    // Skip if dimensions haven't actually changed
    if (canvas.width === targetWidth && canvas.height === targetHeight) return

    canvas.width = targetWidth
    canvas.height = targetHeight
    canvas.getContext("2d")?.scale(ratio, ratio)
    sigCanvas.current?.clear()
  }, [])

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    // Small delay to ensure layout is stable before first measurement
    const initTimeout = setTimeout(() => {
      resizeCanvas()
      hasInitializedRef.current = true
    }, 100)

    // Only observe for resize after initialization, to handle orientation changes
    const observer = new ResizeObserver(() => {
      if (hasInitializedRef.current && !isDrawingRef.current) {
        resizeCanvas()
      }
    })

    observer.observe(wrapper)

    return () => {
      clearTimeout(initTimeout)
      observer.disconnect()
    }
  }, [resizeCanvas])

  return (
    <div className={styles.container}>
      <div className={styles.canvasWrapper} ref={wrapperRef}>
        <SignatureCanvas
          ref={sigCanvas}
          penColor="black"
          canvasProps={{ className: styles.sigCanvas }}
          onBegin={handleBegin}
          onEnd={handleEnd}
        />
      </div>
      <div className={styles.actions}>
        <Button type="button" variant="outline" onClick={clear}>Löschen</Button>
        <Button type="button" onClick={save} disabled={isEmpty}>Unterschrift bestätigen</Button>
      </div>
    </div>
  )
}
