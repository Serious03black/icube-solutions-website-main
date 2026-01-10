import { motion } from "framer-motion";
import { Target, Eye, Users, Award, Rocket, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";

const timeline = [
  { year: "2019", title: "Founded", description: "iCube Solution was established in Nashik with a vision to transform businesses digitally." },
  { year: "2020", title: "First Major Project", description: "Delivered our first enterprise-level application for a manufacturing company." },
  { year: "2021", title: "Team Expansion", description: "Grew to a team of 10+ skilled developers and designers." },
  { year: "2022", title: "AI Integration", description: "Started offering AI and automation solutions to clients." },
  { year: "2023", title: "100+ Projects", description: "Crossed the milestone of 100 successful project deliveries." },
  { year: "2024", title: "National Presence", description: "Expanded client base across multiple states in India." },
];

const values = [
  { icon: Target, title: "Client-Focused", description: "Your success is our success. We prioritize understanding your needs." },
  { icon: Award, title: "Quality First", description: "We never compromise on code quality, security, or user experience." },
  { icon: Rocket, title: "Innovation", description: "We stay ahead with the latest technologies and best practices." },
  { icon: Users, title: "Collaboration", description: "We work as an extension of your team, not just vendors." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="hero-gradient" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                We're Building the <span className="gradient-text">Future of Technology</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                iCube Solution is a Nashik-based IT company providing modern web, mobile, and 
                automation solutions for businesses of all sizes. We transform ideas into 
                powerful digital products.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card p-10"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To help businesses go digital with reliable, scalable, and future-ready technology. 
                  We believe every business deserves access to world-class software solutions, 
                  regardless of their size or industry.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-card p-10"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  Our Vision
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become a trusted technology partner for companies across India and globally. 
                  We envision a world where technology empowers every business to achieve 
                  their full potential and serve their customers better.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                Our Journey
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold">
                Growing <span className="gradient-text">Together</span>
              </h2>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary" />

              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 z-10 shadow-lg shadow-primary/50" />
                  
                  {/* Content */}
                  <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <div className="glass-card p-6">
                      <span className="text-primary font-display font-bold text-xl">{item.year}</span>
                      <h3 className="font-display text-lg font-semibold text-foreground mt-1 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                Our Values
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold">
                What <span className="gradient-text">Drives Us</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="glass-card p-8 text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default About;
