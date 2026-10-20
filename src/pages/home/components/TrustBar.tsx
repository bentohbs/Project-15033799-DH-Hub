const trustPoints = [
  { icon: "ri-shield-check-line", label: "Licensed agency since 2020" },
  { icon: "ri-user-star-line", label: "100% background-screened helpers" },
  { icon: "ri-refresh-line", label: "Free replacement guarantee" },
  { icon: "ri-customer-service-2-line", label: "Dedicated care after placement" },
];

export default function TrustBar() {
  return (
    <section className="bg-secondary-100 border-y border-secondary-200/70">
      <div className="px-4 md:px-8 py-5 md:py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:gap-x-14">
          {trustPoints.map((point) => (
            <div key={point.label} className="flex items-center gap-2.5">
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-secondary-500/15 text-secondary-700">
                <i className={`${point.icon} text-base`}></i>
              </span>
              <span className="text-xs md:text-sm font-medium text-secondary-900 whitespace-nowrap">{point.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}