import React, { useState } from "react";
import Slider from "./Slider";
import { Link } from "react-router-dom";

function Home() {
  const [likedProducts, setLikedProducts] = useState({});
  const [cartedProducts, setCartedProducts] = useState({});

  const handleLikeClick = (productId) => {
    setLikedProducts((prevLikedProducts) => ({
      ...prevLikedProducts,
      [productId]: !prevLikedProducts[productId],
    }));
  };

  const handleCartClick = (productId) => {
    setCartedProducts((prevCartedProducts) => ({
      ...prevCartedProducts,
      [productId]: !prevCartedProducts[productId],
    }));
  };

  const products = [
    {
      id: 1,
      name: "Bánh Pía mè xung",
      price: "25.000 VND",
      oldPrice: "50.000 VNĐ",
      img: "./imgSP/mexung.png",
    },
    {
      id: 2,
      name: "Bánh Pía mè xung",
      price: "25.000 VND",
      oldPrice: "50.000 VNĐ",
      img: "./imgSP/mexung.png",
    },
    {
      id: 3,
      name: "Bánh Pía mè xung",
      price: "25.000 VND",
      oldPrice: "50.000 VNĐ",
      img: "./imgSP/mexung.png",
    },
    {
      id: 4,
      name: "Bánh Pía mè xung",
      price: "25.000 VND",
      oldPrice: "50.000 VNĐ",
      img: "./imgSP/mexung.png",
    },
    {
      id: 5,
      name: "Bánh Pía mè xung",
      price: "25.000 VND",
      oldPrice: "50.000 VNĐ",
      img: "./imgSP/mexung.png",
    },
    {
      id: 6,
      name: "Bánh Pía mè xung",
      price: "25.000 VND",
      oldPrice: "50.000 VNĐ",
      img: "./imgSP/mexung.png",
    },
    {
      id: 7,
      name: "Bánh Pía mè xung",
      price: "25.000 VND",
      oldPrice: "50.000 VNĐ",
      img: "./imgSP/mexung.png",
    },
    {
      id: 8,
      name: "Bánh Pía mè xung",
      price: "25.000 VND",
      oldPrice: "50.000 VNĐ",
      img: "./imgSP/mexung.png",
    },
  ];

  return (
    <section className="container-fluid p-0">
      {/* slider */}
      <div className="container-fluid p-0">
        <Slider />
      </div>
      {/* end slider */}
      <div className="row">
        {/* {listsp.slice(0,8).map((sp,i)=>
            <div key={i} className='col-md-3 me-auto'>
                <Link to={ "/sp/" + sp.id_sp } > {sp['ten_sp']} </Link>
                <img className='img-fluid' src={sp['hinh']}  alt={sp['ten_sp']} />
                <div className='container-fluid d-flex flex-column align-items-center'>
                    <span className='text-default'><del>{Number(sp.gia).toLocaleString("Vi")}  VNĐ</del></span>
                    <span className='text-primary'>{Number(sp.gia_km).toLocaleString("Vi")}  VNĐ</span>
                </div>
               
            </div>
            )
           
          } */}
      </div>
      {/* danh mục content */}
      <div className="container p-4">
        <div className="container">
          <h5 className="text-center"> Danh mục nổi bật</h5>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="card position-relative">
                <div className="card-title position-absolute z-1 top-50 start-50 translate-middle">
                  <div
                    style={{
                      texTalign: "center",
                      color: "white",
                      fontsize: "16px",
                      fontFamily: "Montserrat",
                      fontWeight: "700",
                      lineHeight: "24px",
                      letterSpacing: "0.10px",
                      wordWrap: "break-word",
                    }}
                  >
                    Bánh
                  </div>
                  <div
                    style={{
                      color: "white",
                      fontsize: "14px",
                      fontFamily: "Montserrat",
                      fontWeight: "400",
                      lineHeight: "20px",
                      letterSpacing: "0.20px",
                      wordWrap: "break-word",
                    }}
                  >
                    5 Items
                  </div>
                </div>
                <div className="card-body p-0">
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      left: "0.50px",
                      top: "0px",
                      position: "absolute",
                      background: "rgba(33, 33, 33, 0.25)",
                      borderRadius: "4px",
                    }}
                  ></div>
                  <img
                    src="./imgDM/banh.jpg"
                    className="img-fluid"
                    alt="bannerBanh"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card position-relative">
                <div className="card-title position-absolute  z-1 top-50 start-50 translate-middle">
                  <div
                    style={{
                      texTalign: "center",
                      color: "white",
                      fontsize: "16px",
                      fontFamily: "Montserrat",
                      fontWeight: "700",
                      lineHeight: "24px",
                      letterSpacing: "0.10px",
                      wordWrap: "break-word",
                    }}
                  >
                    Lạp xưởng
                  </div>
                  <div
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontsize: "14px",
                      fontFamily: "Montserrat",
                      fontWeight: "400",
                      lineHeight: "20px",
                      letterSpacing: "0.20px",
                      wordWrap: "break-word",
                    }}
                  >
                    5 Items
                  </div>
                </div>
                <div className="card-body p-0">
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      left: "0.50px",
                      top: "0px",
                      position: "absolute",
                      background: "rgba(33, 33, 33, 0.25)",
                      borderRadius: "4px",
                    }}
                  ></div>
                  <img
                    src="./imgDM/lapxuong.jpg"
                    className="img-fluid"
                    alt="bannerBanh"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card position-relative">
                <div className="card-title position-absolute z-1 top-50 start-50 translate-middle">
                  <div
                    style={{
                      texTalign: "center",
                      color: "white",
                      fontsize: "16px",
                      fontFamily: "Montserrat",
                      fontWeight: "700",
                      lineHeight: "24px",
                      letterSpacing: "0.10px",
                      wordWrap: "break-word",
                    }}
                  >
                    Bánh
                  </div>
                  <div
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontsize: "14px",
                      fontFamily: "Montserrat",
                      fontWeight: "400",
                      lineHeight: "20px",
                      letterSpacing: "0.20px",
                      wordWrap: "break-word",
                    }}
                  >
                    5 Items
                  </div>
                </div>
                <div className="card-body p-0">
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      left: "0.50px",
                      top: "0px",
                      position: "absolute",
                      background: "rgba(33, 33, 33, 0.25)",
                      borderRadius: "4px",
                    }}
                  ></div>
                  <img
                    src="./imgDM/banh.jpg"
                    className="img-fluid"
                    alt="bannerBanh"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end danh mục */}
      {/* start sản phẩm  bánh pía*/}
      <div className="container p-4">
        <div className="row d-flex">
          {/* banner sản phẩm */}
          <div className="col-md-3 position-relative">
            <div className="container-fluid text-center position-absolute z-1 top-50 start-50 translate-middle">
              <h2>Đặc Sản Miền Tây</h2>
              <span>
                {" "}
                <i>Đặc sản Sóc Trăng</i>{" "}
              </span>
            </div>
            <img
              src="./imgbannerDoc/bannerDoc.png"
              className="img-fluid d-block h-100 rounded rounded-2"
              alt="banh"
            />
          </div>
          {/* end banner sản phẩm */}
          <div className="col-md-9">
            <div className="row">
              {/* title sản phẩm */}
              <div className="container-fluid bg-color border rounded rounded-3 p-3 mb-2 d-flex justify-content-between">
                <div className="container-fluid d-flex align-items-center">
                  {" "}
                  <h5>Bánh Pía</h5>
                </div>

                <div className="container-fluid d-flex gap-1 justify-content-end">
                  <Link to="/loai" className="text-decoration-none">
                    {" "}
                    <i
                      className="bi bi-arrow-left-circle hover"
                      style={{ fontSize: "25px" }}
                    ></i>{" "}
                  </Link>
                  <Link to="/loai" className="text-decoration-none">
                    {" "}
                    <i
                      className="bi bi-arrow-right-circle "
                      style={{ fontSize: "25px" }}
                    ></i>
                  </Link>
                </div>
              </div>
              {/* product box */}
              {products.map((product) => (
                <div className="col-md-3 mb-2" key={product.id}>
                  <div className="box-product-pageProduct  box-km position-relative">
                    <div className="container-fluid position-relative">
                      <span className="sale-off-tag text-danger">
                        Sale Off 18%
                      </span>
                      <img
                        src={product.img}
                        className="img-fluid"
                        alt={product.name}
                      />
                    </div>

                    <div className="content-box-product p-2">
                      <div className="container-fluid d-flex flex-column action-sp justify-content-between align-items-end position-absolute z-1 top-0 end-0">
                        <Link onClick={() => handleLikeClick(product.id)}>
                          {" "}
                          <i
                            className="bi bi-heart-fill"
                            style={{
                              fontSize: "25px",
                              color: likedProducts[product.id]
                                ? "#F9D949"
                                : "#000",
                            }}
                          ></i>
                        </Link>
                        <Link onClick={() => handleCartClick(product.id)}>
                          {" "}
                          <i
                            className="bi bi-cart-fill"
                            style={{
                              fontSize: "25px",
                              color: cartedProducts[product.id]
                                ? "#F9D949"
                                : "#000",
                            }}
                          ></i>
                        </Link>
                      </div>
                      <Link className="text-decoration-none text-dark">
                        <h5 className="p-2">
                          <strong>{product.name}</strong>
                        </h5>
                      </Link>

                      <div className="container-fluid d-flex flex-column ">
                        <span>title</span>
                        <div className="container-fluid d-flex flex-column">
                          <span style={{ color: "#BDBDBD" }}>
                            <del>{product.oldPrice}</del>
                          </span>
                          <span style={{ color: "#23856D" }}>
                            {product.price}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="button-container container-fluid justify-content-between p-2 ">
                      <Link>
                        <button
                          className="buy-now-button button w-100 mb-1 btn-danger text-white  rounded"
                          style={{
                            height: "40px",
                          }}
                        >
                          Đặt Hàng
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              {/* end product box */}
              {/* pagination */}
              <div className="container-fluid justify-content-center d-flex p-2">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Previous
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* end pagination */}
              <div className="container-fluid justify-content-center d-flex p-2">
                <button className="btn btn-primary">Xem Thêm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end sản phẩm bánh pía */}
      {/* start banner khuyến mãi */}
      <div className="container-fluid p-0">
        <img
          src="https://placehold.co/600x200"
          className="img-fluid d-block w-100"
          alt="bannerKM"
        />
      </div>
      {/* start sản phẩm  khô*/}
      <div className="container p-4">
        <div className="row d-flex">
          {/* banner sản phẩm */}
          <div className="col-md-3 position-relative">
            <div className="container-fluid text-center position-absolute z-1 top-50 start-50 translate-middle">
              <h2>Đặc Sản Miền Tây</h2>
              <span>
                {" "}
                <i>Đặc sản Sóc Trăng</i>{" "}
              </span>
            </div>
            <img
              src="https://placehold.co/600x1800"
              className="img-fluid d-block h-100 rounded rounded-2"
              alt="banh"
            />
          </div>
          {/* end banner sản phẩm */}
          <div className="col-md-9">
            <div className="row">
              {/* title sản phẩm */}
              <div className="container-fluid bg-color border rounded rounded-3 p-3 mb-2 d-flex justify-content-between">
                <div className="container-fluid d-flex align-items-center">
                  {" "}
                  <h5>Bánh Pía</h5>
                </div>

                <div className="container-fluid d-flex gap-1 justify-content-end">
                  <Link to="/loai" className="text-decoration-none">
                    {" "}
                    <i
                      className="bi bi-arrow-left-circle hover"
                      style={{ fontSize: "25px" }}
                    ></i>{" "}
                  </Link>
                  <Link to="/loai" className="text-decoration-none">
                    {" "}
                    <i
                      className="bi bi-arrow-right-circle "
                      style={{ fontSize: "25px" }}
                    ></i>
                  </Link>
                </div>
              </div>
              {/* product box */}
              {products.map((product) => (
                <div className="col-md-3 mb-2" key={product.id}>
                  <div className="box-product-pageProduct  box-km position-relative">
                    <div className="container-fluid position-relative">
                      <span className="sale-off-tag text-danger">
                        Sale Off 18%
                      </span>
                      <img
                        src={product.img}
                        className="img-fluid"
                        alt={product.name}
                      />
                    </div>

                    <div className="content-box-product p-2">
                      <div className="container-fluid d-flex flex-column action-sp justify-content-between align-items-end position-absolute z-1 top-0 end-0">
                        <Link onClick={() => handleLikeClick(product.id)}>
                          {" "}
                          <i
                            className="bi bi-heart-fill"
                            style={{
                              fontSize: "25px",
                              color: likedProducts[product.id]
                                ? "#F9D949"
                                : "#000",
                            }}
                          ></i>
                        </Link>
                        <Link onClick={() => handleCartClick(product.id)}>
                          {" "}
                          <i
                            className="bi bi-cart-fill"
                            style={{
                              fontSize: "25px",
                              color: cartedProducts[product.id]
                                ? "#F9D949"
                                : "#000",
                            }}
                          ></i>
                        </Link>
                      </div>
                      <Link className="text-decoration-none text-dark">
                        <h5 className="p-2">
                          <strong>{product.name}</strong>
                        </h5>
                      </Link>

                      <div className="container-fluid d-flex flex-column ">
                        <span>title</span>
                        <div className="container-fluid d-flex flex-column">
                          <span style={{ color: "#BDBDBD" }}>
                            <del>{product.oldPrice}</del>
                          </span>
                          <span style={{ color: "#23856D" }}>
                            {product.price}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="button-container container-fluid justify-content-between p-2 ">
                      <Link>
                        <button
                          className="buy-now-button button w-100 mb-1 btn-danger text-white  rounded"
                          style={{
                            height: "40px",
                          }}
                        >
                          Đặt Hàng
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              {/* end product box */}
              {/* pagination */}
              <div className="container-fluid justify-content-center d-flex p-2">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Previous
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* end pagination */}
              <div className="container-fluid justify-content-center d-flex p-2">
                <button className="btn btn-primary">Xem Thêm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end sản phẩm khô */}
      {/* khuyến mãi */}
      <div className="container mb-4 ">
        <div className="row">
          <div className="col-md-6 box-km rounded">
            <img
              className="rounded d-block w-100 h-100"
              src="https://placehold.co/660x800"
            />
          </div>
          <div className="col-md-6">
            <div className="row d-flex flex-column">
              <div className="col-md-12 mb-2 box-km rounded">
                <img
                  className="rounded d-block w-100 h-100"
                  src="https://placehold.co/660x400"
                />
              </div>
              <div className="col-md-12 box-km rounded">
                <img
                  className="rounded d-block w-100 h-100"
                  src="https://placehold.co/660x400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end khuyến mãi */}
      {/* nhà cung cấp */}
      <div className="container p-4 mb-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              className="img-fluid"
              style={{ width: "200px" }}
              src="./imgnhacungcap/tân huê viên.jpg"
            />
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              className="img-fluid"
              src="./imgnhacungcap/NCC1.jpg"
              style={{ width: "200px" }}
            />
          </div>
        </div>
      </div>
      {/* end nhà cung cấp */}
      {/* start bài viết */}
      <div className="container p-4 border rounded rounded-3 mb-4">
        <h1 className="text-center">Bài viết nổi bật</h1>
        <div className="container-fluid">
          <div className="row d-flex justify-content-between align-items-center">
            {/* start bai viet box */}
            <div className="col-md-3">
              <div className="container-fluid p-0 mb-4 box-km rounded">
                <img
                  className="img-fluid rounded"
                  src="https://placehold.co/400"
                />
              </div>
              <article className="container-fluid mb-4">
                <h5>Bài viết 1</h5>
                <span>
                  <i>
                    Đây là loại bánh đặc biệt mà bạn nên thưởng thức qua mỗi khi
                    đến miền tây...
                  </i>
                </span>
                <div className="container-fluid d-flex justify-content-between align-items-center p-0 mt-2">
                  <span className="text-primary">
                    <i className="bi bi-alarm" style={{ fontSize: "25px" }}></i>{" "}
                    Ngày
                  </span>
                  <span className="text-success">
                    <i
                      className="bi bi-chat-left-text"
                      style={{ fontSize: "25px" }}
                    ></i>{" "}
                    Bình luận
                  </span>
                </div>
              </article>
              <div className="container-fluid">
                <Link className="d-flex justify-content-start align-items-center text-decoration-none text-dark">
                  <h5 className="m-0">Đọc thêm</h5>
                  <i
                    className="bi bi-chevron-right"
                    style={{ fontSize: "25px" }}
                  ></i>
                </Link>
              </div>
            </div>
            {/* end bai viet box*/}
            <div className="col-md-3">
              <div className="container-fluid p-0 mb-4 box-km rounded">
                <img
                  className="img-fluid rounded"
                  src="https://placehold.co/400"
                />
              </div>
              <article className="container-fluid mb-4">
                <h5>Bài viết 1</h5>
                <span>
                  <i>
                    Đây là loại bánh đặc biệt mà bạn nên thưởng thức qua mỗi khi
                    đến miền tây...
                  </i>
                </span>
                <div className="container-fluid d-flex justify-content-between align-items-center p-0 mt-2">
                  <span className="text-primary">
                    <i className="bi bi-alarm" style={{ fontSize: "25px" }}></i>{" "}
                    Ngày
                  </span>
                  <span className="text-success">
                    <i
                      className="bi bi-chat-left-text"
                      style={{ fontSize: "25px" }}
                    ></i>{" "}
                    Bình luận
                  </span>
                </div>
              </article>
              <div className="container-fluid">
                <Link className="d-flex justify-content-start align-items-center">
                  <h5 className="m-0">Đọc thêm</h5>
                  <i
                    className="bi bi-chevron-right"
                    style={{ fontSize: "25px" }}
                  ></i>
                </Link>
              </div>
            </div>
            <div className="col-md-3">
              <div className="container-fluid p-0 mb-4 box-km rounded">
                <img
                  className="img-fluid rounded"
                  src="https://placehold.co/400"
                />
              </div>
              <article className="container-fluid mb-4">
                <h5>Bài viết 1</h5>
                <span>
                  <i>
                    Đây là loại bánh đặc biệt mà bạn nên thưởng thức qua mỗi khi
                    đến miền tây...
                  </i>
                </span>
                <div className="container-fluid d-flex justify-content-between align-items-center p-0 mt-2">
                  <span className="text-primary">
                    <i className="bi bi-alarm" style={{ fontSize: "25px" }}></i>{" "}
                    Ngày
                  </span>
                  <span className="text-success">
                    <i
                      className="bi bi-chat-left-text"
                      style={{ fontSize: "25px" }}
                    ></i>{" "}
                    Bình luận
                  </span>
                </div>
              </article>
              <div className="container-fluid">
                <Link className="d-flex justify-content-start align-items-center">
                  <h5 className="m-0">Đọc thêm</h5>
                  <i
                    className="bi bi-chevron-right"
                    style={{ fontSize: "25px" }}
                  ></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end bai viet */}
      {/* features */}
      <div className="container-fluid" style={{ backgroundColor: "#F9D949" }}>
        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="container-fluid d-flex flex-column align-items-center">
              <i className="bi bi-truck" style={{ fontSize: "25px" }}></i>
              <h5>Miễn phí vận chuyển</h5>
              <span>Cho đơn hàng trên 500.000 VNĐ</span>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="container-fluid d-flex flex-column align-items-center">
              <i className="bi bi-credit-card" style={{ fontSize: "25px" }}></i>
              <h5>Thanh toán an toàn</h5>
              <span>Thanh toán an toàn qua cổng thanh toán</span>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="container-fluid d-flex flex-column align-items-center">
              <i className="bi bi-gift" style={{ fontSize: "25px" }}></i>
              <h5>Ưu đãi hấp dẫn</h5>
              <span>Nhận voucher giảm giá nhiều dịp lễ</span>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="container-fluid d-flex flex-column align-items-center">
              <i className="bi bi-telephone" style={{ fontSize: "25px" }}></i>
              <h5>Liên hệ với chúng tôi</h5>
              <span>Thông qua số điện thoại: 1900 6060</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
