import React from "react";
import { Navigation } from "@/components/ui/navigation";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-muted mt-12">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Barangay Contact Info
              </h3>
              <p className="text-muted-foreground">
                Address: Barangay Paldit, Sison Pangasinan<br />
                Phone: (+63) 912-345-6789<br />
                Email: paldit01@gmail.com
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Office Hours
              </h3>
              <p className="text-muted-foreground">
                Monday - Friday: 8:00 AM - 5:00 PM<br />
                Saturday: 8:00 AM - 12:00 PM<br />
                Sunday: Closed
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Emergency Hotline
              </h3>
              <p className="text-destructive font-semibold text-lg">
                911
              </p>
              <p className="text-muted-foreground">
                Available 24/7
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground">
              © 2025 Barangay Management System. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};