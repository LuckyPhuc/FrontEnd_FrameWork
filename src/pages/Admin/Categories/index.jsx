import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
  TablePagination,
} from "@mui/material";

import Swal from "sweetalert2";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CategoryPage = () => {
  const [open, setOpen] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  //render data
  useEffect(() => {
    fetchCategories();
  }, []);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const fetchCategories = () => {
    axios
      .get("http://localhost:3001/categories")
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

  const handleEditFormOpen = (id) => {
    setEditingId(id);
    setOpenEditForm(true);
    const categoryToEdit = data.find((category) => category.id === id);
    if (categoryToEdit) {
      setFormData({
        name: categoryToEdit.name,
      });
    }
    // setEditingId(id);
    setOpenEditForm(true);
  };
  const handleEditFormClose = () => {
    setOpenEditForm(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // validate

    axios
      .post("http://localhost:3001/categories", formData)

      .then(function (response) {
        handleClose();
        toast.success("Add categories success");
        fetchCategories();
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
  const handleEdit = (id, e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/categories/${id}`, formData)
      .then(() => {
        toast.success("Update categories success");
        fetchCategories();
      })
      .catch(() => {
        toast.error("Update category fail");
      })
      .finally(() => {
        handleEditFormClose();
      });
  };
  // delete
  const handleDelete = (id) => (e) => {
    e.preventDefault();
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
          .delete(`http://localhost:3001/categories/${id}`)
          .then(() => {
            toast.success("Delete category success");
            fetchCategories();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  // search
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="container">
      <ToastContainer />
      <div>
        <div className="col-12">
          <div className="row">
            <div className="col-sm-12 col-md-4 mb-3">
              <button className="btn btn-primary btn-sm" onClick={handleOpen}>
                ADD
              </button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add a new category</DialogTitle>
                <DialogContent>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      name="name"
                      label="Name"
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
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((value, index) => (
                  <tr key={value.id || index}>
                    <th scope="row">{page * rowsPerPage + index + 1}</th>
                    <td>{value.name}</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleEditFormOpen(value.id)}
                      >
                        Edit
                      </button>{" "}
                      <Dialog open={openEditForm} onClose={handleEditFormClose}>
                        <DialogTitle>Edit category</DialogTitle>
                        <DialogContent>
                          <form onSubmit={(e) => handleEdit(value.id, e)}>
                            {" "}
                            <TextField
                              name="name"
                              label="Name"
                              variant="standard"
                              fullWidth
                              onChange={handleChange}
                              value={formData?.name}
                            />
                            <Button type="submit">Save</Button>
                          </form>
                        </DialogContent>
                      </Dialog>
                      <button
                        className="btn btn-danger btn-sm"
                        type="submit"
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
};

export default CategoryPage;
