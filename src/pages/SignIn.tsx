
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/components/ui/sonner';
import { Eye, EyeOff, Loader2 } from 'lucide-react';

const SignIn: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Mock authentication - in a real app this would be an API call
    setTimeout(() => {
      if (username === 'divisimlbb' && password === 'divisimlbb') {
        // Set authentication state for member
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("username", username);
        localStorage.setItem("userRole", "member");
        
        toast.success("Welcome back, Divisi MLBB!");
        navigate("/member-dashboard");
      } else if (username === 'admin' && password === 'admin') {
        // Admin authentication
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("username", username);
        localStorage.setItem("userRole", "admin");
        
        toast.success("Welcome back, Admin!");
        navigate("/");
      } else {
        toast.error("Invalid credentials. Please try again.");
      }
      setLoading(false);
    }, 1000);
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <div className="flex flex-1">
        <div className="w-full lg:w-1/2 flex flex-col justify-center py-12 px-6 sm:px-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-600 rounded-lg w-[33px] h-[33px] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="text-[26px] text-gray-800 font-medium">Comfinotes</div>
          </div>
          
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">Log in to your account</h1>
            <p className="text-gray-500">Welcome back! Please enter your details.</p>
            <div className="mt-4 p-3 bg-blue-50 text-blue-700 rounded-md text-sm">
              <p><strong>Admin Login:</strong> username: admin | password: admin</p>
              <p><strong>Member Login:</strong> username: divisimlbb | password: divisimlbb</p>
            </div>
          </div>
          
          <form onSubmit={handleSignIn} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Username</label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="h-12"
                required
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="h-12"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            
            <div className="flex items-center">
              <Checkbox 
                id="remember-me" 
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              />
              <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
                Remember me
              </label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full h-12 text-base font-semibold" 
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              Sign In
            </Button>
          </form>
        </div>
        
        <div className="hidden lg:block lg:w-1/2 bg-blue-600">
          <div className="h-full flex items-center justify-center p-12">
            <div className="max-w-md text-center text-white">
              <h2 className="text-3xl font-bold mb-6">Financial Management Made Simple</h2>
              <p className="text-lg opacity-90 mb-8">Track, manage, and optimize your organization's finances with powerful and intuitive tools.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
