import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "E-commerce website",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Social networking platform",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Blogging website",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Job board",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Online portfolio",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Travel booking website",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];


  const jobs = [
    {
      title: "Educational website",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Event booking website",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Health and wellness website",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Content management system",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Real estate website",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Food ordering and delivery platform",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  const websites = [
    {
      title: "News and media platform",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Fitness tracking app",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Resume website",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Event management platform",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Recipe sharing website",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Project management tool",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          jobs.map((jobs, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...jobs}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          websites.map((websites, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...websites}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}