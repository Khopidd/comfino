
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const SignIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple authentication check
    if (username === "Mochamad Khopid" && password === "Khopidd123") {
      // Store auth state
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("username", username);
      toast.success("Login successful!");
      navigate("/");
    } else {
      toast.error("Invalid username or password.");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side - Blue background with stats */}
      <div className="hidden md:flex md:flex-1 bg-blue-600 relative overflow-hidden">
        <div className="flex flex-col p-12 text-white relative z-10">
          <div className="flex items-center gap-3 mb-24">
            <div className="bg-white rounded-lg w-[40px] h-[40px] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="text-[26px] font-medium">Comfinotes</div>
          </div>

          {/* Stats cards */}
          <div className="flex flex-wrap gap-6 mt-16">
            <div className="bg-white rounded-lg p-6 shadow-lg w-[220px]">
              <div className="flex items-start mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="text-gray-500 text-sm">Total Submissions</div>
              <div className="text-gray-800 text-2xl font-bold mt-1">250</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg w-[220px]">
              <div className="flex items-start mb-3">
                <div className="p-2 bg-teal-100 rounded-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="text-gray-500 text-sm">Total Revenue</div>
              <div className="text-gray-800 text-2xl font-bold mt-1">IDR25.500.000</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg w-[220px]">
              <div className="flex items-start mb-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 6L12 2L8 6" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 2V15" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 14L22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21L4 21C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19L2 14" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="text-gray-500 text-sm">Expenses</div>
              <div className="text-gray-800 text-2xl font-bold mt-1">IDR8.650.000</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg w-[220px]">
              <div className="flex items-start mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 18L12 22L16 18" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22L12 9" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 10L22 5C22 4.46957 21.7893 3.96086 21.4142 3.58579C21.0391 3.21071 20.5304 3 20 3L4 3C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5L2 10" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="text-gray-500 text-sm">Incomes</div>
              <div className="text-gray-800 text-2xl font-bold mt-1">IDR34.150.000</div>
            </div>
          </div>
        </div>

        {/* Circular gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-500 to-blue-600 opacity-50"></div>
      </div>

      {/* Right side - Login form */}
      <div className="flex w-full md:w-2/5 items-center justify-center p-8">
        <div className="max-w-md w-full">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Masuk ke Akun Anda</h1>
            <p className="text-gray-500">Selamat datang kembali! silakan masukkan detail Anda</p>
          </div>

          <form onSubmit={handleSignIn}>
            <div className="space-y-6">
              <div>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Username"
                    className="pl-10"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <div className="relative">
                  <Input
                    type="password"
                    placeholder="Password"
                    className="pl-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Checkbox 
                    id="remember-me" 
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked === true)}
                  />
                  <label htmlFor="remember-me" className="text-sm text-slate-600">
                    Tetap masuk
                  </label>
                </div>
                <button 
                  type="button" 
                  className="text-sm text-blue-600 hover:underline"
                  onClick={() => navigate("/forgot-password")}
                >
                  Lupa kata sandi?
                </button>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Masuk
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
