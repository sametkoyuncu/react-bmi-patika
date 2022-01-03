import { createContext, useContext, useEffect, useState } from 'react'

const BmiContext = createContext()

export const BmiProvider = ({ children }) => {
  const [username, setUsername] = useState(
    localStorage.getItem('username') || 'Ziyaretçi'
  )
  const [bmi, setBmi] = useState(localStorage.getItem('bmi') || null) // vücut kitle endeksi

  useEffect(() => {
    localStorage.setItem('username', username)
    localStorage.setItem('bmi', bmi)
  }, [username, bmi])
  const values = {
    username,
    setUsername,
    bmi,
    setBmi,
  }
  return <BmiContext.Provider value={values}>{children}</BmiContext.Provider>
}

export const useBmi = () => useContext(BmiContext)
