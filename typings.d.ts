import Image from "next/image";

interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}
export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
interface Image {
  _type: "image";
  assets: {
    _ref: string;
    _type: "reference";
  };
}
export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  email: string;
  heroImageD: Image;
  heroImageL: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
  role: string;
  socials: Social;
  backgroundInformation: string;
  address: string;
}
export interface Technolgy extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}
export interface SkillDef extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}
export interface Project extends SanityBody {
  _type: "projects";
  image: Image;
  summary: string;
  technologies: Technolgy[];
  title: string;
  linkToBuild: string;
}
export interface Experience extends SanityBody {
  _type: "experience";
  companyImage: Image;
  dateEnded: Date;
  dateStarted: Date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technolgy[];
}
