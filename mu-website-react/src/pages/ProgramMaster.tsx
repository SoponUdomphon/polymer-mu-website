import React, { useState } from "react";
import { Container, Accordion, Modal, Button } from "react-bootstrap"; // Added Modal, Button
import "./ProgramMaster.css"; // Assuming this CSS file exists for general styling

// It's good practice to define types for your data props
interface Course {
  year: number | string;
  semester: number | string;
  courseCode: string;
  courseTitle: string;
  credits: string;
  activities?: string; // Optional activities
}

interface ElectiveCourse {
  code: string;
  title: string;
  credits: string;
  activities?: string;
}

// Main Component
const ProgramMaster: React.FC = () => {
  const [activePlan, setActivePlan] = useState("plan1_1");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    activities: "",
  });

  // --- Data (kept as in your original code) ---
  const programOverview = {
    title: "Master of Science Program in Polymer Science and Technology",
    description:
      "The Master of Science Program in Polymer Science and Technology (International Program / Revised Program in 2024) is offered by the Faculty of Science and Faculty of Graduate Studies at Mahidol University. This program requires not less than 36 credits.",
    programStructure: {
      plan1_1: {
        name: "Plan 1.1 Academic (Research only)",
        details:
          "This plan focuses entirely on research, with a total of 36 credits dedicated to thesis work.",
        credits: "36 credits (Thesis)",
      },
      plan1_2: {
        name: "Plan 1.2 Academic (Coursework and research)",
        details:
          "This plan combines coursework and research, requiring 14 credits of required courses, not less than 10 credits of elective courses, and 12 credits for the thesis, totaling not less than 36 credits.",
        credits:
          "14 credits (Required) + ≥10 credits (Elective) + 12 credits (Thesis)",
      },
    },
    admissionRequirements: {
      plan1_1: {
        title: "Plan 1.1 Academic (Research only)",
        requirements: [
          "Obtained B.Sc. in polymer science and technology, chemistry, industrial chemistry, physics, material science, or related fields.",
          "Obtained a minimum GPA of 3.50, or a minimum GPA of 3.00 with at least two years of working experience in polymers or related fields.",
          "Other requirements are to follow the rules and regulations of the Faculty of Graduate Studies.",
          "Applicants whose credentials differ from qualifications above may be able to apply to the program if the Program Administrative Committee and the Dean of the Faculty of Graduate Studies grant the permission.",
        ],
      },
      plan1_2: {
        title: "Plan 1.2 Academic (Coursework and research)",
        requirements: [
          "Obtained B.Sc. in polymer science and technology, chemistry, industrial chemistry, physics, material science, or related fields.",
          "Obtained a minimum GPA of 2.50.",
          "Other requirements are to follow the rules and regulations of the Faculty of Graduate Studies.",
          "Applicants whose credentials differ from qualifications above may be able to apply to the program if the Program Administrative Committee and the Dean of the Faculty of Graduate Studies grant the permission.",
        ],
      },
    },
    careerOpportunities: [
      "Researchers and developers in the public and private sectors specializing in polymer science and technology.",
      "Analysts, quality control specialists, and production process managers for polymer materials in both public and private organizations.",
      "Pursuing freelance careers related to their field of study.",
    ],
  };

  const plan1_1Courses: Course[] = [
    {
      year: 1,
      semester: 1,
      courseCode: "SCCH 798",
      courseTitle: "Thesis",
      credits: "9 (0-27-0)",
      activities:
        "Conduct a literature review and develop a research proposal; Proposal examination",
    },
    {
      year: 1,
      semester: 2,
      courseCode: "SCCH 798",
      courseTitle: "Thesis",
      credits: "9 (0-27-0)",
      activities:
        "Begin experimental work and data collection; Analyze data and draw preliminary conclusions",
    },
    {
      year: 2,
      semester: 1,
      courseCode: "SCCH 798",
      courseTitle: "Thesis",
      credits: "9 (0-27-0)",
      activities:
        "Continue experimental work (if necessary); Write a thesis and seek feedback",
    },
    {
      year: 2,
      semester: 2,
      courseCode: "SCCH 798",
      courseTitle: "Thesis",
      credits: "9 (0-27-0)",
      activities:
        "Finalize thesis and prepare for defense; Defend thesis and complete graduation requirements",
    },
  ];

  const plan1_2Courses: Course[] = [
    {
      year: 1,
      semester: 1,
      courseCode: "SCCH 523",
      courseTitle: "Polymer Chemistry",
      credits: "2(2-0-4)",
      activities:
        "Polymerisation reaction types, mechanisms and kinetics, polymer material design for random, block and graft copolymerisation, polymer structure and properties relationship, polymer solution theory and properties, phase equilibria, phase diagrams and their applications, chemical reaction of polymers for various applications, high value added and recycling",
    }, // Added sample activity
    {
      year: 1,
      semester: 1,
      courseCode: "SCCH 543",
      courseTitle: "Polymer Physics",
      credits: "2(2-0-4)",
      activities:
        "Molecular structure of polymers, packing of polymer molecules in solid state, crystal structure, polymer morphology and shapes of polymer crystal, crystallisation and melting of polymers, oriented structure, viscoelastic properties, creep, stress relaxation and dynamic properties, transition temperature of polymers, time-temperature equivalence, mechanical properties, general mechanical properties, deformation behaviours, breaking behaviours, strengths of polymers, innovative applications based on polymer physics knowledge",
    }, // Added sample activity
    {
      year: 1,
      semester: 1,
      courseCode: "SCCH 596",
      courseTitle: "Polymer Rheology and Processing",
      credits: "2(2-0-4)",
      activities:
        "Definition of rheology, types of deformation, Newtonian and non-Newtonian behaviour, viscoelastic properties, measurement of flow properties, oscillatory shear flow, steady shear flow, analysis of some rheological results, basic knowledge on polymer mixing and processing",
    },
    {
      year: 1,
      semester: 1,
      courseCode: "SCCH 636",
      courseTitle: "Essential Skills for Research and Work",
      credits: "2(2-0-4)",
      activities:
        "Research methodology and ethics for polymer scientist and technologist, laboratory safety, data analysis and management, graphic preparation and presentation for scientific research, publication writing",
    },
    {
      year: 1,
      semester: 1,
      courseCode: "SCCH 525",
      courseTitle: "Polymer Characterisation and Techniques in Polymer Science",
      credits: "3(2-3-4)",
      activities:
        "The combination of theory and laboratory methods and instruments for analyzing polymeric materials, monomer purification, polymer synthesis by free radical polymerization through bulk and emulsion polymerizations, solubility test, molecular weight determination, thermal analysis, chemical analysis, polymer surface analysis, determination of mechanical properties, other unique methods for new polymers",
    },
    {
      year: 1,
      semester: 1,
      courseCode: "SCCH 528",
      courseTitle: "Experimental Design and Analysis",
      credits: "2(2-0-4)",
      activities:
        "Design and analysis of an experiment, principle of statistics to design and analysis of an experiment for various conditions, design an experiment regarding of controllable and uncontrollable factors, identify project theme, selection of factors and their levels, hypothesis testing, experiment design and analysis for one factor and multi-factor experiment, experiment with constraints, statistical data analysis, a case study in polymer or other related fields",
    },
    {
      year: 1,
      semester: 2,
      courseCode: "SCCH 588",
      courseTitle: "Polymer Seminar I",
      credits: "1(1-0-2)",
      activities:
        "Ethics for polymer scientists and technologists. New methods in polymer synthesis, analytical techniques with enhanced characterization performance, new polymer modification methods, synthesis of functional polymers, stimuli responsive polymers, environmental friendly polymers, environmental friendly additives, new processing aids",
    },
    {
      year: 1,
      semester: 2,
      courseCode: "Elective course",
      courseTitle: "Not less than 10 cr.",
      credits: "",
      activities: "",
    }, // Note: Electives might not have specific activities here
    {
      year: 2,
      semester: 1,
      courseCode: "SCCH 698",
      courseTitle: "Thesis",
      credits: "6(0-18-0)",
      activities:
        "Conduct a literature review and develop a research proposal; Proposal examination; Begin experimental work and data collection",
    },
    {
      year: 2,
      semester: 2,
      courseCode: "SCCH 698",
      courseTitle: "Thesis",
      credits: "6(0-18-0)",
      activities:
        "Analyze data and draw conclusions; Continue experimental work (if necessary); Write a thesis and seek feedback; Finalize thesis and prepare for defense; Defend thesis and complete graduation requirements",
    },
  ];

  const electiveCourses: ElectiveCourse[] = [
    {
      code: "SCCH 526",
      title: "Polymer Modification",
      credits: "2(2-0-4)",
      activities:
        "Polymer modifications by chemical and physical methods; polymer mixing, miscible and immiscible; polymer mixing system with fillers and additives; reagents for surface modification; polymer composites and polymer system with reinforcing agent; high strength fibers",
    },
    {
      code: "SCCH 527",
      title: "Polymer Colloids",
      credits: "2(2-0-4)",
      activities:
        "Background and importance of polymer colloidal systems and natural rubber latex; synthesis of polymer colloids; mechanism of emulsion polymerization and other polymerizations; latex with specific characteristics; properties of polymer colloids, stabilization and rheological behavior; characterizations of colloidal particles; modifications and applications of polymer colloids",
    },
    {
      code: "SCCH 597",
      title: "Advanced Polymer Processing",
      credits: "2(2-0-4)",
      activities:
        "Polymer mixing and compounding; mixing mechanism; mixing and compounding machinery; functional requirements of polymer compounding machinery; single- and twin-screw extrusion; extrusion-based processes; blown film process; injection moulding; blow moulding; compression moulding; polymer structure and properties relationship; new development in polymer processing",
    },
    {
      code: "SCCH 550",
      title: "Rubber Science and Technology",
      credits: "2(2-0-4)",
      activities:
        "Overview of rubber technology; structures and properties of rubbers, rubber blends reinforcement of rubber; vulcanisation of rubber; Degradation of rubber; processing; Compounding",
    },
    {
      code: "SCCH 598",
      title: "Nanomaterials",
      credits: "2(2-0-4)",
      activities:
        "Unique properties of nanomaterials; basic concepts of nanomaterial fabrication; nanoparticles; nanofibers; nanofilm; carbon nanomaterials; composite nanomaterials; nanomaterial characterization; applications of nanomaterials; safety issues of nanomaterials",
    },
    {
      code: "SCCH 635",
      title: "Polymer Blends and Composites",
      credits: "2(2-0-4)",
      activities:
        "Thermodynamics of polymer-polymer miscibility; phase separation process; type and significance of polymer interface; morphology of polymer blends; modification of polymer interface; type of polymer composites and their manufacturing; properties of matrix materials and reinforcements; polymer-fiber adhesion; mechanics of reinforcement of polymer composites; determination of interfacial strength of polymer composites",
    },
    {
      code: "SCCH 550",
      title: "Science and Technology of Natural Rubber Latex",
      credits: "2(2-0-4)",
      activities:
        "Introduction to natural rubber latex; composition of natural rubber latex; biosynthesis of natural rubber latex; outstanding properties of natural rubber; characteristics of natural rubber latex; microstructure of natural rubber; functional groups in natural rubber molecule; gel and branching in natural rubber; latex colloidal stability; latex concentration and dipping processes; specific tests for natural rubber latex; chemical modifications of latex and their applications; research on novel rubber latex technology",
    },
    {
      code: "SCCH 530",
      title: "Biopolymers for a Sustainable World",
      credits: "2(2-0-4)",
      activities:
        "Concept and significance of sustainability; social rules and regulations related to sustainability; sustainability aspects of biopolymers; introduction to biopolymers, background, and importance; definition and classes of biopolymers; production processes of biopolymers from renewable sources; chemical structures and molecular architectures of biopolymers; chemical and physical properties of biopolymers; modification of biopolymers to obtain different properties and different shapes; biopolymer-based materials; applications of biopolymers in different areas of utilization; recycling and disposal of biopolymers; related international standards of biopolymers and biopolymer-based materials",
    },
    {
      code: "SCCH 531",
      title: "Sustainable Plastic Technology",
      credits: "2(2-0-4)",
      activities:
        "Plastic industry and sustainability; plastic value chain; plastic materials (today and alternative plastics), petroleum-based plastics, bioplastics, bio-based plastics, biodegradable plastics, compostable plastics; plastics processing and applications; end-of-life of plastics and environmental impact; plastic recycling, mechanical recycling, feedstock recycling; principles of BCG (bio-circular-green economy); carbon-neutral, climate-neutral and net-zero concept; innovation and technology for sustainable plastic industry",
    },
    // ... other elective courses
  ];

  // --- Modal Handler Functions ---
  const handleShowModal = (courseTitle: string, activities?: string) => {
    if (activities && activities.trim() !== "") {
      setModalContent({ title: courseTitle, activities: activities });
      setShowModal(true);
    }
    // Optionally, handle cases where there are no activities (e.g., do nothing or show a different message)
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="program-master-page">
      <Container>
        <div className="program-header">
          <h1>Master of Science Program in Polymer Science and Technology</h1>
          <p>
            The Master of Science (M.Sc.) program in Polymer Science and
            Technology at Mahidol University, Thailand, is an international
            program designed to cultivate highly skilled professionals and
            researchers for the growing polymer industry and academia. The
            program's core philosophy emphasizes an integrated understanding of
            polymer science, connecting fundamental concepts of polymer
            chemistry, characterization, physics, and rheology with practical
            technological applications and processing.
          </p>
          <div className="program-buttons">
            <button className="btn btn-primary">Apply Now</button>
            <button className="btn btn-outline-primary">Details</button>
          </div>
        </div>
        <div className="program-content mb-4 md:mb-8">
          <h2 className="md:text-left mb-3">Program Overview</h2>{" "}
          {/* Centered on mobile, left on desktop */}
          <Accordion className="program-accordion">
            {/* Program Structure */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>Program Structure</Accordion.Header>
              <Accordion.Body>
                <p>
                  The curriculum complies with the Announcement of The
                  Commission on Higher Education Standard on the subject of
                  Criteria and Standards of Graduate Studies Program B. E. 2565,
                  Master Degree, and offers two plans:
                </p>
                <ul>
                  <li>
                    <strong>
                      {programOverview.programStructure.plan1_1.name}:
                    </strong>{" "}
                    {programOverview.programStructure.plan1_1.details} (
                    {programOverview.programStructure.plan1_1.credits})
                  </li>
                  <li>
                    <strong>
                      {programOverview.programStructure.plan1_2.name}:
                    </strong>{" "}
                    {programOverview.programStructure.plan1_2.details} (
                    {programOverview.programStructure.plan1_2.credits})
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            {/* Research Areas */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>Research Areas</Accordion.Header>
              <Accordion.Body>
                Our program covers diverse research areas in Polymer Science and
                Technology, including:
                <ul>
                  <li>
                    Multifunctional polymers and composite development for
                    diverse industries
                  </li>
                  <li>Innovative sustainable material design and processing</li>
                  <li>Advanced natural rubber and biopolymer development</li>
                  <li>Micro- and nano-structural studies of soft matter</li>
                </ul>
                Students work on cutting-edge projects under the guidance of
                experienced faculty members.
              </Accordion.Body>
            </Accordion.Item>

            {/* Admission Requirements */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>Admission Requirements</Accordion.Header>
              <Accordion.Body>
                <h5>{programOverview.admissionRequirements.plan1_1.title}:</h5>
                <ul>
                  {programOverview.admissionRequirements.plan1_1.requirements.map(
                    (req, index) => (
                      <li key={`plan1_1_req_${index}`}>{req}</li>
                    )
                  )}
                </ul>
                <h5>{programOverview.admissionRequirements.plan1_2.title}:</h5>
                <ul>
                  {programOverview.admissionRequirements.plan1_2.requirements.map(
                    (req, index) => (
                      <li key={`plan1_2_req_${index}`}>{req}</li>
                    )
                  )}
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            {/* Career Opportunities */}
            <Accordion.Item eventKey="3">
              <Accordion.Header>Career Opportunities</Accordion.Header>
              <Accordion.Body>
                <ul>
                  {programOverview.careerOpportunities.map(
                    (opportunity, index) => (
                      <li key={`career_op_${index}`}>{opportunity}</li>
                    )
                  )}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        {/* Course of Program - Dynamic Table */}
        <div className="course-of-program mb-4 md:mb-8">
          <h2 className="text-center md:text-left mb-3">Course of Program</h2>

          {/* Plan Selection Buttons - Styled with Tailwind for responsive alignment */}
          {/* On small screens: centered, stacked. On sm and up: row, aligned left */}
          <div className="flex flex-col sm:flex-row sm:justify-start justify-center items-center sm:items-start mb-4 space-y-2 sm:space-y-0 sm:space-x-2">
            <Button
              variant={activePlan === "plan1_1" ? "primary" : "outline-primary"}
              onClick={() => setActivePlan("plan1_1")}
              className="w-full sm:w-auto" // Full width on mobile, auto on larger
            >
              Plan 1.1 (Research only)
            </Button>
            <Button
              variant={activePlan === "plan1_2" ? "primary" : "outline-primary"}
              onClick={() => setActivePlan("plan1_2")}
              className="w-full sm:w-auto" // Full width on mobile, auto on larger
            >
              Plan 1.2 (Coursework and Research)
            </Button>
          </div>

          {/* Course Table - Added 'table-responsive' for smaller screens */}
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              {" "}
              {/* Added table-hover for better UX */}
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Semester</th>
                  <th>Course Code</th>
                  <th>Course Title</th>
                  <th>Credits</th>
                  {/* "Activities / Notes" column is removed */}
                </tr>
              </thead>
              <tbody>
                {(activePlan === "plan1_1"
                  ? plan1_1Courses
                  : plan1_2Courses
                ).map((course, index) => (
                  <tr key={`${activePlan}_course_${index}`}>
                    <td>{course.year}</td>
                    <td>{course.semester}</td>
                    <td>{course.courseCode}</td>
                    <td>
                      {/* Make course title clickable if activities exist */}
                      {course.activities && course.activities.trim() !== "" ? (
                        <Button
                          variant="link"
                          onClick={() =>
                            handleShowModal(
                              course.courseTitle,
                              course.activities
                            )
                          }
                          className="p-0 text-left" // Remove default button padding and align text
                          title="View Activities" // Tooltip for accessibility
                        >
                          {course.courseTitle}
                        </Button>
                      ) : (
                        course.courseTitle
                      )}
                    </td>
                    <td>{course.credits}</td>
                    {/* Cell for activities is removed */}
                  </tr>
                ))}
                {/* Elective Courses section for Plan 1.2 */}
                {activePlan === "plan1_2" && (
                  <>
                    <tr>
                      <td
                        colSpan={5}
                        className="text-center font-weight-bold bg-light"
                      >
                        <strong>
                          {" "}
                          {/* Adjusted colSpan */}
                          Elective Courses (Not less than 10 credits)
                        </strong>
                      </td>
                    </tr>
                    {electiveCourses.map((course, index) => (
                      <tr key={`elective-${index}`}>
                        <td>-</td>
                        <td>-</td>
                        <td>{course.code}</td>
                        <td>
                          {/* Make course title clickable if activities exist */}
                          {course.activities &&
                          course.activities.trim() !== "" ? (
                            <Button
                              variant="link"
                              onClick={() =>
                                handleShowModal(course.title, course.activities)
                              }
                              className="p-0 text-left" // Remove default button padding and align text
                              title="View Activities" // Tooltip for accessibility
                            >
                              {course.title}
                            </Button>
                          ) : (
                            course.title
                          )}
                        </td>
                        {/* Elective titles are not clickable unless they have activities */}
                        <td>{course.credits}</td>
                        {/* Cell for activities is removed */}
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
      {/* Activity Details Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Render activities. If it's a string with semicolons, split into a list */}
          {modalContent.activities.includes(":") ? (
            <ul>
              {modalContent.activities
                .split(":")
                .map(
                  (activity, idx) =>
                    activity.trim() && <li key={idx}>{activity.trim()}</li>
                )}
            </ul>
          ) : (
            <p>{modalContent.activities}</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProgramMaster;
