import { Navbar, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Server, Database, Activity, Smartphone, Cpu, Code2 } from "lucide-react";

// ✅ Theme-aware images (Tailwind handles showing/hiding via dark:)
import DayTimeCar from "@assets/animated/DayTimeCar.png";
import NightTimeCar from "@assets/animated/NightTimeCar.png";

export default function Products() {
  const sections = [
    {
      id: "hardware",
      title: "Hardware Layer",
      desc: "Industrial-grade sensing equipment built for durability and accuracy.",
      items: [
        {
          title: "Surface Mount Sensor",
          icon: Database,
          specs: ["LoRaWAN Connectivity", "10-year Battery Life", "IP68 Rated", "Sub-second Latency"],
          desc:
            "Our flagship sensor mounts directly to the road surface in minutes. Using dual-magnetometer detection, it identifies vehicle presence with 99.5% accuracy.",
        },
        {
          title: "IoT Gateway",
          icon: Server,
          specs: ["10km Range", "4G/LTE Backhaul", "Edge Processing"],
          desc:
            "The bridge between asphalt and cloud. One gateway covers entire parking lots or city blocks, securely encrypting and transmitting sensor data.",
        },
      ],
    },
    {
      id: "software",
      title: "Software Platform",
      desc: "Powerful analytics and management tools for operators.",
      action: (
        <Link href="/login">
          <Button variant="outline" className="mt-4 border-primary text-primary hover:bg-primary/10">
            Developer Login
          </Button>
        </Link>
      ),
      items: [
        {
          title: "Analytics Dashboard",
          icon: Activity,
          specs: ["Real-time Occupancy", "Historical Trends", "Heatmaps", "Exportable Reports"],
          desc:
            "Visualize your parking assets in real-time. Identify peak usage times, turnover rates, and underutilized zones to optimize pricing and allocation.",
        },
        {
          title: "Parkeze API",
          icon: Code2,
          specs: ["RESTful Endpoints", "Webhooks", "GeoJSON Support", "99.9% Uptime SLA"],
          desc:
            "Built for developers by developers. Integrate parking availability data directly into your own apps, signage, or city management systems.",
        },
      ],
    },
    {
      id: "ux",
      title: "User Experience",
      desc: "Seamless guidance for drivers.",
      items: [
        {
          title: "Driver Map App",
          icon: Smartphone,
          specs: ["Turn-by-turn Nav", "Spot Prediction", "iOS & Android", "Payment Integration"],
          desc:
            "Guide drivers directly to open spots. Reduce circling time by 30% and improve the overall campus or city experience.",
        },
        {
          title: "App Clips",
          icon: Cpu,
          specs: ["No Install Needed", "QR Code Launch", "Instant Payment", "Fast UX"],
          desc:
            "Let users pay for parking or find their car without downloading a full app. Instant, lightweight, and frictionless.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* Header / Intro */}
      <section className="pt-32 pb-16 px-4 bg-muted/20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Product Ecosystem</h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded in 2024, our mission is to digitize the world&apos;s parking infrastructure to create more livable,
            efficient cities.
          </p>

          {/* ✅ Day/Night image swap based on theme */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-10"
          >
            <div className="mx-auto max-w-2xl">
              <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/30 shadow-sm">
                {/* Light mode */}
                <img
                  src={DayTimeCar}
                  alt="ParkeZe ecosystem (day)"
                  className="block dark:hidden w-full h-auto"
                  loading="lazy"
                />
                {/* Dark mode */}
                <img
                  src={NightTimeCar}
                  alt="ParkeZe ecosystem (night)"
                  className="hidden dark:block w-full h-auto"
                  loading="lazy"
                />
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      <div className="flex-1">
        {sections.map((section, idx) => (
          <section
            key={section.id}
            className={`py-20 px-4 sm:px-6 lg:px-8 ${idx % 2 === 1 ? "bg-muted/30" : ""}`}
          >
            <div className="max-w-7xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-display font-bold mb-2">{section.title}</h2>
                <p className="text-lg text-muted-foreground">{section.desc}</p>
                {section.action}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {section.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 rounded-2xl border border-border/60"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        <item.icon size={28} />
                      </div>
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                    </div>

                    <p className="text-muted-foreground mb-8 leading-relaxed">{item.desc}</p>

                    <div className="grid grid-cols-2 gap-3">
                      {item.specs.map((spec, s) => (
                        <div key={s} className="text-sm font-medium flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {spec}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </div>
  );
}
