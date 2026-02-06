export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sketch Robotics",
    alternateName: "Sketch Robotics Pvt Ltd",
    url: "https://sketchrobotics.in",
    logo: "https://sketchrobotics.in/images/colored-logo.png",
    description:
      "Building the future with the Make in India spirit. Solving real-world problems through innovative robotics and AI solutions. Founded by a team from CUSAT.",
    foundingDate: "2023",
    foundingLocation: {
      "@type": "Place",
      name: "Kochi, Kerala, India",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kochi",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8157858569",
      email: "sketchrobotics@gmail.com",
      contactType: "customer service",
    },
    sameAs: [
      "https://x.com/sketchrobotics",
      "https://www.linkedin.com/company/sketch-robotics-pvt-ltd/",
      "https://www.instagram.com/sketchrobotics/",
    ],
    knowsAbout: [
      "Robotics",
      "Artificial Intelligence",
      "Automation",
      "ROS 2",
      "Embedded Systems",
      "Computer Vision",
      "Edge Computing",
      "Make in India",
    ],
    slogan: "Everything Starts From a Sketch",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 5,
      maxValue: 20,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sketch Robotics",
    url: "https://sketchrobotics.in",
    description:
      "Sketch Robotics - Innovative robotics and AI solutions with Make in India spirit",
    publisher: {
      "@type": "Organization",
      name: "Sketch Robotics",
      logo: {
        "@type": "ImageObject",
        url: "https://sketchrobotics.in/images/colored-logo.png",
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://sketchrobotics.in/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function HomePageJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Sketch Robotics - Everything Starts From a Sketch",
    description:
      "Building the future with the Make in India spirit. Solving real-world problems through innovative robotics and AI solutions.",
    url: "https://sketchrobotics.in",
    mainEntity: {
      "@type": "Organization",
      name: "Sketch Robotics",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://sketchrobotics.in",
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function SolutionsPageJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Solutions - Sketch Robotics",
    description:
      "Explore our robotics and AI solutions including ROS 2 autonomy, embedded systems, edge intelligence, and real-time control systems.",
    url: "https://sketchrobotics.in/solutions",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "Service",
          position: 1,
          name: "Robotics & Automation",
          description:
            "ROS 2–based autonomy framework enabling real-time robotic operation, including advanced perception, 2D & 3D LiDAR SLAM, multi-sensor fusion, computer vision pipelines, embedded actuator control, precision motion control, trajectory execution, and global & local path planning.",
          provider: {
            "@type": "Organization",
            name: "Sketch Robotics",
          },
        },
        {
          "@type": "Service",
          position: 2,
          name: "AI & Intelligent Systems",
          description:
            "Application of artificial intelligence for perception, decision-making, and autonomy, enabling robotic systems to adapt, learn, and operate reliably in dynamic, real-world environments.",
          provider: {
            "@type": "Organization",
            name: "Sketch Robotics",
          },
        },
        {
          "@type": "Service",
          position: 3,
          name: "Embedded & Real-Time Control Systems",
          description:
            "Design and implementation of real-time embedded software for motor drives, sensors, and safety-critical subsystems.",
          provider: {
            "@type": "Organization",
            name: "Sketch Robotics",
          },
        },
        {
          "@type": "Service",
          position: 4,
          name: "Real-Time Edge Intelligence & Compute Acceleration",
          description:
            "Deployment and optimization of AI models on edge computing platforms for real-time perception and decision-making.",
          provider: {
            "@type": "Organization",
            name: "Sketch Robotics",
          },
        },
      ],
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://sketchrobotics.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Solutions",
          item: "https://sketchrobotics.in/solutions",
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function TeamPageJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Our Team - Sketch Robotics",
    description:
      "Meet the team behind Sketch Robotics. Founded by WorldSkills rankers and CUSAT alumni passionate about robotics and AI.",
    url: "https://sketchrobotics.in/team",
    mainEntity: {
      "@type": "Organization",
      name: "Sketch Robotics",
      member: [
        {
          "@type": "Person",
          name: "Muhammed Faisal P K",
          jobTitle: "CEO",
          description:
            "5+ years in robotics & automation. 1st place IndiaSkills 2022, 4th place WorldSkills (Mobile Robotics). Experience with Samsung Electronics.",
          sameAs: "https://www.linkedin.com/in/muhammed-faisal-p-k-183376259/",
        },
        {
          "@type": "Person",
          name: "Romal Josbin",
          jobTitle: "COO",
          description:
            "Project management & team leadership. Led Team Tarusa CUSAT (All India Rank 1, HBAJA). Managed Team Horizon (ERC 2024, World Rank 18).",
          sameAs: "https://www.linkedin.com/in/romal-josbin/",
        },
        {
          "@type": "Person",
          name: "Muhammed Siyad P",
          jobTitle: "Co-Founder",
          description:
            "Robotics Software Engineer. Expertise in control systems & autonomous navigation. 4th place WorldSkills 2022. Research at IISc Bangalore.",
          sameAs: "https://www.linkedin.com/in/muhammedsiyadp/",
        },
      ],
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://sketchrobotics.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Team",
          item: "https://sketchrobotics.in/team",
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function CareersPageJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Careers - Sketch Robotics",
    description:
      "Join Sketch Robotics. Open positions in robotics engineering, embedded systems, and marketing. Remote and Kochi-based opportunities.",
    url: "https://sketchrobotics.in/careers",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "JobPosting",
          position: 1,
          title: "Robotics Hardware Engineer",
          description:
            "Design and develop robust robotic hardware systems that power intelligent automation solutions.",
          employmentType: "FULL_TIME",
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kochi",
              addressRegion: "Kerala",
              addressCountry: "IN",
            },
          },
          jobLocationType: "TELECOMMUTE",
          hiringOrganization: {
            "@type": "Organization",
            name: "Sketch Robotics",
            sameAs: "https://sketchrobotics.in",
            logo: "https://sketchrobotics.in/images/colored-logo.png",
          },
          datePosted: "2025-01-01",
          validThrough: "2026-12-31",
        },
        {
          "@type": "JobPosting",
          position: 2,
          title: "Robotics Software Engineer",
          description:
            "Develop and optimize software architecture for autonomous systems, control algorithms, and robotics applications.",
          employmentType: "FULL_TIME",
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kochi",
              addressRegion: "Kerala",
              addressCountry: "IN",
            },
          },
          jobLocationType: "TELECOMMUTE",
          hiringOrganization: {
            "@type": "Organization",
            name: "Sketch Robotics",
            sameAs: "https://sketchrobotics.in",
            logo: "https://sketchrobotics.in/images/colored-logo.png",
          },
          datePosted: "2025-01-01",
          validThrough: "2026-12-31",
        },
        {
          "@type": "JobPosting",
          position: 3,
          title: "Mechanical Engineer (Robotics)",
          description:
            "Lead the mechanical design and prototyping of various mechanical systems.",
          employmentType: "FULL_TIME",
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kochi",
              addressRegion: "Kerala",
              addressCountry: "IN",
            },
          },
          jobLocationType: "TELECOMMUTE",
          hiringOrganization: {
            "@type": "Organization",
            name: "Sketch Robotics",
            sameAs: "https://sketchrobotics.in",
            logo: "https://sketchrobotics.in/images/colored-logo.png",
          },
          datePosted: "2025-01-01",
          validThrough: "2026-12-31",
        },
        {
          "@type": "JobPosting",
          position: 4,
          title: "Media and Marketing Specialist",
          description:
            "Drive brand growth by creating and executing marketing campaigns, managing social media, and coordinating outreach efforts.",
          employmentType: "FULL_TIME",
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kochi",
              addressRegion: "Kerala",
              addressCountry: "IN",
            },
          },
          jobLocationType: "TELECOMMUTE",
          hiringOrganization: {
            "@type": "Organization",
            name: "Sketch Robotics",
            sameAs: "https://sketchrobotics.in",
            logo: "https://sketchrobotics.in/images/colored-logo.png",
          },
          datePosted: "2025-01-01",
          validThrough: "2026-12-31",
        },
      ],
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://sketchrobotics.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Careers",
          item: "https://sketchrobotics.in/careers",
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function FAQJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Sketch Robotics?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sketch Robotics is an innovative robotics and AI company founded by a team from CUSAT (Cochin University of Science and Technology). We specialize in robotics & automation, AI & intelligent systems, embedded & real-time control systems, and edge intelligence. Our mission embodies the 'Make in India' spirit, solving real-world problems through cutting-edge robotics solutions.",
        },
      },
      {
        "@type": "Question",
        name: "What services does Sketch Robotics offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sketch Robotics offers four core services: (1) Robotics & Automation - ROS 2-based autonomy with LiDAR SLAM, multi-sensor fusion, and path planning; (2) AI & Intelligent Systems - AI for perception, decision-making, and autonomy; (3) Embedded & Real-Time Control Systems - real-time embedded software for motor drives and safety-critical subsystems; (4) Real-Time Edge Intelligence - AI model optimization on edge computing platforms.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Sketch Robotics located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sketch Robotics is based in Kochi, Kerala, India. We also offer remote work opportunities for many of our positions.",
        },
      },
      {
        "@type": "Question",
        name: "Who founded Sketch Robotics?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sketch Robotics was founded by Muhammed Faisal P K (CEO), Romal Josbin (COO), and Muhammed Siyad P (Co-Founder). The team includes WorldSkills global rankers, European Rover Challenge contributors, and experienced robotics engineers from institutions like IISc Bangalore and Samsung Electronics.",
        },
      },
      {
        "@type": "Question",
        name: "How can I join Sketch Robotics?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can explore current openings on our Careers page at sketchrobotics.in/careers. We have positions for Robotics Hardware Engineers, Robotics Software Engineers, Mechanical Engineers, and Media & Marketing Specialists. Both remote and Kochi-based opportunities are available.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
