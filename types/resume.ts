export interface ResumeData {
  header: {
    name: string;
    title: string;
    subTitle: string;
    summary: string;
    contact: {
      location: string;
      email: string;
      phone: string;
      github: string;
      linkedin: string;
    };
  };
  experience: Array<{
    company: string;
    location?: string;
    startDate?: string;
    endDate?: string | null;
    role?: string;
    logoText?: string;
    logo?: string;
    description: string;
    projects?: Array<{
      company: string;
      location?: string;
      startDate?: string;
      endDate?: string | null;
      role?: string;
      logoText?: string;
      logo?: string;
      description: string;
    }>;
  }>;
  education: Array<{
    startDate: string;
    endDate: string | null;
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
  certifications: {
    startDate?: string;
    endDate?: string | null;
    title: string;
  }[];
  footer: {
    note: string;
  };
  labels: {
    experience: string;
    education: string;
    skills: string;
    languages: string;
    certifications: string;
  };
}
