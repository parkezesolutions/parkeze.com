import { Navbar, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { InquiryForm } from "@/components/inquiry-form";
import { Terminal, Webhook, Map, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Developers() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-slate-900 dark:bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-medium mb-6">
                <Terminal size={14} />
                <span>v1.0 API Documentation Available</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white">
                Build on the <br/>
                <span className="text-primary">Parking Cloud</span>
              </h1>
              <p className="text-xl text-white/70 mb-8 max-w-xl">
                Access real-time availability data, historical metrics, and device management through our robust REST API.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => document.getElementById('request-access')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request API Keys
              </Button>
            </div>
            
            {/* Code Snippet Visual */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6 font-mono text-sm shadow-2xl"
            >
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"/>
                <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                <div className="w-3 h-3 rounded-full bg-green-500"/>
              </div>
              <div className="text-green-400">
                <span className="text-purple-400">GET</span> /v1/spots/availability?zone=downtown
              </div>
              <div className="mt-4 text-white/80">
                <span className="text-gray-500">{"// Response"}</span><br/>
                {"{"}<br/>
                &nbsp;&nbsp;"zone_id": "us-sc-cola-01",<br/>
                &nbsp;&nbsp;"timestamp": "2024-05-21T14:30:00Z",<br/>
                &nbsp;&nbsp;"total_spots": 150,<br/>
                &nbsp;&nbsp;"available": <span className="text-blue-400">42</span>,<br/>
                &nbsp;&nbsp;"occupancy_rate": 0.72,<br/>
                &nbsp;&nbsp;"spots": [<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{"{"} "id": "A1", "status": "occupied" {"}"},<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{"{"} "id": "A2", "status": "free" {"}"}<br/>
                &nbsp;&nbsp;]<br/>
                {"}"}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Zap, 
                title: "Real-time Streams", 
                desc: "Sub-second latency updates via WebSocket connections for live map interfaces." 
              },
              { 
                icon: Webhook, 
                title: "Webhooks", 
                desc: "Get notified immediately when occupancy thresholds are met or devices go offline." 
              },
              { 
                icon: Map, 
                title: "GeoJSON Integration", 
                desc: "Standardized geospatial data formats make it easy to overlay our data on Mapbox or Google Maps." 
              }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-muted/20 hover:bg-muted/40 transition-colors">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Access */}
      <section id="request-access" className="py-20 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold mb-4">Start building today</h2>
            <p className="text-muted-foreground mb-8">
              We're currently in closed beta for our developer API. Request access to join the waitlist and get early documentation.
            </p>
            <ul className="space-y-4">
              {["Free sandbox tier", "Direct support channel", "Interactive API explorer"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs">✓</div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-background p-8 rounded-2xl shadow-lg border border-border">
            <h3 className="font-bold text-lg mb-6">Developer Access Request</h3>
            <InquiryForm type="developer" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
