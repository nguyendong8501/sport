import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Tạo sản phẩm</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Chọn ảnh</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Tên sản phẩm</label>
          <input type="text" placeholder="Cá mập" />
        </div>
        <div className="addProductItem">
          <label>Giá sản phẩm</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label>Số lượng</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label>Nhà cung cấp</label>
          <input type="text" placeholder="Vạn Phúc" />
        </div>
        <div className="addProductItem">
          <label>Mô tả</label>
          <input type="text" placeholder="Giống cá đến từ Châu Âu" />
        </div>
        {/* <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div> */}
        <button className="addProductButton">Lưu</button>
      </form>
    </div>
  );
}
