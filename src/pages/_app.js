import '@/styles/globals.css'
import Footer from '@/components/footer'

export default function App({ Component, pageProps }) {
  return (
    <>
    <div style={{
      backgroundColor: '#f0f3f5',
      display: 'flex',
      flexDirection: 'column',
      width: '65%', // adjust this to control the width of the content
      minHeight: '100vh',
      marginLeft: 'auto',
      marginRight: 'auto',
      border: '1px solid #ccc',
    }}>
      <Component {...pageProps} />
    </div>
    <Footer />
    </>
  )
}