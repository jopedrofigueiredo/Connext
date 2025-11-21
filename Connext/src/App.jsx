import Header from './components/Header'
import Feed from './components/Feed'
import Footer from './components/Footer'
import { ThemeProvider } from "@/components/theme-provider"


function App() {

  return (
    <>
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Feed />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
