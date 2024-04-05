import { Height } from "@mui/icons-material";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TablePagination,
  TextField,
  Button,
  Avatar,
} from "@mui/material";
import axios from "axios";

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

function CustomerPage() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    role: "",
    email: "",
    avatar: "",
    password: "hoangphuc0062",
  });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  //render data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:3001/users")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // add
  const handleOpen = () => {
    setOpen(true);
  };

  // Xử lý đóng Dialog
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // validate
    axios
      .post("http://localhost:3001/users", formData)

      .then(function (response) {
        handleClose();
        Swal.fire({
          title: "Success add a user",
          text: "Add a new user",
          icon: "success",
        });
        fetchData();
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  // edit
  const handleEdit = (id) => (event) => {
    event.preventDefault();
    var postToEdit = data.find((post) => post.id == id);
    Swal.fire({
      title: "Update user",
      html:
        `<label for="swal-input2" style="display: block; margin-bottom: 5px;">User Name</label>` +
        `<input id="swal-input1" class="swal2-input"  value="${postToEdit.username}">` +
        `<label for="swal-input2" style="display: block; margin-bottom: 5px;">Email</label>` +
        `<input id="swal-input2" class="swal2-input"  value="${postToEdit.email}">` +
        `<label for="swal-input2" style="display: block; margin-bottom: 5px;">Role</label>` +
        `<input id="swal-input3" class="swal2-input"  value="${postToEdit.role}">` +
        `<label for="swal-input2" style="display: block; margin-bottom: 5px;">Avatar</label>` +
        `<input id="swal-input4" class="swal2-input"  value="${postToEdit.avatar}">`,
      focusConfirm: true,
      showCancelButton: true,
      confirmButtonText: "Lưu",
      cancelButtonText: "Hủy",
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value,
          document.getElementById("swal-input3").value,
          document.getElementById("swal-input4").value,
        ];
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const [username, email, role, avatar] = result.value;
        axios
          .put(`http://localhost:3001/users/${id}`, {
            id: id,
            username: username,
            email: email,
            role: role,
            avatar: avatar,
          })
          .then(() => {
            Swal.close();
            Swal.fire({
              title: "Cập nhật thành công",
              text: "Đã cập nhật sản phẩm",
              icon: "success",
            });
            fetchData();
          })
          .catch((error) => {
            Swal.close();
            Swal.fire({
              title: "Cập nhật thất bại",
              text: "Có gì đó sai sai",
              icon: "error",
            });
            console.log(error);
          });
      }
    });
  };
  // delete
  const handleDelete = (id) => (event) => {
    event.preventDefault();
    Swal.fire({
      title: "Bạn có chắc chắn không?",
      text: "Bạn sẽ không thể hoàn tác lại hành động này!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Có, xóa nó!",
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3001/users/${id}`)
          .then(() => {
            Swal.fire({
              title: "Xóa người dùng",
              text: "Xóa thành công",
              icon: "success",
            });
            fetchData();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };
  // search
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data.filter(
    (item) =>
      item?.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item?.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item?.role.toString().includes(searchQuery) ||
      item?.avatar.toString().includes(searchQuery)
  );
  return (
    <div className="container">
      <div>
        <div className="col-12">
          <div className="row">
            <div className="col-sm-12 col-md-4 mb-3">
              <button className="btn btn-primary btn-sm" onClick={handleOpen}>
                ADD
              </button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add New Product</DialogTitle>
                <DialogContent>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      name="username"
                      label="Name"
                      variant="standard"
                      fullWidth
                      onChange={handleChange}
                    />
                    <TextField
                      name="role"
                      label="Role"
                      variant="standard"
                      fullWidth
                      onChange={handleChange}
                    />
                    <TextField
                      name="email"
                      label="Email"
                      variant="standard"
                      fullWidth
                      onChange={handleChange}
                    />
                    <TextField
                      name="avatar"
                      label="Avatar"
                      variant="standard"
                      fullWidth
                      onChange={handleChange}
                    />

                    <Button type="submit">Submit</Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
            <div className="col-sm-12 col-md-8">
              <input
                type="text"
                className="form-control"
                placeholder="Tìm kiếm..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <table className="table table-hover">
            {" "}
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData &&
                filteredData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((value, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td style={{ display: "flex", alignItems: "center" }}>
                        <Avatar alt="Remy Sharp" src={value?.avatar} />
                        <span style={{ marginLeft: "10px" }}>
                          {value?.username}
                        </span>
                      </td>
                      <td>{value?.email}</td>
                      <td>{value?.role}</td>
                      <td>
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={handleEdit(value.id)}
                        >
                          Edit
                        </button>{" "}
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={handleDelete(value.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
          <TablePagination
            component="div"
            count={filteredData.length}
            page={page}
            onPageChange={(event, newPage) => setPage(newPage)}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={(event) => {
              setRowsPerPage(parseInt(event.target.value, 10));
              setPage(0);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CustomerPage;
