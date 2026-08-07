import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[var(--color-navy)] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-[#0A1845]/90 backdrop-blur-xl border border-white/10 rounded-[20px] p-8 md:p-10 shadow-2xl text-center relative overflow-hidden">
        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-red)] to-blue-600 rounded-[24px] blur opacity-20 z-0"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-4">Thank You!</h1>
          
          <p className="text-blue-100/80 mb-8 leading-relaxed">
            Your request has been successfully submitted. One of our tax experts will get back to you shortly.
          </p>
          
          <Link href="/" className="w-full">
            <Button size="lg" className="w-full py-4 rounded-xl group hover:shadow-[0_0_20px_rgba(214,40,40,0.4)]">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
