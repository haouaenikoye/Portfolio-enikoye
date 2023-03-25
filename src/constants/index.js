import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  carrent,
  jobit,
  tripguide,
  threejs,
  africaycone,
  codeloccol,
  ismaeland,
  flutter,
  firebase,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "A propos",
  },
  {
    id: "work",
    title: "Travail",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "flutter",
    icon: mobile,
  },
  {
    title: "Backend Dev",
    icon: backend,
  },
  {
    title: "Créatrice de contenue",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
 
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "flutter",
    icon: flutter,
  },
  
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Développeuse en freelance",
    company_name: "Ismaeland",
    icon: ismaeland,
    iconBg: "#3633D6",
    date: "Mars 2021- Nov 2022",
    points: [
      "Développer et maintenir des applications Web à l'aide de chart et python -django et d'autres technologies connexes.",
      "Collaborer avec des équipes interfonctionnelles comprenant des concepteurs, des chefs de produit et d'autres développeurs pour créer des produits de haute qualité.",
      "Mettre en œuvre une conception réactive et assurer la compatibilité entre les navigateurs.",
      "Participer aux revues de code et fournir des commentaires constructifs aux autres développeurs.",
    ],
  },
  {
    title: "Community manager et design",
    company_name: "Africaycone",
    icon: africaycone,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Créer des contenus",
      "Collaborer avec des équipes interfonctionnelles comprenant des concepteurs, des chefs de produit et d'autres développeurs pour créer des produits de haute qualité.",
      "Mettre en œuvre une conception réactive et assurer la compatibilité entre les navigateurs.",
      "Participer aux revues de code et fournir des commentaires constructifs aux autres développeurs.",
    ],
  },
  {
    title: "Chargée des admissions et tâches administratives",
    company_name: "codeloccol",
    icon: codeloccol,
    iconBg: "#383E56",
    date: "Jan 2021 - Fev 2023",
    points: [
      "Créer des contenus ",
      "Suivie des étudiants",
      "Collaborer avec des équipes interfonctionnelles comprenant des concepteurs, des chefs de produit et d'autres développeurs pour créer des produits de haute qualité.",
      "Mettre en œuvre une conception réactive et assurer la compatibilité entre les navigateurs.",
      "Participer aux revues de code et fournir des commentaires constructifs aux autres développeurs."
    ],
  },
  {
    title: "Flutter dev",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Fev 2023 - Present",
    points: [
      "Créer des interfaces ",
      "Collaborer avec des équipes interfonctionnelles comprenant des concepteurs, des chefs de produit et d'autres développeurs pour créer des produits de haute qualité.",
      "Mettre en œuvre une conception réactive et assurer la compatibilité entre les navigateurs.",
      "Participer aux revues de code et fournir des commentaires constructifs aux autres développeurs."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Je pensais qu'il était impossible de créer un site Web aussi beau que notre produit, mais Enikoye m'a prouvé le contraire..",
    name: "Hassiatou Daouda",
    designation: "CFO",
    company: "Ramas'Jus",
    image: "https://media.licdn.com/dms/image/D4D03AQEYtyv0CcCWUQ/profile-displayphoto-shrink_800_800/0/1672913534185?e=2147483647&v=beta&t=bg9pS8FK_vrOgN8x_BqIGDKXHxRu6JHPw0FkeM_Ml1Q",
  },
  {
    testimonial:
      "Je n'ai jamais rencontré une développeuse  qui se soucie vraiment du succès de ses clients comme le fait Enikoye.",
    name: "Rabiou Abode",
    designation: "Country Manager Niger",
    company: "SLI AFRIKA",
    image: "https://media.licdn.com/dms/image/C4E03AQEdaVDUr0VFHg/profile-displayphoto-shrink_800_800/0/1650750778162?e=2147483647&v=beta&t=FM0pS9br8yewzh09vj8ZnjGKA56j-83KNUb4UogFN1I",
  },
  {
    testimonial:
      "Après que Enikoye ait optimisé notre site Web, notre trafic a augmenté de 50 %. Nous ne les remercierons jamais assez !",
    name: " Richouf",
    designation: "Developpeur",
    company: "Codeloccol ",
    image: "https://pbs.twimg.com/media/FoSqE4QXgAAOhom?format=jpg&name=360x360",
  },
];

const projects = [
  {
    name: "Location de voiture",
    description:
    "Plate-forme Web qui permet aux utilisateurs de rechercher, réserver et gérer des locations de voitures auprès de divers fournisseurs, offrant une solution pratique et efficace pour les besoins de transport.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/https://haouaenikoye.github.io/Barbershop/",
    
  },
  {
    name: "Emploi",
    description:
    "Application Web qui permet aux utilisateurs de rechercher des offres d'emploi, d'afficher les échelles de salaire estimées pour les postes et de localiser les emplois disponibles en fonction de leur emplacement actuel.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Guide de voyage",
    description:
      "Une plate-forme complète de réservation de voyages qui permet aux utilisateurs de réserver des vols, des hôtels et des voitures de location, et propose des recommandations organisées pour les destinations populaires.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "flutter",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
