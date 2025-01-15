import React from 'react';
import { useParams } from 'react-router-dom';
// import SanphamXemnhieu from './SanphamXemnhieu';
// import { listsp,listloai} from "./data";
import { Link } from 'react-router-dom';
var sotin = 3;
function Sptrongloai (){
  // let { id_loai } = useParams();
  // let list_sp = listsp.filter( sp => sp.id_loai===id_loai)
  // let loai = listloai.find( loai => loai.id_loai===id_loai);


    return( 
    <div className='container'>
          <div className='row mt-5'>
            <div className='col-md-3'>
              <div className='sidebar'>
                <h5>Tìm kiếm sản phẩm</h5>
                <input className='form-control mb-3' placeholder="Tìm sản phẩm..." />
      
                <h5>Danh mục</h5>
                Bánh Pía
                Lạp xưởng
                {/* {listloai.map((loai, i) => { const count = listsp.filter(sp => sp.id_loai === loai.id_loai).length;
                   return (
                     <div key={i} className='container'>
                       <h5> <Link to={"/loai/" + loai.id_loai} className='text-black link-underline-none'> {loai.ten_loai} </Link>
                        {" "}({count} sản phẩm)
                         </h5>
                    </div> ); })} */}
                <h5>Điểm đi</h5>
                <select className='form-select mb-3'>
                  <option value="" disabled selected>Chọn điểm đi</option>
                  <option value="hcm">Hồ Chí Minh</option>
                  <option value="hn">Hà Nội</option>
                </select>
      
                <h5>Sắp xếp theo giá</h5>
                <select  className='form-select'>
                  <option value="" disabled selected>Sắp xếp theo</option>
                  <option value="asc">Giá tăng dần</option>
                  <option value="desc">Giá giảm dần</option>
                </select>
                <h5>Sản phẩm xem nhiều</h5>
                <div className='container-fluid'>
                {/* <SanphamXemnhieu sotin={sotin}/> */}
                </div>
              </div>
            </div>
    
            <div className='col-md-9'>
            {/* <h1> Sản phẩm trong loai {loai['ten_loai']}</h1> */}
              <div className='row' >
              {/* {list_sp.map( (sp, index) => 
                <div className='col-md-4 mb-4' key={index}>
                
                  <div className='card h-100'>
                    <img src={sp['hinh']}  className='card-img-top' alt="Product Image" />
                    <div className='card-body'>
                      <h4><Link to={ "/sp/" + sp.id_sp } > {sp['ten_sp']} </Link></h4>
                      <p className='card-text'>Giá:price VND</p>
                      <button className='btn btn-primary'>Xem Chi Tiết</button>
                    </div>
                  </div>
                </div>
              )} */}

                
              </div>
            </div>
          </div>
    </div>
  )
};
export default Sptrongloai;