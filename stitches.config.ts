// import type * as Stitches from '@stitches/react'
import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    fonts: {
      main: 'ClashGrotesk-Variable',
      display: 'Mago',

      websafe: `-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif`,
    },
    colors: {
      bg: '#d4d6d4',
      textColor: '#2d2d2d',
      textColorDark: '#2e2e2e',
      alertBg: '#DEDEDE',
    },
  },
  media: {
    ['mobile-small']: '(max-width: 300px)',
    mobile: '(max-width: 500px)',
    tablet: '(max-width: 768px)',
    laptop: '(max-width: 1024px)',
    desktop: '(max-width: 1200px)',
    tv: '(min-width: 1201px)',
  },
})

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    cursor: 'url("img/cursor.png"), auto',
  },
  'html, body, #__next': {
    width: '100%',
    minHeight: '100vh',
    height: 'fit-content',

    fontSize: '62.5%',
    fontFamily: '$main',
    fontWeight: 400,

    overflowX: 'hidden',

    // cursor: 'url("img/cursor.png"), auto',

    '@laptop': {
      fontSize: '58%',
    },
    '@tablet': {
      fontSize: '54%',
    },
    '@mobile': {
      fontSize: '48%',
    },
    '@mobile-small': {
      fontSize: '42%',
    },
  },
  html: {
    backgroundColor: '$bg',
  },
  body: {
    margin: '0 auto',
    fontFamily: '$display',
    lineHeight: '20px',
  },
  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
  button: {
    border: 'none',
  },
  input: {
    border: 'none',
    outline: 'none',
  },
  '@font-face': {
    fontFamily: 'Mago',
    src: `url('/fonts/mago2.woff2') format('woff2')`,
    fontDisplay: 'optional',
    fontStyle: 'normal',
  },
})
