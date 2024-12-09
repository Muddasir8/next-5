import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Navbar/navbar";
import Image from "next/image"

export default function Home() {
  return(
    
    <>
    <Navbar/>

     {/* new collection */}
    <div className="w-[1439px] h-[716px] relative bg-white rounded-[5px] border mx-auto border-[#dedede]">
      <div className="w-[1439px] h-[716px] left-0 top-0 absolute">
        <div className="w-[1440px] h-[716px] left-0 top-0 absolute">
          <Image
            src="/assets/shop-hero.png"
            alt="shop image"
            width={1440}
            height={716} />
          <div className="py-28 left-[197.50px] top-[48px] absolute flex-col justify-start items-center gap-20 inline-flex">
            <div className="py-12 justify-start items-center gap-[30px] inline-flex">
              <div className="w-[599px] flex-col justify-start items-start gap-[35px] inline-flex">
                <p className="text-white text-base font-bold font-['Montserrat'] leading-normal tracking-tight">SUMMER 2020</p>
                <p className="text-white text-[58px] font-bold font-['Montserrat'] leading-[80px] tracking-tight">NEW COLLECTION</p>
                <p className="text-[#f9f9f9] text-xl font-normal font-['Montserrat'] leading-[30px] tracking-tight">We know how large objects will act, <br />but things on a small scale.</p>
                <div className="justify-start items-start gap-2.5 inline-flex">
                  <button className="px-10 py-[15px] bg-[#2cc070] rounded-[5px] flex-col justify-start items-center gap-2.5 inline-flex">
                    <a className="text-center text-white text-2xl font-bold font-['Montserrat'] leading-loose tracking-tight">SHOP NOW</a>
                  </button>
                </div>
              </div>
              <div className="w-[415px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-6 h-[44.47px] left-[1381px] top-[283px] absolute" />
    </div>
    
     {/* editor pick */}
    <div className="w-[1440px] h-[770px] relative mx-auto bg-[#f9f9f9]">
        <div className="py-20 left-[195px] top-0 absolute flex-col justify-start items-center gap-12 inline-flex">
          <div className="h-[62px] flex-col justify-start items-center flex">
            <div className="h-[62px] flex-col justify-start items-center gap-2.5 flex">
              <p className="text-[#252b42] text-2xl font-bold font-['Montserrat'] leading-loose tracking-tight">EDITOR`S PICK</p>
              <p className="text-center text-[#727272] text-sm font-normal font-['Montserrat'] leading-tight tracking-tight">Problems trying to resolve the conflict between </p>
            </div>
          </div>
          <div className="justify-start items-start gap-[30px] inline-flex">
            <div className="w-[510px] h-[500px] relative">
              <div className="w-[510px] h-[500px] left-0 top-0 absolute bg-white">
                <div className="w-[510px] h-[500px] left-0 top-0 absolute">
                  <Image
                    src="/assets/card-cover-20.jpg"
                    alt="filter 1"
                    width={510}
                    height={500}
                    className="w-[510px] h-[500px] left-0 top-0 absolute" />
                  <Image
                    src="/assets/filter.png"
                    alt="cover 1"
                    width={509}
                    height={500}
                    className="w-[509px] h-[500px] left-[1px] top-0 absolute" />
                </div>
                <button className="w-[170px] h-12 left-[31px] top-[426px] absolute bg-white">
                  <p className="left-[64px] top-[12px] absolute text-center text-[#252b42] text-base font-bold font-['Montserrat'] leading-normal tracking-tight">MEN</p>
                </button>
              </div>
            </div>
            <div className="w-60 h-[500px] relative">
              <div className="w-60 h-[500px] left-0 top-0 absolute bg-white">
                <div className="w-60 h-[500px] left-0 top-0 absolute">
                  <Image
                    src="/assets/card-cover-21.jpg"
                    alt="cover 2"
                    width={240}
                    height={500}
                    className="w-60 h-[500px] left-0 top-0 absolute" />
                  <Image
                    src="/assets/filter (1).png"
                    alt="cover 2"
                    width={239}
                    height={500}
                    className="w-[239px] h-[500px] left-[1px] top-0 absolute" />
                </div>
                <button className="w-[136px] px-12 py-3 left-[21px] top-[434px] absolute bg-white justify-center items-center gap-2.5 inline-flex">
                  <p className="text-center text-[#252b42] text-base font-bold font-['Montserrat'] leading-normal tracking-tight">WOMEN</p>
                </button>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-4 inline-flex">
              <div className="w-60 h-[242px] relative bg-white">
                <div className="w-60 h-[242px] left-0 top-0 absolute">
                  <Image
                    src="/assets/card-cover-22.jpg"
                    alt="cover 3"
                    width={240}
                    height={242}
                    className="w-60 h-[242px] left-0 top-0 absolute" />
                  <Image
                    src="/assets/filter (2).png"
                    alt="cover 3"
                    width={239}
                    height={242}
                    className="w-[239px] h-[242px] left-[1px] top-0 absolute" />
                </div>
                <button className="w-[170px] px-[26px] py-3 left-[14px] top-[171px] absolute bg-white justify-start items-start gap-2.5 inline-flex">
                  <p className="text-center text-[#252b42] text-base font-bold font-['Montserrat'] leading-normal tracking-tight">ACCESSORIES</p>
                </button>
              </div>
              <div className="w-60 h-[242px] relative bg-white">
                <div className="w-60 h-[242px] left-0 top-0 absolute">
                  <Image
                    src="/assets/card-cover-23.jpg"
                    alt="cover 4"
                    width={2400}
                    height={242}
                    className="w-60 h-[242px left-0 top-0 absolute" />
                  <Image
                    src="/assets/filter (3).png"
                    alt="cover 4"
                    width={2390}
                    height={242}
                    className="w-[239px] h-[242px] left-[1px] top-0 absolute" />
                </div>
                <button className="w-[120px] px-10 py-3 left-[18px] top-[176px] absolute bg-white justify-start items-start gap-2.5 inline-flex">
                  <p className="text-center text-[#252b42] text-base font-bold font-['Montserrat'] leading-normal tracking-tight">KIDS</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
       {/* best seller product */}
      <div className="w-[1440px] h-[1652px] relative mx-auto bg-white">
        <div className="h-[1652px] py-20 left-[195px] top-0 absolute flex-col justify-start items-center gap-20 inline-flex">
          <div className="h-[102px] flex-col justify-start items-center flex">
            <div className="h-[102px] flex-col justify-start items-center gap-2.5 flex">
              <p className="text-center text-[#727272] text-xl font-normal font-['Montserrat'] leading-[30px] tracking-tight">Featured Products</p>
              <p className="text-center text-[#252b42] text-2xl font-bold font-['Montserrat'] leading-loose tracking-tight">BESTSELLER PRODUCTS</p>
              <p className="text-center text-[#727272] text-sm font-normal font-['Montserrat'] leading-tight tracking-tight">Problems trying to resolve the conflict between </p>
            </div>
          </div>
          <div className="justify-start items-start gap-[30px] inline-flex">
            <div className="w-[238px] flex-col justify-start items-center inline-flex">
              <div className="h-[615px] bg-white flex-col justify-start items-start flex">
                <div className="h-[427px] relative">
                  <Image
                    src="/assets/product-cover-1.png"
                    alt="cover 1"
                    width={239}
                    height={427} />
                </div>
                <div className="self-stretch h-[188px] px-[25px] pt-[25px] pb-[35px] flex-col justify-start items-center gap-2.5 flex">
                  <p className="w-[131px] text-center text-[#252b42] text-base font-bold font-['Montserrat'] leading-normal tracking-tight">Graphic Design</p>
                  <p className="text-center text-[#727272] text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">English Department</p>
                  <div className="px-[3px] py-[5px] justify-start items-start gap-[5px] inline-flex">
                    <p className="w-[52px] text-center text-[#bdbdbd] text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$16.48</p>
                    <p className="w-[45px] text-center text-[#23856d] text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$6.48</p>
                  </div>
                  <div className="justify-start items-center gap-[6.08px] inline-flex">
                    <div className="w-4 h-4 bg-[#23a6f0] rounded-full" />
                    <div className="w-4 h-4 bg-[#23856d] rounded-full" />
                    <div className="w-4 h-4 bg-[#e67c40] rounded-full" />
                    <div className="w-4 h-4 bg-[#252b42] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[241px] flex-col justify-start items-center inline-flex">
              <div className="h-[615px] bg-white flex-col justify-start items-start flex">
                <div className="h-[427px] relative">
                  <Image
                    src="/assets/product-cover-2.png"
                    alt="cover 2"
                    width={239}
                    height={427} />
                </div>
                <div className="self-stretch h-[188px] px-[25px] pt-[25px] pb-[35px] flex-col justify-start items-center gap-2.5 flex">
                  <p className="w-[131px] text-center text-[#252b42] text-base font-bold font-['Montserrat'] leading-normal tracking-tight">Graphic Design</p>
                  <p className="text-center text-[#727272] text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">English Department</p>
                  <div className="px-[3px] py-[5px] justify-start items-start gap-[5px] inline-flex">
                    <p className="w-[52px] text-center text-[#bdbdbd] text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$16.48</p>
                    <p className="w-[45px] text-center text-[#23856d] text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$6.48</p>
                  </div>
                  <div className="justify-start items-center gap-[6.08px] inline-flex">
                    <div className="w-4 h-4 bg-[#23a6f0] rounded-full" />
                    <div className="w-4 h-4 bg-[#23856d] rounded-full" />
                    <div className="w-4 h-4 bg-[#e67c40] rounded-full" />
                    <div className="w-4 h-4 bg-[#252b42] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-60 flex-col justify-start items-center inline-flex">
              <div className="h-[615px] bg-white flex-col justify-start items-start flex">
                <div className="h-[427px] relative">
                  <Image
                    src="/assets/product-cover-3.png"
                    alt="cover 3"
                    width={239}
                    height={427} />
                </div>
                <div className="self-stretch h-[188px] px-[25px] pt-[25px] pb-[35px] flex-col justify-start items-center gap-2.5 flex">
                  <p className="w-[131px] text-center text-[#252b42] text-base font-bold font-['Montserrat'] leading-normal tracking-tight">Graphic Design</p>
                  <p className="text-center text-[#727272] text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">English Department</p>
                  <div className="px-[3px] py-[5px] justify-start items-start gap-[5px] inline-flex">
                    <p className="w-[52px] text-center text-[#bdbdbd] text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$16.48</p>
                    <p className="w-[45px] text-center text-[#23856d] text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$6.48</p>
                  </div>
                  <div className="justify-start items-center gap-[6.08px] inline-flex">
                    <div className="w-4 h-4 bg-[#23a6f0] rounded-full" />
                    <div className="w-4 h-4 bg-[#23856d] rounded-full" />
                    <div className="w-4 h-4 bg-[#e67c40] rounded-full" />
                    <div className="w-4 h-4 bg-[#252b42] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-60 flex-col justify-start items-center inline-flex">
              <div className="h-[615px] bg-white flex-col justify-start items-start flex">
                <div className="h-[427px] relative">
                  <Image
                    src="/assets/product-cover-4.png"
                    alt="cover 4"
                    width={239}
                    height={427} />
                </div>
                <div className="self-stretch h-[188px] px-[25px] pt-[25px] pb-[35px] flex-col justify-start items-center gap-2.5 flex">
                  <p className="w-[131px] text-center text-[#252b42] text-base font-bold font-['Montserrat'] leading-normal tracking-tight">Graphic Design</p>
                  <p className="text-center text-[#727272] text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">English Department</p>
                  <div className="px-[3px] py-[5px] justify-start items-start gap-[5px] inline-flex">
                    <p className="w-[52px] text-center text-[#bdbdbd] text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$16.48</p>
                    <p className="w-[45px] text-center text-[#23856d] text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$6.48</p>
                  </div>
                  <div className="justify-start items-center gap-[6.08px] inline-flex">
                    <div className="w-4 h-4 bg-[#23a6f0] rounded-full" />
                    <div className="w-4 h-4 bg-[#23856d] rounded-full" />
                    <div className="w-4 h-4 bg-[#e67c40] rounded-full" />
                    <div className="w-4 h-4 bg-[#252b42] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-start items-start gap-[30px] inline-flex">
            <div className="w-[238px] flex-col justify-start items-center inline-flex">
              <div className="h-[615px] bg-white flex-col justify-start items-start flex">
                <div className="h-[427px] relative">
                  <Image
                    src="/assets/product-cover-5.png"
                    alt="cover 5"
                    width={239}
                    height={427} />
                </div>
                <div className="self-stretch h-[188px] px-[25px] pt-[25px] pb-[35px] flex-col justify-start items-center gap-2.5 flex">
                  <p className="w-[131px] text-center text-[#252b42] text-base font-bold font-['Montserrat'] leading-normal tracking-tight">Graphic Design</p>
                  <p className="text-center text-[#727272] text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">English Department</p>
                  <div className="px-[3px] py-[5px] justify-start items-start gap-[5px] inline-flex">
                    <p className="w-[52px] text-center text-[#bdbdbd] text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$16.48</p>
                    <p className="w-[45px] text-center text-[#23856d] text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$6.48</p>
                  </div>
                  <div className="justify-start items-center gap-[6.08px] inline-flex">
                    <div className="w-4 h-4 bg-[#23a6f0] rounded-full" />
                    <div className="w-4 h-4 bg-[#23856d] rounded-full" />
                    <div className="w-4 h-4 bg-[#e67c40] rounded-full" />
                    <div className="w-4 h-4 bg-[#252b42] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[241px] flex-col justify-start items-center inline-flex">
              <div className="h-[615px] bg-white flex-col justify-start items-start flex">
                <div className="h-[427px] relative">
                  <Image
                    src="/assets/product-cover-6.png"
                    alt="cover 6"
                    width={239}
                    height={427} />
                </div>
                <div className="self-stretch h-[188px] px-[25px] pt-[25px] pb-[35px] flex-col justify-start items-center gap-2.5 flex">
                  <p className="w-[131px] text-center text-[#252b42] text-base font-bold font-['Montserrat'] leading-normal tracking-tight">Graphic Design</p>
                  <p className="text-center text-[#727272] text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">English Department</p>
                  <div className="px-[3px] py-[5px] justify-start items-start gap-[5px] inline-flex">
                    <p className="w-[52px] text-center text-[#bdbdbd] text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$16.48</p>
                    <p className="w-[45px] text-center text-[#23856d] text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$6.48</p>
                  </div>
                  <div className="justify-start items-center gap-[6.08px] inline-flex">
                    <div className="w-4 h-4 bg-[#23a6f0] rounded-full" />
                    <div className="w-4 h-4 bg-[#23856d] rounded-full" />
                    <div className="w-4 h-4 bg-[#e67c40] rounded-full" />
                    <div className="w-4 h-4 bg-[#252b42] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-60 flex-col justify-start items-center inline-flex">
              <div className="h-[615px] bg-white flex-col justify-start items-start flex">
                <div className="h-[427px] relative">
                  <Image
                    src="/assets/product-cover-7.png"
                    alt="cover 7"
                    width={239}
                    height={427} />
                </div>
                <div className="self-stretch h-[188px] px-[25px] pt-[25px] pb-[35px] flex-col justify-start items-center gap-2.5 flex">
                  <p className="w-[131px] text-center text-[#252b42] text-base font-bold font-['Montserrat'] leading-normal tracking-tight">Graphic Design</p>
                  <p className="text-center text-[#727272] text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">English Department</p>
                  <div className="px-[3px] py-[5px] justify-start items-start gap-[5px] inline-flex">
                    <p className="w-[52px] text-center text-[#bdbdbd] text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$16.48</p>
                    <p className="w-[45px] text-center text-[#23856d] text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$6.48</p>
                  </div>
                  <div className="justify-start items-center gap-[6.08px] inline-flex">
                    <div className="w-4 h-4 bg-[#23a6f0] rounded-full" />
                    <div className="w-4 h-4 bg-[#23856d] rounded-full" />
                    <div className="w-4 h-4 bg-[#e67c40] rounded-full" />
                    <div className="w-4 h-4 bg-[#252b42] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-60 flex-col justify-start items-center inline-flex">
              <div className="h-[615px] bg-white flex-col justify-start items-start flex">
                <div className="h-[427px] relative">
                  <Image
                    src="/assets/product-cover-8.png"
                    alt="cover 8"
                    width={239}
                    height={427} />
                </div>
                <div className="self-stretch h-[188px] px-[25px] pt-[25px] pb-[35px] flex-col justify-start items-center gap-2.5 flex">
                  <p className="w-[131px] text-center text-[#252b42] text-base font-bold font-['Montserrat'] leading-normal tracking-tight">Graphic Design</p>
                  <p className="text-center text-[#727272] text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">English Department</p>
                  <div className="px-[3px] py-[5px] justify-start items-start gap-[5px] inline-flex">
                    <p className="w-[52px] text-center text-[#bdbdbd] text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$16.48</p>
                    <p className="w-[45px] text-center text-[#23856d] text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$6.48</p>
                  </div>
                  <div className="justify-start items-center gap-[6.08px] inline-flex">
                    <div className="w-4 h-4 bg-[#23a6f0] rounded-full" />
                    <div className="w-4 h-4 bg-[#23856d] rounded-full" />
                    <div className="w-4 h-4 bg-[#e67c40] rounded-full" />
                    <div className="w-4 h-4 bg-[#252b42] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
       {/* vita classic */}
      <div className="w-[1440px] h-[709px] relative bg-white rounded-[5px] border mx-auto border-[#dedede]">
        <div className="w-[1440px] h-[709px] left-0 top-0 absolute">
          <div className="w-[1440px] h-[709px] left-0 top-0 absolute">
            <div className="w-[1440px] h-[711px] left-0 top-0 absolute bg-[#23856d]" />
            <div className="w-[1036px] h-[711px] py-28 left-[209px] top-0 absolute flex-col justify-start items-start gap-20 inline-flex">
              <div className="h-[599px] justify-start items-start gap-[30px] inline-flex">
                <div className="w-[509px] pt-[60px] flex-col justify-start items-start gap-[30px] inline-flex">
                  <p className="text-white text-xl font-normal font-['Montserrat'] leading-[30px] tracking-tight">SUMMER 2020</p>
                  <p className="w-[509px] text-white text-[58px] font-bold font-['Montserrat'] leading-[80px] tracking-tight">Vita Classic Product</p>
                  <p className="w-[341px] text-white text-sm font-normal font-['Montserrat'] leading-tight tracking-tight">We know how large objects will act, We know how are objects will act, We know</p>
                  <div className="justify-start items-center gap-[34px] inline-flex">
                    <p className="text-center text-white text-2xl font-bold font-['Montserrat'] leading-loose tracking-tight">$16.48</p>
                    <button className="px-10 py-[15px] bg-[#2cc070] rounded-[5px] flex-col justify-start items-center gap-2.5 inline-flex">
                      <p className="text-center text-white text-sm font-bold font-['Montserrat'] leading-snug tracking-tight">ADD TO CART</p>
                    </button>
                  </div>
                </div>
                <div className="w-[510px] flex-col justify-start items-center inline-flex">
                  <Image
                    src="/assets/shop-hero-2.png"
                    alt="hero 2"
                    width={443}
                    height={685} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-6 h-[44.47px] left-[1381px] top-[401px] absolute" />
      </div>
      
       {/* part os the neural */}
      <div className="w-[1440px] h-[682px] relative mx-auto bg-white">
        <div className="w-[1439px] left-0 top-0 absolute justify-end items-center gap-[30px] inline-flex">
          <div className="w-[704px] h-[682px] relative">
            <div className="w-[704px] h-[682px] left-0 top-0 absolute">
              <div className="w-[632px] h-[491.99px] left-[36px] top-[117px]  absolute">
                <Image
                  src="/assets/asian-woman-man.png"
                  alt="winter clothes"
                  width={725}
                  height={774} />
              </div>
            </div>
          </div>
          <div className="w-[573px] flex-col justify-center items-start gap-[30px] inline-flex">
            <p className="text-[#bdbdbd] text-base font-bold font-['Montserrat'] leading-normal tracking-tight">SUMMER 2020</p>
            <p className="text-[#252b42] text-[40px] font-bold font-['Montserrat'] leading-[50px] tracking-tight">Part of the Neural <br />Universe</p>
            <p className="w-[376px] text-[#727272] text-xl font-normal font-['Montserrat'] leading-[30px] tracking-tight">We know how large objects will act, <br />but things on a small scale.</p>
            <div className="justify-start items-start gap-2.5 inline-flex">
              <button className="px-10 py-[15px] bg-[#2cc070] rounded-[5px] flex-col justify-start items-center gap-2.5 inline-flex">
                <p className="text-center text-white text-sm font-bold font-['Montserrat'] leading-snug tracking-tight">BUY NOW</p>
              </button>
              <button className="px-10 py-[15px] rounded-[5px] border border-[#2cc070] flex-col justify-start items-center gap-2.5 inline-flex">
                <p className="text-center text-[#2cc070] text-sm font-bold font-['Montserrat'] leading-snug tracking-tight">READ MORE</p>
              </button>
            </div>
          </div>
        </div>
      </div>

       {/* Feauture posts */}
      <div className="w-[1440px] h-[1044px] relative m-auto bg-white">
  <div className="h-[1044px] py-28 left-[195px] top-0 absolute flex-col justify-start items-center gap-20 inline-flex">
    <div className="h-[134px] flex-col justify-start items-center flex">
      <div className="h-[134px] flex-col justify-start items-center gap-2.5 flex">
        <p className="text-center text-[#23a6f0] text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">Practice Advice</p>
        <p className="text-center text-[#252b42] text-[40px] font-bold font-['Montserrat'] leading-[50px] tracking-tight">Featured Posts</p>
        <p className="text-center text-[#727272] text-sm font-normal font-['Montserrat'] leading-tight tracking-tight">Problems trying to resolve the conflict between <br/>the two major realms of Classical physics: Newtonian mechanics </p>
      </div>
    </div>
    <div className="justify-center items-start gap-[30px] inline-flex">
      <div className="w-[328px] flex-col justify-start items-center inline-flex">
        <div className="h-[606px] bg-white shadow flex-col justify-start items-start flex">
          <div className="h-[300px] relative">
            <Image 
            src="/assets/unsplash_cover-1.png"
            alt="image 1"
            width={348}
            height={300}
            className="w-[348px] h-[300px]" />
            <div className="px-2.5 left-[20px] top-[20px] absolute bg-[#e64040] rounded-[3px] shadow justify-start items-center inline-flex">
              <p className="text-center text-white text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">NEW</p>
            </div>
          </div>
          <div className="self-stretch h-[306px] px-[25px] pt-[25px] pb-[35px] flex-col justify-start items-start gap-2.5 flex">
            <div className="justify-start items-center gap-[15px] inline-flex">
              <p className="text-[#727272] text-xs font-normal font-['Montserrat'] leading-none tracking-tight">Google</p>
              <p className="text-[#727272] text-xs font-normal font-['Montserrat'] leading-none tracking-tight">Trending</p>
              <p className="text-[#727272] text-xs font-normal font-['Montserrat'] leading-none tracking-tight">New</p>
            </div>
            <p className="w-[247px] text-[#252b42] text-xl font-normal font-['Montserrat'] leading-[30px] tracking-tight">Loudest à la Madison #1 <br/>(L&rsquo;integral)</p>
            <p className="w-[280px] text-[#727272] text-sm font-normal font-['Montserrat'] leading-tight tracking-tight">We focus on ergonomics and meeting <br/>you where you work. It&apos;s only a <br/>keystroke away.</p>
            <div className="self-stretch py-[15px] justify-between items-center inline-flex">
              <div className="justify-start items-center gap-[5px] flex">
                <div className="w-4 h-4 relative">
                  <div className="w-4 h-4 left-0 top-0 absolute" />
                </div>
                <p className="text-[#727272] text-xs font-normal font-['Montserrat'] leading-none tracking-tight">22 April 2021</p>
              </div>
              <div className="justify-start items-center gap-[5px] flex">
                <div className="w-4 h-[14.67px] relative" />
                <p className="text-[#727272] text-xs font-normal font-['Montserrat'] leading-none tracking-tight">10 comments</p>
              </div>
            </div>
            <div className="justify-start items-center gap-2.5 inline-flex">
              <p className="text-[#727272] text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">Learn More</p>
              <div className="w-[9px] h-4 relative" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[328px] flex-col justify-start items-center inline-flex">
        <div className="h-[606px] bg-white shadow flex-col justify-start items-start flex">
          <div className="h-[300px] relative">
          <Image 
            src="/assets/unsplash_cover-2.png"
            alt="image 2"
            width={348}
            height={300}
            className="w-[348px] h-[300px]" />
            <div className="px-2.5 left-[20px] top-[20px] absolute bg-[#e64040] rounded-[3px] shadow justify-start items-center inline-flex">
              <p className="text-center text-white text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">NEW</p>
            </div>
          </div>
          <div className="self-stretch h-[306px] px-[25px] pt-[25px] pb-[35px] flex-col justify-start items-start gap-2.5 flex">
            <div className="justify-start items-center gap-[15px] inline-flex">
              <p className="text-[#727272] text-xs font-normal font-['Montserrat'] leading-none tracking-tight">Google</p>
              <p className="text-[#727272] text-xs font-normal font-['Montserrat'] leading-none tracking-tight">Trending</p>
              <p className="text-[#727272] text-xs font-normal font-['Montserrat'] leading-none tracking-tight">New</p>
            </div>
            <p className="w-[247px] text-[#252b42] text-xl font-normal font-['Montserrat'] leading-[30px] tracking-tight">Loudest à la Madison #1 <br/>(L&apos;integral)</p>
            <p className="w-[280px] text-[#727272] text-sm font-normal font-['Montserrat'] leading-tight tracking-tight">We focus on ergonomics and meeting <br/>you where you work. It&apos;s only a <br/>keystroke away.</p>
            <div className="self-stretch py-[15px] justify-between items-center inline-flex">
              <div className="justify-start items-center gap-[5px] flex">
                <div className="w-4 h-4 relative">
                  <div className="w-4 h-4 left-0 top-0 absolute" />
                </div>
                <p className="text-[#727272] text-xs font-normal font-['Montserrat'] leading-none tracking-tight">22 April 2021</p>
              </div>
              <div className="justify-start items-center gap-[5px] flex">
                <div className="w-4 h-[14.67px] relative" />
                <p className="text-[#727272] text-xs font-normal font-['Montserrat'] leading-none tracking-tight">10 comments</p>
              </div>
            </div>
            <div className="justify-start items-center gap-2.5 inline-flex">
              <p className="text-[#727272] text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">Learn More</p>
              <div className="w-[9px] h-4 relative" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[329px] flex-col justify-start items-center inline-flex">
        <div className="h-[606px] bg-white shadow flex-col justify-start items-start flex">
          <div className="h-[300px] relative">
          <Image 
            src="/assets/unsplash_cover-3.png"
            alt="image 3"
            width={348}
            height={300}
            className="w-[348px] h-[300px]"/>
            <div className="px-2.5 left-[20px] top-[20px] absolute bg-[#e64040] rounded-[3px] shadow justify-start items-center inline-flex">
              <p className="text-center text-white text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">NEW</p>
            </div>
          </div>
          <div className="self-stretch h-[306px] px-[25px] pt-[25px] pb-[35px] flex-col justify-start items-start gap-2.5 flex">
            <div className="justify-start items-center gap-[15px] inline-flex">
              <p className="text-[#727272] text-xs font-normal font-['Montserrat'] leading-none tracking-tight">Google</p>
              <p className="text-[#727272] text-xs font-normal font-['Montserrat'] leading-none tracking-tight">Trending</p>
              <p className="text-[#727272] text-xs font-normal font-['Montserrat'] leading-none tracking-tight">New</p>
            </div>
            <p className="w-[247px] text-[#252b42] text-xl font-normal font-['Montserrat'] leading-[30px] tracking-tight">Loudest à la Madison #1 <br/>(L&apos;integral)</p>
            <p className="w-[280px] text-[#727272] text-sm font-normal font-['Montserrat'] leading-tight tracking-tight">We focus on ergonomics and meeting <br/>you where you work. It&apos;s only a <br/>keystroke away.</p>
            <div className="self-stretch py-[15px] justify-between items-center inline-flex">
              <div className="justify-start items-center gap-[5px] flex">
                <div className="w-4 h-4 relative">
                  <div className="w-4 h-4 left-0 top-0 absolute" />
                </div>
                <p className="text-[#727272] text-xs font-normal font-['Montserrat'] leading-none tracking-tight">22 April 2021</p>
              </div>
              <div className="justify-start items-center gap-[5px] flex">
                <div className="w-4 h-[14.67px] relative" />
                <p className="text-[#727272] text-xs font-normal font-['Montserrat'] leading-none tracking-tight">10 comments</p>
              </div>
            </div>
            <div className="justify-start items-center gap-2.5 inline-flex">
              <p className="text-[#727272] text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">Learn More</p>
              <div className="w-[9px] h-4 relative" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 
            <Footer/>
        </>
  );
};