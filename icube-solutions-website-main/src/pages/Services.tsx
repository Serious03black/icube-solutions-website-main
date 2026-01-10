import { motion } from "framer-motion";
import { 
  Globe, 
  ShoppingCart, 
  Smartphone, 
  Code, 
  Bot, 
  Building2,
  Cloud,
  Wrench,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom responsive websites built with modern frameworks for optimal performance, SEO, and user experience. From landing pages to complex web applications.",
    benefits: [
      "Responsive design for all devices",
      "SEO optimized structure",
      "Fast loading speeds",
      "Easy content management"
    ],
    tech: ["React", "Next.js", "WordPress", "PHP", "Tailwind CSS"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    description: "Powerful online stores with seamless payment integration, inventory management, and beautiful product showcases that convert visitors into customers.",
    benefits: [
      "Secure payment gateways",
      "Inventory management",
      "Order tracking system",
      "Customer analytics"
    ],
    tech: ["Shopify", "WooCommerce", "Magento", "Custom Solutions"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android. From concept to deployment on app stores with ongoing support.",
    benefits: [
      "Cross-platform development",
      "Native performance",
      "App Store deployment",
      "Push notifications"
    ],
    tech: ["Flutter", "React Native", "Swift", "Kotlin"],
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software solutions to automate and optimize your business processes. We build systems that scale with your growth.",
    benefits: [
      "Process automation",
      "Custom integrations",
      "Scalable architecture",
      "Ongoing maintenance"
    ],
    tech: ["Node.js", "Python", ".NET", "Java", "PostgreSQL"],
  },
  {
    icon: Bot,
    title: "AI Automation & Chatbots",
    description: "Intelligent automation solutions and conversational AI to enhance customer engagement, reduce workload, and provide 24/7 support.",
    benefits: [
      "24/7 customer support",
      "Lead qualification",
      "Task automation",
      "Data insights"
    ],
    tech: ["OpenAI", "Dialogflow", "LangChain", "Custom AI Models"],
  },
  {
    icon: Building2,
    title: "CRM & ERP Systems",
    description: "Enterprise-grade customer relationship and resource planning systems tailored to your business workflows and reporting needs.",
    benefits: [
      "Centralized data",
      "Custom workflows",
      "Advanced reporting",
      "Team collaboration"
    ],
    tech: ["Salesforce", "Custom CRM", "Odoo", "SAP Integration"],
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    description: "Reliable cloud infrastructure setup, migration, and management. We ensure your applications are secure, scalable, and always available.",
    benefits: [
      "99.9% uptime",
      "Auto-scaling",
      "Secure backups",
      "Cost optimization"
    ],
    tech: ["AWS", "Google Cloud", "Azure", "DigitalOcean"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing technical support, bug fixes, feature updates, and performance optimization to keep your systems running smoothly.",
    benefits: [
      "24/7 monitoring",
      "Regular updates",
      "Security patches",
      "Performance tuning"
    ],
    tech: ["All Technologies", "DevOps", "CI/CD", "Monitoring"],
  },
];

const Services = () => {
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
                Our Services
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                Complete <span className="gradient-text">IT Solutions</span> for Your Business
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                From web development to AI automation, we provide end-to-end technology 
                services that help your business thrive in the digital age.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className={`glass-card p-8 lg:p-12 ${
                    index % 2 === 0 ? "" : ""
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-lg text-xs font-medium bg-secondary text-secondary-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Button variant="hero" asChild>
                        <Link to="/contact" className="group">
                          Get Started
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                    
                    <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className="bg-secondary/30 rounded-2xl p-8">
                        <h3 className="font-display text-lg font-semibold text-foreground mb-6">
                          Business Benefits
                        </h3>
                        <ul className="space-y-4">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
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

export default Services;
