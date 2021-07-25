import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { formFetch } from "../client/form.client";
import { useState } from "react";
import Select from "react-select";
import { useHistory } from "react-router";
const MainForm = () => {
  const history = useHistory();
  const [selectData, setselectData] = useState([]);
  const [selectPreviousYearRoll, setSelectPreviousYearRoll] = useState([]);

  const handleSelectArray = (e) => {
    setselectData(Array.isArray(e) ? e.map((obj) => obj.value) : []);
  };

  const handlePrevYearRollArray = (e) => {
    setSelectPreviousYearRoll(
      Array.isArray(e) ? e.map((obj) => obj.value) : []
    );
  };

  const batch = [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  const endRoll = [];

  for (let i = 38; i < 65; i++) {
    endRoll.push(i);
  }
  const startRoll = "01";
  const numberOfStudentIngroup = [3, 4, 5, 6, 7, 8, 9, 10];
  const skipRoll = [];

  for (let i = 1; i < 65; i++) {
    skipRoll.push({
      value: i < 10 ? `0${i}` : `${i}`,
      label: i < 10 ? `0${i}` : `${i}`,
    });
  }

  const DisciplineCode = [];
  for (let i = 1; i < 30; i++) {
    DisciplineCode.push(i > 9 ? `${i}` : `0${i}`);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    formDataObj.skipRoll = selectData;
    formDataObj.prevYearRoll = selectPreviousYearRoll;
    console.log(formDataObj);
    formFetch(formDataObj)
      .then((res) => res.json())
      .then(({ success, message: msg, data }) => {
        if (success) {
          history.push("/group");
          console.log(data);
        }
      });
  };

  return (
    <Container>
      <Row style={{ justifyContent: "center", marginTop: "100px" }}>
        <Col
          md={6}
          style={{
            border: "2px solid #6c0092",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <h2 style={{ fontWeight: "400" }}> Group Creating Form</h2>
            <p>Select your neccessary field and submit form</p>
          </div>
          <Form onSubmit={onFormSubmit} validated>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="batch">
                  {/* <Form.Label>Batch:</Form.Label> */}
                  <Form.Select
                    required
                    name="batch"
                    aria-label="Default select example"
                  >
                    <option key="empty" value={""}>
                      Select a batch
                    </option>
                    {batch.map((oneBatch) => (
                      <option key={oneBatch}>{oneBatch}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="discipline code">
                  {/* <Form.Label>Discipline code:</Form.Label> */}
                  <Form.Select
                    required
                    name="DisciplineCode"
                    aria-label="Default select example"
                  >
                    <option key="empty" value={""}>
                      Select a discipline code
                    </option>
                    {DisciplineCode.map((dCode) => (
                      <option key={dCode}>{dCode}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="endroll">
                  <Form.Label>Start Roll(last two digit of roll):</Form.Label>
                  <Form.Select
                    name="startRoll"
                    required
                    aria-label="Default select example"
                  >
                    <option>{startRoll}</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="startroll">
                  <Form.Label>Last Roll(last two digit of roll):</Form.Label>
                  <Form.Select
                    name="lastRoll"
                    required
                    aria-label="Default select example"
                  >
                    <option key="empty" value={""}>
                      Select last roll
                    </option>
                    {endRoll.map((roll) => (
                      <option key={roll}>{roll}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="skiproll">
              <Form.Label>Roll to skip:</Form.Label>
              <Select
                name="skipRoll"
                onChange={handleSelectArray}
                options={skipRoll}
                isMulti
              />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="startroll">
                  <Form.Label>Add prev year student:</Form.Label>
                  <Form.Select
                    required
                    name="prevYearBatch"
                    aria-label="Default select example"
                  >
                    <option key={"empty"} value={""}>
                      Select batch
                    </option>
                    {[16, 17, 18, 19].map((student) => (
                      <option key={student} value={student}>
                        {student}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="explicitroll">
                  <Form.Label>Select Previous year Rolls:</Form.Label>
                  <Select
                    name="prevYearRoll"
                    onChange={handlePrevYearRollArray}
                    options={skipRoll}
                    isMulti
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="startroll">
              <Form.Label>Number of student in group:</Form.Label>
              <Form.Select
                required
                name="studentPerGroup"
                aria-label="Default select example"
              >
                <option key={"empty"} value={""}>
                  Select number of student in a group
                </option>
                {numberOfStudentIngroup.map((student) => (
                  <option key={student} value={student}>
                    {student}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default MainForm;
