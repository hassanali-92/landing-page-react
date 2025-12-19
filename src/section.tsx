export const Section = ({
  title,
  children,
}: {
  title: string;
  children: any;
}) => (
  <>
    <h1 className="mt-14 text-4xl font-extrabold text-white text-center mb-8">
      {title}
      <span className="block w-24 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></span>
    </h1>

    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {children}
    </div>
  </>
);
