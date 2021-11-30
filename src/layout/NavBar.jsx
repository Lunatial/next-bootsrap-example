import Link from 'next/link'
import {useRouter} from "next/router"


export const NavBar = () => {
    const router = useRouter()

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-lg-5">
                <Link href="/">
                    <a className="navbar-brand">Start Bootstrap</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/">
                                <a className={`nav-link ${router.pathname === "/" && "active"}`}>Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about">
                                <a className={`nav-link ${router.pathname === "/about" && "active"}`}>About</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={router.pathname} locale="en">
                                <a className={`nav-link ${router.locale === "en" && "active"}`}>en</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={router.pathname} locale="hu">
                                <a className={`nav-link ${router.locale === "hu" && "active"}`}>hu</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
