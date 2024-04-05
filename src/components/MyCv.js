import { useState, useEffect } from "react";

import axios from "axios";
import {
  StarFill,
  GenderAmbiguous,
  Cake2,
  Envelope,
  Phone,
  GeoAltFill,
} from "react-bootstrap-icons";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function MyCv() {
  // get infor from db.json
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
  });
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios
      .get("http://localhost:3001/informations/1")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleOpen = () => {
    setOpen(true);
    setFormData({ ...data });
  };
  // Xử lý đóng Dialog
  const handleClose = () => {
    setOpen(false);
  };
  //edit
  // const handleEditClick = () => {
  //   // Mở form chỉnh sửa hoặc dialog tại đây
  //   console.log("Chỉnh sửa thông tin cá nhân");
  // };
  const handleSubmit = (event) => {
    event.preventDefault();

    const apiUrl = "http://localhost:3001/informations/1";

    axios
      .put(apiUrl, formData)
      .then((response) => {
        // console.log("Kết quả gửi dữ liệu:", response.data);
        setData(response.data);
        handleClose();
        fetchData();
        toast.success("Cập nhật thành công", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        console.error("Có lỗi khi gửi dữ liệu:", error);
        // Xử lý lỗi (ví dụ: thông báo lỗi cho người dùng)
        toast.error("Có lỗi trong việc cập nhật");
      });
  };
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="container">
      <ToastContainer />
      <button className="btn btn-secondary btn-sm" onClick={handleOpen}>
        Edit
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <form open={open} onClose={handleClose}>
            <TextField
              name="fullname"
              label="Fullname"
              variant="standard"
              fullWidth
              onChange={handleChange}
              value={formData.fullname}
            />
            <TextField
              name="role"
              label="Role"
              variant="standard"
              fullWidth
              onChange={handleChange}
              value={formData.role}
            />
            <TextField
              name="gender"
              label="gender"
              variant="standard"
              fullWidth
              onChange={handleChange}
              value={formData.gender}
            />
            <TextField
              name="birthday"
              label="Birthday"
              variant="standard"
              fullWidth
              onChange={handleChange}
              value={formData.birthday}
            />
            <TextField
              name="phone"
              label="Phone"
              variant="standard"
              fullWidth
              onChange={handleChange}
              value={formData.phone}
            />
            <TextField
              name="email"
              label="Email"
              variant="standard"
              fullWidth
              onChange={handleChange}
              value={formData.email}
            />
            <TextField
              name="address"
              label="Address"
              variant="standard"
              fullWidth
              onChange={handleChange}
              value={formData.address}
            />
            <Button variant="contained" type="submit" onClick={handleSubmit}>
              Save
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      <div className="row">
        <div className="col-4">
          <div className="box-4">
            <div className="img__thumb">
              <img src="img/avatar.jpg" alt="" />
            </div>
          </div>
          <div className="box">
            <div className="box__header">
              <h2>Kỹ năng</h2>
            </div>
            <div className="box__body">
              <ul>
                <li>Giao tiếp đàm phán</li>
                <li>Kỹ năng làm việc nhóm</li>
                <li>Code</li>
              </ul>
            </div>
          </div>
          <div className="box">
            <div className="box__header">
              <h2>Ngoại ngữ</h2>
            </div>
            <div className="box__body">
              <span className="box__item">Tiếng anh</span>
              <span className="rate">
                <StarFill className="star__rate" />
                <StarFill className="star__rate" />
                <StarFill className="star__rate" />
                <StarFill className="star__rate" />
                <StarFill className="star__rate" />
              </span>
            </div>
          </div>
          <div className="box">
            <div className="box__header">
              <h2>Ngôn ngữ lập trình</h2>
            </div>
            <div className="box__body">
              <span className="box__item">Html</span>
              <span className="rate">
                <StarFill className="star__rate" />
                <StarFill className="star__rate" />
                <StarFill className="star__rate" />
                <StarFill className="star__rate" />
                <StarFill className="star__rate" />
              </span>
            </div>
            <div className="box__body">
              <span className="box__item">Css</span>
              <span className="rate">
                <StarFill className="star__rate" />
                <StarFill className="star__rate" />
                <StarFill className="star__rate" />
                <StarFill className="star__rate" />
                <StarFill className="star__rate" />
              </span>
            </div>
            <div className="box__body">
              <span className="box__item">Javascript</span>
              <span className="rate">
                <StarFill className="star__rate" />
                <StarFill className="star__rate" />
                <StarFill className="star__rate" />
                <StarFill className="star__rate" />
                <StarFill className="star__rate" />
              </span>
            </div>
            <div className="box__body">
              <span className="box__item">PHP</span>
              <span className="rate">
                <StarFill className="star__rate" />
                <StarFill className="star__rate" />
                <StarFill className="star__rate" />
                <StarFill className="star__rate" />
                <StarFill className="star__rate" />
              </span>
            </div>
          </div>
          <div className="box">
            <div className="box__header">
              <h2>Tin học</h2>
            </div>
            <div className="box__body">
              <ul>
                <li>Word</li>
                <li>Exel</li>
                <li>Quản trị website</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
          <div className="box">
            <div className="box__header">
              <h2>Thành tựu</h2>
            </div>
            <div className="box__body">
              <ul>
                <li>Giải đội thi kết hợp ăn ý nhất BeeRace 2022</li>
                <li>Giải khuyến khích LandingPage Hackathon 2023</li>
                <li>Giải ý tưởng sáng tạo GameViet Hackathon 2023</li>
              </ul>
            </div>
          </div>
          <div className="box">
            <div className="box__header">
              <h2>Người liên hệ</h2>
            </div>
            <div className="box__body">
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  repellendus aliquam, atque recusandae sapiente est suscipit
                  dicta temporibus quibusdam quaerat expedita saepe libero,
                  magnam cumque nemo nihil esse! Autem, fugiat.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="box-2">
            <h1 className="fullName">{data?.fullname}</h1>
            <h3>{data?.role}</h3>
          </div>
          <div className="box-3">
            <div className="box__items">
              <div className="box__icon">
                <GenderAmbiguous />
              </div>
              <div className="box__content">{data?.gender}</div>
            </div>
            <div className="box__items">
              <div className="box__icon">
                <Cake2 />
              </div>
              <div className="box__content">{data?.birthday}</div>
            </div>
            <div className="box__items">
              <div className="box__icon">
                <Envelope />
              </div>
              <div className="box__content">{data?.phone}</div>
            </div>
            <div className="box__items">
              <div className="box__icon">
                <Phone />
              </div>
              <div className="box__content">{data?.email}</div>
            </div>
            <div className="box__items">
              <div className="box__icon">
                <GeoAltFill />
              </div>
              <div className="box__content">{data?.address}</div>
            </div>
          </div>

          <div className="box-2">
            <h1 className="title">Mục tiêu nghề nghiệp</h1>
            <h1 className="fst-italic">"</h1>
            <p className="bg-body-secondary p-4">
              Thiết kế, xây dựng và duy trì phần lõi xử lý của các ứng dụng web
              hoặc dịch vụ web, đảm bảo rằng giao diện người dùng phía client có
              thể tương tác một cách hiệu quả với các dịch vụ của ứng dụng. Công
              việc này bao gồm việc phát triển các API, tạo ra logic ứng dụng,
              và cấu hình cơ sở dữ liệu, cũng như đảm bảo tính an toàn và hiệu
              suất cao của ứng dụng.
            </p>
            <h1 className="text-end fst-italic">"</h1>
          </div>
          <div className="box-2">
            <h1 className="title">Kinh nghiệm làm việc</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo provident, molestiae tenetur quas blanditiis maxime
              reiciendis incidunt asperiores. Aspernatur reprehenderit maxime
              cum molestias! Quam ad perspiciatis necessitatibus doloribus,
              mollitia esse!
            </p>
          </div>
          <div className="box-2">
            <h1 className="title">Học vấn</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium debitis earum consequuntur aliquam praesentium
              provident dolorem impedit voluptate dolorum quibusdam nesciunt
              perferendis deleniti, delectus perspiciatis optio nulla, nisi
              porro rerum!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCv;
