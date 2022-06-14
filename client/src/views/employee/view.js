import React, { useState } from "react";
import phone from "availity-reactstrap-validation/lib/AvValidator/phone";
import { Modal } from "reactstrap";

function View() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="viewProduct__container">
      <h1>Employee List</h1>
      <div className="viewEmployee__container">
        <div className="viewEmployee__header">
          <button type="button" onClick={handleOpen}>
            Click Me to Open Modal
          </button>
          <Modal
            onClose={handleClose}
            open={open}
            style={{
              position: "absolute",
              border: "2px solid #000",
              backgroundColor: "gray",
              boxShadow: "2px solid black",
              height: 80,
              width: 240,
              margin: "auto",
            }}
          >
            <h2>How are you?</h2>
          </Modal>
        </div>
        <div className="table table-bordered table-left">
          <thead>
            <tr>
              <th>#ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </div>
      </div>
      {/* <!-- Large modal --> */}

      <div
        class="modal fade bd-example-modal-lg"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <form>
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
