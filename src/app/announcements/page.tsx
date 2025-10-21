"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const announcements = [
  {
    title: "Sunday Worship Service",
    date: "October 20, 2025",
    description:
      "Join us for worship and fellowship this Sunday at 10:00 AM. In-person and online via livestream.",
  },
  {
    title: "Community Outreach",
    date: "October 25, 2025",
    description:
      "We’ll be distributing food and clothing to families in need. Volunteers are welcome!",
  },
  {
    title: "Bible Study Wednesday",
    date: "October 22, 2025",
    description:
      "Dive deeper into God’s Word every Wednesday at 7:00 PM. Everyone is welcome.",
  },
];

export default function AnnouncementsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-black to-gray-900 text-white px-6 py-12">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gold-400 mb-2">
          Church Announcements
        </h1>
        <p className="text-gray-300 text-lg">
          Stay up-to-date with what’s happening at our church.
        </p>
      </motion.div>

      {/* Announcements Section */}
      <div className="grid md:grid-cols-3 gap-8">
        {announcements.map((announcement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <Card className="bg-gray-800 text-white border border-purple-700 hover:shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gold-400">
                  {announcement.title}
                </CardTitle>
                <p className="text-sm text-gray-400">{announcement.date}</p>
              </CardHeader>
              <CardContent>
                <p>{announcement.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
