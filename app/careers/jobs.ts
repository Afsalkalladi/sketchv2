export interface JobSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface JobOpening {
  slug: string;
  title: string;
  department?: string;
  description: string;
  location: string;
  status: "open" | "closed";
  applyLink?: string; // external form link (used when no full JD exists)
  applyEmail?: string; // mailto apply (used on JD detail page)
  applySubject?: string; // autofilled email subject
  sections?: JobSection[]; // full JD content — presence enables the detail page
}

export const jobOpenings: JobOpening[] = [
  {
    slug: "mechanical-design-engineer",
    title: "MECHANICAL DESIGN ENGINEER",
    department: "Product Development",
    description:
      "Develop mechanical systems for our robotics and automation products, taking designs from initial concept through to a manufacturable, production-ready state.",
    location: "Hybrid / Kochi",
    status: "open",
    applyEmail: "careers@sketchrobotics.in",
    applySubject: "Application – Mechanical Design Engineer",
    sections: [
      {
        heading: "About Sketch Robotics",
        paragraphs: [
          "Sketch Robotics Pvt. Ltd. is a deep-tech startup emerging from the Cochin University of Science and Technology (CUSAT), incubated at Maker Village, IIITM Kerala. The company transforms complex industrial problems into deployable solutions engineered for real-world applications. Our core focus is automating repetitive and hazardous tasks through precision automation machines engineered in India and built for global markets.",
        ],
      },
      {
        heading: "About the Role",
        paragraphs: [
          "Sketch Robotics is seeking a Mechanical Design Engineer to join its product development team. The selected candidate will develop mechanical systems for the company's robotics and automation products, taking designs from initial concept through to a manufacturable, production-ready state.",
        ],
      },
      {
        heading: "Key Responsibilities",
        bullets: [
          "Convert concepts and functional requirements into complete mechanical designs for robotics, automation, industrial machinery, and custom products.",
          "Design mechanisms, assemblies, structures, and enclosures into production-ready designs.",
          "Prepare 3D models, manufacturing/assembly drawings, and Bills of Materials (BOM) per standard drafting practices.",
          "Select standard components (motors, gearboxes, bearings, linear guides, actuators, etc.) from supplier catalogs, backed by design calculations for sizing and structural strength.",
          "Apply Design for Manufacturing and Assembly (DFM/DFA) principles for cost-effective, manufacturable, serviceable designs.",
          "Build, assemble, and test prototypes; incorporate findings into design revisions.",
          "Coordinate with suppliers and fabrication partners on sourcing, quotations, and lead times.",
          "Collaborate with electrical, controls, and software teams to align designs with system requirements.",
          "Maintain design documentation and version control throughout development.",
        ],
      },
      {
        heading: "Requirements",
        bullets: [
          "Strong fundamentals in machine design, kinematics, and product development.",
          "Ability to visualise and design complete mechanical systems, rather than individual components in isolation.",
          "Proficiency in Autodesk Inventor, SolidWorks, or an equivalent 3D CAD platform.",
          "Good knowledge of manufacturing processes including CNC machining, sheet metal fabrication, welding, laser cutting, and 3D printing.",
          "Ability to perform design calculations for sizing, structural strength, and load analysis.",
          "Familiarity with Geometric Dimensioning and Tolerancing and standard drawing conventions.",
          "Strong analytical and problem-solving skills; able to work independently.",
        ],
      },
      {
        heading: "Preferred Qualifications",
        bullets: [
          "Bachelor's degree in Mechanical Engineering or a related field.",
          "1+ years of relevant experience preferred; exceptional freshers will also be considered.",
          "Prior experience in a hands-on prototyping environment.",
        ],
      },
      {
        heading: "Location & Compensation",
        paragraphs: [
          "This is a full-time, hybrid role based in Kochi, Kerala, combining on-site and remote work. Compensation for this role ranges from ₹30,000 to ₹60,000 per month, commensurate with skills and experience.",
        ],
      },
      {
        heading: "How to Apply",
        paragraphs: [
          "Send your resume and portfolio to careers@sketchrobotics.in with the subject: Application – Mechanical Design Engineer.",
          "Candidates are encouraged to include a portfolio showcasing CAD work, design projects, or hardware built. For early-career candidates, a strong academic or personal project is equally welcome.",
        ],
      },
    ],
  },
  {
    slug: "robotics-hardware-engineer",
    title: "ROBOTICS HARDWARE ENGINEER",
    description:
      "Design and develop robust robotic hardware systems that power intelligent automation solutions. Collaborate closely with software and mechanical teams to bring concepts to life.",
    location: "Remote / Kochi",
    status: "closed",
    applyLink: "https://forms.gle/BUsoG7yHXKt92E5YA",
  },
  {
    slug: "robotics-software-engineer",
    title: "ROBOTICS SOFTWARE ENGINEER",
    description:
      "Develop and optimize software architecture for autonomous systems, control algorithms, and robotics applications. Work alongside hardware and mechanical engineers to create integrated solutions.",
    location: "Remote / Kochi",
    status: "closed",
    applyLink: "https://forms.gle/BUsoG7yHXKt92E5YA",
  },
  {
    slug: "media-and-marketing-specialist",
    title: "MEDIA AND MARKETING SPECIALIST",
    description:
      "Drive brand growth by creating and executing marketing campaigns, managing social media, and coordinating outreach efforts. Work closely with engineering and business teams to communicate our innovations effectively.",
    location: "Remote / Kochi",
    status: "closed",
    applyLink: "https://forms.gle/BUsoG7yHXKt92E5YA",
  },
];

export function getJobBySlug(slug: string): JobOpening | undefined {
  return jobOpenings.find((job) => job.slug === slug);
}
