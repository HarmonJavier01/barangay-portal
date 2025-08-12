import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { EmergencyHotlines } from "./pages/EmergencyHotlines";
import { ResidentsPage } from "./pages/ResidentsPage";
import { EServicesPage } from "./pages/EServicesPage";
import { FacilityBookingPage } from "./pages/FacilityBookingPage";
import { ReportsPage } from "./pages/ReportsPage";
import { AccountPage } from "./pages/AccountPage";
import { AppLayout } from "./components/layout/AppLayout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/hotlines" element={<EmergencyHotlines />} />
            <Route path="/residents" element={<ResidentsPage />} />
            <Route path="/services" element={<EServicesPage />} />
            <Route path="/facilities" element={<FacilityBookingPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/account" element={<AccountPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
