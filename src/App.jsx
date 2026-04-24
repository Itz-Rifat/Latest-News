
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <>
      {/* App component - routing handled in main.jsx */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
