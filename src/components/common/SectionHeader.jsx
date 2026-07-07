const SectionHeader = ({
  badge,
  title,
  description,
  center = true,
}) => {
  return (
    <div
      className={`mb-12 ${
        center ? "text-center" : "text-left"
      }`}
    >
      <span className="inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
        {badge}
      </span>

      <h2 className="mt-5 text-4xl font-bold md:text-5xl">
        {title}
      </h2>

      <p
        className={`mt-4 max-w-2xl text-gray-400 ${
          center ? "mx-auto" : ""
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;