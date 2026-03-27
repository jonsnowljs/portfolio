export interface SocialLink {
  platform: string;
  handle: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    handle: "jonsnowljs",
    url: "https://github.com/jonsnowljs",
    icon: "github",
  },
  {
    platform: "LinkedIn",
    handle: "jiashenglujob",
    url: "https://www.linkedin.com/in/jiashenglujob",
    icon: "linkedin",
  },
  {
    platform: "Email",
    handle: "jiasheng.luu@gmail.com",
    url: "mailto:jiasheng.luu@gmail.com",
    icon: "mail",
  },
];

export const resumeUrl =
  "https://raw.githubusercontent.com/jonsnowljs/resume/main/resume.pdf";

export const email = "jiasheng.luu@gmail.com";
