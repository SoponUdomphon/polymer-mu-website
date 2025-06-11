import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Staff.css";

const staffData = [
  {
    id: 1,
    name: "Dr. Krisda Suchiva",
    title: "Assistant Professor, Honorary Advisor",
    email: "krisda.suc@mahidol.ac.th",
    image: "/staff/Single Photo/1. Krisda Suchiva.jpg",
    link: "https://science.mahidol.ac.th/expertise/search.php?q=Krisda%20Suchiva",
  },
  {
    id: 2,
    name: "Dr. Pranee Phinyocheep",
    title: "Professor, Honorary Advisor",
    email: "pranee.phi@mahidol.ac.th",
    image: "/staff/Single Photo/6. Pranee Phinyocheep.jpg",
    link: "https://science.mahidol.ac.th/expertise/search.php?q=Pranee%20Phinyocheep",
  },
  {
    id: 3,
    name: "Dr. Pramuan Tangboriboonrat",
    title: "Distinguished Professor",
    email: "pramuan.tan@mahidol.ac.th",
    image: "/staff/Single Photo/2. Pramuan Tangboriboonrat.jpg",
    link: "https://science.mahidol.ac.th/expertise/search.php?q=Pramuan%20Tangboriboonrat",
  },
  {
    id: 4,
    name: "Dr. Chakrit Sirisinha",
    title: "Professor",
    email: "chakrit.sir@mahidol.ac.th",
    image: "/staff/Single Photo/3. Chakrit Sirisingha.jpg",
    link: "https://science.mahidol.ac.th/expertise/search.php?q=Chakrit%20Sirisinha",
  },
  {
    id: 5,
    name: "Dr. Jitladda Sakdapipanich",
    title: "Professor",
    email: "jitladda.sak@mahidol.ac.th",
    image: "/staff/Single Photo/4. Jitladda Sakdapipanich.jpg",
    link: "https://science.mahidol.ac.th/expertise/search.php?q=Jitladda%20Sakdapipanich",
  },
  {
    id: 6,
    name: "Dr. Kalyanee Sirisinha",
    title: "Professor",
    email: "kalyanee.sir@mahidol.ac.th",
    image: "/staff/Single Photo/5. Kalyanee Sirisingha.jpg",
    link: "https://science.mahidol.ac.th/expertise/search.php?q=Kalyanee%20Sirisinha",
  },
  {
    id: 7,
    name: "Dr. Panya Sunintaboon",
    title: "Associate Professor",
    email: "panya.sun@mahidol.ac.th",
    image: "/staff/Single Photo/7. Panya Sunintaboon.jpg",
    link: "https://science.mahidol.ac.th/expertise/search.php?q=Panya%20Sunintaboon",
  },
  {
    id: 8,
    name: "Dr. Sombat Thanawan",
    title: "Associate Professor",
    email: "sombat.tha@mahidol.ac.th",
    image: "/staff/Single Photo/8. Sombat Thanawan.jpg",
    link: "https://science.mahidol.ac.th/expertise/search.php?q=Sombat%20Thanawan",
  },
  {
    id: 9,
    name: "Dr. Supa Wirasate",
    title: "Associate Professor",
    email: "supa.wir@mahidol.ac.th",
    image: "/staff/Single Photo/9. Supa Wiraset.jpg",
    link: "https://science.mahidol.ac.th/expertise/search.php?q=Supa%20Wirasate",
  },
  {
    id: 10,
    name: "Dr. Taweechai Amornsakchai",
    title: "Associate Professor",
    email: "taweechai.amo@mahidol.ac.th",
    image: "/staff/Single Photo/10. Taweechai Amornsakchai.jpg",
    link: "https://science.mahidol.ac.th/expertise/search.php?q=Taweechai%20Amornsakchai",
  },
  {
    id: 11,
    name: "Dr. Thammasit Vongsetskul",
    title: "Associate Professor",
    email: "thammasit.von@mahidol.edu",
    image: "/staff/Single Photo/Unknown_person.jpg",
    link: "https://science.mahidol.ac.th/expertise/search.php?q=Thammasit%20Vongsetskul",
  },
  {
    id: 12,
    name: "Dr. Anyarat Watthanaphanit",
    title: "Assistant Professor, Program Director",
    email: "anyarat.wat@mahidol.ac.th",
    image: "/staff/Single Photo/12. Anyarat Watthanaphanit.jpg",
    link: "https://science.mahidol.ac.th/expertise/search.php?q=Anyarat%20Watthanaphanit",
  },
  {
    id: 13,
    name: "Dr. Chayanisa Chitichotpanya",
    title: "Assistant Professor",
    email: "chayanisa.chi@mahidol.edu",
    image: "/staff/Single Photo/Unknown_person.jpg",
    link: "https://science.mahidol.ac.th/expertise/search.php?q=Chayanisa%20Chitichotpanya",
  },
  {
    id: 14,
    name: "Dr. Darapond Triampo",
    title: "Assistant Professor",
    email: "darapond.tri@mahidol.edu",
    image: "/staff/Single Photo/14. Darapond Triampo.jpg",
    link: "https://science.mahidol.ac.th/expertise/search.php?q=Darapond%20Triampo",
  },
  {
    id: 15,
    name: "Dr. Manthana Jariyaboon",
    title: "Assistant Professor",
    email: "manthana.jar@mahidol.ac.th",
    image: "/staff/Single Photo/Unknown_person.jpg",
    link: "https://science.mahidol.ac.th/expertise/search.php?q=Manthana%20Jariyaboon",
  },
  {
    id: 16,
    name: "Dr. Preeyanuch Junkong",
    title: "Assistant Professor",
    email: "preeyanuch.jun@mahidol.ac.th",
    image: "/staff/Single Photo/16. Preeyanuch Junkong.jpg",
    link: "https://science.mahidol.ac.th/expertise/search.php?q=Preeyanuch%20Junkong",
  },
  {
    id: 17,
    name: "Dr. Thanchanok Ratvijitvech",
    title: "Assistant Professor, Secretariat",
    email: "thanchanok.rat@mahidol.ac.th",
    image: "/staff/Single Photo/17. Thanchanok Ratvijitvech.jpg",
    link: "https://science.mahidol.ac.th/expertise/search.php?q=Thanchanok%20Ratvijitvech",
  },
];

