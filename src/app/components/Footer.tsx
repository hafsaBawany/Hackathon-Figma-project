import React from "react";
const Footer = () => {
    return (
        <div className="w-[1440px] h-[331px] bg-black p-[40px]">
            <div className="w-[1372px] h-[213px] mt-[40px] my-[34px] flex
            ">
                <div className="w-[1029px] h-[213px] flex">
                    <ol className="w-[245.25px] h-[169.62] text-[#FFFFFF] text-[11px]">
                        <h2 className="text-[10px] font-bold mb-[10px]">Find A Store</h2>
                        <li>Become A Member</li>
                        <li>Sign Up for Email</li>
                        <li>Send Us Feedback</li>
                        <li>Student Discounts</li>

                    </ol>
                    <ol className="w-[245.25px] h-[213px] text-[#7E7E7E] text-[11px] ">
                        <h2 className="text-[10px] font-bold mb-[10px]">Get Help</h2>
                        <li>Order Status</li>
                        <li>Delivery</li>
                        <li>Returns</li>
                        <li>Payment Options</li>
                        <li>Contact Us On Nike.com Inquiries</li>
                        <li>Contact Us On All Other Inquiries</li>
                    </ol>
                    <ol className="w-[245.25px] h-[151px] text-[#7E7E7E] text-[11px] ">
                        <h2 className="text-[10px] font-bold mb-[10px]">About Nike</h2>
                        <li>News</li>
                        <li>Careers</li>
                        <li>Investors</li>
                        <li>Sustainability</li>

                    </ol>
                </div>
                <div className="w-[337px] h-[37px] ml-[1029] flex">
                    <img
                        src="/Icon-1.svg"
                        alt=""
                        className="w-[30px] h-[30px] ml-[169px]" />
                    <img
                        src="/Icon-2.svg"
                        alt=""
                        className="w-[30px] h-[30px] ml-[6px]" />
                    <img
                        src="/Icon-3.svg"
                        alt=""
                        className="w-[30px] h-[30px] ml-[6px]" />
                    <img
                        src="/Icon-4.svg"
                        alt=""
                        className="w-[30px] h-[30px] ml-[6px]" />
                </div>
                
            </div>
            <div className="w-[1440px] h-[62px] mt-[3px] my-[34px] flex bg-black">
                    <div className="w-[672px] h-[32px]">
                        <p className="text-[11px] text-[#7E7E7E] text-center mt-[25px]">© 2023 Nike, Inc. All Rights Reserved</p>
                    </div>
                </div>
        </div>
    )
}
export default Footer;