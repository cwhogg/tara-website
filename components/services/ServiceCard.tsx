import { Service } from '@/lib/types';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-cream-50 rounded-xl border border-cream-300 p-8 hover:shadow-lg hover:border-primary-200 transition-all duration-300">
      <h3 className="text-2xl font-serif text-text-primary mb-4">{service.title}</h3>
      <p className="text-text-muted mb-6 leading-relaxed">{service.description}</p>
      <ul className="space-y-3">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-text-secondary">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
