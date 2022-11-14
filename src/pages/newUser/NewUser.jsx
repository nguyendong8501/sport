import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Thêm mới</h1>
      <form className="newUserForm">
        {/* <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div> */}
        <div className="newUserItem">
          <label>Tên khách hàng</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        {/* <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div> */}
        <div className="newUserItem">
          <label>Điện thoại</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Địa chỉ</label>
          <input type="text" placeholder="Hà Nội" />
        </div>
        {/* <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div> */}
        <div className="newUserItem">
          {/* <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select> */}
        </div>
        <div className="newUserItem">
          {/* <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select> */}
        </div>
        <button className="newUserButton">Lưu</button>
      </form>
    </div>
  );
}
