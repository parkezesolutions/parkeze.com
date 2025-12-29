import { Navbar, Footer } from "@/components/layout";
import { InquiryForm } from "@/components/inquiry-form";

export default function Company() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">About Parkeze</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            Founded in 2024, our mission is to digitize the world's parking infrastructure to create more livable, efficient cities.
          </p>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-display font-bold mb-6">Our Mission</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Parking is often the first and last experience people have with a destination. Yet, it remains one of the most archaic parts of modern infrastructure.
            </p>
            <p className="text-muted-foreground text-lg">
              We believe that by providing accurate, real-time data, we can reduce traffic congestion, lower carbon emissions, and save people their most valuable asset: time.
            </p>
          </div>
          <div>
             <h2 className="text-3xl font-display font-bold mb-6">Our Story</h2>
             <p className="text-muted-foreground text-lg mb-6">
               Parkeze emerged from the University of South Carolina, driven by the frustration of campus parking. What started as a student project has evolved into an industrial-grade IoT platform.
             </p>
             <p className="text-muted-foreground text-lg">
               Today, we work with forward-thinking organizations to bring smart city concepts to reality.
             </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold mb-4">Get in touch</h2>
            <p className="text-muted-foreground">
              Have a question or want to work with us? Send us a message.
            </p>
          </div>
          <InquiryForm type="general" className="bg-card p-8 rounded-2xl border border-border shadow-lg" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
