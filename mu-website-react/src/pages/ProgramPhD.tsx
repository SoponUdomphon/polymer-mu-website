import React, { useState, useEffect } from "react"; // Added useEffect
import { Container, Accordion, Modal, Button, Table } from "react-bootstrap";
import "./ProgramMaster.css"; // Assuming this CSS file exists and is relevant

// Interface for course data
interface Course {
  year: number | string;
  semester: number | string;
  courseCode: string;
  courseTitle: string;
  credits: string;
  activities?: string; // Activities are optional
}

// Interface for elective course data
interface ElectiveCourse {
  code: string;
  title: string;
  credits: string;
  activities?: string; // Electives might also have activities
}

// Main Component for Doctoral Program
const ProgramDoctor: React.FC = () => {
  // State for selected program category and entry level
  // Initialize to null so entry level buttons are hidden initially
  const [selectedCategory, setSelectedCategory] = useState<
    "research" | "coursework" | null
  >(null);
  const [selectedEntry, setSelectedEntry] = useState<
    "master" | "bachelor" | null
  >(null);

  // State for modal visibility
  const [showModal, setShowModal] = useState(false);
  // State for modal content (title and activities)
  const [modalContent, setModalContent] = useState({
    title: "",
    activities: "",
  });

  // State for the courses to display and whether to show electives table
  const [coursesToDisplay, setCoursesToDisplay] = useState<Course[]>([]);
  const [showElectivesTable, setShowElectivesTable] = useState(false);
  const [currentPlanKey, setCurrentPlanKey] =
    useState<string>("no_plan_selected");

  // --- Doctoral Program Data (as previously defined) ---
  const programOverview = {
    title: "Doctor of Philosophy Program in Polymer Science and Technology",
    description:
      "The Doctor of Philosophy Program in Polymer Science and Technology (International Program / Revised Program in 2025) cultivates graduates with a distinguished education at global standards to become leaders and innovators with cutting-edge knowledge and the ability to drive significant advancements in polymer science and technology to address challenges in local and global contexts, contribute to industry and academia, and uphold the highest standards of professional ethics, personal growth, and lifelong learning. This program is offered by the Faculty of Science and Faculty of Graduate Studies at Mahidol University.",
    programStructure: {
      plan1_1: {
        name: "Plan 1.1 (For students with a Master's degree - Dissertation only)",
        details: "Focuses entirely on research.",
        credits: "Not less than 48 credits (Dissertation: 48 credits)",
      },
      plan1_2: {
        name: "Plan 1.2 (For students with a Bachelor's degree - Dissertation only)",
        details: "Focuses entirely on research.",
        credits: "Not less than 74 credits (Dissertation: 74 credits)",
      },
      plan2_1: {
        name: "Plan 2.1 (For students with a Master's degree - Coursework and Dissertation)",
        details: "Combines coursework and research.",
        credits:
          "Not less than 48 credits (Required: 6, Elective: ≥6, Dissertation: 36)",
      },
      plan2_2: {
        name: "Plan 2.2 (For students with a Bachelor's degree - Coursework and Dissertation)",
        details: "Combines coursework and research.",
        credits:
          "Not less than 74 credits (Required: 20, Elective: ≥6, Dissertation: 48)",
      },
    },
    admissionRequirements: {
      plan1_1: {
        title: "Plan 1.1 (Master’s Degree Entry - Dissertation Only)",
        requirements: [
          "Holding a Master’s Degree or equivalent in polymer science and technology, chemistry, industrial chemistry, physics, material science, or other related fields.",
          "Have a cumulative GPA of not less than 3.50 or a minimum GPA of 3.00 with at least two years of working experience in polymers or related fields.",
          "Have an English Proficiency Examination score as per Faculty of Graduate Studies requirements.",
          "Other requirements as specified by the Faculty of Graduate Studies.",
          "Qualifications different from the above may be considered by the Program Administrative Committee and the Dean of the Faculty of Graduate Studies.",
        ],
      },
      plan1_2: {
        title: "Plan 1.2 (Bachelor’s Degree Entry - Dissertation Only)",
        requirements: [
          "Holding a Bachelor’s Degree or equivalent in polymer science and technology, chemistry, industrial chemistry, physics, material science, or other related fields.",
          "Have a cumulative GPA of not less than 3.50 or a minimum GPA of 3.00 with at least two years of working experience in polymers or related fields.",
          "Have an English Proficiency Examination score as per Faculty of Graduate Studies requirements.",
          "Other requirements as specified by the Faculty of Graduate Studies.",
          "Qualifications different from the above may be considered by the Program Administrative Committee and the Dean of the Faculty of Graduate Studies.",
        ],
      },
      plan2_1: {
        title: "Plan 2.1 (Master’s Degree Entry - Coursework and Dissertation)",
        requirements: [
          "Holding a Master’s Degree or equivalent in polymer science and technology, chemistry, industrial chemistry, physics, material science, or other related fields.",
          "Have a cumulative GPA of not less than 3.50 or a minimum GPA of 3.00 with at least two years of working experience in polymers or related fields.",
          "Have an English Proficiency Examination score as per Faculty of Graduate Studies requirements.",
          "Other requirements as specified by the Faculty of Graduate Studies.",
          "Qualifications different from the above may be considered by the Program Administrative Committee and the Dean of the Faculty of Graduate Studies.",
        ],
      },
      plan2_2: {
        title:
          "Plan 2.2 (Bachelor’s Degree Entry - Coursework and Dissertation)",
        requirements: [
          "Holding a Bachelor’s Degree or equivalent in polymer science and technology, chemistry, industrial chemistry, physics, material science, or other related fields.",
          "Have a cumulative GPA of not less than 3.50 or a minimum GPA of 3.00 with at least two years of working experience in polymers or related fields.",
          "Have an English Proficiency Examination score as per Faculty of Graduate Studies requirements.",
          "Other requirements as specified by the Faculty of Graduate Studies.",
          "Qualifications different from the above may be considered by the Program Administrative Committee and the Dean of the Faculty of Graduate Studies.",
        ],
      },
    },
    careerOpportunities: [
      "Senior Researchers and Lead Developers in the public and private sectors specializing in advanced polymer science and technology and related fields.",
      "University Professors and Academic Researchers contributing to the field through teaching and innovative research.",
      "Principal Scientists, R & D Managers, and Directors in industrial organizations focused on polymer materials and related fields.",
      "Consultants and Advisors providing expert knowledge on polymer science to various industries and governmental bodies.",
      "Innovators and Entrepreneurs starting their ventures or leading startups in the field of polymer technology and related fields.",
      "Policy Makers and Analysts influencing regulatory frameworks and policies related to polymer materials and technology and related fields.",
    ],
  };

  // --- Course Data for Doctoral Plans (Variables defined inside component) ---
  const doctoralPlan1_1Courses: Course[] = [
    {
      year: 1,
      semester: 1,
      courseCode: "SCCH 898",
      courseTitle: "Dissertation",
      credits: "8 (0-24-0)",
      activities:
        "Qualification examination: Enroll in the ‘Essential Skills for Research and Work’ class: Enroll in the ‘Advanced Seminar in Polymer’ class: Literature review: Research topic selection; Initial experiments",
    },
    {
      year: 1,
      semester: 2,
      courseCode: "SCCH 898",
      courseTitle: "Dissertation",
      credits: "8 (0-24-0)",
      activities:
        "Continuation of experiments: Data collection and analysis: Research proposal development",
    },
    {
      year: 2,
      semester: 1,
      courseCode: "SCCH 898",
      courseTitle: "Dissertation",
      credits: "8 (0-24-0)",
      activities:
        "Proposal examination: Continuation of experiments: Data collection and analysis",
    },
    {
      year: 2,
      semester: 2,
      courseCode: "SCCH 898",
      courseTitle: "Dissertation",
      credits: "8 (0-24-0)",
      activities:
        "Continuation of experiments: Data collection and analysis: Manuscript preparation and submission",
    },
    {
      year: 3,
      semester: 1,
      courseCode: "SCCH 898",
      courseTitle: "Dissertation",
      credits: "8 (0-24-0)",
      activities:
        "Continuation of experiments: Data collection and analysis: Manuscript preparation and submission: Dissertation writing",
    },
    {
      year: 3,
      semester: 2,
      courseCode: "SCCH 898",
      courseTitle: "Dissertation",
      credits: "8 (0-24-0)",
      activities: "Dissertation completion: Dissertation defense",
    },
  ];

  const doctoralPlan1_2Courses: Course[] = [
    {
      year: 1,
      semester: 1,
      courseCode: "SCCH 899",
      courseTitle: "Dissertation",
      credits: "9 (0-27-0)",
      activities:
        "Qualification examination: Enroll in the ‘Essential Skills for Research and Work’ class: Literature review; Research topic selection: Initial experiments",
    },
    {
      year: 1,
      semester: 2,
      courseCode: "SCCH 899",
      courseTitle: "Dissertation",
      credits: "9 (0-27-0)",
      activities:
        "Enroll in the ‘Polymer Seminar I’ class: Continuation of experiments: Data collection and analysis",
    },
    {
      year: 2,
      semester: 1,
      courseCode: "SCCH 899",
      courseTitle: "Dissertation",
      credits: "9 (0-27-0)",
      activities:
        "Enroll in the ‘Advanced Seminar in Polymer’ class: Continuation of experiments: Data collection and analysis",
    },
    {
      year: 2,
      semester: 2,
      courseCode: "SCCH 899",
      courseTitle: "Dissertation",
      credits: "9 (0-27-0)",
      activities:
        "Continuation of experiments: Data collection and analysis: Research proposal development",
    },
    {
      year: 3,
      semester: 1,
      courseCode: "SCCH 899",
      courseTitle: "Dissertation",
      credits: "9 (0-27-0)",
      activities:
        "Proposal examination: Continuation of experiments: Data collection and analysis",
    },
    {
      year: 3,
      semester: 2,
      courseCode: "SCCH 899",
      courseTitle: "Dissertation",
      credits: "9 (0-27-0)",
      activities:
        "Continuation of experiments: Data collection and analysis: Manuscript preparation and submission",
    },
    {
      year: 4,
      semester: 1,
      courseCode: "SCCH 899",
      courseTitle: "Dissertation",
      credits: "9 (0-27-0)",
      activities:
        "Continuation of experiments: Data collection and analysis: Dissertation writing: Manuscript preparation and submission",
    },
    {
      year: 4,
      semester: 2,
      courseCode: "SCCH 899",
      courseTitle: "Dissertation",
      credits: "11 (0-33-0)",
      activities:
        "Dissertation completion: Defense preparation: Dissertation defense",
    },
  ];

  const doctoralPlan2_1Courses: Course[] = [
    {
      year: 1,
      semester: 1,
      courseCode: "SCCH 668",
      courseTitle: "Advances in Polymer Science and Technology",
      credits: "3 (3-0-6)",
      activities:
        "Advances in green and sustainable technology related to polymeric materials; eco friendly materials; product life cycle assessment; ecolabel; emerging polymer science and technology; polymeric materials relevant to alternative energy technology",
    },
    {
      year: 1,
      semester: 1,
      courseCode: "SCCH 638",
      courseTitle: "Trend of Polymer Industry",
      credits: "1 (1-0-2)",
      activities:
        "Development of polymer science, technology and innovation; site visits; hands-on workshop of polymer industry.",
    },
    {
      year: 1,
      semester: 1,
      courseCode: "SCCH 688",
      courseTitle: "Advanced Seminar in Polymer",
      credits: "2 (2-0-4)",
      activities:
        "Recent advancements, cutting-edge research, interdisciplinary collaboration, ethical considerations, research proposal concepts, scientific communication skills, discussions, peer feedback, storytelling and pitching.",
    },
    {
      year: 1,
      semester: 2,
      courseCode: "Elective",
      courseTitle: "Elective Courses",
      credits: "≥6",
      activities:
        "Select from the list of approved elective courses. See elective list below.",
    },
    {
      year: 2,
      semester: 1,
      courseCode: "SCCH 699",
      courseTitle: "Dissertation",
      credits: "10 (0-30-0)",
      activities:
        "Qualification examination: Literature review: Research topic selection: Initial experiments: Data collection and analysis: Research proposal development",
    },
    {
      year: 2,
      semester: 2,
      courseCode: "SCCH 699",
      courseTitle: "Dissertation",
      credits: "10 (0-30-0)",
      activities:
        "Proposal examination: Continuation of experiments: Data collection and analysis: Manuscript preparation and submission",
    },
    {
      year: 3,
      semester: 1,
      courseCode: "SCCH 699",
      courseTitle: "Dissertation",
      credits: "10 (0-30-0)",
      activities:
        "Continuation of experiments: Data collection and analysis: Dissertation writing: Manuscript preparation and submission",
    },
    {
      year: 3,
      semester: 2,
      courseCode: "SCCH 699",
      courseTitle: "Dissertation",
      credits: "6 (0-18-0)",
      activities:
        "Dissertation completion: Defense preparation: Dissertation defense",
    },
  ];

  const doctoralPlan2_2Courses: Course[] = [
    {
      year: 1,
      semester: 1,
      courseCode: "SCCH 523",
      courseTitle: "Polymer Chemistry",
      credits: "2 (2-0-4)",
      activities:
        "Polymerisation reaction types; mechanisms and kinetics; polymer material design for random, block and graft copolymerisation; polymer structure and properties relationship; polymer solution theory and properties; phase equilibria; phase diagrams and their applications; chemical reaction of polymers for various applications, high value added and recycling",
    },
    {
      year: 1,
      semester: 1,
      courseCode: "SCCH 543",
      courseTitle: "Polymer Physics",
      credits: "2 (2-0-4)",
      activities:
        "Molecular structure of polymers; packing of polymer molecules in solid state; crystal structure; polymer morphology and shapes of polymer crystal; crystallisation and melting of polymers; oriented structure; viscoelastic properties, creep, stress relaxation and dynamic properties; transition temperature of polymers; time-temperature equivalence; mechanical properties, general mechanical properties, deformation behaviours, breaking behaviours, strengths of polymers, innovative applications based on polymer physics knowledge",
    },
    {
      year: 1,
      semester: 1,
      courseCode: "SCCH 596",
      courseTitle: "Polymer Rheology and Processing",
      credits: "2 (2-0-4)",
      activities:
        "Definition of rheology; types of deformation; Newtonian and non-Newtonian behaviour; viscoelastic properties; measurement of flow properties; oscillatory shear flow; steady shear flow; analysis of some rheological results; basic knowledge on polymer mixing and processing",
    },
    {
      year: 1,
      semester: 1,
      courseCode: "SCCH 636",
      courseTitle: "Essential Skills for Research and Work",
      credits: "2 (2-0-4)",
      activities:
        "Research methodology and ethics; laboratory safety; data analysis and management; graphic preparation and presentation; publication writing.",
    },
    {
      year: 1,
      semester: 1,
      courseCode: "SCCH 525",
      courseTitle: "Polymer Characterisation and Techniques in Polymer Science",
      credits: "3 (2-3-4)",
      activities:
        "The combination of theory and laboratory methods and instruments for analyzing polymeric materials; monomer purification; polymer synthesis by free radical polymerization through bulk and emulsion polymerizations; solubility test; molecular weight determination; thermal analysis; chemical analysis; polymer surface analysis; determination of mechanical properties; other unique methods for new polymers",
    },
    {
      year: 1,
      semester: 1,
      courseCode: "SCCH 528",
      courseTitle: "Experimental Design and Analysis",
      credits: "2 (2-0-4)",
      activities:
        "Design and analysis of an experiment; principle of statistics to design and analysis of an experiment for various conditions; design an experiment regarding of controllable and uncontrollable factors; identify project theme; selection of factors and their levels; hypothesis testing; experiment design and analysis for one factor and multi-factor experiment; experiment with constraints; statistical data analysis; a case study in polymer or other related fields",
    },
    {
      year: 1,
      semester: 2,
      courseCode: "SCCH 588",
      courseTitle: "Polymer Seminar I",
      credits: "1 (1-0-2)",
      activities:
        "Ethics for polymer scientists and technologists. New methods in polymer synthesis; analytical techniques with enhanced characterization performance; new polymer modification methods; synthesis of functional polymers; stimuli responsive polymers; environmental friendly polymers; environmental friendly additives; new processing aids",
    },
    {
      year: 1,
      semester: 2,
      courseCode: "Elective",
      courseTitle: "Elective Courses",
      credits: "≥6",
      activities:
        "Select from the list of approved elective courses. See elective list below.",
    },
    {
      year: 2,
      semester: 1,
      courseCode: "SCCH 668",
      courseTitle: "Advances in Polymer Science and Technology",
      credits: "3 (3-0-6)",
      activities:
        "AAdvances in green and sustainable technology related to polymeric materials; eco friendly materials; product life cycle assessment; ecolabel; emerging polymer science and technology; polymeric materials relevant to alternative energy technology",
    },
    {
      year: 2,
      semester: 1,
      courseCode: "SCCH 638",
      courseTitle: "Trend of Polymer Industry",
      credits: "1 (1-0-2)",
      activities:
        "Development of polymer science, technology and innovation; site visits; hands-on workshop of polymer industry.",
    },
    {
      year: 2,
      semester: 1,
      courseCode: "SCCH 688",
      courseTitle: "Advanced Seminar in Polymer",
      credits: "2 (2-0-4)",
      activities:
        "Recent advancements and cutting- edge research in polymer science and technology; fostering interdisciplinary collaboration; ethical considerations; concept of research proposal; development of scientific communication skills; active participation in discussions and peer feedback; story telling and pitching",
    },
    {
      year: 2,
      semester: 2,
      courseCode: "SCCH 799",
      courseTitle: "Dissertation",
      credits: "10 (0-30-0)",
      activities:
        "Qualification examination: Literature review: Research topic selection: Initial experiments: Data collection and analysis: Research proposal development",
    },
    {
      year: 3,
      semester: 1,
      courseCode: "SCCH 799",
      courseTitle: "Dissertation",
      credits: "10 (0-30-0)",
      activities:
        "Proposal examination: Continuation of experiments: Data collection and analysis: Manuscript preparation and submission",
    },
    {
      year: 3,
      semester: 2,
      courseCode: "SCCH 799",
      courseTitle: "Dissertation",
      credits: "10 (0-30-0)",
      activities:
        "Continuation of experiments: Data collection and analysis: Manuscript preparation and submission",
    },
    {
      year: 4,
      semester: 1,
      courseCode: "SCCH 799",
      courseTitle: "Dissertation",
      credits: "10 (0-30-0)",
      activities:
        "Continuation of experiments: Data collection and analysis: Dissertation writing: Manuscript preparation and submission",
    },
    {
      year: 4,
      semester: 2,
      courseCode: "SCCH 799",
      courseTitle: "Dissertation",
      credits: "8 (0-24-0)",
      activities:
        "Dissertation completion: Defense preparation: Dissertation defense",
    },
  ];

  const doctoralElectiveCourses: ElectiveCourse[] = [
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
      code: "SCCH 530",
      title: "Biopolymers for a Sustainable World",
      credits: "2(2-0-4)",
      activities:
        "Concept and significance of sustainability; social rules and regulations related to sustainability; sustainability aspects of biopolymers; introduction to biopolymers, background, and importance; definition and classes of biopolymers; production processes ofbiopolymers from renewable sources; chemical structures and molecular architectures of biopolymers; chemical and physical properties of biopolymers; modification of biopolymers to obain different properties and different shapes; biopolymer-based materials; applications of biopolymers in different areas of utilization; recycling and disposal of biopolymers; related international standards of biopolymers and biopolymer-based materials",
    },
    {
      code: "SCCH 531",
      title: "Sustainable Plastic Technology",
      credits: "2(2-0-4)",
      activities:
        "Plastic industry and sustainability; plastic value chain; plastic materials (today and alternative plastics), petroleum-based plastics, bioplastics, bio-based plastics, biodegradable plastics, compostable plastics; plastics processing and applications; end-of-life of plastics and environmental impact; plastic recycling, mechanical recycling, feedstock recycling; principles of BCG (bio-circular-green economy); carbon-neutral, climate-neutral and net-zero concept; innovation and technology for sustainable plastic industry",
    },
    {
      code: "SCCH 550",
      title: "Rubber Science and Technology",
      credits: "2(2-0-4)",
      activities:
        "Overview of rubber technology; structures and properties of rubbers, rubber blends reinforcement of rubber; vulcanisation of rubber; Degradation of rubber; processing; Compounding",
    },
    {
      code: "SCCH 597",
      title: "Advanced Polymer Processing",
      credits: "2(2-0-4)",
      activities:
        "Polymer mixing and compounding; mixing mechanism; mixing and compounding machinery; functional requirements of polymer compounding machinery; single- and twin-screw extrusion; extrusion-based processes; blown film process; injection moulding; blow moulding; compression moulding; processing; polymer structure and properties relationship; new development in polymer processing; reactive extrusion; recent trend on processing of recycled materials and sustainable polymer products",
    },
    {
      code: "SCCH 598",
      title: "Nanomaterials",
      credits: "2(2-0-4)",
      activities:
        "Unique properties of nanomaterials; basic concepts of nanomaterial fabrication; nanoparticles; nanofibers; nanofilm; carbon nanomaterials; composite nanomaterials; nanomaterial characterization; applications of nanomaterials; safety issues of nanomaterials",
    },
    {
      code: "SCCH 632",
      title: "Advanced Polymer Chemistry",
      credits: "2(2-0-4)",
      activities:
        "Advances in polymerisation chemistry; advances in polymer characterization; functional polymers; heterogeneous reactions of polymer: reactions in latex; reactions in polymer melt; reactive extrusion",
    },
    {
      code: "SCCH 633",
      title: "Advanced Polymer Physics",
      credits: "2(2-0-4)",
      activities:
        "Dielectric relaxation behaviour; permeation and other types of relaxation; electrical properties: conducting polymers; electroactive polymers; light emitting organic polymers",
    },
    {
      code: "SCCH 634",
      title: "Polymer Surfaces",
      credits: "2(2-0-4)",
      activities:
        "Fundamental of surface chemistry and physics; adhesion and adhesives; friction and wear; coating; other surface-related properties; barrier properties; biocompatibility; modifications of polymer surfaces; surface characterisation methods quantiand qualitatively",
    },
    {
      code: "SCCH 635",
      title: "Polymer Blends and Composites",
      credits: "2(2-0-4)",
      activities:
        "Thermodynamics of polymer-polymer miscibility; phase separation process; type and significance of polymer interface; morphology of polymer blends; modification of polymer interface; type of polymer composites and their manufacturing; properties of matrix materials and reinforcements; polymer-fiber adhesion; mechanics of reinforcement of polymer composites; determination of interfacial strength of polymer composites",
    },
    {
      code: "SCCH 637",
      title: "Science and Technology of Natural Rubber Latex",
      credits: "2(2-0-4)",
      activities:
        "Introduction to natural rubber latex; composition of natural rubber latex; biosynthesis of natural rubber latex; outstanding properties of natural rubber; characteristics of natural rubber latex; microstructure of natural rubber; functional groups in natural rubber molecule; gel and branching in natural rubber; latex colloidal stability; latex concentration and dipping processes; specific tests for natural rubber latex; chemical modifications of latex and their applications; research on novel rubber latex technology",
    },
    {
      code: "SCCH 640",
      title: "Surface Engineering and Coating Technology",
      credits: "2(2-0-4)",
      activities:
        "Surface free energy and wetting; surface engineering technology; film formation; flow; adhesion; corrosion protection by coatings; coating resins and additives; coating process; film defects; innovations and technologies in the coating industry",
    },
  ];

  // --- Effect to update courses based on selectedCategory and selectedEntry ---
  useEffect(() => {
    let planKey = "";
    // Only update if both category and entry level are selected
    if (selectedCategory && selectedEntry) {
      if (selectedCategory === "research") {
        if (selectedEntry === "master") {
          setCoursesToDisplay(doctoralPlan1_1Courses);
          setShowElectivesTable(false);
          planKey = "doctoral_plan_1_1";
        } else {
          // bachelor entry
          setCoursesToDisplay(doctoralPlan1_2Courses);
          setShowElectivesTable(false);
          planKey = "doctoral_plan_1_2";
        }
      } else {
        // coursework
        if (selectedEntry === "master") {
          setCoursesToDisplay(doctoralPlan2_1Courses);
          setShowElectivesTable(true);
          planKey = "doctoral_plan_2_1";
        } else {
          // bachelor entry
          setCoursesToDisplay(doctoralPlan2_2Courses);
          setShowElectivesTable(true);
          planKey = "doctoral_plan_2_2";
        }
      }
      setCurrentPlanKey(planKey);
    } else {
      // If not all selections are made, clear the table
      setCoursesToDisplay([]);
      setShowElectivesTable(false);
      setCurrentPlanKey("no_plan_selected");
    }
  }, [selectedCategory, selectedEntry]);

  // --- Modal Handler Functions ---
  const handleShowModal = (courseTitle: string, activities?: string) => {
    if (activities && activities.trim() !== "") {
      setModalContent({ title: courseTitle, activities: activities });
      setShowModal(true);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  // Function to handle Program Type selection
  const handleCategorySelect = (category: "research" | "coursework") => {
    setSelectedCategory(category);
    setSelectedEntry(null); // Reset entry level to force a new selection
  };

  return (
    <div className="program-master-page">
      <Container>
        <div className="program-header text-center md:text-left mb-4 md:mb-8">
          <h1>{programOverview.title}</h1>
          <p className="text-muted">{programOverview.description}</p>
          <div className="program-buttons mt-3">
            <Button variant="primary" className="mr-2">
              Apply Now
            </Button>
            <Button variant="outline-primary">Details</Button>
          </div>
        </div>

        <div className="program-content mb-4 md:mb-8">
          <h2 className="text-left md:text-left mb-3">Program Overview</h2>
          <Accordion className="program-accordion" defaultActiveKey={["0"]}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Program Structure</Accordion.Header>
              <Accordion.Body>
                <p>
                  The Doctor of Philosophy program offers four distinct plans
                  tailored to students' prior qualifications:
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
                  <li>
                    <strong>
                      {programOverview.programStructure.plan2_1.name}:
                    </strong>{" "}
                    {programOverview.programStructure.plan2_1.details} (
                    {programOverview.programStructure.plan2_1.credits})
                  </li>
                  <li>
                    <strong>
                      {programOverview.programStructure.plan2_2.name}:
                    </strong>{" "}
                    {programOverview.programStructure.plan2_2.details} (
                    {programOverview.programStructure.plan2_2.credits})
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

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
                <hr className="my-3" />
                <h5>{programOverview.admissionRequirements.plan1_2.title}:</h5>
                <ul>
                  {programOverview.admissionRequirements.plan1_2.requirements.map(
                    (req, index) => (
                      <li key={`plan1_2_req_${index}`}>{req}</li>
                    )
                  )}
                </ul>
                <hr className="my-3" />
                <h5>{programOverview.admissionRequirements.plan2_1.title}:</h5>
                <ul>
                  {programOverview.admissionRequirements.plan2_1.requirements.map(
                    (req, index) => (
                      <li key={`plan2_1_req_${index}`}>{req}</li>
                    )
                  )}
                </ul>
                <hr className="my-3" />
                <h5>{programOverview.admissionRequirements.plan2_2.title}:</h5>
                <ul>
                  {programOverview.admissionRequirements.plan2_2.requirements.map(
                    (req, index) => (
                      <li key={`plan2_2_req_${index}`}>{req}</li>
                    )
                  )}
                </ul>
              </Accordion.Body>
            </Accordion.Item>

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
          {/* Plan Selection Buttons - Two-level selection */}
          <div className="mb-4">
            {" "}
            {/* Overall wrapper for selection groups */}
            {/* Program Type Selection */}
            <div className="mb-3">
              {" "}
              {/* Group wrapper for Program Type */}
              <div className="mb-1">
                {" "}
                {/* Label for Program Type */}
                <span className="font-semibold">Program Type:</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-start justify-center items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-2">
                {/* Program Type Buttons */}
                <Button
                  variant={
                    selectedCategory === "research"
                      ? "primary"
                      : "outline-primary"
                  }
                  onClick={() => handleCategorySelect("research")}
                  className="w-full sm:w-auto"
                >
                  Research Only
                </Button>
                <Button
                  variant={
                    selectedCategory === "coursework"
                      ? "primary"
                      : "outline-primary"
                  }
                  onClick={() => handleCategorySelect("coursework")}
                  className="w-full sm:w-auto"
                >
                  Coursework & Dissertation
                </Button>
              </div>
            </div>
            {/* Entry Level Selection - Conditionally Rendered */}
            {selectedCategory && (
              <div className="mb-3">
                {" "}
                {/* Group wrapper for Entry Level */}
                <div className="mb-1">
                  {" "}
                  {/* Label for Entry Level */}
                  <span className="font-semibold">Entry Level:</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-start justify-center items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-2">
                  {/* Entry Level Buttons */}
                  <Button
                    variant={
                      selectedEntry === "master" ? "primary" : "outline-primary"
                    }
                    onClick={() => setSelectedEntry("master")}
                    className="w-full sm:w-auto"
                  >
                    For Master's Degree Holders
                  </Button>
                  <Button
                    variant={
                      selectedEntry === "bachelor"
                        ? "primary"
                        : "outline-primary"
                    }
                    onClick={() => setSelectedEntry("bachelor")}
                    className="w-full sm:w-auto"
                  >
                    For Bachelor's Degree Holders
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="table-responsive">
            <Table
              striped
              bordered
              hover
              responsive="sm"
              className="table table-striped table-hover"
            >
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Semester</th>
                  <th>Course Code</th>
                  <th>Course Title</th>
                  <th>Credits</th>
                </tr>
              </thead>
              <tbody>
                {coursesToDisplay.map((course, index) => (
                  <tr key={`${currentPlanKey}_course_${index}`}>
                    <td>{course.year}</td>
                    <td>{course.semester}</td>
                    <td>{course.courseCode}</td>
                    <td>
                      {course.activities && course.activities.trim() !== "" ? (
                        <Button
                          variant="link"
                          onClick={() =>
                            handleShowModal(
                              course.courseTitle,
                              course.activities
                            )
                          }
                          className="p-0 text-left"
                          title="View Activities"
                        >
                          {course.courseTitle}
                        </Button>
                      ) : (
                        course.courseTitle
                      )}
                    </td>
                    <td>{course.credits}</td>
                  </tr>
                ))}
                {/* Elective Courses section for Plans 2.1 and 2.2 */}
                {showElectivesTable && (
                  <>
                    <tr>
                      <td
                        colSpan={5}
                        className="text-center font-weight-bold bg-light"
                      >
                        <strong>
                          Elective Courses (Not less than 6 credits from the
                          list below)
                        </strong>
                      </td>
                    </tr>
                    {doctoralElectiveCourses.map((course, index) => (
                      <tr key={`doctoral_elective-${index}`}>
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
                        <td>{course.credits}</td>
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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

export default ProgramDoctor;
