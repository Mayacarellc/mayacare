import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

export function useMobileOptimizations() {
  const isMobile = useIsMobile()
  
  const mobileAnimationConfig = React.useMemo(() => ({
    transition: {
      duration: isMobile ? 0.15 : 0.3,
      ease: "easeInOut"
    },
    spring: {
      stiffness: isMobile ? 400 : 300,
      damping: isMobile ? 35 : 30
    }
  }), [isMobile])

  const mobileButtonProps = React.useMemo(() => ({
    whileHover: isMobile ? {} : { scale: 1.01 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.1 }
  }), [isMobile])

  return {
    isMobile,
    animationConfig: mobileAnimationConfig,
    buttonProps: mobileButtonProps
  }
}
