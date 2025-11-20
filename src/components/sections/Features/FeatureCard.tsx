interface FeatureCardProps {
  title: string;
  desc: string;
  icon: string;
}

export default function FeatureCard({ title, desc, icon }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md px-6 py-8 border border-concrete hover:shadow-lg transition">
      <div className="flex items-center mb-6">
        <div className="h-12 w-12 bg-brand-accent/20 rounded-md flex items-center justify-center">
          <img src={icon} className="h-6 w-6" alt="" />
        </div>
      </div>
      <h3 className="font-semibold text-lg text-graphite mb-2">{title}</h3>
      <p className="text-steel text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
