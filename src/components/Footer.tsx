const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} AI Portfolio. Built with React & TypeScript.
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              Designed for innovation, built for impact.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;