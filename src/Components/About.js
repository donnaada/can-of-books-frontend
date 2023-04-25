import { Component } from "react";
import { Image, Row, Col } from "react-bootstrap";
import { Github, Linkedin } from "react-bootstrap-icons";
import developers from '../team.json'

class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    // return <p>Profile page coming soon</p>
    return (
      <>
        <div className="container my-5">

          <div className="section-title">
            <h2>Meet the Team</h2>
            <hr />
          </div>

          <Row className="justify-content-md-center g-5">

            {developers.map(dev => {
              return (
                <Col md={6} lg={4} className="d-flex align-items-stretch m-5">
                  <div>
                    <Image src={dev.imageSrc} alt="Developer headshot" roundedCircle fluid />
                    <h4>{dev.name}</h4>
                    <span>{dev.title}</span>
                    <p>
                      {dev.description}
                    </p>
                    <div className="social">
                      <a href={dev.social[0].link} target="_blank" rel="noreferrer noopenner"><Github /></a>
                      <a href={dev.social[1].link} target="_blank" rel="noreferrer noopenner"><Linkedin /></a>
                    </div>
                  </div>
                </Col>
              )
            })

            }


          </Row>

        </div >
      </>
    )
  }
};

export default Profile;
