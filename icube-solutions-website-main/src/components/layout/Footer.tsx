import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", path: "/services" },
        { name: "Mobile Apps", path: "/services" },
        { name: "AI Automation", path: "/services" },
        { name: "Cloud Solutions", path: "/services" },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-border/50 bg-card/30">
      <div className="hero-gradient opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">i³</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-foreground">
                  iCube Solution
                </span>
                <span className="text-xs text-muted-foreground -mt-1">
                  Nashik IT Solutions
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Building smart digital solutions for growing businesses. Your trusted technology partner in Nashik and beyond.
            </p>
            <div className="flex flex-col gap-3">
             
              <a
                href="mailto:info@icubesolution.in"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                info@icubesolution.in
              </a>
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Hanumanta Nagar, Lokhande Mala, Jail Road, Nashik Road, Nashik, Maharashtra</span>
              </div>
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <h4 className="font-display font-semibold text-foreground mb-6">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-display font-semibold text-foreground mb-6">
              Ready to Start?
            </h4>
            <p className="text-muted-foreground text-sm mb-6">
              Get a free consultation for your next project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-105"
            >
              Get Free Quote
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear} iCube Solution. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-muted-foreground text-sm">
              Made with ❤️ in Nashik, India
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
