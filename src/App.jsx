import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'
function App() {
  
const bottlePromise = fetch('./bottles.json').then(res => res.json())
  return (
    <>
      <h1>Bye Awsome Water Bottles</h1>
      <Suspense fallback = {<h2>Bottles Loading....</h2>}>
          <Bottles bottlePromise ={bottlePromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App
