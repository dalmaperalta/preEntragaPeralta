import styles from "./button.module.css"
import { Button } from "@mui/material"


const button = ({ txtBtn }) => {
    return (
        <Button variant="text" className={styles.btn} >{txtBtn}</Button>
    )
}
export default button