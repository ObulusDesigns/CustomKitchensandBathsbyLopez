interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
  variant?: 'timeline' | 'grid';
}

export default function ProcessSteps({ steps, variant = 'grid' }: ProcessStepsProps) {
  if (variant === 'timeline') {
    return (
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gold/30"></div>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-start space-x-6">
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                {step.number}
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-semibold text-burgundy mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <div key={index} className="text-center group">
          <div className="relative inline-block mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-burgundy to-burgundy-dark rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold text-white">{step.number}</span>
            </div>
            <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl group-hover:bg-gold/30 transition-colors duration-300"></div>
          </div>
          <h3 className="text-xl font-semibold text-burgundy mb-3 group-hover:text-gold transition-colors duration-300">
            {step.title}
          </h3>
          <p className="text-gray-600">{step.description}</p>
        </div>
      ))}
    </div>
  );
}