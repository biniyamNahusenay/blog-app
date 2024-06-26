import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Search from "./pages/Search"
import Projects from "./pages/Projects"
import Dashboard from "./pages/Dashboard"
import CreatePost from "./pages/CreatePost"
import UpdatePost from './pages/UpdatePost';
import Header from "./components/Header"
import FooterComp from "./components/Footer"
import PrivateRoute from "./components/PrivateRoute"
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute"
import PostPage from './pages/PostPage';
import ScrollToTop from "./components/ScrollToTop"

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
     <Header/>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/signin" element={<Signin/>}/>
         <Route path="/search" element={<Search/>}/>
         <Route path="/projects" element={<Projects/>}/>
         <Route path='/post/:postSlug' element={<PostPage />} />
         <Route element={<PrivateRoute/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
         </Route>
         <Route element={<OnlyAdminPrivateRoute/>}>
          <Route path="/create-post" element={<CreatePost/>}/>
          <Route path='/updatepost/:postId' element={<UpdatePost />} />
         </Route>
      </Routes>
      <FooterComp/>
    </BrowserRouter>
  )
}
