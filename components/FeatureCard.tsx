interface Props {
  title: string;
  description: string;
}

export default function FeatureCard({ title, description }: Props) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm">
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-4 text-gray-600">{description}</p>
    </div>
  );
}
