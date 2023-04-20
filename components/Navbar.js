import Link from "next/link"
import styles from "../styles/Home.module.scss"
import { useRouter } from "next/router"

const navigation = [
    { id:1, title: 'Home', path: '/'},
    { id:2, title: 'Posts', path: '/posts'},
    { id:3, title: 'Contacts', path: '/contacts'},
]

const Navbar = () => {

    const {pathname} = useRouter();

    return (
        <nav className={styles.nav}>
            <div><img src="" width="60" height="" alt="webIMAGE" /></div>
            
            <div className={styles.items}>
                {navigation.map(({ id, title, path }) => (
                    <Link className={styles.item} key={id} href={path}>
                        <div className={pathname === path ? styles.active : null}>{title}</div>
                    </Link>
                ))}
                
            </div>
        </nav>
    )
}
export default Navbar