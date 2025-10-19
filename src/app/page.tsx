'use client';

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-gray-900 text-white flex flex-col items-center justify-center p-6">
      <motion.h1 
        className="text-5xl font-bold mb-6 text-gold drop-shadow-lg"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Cornerstone Church
      </motion.h1>

      <motion.p 
        className="text-lg text-gray-200 max-w-xl text-center mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        A place where faith, family, and purpose come together. Join us for worship, community, and spiritual growth.
      </motion.p>

      <motion.div 
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <Button className="bg-gold text-black font-semibold px-6 py-3 rounded-xl hover:bg-yellow-400 transition">Plan Your Visit</Button>
        <Button variant="outline" className="border-gold text-gold font-semibold px-6 py-3 rounded-xl hover:bg-gold hover:text-black transition">Watch Live</Button>
      </motion.div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl">
        {[
          { title: 'Sunday Worship', desc: 'Join us every Sunday at 10 AM for powerful worship and a message that transforms lives.' },
          { title: 'Bible Study', desc: 'Deepen your understanding of the Word every Wednesday evening at 7 PM.' },
          { title: 'Youth Ministry', desc: 'Empowering the next generation through Christ-centered mentorship and community.' }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.2, duration: 0.8 }}
          >
            <Card className="bg-white/10 backdrop-blur-md border border-gold/30 rounded-2xl shadow-lg hover:scale-105 transition-transform">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-gold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>
    </main>
  )
}