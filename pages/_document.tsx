import React from 'react'
// eslint-disable-next-line @next/next/no-document-import-in-page
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '@/stitches.config'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='preload'
            href='/fonts/Monofett-Regular.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />

          <link
            rel='preload'
            href='/fonts/mago2.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />

          <style
            id='stitches'
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
