import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './layouts/main/main'
import Footer from './layouts/footer/footer'


function App() {

  return (
    <>
    <BrowserRouter>
        <Main></Main>
        <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
