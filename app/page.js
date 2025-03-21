'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import QRCode from 'react-qr-code';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Calendar, Share2, Facebook, Instagram, ExternalLink, ArrowRight, Info, User, MapPin, Youtube, UserPlus, QrCode, X } from 'lucide-react';
import { FaWhatsapp, FaTiktok, FaYoutube } from 'react-icons/fa';
import { MdVerified } from "react-icons/md";
export default function PremiumCard() {
  const [mounted, setMounted] = useState(false);
  const [showCopiedAlert, setShowCopiedAlert] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');
  const [showQrModal, setShowQrModal] = useState(false);
  
  // For client-side rendering only
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle share functionality with Web Share API
  const handleShare = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    
    // Use Web Share API if available
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'רוג\'יה נדאף | יועץ ומשווק נדל״ן \nכרטיס ביקור דיגיטלי',
          text: 'כרטיס ביקור דיגיטלי - רוג\'יה נדאף, יועץ ומשווק נדל״ן\n   ',
          url: url,
        });
      } catch (error) {
        console.error('Error sharing:', error);
        // Fall back to clipboard copy if sharing fails
        copyToClipboard();
      }
    } else {
      // Fall back to clipboard copy if Web Share API is not available
      copyToClipboard();
    }
  };

  // Copy URL to clipboard
  const copyToClipboard = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href)
        .then(() => {
          setShowCopiedAlert(true);
          setTimeout(() => setShowCopiedAlert(false), 2000);
        })
        .catch(err => {
          console.error('Failed to copy:', err);
        });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const toggleQrModal = () => {
    setShowQrModal(!showQrModal);
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-10 px-4 sm:px-6">
    
    
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="max-w-md mx-auto rounded-3xl shadow-2xl overflow-hidden bg-white"
      >
        {/* Gradient Header */}
        <section className="h-[30vh] md:h-[40vh] bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url(/rojeh-cover.jpg)` }}>
          <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="pattern" width="8" height="8" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#pattern)" />
            </svg>
          </div>
        </section>

        {/* Profile Picture */}
        <div className="relative flex justify-center">
          <motion.div 
            initial={{ scale: 0, y: 0 }}
            animate={{ scale: 1, y: -50 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="absolute ring-8 ring-white rounded-full overflow-hidden shadow-lg"
          >
            <Image
              src="/rojeh-profile.jpg"
              alt="רוג'ה נדאף"
              width={200}
              height={200}
              className="rounded-full object-cover"
            />
          </motion.div>
        </div>

        {/* Name and Title */}
        <div className="mt-24 text-center px-6">
          <h1 className="text-2xl font-bold text-gray-900">רוג&apos;יה נדאף</h1>
          <p className="text-gray-600 mt-1">יועץ ומשווק נדל״ן</p>
          <p className="text-center text-gray-600 mb-2 flex items-center justify-center gap-2">מספר רישיון תיווך: <span className="font-bold">3226326</span></p>
          <a 
            href="https://www.waze.com/ul?ll=32.80137366436421%2C34.99441736811734&navigate=yes" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 text-sm text-indigo-600 mt-2 hover:text-indigo-800 transition-colors"
          >
            <MapPin className="h-4 w-4" />
            <span>רימקס סלקטד חיפה</span>
          </a>
        </div>

        {/* Tabs Navigation */}
        <div className="mt-6 px-6 mb-4">
          <div className="flex flex-wrap justify-center gap-2">
            <button 
              onClick={() => handleTabChange('contact')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'contact' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              פרטי קשר
            </button>
            <button 
              onClick={() => handleTabChange('about')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'about' ? 'bg-green-100 text-green-700' : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              אודות
            </button>
            <button 
              onClick={() => handleTabChange('social')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'social' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              מדיה חברתית
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <div className="px-6 pb-6 min-h-[360px]">
            {/* Contact Info Tab */}
            {activeTab === 'contact' && (
              <motion.div 
                key="contact"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
              
                <a
                  href="tel:+972525729333"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-md">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">טלפון</div>
                    <div className="text-sm text-gray-500">052-572-9333</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/972525729333"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-green-50 to-green-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-md">
                    <FaWhatsapp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">וואטסאפ</div>
                    <div className="text-sm text-gray-500">שליחת הודעה מיידית</div>
                  </div>
                </a>

                <a
                  href="mailto:Rojeh.n9@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-indigo-50 to-indigo-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-3 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-full shadow-md">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">אימייל</div>
                    <div className="text-sm text-gray-500">Rojeh.n9@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/c/972525729333"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-yellow-50 to-amber-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-3 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full shadow-md">
                    <ExternalLink className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">קטלוג נכסים</div>
                    <div className="text-sm text-gray-500">לחצו לצפייה בהיצע הנכסים</div>
                  </div>
                </a>

                <a
                  href="/rojeh-naddaf.vcf"
                  download
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-purple-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full shadow-md">
                    <UserPlus className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">הוסף לאנשי הקשר</div>
                    <div className="text-sm text-gray-500">שמירת פרטי יצירת הקשר במכשיר</div>
                  </div>
                </a>
              </motion.div>
            )}

            {/* About Tab */}
            {activeTab === 'about' && (
              <motion.div 
                key="about"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-2xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <User className="h-5 w-5 text-blue-600" />
                    <span>מי אני</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    שלום ונעים להכיר, 🤝<br/>
                    שמי רוג׳יה נדאף יועץ ומשווק נדל״ן עם ניסיון של שנים בתחום ממשרד רימקס סלקטד חיפה.
                    ואני כאן כדי להפוך את תהליך המכירה או קניית הנכס לחוויה פשוטה, מקצועית ורווחית.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-2xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">למה לעבוד איתי⁉</h3>
                  <ul className="text-gray-700 space-y-2 text-sm leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-lg">🏡</span> 
                      <span><strong>ניסיון ומקצועיות</strong> – אני מכיר את השוק כמו את כף ידי, עם מאות עסקאות מוצלחות.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-lg">✅</span> 
                      <span><strong>יחס אישי</strong> – כל לקוח הוא עולם ומלואו, ואני כאן כדי להבין בדיוק מה אתם צריכים.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-lg">📊</span> 
                      <span><strong>משא ומתן מנצח</strong> – דואג להשיג עבורכם את העסקה הכי טובה בתנאים הכי משתלמים.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-2xl">
                  <p className="text-gray-700 font-medium">
                    רוצים למצוא את הבית הבא שלכם או למכור נכס בתנאים הטובים ביותר⁉ אני כאן בשבילכם‼
                  </p>
                  <p className="text-center text-gray-500 mt-3 text-sm">
                    רימקס סלקטד חיפה. הבחירה הנכונה בעולם הנדל&quot;ן🥇
                  </p>
                </div>
              </motion.div>
            )}

            {/* Social Media Tab */}
            {activeTab === 'social' && (
              <motion.div 
                key="social"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <p className="text-center text-gray-600 mb-6 flex items-center justify-center gap-2">
              עקבו אחריי ברשתות החברתיות   <MdVerified className="text-blue-500 h-4 w-4" />
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                 
                  <a 
                    href="https://www.facebook.com/rojeh.nadaf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-md">
                      <Facebook className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-medium text-gray-900">פייסבוק</span>
                  </a>
                  <a 
                    href="https://www.instagram.com/rojehna_realestate" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-gradient-to-r from-pink-50 to-purple-50 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="p-3 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 rounded-full shadow-md">
                      <Instagram className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-medium text-gray-900">אינסטגרם</span>
                  </a>
                  
                 
                  
                  <a 
                    href="https://youtube.com/@rojehnadaf-realestate?si=sMwP-YfYk0j5rJLE" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-gradient-to-r from-red-50 to-red-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="p-3 bg-gradient-to-r from-red-600 to-red-700 rounded-full shadow-md">
                      <FaYoutube className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-medium text-gray-900">יוטיוב</span>
                  </a>
                  <a 
                    href="https://www.tiktok.com/@rojehnadaf_realestate" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="p-3 bg-black rounded-full shadow-md">
                      <FaTiktok className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-medium text-gray-900">טיקטוק</span>
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </AnimatePresence>

        {/* Action Buttons */}
        <div className="px-6 pb-8 space-y-3">
          <motion.a 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            href="https://calendly.com/rojeh-n9/30min" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3.5 px-4 rounded-xl font-medium transition-all hover:shadow-lg hover:from-blue-700 hover:to-indigo-700"
          >
            <div className="flex items-center justify-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>קביעת פגישת ייעוץ</span>
            </div>
          </motion.a>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            onClick={handleShare}
            className="block w-full text-center border border-gray-200 bg-white text-gray-700 py-3.5 px-4 rounded-xl font-medium transition-all hover:bg-gray-50 hover:shadow-md"
          >
            <div className="flex items-center justify-center gap-2">
              <Share2 className="h-5 w-5" />
              <span>{showCopiedAlert ? 'הקישור הועתק בהצלחה!' : 'שיתוף כרטיס הביקור'}</span>
            </div>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            onClick={toggleQrModal}
            className="block w-full text-center border border-gray-200 bg-white text-gray-700 py-3.5 px-4 rounded-xl font-medium transition-all hover:bg-gray-50 hover:shadow-md"
          >
            <div className="flex items-center justify-center gap-2">
              <QrCode className="h-5 w-5" />
              <span>QR CODE</span>
            </div>
          </motion.button>
        </div>

        {/* Footer */}
        <div className="py-4 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">© {new Date().getFullYear()} רוג&apos;יה נדאף | יועץ ומשווק נדל&quot;ן</p>
        </div>
      </motion.div>

      {/* QR Code Modal */}
      <AnimatePresence>
        {showQrModal && (
          <>
            {/* Semi-transparent backdrop */}
            <div 
              className="fixed inset-0 bg-black/40 backdrop-blur-[1px] z-40"
              onClick={toggleQrModal}
            ></div>
            
            {/* Modal content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center p-4 z-50 pointer-events-none"
            >
              <div 
                className="bg-white rounded-2xl p-6 shadow-2xl max-w-xs w-full mx-auto relative pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={toggleQrModal}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
                
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">קוד QR</h3>
                  <p className="text-sm text-gray-600">סרקו כדי לשמור את פרטי הקשר</p>
                </div>
                
                {mounted && (
                  <div className="p-4 bg-white rounded-2xl shadow-md border border-gray-100 mx-auto max-w-[200px]">
                    <QRCode 
                      value={typeof window !== 'undefined' ? window.location.href : 'https://example.com'} 
                      size={180}
                      className="rounded-xl"
                    />
                  </div>
                )}
                
                <p className="text-sm text-gray-500 text-center mt-4">
                  סרקו את הקוד באמצעות המצלמה בטלפון הנייד
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Notification */}
      {showCopiedAlert && (
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-4 right-1/2 transform translate-x-1/2 bg-gray-900 text-white px-4 py-3 rounded-lg shadow-lg text-sm"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 13l4 4L19 7"></path>
            </svg>
            <span>הקישור הועתק בהצלחה!</span>
          </div>
        </motion.div>
      )}
    </div>
  );
} 