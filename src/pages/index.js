import Image from "next/image"
import hero from "../../public/assets/hero.png"
import Link from "next/link"

export default function HomePage() {
    return (
    <div className="grid-halves h-screen-navbar">
        <div className="bg-teal  border-right">
            <div className="column-padding">
                <div className="tablet-centered">
                    <div className="content-grid home-hero"></div>
                    <h1>
                        Get the best content  
                    </h1>
                   
                    <Link  href='/products' className="large-button">
                    
                    <div className="large-button-text">Browse products</div>
                    </Link>
                </div>
            </div>
        </div>
        <div className="bg-salmon">
            <div className="column-padding centered">
                <div className="callout-warp">
                    <Image src={hero} className="callout-image" alt="hero"></Image>
                </div>
            </div>
        </div>
    </div>
    );
    }