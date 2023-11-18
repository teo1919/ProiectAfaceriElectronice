import Link from "next/link";

export default function Navbar() {
    return (
        <div className="nav-container border-b-2 border-black">
            <div className="nav-menu">
                <Link href="/login" className="nav_link white">
                    <div style={{ paddingLeft: "1200px" }}>Login</div>
                </Link>

                <Link href="/pricing" className="nav-link-black">
                    <div style={{ paddingLeft: "20px" }}>Pricing</div>
                </Link>
            </div>
        </div>
    );
}
