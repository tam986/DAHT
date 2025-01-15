import React from "react";
function Topheader() {
  return (
    <section
      className="container-fluid p-2"
      style={{ backgroundColor: "#F9D949" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 d-flex align-items-center gap-2 justify-content-center justify-content-md-start">
            <i className="bi bi-telephone"></i>
            <span>
              <span>:</span> 079******
            </span>
          </div>
          <div className="col-12 col-md-4 d-flex align-items-center gap-2 justify-content-center">
            <h6>Theo dõi chúng tôi để nhận thêm ưu đãi lên đến 80% </h6>
          </div>
          <div className="col-12 col-md-4 d-flex align-items-center gap-2 justify-content-center justify-content-md-end">
            <i className="bi bi-envelope"></i>
            <span>
              <span>:</span> info@hungthinhst.com.vn
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Topheader;
