import Container from "../../layout/Container";

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  image: string;
}

export default function Hero({ title, subtitle, ctaText, image }: HeroProps) {
  return (
    <div className="relative w-full min-h-[70vh] flex items-center">
      {/* Background */}
      <img
        src={image}
        className="absolute inset-0 h-full w-full object-cover object-center"
        alt=""
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-graphite/40" />

      {/* Bronze gradient bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-brand-accent/30 to-transparent pointer-events-none" />

      {/* Content */}
      <Container className="relative z-10 pt-32 pb-24">
        <div className="max-w-2xl text-white">
          <h1 className="text-hero font-bold drop-shadow-xl">{title}</h1>
          {subtitle && (
            <p className="mt-6 text-lg leading-relaxed text-white/90">
              {subtitle}
            </p>
          )}
          {ctaText && (
            <button className="mt-8 inline-block bg-brand-accent text-graphite font-semibold px-6 py-3 rounded-sm transition hover:bg-brand-accent/80">
              {ctaText}
            </button>
          )}
        </div>
      </Container>
    </div>
  );
}
