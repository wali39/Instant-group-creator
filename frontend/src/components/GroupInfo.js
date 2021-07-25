// import { Card, Typography, CardContent, Grid } from "@material-ui/core";
import { Row, Col, Container, Card, Image, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import groupsign from "../assets/images/grouplogo2.jpg";

const GroupInfo = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000", {
      method: "get",
    })
      .then((res) => res.json())
      .then(({ data }) => {
        setList(data);
      });
  }, []);

  return (
    <Container style={{ marginBottom: "50px" }}>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        {list &&
          list.map((groupObj) => (
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
          ))}
      </Row>
      <div>
        <Link to="/">
          <span style={{ padding: "10px 20px", background: "#0984e3" }}>
            Back to Home
          </span>
        </Link>
      </div>
    </Container>
  );
};

export default GroupInfo;
