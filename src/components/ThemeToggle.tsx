import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-background border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-bold text-foreground">Tushar</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-foreground">
          <a href="#home" className="hover:text-primary transition">Home</a>
          <a href="#projects" className="hover:text-primary transition">Projects</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </nav>

        {/* Desktop Theme Toggle */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md hover:bg-muted transition"
        >
          {open ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 py-4 space-y-4 bg-background border-t border-border">
          <a href="#home" className="block text-foreground hover:text-primary">Home</a>
          <a href="#projects" className="block text-foreground hover:text-primary">Projects</a>
          <a href="#contact" className="block text-foreground hover:text-primary">Contact</a>

          <ThemeToggle />
        </div>
      )}
    </header>
  );
};

export default Navbar;
