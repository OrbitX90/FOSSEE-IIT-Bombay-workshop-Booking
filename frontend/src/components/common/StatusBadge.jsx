export default function StatusBadge({ status }) {
  const stylesObj = {
    pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
    confirmed: "bg-green-100 text-green-800 border-green-200",
    rejected: "bg-red-100 text-red-800 border-red-200",
    upcoming: "bg-blue-100 text-blue-800 border-blue-200",
    completed: "bg-gray-100 text-gray-800 border-gray-200"
  };

  const displayStatus = status.toLowerCase();
  const currentStyle = stylesObj[displayStatus] || "bg-gray-100 text-gray-800 border-gray-200";

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${currentStyle}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}
