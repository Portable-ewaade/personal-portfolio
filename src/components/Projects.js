import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/reina1.jpg";
import projImg2 from "../assets/img/image.png";
import projImg3 from "../assets/img/techtimal.jpg";
import projImg4 from "../assets/img/scriby2.png";
import projImg5 from "../assets/img/oja.webp";
import projImg6 from "../assets/img/anike.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Reina store",
      description: "Design & Development",
      imgUrl: projImg1,
      linkUrl: "https://reina-store.netlify.app/",
    },
    {
      title: "A&Co Consulting website",
      description: "Design & Development",
      imgUrl: projImg2,
      linkUrl: "https://www.theacconsulting.com"
    },
    {
      title: "Techtimal website",
      description: "Design & Development",
      imgUrl: projImg3,
      linkUrl: "https://www.techtimal.org/"
    },
    {
      title: "Scribry",
      description: "Design & Development",
      imgUrl: projImg4,
      linkUrl: "https://scriibryy.netlify.app/"
    },
    {
      title: "Ojanow delivery",
      description: "Design & Development",
      imgUrl: projImg5,
      linkUrl: "https://ojanowapp.com"
    },
    {
      title: "Anike kitchen",
      description: "Design & Development",
      imgUrl: projImg6,
      linkUrl: "https://ayinkemay-kitchen.netlify.app/"
    },
  ];


  const jobs = [
    {
      title: "Educational website",
      description: "Design & Development",
      imgUrl: projImg1,
      linkUrl: "http://www.example.com",
    },
    {
      title: "Event booking website",
      description: "Design & Development",
      imgUrl: projImg2,
      linkUrl: "http://www.example.com",
    },
    {
      title: "Health and wellness website",
      description: "Design & Development",
      imgUrl: projImg3,
      linkUrl: "http://www.example.com",
    },
    {
      title: "Content management system",
      description: "Design & Development",
      imgUrl: projImg1,
      linkUrl: "http://www.example.com",
    },
    {
      title: "Real estate website",
      description: "Design & Development",
      imgUrl: projImg2,
      linkUrl: "http://www.example.com",
    },
    {
      title: "Food ordering and delivery platform",
      description: "Design & Development",
      imgUrl: projImg3,
      linkUrl: "http://www.example.com",
    },
  ];

  const websites = [
    {
      title: "News and media platform",
      description: "Design & Development",
      imgUrl: projImg1,
      linkUrl: "http://www.example.com"
    },
    {
      title: "Fitness tracking app",
      description: "Design & Development",
      imgUrl: projImg2,
      linkUrl: "http://www.example.com",
    },
    {
      title: "Resume website",
      description: "Design & Development",
      imgUrl: projImg3,
      linkUrl: "http://www.example.com"
    },
    {
      title: "Event management platform",
      description: "Design & Development",
      imgUrl: projImg1,
      linkUrl: "http://www.example.com"
    },
    {
      title: "Recipe sharing website",
      description: "Design & Development",
      imgUrl: projImg2,
      linkUrl: "http://www.example.com"
    },
    {
      title: "Project management tool",
      description: "Design & Development",
      imgUrl: projImg3,
      linkUrl: "http://www.example.com"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>As a frontend developer, I designed and developed a responsive website for a client. The website's purpose was to showcase and sell the client's products to their target audience. The goal was to create a seamless user experience for visitors, making it easy for them to browse and purchase products.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
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
      <img className="background-image-right" src={colorSharp2} alt="background img"></img>
    </section>
  )
}