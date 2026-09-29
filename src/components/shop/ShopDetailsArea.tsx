 
import NiceSelect from "@/ui/NiceSelect";


export default function ShopDetailsArea() {
  const selectHandler = (e: any) => { return e; };

  return (
    <>
      {/* <!-- shop-details area start  --> */}
      <div className="it-shop-details__area pt-120 pb-130">
        <div className="container">
          <div className="it-shop-details__top-wrap mb-120">
            <div className="row">
              <div className="col-xl-6 col-lg-5">
                <div className="it-shop-details__wrapper">
                  <div className="it-shop-details__tab-content-box mb-20">
                    <div className="tab-content" id="nav-tabContent">
                      <div className="tab-pane fade show active" id="nav-one" role="tabpanel"
                        aria-labelledby="nav-one-tab">
                        <div className="it-shop-details__tab-big-img">
                          <img src="assets/img/shop/details-2-1.jpg" alt="" />
                        </div>
                      </div>
                      <div className="tab-pane fade" id="nav-two" role="tabpanel"
                        aria-labelledby="nav-two-tab">
                        <div className="it-shop-details__tab-big-img">
                          <img src="assets/img/shop/details-2-2.jpg" alt="" />
                        </div>
                      </div>
                      <div className="tab-pane fade" id="nav-three" role="tabpanel"
                        aria-labelledby="nav-three-tab">
                        <div className="it-shop-details__tab-big-img">
                          <img src="assets/img/shop/details-2-3.jpg" alt="" />
                        </div>
                      </div>
                      <div className="tab-pane fade" id="nav-four" role="tabpanel"
                        aria-labelledby="nav-four-tab">
                        <div className="it-shop-details__tab-big-img">
                          <img src="assets/img/shop/details-2-4.jpg" alt="" />
                        </div>
                      </div>
                      <div className="tab-pane fade" id="nav-four4" role="tabpanel"
                        aria-labelledby="nav-four-tab">
                        <div className="it-shop-details__tab-big-img">
                          <img src="assets/img/shop/details-2-5.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="it-shop-details__tab-btn-box">
                    <nav>
                      <div className="nav nav-tab justify-content-center" id="nav-tab" role="tablist">
                        <button className="nav-links active" id="nav-one-tab" data-bs-toggle="tab"
                          data-bs-target="#nav-one" type="button" role="tab" aria-controls="nav-one"
                          aria-selected="true">
                          <img src="assets/img/shop/details-sm-2-1.jpg" alt="" />
                        </button>
                        <button className="nav-links" id="nav-two-tab" data-bs-toggle="tab"
                          data-bs-target="#nav-two" type="button" role="tab" aria-controls="nav-two"
                          aria-selected="false">
                          <img src="assets/img/shop/details-sm-2-2.jpg" alt="" />
                        </button>
                        <button className="nav-links" id="nav-three-tab" data-bs-toggle="tab"
                          data-bs-target="#nav-three" type="button" role="tab" aria-controls="nav-three"
                          aria-selected="false">
                          <img src="assets/img/shop/details-sm-2-3.jpg" alt="" />
                        </button>
                        <button className="nav-links" id="nav-four-tab" data-bs-toggle="tab"
                          data-bs-target="#nav-four" type="button" role="tab" aria-controls="nav-four"
                          aria-selected="false">
                          <img src="assets/img/shop/details-sm-2-4.jpg" alt="" />
                        </button>
                        <button className="nav-links" id="nav-four4-tab" data-bs-toggle="tab"
                          data-bs-target="#nav-four4" type="button" role="tab" aria-controls="nav-four4"
                          aria-selected="false">
                          <img src="assets/img/shop/details-sm-2-5.jpg" alt="" />
                        </button>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7">
                <div className="it-shop-details__right-wrap">
                  <h3 className="it-shop-details__title-sm mb-30">A Holy Quran</h3>
                  <div className="it-shop-details__price d-flex align-items-center">
                    <del>$150.00 </del>
                    <span>$100.00</span>
                    <div className="it-shop-details__ratting">
                      <i className="flaticon-star"></i>
                      <span>
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12.4593 4.99287L9.69979 7.68284L10.3515 11.4821C10.3798 11.6482 10.3116 11.8161 10.1751 11.9154C10.0981 11.9716 10.0064 12 9.91465 12C9.84421 12 9.77333 11.9832 9.70865 11.9491L6.29656 10.1553L2.88492 11.9486C2.73607 12.0275 2.55488 12.0146 2.41843 11.9149C2.28198 11.8157 2.21376 11.6478 2.24211 11.4817L2.89378 7.6824L0.133811 4.99287C0.0133114 4.87502 -0.0305468 4.69871 0.0217287 4.53878C0.0740042 4.37885 0.212667 4.26145 0.379683 4.23709L4.19358 3.68332L5.89918 0.226933C6.04847 -0.0756445 6.54465 -0.0756445 6.69394 0.226933L8.39954 3.68332L12.2134 4.23709C12.3805 4.26145 12.5191 4.37841 12.5714 4.53878C12.6237 4.69915 12.5798 4.87458 12.4593 4.99287Z"
                            fill="#F1A300" />
                        </svg>
                        4.5k Customer reviews
                      </span>
                    </div>
                  </div>
                  <div className="it-shop-details__quantity-wrap">
                    <div className="it-shop-details__quantity-box d-flex align-items-center mb-30">
                      <div className="it-shop-details__quantity">
                        <div className="cart-minus"><i className="fal fa-minus"></i></div>
                        <input type="text" value="1" />
                        <div className="cart-plus"><i className="fal fa-plus"></i></div>
                      </div>
                      <div className="it-shop-details__btn">
                        <button className="it-btn-yellow theme-bg">
                          <span>
                            <span className="text-1">Add To Cart</span>
                            <span className="text-2">Add To Cart</span>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="it-shop-details__text pb-10">
                      <p>There are many variations of passages of Lorem Ipsum available, but the <br />
                        majority have suffered alteration in some form, by injected humour, or <br />
                        randomised words which donâ€™t look even slightly believable. If you are
                      </p>
                    </div>
                    <div className="it-shop-details__icon mb-40">
                      <a href="#">
                        <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.38235 15C8.14368 15 7.91358 14.913 7.73426 14.7551C7.05701 14.1595 6.40405 13.5998 5.82797 13.1062L5.82503 13.1036C4.13605 11.6561 2.67755 10.406 1.66276 9.17466C0.528374 7.79804 0 6.49281 0 5.06693C0 3.68157 0.472352 2.40348 1.32995 1.46794C2.19778 0.521344 3.38858 0 4.68335 0C5.65108 0 6.53733 0.307687 7.31742 0.914443C7.71111 1.22071 8.06796 1.59555 8.38235 2.03277C8.69687 1.59555 9.0536 1.22071 9.44741 0.914443C10.2275 0.307687 11.1138 0 12.0815 0C13.3761 0 14.567 0.521344 15.4349 1.46794C16.2925 2.40348 16.7647 3.68157 16.7647 5.06693C16.7647 6.49281 16.2365 7.79804 15.1021 9.17453C14.0873 10.406 12.6289 11.656 10.9402 13.1033C10.3631 13.5978 9.70911 14.1584 9.03032 14.7553C8.85112 14.913 8.62089 15 8.38235 15ZM4.68335 0.987634C3.66613 0.987634 2.73166 1.39591 2.05184 2.13734C1.36193 2.88997 0.981923 3.93034 0.981923 5.06693C0.981923 6.26616 1.42511 7.3387 2.4188 8.54449C3.37924 9.71002 4.8078 10.9343 6.46187 12.352L6.46494 12.3546C7.04319 12.8502 7.6987 13.412 8.38095 14.012C9.06728 13.4109 9.72382 12.8481 10.3032 12.3517C11.9572 10.9341 13.3856 9.71002 14.346 8.54449C15.3396 7.3387 15.7828 6.26616 15.7828 5.06693C15.7828 3.93034 15.4028 2.88997 14.7129 2.13734C14.0332 1.39591 13.0986 0.987634 12.0815 0.987634C11.3363 0.987634 10.6521 1.22586 10.0481 1.69562C9.5097 2.11445 9.13469 2.6439 8.91482 3.01436C8.80175 3.20486 8.60273 3.31857 8.38235 3.31857C8.16197 3.31857 7.96295 3.20486 7.84989 3.01436C7.63015 2.6439 7.25513 2.11445 6.71665 1.69562C6.11256 1.22586 5.4284 0.987634 4.68335 0.987634Z" fill="currentcolor" />
                        </svg>
                      </a>
                      <a href="#">
                        <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.16816 10.1367L6.7562 6.5L4.16816 2.86333C4.04494 2.69027 3.86857 2.54669 3.65659 2.44688C3.44461 2.34706 3.20443 2.2945 2.95996 2.29443H1.23211C1.10839 2.29443 0.989738 2.25415 0.902255 2.18245C0.814772 2.11075 0.765625 2.0135 0.765625 1.91211C0.765625 1.81071 0.814772 1.71346 0.902255 1.64176C0.989738 1.57006 1.10839 1.52978 1.23211 1.52978H2.95996C3.36739 1.53035 3.76756 1.61814 4.12086 1.78444C4.47416 1.95075 4.76833 2.18981 4.97424 2.47795L7.29639 5.7407L9.61855 2.47795C9.82445 2.18981 10.1186 1.95075 10.4719 1.78444C10.8252 1.61814 11.2254 1.53035 11.6328 1.52978H13.1676L12.0974 0.653493C12.0098 0.581703 11.9606 0.484334 11.9606 0.382807C11.9606 0.281281 12.0098 0.183912 12.0974 0.112122C12.185 0.0403313 12.3038 2.00134e-09 12.4277 0C12.5516 -2.00134e-09 12.6704 0.0403313 12.758 0.112122L14.6239 1.64142C14.6674 1.67693 14.7018 1.71912 14.7253 1.76557C14.7489 1.81202 14.761 1.86182 14.761 1.91211C14.761 1.96239 14.7489 2.01219 14.7253 2.05864C14.7018 2.10509 14.6674 2.14728 14.6239 2.18279L12.758 3.71209C12.6704 3.78388 12.5516 3.82421 12.4277 3.82421C12.3038 3.82421 12.185 3.78388 12.0974 3.71209C12.0098 3.6403 11.9606 3.54293 11.9606 3.4414C11.9606 3.33988 12.0098 3.24251 12.0974 3.17072L13.1676 2.29443H11.6328C11.3884 2.2945 11.1482 2.34706 10.9362 2.44688C10.7242 2.54669 10.5478 2.69027 10.4246 2.86333L7.83658 6.5L10.4246 10.1367C10.5482 10.3103 10.7254 10.4542 10.9382 10.5541C11.1511 10.6539 11.3922 10.7062 11.6375 10.7056H13.1722L12.1021 9.82928C12.0587 9.79374 12.0243 9.75154 12.0009 9.70509C11.9774 9.65865 11.9653 9.60887 11.9653 9.5586C11.9653 9.50833 11.9774 9.45855 12.0009 9.4121C12.0243 9.36566 12.0587 9.32346 12.1021 9.28791C12.1455 9.25236 12.197 9.22417 12.2536 9.20493C12.3103 9.18569 12.371 9.17579 12.4324 9.17579C12.4937 9.17579 12.5544 9.18569 12.6111 9.20493C12.6678 9.22417 12.7193 9.25236 12.7626 9.28791L14.6286 10.8172C14.672 10.8527 14.7065 10.8949 14.73 10.9414C14.7535 10.9878 14.7656 11.0376 14.7656 11.0879C14.7656 11.1382 14.7535 11.188 14.73 11.2344C14.7065 11.2809 14.672 11.3231 14.6286 11.3586L12.7626 12.8879C12.6751 12.9597 12.5562 13 12.4324 13C12.3085 13 12.1897 12.9597 12.1021 12.8879C12.0145 12.8161 11.9653 12.7187 11.9653 12.6172C11.9653 12.5157 12.0145 12.4183 12.1021 12.3465L13.1676 11.4702H11.6328C11.2254 11.4696 10.8252 11.3819 10.4719 11.2156C10.1186 11.0493 9.82445 10.8102 9.61855 10.5221L7.29639 7.2593L4.97424 10.5221C4.76833 10.8102 4.47416 11.0493 4.12086 11.2156C3.76756 11.3819 3.36739 11.4696 2.95996 11.4702H1.23211C1.10839 11.4702 0.989738 11.4299 0.902255 11.3582C0.814772 11.2865 0.765625 11.1893 0.765625 11.0879C0.765625 10.9865 0.814772 10.8892 0.902255 10.8175C0.989738 10.7459 1.10839 10.7056 1.23211 10.7056H2.95996C3.20443 10.7055 3.44461 10.6529 3.65659 10.5531C3.86857 10.4533 4.04494 10.3097 4.16816 10.1367Z" fill="currentcolor" />
                        </svg>
                      </a>
                    </div>
                    <div className="it-shop-details__Category pb-20">
                      <span><i>Tag:</i> TCareers & Success</span>
                      <span><i>SKU:</i> happy-strong-003</span>
                      <span><i>Categories:</i> Book,Happy</span>
                    </div>
                    <div className="it-shop-details__social">
                      <span>Share with friends:</span>
                      <a href="#">
                        <span>
                          <svg width="12" height="16" viewBox="0 0 12 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                              d="M1.82727 6.83333C1.14284 6.83333 1 6.96763 1 7.61111V8.77778C1 9.42126 1.14284 9.55556 1.82727 9.55556H3.48182V14.2222C3.48182 14.8657 3.62466 15 4.30909 15H5.96364C6.64807 15 6.79091 14.8657 6.79091 14.2222V9.55556H8.64871C9.1678 9.55556 9.30155 9.4607 9.44416 8.99145L9.7987 7.82478C10.043 7.02095 9.89246 6.83333 9.00326 6.83333H6.79091V4.88889C6.79091 4.45933 7.16129 4.11111 7.61818 4.11111H9.97273C10.6572 4.11111 10.8 3.97681 10.8 3.33333V1.77778C10.8 1.1343 10.6572 1 9.97273 1H7.61818C5.33373 1 3.48182 2.74111 3.48182 4.88889V6.83333H1.82727Z"
                              stroke="currentcolor" strokeWidth="1.5" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </a>
                      <a href="#">
                        <span>
                          <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                              d="M4.41177 0H0L5.23083 6.87316L0.334618 12.6389H2.59681L6.29998 8.27809L9.58823 12.5988H14L8.6172 5.52593L8.62673 5.53813L13.2614 0.0802914H10.9992L7.55741 4.13336L4.41177 0ZM2.43522 1.20371H3.80866L11.5648 11.395H10.1913L2.43522 1.20371Z"
                              fill="currentcolor" />
                          </svg>
                        </span>
                      </a>
                      <a href="#">
                        <span>
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M16.9989 10.0113C16.2575 9.87227 15.4949 9.7998 14.7168 9.7998C10.435 9.7998 6.62665 11.9938 4.19922 15.3997M14.5997 3.39941C12.0962 6.33329 8.33416 8.19931 4.12763 8.19931C3.05145 8.19931 2.00436 8.07718 1 7.84627M11.0941 17.0005C11.2946 16.0293 11.3999 15.0235 11.3999 13.9931C11.3999 8.94036 8.86738 4.47788 5 1.80078M16.9997 8.99983C16.9997 13.418 13.418 16.9997 8.99983 16.9997C4.58165 16.9997 1 13.418 1 8.99983C1 4.58165 4.58165 1 8.99983 1C13.418 1 16.9997 4.58165 16.9997 8.99983Z"
                              stroke="currentcolor" strokeWidth="1.5" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </a>
                      <a href="#">
                        <span>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M12.0586 4.94727C12.6109 4.94727 13.0586 4.49955 13.0586 3.94727C13.0586 3.39498 12.6109 2.94727 12.0586 2.94727V4.94727ZM12.0496 2.94727C11.4973 2.94727 11.0496 3.39498 11.0496 3.94727C11.0496 4.49955 11.4973 4.94727 12.0496 4.94727V2.94727ZM8 14C6.32181 14 5.16377 13.9979 4.2928 13.8808C3.45059 13.7675 3.02803 13.5636 2.73223 13.2678L1.31802 14.682C2.04735 15.4113 2.96231 15.7199 4.0263 15.8629C5.06152 16.0021 6.37835 16 8 16V14ZM0 8C0 9.62165 -0.00212373 10.9385 0.137058 11.9737C0.280107 13.0377 0.588687 13.9526 1.31802 14.682L2.73223 13.2678C2.43644 12.972 2.23246 12.5494 2.11922 11.7072C2.00212 10.8362 2 9.67819 2 8H0ZM14 8C14 9.67819 13.9979 10.8362 13.8808 11.7072C13.7675 12.5494 13.5636 12.972 13.2678 13.2678L14.682 14.682C15.4113 13.9526 15.7199 13.0377 15.8629 11.9737C16.0021 10.9385 16 9.62165 16 8H14ZM8 16C9.62165 16 10.9385 16.0021 11.9737 15.8629C13.0377 15.7199 13.9526 15.4113 14.682 14.682L13.2678 13.2678C12.972 13.5636 12.5494 13.7675 11.7072 13.8808C10.8362 13.9979 9.67819 14 8 14V16ZM8 2C9.67819 2 10.8362 2.00212 11.7072 2.11922C12.5494 2.23246 12.972 2.43644 13.2678 2.73223L14.682 1.31802C13.9526 0.588687 13.0377 0.280107 11.9737 0.137058C10.9385 -0.00212373 9.62165 0 8 0V2ZM16 8C16 6.37835 16.0021 5.06152 15.8629 4.0263C15.7199 2.96231 15.4113 2.04735 14.682 1.31802L13.2678 2.73223C13.5636 3.02803 13.7675 3.45059 13.8808 4.2928C13.9979 5.16377 14 6.32181 14 8H16ZM8 0C6.37835 0 5.06152 -0.00212373 4.0263 0.137058C2.96231 0.280107 2.04735 0.588687 1.31802 1.31802L2.73223 2.73223C3.02803 2.43644 3.45059 2.23246 4.2928 2.11922C5.16377 2.00212 6.32181 2 8 2V0ZM2 8C2 6.32181 2.00212 5.16377 2.11922 4.2928C2.23246 3.45059 2.43644 3.02803 2.73223 2.73223L1.31802 1.31802C0.588687 2.04735 0.280107 2.96231 0.137058 4.0263C-0.00212373 5.06152 0 6.37835 0 8H2ZM10.3171 8.00134C10.3171 9.28031 9.28031 10.3171 8.00134 10.3171V12.3171C10.3849 12.3171 12.3171 10.3849 12.3171 8.00134H10.3171ZM8.00134 10.3171C6.72236 10.3171 5.68555 9.28031 5.68555 8.00134H3.68555C3.68555 10.3849 5.61779 12.3171 8.00134 12.3171V10.3171ZM5.68555 8.00134C5.68555 6.72236 6.72236 5.68555 8.00134 5.68555V3.68555C5.61779 3.68555 3.68555 5.61779 3.68555 8.00134H5.68555ZM8.00134 5.68555C9.28031 5.68555 10.3171 6.72236 10.3171 8.00134H12.3171C12.3171 5.61779 10.3849 3.68555 8.00134 3.68555V5.68555ZM12.0586 2.94727H12.0496V4.94727H12.0586V2.94727Z"
                              fill="currentcolor" />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="productdetails-tabs">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-12">
                  <div className="product-additional-tab">
                    <div className="pro-details-nav theme-bg-2 mb-30">
                      <ul className="nav nav-tab pro-details-nav-btn" id="myTabs"
                        role="tablist">
                        <li className="nav-item" role="presentation">
                          <button className="nav-links active" id="home-tab-1" data-bs-toggle="tab"
                            data-bs-target="#home-1" type="button" role="tab" aria-controls="home-1"
                            aria-selected="true"><span>Description</span></button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-links" id="information-tab" data-bs-toggle="tab"
                            data-bs-target="#additional-information" type="button" role="tab"
                            aria-controls="additional-information"
                            aria-selected="false"><span>Additional
                              Information </span></button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-links" id="reviews-tab" data-bs-toggle="tab"
                            data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews"
                            aria-selected="false"><span>Review</span></button>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content it-content-tab" id="myTabContent-2">
                      <div className="tab-para tab-pane fade show active" id="home-1" role="tabpanel"
                        aria-labelledby="home-tab-1">
                        <div className="it-sv-details-content">
                          <h5 className="it-details-title">Description</h5>
                          <p>Nutmeal is a nutritious category of food that includes various types of
                            ground
                            nuts, such as almonds, walnuts, and peanuts These ground nuts can be used
                            in a
                            variety of
                            recipes, including smoothies, baked goods, and savory dishes Nutmeal is a
                            versatile ingredient Nutmeal is a nutritious category of food that includes
                            various types of
                            ground nuts, such as almonds, walnuts, and peanuts These ground nuts can be
                            used
                            in a variety of recipes</p>
                          <p className="mb-0">Nutmeal is a nutritious category of food that includes various types of
                            ground
                            nuts, such as almonds, walnuts, and peanuts These ground nuts can be used
                            in a
                            variety of
                            recipes, including smoothies, baked goods, and savory dishes Nutmeal is a
                            versatile ingredient Nutmeal is a nutritious category of food that includes
                            various types of
                            ground nuts, such as almonds, walnuts, and peanuts These ground nuts can be
                            used
                            in a variety of recipes</p>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="additional-information" role="tabpanel"
                        aria-labelledby="information-tab">
                        <div className="product__details-info table-responsive">
                          <table className="table table-striped">
                            <tbody>
                              <tr>
                                <td className="add-info">Weight</td>
                                <td className="add-info-list"> 2 lbs</td>
                              </tr>
                              <tr>
                                <td className="add-info">Dimensions</td>
                                <td className="add-info-list"> 12 Ã— 16 Ã— 19 in</td>
                              </tr>
                              <tr>
                                <td className="add-info">Product</td>
                                <td className="add-info-list"> Purchase this product on
                                  rag-bone.com</td>
                              </tr>
                              <tr>
                                <td className="add-info">Color</td>
                                <td className="add-info-list"> Gray, Black</td>
                              </tr>
                              <tr>
                                <td className="add-info">Size</td>
                                <td className="add-info-list"> S, M, L, XL</td>
                              </tr>
                              <tr>
                                <td className="add-info">Model</td>
                                <td className="add-info-list"> Model </td>
                              </tr>
                              <tr>
                                <td className="add-info">Shipping</td>
                                <td className="add-info-list"> Standard shipping: $5,95L</td>
                              </tr>
                              <tr>
                                <td className="add-info">Care Info</td>
                                <td className="add-info-list"> Machine Wash up to 40ÂºC/86ÂºF
                                  Gentle Cycle</td>
                              </tr>
                              <tr>
                                <td className="add-info">Brand</td>
                                <td className="add-info-list"> Kazen</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="reviews" role="tabpanel"
                        aria-labelledby="reviews-tab">
                        <div className="product-details-review">
                          <div className="latest-comments mb-55">
                            <ul>
                              <li>
                                <div className="comments-box d-flex">
                                  <div className="comments-avatar mr-25">
                                    <img src="assets/img/avatar/avatar-1-4.png" alt="" />
                                  </div>
                                  <div className="comments-text">
                                    <div className="avatar-name">
                                      <b>James Maggard</b>
                                    </div>
                                    <div className="comments-top d-sm-flex align-items-center mb-5">
                                      <div className="comments-date mr-20">
                                        <span>25 Sep 2025</span>
                                      </div>
                                      <div className="user-rating">
                                        <ul>
                                          <li><a href="#"><i className="fas fa-star"></i></a>
                                          </li>
                                          <li><a href="#"><i className="fas fa-star"></i></a>
                                          </li>
                                          <li><a href="#"><i className="fas fa-star"></i></a>
                                          </li>
                                          <li><a href="#"><i className="fas fa-star"></i></a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <p className="m-0">There are many variations of passages of Lorem
                                      Ipsum
                                      available, but the majority have suffered alteration in some
                                      <br />
                                      form, by injected humour, or randomised words which don't
                                      look.
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="comments-box d-flex">
                                  <div className="comments-avatar mr-25">
                                    <img src="assets/img/avatar/avatar-1-6.png" alt="" />
                                  </div>
                                  <div className="comments-text">
                                    <div className="avatar-name">
                                      <b>Sarah Parker</b>
                                    </div>
                                    <div className="comments-top d-sm-flex align-items-center mb-5">
                                      <div className="comments-date mr-20">
                                        <span>25 Sep 2025</span>
                                      </div>
                                      <div className="user-rating">
                                        <ul>
                                          <li><a href="#"><i className="fas fa-star"></i></a>
                                          </li>
                                          <li><a href="#"><i className="fas fa-star"></i></a>
                                          </li>
                                          <li><a href="#"><i className="fas fa-star"></i></a>
                                          </li>
                                          <li><a href="#"><i className="fas fa-star"></i></a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <p className="m-0">There are many variations of passages of Lorem
                                      Ipsum
                                      available, but the majority have suffered alteration in some
                                      <br />
                                      form, by injected humour, or randomised words which don't
                                      look.
                                    </p>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="row">
                            <div className="col-xl-7 col-lg-9">
                              <div className="product-details-comment">
                                <div className="comment-title mb-20">
                                  <h3>Add a review</h3>
                                  <p>Your email address will not be published. Required fields are
                                    marked
                                    *</p>
                                </div>
                                <div className="comment-rating mb-20 d-flex">
                                  <span>Overall Your rating *</span>
                                  <ul>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fal fa-star"></i></a></li>
                                  </ul>
                                </div>
                                <div className="comment-input-box">
                                  <form > 
                                    <div className="it-contact-2-input-wrap">
                                      <div className="row gx-30">
                                        <div className="col-sm-6 mb-20">
                                          <div className="it-contact-2-input-box">
                                            <input type="text" placeholder="Full Name" />
                                          </div>
                                        </div>
                                        <div className="col-sm-6 mb-20">
                                          <div className="it-contact-2-input-box">
                                            <input type="email" placeholder="Email" />
                                          </div>
                                        </div>
                                        <div className="col-sm-6 mb-20">
                                          <div className="it-contact-2-input-box">
                                            <input type="text" placeholder="Phone" />
                                          </div>
                                        </div>
                                        <div className="col-sm-6 mb-20">
                                          <div className="it-contact-2-input-box">
                                            <div className="contact__select">

                                              <NiceSelect
                                                className=""
                                                options={[
                                                  { value: "01", text: "Program...." },
                                                  { value: "02", text: "Computer Science & Engineering" },
                                                  { value: "03", text: "Electrical & Electronic Engineering" },
                                                  { value: "04", text: "Textile Engineering" },
                                                  { value: "05", text: "Pharmacy" },
                                                  { value: "06", text: "Architecture" },
                                                  { value: "07", text: "Law" },
                                                  { value: "08", text: "Economics" },
                                                  { value: "09", text: "English" },
                                                  { value: "10", text: "Psychology" },
                                                ]}
                                                defaultCurrent={0}
                                                onChange={selectHandler}
                                                name=""
                                                placeholder="" />


                                                
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-sm-12 mb-40">
                                          <div className="it-contact-2-input-box">
                                            <textarea
                                              placeholder="Project Description*"></textarea>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="it-btn">
                                        <button type="submit" className="it-btn-yellow">
                                          <span>
                                            <span className="text-1">Submit now</span>
                                            <span className="text-2">Submit now</span>
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- shop-details area end  --> */}
    </>
  )
}

