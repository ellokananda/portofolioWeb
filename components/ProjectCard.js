export default function ProjectCard({ title, description, link }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
      <h3 className="text-xl font-semibold text-[#0077b6]">{title}</h3>
      <p className="text-gray-700 mt-2">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-white bg-[#0077b6] px-4 py-2 rounded-lg hover:bg-[#023e8a] transition transform hover:scale-105 duration-300"
        >
          View Documentation
        </a>
      )}
    </div>
  );
}
