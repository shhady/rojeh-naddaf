'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import { Phone, Mail, Send, Share2, Calendar, Copy, ExternalLink, Facebook } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [showCopiedAlert, setShowCopiedAlert] = useState(false);

  // For client-side rendering only
  useEffect(() => {
    setMounted(true);
  }, []);

  const copyToClipboard = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setShowCopiedAlert(true);
      setTimeout(() => setShowCopiedAlert(false), 2000);
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Cover Image */}
        <div className="relative h-40 w-full">
          <Image
            src="/rojeh-cover.jpg"
            alt="תמונת כריכה"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Profile Image */}
        <div className="relative flex justify-center">
          <div className="absolute -top-16 ring-4 ring-white rounded-full overflow-hidden">
            <Image
              src="/rojeh-profile.jpg"
              alt="רוג'ה נדאף"
              width={128}
              height={128}
              className="rounded-full object-cover"
            />
          </div>
        </div>

        {/* Personal Information */}
        <div className="pt-16 pb-10 px-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900">רוג&apos;ה נדאף</h1>
          <p className="text-gray-600 mt-1">יועץ נדל״ן</p>
          <p className="text-sm text-gray-500 mt-2">מוצא את הבית המושלם עבורך</p>
        </div>

        {/* Contact Options */}
        <div className="px-6 pb-6 space-y-3">
          {/* Phone */}
          <a 
            href="tel:+972525729333" 
            className="flex items-center justify-between bg-blue-50 p-3 rounded-xl transition hover:bg-blue-100"
          >
            <div className="flex items-center gap-3">
              <div className="bg-blue-500 p-2 rounded-full">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <span className="font-medium text-gray-700">טלפון</span>
            </div>
            <span className="text-gray-500 text-sm">052-572-9333</span>
          </a>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/972525729333" 
            className="flex items-center justify-between bg-green-50 p-3 rounded-xl transition hover:bg-green-100"
          >
            <div className="flex items-center gap-3">
              <div className="bg-green-500 p-2 rounded-full">
                <FaWhatsapp className="h-5 w-5 text-white" />
              </div>
              <span className="font-medium text-gray-700">וואטסאפ</span>
            </div>
            <span className="text-gray-500 text-sm">שלח הודעה</span>
          </a>

          {/* Email */}
          <a 
            href="mailto:rojeh@example.com" 
            className="flex items-center justify-between bg-purple-50 p-3 rounded-xl transition hover:bg-purple-100"
          >
            <div className="flex items-center gap-3">
              <div className="bg-purple-500 p-2 rounded-full">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <span className="font-medium text-gray-700">אימייל</span>
            </div>
            <span className="text-gray-500 text-sm">rojeh@example.com</span>
          </a>
        </div>

        {/* Social Media */}
        <div className="px-6 pb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">עקבו אחרי</h2>
          <div className="flex justify-center items-center gap-5">
            <a 
              href="https://www.instagram.com/rojehna_realestate" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center gap-1"
            >
              <div className="bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 p-3 rounded-full">
                <ExternalLink className="h-5 w-5 text-white" />
              </div>
              <span className="text-xs text-gray-500">אינסטגרם</span>
            </a>
            
            <a 
              href="https://www.facebook.com/rojeh.nadaf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center gap-1"
            >
              <div className="bg-blue-600 p-3 rounded-full">
                <Facebook className="h-5 w-5 text-white" />
              </div>
              <span className="text-xs text-gray-500">פייסבוק</span>
            </a>
            
            <a 
              href="https://www.tiktok.com/@rojehnadaf_realestate" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center gap-1"
            >
              <div className="bg-black p-3 rounded-full">
                <ExternalLink className="h-5 w-5 text-white" />
              </div>
              <span className="text-xs text-gray-500">טיקטוק</span>
            </a>
          </div>
        </div>

        {/* QR Code */}
        <div className="px-6 pb-6 text-center">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">סרקו לשמירת פרטים</h2>
          <div className="flex justify-center">
            {mounted && (
              <div className="qr-code-container">
                <QRCode 
                  value={typeof window !== 'undefined' ? window.location.href : 'https://example.com'} 
                  size={150}
                />
              </div>
            )}
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="px-6 pb-8 space-y-3">
          <a 
            href="https://calendly.com/rojehnaddaf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block w-full text-center bg-blue-600 text-white py-3 px-4 rounded-xl font-medium transition hover:bg-blue-700"
          >
            <div className="flex items-center justify-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>קבע פגישה</span>
            </div>
          </a>

          <button 
            onClick={copyToClipboard}
            className="block w-full text-center border border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-medium transition hover:bg-gray-50"
          >
            <div className="flex items-center justify-center gap-2">
              <Share2 className="h-5 w-5" />
              <span>שתף כרטיס ביקור</span>
            </div>
          </button>

          {showCopiedAlert && (
            <div className="fixed bottom-4 right-1/2 transform translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded shadow-lg text-sm">
              הקישור הועתק!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
