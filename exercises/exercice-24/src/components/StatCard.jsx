export default function StatCard({ title, value, change, icon, color }) {
  const isPositive = change >= 0;
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-500">{title}</span>
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg ${color}`}>
          {icon}
        </div>
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-500'}`}>
        {isPositive ? '↑' : '↓'} {Math.abs(change)}% vs last month
      </p>
    </div>
  );
}
