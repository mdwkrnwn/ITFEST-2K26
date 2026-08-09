"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  ChevronRight,
  Star,
  MapPin,
  Clock,
  Leaf,
  Building2,
  MessageSquare,
  Heart
} from "lucide-react";
import Image from "next/image";

const categories = [
  "All",
  "Kuliner",
  "Fashion",
  "Kecantikan",
  "Pertanian",
  "Jasa",
];

const umkmData = [
  {
    id: 1,
    img: "/assets/umkm/makanan/dapurnona/thumbnail.jpeg",
    store: "Dapur Nona",
    category: "Kuliner",
    rating: 4.5,
    reviews: 20,
    distance: "1.2 km",
    city: "Malang",
    badge: "🔥 Popular",
    badgeColor: "bg-accent-light text-white",
    favorites: 1240,
    tags: ["Kuliner"],
    href: "#",
  },
  {
    id: 2,
    img: "/assets/umkm/toko/tokoberkah/thumbnail.jpg",
    store: "Toko Berkah",
    category: "Oleh-Oleh",
    rating: 4.6,
    reviews: 10,
    distance: "2.0 km",
    city: "Malang",
    badge: "⭐ Top Rated",
    badgeColor: "bg-[#2D2A26] text-white",
    favorites: 856,
    tags: ["Oleh-Oleh"],
    href: "#",
  },
  {
    id: 3,
    img: "/assets/umkm/hobi/greenyplant/thumbnail.jpeg",
    store: "Greeny Plant",
    category: "Pertanian",
    rating: 4.9,
    reviews: 60,
    distance: "3.1 km",
    city: "Malang",
    badge: "🌱 Organic",
    badgeColor: "bg-white text-[#2D2A26]",
    favorites: 2104,
    tags: ["Pertanian"],
    href: "#",
  },
  {
    id: 4,
    img: "/assets/umkm/fashion/lokaloutfit/thumbnail.jpeg",
    store: "Local Outfit",
    category: "Fashion",
    rating: 4.7,
    reviews: 20,
    distance: "1.8 km",
    city: "Malang",
    badge: "🛍 Featured",
    badgeColor: "bg-accent-light/10 text-accent-light",
    favorites: 892,
    tags: ["Fashion"],
    href: "#",
  },
  {
    id: 5,
    img: "/assets/umkm/kafe/kopititik/thumbnail.jpeg",
    store: "Kopi Titik",
    category: "Kuliner",
    rating: 4.5,
    reviews: 70,
    distance: "1.0 km",
    city: "Malang",
    badge: "☕ Popular",
    badgeColor: "bg-[#2D2A26] text-white",
    favorites: 342,
    tags: ["Kuliner"],
    href: "#",
  },
  {
    id: 6,
    img: "/assets/umkm/jasa/fixithome/thumbnail.jpeg",
    store: "Fixit Home",
    category: "Jasa",
    rating: 4.8,
    reviews: 45,
    distance: "1.0 km",
    city: "Malang",
    badge: "🛠 Recommended",
    badgeColor: "bg-white text-[#2D2A26]",
    favorites: 1201,
    tags: ["Jasa"],
    href: "#",
  },
  {
    id: 7,
    img: "/assets/umkm/kecantikan/glow&go/thumbnail.jpeg",
    store: "Glow & Go",
    category: "Kecantikan",
    rating: 4.9,
    reviews: 20,
    distance: "2.4 km",
    city: "Malang",
    badge: "✨ New",
    badgeColor: "bg-accent-light text-white",
    favorites: 156,
    tags: ["Kecantikan"],
    href: "#",
  },
  {
    id: 8,
    img: "/assets/umkm/makanan/cemilannendang/thumbnail.jpeg",
    store: "Cemilan Nendang",
    category: "Kuliner",
    rating: 4.9,
    reviews: 42,
    distance: "3.6 km",
    city: "Malang",
    badge: "🔥 Popular",
    badgeColor: "bg-[#2D2A26]/10 text-[#2D2A26]",
    favorites: 1587,
    tags: ["Kuliner"],
    href: "#",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${star <= Math.round(rating) ? "text-accent-light fill-accent-light" : "text-[#2D2A26]/20 fill-[#2D2A26]/20"}`}
        />
      ))}
    </div>
  );
}

export default function RescuedMeals() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(8);

  const filtered =
    activeCategory === "All"
      ? umkmData
      : umkmData.filter((m) => m.tags.includes(activeCategory));

  const visibleMeals = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const stickerSpringTransition = {
    type: "spring" as const,
    stiffness: 150,
    damping: 12,
    mass: 0.8,
  };

  return (
    <section
      id="marketplace"
      className="relative w-full bg-[#F4F3EE] py-24 lg:py-32 overflow-hidden font-[family:var(--font-jakarta)] select-none"
    >
      <div
        className="absolute inset-0 z-0 opacity-[0.2] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#2D2A26 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-light rounded-full blur-[150px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2D2A26] rounded-full blur-[150px] opacity-[0.03] pointer-events-none" />

      <div className="absolute left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.03] z-0">
        <h2 className="text-[18vw] font-black uppercase leading-none whitespace-nowrap -ml-20 tracking-tighter">
          LIVE DIRECTORY • LIVE
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="lg:hidden w-full flex flex-col items-center text-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.4, rotate: -15, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
            viewport={{ once: true }}
            transition={stickerSpringTransition}
            className="bg-[#2D2A26] text-white text-[9px] min-[400px]:text-[10px] font-black uppercase tracking-[0.3em] px-3.5 py-1.5 rounded-md shadow-md mb-3 w-max"
          >
            Live Directory
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.7, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...stickerSpringTransition, delay: 0.1 }}
            className="relative font-black uppercase tracking-tighter leading-[0.85] text-[#2D2A26] text-[36px] min-[400px]:text-[44px]"
          >
            DISCOVER UMKM <br />
            <span className="bg-gradient-to-r from-accent-light to-[#0026ff] text-white px-4 py-0.5 rounded-[12px] shadow-[0_15px_30px_rgba(6,122,225,0.25)] border-2 border-white transform rotate-1.5 inline-block text-[26px] min-[400px]:text-[32px] mt-2">
              NEAR YOU
            </span>
          </motion.h2>
        </div>

        <div className="hidden lg:flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.4, rotate: -12, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
            viewport={{ once: true }}
            transition={stickerSpringTransition}
            className="bg-[#2D2A26] text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-md shadow-md mb-4 w-max"
          >
            DISCOVER UMKM
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.8, y: 50, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ ...stickerSpringTransition, delay: 0.15 }}
            className="relative font-black uppercase tracking-tighter leading-[0.8] flex flex-col items-center text-[#2D2A26] text-[72px] xl:text-[80px]"
          >
            {/* <span>RESCUE MEALS</span> */}
            <span className="bg-gradient-to-r from-accent-light to-[#0026ff] text-white px-5 py-0.5 rounded-[18px] shadow-[0_15px_30px_rgba(6,122,225,0.25)] border-4 border-white transform rotate-1.5 inline-block text-[50px] xl:text-[60px] mt-2">
              NEAR YOU
            </span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...stickerSpringTransition, delay: 0.25 }}
          className="flex gap-2 sm:gap-3 overflow-x-auto pb-6 mb-10 justify-start lg:justify-center px-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(8);
              }}
              whileTap={{ scale: 0.95 }}
              className={`shrink-0 snap-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-[#2D2A26] border-[#2D2A26] text-white shadow-xl"
                  : "bg-white/60 backdrop-blur-md text-[#2D2A26]/60 hover:bg-white border-white/50"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visibleMeals.map((meal, idx) => (
              <motion.a
                key={meal.id}
                href={meal.href}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.05,
                  type: "spring",
                  bounce: 0.3,
                }}
                whileHover={{ y: -8 }}
                className="group bg-white/70 backdrop-blur-xl rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(242,143,59,0.15)] border border-white/60 transition-all duration-500 flex flex-col p-2"
              >
                <div className="relative overflow-hidden rounded-[16px] sm:rounded-[24px] aspect-[4/3] bg-[#2D2A26]/5">
                  <Image
                    fill
                    src={meal.img}
                    alt={meal.store}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A26]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex gap-2">
                    <span
                      className={`text-[8px] sm:text-[9px] font-black uppercase tracking-wider px-2 py-1 sm:px-3 sm:py-1.5 rounded-full ${meal.badgeColor} shadow-md backdrop-blur-md`}
                    >
                      {meal.badge}
                    </span>
                  </div>

                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white text-[#2D2A26] text-[8px] sm:text-[10px] font-black px-2 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-md">
                    ⭐ {meal.rating}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 text-[9px] font-bold uppercase tracking-wider text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                    <span className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg">
                      <MapPin size={10} />
                      {meal.distance}
                    </span>
                    <span className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg">
                      <Building2 size={10} />
                      {meal.city}
                    </span>
                  </div>
                </div>

                <div className="p-3 sm:p-5 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-black text-[#2D2A26] text-xs sm:text-lg uppercase tracking-tighter leading-tight truncate pr-2">
                      {meal.store}
                    </h3>
                    <div className="flex items-center gap-1 bg-accent-light/10 px-1.5 py-1 rounded-lg shrink-0">
                      <StarRating rating={meal.rating} />
                      <span className="text-[8px] sm:text-[9px] text-accent-light font-black">
                        {meal.rating}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    <span className="text-[8px] sm:text-[10px] text-[#2D2A26]/50 font-bold uppercase tracking-widest truncate">
                      {meal.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#2D2A26]/20 shrink-0" />
                    <span className="flex items-center gap-1 text-[8px] sm:text-[10px] text-[#2D2A26]/50 font-bold shrink-0">
                      <Heart className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-accent-light" />
                      {meal.favorites} favorites
                    </span>
                  </div>

                  <div className="flex-1" />

                  <div className="pt-3 sm:pt-4 mt-1 sm:mt-2 border-t border-[#2D2A26]/5 flex flex-col sm:flex-row sm:items-end justify-between gap-2.5">
                    <div>
                      <p className="hidden sm:block text-[9px] text-[#2D2A26]/40 font-bold uppercase tracking-wider mb-1">
                        Reviews
                      </p>

                      <div className="flex items-center gap-1">
                        <MessageSquare size={14} />
                        <span className="text-sm sm:text-2xl font-black text-accent-light leading-none tracking-tighter">
                          {meal.reviews}
                        </span>
                      </div>
                    </div>

                    <button className="bg-[#2D2A26] hover:bg-accent-light text-white text-[9px] sm:text-xs font-bold uppercase tracking-widest px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl transition-all duration-300 group-hover:shadow-[0_10px_20px_rgba(6,122,225,0.2)] w-full sm:w-auto text-center shadow-md">
                      View Store
                    </button>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleMeals.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 bg-white/50 backdrop-blur-md rounded-[40px] border border-white/60 shadow-sm mt-8"
          >
            <p className="text-[#2D2A26]/40 text-2xl font-black uppercase tracking-tighter mb-2">
              No meals found
            </p>
            <p className="text-[#2D2A26]/40 text-sm font-medium">
              Try selecting a different category.
            </p>
          </motion.div>
        )}

        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mt-12 sm:mt-16"
          >
            <motion.button
              onClick={() => setVisibleCount((prev) => prev + 8)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-white hover:bg-white text-[#2D2A26] font-bold text-[10px] sm:text-xs uppercase tracking-widest px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-xl group"
            >
              Load More ({filtered.length - visibleCount})
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform w-3 h-3 sm:w-4 sm:h-4"
              />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
