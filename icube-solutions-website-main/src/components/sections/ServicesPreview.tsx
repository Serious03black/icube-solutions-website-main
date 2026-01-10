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
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom responsive websites built with modern frameworks for optimal performance and user experience.",
    tech: ["React", "Next.js", "WordPress"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    description: "Powerful online stores with seamless payment integration and inventory management.",
    tech: ["Shopify", "WooCommerce", "Custom"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android platforms.",
    tech: ["Flutter", "React Native", "Swift"],
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software solutions to automate and optimize your business processes.",
    tech: ["Node.js", "Python", ".NET"],
  },
  {
    icon: Bot,
    title: "AI Automation & Chatbots",
    description: "Intelligent automation solutions and conversational AI to enhance customer engagement.",
    tech: ["OpenAI", "Dialogflow", "Custom AI"],
  },
  {
    icon: Building2,
    title: "CRM & ERP Systems",
    description: "Enterprise-grade customer relationship and resource planning systems.",
    tech: ["Salesforce", "Custom CRM", "SAP"],
  },
];

const ServicesPreview = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,183,235,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,183,235,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Comprehensive <span className="gradient-text">IT Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From web development to AI automation, we provide end-to-end technology services to transform your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-8 group cursor-pointer relative overflow-hidden"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md text-xs font-medium bg-secondary/50 text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/services" className="group">
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
