import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-fixed dark:from-dark-500 dark:to-dark-700 dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
