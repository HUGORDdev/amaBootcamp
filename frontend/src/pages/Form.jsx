import React, { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PatientForm from './PatientForm'
import ResultView from './ResultView'

const Form = () => {
  // const [Result,setResult] = useState(null);
  let  Result = null;

  const UpdateResults = (data)=>{

    Result = data
  }

  return (
    <div className="min-h-screen bg-blue-50/30  font-sans">
      <Nav routeFocus={2} />

      <div className='mt-20' >

        {Result ? (
          <ResultView
            data={Result}
            onReset={() => {
              setResult(null);
            }}
          />
        ) : (
          <PatientForm Update={UpdateResults} />
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Form