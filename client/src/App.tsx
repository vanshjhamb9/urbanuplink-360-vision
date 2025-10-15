import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { Route, Switch } from "wouter";
import { queryClient } from "@/lib/queryClient";
import Index from "./pages/Index";
import FeaturesPage from "./pages/FeaturesPage";
import UseCasesPage from "./pages/UseCasesPage";
import PricingPage from "./pages/PricingPage";
import TeamPage from "./pages/TeamPage";
import NotFound from "./pages/NotFound";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/features" component={FeaturesPage} />
        <Route path="/use-cases" component={UseCasesPage} />
        <Route path="/pricing" component={PricingPage} />
        <Route path="/team" component={TeamPage} />
        <Route component={NotFound} />
      </Switch>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
