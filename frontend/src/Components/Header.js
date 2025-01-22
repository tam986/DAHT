import React from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import Topheader from "./Topheader";
import { Dropdown, Card, Table } from "react-bootstrap";

function Header() {
  const location = useLocation();

  return (
    <>
      {/* desktop screen start */}

      <nav
        className="navbar p-0 navbar-expand-lg d-none d-lg-flex"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="container-fluid d-flex justify-content-between">
          <Link to="/" className="navbar-brand">
            {/* <img
              src="/ComputerShop.png"
              alt="ComputerShop Logo"
              width="100"
              className="d-inline-block align-text-top"
            /> */}
            <h5 className="">Đặc Sản Hưng Thịnh</h5>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Nav />
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <ul
              className="navbar-nav p-2 mb-2 mb-lg-1 justify-items-center"
              style={{ listStyle: "none" }}
            >
              <Dropdown className="nav-item d-flex justify-item-center align-items-center">
                <Dropdown.Toggle variant="link" className="nav-link">
                  <i className="bi bi-heart-fill fs-3"></i> Yêu thích
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>Sản phẩm yêu thích</Card.Title>
                      <Table striped bordered hover className="p-0">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Tên sản phẩm</th>
                            <th>Hành động</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Sản phẩm 1</td>
                            <td>
                              <button className="btn btn-danger btn-sm">
                                Xóa
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Sản phẩm 2</td>
                            <td>
                              <button className="btn btn-danger btn-sm">
                                Xóa
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Sản phẩm 3</td>
                            <td>
                              <button className="btn btn-danger btn-sm">
                                Xóa
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Card>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="nav-item d-flex justify-item-center align-items-center">
                <Dropdown.Toggle variant="link" className="nav-link">
                  <i className="bi bi-bag fs-3"></i> Giỏ Hàng
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>Sản phẩm trong giỏ hàng</Card.Title>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Tên sản phẩm</th>
                            <th>Hành động</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Sản phẩm 1</td>
                            <td>
                              <button className="btn btn-danger btn-sm">
                                Xóa
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Sản phẩm 2</td>
                            <td>
                              <button className="btn btn-danger btn-sm">
                                Xóa
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Sản phẩm 3</td>
                            <td>
                              <button className="btn btn-danger btn-sm">
                                Xóa
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Card>
                </Dropdown.Menu>
              </Dropdown>
              <li className="nav-item d-flex justify-item-center align-items-center">
                <i className="bi bi-person-circle fs-3"></i>
                <Link to="" className="nav-link" aria-disabled="true">
                  {" "}
                  Thông tin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* mobile screen start*/}
      <nav
        className="navbar navbar-expand-lg fixed-bottom d-lg-none box-shadow border rounded-4 rounded-bottom"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="container-fluid d-flex justify-content-between">
          <ul
            className="navbar-nav mb-2 mb-lg-1  w-100 d-flex flex-row justify-content-between"
            style={{ listStyle: "none" }}
          >
            <li
              className={`nav-item d-flex align-items-center gap-1 ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link to="/" className="nav-link">
                <i
                  className="bi bi-house-door "
                  style={{ fontSize: "30px" }}
                ></i>
              </Link>
            </li>
            <li
              className={`nav-item d-flex align-items-center gap-1 ${
                location.pathname === "/san-pham" ? "active" : ""
              }`}
            >
              <Link to="/san-pham" className="nav-link">
                <i className="bi bi-box-seam" style={{ fontSize: "30px" }}></i>
              </Link>
            </li>
            <li
              className={`nav-item d-flex align-items-center gap-1 ${
                location.pathname === "/bai-viet" ? "active" : ""
              }`}
            >
              <Link to="/bai-viet" className="nav-link">
                <i
                  className="bi bi-file-earmark-text"
                  style={{ fontSize: "30px" }}
                ></i>
              </Link>
            </li>
            <li
              className={`nav-item d-flex align-items-center gap-1 ${
                location.pathname === "/thong-tin" ? "active" : ""
              }`}
            >
              <Link to="/thong-tin" className="nav-link">
                <i
                  className="bi bi-person-circle"
                  style={{ fontSize: "30px" }}
                ></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
