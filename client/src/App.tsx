import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MinecraftThemeProvider } from "@/components/minecraft-theme-provider";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/PersonalPortfolioWebsite" component={Home} />
      <Route path="/PersonalPortfolioWebsite/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <MinecraftThemeProvider>
          <Toaster />
          <Router />
        </MinecraftThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;