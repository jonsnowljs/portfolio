import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "@/data/social";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

const navLinks = [
  { label: "About",    href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills" },
  { label: "Contact",  href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 font-mono text-sm font-semibold text-foreground">
            <span className="flex h-6 w-6 items-center justify-center rounded border border-border bg-foreground text-background text-[10px] font-bold">
              JL
            </span>
            Jiasheng Lu
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-0.5">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target={link.url.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                  className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
                >
                  {Icon && <Icon size={14} />}
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {year} Jiasheng Lu. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
