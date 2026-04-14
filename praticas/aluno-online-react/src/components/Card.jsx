function Card({ title, children }) {
  return (
    <div className="bg-gray-100 border border-gray-300 rounded-lg">
      <div className="bg-gray-300 px-4 py-2 font-semibold rounded-t-lg">
        {title}
      </div>

      <div className="p-4 text-gray-700 space-y-2">{children}</div>
    </div>
  );
}

export default Card;
