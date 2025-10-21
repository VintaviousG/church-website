"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Typography } from "@mui/material"; // optional for text styling
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-b from-white to-gray-50 text-center py-16 px-4">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Start invisible & slightly below
        animate={{ opacity: 1, y: 0 }}  // Fade in & move up
        transition={{ duration: 0.6 }}  // Duration of animation
        className="max-w-2xl"
      >
        <h1 className="text-4xl font-bold text-purple-700 mb-4">
          About Our Church
        </h1>
        <p className="text-gray-600 text-lg">
          We’re a small, faith-driven community focused on worship, love, and outreach.
          Our mission is to share the Gospel and support families in faith and growth.
        </p>
      </motion.div>

      {/* Mission & Vision Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} // triggers when visible in viewport
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-4xl"
      >
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-purple-700 mb-2">Our Mission</h2>
            <p className="text-gray-600">
              To lead people into a growing relationship with Jesus Christ through teaching,
              fellowship, and community outreach.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-purple-700 mb-2">Our Vision</h2>
            <p className="text-gray-600">
              To be a light in our community, empowering believers and inspiring hope
              through the love of Christ.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Leadership Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-20 max-w-5xl"
      >
        <h2 className="text-3xl font-bold text-purple-700 mb-8">Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-md">
            <CardContent className="flex flex-col items-center p-6">
              <Image
                src="/pastor.jpg"
                alt="Pastor"
                width={120}
                height={120}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Pastor [Name]</h3>
              <p className="text-gray-600 text-sm mt-2">
                Senior Pastor and founder, dedicated to leading the congregation with faith and love.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardContent className="flex flex-col items-center p-6">
              <Image
                src="/copastor.jpg"
                alt="Co-Pastor"
                width={120}
                height={120}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Co-Pastor [Name]</h3>
              <p className="text-gray-600 text-sm mt-2">
                Supports ministry growth and community engagement with a heart for outreach.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <h3 className="text-2xl font-bold text-purple-700 mb-4">
          Want to Learn More?
        </h3>
        <p className="text-gray-600 mb-6">
          Join us online or in person — everyone is welcome.
        </p>
        <Button className="bg-purple-700 hover:bg-purple-800 text-white">
          Contact Us
        </Button>
      </motion.div>
    </main>
  );
}
