import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'
import ContactPage from './pages/ContactPage'
import TechStackPage from './pages/TechStackPage'
import BlogsPage from './pages/BlogsPage'
import Article from './pages/Article'


const App = () => {
  const theme = useSelector((state) => state.theme.value)
  return (
    <div className={`${theme ? "bg-[#18191b] text-[#d6d7e1]" : "bg-[#d6d7e1] text-[#18191b]"} min-h-screen md:min-h-[99.9vh] `}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<ProjectPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/techstack' element={<TechStackPage />} />
          <Route path='/blogs' element={<BlogsPage />} />
          <Route path='/article/:slug' element={<Article />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App