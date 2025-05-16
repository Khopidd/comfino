
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "./pages/Index";
import Komunitas from "./pages/Komunitas";
import GrupDetail from "./pages/GrupDetail";
import SimpanUang from "./pages/SimpanUang";
import ProfilePage from "./pages/ProfilePage";
import ChangePassword from "./pages/ChangePassword";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import DetailCatatan from "./pages/DetailCatatan";
import MemberDashboard from "./pages/MemberDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Protected route component
const ProtectedRoute = ({ children, requiredRole }: { children: React.ReactNode, requiredRole?: string }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const userRole = localStorage.getItem("userRole");
  
  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }
  
  // If a specific role is required and user doesn't have it
  if (requiredRole && userRole !== requiredRole) {
    // Redirect member to member dashboard or admin to admin dashboard
    if (userRole === 'member') {
      return <Navigate to="/member-dashboard" replace />;
    } else {
      return <Navigate to="/" replace />;
    }
  }
  
  return <>{children}</>;
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated on app load
    const checkAuth = () => {
      setLoading(false);
    };
    
    checkAuth();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route 
              path="/" 
              element={
                <ProtectedRoute requiredRole="admin">
                  <Index />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/komunitas" 
              element={
                <ProtectedRoute requiredRole="admin">
                  <Komunitas />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/komunitas/:groupId" 
              element={
                <ProtectedRoute requiredRole="admin">
                  <GrupDetail />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/detail-catatan" 
              element={
                <ProtectedRoute>
                  <DetailCatatan />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/simpan-uang" 
              element={
                <ProtectedRoute requiredRole="admin">
                  <SimpanUang />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/change-password" 
              element={
                <ProtectedRoute>
                  <ChangePassword />
                </ProtectedRoute>
              } 
            />
            <Route
              path="/member-dashboard"
              element={
                <ProtectedRoute requiredRole="member">
                  <MemberDashboard />
                </ProtectedRoute>
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
