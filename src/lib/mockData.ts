export const requests = [
  { id: "R-1042", type: "Food Shortage", location: "Ward 5, Patna", priority: "High", status: "Pending", people: 120, time: "5 min ago" },
  { id: "R-1041", type: "Medical Aid", location: "Flood Zone A, Bihar", priority: "Critical", status: "In Progress", people: 45, time: "12 min ago" },
  { id: "R-1040", type: "Shelter", location: "Sector 9, Lucknow", priority: "High", status: "Assigned", people: 80, time: "27 min ago" },
  { id: "R-1039", type: "Blood Donation", location: "Hospital Road, Delhi", priority: "Medium", status: "Pending", people: 6, time: "1 hr ago" },
  { id: "R-1038", type: "Drinking Water", location: "Ward 12, Chennai", priority: "High", status: "Completed", people: 200, time: "2 hr ago" },
  { id: "R-1037", type: "Clothing & Supplies", location: "Slum Area, Mumbai", priority: "Medium", status: "In Progress", people: 60, time: "3 hr ago" },
  { id: "R-1036", type: "Education Kits", location: "Village Rampur, UP", priority: "Low", status: "Completed", people: 35, time: "5 hr ago" },
];

export const volunteers = [
  { name: "Priya Sharma", skill: "Medical / First Aid", distance: "1.2 km", availability: "Available now", rating: 4.9, tasks: 47 },
  { name: "Rahul Verma", skill: "Logistics & Transport", distance: "2.4 km", availability: "Available now", rating: 4.8, tasks: 62 },
  { name: "Anjali Mehta", skill: "Food Distribution", distance: "3.1 km", availability: "In 30 min", rating: 4.9, tasks: 38 },
  { name: "Vikram Singh", skill: "Search & Rescue", distance: "4.0 km", availability: "Available now", rating: 5.0, tasks: 89 },
  { name: "Sneha Iyer", skill: "Counseling", distance: "5.6 km", availability: "In 1 hr", rating: 4.7, tasks: 24 },
];

export const alerts = [
  { title: "Critical: Medical aid request", location: "Flood Zone A", time: "2m ago", level: "critical" },
  { title: "High volume: Food shortage", location: "Ward 5, Patna", time: "8m ago", level: "high" },
  { title: "New volunteer onboarded", location: "Lucknow Region", time: "22m ago", level: "info" },
  { title: "Task completed", location: "Ward 12, Chennai", time: "1h ago", level: "success" },
];

export const weeklyData = [
  { day: "Mon", requests: 45, completed: 38 },
  { day: "Tue", requests: 62, completed: 51 },
  { day: "Wed", requests: 78, completed: 70 },
  { day: "Thu", requests: 54, completed: 49 },
  { day: "Fri", requests: 89, completed: 76 },
  { day: "Sat", requests: 95, completed: 84 },
  { day: "Sun", requests: 71, completed: 68 },
];

export const categoryData = [
  { name: "Food", value: 320, color: "hsl(221 83% 53%)" },
  { name: "Medical", value: 240, color: "hsl(0 84% 60%)" },
  { name: "Shelter", value: 180, color: "hsl(160 84% 39%)" },
  { name: "Water", value: 140, color: "hsl(199 89% 48%)" },
  { name: "Other", value: 90, color: "hsl(38 92% 50%)" },
];

export const responseTrend = [
  { week: "W1", time: 48 },
  { week: "W2", time: 42 },
  { week: "W3", time: 36 },
  { week: "W4", time: 31 },
  { week: "W5", time: 28 },
  { week: "W6", time: 24 },
];
