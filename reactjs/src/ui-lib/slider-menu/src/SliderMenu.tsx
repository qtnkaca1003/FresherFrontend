import { Box, BoxProps, Portal } from "@chakra-ui/react"
import { a, useSpring } from "@react-spring/web"
import { useGesture } from "@use-gesture/react"
import React, { useEffect, useRef, useState } from "react"

const MaxWidth = 400

interface Props extends BoxProps {
  open: boolean
  onClose: Function
}

export const SliderMenu: React.FC<Props> = ({
  children,
  open,
  onClose,
  width = "85%",
  ...rest
}) => {
  const ref = useRef<HTMLDivElement & { openState: boolean }>(null)
  const [xMax, setxMax] = useState(MaxWidth)
  const [active, setActive] = useState(false)

  const [{ x }, api] = useSpring(() => ({
    x: -xMax,
  }))

  useEffect(() => {
    setActive(open)
    api.start({ x: open ? 0 : -xMax })
    if (ref.current) {
      ref.current.openState = open
    }
  }, [open])

  useEffect(() => {
    const updateMenuWidth = () => {
      const xW = ref.current?.offsetWidth ?? MaxWidth
      setxMax(xW)
      api.start({ x: ref.current?.openState ? 0 : -xW })
    }
    updateMenuWidth()
    window.addEventListener("resize", updateMenuWidth)

    return () => {
      window.removeEventListener("resize", updateMenuWidth)
    }
  }, [])

  const closeMenu = () => {
    onClose()
  }

  const bind = useGesture({
    onDrag: ({ movement: [mx] }) => {
      api.start({ x: mx < 0 ? mx : 0 })
    },
    onDragEnd: ({ movement: [mx] }) => {
      const isActive = Math.abs(mx) < xMax / 2
      api.start({ x: isActive ? 0 : -xMax })
      if (!isActive) closeMenu()
    },
  })

  const hanlderClose = () => {
    api.start({ x: -xMax })
    closeMenu()
  }

  return (
    <Portal>
      <Box height="100vh" {...rest}>
        <a.div
          {...bind()}
          style={{
            x,
            maxWidth: MaxWidth,
            width: width as string,
            height: "100%",
            top: 0,
            left: 0,
            zIndex: 3,
            position: "absolute",
            backgroundColor: "#fff",
            pointerEvents: active ? "unset" : "none",
            touchAction: "pan-y",
          }}
          ref={ref}
        >
          {children}
        </a.div>
        <a.div
          aria-label="overlay"
          style={{
            position: "absolute",
            backgroundColor: "#000",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            opacity: x.to([-xMax, 0], [0, 0.5], "clamp"),
            pointerEvents: active ? "unset" : "none",
          }}
          onClick={hanlderClose}
        />
      </Box>
    </Portal>
  )
}
