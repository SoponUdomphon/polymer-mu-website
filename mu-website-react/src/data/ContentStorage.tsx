export interface Author {
  name: string;
  role?: string;
  laboratory?: string;
}

export interface Content {
  id: string;
  title: string;
  description: string;
  content: string;
  author: Author;
  date: string;
  images: string[];
  category: string;
}

export interface Presentation {
  id: string;
  topic: string;
  presenter: Author;
  date: string;
  location: string;
  abstract: string;
  content: string;
  slides?: string;
  category: "seminar" | "thesis defense";
}

export const news: Content[] = [
  {
    id: "news-032",
    title: "Industrial Visit Activity",
    description:
      "A big thank you to Labtech Engineering for this amazing learning opportunity!",
    content: `🚀 Industrial Visit Activity 🚀

On February 20, 2025, our faculty members and students from the Polymer Science and Technology graduate programs, along with undergraduate chemistry students from the Faculty of Science, Mahidol University, had the incredible opportunity to visit Labtech Engineering at the Bangpoo Industrial Estate, Samut Prakan.

💡 Labtech Engineering is a world-renowned manufacturer of laboratory and pilot-scale polymer processing equipment, famous for its iconic yellow machines! This visit provided our students with firsthand experience of real-world manufacturing processes, enhancing their knowledge and practical understanding of the industry.

🎯 A big thank you to Labtech Engineering for this amazing learning opportunity!`,
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University",
    },
    date: "20 February 2025",
    images: [
      "/news/news/news-032/1.jpg",
      "/news/news/news-032/2.jpg",
      "/news/news/news-032/3.jpg",
      "/news/news/news-032/4.jpg",
      "/news/news/news-032/5.jpg",
      "/news/news/news-032/6.jpg",
    ],
    category: "Education",
  },
  {
    id: "news-031",
    title: "NRCT Awards Gold Medal to Mahidol University's PiPreg-R Innovation",
    description:
      "Assoc. Prof. Taweechai Amornsakchai and team receive prestigious recognition for sustainable rubber innovation.",
    content: `🎉 Congratulations! 🎉
The National Research Council of Thailand (NRCT), via the 2025 Bangkok International Intellectual Property, Invention, Innovation and Technology Exposition (IPITEx2025), has awarded a Gold Medal to Assoc. Prof. Taweechai Amornsakchai and his research team, including Assoc. Prof. Sombat Thanawat, Prof. Pranee Phinyocheep, Mr. Satit Thaiwattananon, Asst. Prof. Preeyanuch Junkong, Mr. Sorn Duangsuwan, and Mr. Wongsathon Saitrong. These esteemed instructors and students from the Polymer Science and Technology Program, Department of Chemistry, Faculty of Science, Mahidol University were recognized for their outstanding invention, "PiPreg-R".

This innovative work was showcased at the Bangkok International Intellectual Property, Invention, Innovation, and Technology Exposition during Thailand Inventors' Day 2025 (February 2–6, 2025).

🔹 What is PiPreg-R?
PiPreg-R is a sustainable reinforced rubber innovation that integrates pineapple leaf fibers with natural rubber to create a low-carbon, eco-friendly material. It enhances flexibility, elasticity, and reinforcement without requiring energy-intensive processes. Delivered as unidirectional tapes compatible with standard manufacturing equipment, PiPreg-R offers versatile applications—from handicrafts to high-performance engineering—aligning with modern sustainability goals.

📌 Learn more about PiPreg-R here:
🔗 Watch the video: https://youtu.be/s9hbZY-jdvg
💻 Visit our website: https://evergentech.co/

👏 Congratulations once again to the research team for this remarkable achievement!`,
    author: {
      name: "Polymer Science and Technology Program",
      role: "Research Team",
    },
    date: "6 February 2025",
    images: [
      "/news/news/news-031/1.jpg",
      "/news/news/news-031/2.jpg",
      "/news/news/news-031/3.jpg",
      "/news/news/news-031/4.jpg",
      "/news/news/news-031/5.jpg",
    ],
    category: "Research",
  },
  {
    id: "news-030",
    title:
      "Master Student Kattareen Boonchuay Receives Excellent Academic Performance Award",
    description:
      "Kattareen Boonchuay, an MSc student in Polymer Science and Technology at Mahidol University, has been awarded for 'Excellent academic performance' by The Professor Dr. Tab Nilanidhi Foundation, under the supervision of Prof. Chakrit Sirisinha.",
    content:
      "Congratulations to Kattareen Boonchuay, our Master student in Polymer Science and Technology Programme, Mahidol University under supervision of Prof. Chakrit Sirisinha for receiving 'Excellent academic performance for MSc students' from The Professor Dr. Tab Nilanidhi Foundation.",
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University",
    },
    date: "4 December 2024",
    images: ["/news/news/news-030/1.jpg"],
    category: "congratulation",
  },
  {
    id: "news-029",
    title: "Aj. Thammasit Vongsetskul Appointed Professor",
    description:
      "Congratulations to Aj.Thammasit Vongsetskul, a faculty member in the Polymer Science and Technology Program at Mahidol University, on her promotion to 'Professor' position.",
    content:
      "🎉🎉🎉 Congratulations to Aj.Thammasit Vongsetskul, our faculty in Polymer Science and Technology Programme, Mahidol University, for receiving 'Professor' position. 🎊🎊🎊",
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University",
    },
    date: "4 December 2024",
    images: ["/news/news/news-029/1.jpg"],
    category: "congratulation",
  },
  {
    id: "news-028",
    title: "Aj. Anyarat Watthanaphanit Appointed Associate Professor",
    description:
      "Congratulations to Aj. Anyarat Watthanaphanit, a faculty member in the Polymer Science and Technology Program at Mahidol University, on her promotion to 'Associate Professor' position.",
    content:
      "🎉🎉🎉 Congratulations to Aj. Anyarat Watthanaphanit, our faculty in Polymer Science and Technology Programme, Mahidol University, for receiving 'Associate Professor' position. 🎊🎊🎊",
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University",
    },
    date: "4 December 2024",
    images: ["/news/news/news-028/1.jpg"],
    category: "congratulation",
  },
  {
    id: "news-027",
    title: "Congratulations to Our Graduates!",
    description:
      "The Polymer Science and Technology Program extends its heartfelt congratulations to all recent graduates.",
    content: "Congratulations to our graduates !!!",
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University",
    },
    date: "9 October 2024",
    images: [
      "/news/news/news-027/1.jpg",
      "/news/news/news-027/2.jpg",
      "/news/news/news-027/3.jpg",
      "/news/news/news-027/4.jpg",
    ],
    category: "congratulation",
  },
  {
    id: "news-026",
    title:
      "Polymer Science and Technology Students Receive Honorable Mention in Rubber Innovation Contest",
    description:
      "PhD student Ms. Narueporn Payungwong and students Ms. Pitchaya Theedee and Ms. Thitirat Phornpongwat received an 'Honorable Mention' in the Rubber Innovation Contest from ROAT for their project on 'Ultra-Thin Gloves Innovation,' supervised by Professor Dr. Jitladda Sakdapipanich.",
    content:
      "Congratulations to Ms. Narueporn Payungwong (our PhD student), Ms. Pitchaya Theedee, and Ms. Thitirat Phornpongwat for receiving 'Honorable Mention for Higher Education Students (Dowmstream) in Rubber Innovation Contest' from Rubber Authority of Thailand (ROAT) for the project 'Ultra-Thin Gloves Innovation: Utilizing Latex Serum Waste in the Production of High-Grade Finger Cots as a Prototype' under the supervision of Professor Dr. Jitladda Sakdapipanich.",
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University",
    },
    date: "17 September 2024",
    images: ["/news/news/news-026/1.jpg"],
    category: "congratulation",
  },
  {
    id: "news-025",
    title:
      "PhD Student Apisara Sillapasuwan and Phattharawadi Saekhow Win Rubber Innovation Contest Award",
    description:
      "Ms. Apisara Sillapasuwan (PhD student) and Ms. Phattharawadi Saekhow received the 'Winner Award for Higher Education Students (Upstream) in Rubber Innovation Contest' from ROAT for their project on sustainable latex innovation, supervised by Professor Dr. Jitladda Sakdapipanich.",
    content:
      "Congratulations to Ms. Apisara Sillapasuwan (our PhD student) and Ms. Phattharawadi Saekhow for receiving 'Winner Award for Higher Education Students (Upstream) in Rubber Innovation Contest' from Rubber Authority of Thailand (ROAT) for the project 'Sustainable Latex Innovation: Using New Latex Preservatives as a Substitute for TMTD/ZnO' under the supervision of Professor Dr. Jitladda Sakdapipanich.",
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University",
    },
    date: "17 September 2024",
    images: ["/news/news/news-025/1.jpg"],
    category: "congratulation",
  },
  {
    id: "news-024",
    title:
      "Professor Dr. Jitladda Sakdapipanich Wins Rubber Innovation Contest Award",
    description:
      "Professor Dr. Jitladda Sakdapipanich from the Polymer Science and Technology Program received the 'Winner Award for Academic Staff (Downstream) in Rubber Innovation Contest' from the Rubber Authority of Thailand (ROAT) for her project on sustainable, allergen-free natural latex and latex products.",
    content:
      'Congratualtions to Professor Dr. Jitladda Sakdapipanich, our faculty in Polymer Science and Technology Programme, for receiving the “Winner Award for Academic Staff (Downstream) in Rubber Innovation Contest" from Rubber Authority of Thailand (ROAT) for the project: "Innovation in Natural Latex and Latex Products Free from Allergenic Proteins: The Power of Technology for Sustainability"',
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University",
    },
    date: "17 September 2024",
    images: ["/news/news/news-024/1.jpg"],
    category: "congratulation",
  },
  {
    id: "news-023",
    title:
      "Alumnus Asst. Prof. Dr. Sarawut Prasertsri Receives Outstanding Academic Staff Award",
    description:
      "Congratulations to Asst. Prof. Dr. Sarawut Prasertsri, an alumnus of Mahidol University's Polymer Science and Technology program and a lecturer at Ubon Ratchathani University, for receiving the 'Outstanding Academic Staff Award in Science and Technology section 2024' from Ubon Ratchathani University.",
    content:
      "Congratulations to 'Assistance Professor Dr. Sarawut Prasertsri,' our alumni graduated from our MSc and PhD programme and currently a lecturer at Polymer Science and Technology Programme, Department of Chemistry, Faculty of Science, Ubon Ratchathani University, for receiving 'Outstanding Academic Staff Award in Science and Technology section 2024' from Ubon Ratchathani University.",
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University",
    },
    date: "17 September 2024",
    images: [
      "/news/news/news-023/1.jpg",
      "/news/news/news-023/2.jpg",
      "/news/news/news-023/3.jpg",
    ],
    category: "congratulation",
  },
  {
    id: "news-022",
    title:
      "Pineapple Leaf Fiber and Natural Rubber Leather Project Receives Funding from TED Youth Startup",
    description:
      "Sorn Duangsuwan, a PhD student in Polymer Science and Technology, and his advisor Assoc. Prof. Dr. Taweechai Amornsakchai, have received funding through the Ideation Incentive Program under TED Youth Startup for their sustainable artificial leather project made from pineapple leaf fibers and natural rubber.",
    content:
      "The artificial leather project made from pineapple leaf fibers and natural rubber, showcasing a sustainable solution for reducing agricultural waste, has been selected as one of the top 100 projects and received funding to develop a prototype and a complete business plan in the Ideation Incentive Program under TED Youth Startup. The Faculty of Science, Mahidol University, extends its congratulations to Mr. Sorn Duangsuwan, a PhD student in Polymer Science and Technology, who developed the artificial leather from pineapple leaf fibers and natural rubber, and his advisor, Assoc. Prof. Dr. Taweechai Amornsakchai, a faculty member in the Department of Chemistry. This recognition comes as the artificial leather project made from pineapple leaf fibers and natural rubber was selected as one of the top 100 projects and received funding in the Ideation Incentive Program under the Youth Startup Project or TED Youth Startup, Round 2/2567.",
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University",
    },
    date: "20 August 2024",
    images: ["/news/news/news-022/1.jpg"],
    category: "congratulation",
  },
  {
    id: "news-021",
    title:
      "MSc Student Rawinan Sutthikitivorakul Wins Best Poster Presentation Award at PCT-14",
    description:
      "Rawinan Sutthikitivorakul, an MSc student in Polymer Science and Technology at Mahidol University, received the 'Best Poster Presentation Award in Polymer Blends and Composites Session' at the 14th International Polymer Conference of Thailand (PCT-14).",
    content:
      "Congratulations to Rawinan Sutthikitivorakul, our MSc student in Polymer Science and Technology Programme, Mahidol University under the supervision of Professor Pranee Phinyocheep for receiving 'Best Poster Presentation Award in Polymer Blends and Composites Session' at the 14th International Polymer Conference of Thailand (PCT-14).",
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University",
    },
    date: "18-19 July 2024",
    images: [
      "/news/news/news-021/1.jpg",
      "/news/news/news-021/2.jpg",
      "/news/news/news-021/3.jpg",
      "/news/news/news-021/4.jpg",
    ],
    category: "congratulation",
  },
  {
    id: "news-020",
    title:
      "The 14th International Polymer Conference of Thailand (PCT-14): Polymer Innovations for a Sustainable Future",
    description:
      "The 14th International Polymer Conference of Thailand (PCT-14), led by Assoc. Prof. Dr. Taweechai Amornsakchai and other faculty members from Mahidol University, gathered over 150 researchers to discuss 'Polymer Innovations for a Sustainable Future' and foster research networks.",
    content:
      "Atmosphere from the 14th International Polymer Conference of Thailand (PCT-14) organized by the Polymer Society of Thailand, with Assoc. Prof. Dr. Taweechai Amornsakchai, President of the Society and Chair of the Ph.D. Program in Polymer Science and Technology, Department of Chemistry, Faculty of Science, Mahidol University, leading the organization of PCT-14. He was joined by several faculty members from the Program, including Asst. Prof. Dr. Krisda Suchiva and Prof. Dr. Pranee Phinyocheep, who served as advisors to the Society, and Assoc. Prof. Dr. Panya Sunintaboon, a committee member of the Society. The event was held from July 18-19, 2024, at the Amari Bangkok Hotel, with the main discussion topic for this year's PCT-14 being 'Polymer Innovations for a Sustainable Future,' aiming to discuss how polymer science and innovations can address the significant global challenges we face. Additionally, many faculty members from the Program, such as Prof. Dr. Kalyanee Sirisinha, Assoc. Prof. Dr. Sombat Thanawan, Asst. Prof. Dr. Preeyanuch Junkong, and Asst. Prof. Dr. Thanchanok Ratvijitvech attended PCT-14. It was an excellent opportunity to build research networks with students, faculty, researchers from other institutions, and stakeholders from the polymer industry both within Thailand and abroad. The event also provided master's and doctoral students in the Polymer Program with valuable experience in organizing the event and, importantly, in presenting their research at an international academic conference.",
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University",
    },
    date: "18-19 July 2024",
    images: [
      "/news/news/news-020/1.jpg",
      "/news/news/news-020/2.jpg",
      "/news/news/news-020/3.jpg",
      "/news/news/news-020/4.jpg",
      "/news/news/news-020/5.jpg",
      "/news/news/news-020/6.jpg",
      "/news/news/news-020/7.jpg",
      "/news/news/news-020/8.jpg",
      "/news/news/news-020/9.jpg",
      "/news/news/news-020/10.jpg",
      "/news/news/news-020/11.jpg",
      "/news/news/news-020/12.jpg",
      "/news/news/news-020/13.jpg",
      "/news/news/news-020/14.jpg",
      "/news/news/news-020/15.jpg",
      "/news/news/news-020/16.jpg",
      "/news/news/news-020/17.jpg",
    ],
    category: "event",
  },
  {
    id: "news-019",
    title:
      "Polymer Science and Technology Program Welcomes Exchange Students from Sichuan University",
    description:
      "The Polymer Science and Technology Program at Mahidol University, Salaya, is delighted to welcome exchange students from Sichuan University, China, who will be conducting research under the supervision of Prof. Jitladda Sakdapipanich.",
    content:
      "Polymer Science and Technology Programme, Mahidol University would like to welcome exchange students from Sichuan University, China 🥰 under supervision of Prof.Jitladda Sakdapipanich at Mahidol University, Salaya 🇹🇭🇨🇳 ",
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University",
    },
    date: "11 July 2024",
    images: [
      "/news/news/news-019/1.jpg",
      "/news/news/news-019/2.jpg",
      "/news/news/news-019/3.jpg",
      "/news/news/news-019/4.jpg",
      "/news/news/news-019/5.jpg",
      "/news/news/news-019/6.jpg",
      "/news/news/news-019/7.jpg",
      "/news/news/news-019/8.jpg",
      "/news/news/news-019/9.jpg",
    ],
    category: "event",
  },
  {
    id: "news-018",
    title:
      "The 7th Asian Symposium on Emulsion Polymerization and Functional Polymeric Microspheres (ASEPFPM) 2024",
    description:
      "The 7th Asian Symposium on Emulsion Polymerization and Functional Polymeric Microspheres (ASEPFPM) 2024 brought together over 150 researchers from 30+ institutions in Chiang Mai to exchange knowledge on microspheres and polymers, chaired by Prof. Dr. Pramuan Tangboriboonrat from Mahidol University.",
    content:
      "The atmosphere of the academic conference, The 7th Asian Symposium on Emulsion Polymerization and Functional Polymeric Microspheres (ASEPFPM) 2024, was held on June 20-22, 2024 at Kantary Hills Hotel, Chiang Mai. The symposium was chaired by Prof. Dr. Pramuan Tangboriboonrat, from the Polymer Science and Technology program, Faculty of Science, Mahidol University as the honorary chairperson and Assoc. Prof. Dr. Pakorn Opaprakasit from Sirindhorn International Institute of Technology (SIIT), Thammasat University, as chairperson of the ASEPFPM 7 steering committee. The conference gathered more than 150 researchers from over 30 institutions, including the professors and students from our program, to exchange knowledge and discuss topics related to microspheres and polymers. Additionally, participants had the opportunity to experience Thai culture through an exciting and enjoyable post-conference excursion.",
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University",
    },
    date: "20-22 June 2024",
    images: [
      "/news/news/news-018/1.jpg",
      "/news/news/news-018/2.jpg",
      "/news/news/news-018/3.jpg",
      "/news/news/news-018/4.jpg",
      "/news/news/news-018/5.jpg",
      "/news/news/news-018/6.jpg",
      "/news/news/news-018/7.jpg",
      "/news/news/news-018/8.jpg",
      "/news/news/news-018/9.jpg",
      "/news/news/news-018/10.jpg",
      "/news/news/news-018/11.jpg",
    ],
    category: "event",
  },
  {
    id: "news-017",
    title: "Polymer Splash 2024: A Heart-warming Thai Songkran Event",
    description:
      "The Polymer Science and Technology Program at Mahidol University, Salaya campus, hosted 'Polymer Splash 2024,' a heartwarming event related to the Thai Songkran festival.",
    content:
      "❤️ Another heart-warming event 'Polymer Splash 2024' related to Thai Songkran festival at Polymer Science and Technology Programme, Mahidol University, Salaya campus 💦🔫🤿",
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University",
    },
    date: "30 April 2024",
    images: [
      "/news/news/news-017/1.jpg",
      "/news/news/news-017/2.jpg",
      "/news/news/news-017/3.jpg",
      "/news/news/news-017/4.jpg",
      "/news/news/news-017/5.jpg",
      "/news/news/news-017/6.jpg",
      "/news/news/news-017/7.jpg",
      "/news/news/news-017/8.jpg",
      "/news/news/news-017/9.jpg",
      "/news/news/news-017/10.jpg",
      "/news/news/news-017/11.jpg",
      "/news/news/news-017/12.jpg",
      "/news/news/news-017/13.jpg",
      "/news/news/news-017/14.jpg",
      "/news/news/news-017/15.jpg",
      "/news/news/news-017/16.jpg",
      "/news/news/news-017/17.jpg",
    ],
    category: "activity",
  },
  {
    id: "news-016",
    title:
      "Professor Pramuan Tangboriboonrat Receives Outstanding Alumni Award from Khon Kaen University",
    description:
      "Professor Pramuan Tangboriboonrat, a faculty member in the Polymer Science and Technology Program at Mahidol University, has been honored with the 'Outstanding Alumni Award' from Khon Kaen University.",
    content:
      "✨✨✨ Congratulations to Professor Pramuan Tangboriboonrat, our faculty in Polymer Science and Technology Programme, Mahidol University, for receiving 'Outstanding Alumni Award' from Khon Kaen University. ❤️❤️❤️",
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University",
    },
    date: "1 February 2024",
    images: ["/news/news/news-016/1.jpg"],
    category: "congratulation",
  },
  {
    id: "news-015",
    title:
      "Ph.D. Student Sasimaporn Treepet Wins Best Poster Presentation Award at Paccon 2024",
    description:
      "Sasimaporn Treepet, a Ph.D. student in the Polymer Science and Technology Program at Mahidol University, received the 'Best Poster Presentation Award' at Paccon 2024 for her research on dye degradation using metal nanoparticles and carbon quantum dots.",
    content:
      "🎊🎊🎊 We are delighted to share that Miss Sasimaporn Treepet, a Ph.D. student in our Polymer Science and Technology Program under the supervision of Assistant Professor Anyarat Watthanaphanit, has been honored with the “Best Poster Presentation Award”. Her presentation, titled “The Metal Nanoparticles Coupling with Carbon Quantum Dots via Solution Plasma Discharge and Embedding in Metal-Organic Frameworks for Dye Degradation,” earned this distinction at the Paccon 2024 conference in the Material Chemistry and Nanotechnology Section. Please join us in congratulating her on this remarkable achievement! 👍👍👍",
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University",
    },
    date: "1 February 2024",
    images: [
      "/news/news/news-015/1.jpg",
      "/news/news/news-015/2.jpg",
      "/news/news/news-015/3.jpg",
    ],
    category: "congratulation",
  },
  {
    id: "news-014",
    title:
      "Polymer Science and Technology Students Win Top Poster Awards at ICMRI 2024",
    description:
      "PhD student Apisara Sillapasuwan and BSc student Podjaman Chai-amnuaypornkun from Mahidol University's Polymer Science and Technology Program received 'Best Poster Award First Place' and 'Best Poster Award Second Place' (Materials research), respectively, at the 5th International Conference on Materials Research and Innovation.",
    content:
      "🎉🎉🎉 Congratulations to Apisara Sillapasuwan, our PhD student and Podjaman Chai-amnuaypornkun, our BSc student in Polymer Science and Technology Programme, Mahidol University under the supervision of Professor Jitladda Sakdapipanich 🥳 for receiving 'Best Poster Award First Place' and 'Best Poster Award Second place' (Materials research) at the 5th International Conference on Materials Research and Innovation. ✨✨✨",
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University",
    },
    date: "1 February 2024",
    images: [
      "/news/news/news-014/1.jpg",
      "/news/news/news-014/2.jpg",
      "/news/news/news-014/3.jpg",
      "/news/news/news-014/4.jpg",
      "/news/news/news-014/5.jpg",
      "/news/news/news-014/6.jpg",
    ],
    category: "congratulation",
  },
  {
    id: "news-013",
    title:
      "Special Seminar on Reactive Polymer Processing in Industrial Application",
    description:
      "Dr. Wasin Koosomsuan, a Polymer Science and Technology alumnus, delivered a valuable seminar on 'Reactive Polymer Processing in Industrial Application,' providing fundamental insights and practical applications to attendees.",
    content:
      "The special seminar on 'Reactive Polymer Processing in Industrial Application' by our polymer alumni, Dr. Wasin Koosomsuan deserves our sincere thanks. The speaker dedicatedly provided fundamental insights into Polymer Processing and exemplified its practical applications in the industry. Our attendees gained valuable knowledge. Stay tuned to this page for upcoming events. We look forward to inviting you to the next special seminar.",
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University",
    },
    date: "8 December 2023",
    images: ["/news/news/news-013/1.jpg", "/news/news/news-013/2.jpg"],
    category: "seminar",
  },
  {
    id: "news-012",
    title: "Aj.Chakrit Sirisinha Appointed Professor",
    description:
      "Congratulations to Aj.Chakrit Sirisinha from the Polymer Science and Technology Program, Mahidol University, on her appointment to the position of Professor.",
    content:
      "Congratulations to Aj.Chakrit Sirisinha, our faculty in Polymer Science and Technology Programme, Mahidol University, for receiving 'Professor' position.",
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University",
    },
    date: "21 November 2023",
    images: ["/news/news/news-012/1.jpg"],
    category: "congratulation",
  },
  {
    id: "news-011",
    title: "Aj. Pranee Phinyocheep Appointed Professor",
    description:
      "Congratulations to Aj. Pranee Phinyocheep from the Polymer Science and Technology Program, Mahidol University, on her appointment to the position of Professor.",
    content:
      "Congratulations to Aj. Pranee Phinyocheep, our faculty in Polymer Science and Technology Programme, Mahidol University, for receiving 'Professor' position.",
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University",
    },
    date: "21 November 2023",
    images: ["/news/news/news-011/1.jpg"],
    category: "congratulation",
  },
  {
    id: "news-010",
    title:
      "Asst. Prof. Dr. Chayanisa Chitichotpanya and Asst. Prof. Dr. Manthana Jariyaboon to Showcase Research at TECHINNOVATION 2023",
    description:
      "Congratulations to Asst. Prof. Dr. Chayanisa Chitichotpanya and Asst. Prof. Dr. Mantana Jariyaboon from the Polymer Science and Technology Program for being selected by Mahidol University's Institute for Technology and Innovation Management to showcase their research at TECHINNOVATION 2023 in Singapore.",
    content:
      "Congratulations to Asst. Prof. Dr. Chayanisa Chitichotpanya and Asst. Prof. Dr. Mantana Jariyaboon, faculty members of our Polymer Science and Technology Program, for being selected by Mahidol University's Institute for Technology and Innovation Management to showcase their research at 'TECHINNOVATION 2023' at Marina Bay Sands, Singapore.",
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University",
    },
    date: "16 November 2023",
    images: [
      "/news/news/news-010/1.jpg",
      "/news/news/news-010/2.jpg",
      "/news/news/news-010/3.jpg",
      "/news/news/news-010/4.jpg",
      "/news/news/news-010/5.jpg",
    ],
    category: "congratulation",
  },
  {
    id: "news-009",
    title:
      "PhD Student Wins Best Poster Award (Gold) at Japan-Thailand Bilateral Symposium",
    description:
      "Apisara Sillapasuwan, a PhD student in Polymer Science and Technology at Mahidol University, received the 'Best Poster Award (Gold)' at the Japan-Thailand Bilateral Symposium of Advanced Materials for Sustainable Society 2023.",
    content:
      "Congratulations to Apisara Sillapasuwan, our PhD student in Polymer Sciecne and Technology Programme, Mahidol University for receiving 'Best Poster Award (Gold)' at Japan-Thailand Bilateral Symposium of Advanced Materials for Sustainable Society 2023. Well done!!!",
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University",
    },
    date: "21 October 2023",
    images: [
      "/news/news/news-009/1.jpg",
      "/news/news/news-009/2.jpg",
      "/news/news/news-009/3.jpg",
      "/news/news/news-009/4.jpg",
      "/news/news/news-009/5.jpg",
    ],
    category: "congratulation",
  },
  {
    id: "news-008",
    title: "Congratulations to All Our Graduates!",
    description:
      "The Polymer Science and Technology Program celebrates its recent graduates, encouraging them to pursue excellence, continue learning, and make a positive impact on the world.",
    content:
      "Once again, congratulations to all graduates! We are immensely proud of you. Always strive for excellence, keep learning, and never lose sight of your dreams. You are the future leaders, innovators, and change-makers, and we are confident that you will positively impact our country and the world. Please help tag your friends, and don't forget to share your graduation photos here!",
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University",
    },
    date: "10 October 2023",
    images: [
      "/news/news/news-008/1.jpg",
      "/news/news/news-008/2.jpg",
      "/news/news/news-008/3.jpg",
      "/news/news/news-008/4.jpg",
      "/news/news/news-008/5.jpg",
      "/news/news/news-008/6.jpg",
      "/news/news/news-008/7.jpg",
      "/news/news/news-008/8.jpg",
      "/news/news/news-008/9.jpg",
    ],
    category: "congratulation",
  },
  {
    id: "news-007",
    title: "Master Student Wins Best Poster Presentation Award at PCT-13",
    description:
      "Kattareen Boonchuay, a Master's student in Polymer Science and Technology at Mahidol University, received 'The Best Poster Presentation Award in Rubber/Elastomer Session' at The International Polymer Conference of Thailand (PCT-13).",
    content:
      "Congratulations to Kattareen Boonchuay, our Master student in Polymer Science and Technology Programme, Mahidol University for receiving 'The Best Poster Presentation Award in Rubber/Elastomer Session' at The International Polymer Conference of Thailand (PCT-13). We are so proud of you.",
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University",
    },
    date: "19 June 2023",
    images: ["/news/news/news-007/1.jpg"],
    category: "congratulation",
  },
  {
    id: "news-006",
    title:
      "Assoc. Prof. Dr. Kanyanee Sirisinha Appointed Professor of Materials Technology",
    description:
      "The Faculty of Science, Mahidol University, congratulates Assoc. Prof. Dr. Kanyanee Sirisinha (Department of Chemistry) on her royal appointment to the academic position of Professor in Materials Technology.",
    content: `The Faculty of Science, Mahidol University, would like to extend congratulations to Associate Professor Dr. Kanyanee Sirisinha (Department of Chemistry) on the occasion of receiving royal graciousness for her appointment to the academic position of "Professor" in Materials Technology.`,
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University",
    },
    date: "23 May 2023",
    images: ["/news/news/news-006/1.jpg"],
    category: "congratulation",
  },
  {
    id: "news-005",
    title:
      "Special Seminar: “Insight into Vulcanization for Reinforcement of Rubber” by Prof. Yuko Ikeda",
    description:
      "Prof. Yuko Ikeda from Kyoto Institute of Technology, Japan, presented a special seminar focusing on vulcanization for rubber reinforcement on April 26, 2023.",
    content:
      "Special seminar on the topic of “Insight into Vulcanization for Reinforcement of Rubber” by Prof. Yuko Ikeda from Research Institute for Production Development, Kyoto Institute of Technology, Japan on 26 Apr 2023.",
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University",
    },
    date: "26 April 2023",
    images: ["/news/news/news-005/1.jpg"],
    category: "seminar",
  },
  {
    id: "news-004",
    title:
      "Special Seminar: “Structure of Natural Rubber” by Prof. Seiichi Kawahara",
    description:
      "Prof. Seiichi Kawahara from Nagaoka University of Technology, Japan, delivered a special seminar on the 'Structure of Natural Rubber' on March 30, 2023.",
    content: `Special seminar on the topic of “Structure of Natural Rubber” by Prof. Seiichi Kawahara from Department of Materials Science and Technology, Nagaoka University of Technology, Japan on 30 Mar 2023.`,
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University",
    },
    date: "23 April 2023",
    images: ["/news/news/news-004/1.jpg"],
    category: "seminar",
  },
  {
    id: "news-003",
    title:
      "First-Year Students Visit Polymer Science and Technology Laboratories",
    description:
      "On March 22, 2023, the Polymer Science and Technology program welcomed first-year students (academic year 2022) to visit the Polymer laboratories at the Department of Chemistry and the Rubber Research and Technology Center, Faculty of Science, Mahidol University (Salaya).",
    content: `On March 22, 2023, the program had the opportunity to welcome students to visit the Polymer laboratories at the Department of Chemistry and the Rubber Research and Technology Center, Faculty of Science, Mahidol University (Salaya). This was part of the program orientation for first-year students (academic year 2022), led by a dedicated team including Asst. Prof. Preeyanuch Junkong and senior students from the Polymer Science and Technology program. Welcome to all new students!`,
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University",
    },
    date: "23 March 2023",
    images: [
      "/news/news/news-003/1.jpg",
      "/news/news/news-003/2.jpg",
      "/news/news/news-003/3.jpg",
      "/news/news/news-003/4.jpg",
      "/news/news/news-003/5.jpg",
      "/news/news/news-003/6.jpg",
      "/news/news/news-003/7.jpg",
      "/news/news/news-003/8.jpg",
      "/news/news/news-003/9.jpg",
      "/news/news/news-003/10.jpg",
      "/news/news/news-003/11.jpg",
      "/news/news/news-003/12.jpg",
      "/news/news/news-003/13.jpg",
      "/news/news/news-003/14.jpg",
    ],
    category: "education",
  },
  {
    id: "news-002",
    title:
      "Prof. Jittladda Sakdapipanich Recognized as Mahidol University’s Top 1% Researchers 2023",
    description:
      "Congratulations to Prof. Jittladda Sakdapipanich from the Polymer Science and Technology Program for being recognized as one of Mahidol University’s Top 1% Researchers in 2023.",
    content: `Congratulations to Prof. Jittladda Sakdapipanich, a faculty member of our Polymer Science and Technology Program, for being recognized as one of Mahidol University’s Top 1% Researchers in 2023.`,
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University",
    },
    date: "23 March 2023",
    images: [
      "/news/news/news-002/1.jpg",
      "/news/news/news-002/2.jpg",
      "/news/news/news-002/3.jpg",
      "/news/news/news-002/4.jpg",
    ],
    category: "education",
  },
  {
    id: "news-001",
    title:
      "Polymer Science and Technology Students Visit Industrial Sites and Meet Alumni",
    description:
      "Master and Doctoral students gained practical industry knowledge through visits to Thailand Institute of Nuclear Technology and Thai Bridgestone, and networked with alumni from DOW Polyurethanes and PTT Global Chemical.",
    content: `On March 10, 2023, Master and Doctoral students as well as the faculty members of the Polymer Science and Technology Program, Mahidol University visited Thailand Institute of Nuclear Technology (Public Organization) Klong Ha Office, Pathum Thani, and Thai Bridgestone Co., Ltd., Nong Khae Branch, Saraburi. Students received a lot of knowledge and could understand how the polymer knowledge in the classroom can be applied to real industry.
On March 11, 2023, in the morning, the students had a good chance to meet their senior students, Ms. Narisara Kitisriworaphan, Senior TS&D Specialist DOW Polyurethanes, SEA  and Dr. Wasin Kusomsuan, Senior job position. Researcher (Emerging Application Development) PTT Global Chemical Public Company Limited.`,
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University",
    },
    date: "10-11 March 2023",
    images: [
      "/news/news/news-001/1.jpg",
      "/news/news/news-001/2.jpg",
      "/news/news/news-001/3.jpg",
      "/news/news/news-001/4.jpg",
      "/news/news/news-001/5.jpg",
      "/news/news/news-001/6.jpg",
      "/news/news/news-001/7.jpg",
      "/news/news/news-001/8.jpg",
      "/news/news/news-001/9.jpg",
    ],
    category: "education",
  },
];

