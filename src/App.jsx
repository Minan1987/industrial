import React from 'react'
import { TopHeader, Menu, Slider, Footer, ContactUs, AboutUs, News, Services, Shop, Projects, HomeServices, Features, ClientsContact, SearchResult, BlueContactSection } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
    <BrowserRouter basename='industrial'>
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
        <Route path="/search" element={<SearchResult />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}


export default App
