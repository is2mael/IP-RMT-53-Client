import { useEffect, useState } from "react";
import errorHandling from "../util/errors";
import { request } from "../util/axios";
import { Link } from "react-router-dom";

export default function HomePrivate() {
  const [art, setArt] = useState([]);

  const fetchArt = async () => {
    try {
      const response = await request({
        method: "get",
        url: "/user/get/private/home",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setArt(response.data.data);
    } catch (error) {
      errorHandling(error?.response?.data?.message || error.message);
    }
  };

    useEffect(() => {
        fetchArt()
    }, [])
    return (
        <>
          <div className="container mt-5">
            <div className="table-responsive shadow-sm p-3 mb-5 bg-body rounded">
              <table className="table table-hover align-middle text-center">
                <thead>
                  <tr className="table-danger">
                    <th scope="col">No</th>
                    <th scope="col">Title</th>
                    <th scope="col">Content</th>
                    <th scope="col">Image Url</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {art.map((e, i) => (
                    <tr key={e.id}>
                      <td>{i + 1}</td>
                      <td>{e.title}</td>
                      <td>{e.description}</td>
                      <td>
                        <img src={e.imageUrl} alt={e.title} width="100" className="img-fluid" />
                      </td>
                      <td>
                        <div className="btn-group" role="group" aria-label="Action Buttons">
                          <button
                            className="btn btn-warning"
                            onClick={() => handleDeletePost(e.id)}
                          >
                            Delete
                          </button>
                          <Link to={`/user/get/private/arts/${e.id}`}>
                            <button className="btn btn-info">Edit</button>
                          </Link>
                          <Link to="/upload">
                            <button className="btn btn-secondary">Upload Image</button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Floating Buttons */}
            <div className="fixed-bottom d-flex justify-content-end m-4">
              <div className="btn-group">
                <Link to="/addUser">
                  <button className="btn btn-primary">Add User</button>
                </Link>
                <Link to="/addPost">
                  <button className="btn btn-primary">Add Post</button>
                </Link>
              </div>
            </div>
          </div>
        </>
      );
      
}
