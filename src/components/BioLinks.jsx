import { useEffect, useRef, useState } from 'react';
import { FaBriefcase, FaTags, FaGraduationCap, FaTshirt, FaDesktop, FaLinkedin, FaGithub } from 'react-icons/fa';

const links = [
  { icon: <FaBriefcase />, label: 'Meu portfólio', url: 'https://portfolioeliasjr-dev.vercel.app/' },
  { icon: <FaGithub />, label: 'Meu GitHub', url: 'https://github.com/eliasjrdev' },
  { icon: <FaLinkedin />, label: 'Meu Linkedin', url: 'https://www.linkedin.com/in/elias-c/' },
  { icon: <FaTags />, label: 'Entre no meu grupo de ofertas', url: 'https://chat.whatsapp.com/HpwUiTQJhxW1w0eiDHlp9Y' },
  { icon: <FaGraduationCap />, label: 'Estude onde eu estudo', url: 'https://congenial.com.br/?utm_source=instagram&utm_medium=post&utm_campaign=elias&utm_id=eliasjr' },
  { icon: <FaTshirt />, label: 'Melhores camisetas de t.i |', extra: 'Cupom: ELIASJR10', url: 'https://www.useti.shop/useti?utm_source=instagram&utm_medium=afiliado&utm_campaign=eliasjrdev' },
  { icon: <FaDesktop />, label: 'Links do meu setup', url: 'https://www.amazon.com.br/shop/eliasjr.dev/list/3N5B136B4LTCE?ref_=cm_sw_r_cp_ud_aipsflist_39J9S6H1CW1FVYSJCJWX' },
];

export default function BioLinks() {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center py-12 px-4 overflow-hidden">
       <div className="absolute inset-0 -z-10 w-full h-full">
      </div>
      
      <style>
        {`
          @keyframes pulse-border {
            0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
            100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
          }
        `}
      </style>

      <div className="flex flex-col items-center">
        
        <div className="relative">
          <img
            src="/pfoto.jpg"
            alt="Foto de perfil"
            className="w-24 h-24 rounded-full border-4 border-[#1E2939] animate-pulse-border"
            style={{ animation: 'pulse-border 2s infinite' }}
          />
        </div>
        <h1 className="text-2xl font-bold mt-2">Elias Jr</h1>
        <p className="text-gray-400">Desenvolvedor Front-end</p>
      </div>

      <div className="mt-8 w-full max-w-md space-y-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-gray-900 hover:bg-gray-800 transition-all duration-200 p-4 rounded-xl shadow-lg border border-gray-800 hover:border-[#6B539D] transform hover:scale-101"
          >
            <div className="flex items-center space-x-3">
              <span className="text-xl">{link.icon}</span>
              <div>
                <span className="font-medium text-white leading-tight">{link.label}</span>
                {link.extra && (
                  <div className="text-sm text-green-400 font-bold">
                    {link.extra}
                  </div>
                )}
              </div>
            </div>
            <span className="text-gray-400">↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}