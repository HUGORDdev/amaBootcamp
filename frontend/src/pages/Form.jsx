import React, { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PatientForm from './PatientForm'
import ResultView from './ResultView'

const Form = () => {
  const [result, setResult] = useState(null);

  const UpdateResults = (data) => {
    setResult(data);
  }

  return (
    <div className="min-h-screen bg-blue-50/30  font-sans">
      <Nav routeFocus={2} />

      <div className='mt-20' >

        {result ? (
          <ResultView
            data={result}
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