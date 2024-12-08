import Header from "../components/Header";

const JoinUs = () => {
    return (
        <>
            <Header />
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-[380px] flex flex-col justify-center items-center p-4">
                    <div className="w-[324px] flex flex-col items-center justify-center mb-6">
                        <img src="/NikeLogo.svg" alt="" className="w-[324px] h-[17px]" />
                        <h1 className="w-[231.22px] h-[31px] mt-[40px] font-bold text-center">BECOME A NIKE MEMBER</h1>
                        <p className="w-[282.08px] h-[60px] mt-[10px] text-[#8D8D8D] text-center">
                            Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
                        </p>
                    </div>
                    <div className="w-[324px] h-[561px] flex flex-col space-y-2 pt-[10px]">
                        <input
                            type="text"
                            placeholder="E-mail"
                            className="w-[324px] h-[40px] px-[17px] py-[12px] border border-[#E5E5E5] bg-white rounded-[3px] text-[16px] placeholder:text-gray-500"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-[324px] h-[40px] px-[17px] py-[12px] border border-[#E5E5E5] bg-white rounded-[3px] text-[16px] placeholder:text-gray-500"
                        />
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-[324px] h-[40px] px-[17px] py-[12px] border border-[#E5E5E5] bg-white rounded-[3px] text-[16px] placeholder:text-gray-500"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-[324px] h-[40px] px-[17px] py-[12px] border border-[#E5E5E5] bg-white rounded-[3px] text-[16px] placeholder:text-gray-500"
                        />
                        <input
                            type="text"
                            placeholder="Date Of Birth"
                            className="w-[324px] h-[40px] px-[17px] py-[12px] border border-[#E5E5E5] bg-white rounded-[3px] text-[16px] placeholder:text-gray-500"
                        />
                        <p className="w-[301.45px] h-[14px] text-[11px] text-[#8D8D8D] ml-[11.38px] ">Get a Nike Member Reward every year on your Birthday.</p>
                        <input
                            type="text"
                            placeholder="India"
                            className="w-[324px] h-[40px] px-[17px] py-[12px] border border-[#E5E5E5] bg-white rounded-[3px] text-[16px] placeholder:text-gray-500"
                        />
                        <div className="flex">
                        <input
                            type="text"
                            placeholder="Male"
                            className="w-[153.89px] h-[43px] px-[17px] py-[12px] border border-[#E5E5E5] bg-white rounded-[3px] text-[16px] placeholder:text-gray-500 ml-[5px] mr-[6px]"
                        />
                        <input
                            type="text"
                            placeholder="Female"
                            className="w-[153.89px] h-[43px] px-[17px] py-[12px] border border-[#E5E5E5] bg-white rounded-[3px] text-[16px] placeholder:text-gray-500"
                        /> </div>
                        <div className="w-[324px] h-[28px] mt-[406.34px] px-[34px]">
                            <p className="w-[247px] h-[28px] text-[11px] text-[#8D8D8D] ml-[11.38px]">Sign up for emails to get updates from Nike on products, offers and your Member benefits</p>
                        </div>
                        <div className="w-[324px] h-[59px] mt-[5px] ml-[10px] text-center">
                        <p className="w-[280px] h-[30px] text-[11px] text-[#8D8D8D] ml-[7.44px] p-[4px]">By creating an account, you agree to Nike's Privacy Policy and Terms of Use.</p>
                        </div>
                        <button className="w-full h-[40px] bg-[#000000] text-white rounded-[3px]">
                            JOIN US
                        </button>
                        <div className="w-[324px] h-[24px] mt-[5px] ml-[10px] text-center">
                        <p className="w-[148.85px] h-[14px] text-[11px] text-[#8D8D8D]  ml-[77px] p-[4px]">Already a Member? Sign In.</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default JoinUs;

