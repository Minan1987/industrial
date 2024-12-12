import React from 'react'
import { TopHeader, Menu, Slider, Footer, ContactUs, AboutUs, News, Services,Shop, Projects } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeServices from './components/HomeServices'
import Features from './components/Features'
import ClientsContact from './ClientsContact'
import BlueContactSection from './components/BlueContactSection'

const HomePage = () => {
  return (
    <>
      <Slider />
      <HomeServices />
      <Features />
      <ClientsContact />
      <BlueContactSection />
    </>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <TopHeader />
        <Menu />
      </header>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/news' element={<News />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}


export default App
