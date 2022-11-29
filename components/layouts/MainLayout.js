import TopBar from "../navigation/TopBar"
import MainNavigation from "../navigation/MainNavigation"
import MainFooter from "../footers/MainFooter"
import FooterEnd from "../footers/FooterEnd"

export default function MainLayout({children}) {
    return (
        <>
            <header>
                <TopBar />
                <MainNavigation />
            </header>
            <main>{children}</main>
            <footer>
                <MainFooter />
                <FooterEnd />
            </footer>
        </>
    )
}