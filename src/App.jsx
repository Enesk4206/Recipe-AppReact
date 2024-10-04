import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import FavoritesPage from "./pages/FavoritesPage"
import Sidebar from "./components/Sidebar"


function App() {
  

  return (
    <div className="flex">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/favorites" element={<FavoritesPage/>}/>
      </Routes>
    </div>
  )
}

export default App
