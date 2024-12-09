import Image from "next/image";
export default function Navbar() {
    return (
        <header className="w-full mx-auto bg-white">
            {/* Top bar */}
            <div className="w-full bg-[#252b42] px-4 py-2 flex justify-between items-center text-white">
                {/* Contact Info */}
                <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                        <Image
                        src="/svg/Vector-1.svg"
                        alt="logo tele"
                        width={4}
                        height={4}
                        className="w-4 h-4 " 
                        />
                        <span className="text-sm font-bold">(225) 555-0118</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Image
                        src="/svg/Vector-2-email.svg"
                        alt="logo email"
                        width={4}
                        height={4}
                        className="w-4 h-4" />
                        <span className="text-sm font-bold">michelle.rivera@example.com</span>
                    </div>
                </div>

                {/* Follow Us */}
                <div className="flex items-center space-x-4">
                    <span className="text-sm font-bold">Follow Us:</span>
                    <div className="flex space-x-3">
                        <Image src="/svg/vector-logo-insta.svg" alt="logo apps" width={4} height={4} className="w-4 h-4" />
                        <Image src="/svg/icn settings icn-xs.svg" alt="logo apps" width={4} height={4} className="w-4 h-4" />
                        <Image src="/svg/Vector.svg" alt="logo apps" width={4} height={4} className="w-4 h-4" />
                        <Image src="/svg/vector-logo.svg" alt="logo apps" width={4} height={4} className="w-4 h-4" />
                      
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="w-full px-4 py-4 flex items-center justify-between border-b">
                {/* Logo */}
                <div className="text-2xl font-bold text-[#252b42]">Bandage</div>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#" className="text-sm font-bold text-[#727272] hover:text-[#252b42]">Home</a>
                    <a href="#" className="text-sm font-medium text-[#252b42] hover:text-[#727272]">Shop</a>
                    <a href="/About" className="text-sm font-bold text-[#727272] hover:text-[#252b42]">About</a>
                    <a href="#" className="text-sm font-bold text-[#727272] hover:text-[#252b42]">Blog</a>
                    <a href="#" className="text-sm font-bold text-[#727272] hover:text-[#252b42]">Contact</a>
                    <a href="#" className="text-sm font-bold text-[#727272] hover:text-[#252b42]">Pages</a>
                </nav>

                {/* Actions */}
                <div className="flex items-center space-x-6">
                    <button className="text-sm font-bold text-[#23a6f0] border border-[#23a6f0] px-4 py-2 rounded-full hover:bg-[#23a6f0] hover:text-white">
                        Login / Register
                    </button>
                    <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-200">
                    <Image src="/svg/search-icon.svg"alt="logo 1" width={4} height={4} className="w-4 h-4" aria-hidden="true"/>
                    </div>
                    <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-200">
                    <Image src="/svg/shop-icon.svg"alt="logo 2" width={4} height={4} className="w-4 h-4" aria-hidden="true"/>
                    
                        <span className="absolute top-0 right-0 w-5 h-5 bg-[#23a6f0] text-xs text-white rounded-full flex items-center justify-center">
                            1
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
}
