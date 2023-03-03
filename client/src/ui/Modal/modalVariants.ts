import { Variants } from 'framer-motion'

const defaultTransition = {
  duration: 0.4,
  type: 'tween',
  ease: 'easeInOut'
}

const defaultOptionsVisible = { opacity: 1, transition: defaultTransition }
const defaultOptionsExit = { opacity: 0, transition: defaultTransition }

export const left: Variants  = {
  hidden: {
    x: '-100vw',
    opacity: 0,
  },
  visible: {
    ...defaultOptionsVisible,
    x: '0',
  },
  exit: {
    ...defaultOptionsExit,
    x: '-100vw',
  },
}

export const right: Variants  = {
  hidden: {
    x: '100vw',
    opacity: 0,
    right: 0,
  },
  visible: {
    ...defaultOptionsVisible,
    x: '0',
  },
  exit: {
    ...defaultOptionsExit,
    x: '100vw',
    right: 0,
  },
}

export const center: Variants  = {
  hidden: {
    y: '-100vh',
    x: '-50%',
    opacity: 0,
    top: '50%',
    left: '50%',
  },
  visible: {
    ...defaultOptionsVisible,
    y: '-50%',
    x: '-50%',
  },
  exit: {
    ...defaultOptionsExit,
    y: '100vh',
  },
}
