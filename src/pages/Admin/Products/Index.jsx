import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { toast, ToastContainer, Bounce } from "react-toastify";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
  TablePagination,
  Avatar,
} from "@mui/material";

import Swal from "sweetalert2";
import { FileX } from "react-bootstrap-icons";
function CrudAPI() {
  const notify = () => toast("Wow so easy!");
  //render data
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    url_img: "",
  });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  //render data
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = () => {
    axios
      .get("http://localhost:3001/products")
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
      .post("http://localhost:3001/products", formData)

      .then(function (response) {
        handleClose();
        toast.success("Add success!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        fetchProduct();
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
      title: "Edit product",
      html:
        `<label for="swal-input1" style="display: block; margin-bottom: 5px;">Name</label>` +
        `<input id="swal-input1" class="swal2-input" placeholder="name" value="${postToEdit.name}">` +
        `<label for="swal-input2" style="display: block; margin-bottom: 5px;">Price</label>` +
        `<input id="swal-input2" class="swal2-input" placeholder="price" value="${postToEdit.price}">` +
        `<label for="swal-input3" style="display: block; margin-bottom: 5px;">description</label>` +
        `<input id="swal-input3" class="swal2-input" placeholder="description" value="${postToEdit.description}">`,
      focusConfirm: true,
      showCancelButton: true,
      confirmButtonText: "Lưu",
      cancelButtonText: "Hủy",
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value,
          document.getElementById("swal-input3").value,
        ];
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const [name, price, description] = result.value;
        axios
          .put(`http://localhost:3001/products/${id}`, {
            id: id,
            name: name,
            price: price,
            description: description,
          })
          .then(() => {
            Swal.close();
            Swal.fire({
              title: "Cập nhật thành công",
              text: "Đã cập nhật bài viết",
              icon: "success",
            });
            fetchProduct();
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
          .delete(`http://localhost:3001/products/${id}`)
          .then(() => {
            toast.success("Delete success!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
            fetchProduct();
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
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.price.toString().includes(searchQuery)
  );

  return (
    <div className="container">
      <div>
        <button onClick={notify}>Notify!</button>
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
                      name="name"
                      label="Name"
                      variant="standard"
                      fullWidth
                      onChange={handleChange}
                    />
                    <TextField
                      name="price"
                      label="Price"
                      variant="standard"
                      fullWidth
                      onChange={handleChange}
                    />
                    <TextField
                      name="description"
                      label="Description"
                      variant="standard"
                      fullWidth
                      onChange={handleChange}
                    />
                    <TextField
                      name="url_img"
                      label="Url_img"
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
                <th scope="col">Price</th>
                <th scope="col">Description</th>
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
                        <Avatar alt="Remy Sharp" src={value?.url_img} />
                        <span style={{ marginLeft: "10px" }}>
                          {value?.name}
                        </span>
                      </td>
                      <td>{value?.price}</td>
                      <td>{value?.description}</td>
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
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default CrudAPI;
