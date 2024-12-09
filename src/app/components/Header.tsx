import Link from "next/link"

const Header = () => {
    return (
        <div>
            <div className="w-[100%] h-[96px]">
                <div className="w-[100%] h-[36px] bg-[#F5F5F5] flex justify-between items-center">
                    <img
                        src="/HeaderLogo.svg"
                        alt=""
                        className="w-[24px] h-[24px] top-[6px] left-[48px] relative"
                    />


                    <div className="w-[279.78px] h-[36px] gap-[2px] flex justify-between  ">
                        <Link href="/" className="text-[12px] font-[400] leading-[18px] mt-[6px] hover:underline">Find a Store</Link>
                        <Link href="/Help" className="text-[12px] font-[400] leading-[18px] mt-[6px] hover:underline">Help</Link>
                        <Link href="/JoinUs" className="text-[12px] font-[400] leading-[18px] mt-[6px] hover:underline">Join Us</Link>
                        <Link href="/SignIn" className="text-[12px] font-[400] leading-[18px] mt-[6px] hover:underline">Sign In </Link>
                    </div>

                </div>
                <div className="w-[100%] h-[60px] flex justify-between ">
                    <img
                        src="/NikeLogo.svg"
                        alt=""
                        className="w-[58.85px] h-[20.45px] top-[18.51px] left-[38.26px] relative" />


                    <div className="w-[1211px] h-[60px] ml-[117px] flex">
                        <ul className="w-[760px] h-[60px] top-[4px] ml-[34px] flex justify-around items-center font-helvetica text-[16px] font-[400] leading-[24px]">
                            <li className="w-[115.81px] h-[24px] ">New & Featured</li>
                            <li className="w-[31.33px] h-[17px] 
                            ">Men</li>
                            <li className="w-[55.04px] h-[17px] ">Women</li>
                            <li className="w-[31.33px] h-[17px] ">Kids</li>
                            <li className="w-[32.23px] h-[17px] ">Sale</li>
                            <li className="w-[55.33px] h-[17px] ">SNKRS</li>
                        </ul>
                        <div className="w-[180px] h-[40px] bg-[#F5F5F5] mt-[10px] ml-[100px] rounded-[100px] flex items-center px-2">

                            <img
                                src="/Search.svg"
                                alt="Logo"
                                className="w-[20px] h-[20px] mr-2"
                            />

                            
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full h-full bg-transparent border-none outline-none text-sm text-gray-700"
                            />
                        </div>

                    </div>
                    <div className=" w-[84px] h-[60px] left-[1318px] p-[12px] gap-[12px] flex">
                      <Link href="/Wish">  <img src="/Wish.svg" alt="" className="w-[24px] h-[24px] m-[2px] " /> </Link>
                      <Link href="/Cart"><img src="/Cart.svg" alt="" className="w-[24px] h-[24px] m-[2px] " /></Link>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Header;