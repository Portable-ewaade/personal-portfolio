import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, linkUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
      <a href={linkUrl} target="_blank" rel="noopener noreferrer">
          <img src={imgUrl} alt={title} className="img-fluid"/>
        </a>
        <div className="proj-txtx">
          <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="">
            <h4>{title}</h4>
            </a>
          <span>{description}</span>
          
        </div>
      </div>
    </Col>
  )
}