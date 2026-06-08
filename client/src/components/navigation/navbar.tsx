import { useState } from "react";
import { useMinecraftTheme } from "@/components/minecraft-theme-provider";
import { Sun, Moon, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDayMode, toggleTheme } = useMinecraftTheme();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full mc-nav z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="font-pixel text-xs sm:text-sm text-mc-text tracking-wider">
              ⛏️ Rage BhanuKiran
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="font-minecraft text-lg text-mc-text-secondary hover:text-mc-gold transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}

            {/* Day/Night Toggle */}
            <button
              onClick={toggleTheme}
              className="mc-btn !p-2 !text-xs flex items-center gap-2"
              aria-label="Toggle day/night mode"
            >
              {isDayMode ? (
                <>
                  <Moon className="h-4 w-4" />
                  <span className="hidden lg:inline">Night</span>
                </>
              ) : (
                <>
                  <Sun className="h-4 w-4" />
                  <span className="hidden lg:inline">Day</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="mc-btn !p-2 !text-xs"
              aria-label="Toggle day/night mode"
            >
              {isDayMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-mc-text">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-mc-card border-mc-border">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="font-minecraft text-xl text-mc-text-secondary hover:text-mc-gold transition-colors duration-200 text-left"
                    >
                      ▸ {item.label}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
