import styles from "./App.module.css"
import Navbar from "./components/navbar/navbar"

function App() {
  
  return (
    <div>
      <Navbar />
      <h1 className={styles.titulo}>Bienvenido a HUELLAS</h1>
    </div>
  )
}

export default App;
