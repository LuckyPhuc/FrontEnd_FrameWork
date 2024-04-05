import axios from "axios";
import AddPosts from "./AddPosts";
import { useState, useEffect } from "react";

const DemoAPI = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    description: "",
  });
  function handleSubmitForm(e) {
    const { name, value } = e.value;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log();
  }
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios
      .get("http://localhost:3001/posts")
      .then(function (response) {
        // xử trí khi thành công
        // console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        // xử ly khi bị lỗi
        console.log(error);
      })
      .finally(function () {
        // luôn luôn được thực thi
      });
  };
  const createPost = () => {};
  return (
    <div>
      <h1>Tạo bài đăng</h1>
      <div className="mb-3 w-50">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          name="title"
          onChange={handleSubmitForm}
        />
      </div>
      <div className="mb-3 w-50">
        <label className="form-label">Description</label>
        <input
          type="text"
          className="form-control"
          name="description"
          onChange={handleSubmitForm}
        />
      </div>
      <div className="mb-3 w-50">
        <label className="form-label">Image</label>
        <input
          type="file"
          className="form-control"
          name="img"
          onChange={handleSubmitForm}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      {data &&
        data.map((value, index) => {
          return (
            <div key={index}>
              <p>{value.id}</p>
              <p>{value.title}</p>
              <p>{value.description}</p>
              <p>
                <img src={value.img} alt="" />
              </p>
            </div>
          );
        })}
    </div>
  );
};
export default DemoAPI;
