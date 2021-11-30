import {NavBar} from "../src/layout/NavBar"
import {Footer} from "../src/layout/Footer"

export default function Custom404() {
    return <>
        <NavBar/>
        <h1 className="text-center">404 - A keresett oldal nem található</h1>
        <Footer/>
    </>
}
