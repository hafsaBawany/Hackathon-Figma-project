import Header from "../components/Header";
import Footer from "../components/Footer";
const Help = () => {
    return (
        <div>
            <Header />
            <div className="w-[1428px] h-[1230px] mt-[48px] items-center flex flex-col">
                <div className="w-[1440px] h-[132px] flex flex-col justify-center items-center">
                    <h1 className=" font-bold text-[32px]">GET HELP</h1>
                    <input
                        type="text"
                        placeholder="What can we help you with?"
                        className="w-[457.33px] h-[56px] p-[12px] border border-[#757575] bg-white rounded-[8px] text-[16px] placeholder-[#757575]"
                    />
                </div>
                <div className="w-[1253px] h-[1042px] mx-[20px] flex">
                    <div className="w-[939.75px] h-[1042px] ">
                        <h1 className=" font-semibold text-[32px]">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h1>
                        <div className="w-[923.74px] h-[958px] m-[10px]">
                            <p className="text-[15px]">We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
                            <div className="w-[923.75px] text-[14px] space-y-4">
                                <p>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
                                <p>If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.</p>
                                <p>Apple Pay</p>
                            </div>
                            <div className="w-[923.75px] h-[115px] text-[14px] space-y-4">
                                <p>Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, join us today.</p>
                                <button className="w-[106.32px] h-[39px] bg-[#000000] text-white rounded-[30px]">
                                    JOIN US
                                </button>
                                <button className="w-[129.84px] h-[39px] bg-[#000000] text-white rounded-[30px] ml-[4px]">
                                    SHOP NIKE
                                </button>
                            </div>
                            <div className="w-[923.75px] h-[168px] text-[14px] space-y-3">
                                <h1 className="font-semibold ">FAQs</h1>
                                <h1 className="font-semibold mt-[4px]">Does my card need international purchases enabled?</h1>
                                <p className="font- ">Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
                                <p className="font- ">Please note, some banks may charge a small transaction fee for international orders.</p>
                            </div>
                            <div className="w-[923.75px] h-[56px] space-y-2 mt-[15px] mb-[5px]">
                                <h1 className="font-semibold">Can I pay for my order with multiple method</h1>
                                <p>No, payment for Nike orders can't be split between multiple payment methods.</p>
                            </div>
                            <div className="w-[923.75px] h-[56px] space-y-2 mt-[15px] mb-[5px]">
                                <h1 className="font-semibold">What payment method is accepted for SNKRS orders?</h1>
                                <p>You can use any accepted credit card to pay for your SNKRS order.</p>
                            </div>
                            <div className="w-[923.75px] h-[112px] space-y-2 mt-[15px] mb-[5px]">
                                <h1 className="font-semibold">Why don't I see Apple Pay as an option?</h1>
                                <p>To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.</p>
                            </div>
                            <div className="w-[923.75px] h-[175px] space-y-2 mt-[15px] mb-[5px]">
                                <h1 className="font-semibold text-[15px] text-[] mb-[30px]">Was this answer helpful?</h1>
                                <h1 className="font-bold text-[16px] text-[#757575] mb-[10px]">RELATED</h1>
                                <p className="font-semibold text-[16px] mb-[30px]">WHAT ARE NIKE'S DELIVERY OPTIONS?</p>
                                <p className="font-semibold text-[16px] mb-[30px]">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>
                            </div>

                        </div>
                    </div>
                    <div className="w-[313.25px] h-[1042px] flex flex-col justify-center ">
                          <h1 className="w-[1782.62px] text-[28px] font-bold mx-[40px]">CONTACT US</h1>
                          <img src="/Frame.svg" alt="" className="w-[265.25px] h-[836px] mx-[20px]" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Help;