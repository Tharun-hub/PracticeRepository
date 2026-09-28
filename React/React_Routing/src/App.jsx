/* import {Fragment} from 'react' */
import { Route, Routes } from 'react-router'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import NotFound from './components/NotFound'
import BlogItemDetails from './components/BLogItemDetails'
import BottomIcon from './components/BottomIcon'

{/* <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  </BrowserRouter> */}

  
const App = () => (
  
  <>
  <Header />
  <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/blogs/:id'element={<BlogItemDetails />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    <BottomIcon />
  </>
  
)

export default App
