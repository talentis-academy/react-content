const navItems = [
  { icon: '📊', label: 'Dashboard', active: true },
  { icon: '👥', label: 'Users' },
  { icon: '📦', label: 'Products' },
  { icon: '💰', label: 'Revenue' },
  { icon: '⚙️', label: 'Settings' },
];

export default function Sidebar() {
  return (
    <aside className="w-56 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-5 border-b border-gray-200">
        <h1 className="text-lg font-bold text-indigo-600">AdminPro</h1>
      </div>
      <nav className="flex-1 p-3 flex flex-col gap-1">
        {navItems.map(item => (
          <button
            key={item.label}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium w-full text-left transition-colors
              ${item.active
                ? 'bg-indigo-50 text-indigo-700'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
          >
            <span>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
