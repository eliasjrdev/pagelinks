import { useEffect, useRef, useState } from 'react';
import { FaBriefcase, FaTags, FaGraduationCap, FaTshirt, FaDesktop, FaLinkedin, FaGithub, FaRocket, FaLanguage, FaInternetExplorer, FaUserNinja } from 'react-icons/fa';
import Animacao from './Animacao';
const links = [
  { icon: <FaRocket />, label: 'Desconto na Rocketseat |', extra: 'Cupom: ELIASJR', url: 'https://www.rocketseat.com.br/oferta/influencer/v2/eliasjr' },
  { icon: <FaTshirt />, label: 'Melhores camisetas de t.i |', extra: 'Cupom: ELIASJR10', url: 'https://www.useti.shop/useti?utm_source=instagram&utm_medium=afiliado&utm_campaign=eliasjrdev' },
  { icon: <FaUserNinja />, label: 'Seu pc na Setup Ninja |', extra: 'Cupom: ELIASJR', url: 'https://www.setupninja.com.br/?utm_source=linktree' },
  { icon: <FaLanguage />, label: 'Melhor escola de inglês para Techs', url: 'https://api.whatsapp.com/send?phone=5583993611976' },
  { icon: <FaTags />, label: 'Entre no meu grupo de ofertas', url: 'https://chat.whatsapp.com/HpwUiTQJhxW1w0eiDHlp9Y?mode=ems_copy_t' },
  { icon: <FaGithub />, label: 'Meu GitHub', url: 'https://github.com/eliasjrdev' },
  { icon: <FaLinkedin />, label: 'Meu Linkedin', url: 'https://www.linkedin.com/in/elias-c/' }
];

export default function BioLinks() {
  return (
    <div id="sparkle-bg" className="relative min-h-screen bg-black text-white flex flex-col items-center py-12 px-4">
       <Animacao />
       <div className="absolute inset-0 z-10 w-full h-full">
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
        
        <div className="relative z-10">
          <img
            src="/pfoto.jpg"
            alt="Foto de perfil"
            className="w-24 h-24 rounded-full border-4 border-[#1E2939] animate-pulse-border"
            style={{ animation: 'pulse-border 2s infinite' }}
          />
        </div>
        <h1 className="text-2xl font-bold mt-2 z-10">Elias Jr</h1>
        <p className="text-gray-400 z-10">Desenvolvedor Front-end 💻</p>
      </div>

      <div className="mt-8 w-full max-w-md space-y-4 z-10">
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
      <footer className='p-5'>
        <p>&copy; elias costa 2025</p>
      </footer>
    </div>
  );
}