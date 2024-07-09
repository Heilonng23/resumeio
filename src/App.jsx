import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import "./App.css";
import logo from "./img/logo.png";
import icon from "./img/icon.png";

function App() {
  const [name, setName] = useState("Ibragim");
  const [surname, setSurname] = useState("Ibragimov");
  const [title, setTitle] = useState("Software Developer");
  const [experienceTitle, setExperienceTitle] = useState("Software Developer");
  const [companyName, setCompanyName] = useState("Xyz");
  const [yearsWorked, setYearsWorked] = useState("2022-2024");
  const [responsibility, setResponsibility] = useState(
    "Developed UI of website"
  );
  const [universityName, setUniversityName] = useState("PJATK");
  const [major, setMajor] = useState("Computer Science");
  const [universityYears, setUniversityYears] = useState("2021-2024");
  const [frontend, setFrontend] = useState("React, Nextjs");
  const [backend, setBackend] = useState("Nodejs, MongoDB, Expressjs");
  const [otherSkills, setOtherSkills] = useState("Git, figma");
  const [project, setProject] = useState("Face Detection");
  const [projectLink, setProjectLink] = useState("");
  const [certifications, setCertifications] = useState("Oracle Java");
  const [certificationsLink, setCertificationsLink] = useState("");

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="container">
      <div className="builder">
        <div className="header">
          <img src={logo} alt="Logo" />
          <p>Resume.io</p>
        </div>
        <div className="inputs">
          <div className="names">
            <div className="name">
              <p>Name</p>
              <input
                type="text"
                placeholder="John"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="surname">
              <p>Surname</p>
              <input
                type="text"
                placeholder="Smith"
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
            <div className="">
              <p>Title</p>
              <input
                type="text"
                placeholder="Smith"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="experience">
          <div className="first">
            <p>Experience</p>
            <div className="experience-details">
              <input
                type="text"
                placeholder="Job title"
                onChange={(e) => setExperienceTitle(e.target.value)}
              />
              <input
                type="text"
                placeholder="Company Name"
                onChange={(e) => setCompanyName(e.target.value)}
              />
              <input
                type="text"
                placeholder="ex. 2022 - present"
                onChange={(e) => setYearsWorked(e.target.value)}
              />
              <input
                type="text"
                placeholder="Responsibility"
                onChange={(e) => setResponsibility(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          <p>Education</p>
          <div className="education">
            <input
              type="text"
              placeholder="University Name"
              onChange={(e) => setUniversityName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Major"
              onChange={(e) => setMajor(e.target.value)}
            />
            <input
              type="text"
              placeholder="ex. 2022 - present"
              onChange={(e) => setUniversityYears(e.target.value)}
            />
          </div>
        </div>
        <div>
          <p>Skills</p>
          <div className="education">
            <input
              type="text"
              placeholder="Frontend"
              onChange={(e) => setFrontend(e.target.value)}
            />
            <input
              type="text"
              placeholder="Backend & Database"
              onChange={(e) => setBackend(e.target.value)}
            />
            <input
              type="text"
              placeholder="Extra"
              onChange={(e) => setOtherSkills(e.target.value)}
            />
          </div>
        </div>
        <div className="experience">
          <div className="first">
            <p>Best project</p>
            <div className="experience-details">
              <input
                type="text"
                placeholder="Title"
                onChange={(e) => setProject(e.target.value)}
              />
              <input
                type="text"
                placeholder="Link"
                onChange={(e) => setProjectLink(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="experience">
          <div className="first">
            <p>Certifications</p>
            <div className="experience-details">
              <input
                type="text"
                placeholder="Issued By"
                onChange={(e) => setCertifications(e.target.value)}
              />
              <input
                type="text"
                placeholder="Link"
                onChange={(e) => setCertificationsLink(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="resume" ref={componentRef}>
        <div className="inside">
          <div className="header2">
            <div className="names2">
              <p>{name}</p>
              <p>{surname}</p>
            </div>
            <div className="title1">
              <p>{title}</p>
            </div>
          </div>
          <div className="experience2">
            <p className="titExperience">Experience</p>
            <div className="detailsof">
              <p style={{ fontSize: "17px", fontWeight: 600 }}>
                {experienceTitle}
              </p>
              <div className="yearCompany">
                <p style={{ marginLeft: "20px" }}>
                  <em> {companyName} </em>
                  <em> {yearsWorked} </em>
                </p>
                <p style={{ marginLeft: "20px", fontSize: "14px" }}>
                  {responsibility}
                </p>
              </div>
            </div>
          </div>
          <div className="education2">
            <p className="titEducation">Education</p>
            <div className="detailsof">
              <p style={{ fontSize: "17px", fontWeight: 600 }}>{major}</p>
              <div className="yearCompany">
                <p style={{ marginLeft: "20px" }}>
                  <em> {universityName} </em>
                  <em> {universityYears} </em>
                </p>
              </div>
            </div>
          </div>
          <div className="education2">
            <p className="titEducation">Skills</p>
            <div className="skillsof">
              <div className="frontend">
                <p style={{ fontSize: "16px", fontWeight: 400 }}>Frontend</p>
                <ul>
                  <li>{frontend}</li>
                </ul>
              </div>
              <div className="frontend">
                <p style={{ fontSize: "16px", fontWeight: 400 }}>
                  Backend & Database
                </p>
                <ul>
                  <li>{backend}</li>
                </ul>
              </div>
              <div className="frontend">
                <p style={{ fontSize: "16px", fontWeight: 400 }}>Other</p>
                <ul>
                  <li>{otherSkills}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="education2">
            <p className="titEducation">Best Project</p>
            <div className="projectof">
              <p style={{ marginLeft: "20px" }}>{project} --</p>
              <p style={{ marginLeft: "0" }}>
                <a href={projectLink}>Live Demo</a>
              </p>
            </div>
          </div>
          <div className="education2">
            <p className="titEducation">Certifications</p>
            <div className="projectof">
              <p style={{ marginLeft: "20px" }}>{certifications} --</p>
              <p style={{ marginLeft: "0" }}>
                <a href={certificationsLink}>Live Demo</a>
              </p>
            </div>
          </div>
          <footer>
            <span>
              <img src={icon} alt="" />
            </span>
            <p>
              <a href="https://github.com/Heilonng23/resumeio" target="_blank">
                Source Code
              </a>
            </p>
            <br />
            <button onClick={handlePrint}>Download as PDF</button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
