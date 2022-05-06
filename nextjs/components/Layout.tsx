import Footer from "./Footer";
import Header from "./Head/index";
export default function Layout({children }:any){
    return(
        <>
        <Header/>
        <main>{children}</main>
        <Footer/>
        </>
    )
}