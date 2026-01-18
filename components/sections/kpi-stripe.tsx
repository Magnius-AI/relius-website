export function KpiStripe() {
  const metrics = [
    { value: "50-5,000", label: "Built for members" },
    { value: "10+", label: "Hours saved weekly" },
    { value: "Days", label: "To get started" },
    { value: "1", label: "Platform for everything" },
  ];

  return (
    <section className="relative overflow-hidden py-16 px-6 lg:px-8 bg-slate-50">
      <div className="absolute inset-0 bg-pattern-dots opacity-5" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary-600">{metric.value}</div>
              <div className="mt-2 text-sm text-slate-600 font-medium">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
