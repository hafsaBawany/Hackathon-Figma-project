import Header from "../components/Header";
const Sign = () => {
    return (
        <><Header />
            <div className="flex items-center justify-center">
                <div className="w-[380px] h-[489px] justify-center flex flex-col">
                    <div className="w-[324px] h-[128px] mt-[10px] ">
                        <div className="justify-center flex items-center "><img src="/NikeLogo.svg" alt="" className=" justify-center flex" /></div>
                        <h1 className="w-[186.5px] h-[57px] mt-[46px] ml-[70px] font-helvetica text-[18px] font-bold leading-[26px] text-center ">YOUR ACCOUNT FOR EVERYTHING NIKE</h1>
                    </div>
                    <div className="w-[324px] flex flex-col  p-4 space-y-4 mt-[25px]">
                        <input
                            type="text"
                            placeholder="Enter your E-mail"
                            className="w-full h-[40px] text-[16px] font-medium rounded-[5px] border border-[#E5E5E5] bg-white placeholder:text-gray-500"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full h-[40px] text-[16px] font-medium rounded-[5px] border border-[#E5E5E5] bg-white placeholder:text-gray-500"
                        />
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="w-[20px] h-[20px] bg-white border-2 border-[#8D8D8D] rounded-sm checked:bg-[#8D8D8D] checked:border-[#8D8D8D] cursor-pointer"
                            />
                            <label className="text-[12px] font-helvetica text-[#8D8D8D]">
                                Your label text here
                            </label>
                        </div>
                    </div>

                    <div className="w-[324px]">
                        <p className="text-center text-[12px] font-helvetica font-normal leading-[16px] text-[#8D8D8D] mb-4">
                            By logging in, you agree to Nikes Privacy Policy and Terms of Use.
                        </p>
                        <button className="w-full h-[40px] bg-[#000000] text-white rounded-[3px]">
                            SIGN IN
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Sign;