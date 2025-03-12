"use client"

import React, { useRef, useState } from "react"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

// Definieer de interface voor een tijdlijn item
interface TimelineItem {
  id: string
  title: string
  date: string
  description: string
  icon?: string // Pad naar een afbeelding voor het icoon
  iconFallback?: string // Fallback tekst voor het icoon
  iconColor?: string // Kleur voor de avatar achtergrond
  details?: string[] // Extra details als lijst
}

// Definieer de interface voor de tijdlijn component props
interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null)
  const [activeItem, setActiveItem] = useState<string | null>(null)

  // Sorteer items op datum
  const sortedItems = [...items].sort((a, b) => {
    // Eenvoudige datumvergelijking op basis van de datum string
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  // Groepeer items per jaar voor de labels
  const years = [...new Set(sortedItems.map(item => {
    const match = item.date.match(/\d{4}/);
    return match ? match[0] : "";
  }))].filter(year => year !== "");

  // Functie om een item te activeren/deactiveren
  const toggleActiveItem = (id: string) => {
    if (activeItem === id) {
      setActiveItem(null);
    } else {
      setActiveItem(id);
    }
  };

  return (
    <div className={cn("relative", className)}>
      {/* Simpele Tijdlijn */}
      <div ref={timelineRef} className="w-full">
        <div className="w-full mx-auto px-4 py-8 relative">
          {/* Jaar labels bovenaan */}
          <div className="flex justify-between mb-8 px-8 sm:px-12 md:px-16">
            {years.map((year) => (
              <div key={year} className="flex flex-col items-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700">{year}</div>
              </div>
            ))}
          </div>
          
          {/* Tijdlijn lijn */}
          <div className="relative px-8 sm:px-12 md:px-16">
            {/* Basis tijdlijn */}
            <div className="absolute left-8 sm:left-12 md:left-16 right-8 sm:right-12 md:right-16 h-1 bg-green-100 top-[180px] sm:top-[200px] md:top-[220px]"></div>
            
            {/* Verbindende gekronkelde lijn tussen punten */}
            <svg className="absolute left-8 sm:left-12 md:left-16 right-8 sm:right-12 md:right-16 h-24 top-[165px] sm:top-[185px] md:top-[205px] w-full" preserveAspectRatio="none">
              {/* Basis golvende lijn */}
              <path 
                d="M0,15 C100,15 150,35 200,35 S300,15 400,15 S500,35 600,35 S700,15 800,15 S900,35 1000,35 S1100,15 1200,15 S1300,35 1400,35 S1500,15 1600,15" 
                className="stroke-green-200 stroke-[4px] fill-none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Accent lijn met gradient en animatie */}
              <path 
                d="M0,15 C100,15 150,35 200,35 S300,15 400,15 S500,35 600,35 S700,15 800,15 S900,35 1000,35 S1100,15 1200,15 S1300,35 1400,35 S1500,15 1600,15" 
                className="stroke-green-600 stroke-[2px] fill-none"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(22,163,74,0.3))",
                }}
              />
            </svg>
            
            {/* Tijdlijn markers */}
            <div className="flex justify-between relative mb-16 min-h-[400px] sm:min-h-[450px] md:min-h-[500px] pt-[40px]">
              {sortedItems.map((item, index) => (
                <div key={item.id} className="flex flex-col items-center relative mx-1 sm:mx-2 md:mx-4" style={{ width: `${100 / sortedItems.length}%` }}>
                  {/* Marker met glow effect */}
                  <div 
                    className={cn(
                      "absolute w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 rounded-full z-20 left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-300",
                      index % 2 === 0
                        ? "top-[177px] sm:top-[197px] md:top-[217px]"
                        : "top-[250px] sm:top-[270px] md:top-[290px]",
                      "before:absolute before:inset-[-4px] before:rounded-full before:shadow-[0_0_20px_rgba(22,163,74,0.4)] before:z-[-1]",
                      activeItem === item.id 
                        ? "scale-110 before:shadow-[0_0_30px_rgba(22,163,74,0.6)]" 
                        : "hover:scale-105"
                    )}
                    onClick={() => toggleActiveItem(item.id)}
                    title={`Klik voor meer details over ${item.title}`}
                  >
                    {/* Marker outer ring met animatie */}
                    <div className="absolute inset-0 rounded-full border-[2px] sm:border-[3px] border-blue-700 bg-white
                      after:absolute after:inset-[-2px] after:rounded-full after:border-2 after:border-green-200 after:animate-ping"></div>
                    {/* Marker inner dot met pulse effect */}
                    <div className="absolute inset-1 sm:inset-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 shadow-inner">
                      <div className={cn(
                        "absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 animate-pulse",
                        activeItem === item.id ? "opacity-100" : "opacity-0"
                      )}></div>
                    </div>
                  </div>
                  
                  {/* Datum met glow effect */}
                  <div className={cn(
                    "absolute text-xs sm:text-sm font-medium left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-all duration-300",
                    index % 2 === 0
                      ? "top-[215px] sm:top-[235px] md:top-[255px]"
                      : "top-[215px] sm:top-[235px] md:top-[255px]",
                    activeItem === item.id ? "scale-110" : ""
                  )}>
                    <div className={cn(
                      "px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border-2 flex items-center justify-center",
                      activeItem === item.id 
                        ? "bg-green-50 border-green-600 shadow-[0_0_12px_rgba(22,163,74,0.3)]" 
                        : "bg-white border-green-200 hover:border-green-300 hover:bg-green-50",
                      "transition-all duration-300"
                    )}>
                      <span className={cn(
                        "text-green-600",
                        activeItem === item.id ? "font-bold" : ""
                      )}>{item.date}</span>
                    </div>
                  </div>
                  
                  {/* Verbindingslijn met gradient en animatie */}
                  <div className={cn(
                    "w-0.5 absolute left-1/2 transform -translate-x-1/2 transition-all duration-500",
                    "bg-gradient-to-b",
                    index % 2 === 0 
                      ? "h-[100px] sm:h-[120px] md:h-[140px] top-[77px] sm:top-[77px] md:top-[77px] from-transparent via-green-300 to-green-600"
                      : "h-[100px] sm:h-[120px] md:h-[140px] top-[250px] sm:top-[270px] md:top-[290px] from-green-600 via-green-300 to-transparent",
                    activeItem === item.id ? "w-1 opacity-100 scale-y-110" : "opacity-60 hover:opacity-100"
                  )}></div>
                  
                  {/* Kaart met verbeterde visuele effecten */}
                  <div className={cn(
                    "absolute w-40 sm:w-48 md:w-56 bg-white rounded-lg shadow-lg border border-green-100 p-3 sm:p-4 left-1/2 transform -translate-x-1/2 transition-all duration-300",
                    "hover:shadow-[0_10px_40px_-15px_rgba(22,163,74,0.3)]",
                    index % 2 === 0 
                      ? "bottom-[280px] sm:bottom-[320px] md:bottom-[360px] border-t-4 border-t-blue-700" 
                      : "top-[380px] sm:top-[420px] md:top-[460px] border-b-4 border-b-blue-700",
                    activeItem === item.id 
                      ? "scale-105 z-20 shadow-[0_15px_50px_-12px_rgba(22,163,74,0.4)]" 
                      : "hover:scale-[1.02]"
                  )}
                  onClick={() => toggleActiveItem(item.id)}
                  >
                    <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <Avatar className={cn(
                        "h-6 w-6 sm:h-8 sm:w-8 ring-2 ring-offset-2",
                        item.iconColor || "bg-blue-700 ring-blue-100"
                      )}>
                        {item.icon ? (
                          <AvatarImage src={item.icon} alt={item.title} />
                        ) : (
                          <AvatarFallback className="text-white text-xs sm:text-sm font-bold" aria-label={item.title}>
                            {item.iconFallback || item.title.substring(0, 1)}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <div>
                        <h3 className="text-xs sm:text-sm font-bold text-blue-700 leading-tight">{item.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-green-600 mb-2 sm:mb-3 leading-relaxed">{item.description}</p>
                    
                    {item.details && item.details.length > 0 && (
                      <div className={cn(
                        "space-y-1.5 sm:space-y-2 transition-all duration-300",
                        activeItem === item.id || item.details.length <= 2 ? "max-h-[500px] opacity-100" : "max-h-[40px] overflow-hidden opacity-80"
                      )}>
                        {item.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start gap-1.5 sm:gap-2">
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-600 rounded-full mt-1.5" aria-hidden="true" />
                            <span className="text-[10px] sm:text-xs text-green-600 leading-relaxed flex-1">
                              {detail}
                            </span>
                          </div>
                        ))}
                        
                        {item.details.length > 2 && activeItem !== item.id && (
                          <div className="text-[10px] sm:text-xs text-green-600 font-medium cursor-pointer hover:text-green-700 text-center mt-1">
                            Klik voor meer details...
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* PWN Logo naast de onderste kaart */}
          <div className="absolute right-0 top-[580px] sm:top-[680px] md:top-[780px] opacity-100 w-20 sm:w-24 md:w-28 h-auto z-30 -mr-4">
            <div className="bg-white p-2 rounded-lg shadow-md border border-blue-100">
              <Image
                src="/logo pwn.png"
                alt="PWN Logo"
                width={120}
                height={60}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}