const supportData = [
  {
    id: 1,
    name: "Kwanlda Suwanpong",
    title: "General Administrative Officer",
    email: "kwanlda.suw@mahidol.ac.th",
    image: "/staff/Single Photo/Unknown_person.jpg",
    link: "",
  },
];

const Staff: React.FC = () => {
  return (
    <div className="staff-page">
      <Container>
        <div className="staff-header">
          <h1>Our Faculty Staff</h1>
          <p>
            Meet our distinguished faculty members who are dedicated to
            excellence in teaching, research, and innovation in the field of
            Information Systems.
          </p>
        </div>

        <div className="staff-grid">
          {staffData.map((staff) => (
            <div key={staff.id} className="staff-card">
              <div className="staff-image-container">
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="staff-image"
                />
              </div>
              <div className="staff-info">
                <h3 className="staff-name">
                  <a
                    href={staff.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {staff.name}
                  </a>
                </h3>
                <p className="staff-title">{staff.title}</p>
                <div className="staff-email">
                  <i className="fas fa-envelope"></i>
                  <a href={`mailto:${staff.email}`}>{staff.email}</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-4 mb-md-0">
          <h3>
            <strong>Academic Support</strong>
          </h3>
          <p>
            Meet our distinguished faculty members who are dedicated to
            excellence in teaching, research, and innovation in the field of
            Information Systems.
          </p>
        </div>

        <div className="staff-grid">
          {supportData.map((staff) => (
            <div key={staff.id} className="staff-card">
              <div className="staff-image-container">
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="staff-image"
                />
              </div>
              <div className="staff-info">
                <h3 className="staff-name">
                  <a
                    href={staff.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {staff.name}
                  </a>
                </h3>
                <p className="staff-title">{staff.title}</p>
                <div className="staff-email">
                  <i className="fas fa-envelope"></i>
                  <a href={`mailto:${staff.email}`}>{staff.email}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Staff;
