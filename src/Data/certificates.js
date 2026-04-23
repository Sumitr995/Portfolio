const certificates = [
  {
  "id": "gdgc-web-team-recognition-2025",
  "title": "Certificate of Recognition — Web Team",
  "issuer": "Google Developer Groups On Campus (GDGC – Atharva College of Engineering)",
  "issued": "2025",
  "cover": {
    "src": "/Certificate/gdgc-web.png",
    "alt": "GDGC Web Team Certificate"
  },
  "description": "Awarded for contributions as a Web Team member in GDGC ACE during the academic year 2024–2025.",
  "credentialUrl": "",
  "verifyUrl": "",
  "linkedinPostUrl": "",
  "skills": [
    "Web Development",
    "Team Collaboration",
    "Event Management",
    "UI/UX",
    "Community Building"
  ],
  "note": "Add credential or LinkedIn post URL if available.",
  "highlights": [
    "Contributed to Pixel Designathon (UI/UX hackathon for 20+ teams)",
    "Worked on event website development, sponsorship outreach, and marketing",
    "Participated in organizing workshops, seminars, and technical sessions",
    "Part of Web Team awarded 'Best Team of the Year'"
  ],
  "whatILearned": [
    "Real-world web development workflows in a team environment",
    "Coordination between development, design, and outreach teams",
    "Importance of developer communities and collaboration",
    "Hands-on experience in event-based tech execution"
  ]
},
  {
    id: 'nptel-iot',
    title: 'NPTEL — Internet of Things',
    featured: false,
    issuer: 'NPTEL',
    issued: 'Dec 2025',
    cover: {
      src: '/thumbnail/portfolio.png',
      alt: 'Certificate preview image',
    },
    description: 'Coursework + assessments covering IoT systems and protocols.',
    credentialUrl: 'https://nptel.ac.in/',
    verifyUrl: 'https://nptel.ac.in/',
    linkedinPostUrl: '',
    skills: ['IoT', 'Networking', 'Embedded'],
    note: 'Prototype data — replace with your actual NPTEL certificate/verification URL.',
    highlights: ['IoT architecture and protocols', 'Sensors, data flow, and connectivity'],
    whatILearned: [
      'Device → gateway → cloud data flow patterns and tradeoffs.',
      'Common protocol choices and when they fit (high-level overview).',
    ],
  },
  {
    id: 'aws-cloud-essentials',
    title: 'AWS — Cloud Essentials',
    featured: true,
    issuer: 'AWS',
    issued: 'Aug 2025',
    cover: {
      src: '/thumbnail/Auth-App.png',
      alt: 'Certificate preview image',
    },
    description: 'Intro to AWS core services and cloud concepts.',
    credentialUrl: 'https://aws.amazon.com/training/',
    verifyUrl: 'https://aws.amazon.com/verification',
    linkedinPostUrl: '',
    skills: ['AWS', 'Cloud', 'Compute'],
    note: 'Prototype data — replace with your certificate/verification URLs.',
    highlights: ['Core AWS services overview', 'Cloud basics: compute, storage, networking'],
    whatILearned: [
      'How to think in services (compute/storage/network) rather than servers.',
      'High-level cost and scaling basics (pay-as-you-go, elasticity).',
    ],
  },
  {
    id: 'hackerrank-js',
    title: 'HackerRank — JavaScript (Intermediate)',
    featured: false,
    issuer: 'HackerRank',
    issued: 'Jun 2025',
    cover: {
      src: '/thumbnail/ticket-system.png',
      alt: 'Certificate preview image',
    },
    description: 'Validated language fundamentals and common coding patterns.',
    credentialUrl: 'https://www.hackerrank.com/certificates',
    verifyUrl: 'https://www.hackerrank.com/',
    linkedinPostUrl: '',
    skills: ['JavaScript', 'Problem Solving'],
    note: 'Prototype data — paste your unique certificate link here.',
    highlights: ['Language fundamentals', 'Intermediate problem-solving patterns'],
    whatILearned: [
      'Writing predictable JS with clear data transformations.',
      'Edge-case thinking and input validation patterns.',
    ],
  },
]

export default certificates
