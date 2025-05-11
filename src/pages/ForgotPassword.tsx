
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      toast.success("Reset link sent to your email!");
      // In a real app, you would send a request to your backend here
    } else {
      toast.error("Please enter a valid email address");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side - Logo only for smaller screens */}
      <div className="hidden md:flex md:flex-col md:items-start md:p-12 w-1/5">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 rounded-lg w-[40px] h-[40px] flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="text-[26px] text-gray-800 font-medium">Comfinotes</div>
        </div>
      </div>
      
      {/* Right side - Form */}
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="max-w-md w-full">
          {/* Mobile logo */}
          <div className="flex md:hidden items-center gap-3 justify-center mb-8">
            <div className="bg-blue-600 rounded-lg w-[40px] h-[40px] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="text-[26px] text-gray-800 font-medium">Comfinotes</div>
          </div>
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Atur ulang kata sandi Anda</h1>
            <p className="text-gray-500 max-w-sm mx-auto">
              Masukkan alamat email yang terkait dengan akun Anda dan kami akan mengirimkan tautan untuk mengatur ulang kata sandi Anda
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Email"
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 13L2 6" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Lanjutkan
              </Button>

              <div className="text-center">
                <button
                  type="button"
                  className="text-blue-600 hover:underline text-sm"
                  onClick={() => navigate("/signin")}
                >
                  Kembali ke Masuk
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
