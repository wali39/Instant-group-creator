// import { Card, Typography, CardContent, Grid } from "@material-ui/core";
import { Row, Col, Container, Card, Image, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import groupsign from "../assets/images/grouplogo2.jpg";

const GroupInfo = () => {
  const [list, setList] = useState([]);
  const [group, setGroup] = useState();
  const [total, setTotal] = useState();
  const [studentIngroup, setStudentIngroup] = useState();
  useEffect(() => {
    fetch("https://groupapi39.herokuapp.com", {
      method: "get",
    })
      .then((res) => res.json())
      .then(({ data, group, totalStudent, studentInGroup }) => {
        setList(data);
        setGroup(group);
        setTotal(totalStudent);
        setStudentIngroup(studentInGroup);
      });
  }, []);

  return (
    <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h2 style={{ fontWeight: "400" }}>Total Students {total}</h2>
          <p style={{ fontSize: "20px" }}>Total Group {group}</p>
          <p style={{ fontSize: "20px" }}>
            {studentIngroup} Students in One Group
          </p>
        </div>
        {list && list.length ? (
          list.map((groupObj, index) => (
            <Col md={4} style={{ marginBottom: "20px" }}>
              <Card
                style={{
                  background: "#6c0092",
                  color: "white",
                }}
              >
                <Card.Body
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Image
                    src={groupsign}
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                      marginBottom: "20px",
                    }}
                  />
                  <Card.Title
                    style={{ fontSize: "25px", marginBottom: "20px" }}
                  >
                    Group No {groupObj.groupN}
                  </Card.Title>
                  {groupObj.studentArr.map((student) => (
                    <Alert variant="dark" style={{ padding: "5px" }}>
                      <span style={{ fontSize: "20px" }}> {student}</span>
                    </Alert>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <div style={{ margin: "50px 0", textAlign: "center" }}>
              <Alert variant="info">
                Please fill up form to show group list
              </Alert>
            </div>
          </Col>
        )}
      </Row>
      <div>
        <Link to="/">
          <span
            style={{
              padding: "10px 20px",
              background: "#cff4fc",
              fontSize: "18px",
            }}
          >
            <i class="fas fa-long-arrow-alt-right"></i> Go to Form
          </span>
        </Link>
      </div>
    </Container>
  );
};

export default GroupInfo;
