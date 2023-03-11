import React,{ useContext, useState } from 'react'

const AppContext = React.createContext()



const AppProvider = ({children}) => {

  const divList = [
    {
      id: "red",
      title: "Faith",
      class: "circle div cl1"
    },
    {
      id: "bisque",
      title: "Social",
      class: "circle div cl2"
    },
    {
      id: "brown",
      title: "Body",
      class: "circle div cl3"
    },
    {
      id: "blueviolet",
      title: "Mind",
      class: "circle div cl4"
    },
    {
      id: "cadetblue",
      title: "Soul",
      class: "circle div cl5"
    },
    {
      id: "cornflowerblue",
      title: "Hello",
      class: "circle div cl6"
    },
    {
      id: "crimson",
      title: "Hello",
      class: "circle div cl7"
    }
  ]

  const [color, setColor] = useState('white')
  const [name, setName] = useState("")

  return (
    <AppContext.Provider value={{color, setColor, divList, name, setName}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export default AppProvider