import { HashRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { LessonPage } from './pages/LessonPage'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episode/:slug" element={<LessonPage />} />
      </Routes>
    </HashRouter>
  )
}
