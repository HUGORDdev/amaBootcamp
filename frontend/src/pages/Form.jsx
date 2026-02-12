import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PatientForm from './PatientForm'

const Form = () => {

  
  return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/30 to-emerald-50/20 font-sans">
          <Nav routeFocus={2} />

          <div className='mt-20' >
            <PatientForm/>
          </div>
          <Footer/>
          </div>
  )
}

export default Form