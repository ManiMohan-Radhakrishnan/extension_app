import React from "react";
import rewardBg from "../../../assets/images/reward-bg.png";
import Star from "../../../assets/images/star.png";
import { Image } from "@nextui-org/react";

const Collector = () => {
  return (
    <div
      className="collector-card relative rounded-lg w-full md:w-[48.5%] lg:w-[48.75%] xxl:w-full"
      style={{
        backgroundImage: `url(${rewardBg.src})`,
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" z-10 inset-0 flex px-4 py-3 justify-between h-full">
        <div className="info-wrapper flex justify-between w-full">
          <div className="flex flex-col justify-between">
            <div className="title-wrapper flex flex-col gap-1">
              <h4 className="text-2xl font-bold text-[#0C0C0D]">Collector</h4>
              <div className="flex items-center gap-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="w-4 h-4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.00003 15.1109C11.9274 15.1109 15.1111 11.9271 15.1111 7.99978C15.1111 4.07242 11.9274 0.888672 8.00003 0.888672C4.07267 0.888672 0.888916 4.07242 0.888916 7.99978C0.888916 11.9271 4.07267 15.1109 8.00003 15.1109ZM3.62682 10.8497C3.23149 10.5884 3.03149 10.0937 3.14006 9.63413L3.14023 9.63361C3.38595 8.50529 4.57713 8.72425 4.57713 8.72425C4.84269 8.76312 5.08497 8.86768 5.33512 8.97564C5.40418 9.00545 5.47384 9.03551 5.54476 9.06453C5.53907 9.05317 5.53516 9.04462 5.53214 9.03802C5.52735 9.02754 5.52479 9.02193 5.52086 9.01769C5.49327 8.9882 5.46541 8.95896 5.43755 8.92971C5.38183 8.87122 5.32611 8.81273 5.27255 8.75225C5.24536 8.72149 5.21627 8.71457 5.17921 8.71233C4.92449 8.69643 4.80847 8.35857 4.89419 8.21185C4.94977 8.11645 4.92311 8.04508 4.86908 7.97181C4.60968 7.93621 4.49851 7.72468 4.6109 7.49397C4.62163 7.47202 4.62475 7.43642 4.61401 7.4162C4.59829 7.38627 4.57691 7.35938 4.55407 7.33063C4.5442 7.31821 4.53405 7.30545 4.52397 7.29194C4.44605 7.34379 4.36466 7.35813 4.29661 7.30957C4.25309 7.27856 4.21712 7.2371 4.17858 7.19268C4.16084 7.17223 4.14256 7.15116 4.12275 7.13019C4.05678 7.13382 3.98561 7.15922 3.93297 7.22316C4.00466 7.4238 3.93037 7.46424 3.76864 7.52698L3.80794 7.72537C3.86647 7.73557 3.91929 7.7468 3.94266 7.77929C3.96024 7.80358 3.96495 7.83715 3.97002 7.87334C3.97235 7.88992 3.97475 7.90706 3.97851 7.92411C4.04916 7.98477 4.14544 8.00101 4.24119 8.01069C4.38613 8.02521 4.50613 8.23155 4.45211 8.3603C4.40068 8.48265 4.31081 8.54901 4.15877 8.54659C3.87565 8.5421 3.63201 8.4353 3.43963 8.23449C2.94629 7.71967 3.0533 6.92454 3.66924 6.54866C4.10994 6.27976 4.60709 6.35096 4.99791 6.66825C5.24501 6.86872 5.41194 7.12846 5.55809 7.40445C5.59464 7.47343 5.63025 7.54295 5.66585 7.61246C5.72791 7.73361 5.78996 7.85474 5.85697 7.97302C5.90926 8.0653 5.97333 8.15447 6.04779 8.22965C6.1581 8.34129 6.29922 8.36134 6.44537 8.30742C6.58581 8.25557 6.61057 8.09502 6.49698 7.99894C6.48515 7.9889 6.47233 7.98004 6.45949 7.97118C6.45465 7.96784 6.44981 7.9645 6.44503 7.96109C6.24901 7.82111 6.07446 7.65883 5.9226 7.47167C5.41904 6.85109 5.23099 6.14168 5.34978 5.35761C5.43272 4.8103 5.67446 4.32969 6.06546 3.9355C6.66858 3.32753 7.39915 3.0467 8.25959 3.12326C8.76436 3.16819 9.2196 3.3474 9.62012 3.65225C10.1233 4.03539 10.4548 4.53638 10.6073 5.15282C10.7216 5.61407 10.7119 6.07324 10.5787 6.52689C10.4258 7.04724 10.1394 7.48412 9.71987 7.83131C9.68501 7.86014 9.64873 7.88723 9.61244 7.91433C9.57717 7.94068 9.54189 7.96702 9.50792 7.99496C9.38705 8.09451 9.41233 8.25263 9.55675 8.31053C9.69407 8.36548 9.87311 8.32643 9.9784 8.20563C10.0437 8.1308 10.1012 8.04698 10.1491 7.96005C10.2147 7.84142 10.2769 7.72097 10.3391 7.60051C10.3801 7.5211 10.4211 7.44169 10.4631 7.3628C10.6049 7.09632 10.7703 6.84746 11.0115 6.65753C11.2446 6.47418 11.5079 6.37308 11.8059 6.38863C12.087 6.40332 12.3346 6.50701 12.536 6.70765C12.7479 6.91883 12.8673 7.17495 12.8664 7.47375C12.8652 7.87468 12.6896 8.18765 12.3476 8.40212C12.1827 8.50564 11.9997 8.55126 11.8056 8.5459C11.6037 8.54037 11.4762 8.34526 11.559 8.17072C11.6009 8.08241 11.6666 8.02279 11.7701 8.00913C11.865 7.99652 11.9613 7.982 12.0335 7.91184C12.0189 7.78499 12.0387 7.76045 12.193 7.71465C12.1962 7.70223 12.1999 7.68977 12.2036 7.67724C12.2192 7.62526 12.2351 7.57204 12.2151 7.51522C12.0591 7.47634 11.9973 7.38855 12.0676 7.22455C12.0108 7.16026 11.9395 7.13019 11.8473 7.13105C11.8207 7.20796 11.7834 7.27466 11.7072 7.31234C11.6266 7.35209 11.5497 7.33515 11.4669 7.29592L11.3642 7.45042C11.5123 7.7048 11.4087 7.92273 11.1294 7.97457L11.1259 7.98014C11.0545 8.09216 11.0525 8.09528 11.1062 8.20632C11.191 8.3819 11.0563 8.7068 10.8136 8.7125C10.7677 8.71354 10.7439 8.73548 10.7166 8.76625C10.6725 8.81618 10.6265 8.86446 10.5805 8.91275C10.5552 8.93934 10.5298 8.96593 10.5048 8.99281C10.4944 9.004 10.4855 9.01661 10.4766 9.02919C10.4727 9.03468 10.4688 9.04016 10.4648 9.04552C10.5793 9.00727 10.6884 8.96269 10.7967 8.91845C10.8435 8.89933 10.8902 8.88027 10.937 8.86181L10.9506 8.85648C11.0993 8.79787 11.2495 8.73873 11.435 8.72045C11.435 8.72045 12.2911 8.58945 12.7381 9.32202C12.9197 9.65729 12.9372 10.0008 12.7888 10.3525C12.5919 10.8191 12.0572 11.1193 11.5583 11.0267C11.2151 10.9629 10.9504 10.7854 10.7729 10.4854C10.6712 10.3138 10.7936 10.0985 10.9928 10.0871C11.0989 10.081 11.1781 10.1242 11.2409 10.2079C11.301 10.2879 11.3682 10.3613 11.4683 10.3893C11.6227 10.2592 11.701 10.2915 11.8056 10.4217C11.9031 10.4125 11.9827 10.3676 12.0456 10.292C11.9616 10.1108 11.9982 10.0157 12.1878 9.91911C12.2014 9.81887 12.1691 9.73419 12.1007 9.66057C11.8839 9.78206 11.7076 9.68148 11.6328 9.48326C11.5339 9.47497 11.4451 9.51523 11.3588 9.55533C11.2824 9.59087 11.2072 9.62926 11.1321 9.66767C11.064 9.70246 10.9959 9.73727 10.9268 9.76997C10.9069 9.77937 10.8871 9.7888 10.8672 9.79823C10.6999 9.87765 10.5324 9.95716 10.3607 10.0259C10.195 10.0924 10.0205 10.1344 9.84056 10.1469C9.54532 10.1673 9.2641 10.1125 8.99466 9.99203C8.97395 9.98273 8.95277 9.97465 8.92962 9.96581C8.91793 9.96135 8.90574 9.9567 8.89284 9.9516C8.89104 9.96143 8.88914 9.9695 8.88751 9.9764C8.88463 9.98865 8.88261 9.99722 8.88349 10.0055C8.94271 10.5374 9.05648 11.0543 9.31692 11.5291C9.43519 11.7446 9.57631 11.9428 9.79883 12.0622C9.98359 12.1614 10.1777 12.1733 10.3595 12.0553C10.5491 11.9324 10.6208 11.687 10.5407 11.477C10.4523 11.2458 10.2245 11.1223 9.99571 11.1466C9.94303 11.1523 9.89165 11.1693 9.84015 11.1863C9.80989 11.1963 9.77959 11.2063 9.74896 11.214C9.54445 11.2657 9.37112 11.1169 9.40177 10.9175C9.41649 10.8216 9.4719 10.7557 9.55484 10.7101C9.77476 10.5891 10.0064 10.5452 10.2579 10.5798C10.8868 10.6664 11.3285 11.2831 11.2184 11.9006C11.1202 12.4514 10.6603 12.8639 10.0698 12.8871C9.68281 12.9023 9.34999 12.754 9.06029 12.507C8.77579 12.2644 8.57128 11.9601 8.4028 11.6298C8.23829 11.3072 8.12227 10.9664 8.02617 10.6183C8.02317 10.6076 8.01696 10.5977 8.00837 10.5841C8.00357 10.5765 7.99803 10.5677 7.99188 10.557C7.98844 10.5681 7.98555 10.5774 7.98305 10.5854C7.97789 10.6019 7.97443 10.613 7.97128 10.6242C7.85318 11.0485 7.70634 11.4612 7.48019 11.8419C7.29023 12.1617 7.06148 12.4464 6.74477 12.6512C6.52745 12.7917 6.28953 12.8774 6.03048 12.8876C5.69853 12.9007 5.40207 12.7984 5.15376 12.576C4.92016 12.3669 4.77904 12.1006 4.76709 11.7893C4.74769 11.2873 4.96207 10.9019 5.42025 10.6781C5.76779 10.5082 6.11983 10.5259 6.45767 10.7203C6.58494 10.7936 6.63308 10.9347 6.58044 11.0595C6.52485 11.1914 6.40295 11.2508 6.25507 11.2151C6.22887 11.2087 6.2035 11.199 6.17809 11.1892C6.16336 11.1836 6.14862 11.1779 6.13368 11.1729C5.73524 11.0398 5.36363 11.3685 5.43532 11.7465C5.46805 11.9189 5.63653 12.1296 5.87394 12.1344C6.06026 12.1382 6.21593 12.0778 6.35308 11.9561C6.57005 11.7634 6.70356 11.5156 6.81473 11.255C6.96399 10.9049 7.04746 10.5361 7.09785 10.1602C7.09957 10.1476 7.10183 10.1348 7.10413 10.1219C7.1134 10.0696 7.12317 10.0145 7.09958 9.95401C7.09021 9.95779 7.0811 9.96145 7.0722 9.96502C7.04276 9.97686 7.01553 9.9878 6.98841 9.99895C6.782 10.0838 6.5704 10.1415 6.34477 10.1495C6.08208 10.1586 5.83048 10.1082 5.59117 10.0095C5.45394 9.95279 5.32043 9.887 5.18691 9.82121C5.10881 9.78273 5.03071 9.74425 4.95185 9.70758C4.79653 9.63534 4.63964 9.56621 4.48172 9.50002C4.45689 9.48962 4.42874 9.48697 4.39829 9.48409C4.3837 9.48272 4.36859 9.48129 4.35306 9.47894C4.33557 9.59749 4.26111 9.65349 4.16933 9.69634C4.07011 9.74266 3.98353 9.70067 3.90093 9.6585C3.81452 9.76668 3.79894 9.82216 3.82162 9.93051C3.89678 9.95263 3.94751 10.0005 3.98214 10.0736C4.01708 10.1472 3.99006 10.2097 3.96292 10.2726C3.95966 10.2802 3.95639 10.2877 3.95323 10.2953C4.02301 10.3688 4.09955 10.4147 4.19375 10.4218C4.31496 10.2775 4.37228 10.2723 4.53713 10.3933C4.54751 10.3868 4.5586 10.3805 4.56993 10.3741C4.59657 10.359 4.62452 10.3432 4.64761 10.3221C4.68073 10.2917 4.71067 10.2578 4.74065 10.2238C4.7555 10.2069 4.77036 10.1901 4.78562 10.1737C4.90267 10.0479 5.10579 10.0591 5.20588 10.1966C5.27307 10.2891 5.27376 10.4108 5.20657 10.5183C4.88605 11.0305 4.18561 11.219 3.62682 10.8497Z"
                    fill="#68686F"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 15.6667C12.2342 15.6667 15.6667 12.2342 15.6667 8C15.6667 3.76582 12.2342 0.333333 8 0.333333C3.76582 0.333333 0.333333 3.76582 0.333333 8C0.333333 12.2342 3.76582 15.6667 8 15.6667ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                    fill="#68686F"
                  />
                </svg>
                <span className="text-[#68686F] text-base font-medium">
                  8034-T2
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="m-0 text-[#68686F] text-xs font-medium">
                Get 2K Rewards to reach T3
              </p>
              <div className="flex flex-col">
                <div className="w-full bg-[#E7E7E9] rounded-full h-1.5">
                  <div className="bg-[#1B1B1D] h-1.5 rounded-full w-[45%]"></div>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="m-0 text-[#68686F] font-medium text-[0.625rem]">
                    T2
                  </p>
                  <p className="m-0 text-[#68686F] font-medium text-[0.625rem]">
                    T3
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-[-1rem]">
            <div className="icon">
              <Image
                src={Star.src}
                alt="seasonEarnBg"
                className="w-full h-auto max-w-[5.5rem] sm:max-w-[6rem] md:max-w-[8.5rem] lg:max-w-[9.5rem] xl:max-w-[11rem] xxl:max-w-[6.5rem] object-contain"
              />
            </div>
            <button
              type="button"
              className="flex w-fit mx-auto justify-center items-center gap-1 rounded-full bg-[#9B9CA1] border border-[#9B9CA1] px-4 py-2 text-xs font-medium text-white"
            >
              Claimed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collector;