export const articles: Content[] = [
  {
    id: "article-021",
    title:
      "Advanced Materials for Space Exploration: Innovations in Polymer Composites",
    description:
      "Exploring novel polymer composite materials for space applications, focusing on durability and performance in extreme environments.",
    content: `In a groundbreaking study published in Composites Science and Technology, researchers have developed innovative polymer composite materials specifically designed for space exploration applications. The study, titled "Advanced Polymer Composites for Space Applications," presents significant advancements in material science that could revolutionize spacecraft construction and space equipment.

Key findings include:
- Development of high-performance polymer composites with enhanced thermal stability
- Improved resistance to radiation and extreme temperature fluctuations
- Novel manufacturing techniques for space-grade materials
- Potential applications in spacecraft components and space station modules

The research team utilized advanced characterization techniques to evaluate the materials' performance under simulated space conditions, demonstrating remarkable durability and reliability.

🔗 Read the full article: https://www.sciencedirect.com/science/article/pii/S0008622324009242`,
    author: {
      name: "Anyarat Watthanaphanit ",
      role: "Advanced Materials Laboratory",
    },
    date: "January 2025",
    images: [
      "https://ars.els-cdn.com/content/image/1-s2.0-S0008622324009242-ga1.jpg",
    ],
    category: "nanotechnology",
  },
  {
    id: "article-022",
    title: "Sustainable Polymers: The Next Generation",
    description:
      "Revolutionary approaches to eco-friendly material development.",
    content:
      "The field of sustainable polymers is evolving rapidly. This article examines the latest breakthroughs in biodegradable materials and their potential to transform the packaging industry.",
    author: {
      name: "Dr. Polymer Science",
      role: "Materials Research Director",
    },
    date: "10 July 2024",
    images: [
      "https://www.researchgate.net/publication/389353727/figure/fig1/AS:11431281312154346@1740589288688/Image-for-non-rubber-components-in-gGR.png",
    ],
    category: "natural-rubber",
  },
  {
    id: "article-023",
    title: "AI in Materials Science: A New Era of Discovery",
    description:
      "How artificial intelligence is accelerating material innovation.",
    content:
      "Artificial intelligence is revolutionizing the way we discover and develop new materials. This article explores how machine learning algorithms are helping scientists predict material properties and accelerate research.",
    author: {
      name: "Dr. AI Research",
      role: "Computational Materials Scientist",
    },
    date: "8 July 2024",
    images: [],
    category: "advanced-composite",
  },
  {
    id: "article-020",
    title: "Smart Cities and Urban Development",
    description: "Technology-driven solutions for modern cities.",
    content: "Cities are becoming smarter with technology...",
    author: {
      name: "Urban Tech",
      role: "Smart City Consultant",
    },
    date: "20 June 2024",
    images: [],
    category: "applied-industry",
  },
  {
    id: "article-019",
    title: "The Future of Digital Payments",
    description: "Emerging trends in financial technology.",
    content: "Digital payments are evolving rapidly...",
    author: {
      name: "Fin Tech",
      role: "Payment Systems Expert",
    },
    date: "15 June 2024",
    images: [],
    category: "Technology",
  },
  {
    id: "article-018",
    title: "Sustainable Transportation Solutions",
    description: "Innovations in eco-friendly transport.",
    content: "The transportation sector is going green...",
    author: {
      name: "Eco Transport",
      role: "Transportation Analyst",
    },
    date: "10 June 2024",
    images: [],
    category: "Sustainability",
  },
  {
    id: "article-001",
    title: "How to Improve Your Project Management Skills",
    description:
      "Learn the essential skills needed for effective project management in today's fast-paced environment.",
    content:
      "Project management is a critical skill in today's business world...",
    author: {
      name: "Dr. Michael Chen",
      role: "Senior Project Manager",
    },
    date: "7 Feb 2023",
    images: [],
    category: "Business",
  },
  {
    id: "article-002",
    title: "Modern Cybersecurity Trends to Watch in 2023",
    description:
      "Stay ahead of the curve with these emerging cybersecurity trends and technologies.",
    content: "The cybersecurity landscape is constantly evolving...",
    author: {
      name: "Sarah Williams",
      role: "Cybersecurity Analyst",
    },
    date: "12 Aug 2023",
    images: [],
    category: "Technology",
  },
  {
    id: "article-003",
    title: "The Future of Artificial Intelligence in Healthcare",
    description: "Exploring how AI is transforming the healthcare industry.",
    content:
      "Artificial Intelligence is revolutionizing healthcare in unprecedented ways...",
    author: {
      name: "Dr. Jennifer Lee",
      role: "Healthcare Technology Expert",
    },
    date: "25 March 2024",
    images: [],
    category: "Healthcare",
  },
  {
    id: "article-004",
    title: "Sustainable Business Practices for the Modern Enterprise",
    description:
      "How companies can implement eco-friendly practices while maintaining profitability.",
    content:
      "Sustainability is no longer just a buzzword in the business world...",
    author: {
      name: "Robert Green",
      role: "Sustainability Consultant",
    },
    date: "1 April 2024",
    images: [],
    category: "Business",
  },
  {
    id: "article-005",
    title: "The Impact of 5G Technology on Mobile Applications",
    description:
      "Understanding how 5G is changing the landscape of mobile app development.",
    content:
      "The advent of 5G technology is bringing significant changes to mobile applications...",
    author: {
      name: "Alex Thompson",
      role: "Mobile Technology Analyst",
    },
    date: "5 April 2024",
    images: [],
    category: "Technology",
  },
  {
    id: "article-006",
    title: "Blockchain Technology in Supply Chain Management",
    description:
      "How blockchain is revolutionizing supply chain transparency and efficiency.",
    content: "Blockchain technology is transforming supply chain management...",
    author: {
      name: "Dr. Lisa Wong",
      role: "Supply Chain Expert",
    },
    date: "10 April 2024",
    images: [],
    category: "Technology",
  },
  {
    id: "article-007",
    title: "The Role of Big Data in Modern Marketing",
    description:
      "Leveraging data analytics for effective marketing strategies.",
    content: "Big data is reshaping the marketing landscape...",
    author: {
      name: "John Smith",
      role: "Marketing Analytics Director",
    },
    date: "15 April 2024",
    images: [],
    category: "Marketing",
  },
  {
    id: "article-008",
    title: "Cloud Computing Security Best Practices",
    description: "Essential security measures for cloud-based systems.",
    content: "Cloud security is a critical concern for modern businesses...",
    author: {
      name: "Emily Davis",
      role: "Cloud Security Specialist",
    },
    date: "20 April 2024",
    images: [],
    category: "Technology",
  },
  {
    id: "article-009",
    title: "The Future of Remote Work",
    description:
      "Trends and strategies for successful remote work environments.",
    content: "Remote work is becoming the new norm...",
    author: {
      name: "Michael Brown",
      role: "Workplace Strategy Consultant",
    },
    date: "25 April 2024",
    images: [],
    category: "Business",
  },
  {
    id: "article-010",
    title: "Sustainable Energy Solutions for Businesses",
    description:
      "Implementing green energy practices in corporate environments.",
    content: "Sustainable energy is key to future business success...",
    author: {
      name: "Sarah Green",
      role: "Energy Consultant",
    },
    date: "30 April 2024",
    images: [],
    category: "Sustainability",
  },
  {
    id: "article-011",
    title: "The Future of E-commerce",
    description: "Emerging trends and technologies shaping online retail.",
    content: "E-commerce continues to evolve with new technologies...",
    author: {
      name: "David Retail",
      role: "E-commerce Analyst",
    },
    date: "5 May 2024",
    images: [],
    category: "Business",
  },
  {
    id: "article-012",
    title: "Cybersecurity in the Age of IoT",
    description: "Protecting connected devices in a digital world.",
    content: "The Internet of Things presents new security challenges...",
    author: {
      name: "Sarah Security",
      role: "IoT Security Specialist",
    },
    date: "10 May 2024",
    images: [],
    category: "Technology",
  },
  {
    id: "article-013",
    title: "Sustainable Agriculture Practices",
    description: "Innovative farming methods for a greener future.",
    content: "Modern agriculture is embracing sustainable practices...",
    author: {
      name: "Dr. Green",
      role: "Agricultural Scientist",
    },
    date: "15 May 2024",
    images: [],
    category: "Sustainability",
  },
  {
    id: "article-014",
    title: "The Impact of Social Media on Business",
    description: "How social platforms are transforming marketing strategies.",
    content: "Social media continues to reshape business marketing...",
    author: {
      name: "Lisa Social",
      role: "Social Media Strategist",
    },
    date: "20 May 2024",
    images: [],
    category: "Marketing",
  },
  {
    id: "article-015",
    title: "Digital Transformation in Healthcare",
    description: "How technology is revolutionizing patient care.",
    content: "Healthcare is undergoing significant digital transformation...",
    author: {
      name: "Dr. Tech",
      role: "Healthcare Technology Director",
    },
    date: "25 May 2024",
    images: [],
    category: "Healthcare",
  },
  {
    id: "article-016",
    title: "The Future of Work: Hybrid Models",
    description: "Balancing remote and in-office work environments.",
    content: "Hybrid work models are becoming the new standard...",
    author: {
      name: "Mike Work",
      role: "Workplace Innovation Lead",
    },
    date: "30 May 2024",
    images: [],
    category: "Business",
  },
  {
    id: "article-017",
    title: "Artificial Intelligence in Education",
    description: "How AI is transforming learning experiences.",
    content: "AI is revolutionizing the education sector...",
    author: {
      name: "Dr. Learn",
      role: "Educational Technology Expert",
    },
    date: "5 June 2024",
    images: [],
    category: "Education",
  },
];

