import React from 'react'
import Navbar from './component/Navbar'
import Card1 from './component/Card1'
import Card2 from './component/Card2'
import Card3 from './component/Card3'
import Footer from './component/Footer'

const App = () => {
  return (
    <div className='container-fluid'>
      <div className='row'style={{background:"lightgray"}}>
        <div>
          <Navbar />
        </div>
        <h1 className='text-center text-bold mt-4' >Inline Css</h1>
        <div className='row mt-5 mb-5'>
          <div className='col-md-4'>
            <Card1 />
          </div>
          <div className='col-md-4'>
            <Card2 />
          </div>
          <div className='col-md-4'>
            <Card3 />
          </div>

          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
