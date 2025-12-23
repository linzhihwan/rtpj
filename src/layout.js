import Link from "next/link"; 
import "./globals.css"; 
export default function RootLayout({ children }) 
{ 
    return ( <html lang="en"> <body> 
    <nav style={{ padding: "10px", background: "#eee" }}> 
    <Link href="/" style={{ marginRight: "15px" }}>Home</Link> 
    <Link href="/about" style={{ marginRight: "15px" }}>About</Link> 
    <Link href="/contact">Contact</Link> 
    </nav> 
    {children} 
    </body> </html> 
    ); 
}