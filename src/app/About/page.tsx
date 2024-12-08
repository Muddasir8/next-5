import Footer from "@/components/Footer/footer";
import Image from "next/image";

export default function About() {
    return (
        <>
            <div className="bg-white">
                {/* Header */}
                <header className="w-full bg-white shadow-sm">
                    <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-8">
                        {/* Logo */}
                        <h1 className="text-[#252b42] text-2xl font-bold">Bandage</h1>

                        {/* Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            <a href="/" className="text-sm font-bold text-[#727272] hover:text-[#252b42]">Home</a>
                            <a href="#" className="text-sm font-bold text-[#727272] hover:text-[#252b42]">Product</a>
                            <a href="#" className="text-sm font-bold text-[#727272] hover:text-[#252b42]">Pricing</a>
                            <a href="#" className="text-sm font-bold text-[#727272] hover:text-[#252b42]">Contact</a>
                        </nav>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-6">
                            <a href="#" className="text-sm font-bold text-[#23a6f0] hover:underline">Login</a>
                            <button className="bg-[#23a6f0] text-white text-sm font-bold px-6 py-2 rounded hover:bg-[#1d8cdb]">
                                Become a Member
                            </button>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="relative">
                    {/* Background Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="relative flex justify-end items-center h-full max-w-screen-xl mx-auto px-8">
                            <div className="relative">
                                {/* Image */}
                                <Image
                                    src="/assets/technology 1.png"
                                    alt="hero 1"
                                    width={571}
                                    height={668}
                                    className="z-10 relative object-cover" />

                                {/* Decorative Circles */}
                                <div className="absolute top-10 left-10 w-[484.06px] h-[484.06px] bg-[#ffe8ea] rounded-full z-0"></div>
                                <div className="absolute bottom-10 right-20 w-[77.39px] h-[77.39px] bg-[#ffe8ea] rounded-full z-0"></div>
                                <div className="absolute top-20 right-10 w-[14.78px] h-[14.78px] bg-[#977df4] rounded-full z-0"></div>
                                <div className="absolute bottom-16 left-16 w-[30.25px] h-[30.25px] bg-[#ffe8ea] rounded-full z-0"></div>
                                <div className="absolute top-5 right-5 w-[14.78px] h-[14.78px] bg-[#977df4] rounded-full z-0"></div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <section className="relative z-10 max-w-screen-xl mx-auto px-8 py-28 flex flex-col lg:flex-row gap-16 items-center">
                        <article className="max-w-lg">
                            <h2 className="text-[#252b42] text-base font-bold uppercase">About Company</h2>
                            <h1 className="text-[#252b42] text-5xl font-bold mt-4 leading-tight">
                                About Us
                            </h1>
                            <p className="text-[#727272] text-lg mt-6 leading-relaxed">
                                We know how large objects will act, but things on a small scale.
                            </p>
                            <button className="mt-8 bg-[#23a6f0] text-white text-sm font-bold px-6 py-3 rounded hover:bg-[#1d8cdb]">
                                Get Quote Now
                            </button>
                        </article>
                    </section>
                </main>
            </div><div className="w-full bg-white py-6 flex justify-center items-center">
                <div className="max-w-screen-lg mx-auto flex flex-wrap gap-10 px-4">
                    {/* Left Content */}
                    <div className="flex flex-col max-w-md gap-6">
                        <span className="text-[#e64040] text-sm font-normal font-['Montserrat']">
                            Problems trying
                        </span>
                        <h2 className="text-[#252b42] text-2xl font-bold font-['Montserrat'] leading-relaxed">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                        </h2>
                    </div>

                    {/* Right Content */}
                    <div className="flex-1">
                        <p className="text-[#727272] text-sm font-normal font-['Montserrat'] leading-relaxed">
                            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
                        </p>
                    </div>
                </div>
            </div><div className="w-full bg-white px-8 py-10 flex justify-center items-center">
                <div className="max-w-screen-xl w-full flex flex-col items-center gap-8">
                    {/* Stats Container */}
                    <div className="flex flex-wrap justify-between items-center gap-6">
                        {/* Stat Item */}
                        <div className="flex flex-col items-center text-center">
                            <h3 className="text-[#252b42] text-5xl font-bold leading-tight">
                                15K
                            </h3>
                            <p className="text-[#727272] text-base font-bold mt-2">
                                Happy Customers
                            </p>
                        </div>

                        {/* Stat Item */}
                        <div className="flex flex-col items-center text-center">
                            <h3 className="text-[#252b42] text-5xl font-bold leading-tight">
                                150K
                            </h3>
                            <p className="text-[#727272] text-base font-bold mt-2">
                                Monthly Visitors
                            </p>
                        </div>

                        {/* Stat Item */}
                        <div className="flex flex-col items-center text-center">
                            <h3 className="text-[#252b42] text-5xl font-bold leading-tight">
                                15
                            </h3>
                            <p className="text-[#727272] text-base font-bold mt-2">
                                Countries Worldwide
                            </p>
                        </div>

                        {/* Stat Item */}
                        <div className="flex flex-col items-center text-center">
                            <h3 className="text-[#252b42] text-5xl font-bold leading-tight">
                                100+
                            </h3>
                            <p className="text-[#727272] text-base font-bold mt-2">
                                Top Partners
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-white flex justify-center items-center py-16 px-8">
                <div className="max-w-screen-lg w-full flex justify-center items-center">
                    {/* Card Container */}
                    <div className="relative w-full h-[540px] bg-white rounded-2xl overflow-hidden">
                        {/* Image with Gradient Overlay */}
                        <div className="relative w-full h-full">
                            <Image
                                src="/assets/unsplash_hero_cover1.png"
                                alt="Hero Image"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-2xl" />
                            <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-700 opacity-50 rounded-2xl" />
                        </div>
                        {/* Blue Button Section */}
                        <div className="absolute top-[224px] left-[448px] px-[36.8px] py-[34.8px] bg-[#23a6f0] rounded-[73.6px] flex justify-center items-center">
                            <Image 
                            src="/svg/play.svg"
                            alt="play icon"
                            width={19}
                            height={23}
                            className="w-[19px] h-[23px]"/>
                        </div>
                    </div>

                    {/* Action Button */}
                    <div className="absolute bottom-8 left-8">
                        <button className="px-6 py-4 bg-[#23a6f0] rounded-full text-white font-bold hover:bg-[#1d8cdb]">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        <div className="w-full bg-white py-16 px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#252b42]">Meet Our Team</h2>
                    <p className="text-sm text-[#727272] mt-4">
                        Problems trying to resolve the conflict between <br />
                        the two major realms of Classical physics: Newtonian mechanics.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                    <div className="w-[316px] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center">
                        <div className="relative w-full h-[231px]">
                            <Image
                                src="/assets/team-1-user-1.png"
                                alt="Team member 1"
                                width={316}
                                height={231}
                                className="w-full h-full object-cover" />
                        </div>
                        <div className="py-6 text-center">
                            <h3 className="text-lg font-bold text-[#252b42]">John Doe</h3>
                            <p className="text-sm text-[#727272] font-semibold">Software Engineer</p>
                            <div className="flex justify-center gap-4 mt-4">
                                <Image
                                    src="/svg/facebook.svg"
                                    alt="icon 1"
                                    width={8}
                                    height={8}
                                    className="w-8 h-8 flex justify-center items-center  rounded-full"
                                />
                               <Image
                                    src="/svg/twitter.svg"
                                    alt="icon 2"
                                    width={8}
                                    height={8}
                                    className="w-8 h-8 flex justify-center items-center rounded-full "
                                />
                                <Image
                                    src="/svg/instagram.svg"
                                    alt="icon 3"
                                    width={8}
                                    height={8}
                                    className="w-8 h-8 flex justify-center items-center rounded-full "
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-[316px] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center">
                        <div className="relative w-full h-[231px]">
                            <Image
                                src="/assets/team-1-user-2.png"
                                alt="Team member 2"
                                width={316}
                                height={231}
                                className="w-full h-full object-cover.png" />
                        </div>
                        <div className="py-6 text-center">
                            <h3 className="text-lg font-bold text-[#252b42]">Jane Smith</h3>
                            <p className="text-sm text-[#727272] font-semibold">Product Designer</p>
                            <div className="flex justify-center gap-4 mt-4">
                            <Image
                                    src="/svg/facebook.svg"
                                    alt="icon 1"
                                    width={8}
                                    height={8}
                                    className="w-8 h-8 flex justify-center items-center  rounded-full"
                                />
                                <Image
                                    src="/svg/twitter.svg"
                                    alt="icon 2"
                                    width={8}
                                    height={8}
                                    className="w-8 h-8 flex justify-center items-center rounded-full "
                                />
                                <Image
                                    src="/svg/instagram.svg"
                                    alt="icon 3"
                                    width={8}
                                    height={8}
                                    className="w-8 h-8 flex justify-center items-center rounded-full "
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-[316px] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center">
                        <div className="relative w-full h-[231px]">
                            <Image
                                src="/assets/team-1-user-3.png"
                                alt="Team member 3"
                                width={316}
                                height={231}
                                className="w-full h-full object-cover" />
                        </div>
                        <div className="py-6 text-center">
                            <h3 className="text-lg font-bold text-[#252b42]">Alex Brown</h3>
                            <p className="text-sm text-[#727272] font-semibold">Marketing Specialist</p>
                            <div className="flex justify-center gap-4 mt-4">
                            <Image
                                    src="/svg/facebook.svg"
                                    alt="icon 1"
                                    width={8}
                                    height={8}
                                    className="w-8 h-8 flex justify-center items-center  rounded-full"
                                />
                               <Image
                                    src="/svg/twitter.svg"
                                    alt="icon 2"
                                    width={8}
                                    height={8}
                                    className="w-8 h-8 flex justify-center items-center rounded-full "
                                />
                                <Image
                                    src="/svg/instagram.svg"
                                    alt="icon 3"
                                    width={8}
                                    height={8}
                                    className="w-8 h-8 flex justify-center items-center rounded-full "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[479px] px-[195px] bg-[#f9f9f9] flex justify-center items-center">
                <div className="flex flex-col items-center py-20 gap-6">
                    {/* Title Section */}
                    <div className="h-[120px] flex flex-col justify-start items-center gap-[30px]">
                        <div className="text-[#252b42] text-[40px] font-bold font-['Montserrat'] leading-[50px] tracking-tight">
                            Big Companies Are Here
                        </div>
                        <div className="w-[547px] text-center text-[#727272] text-sm font-normal font-['Montserrat'] leading-tight tracking-tight">
                            Problems trying to resolve the conflict between <br />
                            the two major realms of Classical physics: Newtonian mechanics.
                        </div>
                    </div>

                    {/* Logos Section */}
                    <div className="py-[50px] flex justify-start items-center gap-[30px]">
                        {/* Each company logo box */}
                        <div className="w-[153px] flex-col justify-start items-center">
                            <Image src="/svg/fa-brands-1.svg" alt="logo 1" width={103} height={34} className="w-[103px] h-[34px]" />
                        </div>
                        <div className="w-[146px] flex-col justify-start items-center">
                        <Image src="/svg/fa-brands-2.svg" alt="logo 2" width={103} height={34} className="w-[103px] h-[34px]" />
                        </div>
                        <div className="w-[152px] flex-col justify-start items-center">
                        <Image src="/svg/fa-brands-3.svg" alt="logo 3" width={103} height={34} className="w-[103px] h-[34px]" />
                        </div>
                        <div className="w-[151px] flex-col justify-start items-center">
                        <Image src="/svg/fa-brands-4.svg" alt="logo 4" width={103} height={34} className="w-[103px] h-[34px]" />
                        </div>
                        <div className="w-[151px] flex-col justify-start items-center">
                        <Image src="/svg/fa-brands-5.svg" alt="logo 5" width={103} height={34} className="w-[103px] h-[34px]" />
                        </div>
                        <div className="w-[151px] flex-col justify-start items-center">
                        <Image src="/svg/fa-brands-6.svg" alt="logo 6" width={103} height={34} className="w-[103px] h-[34px]" />
                        </div>
                    </div>
                </div>
            </div><div className="w-full h-[636px] relative bg-[#2a7bc6]">
                {/* Image Section */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <Image
                        src="/assets/unsplash_cover-dwn.png"
                        alt="dwm hero image"
                        width={590}
                        height={640}
                        className="w-[590px] h-[640px] absolute top-0 right-0" />
                </div>

                {/* Content Section */}
                <div className="absolute top-0 left-[195px] py-28 flex flex-col justify-start items-start">
                    <div className="w-[1050px] flex justify-between items-center">
                        {/* Text and Button Section */}
                        <div className="w-[438px] flex-col justify-start items-start gap-6">
                            <div className="text-white text-base font-bold font-['Montserrat'] leading-normal tracking-tight">
                                WORK WITH US
                            </div>
                            <div className="text-white text-[40px] font-bold font-['Montserrat'] leading-[50px] tracking-tight">
                                Now Let’s grow Yours
                            </div>
                            <div className="w-[440px] text-white text-sm font-normal font-['Montserrat'] leading-tight tracking-tight">
                                The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th.
                            </div>
                            <div className="px-10 py-[15px] rounded-[5px] border border-[#f9f9f9] flex justify-center items-center">
                                <div className="text-[#f9f9f9] text-sm font-bold font-['Montserrat'] leading-snug tracking-tight">
                                    Button
                                </div>
                            </div>
                        </div>

                        {/* Placeholder for additional content or image */}
                        <div className="w-[548px] h-[412px] relative"></div>
                    </div>
                </div>
            </div>

            <Footer/>
            </>
            
  );
};
