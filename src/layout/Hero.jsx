import {useRouter} from "next/router"
import {en} from "../misc/locales/en"
import {hu} from "../misc/locales/hu"

export const Hero = (props) => {
    const router = useRouter()
    const t = router.locale === 'en' ? en : hu

    return (
        <header className="py-5">
            <div className="container px-lg-5">
                <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
                    <div className="m-4 m-lg-5">
                        <h1 className="display-5 fw-bold">{t.title}</h1>
                        <p className="fs-4">Bootstrap utility classes are used to create this jumbotron since the
                            old
                            component
                            has been removed from the framework. Why create custom CSS when you can use
                            utilities?</p>
                        <a className="btn btn-primary btn-lg" href="/">Call to action</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
