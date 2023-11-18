import Meta from "src/core/components/Meta";
import Navbar from "src/core/components/Navbar";
import { useRouter } from "next/router";


const hideNavbarPages=[`/success`]

export default function AppLayout({children}) {
    const router = useRouter()
    const hideNavbar = hideNavbarPages.includes(router.asPath)
    
    return(
        <>
        <Meta />
        {hideNavbar ? null : <Navbar />}
        {children}
        </>
    )
}
