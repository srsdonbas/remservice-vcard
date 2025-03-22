import React from 'react';
import { Globe } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center" 
         style={{
           backgroundImage: "url('https://i.ibb.co/k6Bj9mzy/a377.jpg')",
           backgroundSize: 'cover',
           backgroundPosition: 'center'
         }}>
      <div className="w-full max-w-md p-8 space-y-8">
        {/* Logo and Company Name */}
        <div className="text-center space-y-4">
          <img 
            src="https://i.ibb.co/ycqwnP3P/log.png" 
            alt="RemService Logo" 
            className="mx-auto w-48"
          />
          <h1 className="text-4xl font-bold text-white">RemService</h1>
          <p className="text-sm text-white">ПРОФЕССИОНАЛЬНЫЙ РЕМОНТ И ОТДЕЛКА</p>
        </div>

        {/* vBCard with animation */}
        <div className="flex justify-center my-8">
          <div className="loading-bar">vBCard</div>
        </div>

        {/* Contact Buttons */}
        <div className="flex justify-center items-center space-x-4 my-8">
          <a 
            href="tel:+380506983215" 
            className="contact-button"
          >
            <span>КОНСУЛЬТАЦИЯ</span>
          </a>
          <a 
            href="tel:+380959395442" 
            className="contact-button"
          >
            <span>ЗАМЕР</span>
          </a>
        </div>

        {/* Social Media Buttons */}
        <div className="flex justify-center space-x-4 my-8">
          <a href="https://www.instagram.com/remdru/" className="social-button">
            <img src="https://i.ibb.co/0RZdfNbY/Instagram-black.png" alt="Instagram" className="w-8 h-8" />
          </a>
          <a href="https://www.youtube.com/channel/UCk2QFC7GJRRSEewU9KeqQTA" className="social-button">
            <img src="https://i.ibb.co/BVJJcZBK/You-Tube-black.png" alt="YouTube" className="w-8 h-8" />
          </a>
          <a href="https://t.me/RemSDru" className="social-button">
            <img src="https://i.ibb.co/ycVYHcgF/Telegram-black.png" alt="Telegram" className="w-8 h-8" />
          </a>
          <a href="https://www.tiktok.com/@remservice.dru.dn" className="social-button">
            <img src="https://i.ibb.co/Mrq7spy/Tik-Tok-black.png" alt="TikTok" className="w-8 h-8" />
          </a>
        </div>

        {/* Website Button */}
        <div className="flex justify-center">
          <a 
            href="https://vengrdesign.wixsite.com/rem-service"
            className="website-button"
          >
            <Globe className="mr-2" />
            <span>WebSite RemService</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;