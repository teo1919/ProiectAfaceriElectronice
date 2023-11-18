import Image from "next/image"
import confetti from '../../public/assets/confetti.png'
import Link from "next/link"

export default function SuccessPage() {
    return (
        <div className="section bg-pink h-screen">
            <div className="container">
                <div className="section-intro welcome">
                    <Image
                    src={confetti}
                    height={200}
                    width={200}
                    alt="confetti"
                    className="confetti"
                    />
                    <h1>You can now access content.</h1>
                    <Link href='/login' className="large-button">
                        <div className="large-button-text">Get Started</div>
                    </Link>
                </div>
            </div>
        </div>
    )

}
