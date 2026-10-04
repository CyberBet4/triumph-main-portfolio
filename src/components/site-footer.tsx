import Link from "next/link";
import { Container } from "@/components/container";
import { Caption, Meta } from "@/components/typography";
import { siteConfig } from "@/lib/site";

const contact = [
  { label: "Email", href: siteConfig.links.mail },
  { label: "LinkedIn", href: siteConfig.links.linkedin },
  { label: "GitHub", href: siteConfig.links.github },
];

export function SiteFooter() {
  return (
    <footer className="border-t py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xs">
            <span className="font-mono text-caption font-medium uppercase tracking-[0.14em] text-foreground">
              Triumph&nbsp;Anazia
            </span>
            <p className="mt-3 font-mono text-caption text-muted-foreground">
              {siteConfig.role}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 sm:gap-16">
            <FooterGroup title="Navigation">
              {siteConfig.nav.map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </FooterGroup>

            <FooterGroup title="Contact">
              {contact.map((item) => (
                <FooterLink key={item.label} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </FooterGroup>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Caption>
            © {new Date().getFullYear()} {siteConfig.name}
          </Caption>
          <Meta>Designed and built with intent.</Meta>
        </div>
      </Container>
    </footer>
  );
}

function FooterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Caption className="uppercase tracking-[0.14em]">{title}</Caption>
      <div className="mt-4 flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="font-mono text-meta text-muted-foreground transition-colors hover:text-foreground"
    >
      {children}
    </Link>
  );
}
