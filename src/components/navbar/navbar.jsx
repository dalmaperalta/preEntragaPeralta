import Button from "./button/button"
import styles from "./navbar.module.css"
import IconButton from "@mui/material/IconButton"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import PetsIcon from "@mui/icons-material/Pets"
import Tooltip from "@mui/material/Tooltip"

const navbar = () => {
  return (
       <nav className={styles.container}>
        <Tooltip title="HUELLAS">
         <a className={styles.logo} href="#"><PetsIcon fontSize="large" ></PetsIcon></a>
        </Tooltip >

        <div className={styles.lis}>
        <Button txtBtn="Inicio" />
        <Button txtBtn="Tienda" />
        <Button txtBtn="Contacto" />

        <Tooltip title="CARRITO">
        <IconButton aria-label="cart">
         <ShoppingCartIcon />
       </IconButton>
       </Tooltip>
        </div>
    </nav>
  )
  }
  
export default navbar
