
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import StyledComponentsRegistry from '@/components/registry';


const font = IBM_Plex_Sans({
  weight: '200',
  subsets: ['latin']
})

export const metadata = {
  openGraph: {
    title: 'Alex Jung Portfolio',
    description: '프론트엔드 개발자가 되고 싶습니다!',
    url: 'https://alexjung-portfolio.vercel.app/',
    image: 'https://alexjung-portfolio.vercel.app/about1.png',
  },

}
export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <title>Alex Jung Portfolio</title>
      <meta property="og:title" content="정성헌의 포트폴리오" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://alexjung-portfolio.vercel.app/" />
      <meta property="og:article:author" content="프론트엔드 개발자 포트폴리오" />
      <meta property="og:image" content='https://alexjung-portfolio.vercel.app/about1.png' />
      <meta name="description" content="프론트엔드 개발자가 되고 싶습니다!" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <body className={font.className}>
        <Header />
        <StyledComponentsRegistry>
          <div>
            {children}
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
