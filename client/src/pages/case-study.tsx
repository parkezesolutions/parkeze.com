import { Navbar, Footer } from "@/components/layout";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function CaseStudy() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <article className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/">
            <a className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </a>
          </Link>
          
          <div className="mb-12">
            <span className="text-primary font-bold tracking-wider text-sm uppercase">Active Pilot Program</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-6 text-foreground">
              University of South Carolina
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              How Parkeze is helping a major university campus reduce congestion and improve the student parking experience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-8 border-y border-border mb-12 text-center">
            {/* <div>
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-xs text-muted-foreground uppercase mt-1">Smart Spots</div>
            </div> */}
            <div>
              <div className="text-3xl font-bold text-primary">99%</div>
              <div className="text-xs text-muted-foreground uppercase mt-1">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">&lt;1s</div>
              <div className="text-xs text-muted-foreground uppercase mt-1">Latency</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-xs text-muted-foreground uppercase mt-1">Monitoring</div>
            </div>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <h2 className="font-display">The Challenge</h2>
            <p className="text-muted-foreground">
              With over 35,000 students and limited parking infrastructure, UofSC faces daily congestion issues. Students often circle lots for 15-20 minutes searching for open spots, increasing emissions and frustration. Traditional counting loops were inaccurate and expensive to maintain.
            </p>

            <h2 className="font-display">The Solution</h2>
            <p className="text-muted-foreground">
              Parkeze deployed a pilot network of surface-mount sensors in high-traffic drop-off zones. These sensors communicate via LoRaWAN to a central gateway, providing real-time occupancy data to campus administration.
            </p>

            <div className="bg-muted/30 p-6 rounded-xl my-8 border border-border">
              <h3 className="text-lg font-bold mb-4 mt-0">Implementation Details</h3>
              <ul className="space-y-3 list-none pl-0">
                {[
                  "Non-invasive installation (epoxy mount) required no asphalt drilling",
                  "Self-healing LoRaWAN mesh network for reliable connectivity",
                  "Real-time dashboard access for Parking Services team",
                  "Integration testing with existing student app"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="font-display">Current Status</h2>
            <p className="text-muted-foreground">
              The system is currently live and collecting data. Initial metrics show a significant improvement in occupancy visibility. We are working with university stakeholders to expand the pilot to a full parking structure deployment in late 2026.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
