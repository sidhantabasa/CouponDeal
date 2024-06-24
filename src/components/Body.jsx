import React from "react";
import Marquee from "react-fast-marquee";
import s1 from "./images/1.png";
import s2 from "./images/2.png";
import s3 from "./images/3.png";
import sid from "./images/mobileBG.png";
import slogan from "./images/tagline.png";

// import Card from "./Card";
// import ScrollToTop from "./ScrollToTop";

const Body = () => {
  return (
    // Landing section
    <div className="bg-[#181e24] font-custom">
      <body>
        <div className="relative w-full pt-24 flex flex-col md:flex-row items-center">
          <img
            src={slogan}
            alt="slogan"
            className="ml-4 md:ml-24 mt-4 md:mt-12 border-r-2 max-w-full md:max-w-[700px] h-auto"
          />
          <p className="font-custom text-white  p-6 w-[680px] text-pretty md:p-10 text-3xl md:text-4xl tracking-wide leading-normal md:leading-normal">
            <span className="bg-gradient-to-tl from-cyan-500 to-green-500 bg-clip-text text-transparent font-bold text-6xl">
              CouponDeal
            </span>{" "}
            is a platform where you can sell your unused coupons and purchase
            useful discounts according to your needs at reasonable prices.
          </p>
        </div>

        {/*  Landing section ends */}

        {/* Main div */}
        <div className="bg-[#181e24] ">
          {/* Recently Uploaded coupons section */}
          <div>
            <h1 className="text-center mt-12 font-extrabold text-3xl p-2 bg-[#181e24] shadow-xl text-white">
              RECENT COUPONS{" "}
            </h1>
            <div className="bg-[#181e24] h-auto m-8 max-w-xl"></div>
          </div>
          {/* Recently Uploaded coupons section ends */}

          <h1 className="text-center font-extrabold text-4xl mt-2 p-1 shadow-xl  text-white">
            ABOUT COUPONDEAL{" "}
          </h1>

          <p className="px-40 pl-44 text-white mt-4  py-6 mb-9 ">
            Welcome to CouponDeal , your ultimate destination for the best
            e-coupon and deals online ! Our platform is dedicated to helping to
            you to buy or sell yours coupons whether you're looking for discount
            on fashion , electronics , groceries or travel , we have a wide
            range of exclusive offer to cater to your need . Join our community
            , explore , save and enjoy !
          </p>

          <h2 className="text-center font-bold text-3xl mt-3 box-shadoq-lg  text-white">
            WHAT WE OFFER
          </h2>

          <div className="px-40 py-4 mb-16  grid grid-rows-2 grid-cols-3  ">
            <div className="py-6 px-6 m-4 text-center  rounded-xl shadow-md bg-[#2a323c] duration-300 hover:scale-110">
              <h3 className="font-extrabold  text-2xl py-2 mt-3 text-white ">
                Buy Unused Coupon
              </h3>
              <p className="text-white py-3 px-3 ">
                Find great deals and discounts from a wide range of stores and
                services. Whether you are looking for fashion, electronics,
                dining, or travel, you can buy unused coupons at amazing prices
                from other users.
              </p>
            </div>
            <div className="py-6 px-6 m-4 text-center  rounded-xl shadow-md bg-[#2a323c] duration-300 hover:scale-110">
              <h3 className="font-extrabold  text-2xl py-2 mt-3 text-white ">
                Sell Unused Coupons
              </h3>
              <p className="text-white py-3 px-3 ">
                Got unused coupons that you don't need? Sell them to others and
                make some extra money. Our platform provides an easy and secure
                way to list your coupons and find interested buyers.
              </p>
            </div>
            <div className="py-6 px-6 m-4 text-center  rounded-xl shadow-md bg-[#2a323c] duration-300 hover:scale-110">
              <h3 className="font-extrabold  text-2xl py-2 mt-3 text-white ">
                Secure Transactions
              </h3>
              <p className="text-white py-3 px-3 ">
                We prioritize your safety. Our secure payment gateway ensures
                that all transactions are protected. Buy and sell with
                confidence knowing your information is safe with us.
              </p>
            </div>
            <div className="py-6 px-6 m-4 text-center  rounded-xl shadow-md bg-[#2a323c] duration-300 hover:scale-110">
              <h3 className="font-extrabold  text-2xl py-2 mt-3 text-white ">
                Wide Selection
              </h3>
              <p className="text-white py-3 px-3 ">
                Explore a vast collection of coupons across various categories.
                Our platform caters to all your shopping needs with discounts
                from top brands and retailers.
              </p>
            </div>
            <div className="py-6 px-6 m-4 text-center  rounded-xl shadow-md bg-[#2a323c] duration-300 hover:scale-110">
              <h3 className="font-extrabold  text-2xl py-2 mt-3 text-white ">
                Easy to Use
              </h3>
              <p className="text-white py-3 px-3 ">
                Our user-friendly interface makes buying and selling coupons a
                breeze. Simply register, list your coupons for sale, or browse
                available coupons to purchase.
              </p>
            </div>
            <div className="py-6 px-6 m-4 text-center  rounded-xl shadow-md bg-[#2a323c] duration-300 hover:scale-110">
              <h3 className="font-extrabold  text-2xl py-2 mt-3 text-white ">
                Community and Support
              </h3>
              <p className="text-white py-3 px-3 ">
                Join our community of savvy shoppers and coupon enthusiasts.
                Share tips, ask questions, and get support from our dedicated
                customer service team whenever you need it.
              </p>
            </div>
          </div>

          {/* How Its Work Section */}
          <h2 className="text-center font-bold text-4xl tracking-wide  text-white ">
            HOW ITS WORKS
          </h2>
          <div className="flex overflow-x-auto h-[650px] scrollbar-hide mb-24">
            <img src={s1} alt="cs" />
            <img src={s2} alt="cs" />
            <img src={s3} alt="cs" />
          </div>
          <h2 className="text-center font-bold text-4xl tracking-wide mb-10 text-white ">
            TOP BRANDS
          </h2>

          <div className=" relative mx-40 space-y-3 ">
            <div className="flex">
              <div className="absolute h inset-0 z-40  bg-gradient-to-r from-[#181e24] via-transparent to-[#181e24]  "></div>
              {/* <div className="absolute ml-[1090px] w-[20px] inset-0 z-40 bg-[#181e24]  "></div> */}
            </div>

            <Marquee direction="right " className="p-3">
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                AMAZON
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                FLIPKART
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                SAMSUNG
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                BOAT
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                MYNTRA
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                ADIDAS
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                NETFLIX
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                SPOTIFY
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                NIKE
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                SONY
              </span>
            </Marquee>
            <Marquee direction="left" className="p-3">
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                SMART BAZAAR
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                REALME
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                FIRST CRY
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                TANISHQ
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                MYNTRA
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                BABY OYE
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                MAA TARINI JEWELLERS
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                KINDLE
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                REEBOK
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                PUMA
              </span>
            </Marquee>
            <Marquee direction="right" className="p-3">
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                REAMLE
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                REDMI
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                INOX
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                MC DONALD'S
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                MAKE MY TRIP
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                DOMINOS
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                GOIBIBO
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                PETER ENGLAND
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                YATRA
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                PANTALOONS
              </span>
            </Marquee>
            <Marquee direction="left" className="p-3">
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                HOTSTAR
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                ZEE 5
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                SENCO GOLD
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                MED PLUS
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                RAYMOND
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                BOOK MY SHOW
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                LENOVO
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                SUBWAY
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                ASUS
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                ONEPLUS
              </span>
            </Marquee>
            <Marquee direction="right" className="p-3">
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                PC JEWELLERS
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                MAMA EARTH
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                INOX
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                KFC
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                MAKE MY TRIP
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                CROMA
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                GODREJ
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                D-MART
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                HIMALAYA
              </span>
              <span className=" bg-[#2a323c] p-3 px-5 m-3 text-white shadow-lg   rounded-md">
                IKEA
              </span>
            </Marquee>
          </div>

          <h2 className="text-center font-bold text-4xl mt-28 text-white ">
            TEAM MEMBERS
          </h2>

          <div className="flex py-16 justify-center">
            <div className="px-24 py-4 ">
              <div className=" w-44">
                <img src={sid} alt="sid" className=" h-56 w-44 rounded-full " />
                <h3 className="text-center text-lg text-white mt-3 font-bold">
                  SIDHANTA BASA
                </h3>
                <p className="text-center">Frontend Developer</p>
                <div className="flex justify-around text-white">
                  <button>
                    <i className="fab fa-instagram"></i>
                  </button>
                  <button>
                    <i class="fab fa-github"></i>
                  </button>
                  <button>
                    <i className="fab fa-linkedin"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="px-24  text-white py-4 ">
              <div className="h-56 w-44">
                <img src={sid} alt="sid" className=" h-56 w-44 rounded-full " />
                <h3 className="text-center text-lg font-bold">UMESH MAHATO</h3>
                <div className="flex justify-around text-white">
                  <button>
                    <i className="fab fa-instagram"></i>
                  </button>
                  <button>
                    <i class="fab fa-github"></i>
                  </button>
                  <button>
                    <i className="fab fa-linkedin"></i>
                  </button>
                </div>
                <p className="text-center">React JS Developer</p>
                
              </div>
            </div>
            <div className="px-24 py-4 ">
              <div className="h-56 w-44">
                <img src={sid} alt="sid" className=" h-56 w-44 rounded-full " />
                <h3 className="text-center text-lg text-white font-bold">
                  BAISHNAVI
                </h3>
                <div className="flex justify-around text-white">
                  <button>
                    <i className="fab fa-instagram"></i>
                  </button>
                  <button>
                    <i class="fab fa-github"></i>
                  </button>
                  <button>
                    <i className="fab fa-linkedin"></i>
                  </button>
                </div>
                <p className="text-center text-white">Content Writer</p>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </body>
    </div>
  );
};

export default Body;
