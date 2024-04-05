import { useState, useRef } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

//icon
import { Telephone, Envelope, House, StarFill } from "react-bootstrap-icons";

import { forwardRef } from "react";

const CV = forwardRef((props, ref) => {
  return (
    <div className="CV" ref={ref}>
      <div className="container p-5 main ">
        <div className="row">
          <div className="col-4 border-end">
            <img className="avatar" src="img/avatar.jpg" alt="" />
            <div className="detail">
              <div className="detail__header my-3">
                <h3>CONTACT</h3>
              </div>
              <div className="detail__body my-3">
                <div className="detail__in4">
                  <span className="detail__icon">
                    <Telephone />
                  </span>
                  <span>{props.phone}</span>
                </div>
                <div className="detail__in4">
                  <span className="detail__icon">
                    <Envelope />
                  </span>
                  <span>{props.gmail}</span>
                </div>
                <div className="detail__in4">
                  <span className="detail__icon">
                    <House />
                  </span>
                  <span>{props.address}</span>
                </div>
              </div>
              <div className="detail__footer">
                <h2>EDUCATION &</h2>
                <h2>CERTIFICATE</h2>
                <ul>
                  <li className="list-group-item my-4">
                    <h3 className="fst-italic">MASTER</h3>
                    <h4 className="fs-5 text">FPT COLLEGE</h4>
                  </li>
                  <li className="list-group-item my-4">
                    <h3 className="fst-italic">YEAR</h3>
                    <h4 className="fs-5 text">2024</h4>
                  </li>
                  <li className="list-group-item my-4">
                    <h3 className="fst-italic">BACHELOR</h3>
                    <h4 className="fs-5 text">FPT COLLEGE</h4>
                  </li>
                  <li className="list-group-item my-4">
                    <h3 className="fst-italic">CERTIFICATE #1</h3>
                    <h4 className="fs-5 text">FPT COLLEGE</h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-8 ">
            <div className="btn float-right"></div>
            <div className="row mx-3">
              <div className="container">
                <header className="name border-bottom">
                  <h1>{props.lastName}</h1>
                  <h1>{props.firstName}</h1>
                  <div className="position">
                    <h5>BACKEND DEVELOPER</h5>
                  </div>
                </header>
                <div className="container my-5">
                  <header>
                    <h3>BẢNG TÓM TẮT</h3>
                    <p>
                      Thiết kế, xây dựng và duy trì phần lõi xử lý của các ứng
                      dụng web hoặc dịch vụ web, đảm bảo rằng giao diện người
                      dùng phía client có thể tương tác một cách hiệu quả với
                      các dịch vụ của ứng dụng. Công việc này bao gồm việc phát
                      triển các API, tạo ra logic ứng dụng, và cấu hình cơ sở dữ
                      liệu, cũng như đảm bảo tính an toàn và hiệu suất cao của
                      ứng dụng.
                    </p>
                  </header>
                  <div>
                    <h3>KĨ NĂNG</h3>
                    <ul>
                      <li>
                        <div className="row">
                          <div className="col-4">HTML</div>
                          <div className="col-8 d-flex justify-content-between">
                            <StarFill className="text-warning" />
                            <StarFill className="text-warning" />
                            <StarFill className="text-warning" />
                            <StarFill className="text-warning" />
                            <StarFill />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div className="col-4">CSS</div>
                          <div className="col-8 d-flex justify-content-between">
                            <StarFill className="text-warning" />
                            <StarFill className="text-warning" />
                            <StarFill className="text-warning" />
                            <StarFill className="text-warning" />
                            <StarFill />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div className="col-4">JAVASCRIPT</div>
                          <div className="col-8 d-flex justify-content-between">
                            <StarFill className="text-warning" />
                            <StarFill className="text-warning" />
                            <StarFill className="text-warning" />
                            <StarFill />
                            <StarFill />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div className="col-4">PHP</div>
                          <div className="col-8 d-flex justify-content-between">
                            <StarFill className="text-warning" />
                            <StarFill className="text-warning" />
                            <StarFill className="text-warning" />
                            <StarFill />
                            <StarFill />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div className="col-4">PHP - LARAVEL</div>
                          <div className="col-8 d-flex justify-content-between">
                            <StarFill className="text-warning" />
                            <StarFill className="text-warning" />
                            <StarFill />
                            <StarFill />
                            <StarFill />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div className="col-4">C#</div>
                          <div className="col-8 d-flex justify-content-between">
                            <StarFill className="text-warning" />
                            <StarFill />
                            <StarFill />
                            <StarFill />
                            <StarFill />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div className="col-4">MYSQL</div>
                          <div className="col-8 d-flex justify-content-between">
                            <StarFill className="text-warning" />
                            <StarFill className="text-warning" />
                            <StarFill />
                            <StarFill />
                            <StarFill />
                          </div>
                        </div>
                      </li>
                    </ul>
                    <h5>CÔNG CỤ</h5>
                    <ul>
                      <li>Visual Studio Code</li>
                      <li>Postman</li>
                      <li>GIT</li>
                      <li>MySQL WorkBench</li>
                      <li>ChatGPT</li>
                      <li>StackOverFlow</li>
                    </ul>
                    <h3>THÀNH TỰU</h3>
                    <div className="position">
                      <h5>BACKEND DEVELOPER</h5>
                    </div>
                    <h5>THÀNH TỰU</h5>
                    <ul>
                      <li>
                        <p>
                          Giải đội kết hợp ăn ý nhất trong cuộc thi BeeRace do
                          Trường cao đẳng FPT Politechnic và Đại học Y Dược BMT
                          Tổ chức Tháng 10 năm 2022
                          <div className="row">
                            <img
                              className="img-thumbnail img__slider m-2"
                              src="img/1_1.JPG"
                            />
                            <img
                              className="img-thumbnail img__slider m-2"
                              src="img/1_2.JPEG"
                            />
                          </div>
                        </p>
                      </li>
                      <li>
                        <p>
                          Giải khuyến khích trong cuộc thi HACKATHON LANDINGPAGE
                          2023 Tại Trường cao đẳng FPT Politechnic Tháng 3 Năm
                          2023
                          <div className="row">
                            <img
                              className="img-thumbnail img__slider m-2"
                              src="img/2_1.JPG"
                            />
                            <img
                              className="img-thumbnail img__slider m-2"
                              src="img/2_2.JPG"
                            />
                            <img
                              className="img-thumbnail img__slider m-2"
                              src="img/2_3.JPG"
                            />
                          </div>
                        </p>
                      </li>
                      <li>
                        <p>
                          Giải ý tưởng sáng tạo trong cuộc thi HACKATHON
                          GAMEVIET 2023 Tại Trường cao đẳng FPT Politechnic
                          Tháng 9 Năm 2023
                          <div className="row">
                            <img
                              className="img-thumbnail img__slider m-2 "
                              src="img/3_1.JPG"
                            />
                            <img
                              className="img-thumbnail img__slider m-2"
                              src="img/3_2.JPEG"
                            />
                            <img
                              className="img-thumbnail img__slider m-2"
                              src="img/3_3.JPEG"
                            />
                          </div>
                        </p>
                      </li>
                    </ul>
                    <h5></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default CV;
