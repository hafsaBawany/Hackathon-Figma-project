import React from "react";

const Footer = () => {
    return (
        <div className="w-full bg-black p-4 sm:p-6">
            <div className="flex flex-wrap justify-between items-start gap-4">
                
                <div className="flex flex-wrap justify-between gap-6 w-full lg:w-[1029px]">
                    <ol className="text-white text-sm w-full sm:w-[245px]">
                        <h2 className="text-base font-bold mb-3">Find A Store</h2>
                        <li>Become A Member</li>
                        <li>Sign Up for Email</li>
                        <li>Send Us Feedback</li>
                        <li>Student Discounts</li>
                    </ol>
                    <ol className="text-gray-400 text-sm w-full sm:w-[245px]">
                        <h2 className="text-base font-bold mb-3">Get Help</h2>
                        <li>Order Status</li>
                        <li>Delivery</li>
                        <li>Returns</li>
                        <li>Payment Options</li>
                        <li>Contact Us On Nike.com Inquiries</li>
                        <li>Contact Us On All Other Inquiries</li>
                    </ol>
                    <ol className="text-gray-400 text-sm w-full sm:w-[245px]">
                        <h2 className="text-base font-bold mb-3">About Nike</h2>
                        <li>News</li>
                        <li>Careers</li>
                        <li>Investors</li>
                        <li>Sustainability</li>
                    </ol>
                </div>

                
                <div className="flex justify-center gap-3 w-full lg:w-auto">
                    <img src="/Icon-1.svg" alt="Icon 1" className="w-8 h-8" />
                    <img src="/Icon-2.svg" alt="Icon 2" className="w-8 h-8" />
                    <img src="/Icon-3.svg" alt="Icon 3" className="w-8 h-8" />
                    <img src="/Icon-4.svg" alt="Icon 4" className="w-8 h-8" />
                </div>
            </div>

            
            <div className="mt-4 w-full">
                <p className="text-gray-400 text-sm text-center">
                    © 2023 Nike, Inc. All Rights Reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;
