// import { listsp} from "./data";
import Slider from "./Slider";
import { Link, Container } from "react-router-dom";
function Home() {
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
          <h5> Danh mục nổi bật</h5>
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
      {/* start sản phẩm  */}
      <div className="container p-4">
        <div className="row d-flex">
          <div className="col-md-3">
            <img
              src="./imgbannerDoc/bannerDoc.png"
              className="img-fluid"
              alt="banh"
            />
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-3">
                <div className="card">
                  <img
                    src="./imgSP/banh.jpg"
                    className="img-fluid"
                    alt="banh"
                  />
                  <div className="card-body">
                    <h6> Bánh Pía</h6>
                    <span> 100.000 VNĐ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
