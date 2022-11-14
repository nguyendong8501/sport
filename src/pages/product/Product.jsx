import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Sửa sản phẩm</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Lưu</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </div>
          {/* <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productInfoImg" />
                  <span className="productName">Cá mập</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">Giá sản phẩm:</span>
                      <span className="productInfoValue">123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Số lượng:</span>
                      <span className="productInfoValue">5123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Nhà cung cấp:</span>
                      <span className="productInfoValue">Vạn Phúc</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Mô tả:</span>
                      <span className="productInfoValue">Giống cá đến từ châu Âu</span>
                  </div>
              </div>
          </div> */}
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Tên sản phẩm</label>
                  <input type="text" placeholder="Cá mập" />
                  <label>Giá sản phẩm</label>
                  <input type="text" placeholder="123" />
                  <label>Số lượng</label>
                  <input type="text" placeholder="123" />
                  <label>Nhà cung cấp</label>
                  <input type="text" placeholder="Vạn Phúc" />
                  <label>Mô tả</label>
                  <input type="text" placeholder="Giống cá đến từ châu Âu" />
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Lưu</button>
              </div>
          </form>
      </div>
    </div>
  );
}
