import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Phone, 
  Users, 
  FileText, 
  Calendar,
  AlertTriangle,
  User,
  Menu,
  X
} from "lucide-react";

const navigationItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Emergency Hotlines", href: "/hotlines", icon: Phone },
  { name: "Residents", href: "/residents", icon: Users },
  { name: "E-Services", href: "/services", icon: FileText },
  { name: "Facility Booking", href: "/facilities", icon: Calendar },
  { name: "Report Incident", href: "/reports", icon: AlertTriangle },
  { name: "Account", href: "/account", icon: User },
];

export const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-gradient-primary shadow-primary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-8 rounded-full"
                src="src/assets/sison-seal.png"
                alt="Barangay Logo"
              />
              <span className="ml-2 text-xl font-bold text-primary-foreground">
                Paldit
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary-light text-primary-foreground"
                      : "text-primary-foreground/80 hover:bg-primary-light hover:text-primary-foreground"
                  )}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-foreground hover:bg-primary-light"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors",
                      isActive
                        ? "bg-primary-light text-primary-foreground"
                        : "text-primary-foreground/80 hover:bg-primary-light hover:text-primary-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};