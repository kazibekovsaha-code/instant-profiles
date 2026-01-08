import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Profiles from "./pages/Profiles";
import ProfileDetail from "./pages/ProfileDetail";
import Cities from "./pages/Cities";
import Online from "./pages/Online";
import NewProfiles from "./pages/NewProfiles";
import About from "./pages/About";
import Rules from "./pages/Rules";
import FAQ from "./pages/FAQ";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/profile/:id" element={<ProfileDetail />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/online" element={<Online />} />
          <Route path="/new" element={<NewProfiles />} />
          <Route path="/about" element={<About />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
