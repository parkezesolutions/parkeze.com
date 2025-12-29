import { Navbar, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Wifi,
  Activity,
  Smartphone,
  Database,
  Globe,
} from "lucide-react";
import { InquiryForm } from "@/components/inquiry-form";
import cityBg from "@assets/animated/city.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background gradients */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto text-left relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-foreground mb-6">
              Building smarter <br />
              <span className="text-gradient">parking infrastructure</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              We provide the digital layer for physical parking assets, enabling
              cities and campuses to optimize utilization through real-time
              data.
            </p>

            <div className="flex flex-col sm:flex-row justify-start gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white text-lg px-7 py-4 rounded-xl shadow-xl shadow-primary/25 hover:translate-y-[-2px] transition-all"
                onClick={() =>
                  document
                    .getElementById("contact-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Talk to Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Link href="/case-study/uofsc-pilot">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-7 py-4 rounded-xl border-2 hover:bg-muted/50"
                >
                  View Case Study
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= MOTTO / IMAGE SECTION ================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${cityBg})` }}
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background/70 dark:bg-background/80" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-left"
          >
            <div className="mb-4">
              <div className="h-1 w-10 bg-primary rounded-full" />
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
              Enabling parking efficiency.
            </h2>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              Parkeze delivers real-time parking infrastructure for campuses,
              cities, and mobility apps.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Database,
                  title: "Compliance visibility",
                  desc: "Track occupancy, enforcement, and audit requirements.",
                },
                {
                  icon: Wifi,
                  title: "Real-time availability",
                  desc: "Live parking data for drivers and operations teams.",
                },
                {
                  icon: Globe,
                  title: "Seamless integrations",
                  desc: "Connect to existing maps, apps, and platforms.",
                },
              ].map((outcome, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.12,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="bg-card/90 backdrop-blur border border-border rounded-xl p-6 text-left hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <outcome.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {outcome.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {outcome.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Complete Ecosystem
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From the asphalt to the app, we provide end-to-end infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Database, title: "Road Sensors", sub: "Hardware" },
              { icon: Wifi, title: "LoRa Gateway", sub: "Hardware" },
              { icon: Activity, title: "Dashboard", sub: "Software" },
              { icon: Smartphone, title: "Driver App", sub: "User Experience" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-card border border-border p-6 rounded-xl hover:border-primary/50 transition-colors group"
              >
                <item.icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors mb-4" />
                <h3 className="text-lg font-bold">{item.title}</h3>
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded mt-2 inline-block">
                  {item.sub}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/products">
              <Button variant="ghost" className="text-primary text-lg group">
                Explore all products{" "}
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= AUDIENCE ================= */}
      <section className="py-16 bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title block (consistent with other sections) */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-display font-bold mb-3">
              Our Clients
            </h2>
            <p className="text-muted-foreground">
              Built for operators and builders across campuses, cities, and mobility ecosystems.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Universities",
                desc: "Optimize campus parking flow and reduce student frustration.",
              },
              {
                title: "Cities",
                desc: "Reduce congestion and carbon emissions from circling vehicles.",
              },
              {
                title: "Developers",
                desc: "Build custom mobility solutions on our open API.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  border-l-2 pl-6 transition-colors
                  border-border hover:border-primary/60
                "
              >
                <h3 className="text-2xl font-bold mb-2">
                  {item.title}
                </h3>

                <p className="text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact-section"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
      >
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-display font-bold mb-4">
            Ready to modernize?
          </h2>
          <p className="text-muted-foreground">
            Whether you're a city planner, campus administrator, or developer,
            we'd love to chat.
          </p>
        </div>

        <div className="max-w-md mx-auto glass-card p-8 rounded-2xl">
          <InquiryForm type="general" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
