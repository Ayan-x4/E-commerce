import React, { createContext ,useState } from 'react'
export const Themecontext = createContext()

const Contextuse = ({children}) => {
  const [logo,setlogo] = useState(false)
  const  [theme,settheme] = useState()
  const value= {theme,settheme,logo,setlogo}
  return (
    <Themecontext.Provider value = {value}>
      {children}
    </Themecontext.Provider>
  )
}

export default Contextuse
