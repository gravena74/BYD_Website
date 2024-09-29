import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import NavBar from './nav.jsx'
import UpdateSection from './UpdatesSection.jsx'
import './index.css'
import SectionInfo from './sectionInfo.jsx'
import Footer from './footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <App />
    <UpdateSection />
    <SectionInfo />
    <Footer />
  </StrictMode>,
)
