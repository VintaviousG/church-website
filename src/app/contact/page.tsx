"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl"
      >
        <Card className="shadow-lg border border-gray-200 dark:border-gray-700">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-semibold text-purple-700 dark:text-purple-400">
              Contact Us
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              We’d love to hear from you! Reach out with questions, prayer requests, or messages.
            </p>
          </CardHeader>

          <CardContent className="grid md:grid-cols-2 gap-8 mt-6">
            {/* Contact Info Section */}
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="text-purple-600" />
                <span>faithcommunitychurch@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-purple-600" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-purple-600" />
                <span>123 Church St, Albany, GA</span>
              </div>

              <div className="mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18..."
                  width="100%"
                  height="250"
                  loading="lazy"
                  className="rounded-xl border border-gray-300"
                ></iframe>
              </div>
            </div>

            {/* Contact Form Section */}
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
              <Textarea
                placeholder="Your Message"
                rows={4}
                required
              />
              <Button type="submit" className="bg-purple-700 hover:bg-purple-800 text-white">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}
