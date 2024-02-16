import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  let [arr, setArr] = useState([])

  useEffect(() => {
    axios.get('/stuff')
    .then((response) => {
      console.log(response.data)
      setArr(response.data)
    })
  }, [])

  return (
    <>
      hi mom
      {
        arr.map((thingObj) => {
          return <p>{thingObj.name}</p>
        })
      }
    </>
  )
}

export default App
