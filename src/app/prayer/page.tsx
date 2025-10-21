"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function PrayerPage() {
  const [request, setRequest] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setRequest("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-black to-gray-900 text-white px-6 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gold-400 mb-2">Prayer Requests</h1>
        <p className="text-gray-300 text-lg">
          Share your prayer needs — our community will lift them up in faith.
        </p>
      </motion.div>

      {/* Form Section */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto mb-12 bg-gray-800 p-8 rounded-2xl shadow-lg border border-purple-700"
      >
        <label htmlFor="prayer" className="block text-lg mb-3 font-semibold">
          Enter your prayer request:
        </label>
        <textarea
          id="prayer"
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          placeholder="Type your prayer here..."
          className="w-full p-3 rounded-lg bg-gray-900 border border-purple-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows={5}
        />
        <div className="text-center mt-6">
          <Button type="submit" className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-lg">
            Submit Prayer
          </Button>
        </div>
        {submitted && (
          <p className="text-green-400 mt-4 text-center">
            🙏 Thank you! Your prayer request has been received.
          </p>
        )}
      </motion.form>

      {/* Sample Prayer Section */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[
          {
            title: "For Our Church",
            text: "Lord, bless our church family with unity, love, and strength as we serve You together.",
          },
          {
            title: "For the Community",
            text: "Heavenly Father, help us be a light in our community and meet the needs of those around us.",
          },
        ].map((prayer, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <Card className="bg-gray-800 text-white border border-purple-700 hover:shadow-purple-500/30">
              <CardHeader>
                <CardTitle className="text-gold-400">{prayer.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{prayer.text}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
