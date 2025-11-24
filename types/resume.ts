export interface ResumeData {
  header: {
    name: string;
    title: string;
    subTitle: string;
    contact: {
      location: string;
      email: string;
      phone: string;
      github: string;
    };
  };
  summary: string;
  experience: Array<{
    company: string;
    location?: string;
    startDate?: string;
    endDate?: string | null;
    role?: string;
    logoText?: string;
    logo?: string;
    description: string;
  }>;
  education: Array<{
    date: string;
    degree: string;
    institution: string;
    level?: string;
  }>;
  skills: Array<{
    category: string;
    items: string[];
  }>;
  languages: Array<{
    name: string;
    level: string;
  }>;
  certifications: Array<{
    date: string;
    title: string;
  }>;
  footerNote: string;
  labels: {
    experience: string;
    education: string;
    skills: string;
    languages: string;
    certifications: string;
  };
}
