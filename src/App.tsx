import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LogisticsPage from "./pages/services/LogisticsPage";
import FinancialPage from "./pages/services/FinancialPage";
import LegalPage from "./pages/services/LegalPage";
import ICTPage from "./pages/services/ICTPage";
import AgriculturePage from "./pages/services/AgriculturePage";
import MiningPage from "./pages/services/MiningPage";
import TranslationPage from "./pages/services/TranslationPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/logistics" element={<LogisticsPage />} />
          <Route path="/services/financial" element={<FinancialPage />} />
          <Route path="/services/legal" element={<LegalPage />} />
          <Route path="/services/ict" element={<ICTPage />} />
          <Route path="/services/agriculture" element={<AgriculturePage />} />
          <Route path="/services/mining" element={<MiningPage />} />
          <Route path="/services/translation" element={<TranslationPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
