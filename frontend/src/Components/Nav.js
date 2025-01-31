import React from "react";
// import { listloai } from "./data";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
        <li className='nav-item'>
          <Link to="/" className='nav-link active' aria-current="page">
            Trang chủ
          </Link>
        </li>
        <li className='nav-item dropdown'>
          <Link
            to="/loai"
            className='nav-link dropdown-toggle'
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sản phẩm
          </Link>
          {/* <ul className='dropdown-menu' role="menu">
            {listloai.map((loai, i) => (
              <li className='nav-items' key={i}>
                <Link className='dropdown-item' to= {"/loai/"+ loai.id_loai} > {loai.ten_loai} </Link>
              </li>
            ))}
          </ul> */}
          <ul className='dropdown-menu' role="menu">
          <li className='nav-items' >
                <Link className='dropdown-item'  > Bánh Pía </Link>
              </li>
              <li className='nav-items'>
                <Link className='dropdown-item'  > Lạp xưởng </Link>
              </li>
          </ul>
        </li>
        <li className='nav-item'>
          <Link to="" className='nav-link'>
            Giới Thiệu
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="" className='nav-link' aria-disabled="true" tabIndex="-1">
           Liên hệ
          </Link>
        </li>
      </ul>
    );
  }
}

export default Nav;
