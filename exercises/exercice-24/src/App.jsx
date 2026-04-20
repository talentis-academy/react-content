import Sidebar from './components/Sidebar';
import StatCard from './components/StatCard';
import ActivityRow from './components/ActivityRow';

const stats = [
  { title: 'Total Users', value: '12,438', change: 12, icon: '👥', color: 'bg-blue-50 text-blue-600' },
  { title: 'Revenue', value: '$48,295', change: 8, icon: '💰', color: 'bg-green-50 text-green-600' },
  { title: 'Orders', value: '3,721', change: -3, icon: '📦', color: 'bg-orange-50 text-orange-600' },
  { title: 'Conversion', value: '4.6%', change: 2, icon: '📈', color: 'bg-purple-50 text-purple-600' },
];

const activities = [
  { user: 'Alice M.', action: 'Placed a new order #1042', time: '2m ago', avatar: 'A' },
  { user: 'Bob K.', action: 'Signed up as a new user', time: '15m ago', avatar: 'B' },
  { user: 'Carol T.', action: 'Updated billing information', time: '1h ago', avatar: 'C' },
  { user: 'David R.', action: 'Submitted support ticket #87', time: '3h ago', avatar: 'D' },
  { user: 'Eva S.', action: 'Completed onboarding flow', time: '5h ago', avatar: 'E' },
];

export default function App() {
  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      <Sidebar />
      <main className="flex-1 overflow-auto p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
          <p className="text-sm text-gray-500 mt-1">Welcome back! Here's what's happening.</p>
        </div>

        <div className="grid grid-cols-2 gap-5 mb-8 xl:grid-cols-4">
          {stats.map(s => <StatCard key={s.title} {...s} />)}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Recent Activity</h3>
          {activities.map(a => <ActivityRow key={a.user} {...a} />)}
        </div>
      </main>
    </div>
  );
}
