import React, { useEffect, useState } from "react";
import phone from "availity-reactstrap-validation/lib/AvValidator/phone";
import Modal from "@material-ui/core/Modal";
import { useDispatch } from "react-redux";
import { addEmployees } from "../../redux/actions";
import Axios from "axios";
import DataTable from "react-data-table-component";
import { MDBDataTableV5 } from "mdbreact";

function View() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("test");
  const [email, setEmail] = useState("test1@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("12345678");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(1);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const dispatch = useDispatch();

  // const userLogin = useSelector((state) => state)
  // const { loading, error, userInfo } = userLogin
  // console.log(userLogin)

  const redirect = Location.search ? Location.search.split("=")[1] : "/";

  const getAllusers = () => {
    Axios.get(`http://localhost:8000/users`, {})
      .then((response) => {
        const data = response.data;
        console.log(data);
        setAllUsers(data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  React.useEffect(() => {
    getAllusers();
  }, []);

  // useEffect(() => {
  //   if (userInfo) {
  //     history.push(redirect)
  //   }
  // }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addEmployees(name, email, password, isAdmin, phoneNumber));
  };
  // const data = {
  const columns = [
    {
      name: "Name",
      field: "name",
      selector: (row) => row.name,
    },
    {
      name: "email",
      field: "email",
      selector: (row) => row.email,
    },
    {
      name: "Role",
      field: "isAdmin",
      selector: (row) => row.isAdmin,
    },
  ];
  // };
  return (
    <div className="viewProduct__container">
      <h1>Employee List</h1>
      <div className="viewEmployee__container">
        <div className="viewEmployee__header">
          <button
            type="button "
            className="btn btn-primary mb-5"
            onClick={handleOpen}
          >
            Add Employee
          </button>
          <Modal
            onClose={handleClose}
            open={open}
            style={{
              // position: "absolute",
              // border: "2px solid #000",
              backgroundColor: "whitesmoke",
              // boxShadow: "2px solid black",
              height: "60vh",
              width: "80%",
              margin: "auto",
            }}
          >
            <form onSubmit={submitHandler}>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="Product Title"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Tagline"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="inputAddress">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Product Details"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              <div class="form-row">
                <div class="form-group col-md-2">
                  <label for="inputZip">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                Add Employee
              </button>
              <button class="btn ml-3" onClick={handleClose}>
                Cancel
              </button>
            </form>
          </Modal>
        </div>
        {/* <div className="table table-bordered table-left employee_list">
          <thead>
            <tr>
              <th>#ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user, index) => (
              <tr>
                <th scope="row">{index}</th>
                <th>{user.name}</th>
                <td>{user.email}</td>
                <td>{user.isAdmin == 2 ? "Admin" : "Cashire"}</td>
              </tr>
            ))}
          </tbody>
        </div> */}
        {/* <MDBDataTableV5
          barReverse
          hover
          pagingTop
          headCheckboxID="id2"
          bodyCheckboxID="checkboxes2"
          // data={data}
          getValueCheckBox={(e) => {
            // showLogs2(e);
          }}
          searchTop
          searchBottom={false}
        /> */}
        <DataTable columns={columns} data={allUsers} />
      </div>
    </div>
  );
}

export default View;