export const presentations: Presentation[] = [
  {
    id: "pres-021",
    topic: "Special Seminar by Professor Changwoon NAH",
    presenter: {
      name: "Professor Changwoon NAH",
      role: "Department of Polymer-Nano Science and Technology",
      laboratory: "College of Engineering, Jeonbuk National University",
    },
    date: "29 October 2024",
    location:
      "Room SC4-407, Faculty of Science, Mahidol University, Salaya Campus",
    abstract:
      "A special seminar by a distinguished expert from Jeonbuk National University, Republic of Korea.",
    content: `📢 Special Seminar Announcement 📢

The Polymer Science and Technology Program is excited to present an upcoming seminar by Professor Changwoon NAH, a distinguished expert from the Department of Polymer-Nano Science and Technology, College of Engineering, Jeonbuk National University, Republic of Korea. 

🗓 Date: Tuesday, October 29, 2024
🕒 Time: 1:30 PM - 3:30 PM
📍 Location: Room SC4-407, Faculty of Science, Mahidol University, Salaya Campus

We invite students, faculty, and anyone interested in polymer science to join us for this unique opportunity to learn and engage with an esteemed leader in the field.

Don't miss out—mark your calendars!`,
    slides: "/presentations/special-seminar-2024.pdf",
    category: "seminar",
  },
  {
    id: "pres-022",
    topic: "Sustainable Polymer Development",
    presenter: {
      name: "Dr. Green Polymer",
      role: "Lead Researcher",
      laboratory: "Sustainable Materials Lab",
    },
    date: "12 July 2024",
    location: "WRAPKIT Materials Science Center",
    abstract:
      "New approaches to developing biodegradable polymers with enhanced properties for various applications.",
    content: "[Detailed presentation content about sustainable polymers...]",
    slides: "/presentations/sustainable-polymers-2024.pdf",
    category: "seminar",
  },
  {
    id: "pres-023",
    topic: "AI-Driven Materials Discovery",
    presenter: {
      name: "Dr. AI Materials",
      role: "Research Director",
      laboratory: "Computational Materials Lab",
    },
    date: "10 July 2024",
    location: "WRAPKIT AI Research Center",
    abstract:
      "Utilizing artificial intelligence to accelerate the discovery and development of new materials.",
    content: "[Detailed presentation content about AI in materials science...]",
    slides: "/presentations/ai-materials-2024.pdf",
    category: "seminar",
  },
  {
    id: "pres-020",
    topic: "Sustainable Agriculture Technologies",
    presenter: {
      name: "Dr. Ag Tech",
      role: "Agricultural Scientist",
      laboratory: "Sustainable Agriculture Lab",
    },
    date: "20 June 2024",
    location: "Agricultural Research Center",
    abstract: "Technological innovations in sustainable agriculture...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/ag-tech-2024.pdf",
    category: "seminar",
  },
  {
    id: "pres-019",
    topic: "Artificial Intelligence in Business",
    presenter: {
      name: "Dr. AI Business",
      role: "AI Strategist",
      laboratory: "Business AI Lab",
    },
    date: "15 June 2024",
    location: "Business Innovation Center",
    abstract: "AI applications in business operations...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/ai-business-2024.pdf",
    category: "seminar",
  },
  {
    id: "pres-018",
    topic: "Advanced Materials for Electronics",
    presenter: {
      name: "Dr. Electronics",
      role: "Materials Scientist",
      laboratory: "Electronics Materials Lab",
    },
    date: "10 June 2024",
    location: "Electronics Research Center",
    abstract: "New materials for electronic devices...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/electronics-materials-2024.pdf",
    category: "seminar",
  },
  {
    id: "pres-001",
    topic:
      "Development of Novel Biodegradable Polymers for Sustainable Packaging Applications",
    presenter: {
      name: "Dr. Sarah Johnson",
      role: "Principal Investigator",
      laboratory: "Polymer Synthesis and Characterization Laboratory",
    },
    date: "15 March 2024",
    location: "Room 301, Science Building",
    abstract:
      "This presentation explores the development of new biodegradable polymer materials...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/biodegradable-polymers-2024.pdf",
    category: "thesis defense",
  },
  {
    id: "pres-002",
    topic: "Advanced Materials for Energy Storage Applications",
    presenter: {
      name: "Dr. James Wilson",
      role: "Research Scientist",
      laboratory: "Energy Materials Laboratory",
    },
    date: "20 March 2024",
    location: "Virtual Meeting",
    abstract:
      "A comprehensive overview of recent advances in materials science...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/energy-storage-2024.pdf",
    category: "thesis defense",
  },
  {
    id: "pres-003",
    topic: "Nanotechnology in Drug Delivery Systems",
    presenter: {
      name: "Dr. Emily Chen",
      role: "Senior Researcher",
      laboratory: "Nanomedicine Research Center",
    },
    date: "25 March 2024",
    location: "Main Auditorium",
    abstract:
      "Exploring the latest developments in nanotechnology for targeted drug delivery...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/nanotech-drug-delivery-2024.pdf",
    category: "thesis defense",
  },
  {
    id: "pres-004",
    topic: "Sustainable Energy Solutions for Urban Environments",
    presenter: {
      name: "Dr. Robert Martinez",
      role: "Research Director",
      laboratory: "Urban Sustainability Lab",
    },
    date: "30 March 2024",
    location: "Conference Room A",
    abstract:
      "Innovative approaches to sustainable energy in urban settings...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/sustainable-energy-2024.pdf",
    category: "thesis defense",
  },
  {
    id: "pres-005",
    topic: "Artificial Intelligence in Materials Science",
    presenter: {
      name: "Dr. Lisa Thompson",
      role: "AI Research Lead",
      laboratory: "Computational Materials Lab",
    },
    date: "5 April 2024",
    location: "Virtual Meeting",
    abstract:
      "Applications of AI in materials discovery and characterization...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/ai-materials-2024.pdf",
    category: "thesis defense",
  },
  {
    id: "pres-006",
    topic: "Advanced Robotics in Manufacturing",
    presenter: {
      name: "Dr. Michael Brown",
      role: "Robotics Engineer",
      laboratory: "Advanced Manufacturing Lab",
    },
    date: "10 April 2024",
    location: "Engineering Building",
    abstract: "Latest developments in industrial robotics and automation...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/robotics-2024.pdf",
    category: "thesis defense",
  },
  {
    id: "pres-007",
    topic: "Quantum Computing Applications",
    presenter: {
      name: "Dr. Alan Turing",
      role: "Quantum Computing Specialist",
      laboratory: "Quantum Research Center",
    },
    date: "15 April 2024",
    location: "Physics Department",
    abstract:
      "Practical applications of quantum computing in various fields...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/quantum-2024.pdf",
    category: "thesis defense",
  },
  {
    id: "pres-008",
    topic: "Biomedical Engineering Innovations",
    presenter: {
      name: "Dr. Maria Garcia",
      role: "Biomedical Engineer",
      laboratory: "Medical Devices Lab",
    },
    date: "20 April 2024",
    location: "Medical Center",
    abstract:
      "Recent advances in biomedical engineering and medical devices...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/biomedical-2024.pdf",
    category: "thesis defense",
  },
  {
    id: "pres-009",
    topic: "Environmental Impact Assessment Methods",
    presenter: {
      name: "Dr. John Green",
      role: "Environmental Scientist",
      laboratory: "Environmental Research Center",
    },
    date: "25 April 2024",
    location: "Environmental Studies Building",
    abstract: "New methodologies for environmental impact assessment...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/environmental-2024.pdf",
    category: "thesis defense",
  },
  {
    id: "pres-010",
    topic: "Data Science in Healthcare",
    presenter: {
      name: "Dr. Sarah Lee",
      role: "Data Scientist",
      laboratory: "Healthcare Analytics Lab",
    },
    date: "30 April 2024",
    location: "Health Sciences Center",
    abstract: "Applications of data science in healthcare and medicine...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/healthcare-data-2024.pdf",
    category: "thesis defense",
  },
  {
    id: "pres-011",
    topic: "Advanced Materials for Space Exploration",
    presenter: {
      name: "Dr. Space Materials",
      role: "Materials Scientist",
      laboratory: "Space Materials Research Lab",
    },
    date: "5 May 2024",
    location: "Space Research Center",
    abstract: "New materials for space applications...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/space-materials-2024.pdf",
    category: "thesis defense",
  },
  {
    id: "pres-012",
    topic: "Sustainable Urban Planning",
    presenter: {
      name: "Dr. Urban Design",
      role: "Urban Planner",
      laboratory: "Sustainable Cities Institute",
    },
    date: "10 May 2024",
    location: "Urban Development Center",
    abstract: "Innovative approaches to sustainable urban development...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/urban-planning-2024.pdf",
    category: "thesis defense",
  },
  {
    id: "pres-013",
    topic: "Advanced Robotics in Healthcare",
    presenter: {
      name: "Dr. Medical Robotics",
      role: "Robotics Engineer",
      laboratory: "Medical Robotics Lab",
    },
    date: "15 May 2024",
    location: "Medical Technology Center",
    abstract: "Robotics applications in medical procedures...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/medical-robotics-2024.pdf",
    category: "thesis defense",
  },
  {
    id: "pres-014",
    topic: "Climate Change Mitigation Strategies",
    presenter: {
      name: "Dr. Climate Science",
      role: "Climate Researcher",
      laboratory: "Climate Research Center",
    },
    date: "20 May 2024",
    location: "Environmental Studies Building",
    abstract: "Effective strategies for climate change mitigation...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/climate-mitigation-2024.pdf",
    category: "thesis defense",
  },
  {
    id: "pres-015",
    topic: "Advanced Manufacturing Technologies",
    presenter: {
      name: "Dr. Manufacturing",
      role: "Industrial Engineer",
      laboratory: "Advanced Manufacturing Lab",
    },
    date: "25 May 2024",
    location: "Engineering Complex",
    abstract: "Latest developments in manufacturing technology...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/manufacturing-2024.pdf",
    category: "thesis defense",
  },
  {
    id: "pres-016",
    topic: "Digital Transformation in Education",
    presenter: {
      name: "Dr. Ed Tech",
      role: "Educational Technologist",
      laboratory: "Digital Learning Center",
    },
    date: "30 May 2024",
    location: "Education Technology Center",
    abstract: "Digital tools transforming education...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/ed-tech-2024.pdf",
    category: "thesis defense",
  },
  {
    id: "pres-017",
    topic: "Sustainable Energy Solutions",
    presenter: {
      name: "Dr. Energy",
      role: "Energy Researcher",
      laboratory: "Sustainable Energy Lab",
    },
    date: "5 June 2024",
    location: "Energy Research Center",
    abstract: "Innovative solutions for sustainable energy...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/sustainable-energy-2024.pdf",
    category: "thesis defense",
  },
];

export const getArticleById = (id: string): Content | undefined => {
  return articles.find((article) => article.id === id);
};

export const getNewsById = (id: string): Content | undefined => {
  return news.find((newsItem) => newsItem.id === id);
};

export const getPresentationById = (id: string): Presentation | undefined => {
  return presentations.find((presentation) => presentation.id === id);
};
