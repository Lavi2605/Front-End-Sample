import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Heart, 
  Users, 
  Calendar, 
  FileText, 
  Settings, 
  ChevronRight,
  TrendingUp,
  Award,
  Clock,
  Star,
  Bookmark
} from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const quickActions = [
    { name: 'Make a Donation', icon: Heart, color: 'text-red-500', href: '#donate' },
    { name: 'Join Event', icon: Calendar, color: 'text-blue-500', href: '#events' },
    { name: 'Volunteer', icon: Users, color: 'text-green-500', href: '#volunteer' },
    { name: 'Read Reports', icon: FileText, color: 'text-purple-500', href: '#reports' }
  ];

  const recentActivities = [
    { 
      title: 'New Education Program Launched', 
      time: '2 hours ago', 
      icon: TrendingUp, 
      color: 'bg-green-100 text-green-600' 
    },
    { 
      title: 'Community Health Drive Completed', 
      time: '1 day ago', 
      icon: Award, 
      color: 'bg-blue-100 text-blue-600' 
    },
    { 
      title: 'Volunteer Registration Open', 
      time: '3 days ago', 
      icon: Users, 
      color: 'bg-purple-100 text-purple-600' 
    }
  ];

  const stats = [
    { label: 'Lives Impacted', value: '50,000+', icon: Heart, color: 'text-red-500' },
    { label: 'Active Volunteers', value: '2,500+', icon: Users, color: 'text-blue-500' },
    { label: 'Programs Running', value: '15', icon: TrendingUp, color: 'text-green-500' }
  ];

  const sidebarItems = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'programs', name: 'Programs', icon: TrendingUp },
    { id: 'volunteers', name: 'Volunteers', icon: Users },
    { id: 'events', name: 'Events', icon: Calendar },
    { id: 'reports', name: 'Reports', icon: FileText },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Quick Access</h2>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="p-4">
              <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex-1 flex items-center justify-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeTab === item.id
                        ? 'bg-white dark:bg-gray-700 text-emerald-600 dark:text-emerald-400 shadow-sm'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content based on active tab */}
            <div className="p-4 space-y-6">
              {activeTab === 'dashboard' && (
                <>
                  {/* Quick Actions */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      {quickActions.map((action) => (
                        <motion.a
                          key={action.name}
                          href={action.href}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors duration-200"
                        >
                          <action.icon className={`w-5 h-5 ${action.color}`} />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{action.name}</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Impact Stats</h3>
                    <div className="space-y-3">
                      {stats.map((stat) => (
                        <div key={stat.label} className="flex items-center justify-between p-3 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <stat.icon className={`w-5 h-5 ${stat.color}`} />
                            <span className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</span>
                          </div>
                          <span className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'programs' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Active Programs</h3>
                  <div className="space-y-3">
                    {['Education Initiative', 'Health Outreach', 'Environmental Conservation', 'Community Development'].map((program) => (
                      <div key={program} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{program}</span>
                          <div className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="text-xs text-gray-500">Active</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'volunteers' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Volunteer Hub</h3>
                  <div className="space-y-3">
                    {['Join a Program', 'View Opportunities', 'Training Resources', 'Volunteer Stories'].map((item) => (
                      <motion.a
                        key={item}
                        href="#"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors duration-200"
                      >
                        <Users className="w-5 h-5 text-emerald-500" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'events' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Upcoming Events</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Community Health Fair', date: 'Dec 15', time: '10:00 AM' },
                      { name: 'Education Workshop', date: 'Dec 20', time: '2:00 PM' },
                      { name: 'Volunteer Training', date: 'Dec 25', time: '9:00 AM' }
                    ].map((event) => (
                      <div key={event.name} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{event.name}</p>
                            <p className="text-xs text-gray-500">{event.date} • {event.time}</p>
                          </div>
                          <button className="p-1 text-emerald-500 hover:text-emerald-600">
                            <Bookmark className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'reports' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Reports & Analytics</h3>
                  <div className="space-y-3">
                    {['Annual Impact Report', 'Financial Transparency', 'Program Evaluations', 'Volunteer Metrics'].map((report) => (
                      <motion.a
                        key={report}
                        href="#"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors duration-200"
                      >
                        <FileText className="w-5 h-5 text-emerald-500" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{report}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Settings</h3>
                  <div className="space-y-3">
                    {['Profile Settings', 'Notification Preferences', 'Privacy Settings', 'Account Security'].map((setting) => (
                      <motion.a
                        key={setting}
                        href="#"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors duration-200"
                      >
                        <Settings className="w-5 h-5 text-emerald-500" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{setting}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Recent Activities */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activities</h3>
              <div className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className={`p-2 rounded-full ${activity.color}`}>
                      <activity.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{activity.title}</p>
                      <p className="text-xs text-gray-500 flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{activity.time}</span>
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar; 