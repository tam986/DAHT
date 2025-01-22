import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <section>
      <div className="container d-flex justify-content-between align-items-center p-2">
        <div className="container-fluid">
          <Link className="navbar-brand">
            {/* <img
            src="./tainguyenlab1/logo.svg"
            alt=""
            width="100"
            className="d-inline-block align-text-top"
          /> */}
            <h2>Đặc sản Hưng Thịnh</h2>
          </Link>
        </div>

        {/* socail share */}
        <div className="container-fluid">
          <div className="d-flex justify-content-end align-items-center gap-4">
            <Link href="https://www.facebook.com/">
              <i class="bi bi-facebook" style={{ fontSize: "25px" }}></i>
            </Link>
            <Link href="https://www.instagram.com/">
              <i class="bi bi-messenger" style={{ fontSize: "25px" }}></i>
            </Link>
          </div>
        </div>
        {/* socail */}
      </div>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-3 text-start d-flex flex-column align-items-start mb-4">
            <h6>CÔNG TY TNHH HƯNG THỊNH FOOD</h6>
            <span>237 QUANG TRUNG PHƯỜNG 10 QUẬN GÒ VẤP</span>
            <span>Tel: (+84.28) 7300 8666</span>
            <span>Fax: (+84.28) 3 7960 806</span>
            <span>Giấy CNĐKDN: 0301435068</span>
            <span>Ngày cấp: 08/02/1995 - Sở KH&ĐT TP.HCM</span>
          </div>

          <div className="col-md-3 text-start d-flex flex-column align-items-start mb-4">
            <h6>TRỢ GIÚP MUA HÀNG</h6>
            <span>Hướng dẫn mua hàng</span>
            <span>Hướng dẫn thanh toán</span>
            <span>Liên hệ</span>
          </div>

          <div className="col-md-3 text-start d-flex flex-column align-items-start mb-4">
            <h6>THÔNG TIN CÔNG TY</h6>
            <span>Giới thiệu</span>
            <span>Tin tức</span>
            <span>Kênh phân phối</span>
            <span>Chứng nhận sản phẩm</span>
            <span>Ngày cấp: 08/02/1995 - Sở KH&ĐT TP.HCM</span>
          </div>
          <div className="col-md-3 text-start d-flex flex-column align-items-start mb-4">
            <h6>Liên hệ</h6>
            <div className="container-fluid d-flex gap-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </svg>
              <h2>1800-6500</h2>
            </div>

            <div className="container-fluid  border-top border-bottom">
              <h6>Đối tác</h6>
              <div className="container-fluid d-flex gap-5 p-2">
                <img
                  src="./tainguyenlab1/icon-master-card.svg"
                  alt=""
                  width="100"
                  className="img-fluid"
                />
                <img
                  src="./tainguyenlab1/icon-visa.svg"
                  alt=""
                  width="100"
                  className="img-fluid"
                />
                <img
                  src="./tainguyenlab1/icon-vtp.svg"
                  alt=""
                  width="100"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid d-flex justify-content-center align-items-center text-white"
        style={{ backgroundColor: "#F9D949" }}
      >
        <span className="text-black">
          <i>©Design by Hưng Thịnh Group</i>
        </span>
      </div>
    </section>
  );
}
export default Footer;
