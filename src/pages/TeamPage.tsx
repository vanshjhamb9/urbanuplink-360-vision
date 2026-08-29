import { Linkedin, Mail, Rocket, Handshake, Lightbulb } from "lucide-react";
import FloatingDemo from "@/components/FloatingDemo";
import { GlowButton } from "@/components/ui-custom/GlowButton";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { PageLayout } from "@/components/layout/PageLayout";

const team = [
  {
    name: "Jay Patel",
    role: "Chief Marketing Officer",
    experience: "6 years",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
    bio: "Marketing strategist with expertise in automotive tech and digital transformation.",
  },
  {
    name: "Jayshree Kumar",
    role: "Head of Advertising & Growth",
    experience: "5 years",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces",
    bio: "Growth expert specializing in performance marketing and brand strategy.",
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    experience: "8 years",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces",
    bio: "AI and computer vision specialist building imaging solutions at scale.",
  },
  {
    name: "Sarah Williams",
    role: "VP of Product",
    experience: "7 years",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop&crop=faces",
    bio: "Product leader focused on automotive industry workflows and dealer outcomes.",
  },
  {
    name: "David Kumar",
    role: "Head of Customer Success",
    experience: "6 years",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces",
    bio: "Customer success champion helping clients maximize platform value.",
  },
  {
    name: "Emily Rodriguez",
    role: "Chief Design Officer",
    experience: "5 years",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces",
    bio: "Designer creating intuitive experiences for complex automotive technology.",
  },
];

const values = [
  {
    icon: Rocket,
    title: "Innovation first",
    description:
      "We push boundaries to deliver imaging tools that transform how vehicles are presented online.",
  },
  {
    icon: Handshake,
    title: "Customer success",
    description:
      "Your outcomes drive our roadmap — from capture quality to listing performance.",
  },
  {
    icon: Lightbulb,
    title: "Simplicity",
    description:
      "Powerful technology should feel effortless for dealers, operators, and marketing teams.",
  },
];

const TeamPage = () => {
  return (
    <PageLayout>
      <section className="relative overflow-hidden page-hero-band">
        <div className="pointer-events-none absolute inset-0 section-glow" />
        <div className="page-container">
          <SectionHeading
            eyebrow="Our Team"
            size="page"
            title={
              <>
                Meet the minds behind{" "}
                <span className="text-brand-lime">Urban Uplink.</span>
              </>
            }
            description="Innovators, designers, and automotive technology experts dedicated to elevating every vehicle listing."
          />
        </div>
      </section>

      <section className="section-shell border-b border-white/8">
        <div className="page-container-wide">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {team.map((member) => (
              <article
                key={member.name}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-brand-lime/30"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                    <a
                      href="mailto:hello@urbanuplink.com"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-brand-black/80 text-white backdrop-blur hover:border-brand-lime/40"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                    <span
                      className="flex h-9 w-9 cursor-default items-center justify-center rounded-full border border-white/20 bg-brand-black/80 text-white/40 backdrop-blur"
                      aria-hidden="true"
                    >
                      <Linkedin className="h-4 w-4" />
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-extrabold text-white">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-brand-lime">{member.role}</p>
                  <p className="text-xs text-white/45">{member.experience} experience</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell border-b border-white/8">
        <div className="page-container">
          <SectionHeading
            title="Our values"
            description="The principles that guide everything we build."
          />
          <div className="section-body grid gap-4 md:grid-cols-3 md:gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-brand-lime/25 bg-brand-lime/10">
                  <Icon className="h-5 w-5 text-brand-lime" />
                </span>
                <h3 className="mt-4 font-heading text-base font-extrabold text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-compact">
        <div className="page-container">
          <div className="rounded-2xl border border-brand-lime/20 bg-brand-lime/[0.06] p-6 text-center md:p-10">
            <h2 className="font-heading text-2xl font-extrabold text-white md:text-3xl">
              Join our team
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-brand md:text-base">
              We&apos;re always looking for talented people who share our passion for
              automotive innovation.
            </p>
            <div className="mt-6 flex justify-center">
              <GlowButton href="mailto:careers@urbanuplink.com" variant="filled">
                View Open Positions
              </GlowButton>
            </div>
          </div>
        </div>
      </section>

      <FloatingDemo />
    </PageLayout>
  );
};

export default TeamPage;
