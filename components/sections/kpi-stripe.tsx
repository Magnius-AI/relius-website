export function KpiStripe() {
  const metrics = [
    { value: "10+", label: "Hours Saved Per Week" },
    { value: "3x", label: "Faster Event Planning" },
    { value: "40%", label: "Higher Engagement" },
    { value: "25%", label: "Better Donor Retention" },
  ];

  return (
    <section className="relative overflow-hidden py-12 px-6 lg:px-8 bg-gradient-to-br from-primary-50/30 via-white to-accent-50/30">
      <div className="absolute inset-0 bg-pattern-dots opacity-20" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="rounded-xl border border-slate-200 bg-white px-5 py-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">{metric.value}</div>
              <div className="mt-2 text-sm text-slate-600">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
