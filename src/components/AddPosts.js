import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function AddPosts() {
  return (
    <>
      <h1>Tạo bài đăng</h1>
      <div className="mb-3 w-50">
        <label className="form-label">Title</label>
        <input type="text" className="form-control" name="title" />
      </div>
      <div className="mb-3 w-50">
        <label className="form-label">Description</label>
        <input type="text" className="form-control" name="description" />
      </div>
      <div className="mb-3 w-50">
        <label className="form-label">Image</label>
        <input type="file" className="form-control" name="img" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </>
  );
}

export default AddPosts;
