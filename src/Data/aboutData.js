const data = {
  basics: {
    name: 'Sumit Rathod',
    location: {
      city: 'Mumbai',
      country: 'India',
    },
    phone: '+91 8779374948',
    email: 'itzsumitr995@gmail.com',
    profiles: {
      linkedin: 'https://www.linkedin.com/in/sumitr995/',
      github: 'https://github.com/Sumitr995',
      linktree: 'https://linktr.ee/Sumit_995',
    },
  },
  skills: {
    languages: [
      { name: 'JavaScript', icon: '/techstack/javascript-icon.png' },
      { name: 'Python', icon: '/techstack/python-icon.png' },
      { name: 'C++', icon: '/techstack/cpp-icon.png' },
      { name: 'C', icon: '/techstack/c-icon.png' },
    ],
    frontend: [
      { name: 'React.js', icon: '/techstack/react-icon.png' },
      { name: 'Redux', icon: '/techstack/redux-icon.png' },
      { name: 'Tailwind CSS', icon: '/techstack/tailwind-icon.png' },
      { name: 'shadcn UI', icon: '/techstack/shadcn-icon.png' },
    ],
    backend: [
      { name: 'Node.js', icon: '/techstack/nodejs-icon.png' },
      { name: 'Express.js', icon: '/techstack/expressjs-icon.png' },
      { name: 'Flask', icon: '/techstack/flask-icon.png' },
      { name: 'REST APIs', icon: '/techstack/api-icon.png' },
      { name: 'JWT Authentication', icon: '/techstack/jwt-icon.png' },
    ],
    databases: [
      { name: 'MongoDB', icon: '/techstack/mongodb-icon.png' },
      { name: 'PostgreSQL', icon: '/techstack/postgresql-icon.png' },
    ],
    cloudDevOps: [
      { name: 'Google Cloud Platform', icon: '/techstack/gcp-icon.png' },
      { name: 'Docker', icon: '/techstack/docker-icon.png' },
      { name: 'Ansible', icon: '/techstack/ansible-icon.png' },
      { name: 'Nginx', icon: '/techstack/nginx-icon.png' },
      { name: 'Prometheus', icon: '/techstack/prometheus-icon.png' },
    ],
    tools: [
      { name: 'Git', icon: '/techstack/git-icon.png' },
      { name: 'GitHub', icon: '/techstack/github-icon.png' },
      { name: 'Postman', icon: '/techstack/postman-icon.png' },
      { name: 'Jira', icon: '/techstack/jira-icon.png' },
      { name: 'n8n', icon: '/techstack/n8n-icon.png' },
    ],
  },
  achievements: [
    'Team Lead, HackRobo 1.0 — IoT Search & Rescue Bot; secured 9th position out of 37 teams.',
    'AIR 4,967 - AINCAT 2025 (2.1L+ participants).',
    'Naukri Campus Young Turks 2025 (Certified).',
    'AI Meets Signal Processing (MATLAB PDP).',
    'CSI Bootcamp — Machine Learning, Deep Learning, DSP.',
    'Drone Expo 2025 — Defense drones, AI-software integration, surveillance, rescue, smart farming.',
  ],
  education: {
    institution: 'Atharva College of Engineering',
    location: 'Malad West, Mumbai, India',
    degree: 'B.E. in Electronics and Telecommunication Engineering',
    graduationDate: 'May 2027',
  },
}

const uniqueBy = (items, keyFn) => {
  const seen = new Set()
  const result = []

  for (const item of items ?? []) {
    const key = keyFn(item)
    if (!key || seen.has(key)) continue
    seen.add(key)
    result.push(item)
  }

  return result
}

const skills = data?.skills ?? {}
const basics = data?.basics ?? {}
const education = data?.education ?? {}

const displayName = basics?.name ?? 'Sumit'
const locationText = [basics?.location?.city, basics?.location?.country].filter(Boolean).join(', ')

const educationText = [
  education?.institution,
  education?.degree,
  education?.location,
  education?.graduationDate ? `Graduation: ${education.graduationDate}` : null,
]
  .filter(Boolean)
  .join(' • ')

const allTechIcons = uniqueBy(
  [
    ...(skills?.languages ?? []),
    ...(skills?.frontend ?? []),
    ...(skills?.backend ?? []),
    ...(skills?.databases ?? []),
    ...(skills?.cloudDevOps ?? []),
    ...(skills?.tools ?? []),
  ],
  (t) => t?.icon || t?.name
)

const row1 = allTechIcons.filter((_, idx) => idx % 2 === 0)
const row2 = allTechIcons.filter((_, idx) => idx % 2 === 1)

const aboutData = {
  basics: {
    name: displayName,
    email: basics?.email ?? '',
    locationText: locationText || 'Mumbai, India',
    profiles: {
      linkedin: basics?.profiles?.linkedin ?? '',
      github: basics?.profiles?.github ?? '',
      linktree: basics?.profiles?.linktree ?? '',
    },
  },
  education: {
    institution: education?.institution ?? '',
    degree: education?.degree ?? '',
    graduationDate: education?.graduationDate ?? '',
    location: education?.location ?? '',
    educationText,
  },
  highlights: (data?.achievements ?? []).slice(0, 4),
  quickFacts: [
    { label: 'Location', value: locationText || '' },
    { label: 'Education', value: education?.degree ?? '' },
    { label: 'Email', value: basics?.email ?? '' },
    { label: 'Phone', value: basics?.phone ?? '' },
  ].filter((f) => f.value),
  
  tech: {
    row1,
    row2: row2.length ? row2 : row1,
  },
}

export default aboutData
