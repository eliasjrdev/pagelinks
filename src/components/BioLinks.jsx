import { useEffect, useRef, useState } from 'react';
import { FaBriefcase, FaTags, FaGraduationCap, FaTshirt, FaDesktop, FaLinkedin, FaGithub, FaRocket, FaLanguage, FaInternetExplorer, FaUserNinja, FaRobot, FaChair } from 'react-icons/fa';
import Animacao from './Animacao';
const links = [
  { icon: <FaRocket />, label: 'Desconto na Rocketseat |', extra: 'Cupom: ELIASJR', url: 'https://www.rocketseat.com.br/oferta/influencer/v2/eliasjr' },
  { icon: <FaChair />, label: 'CADEIRA ELEMENTS |', extra: 'Cupom: ELIASJRDEV5', url: 'https://loja.elements.com.br/products/cadeira-ergonomica-elements-galatea?utm_source=google&utm_content=787854282911&utm_campaign=20275573114&utm_term=galatea+elements&utm_medium=ppc&hsa_acc=4338881088&hsa_cam=20275573114&hsa_grp=189450019826&hsa_ad=787854282911&hsa_src=g&hsa_tgt=aud-1246012324559%3Akwd-2461983627762&hsa_kw=galatea+elements&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=20275573114&gbraid=0AAAAACqET4p9yCpQFrOUF07f0itbaluOt&gclid=CjwKCAiA-__MBhAKEiwASBmsBGcZhPu64z8tmf2ycBYTi-qselCfIUGVJc5GYvuuuci5l1-z-BC1EhoC-eAQAvD_BwE&variant=52318705975666' },
  { icon: <FaTshirt />, label: 'Melhores camisetas de t.i |', extra: 'Cupom: ELIASJR10', url: 'https://www.useti.shop/useti?utm_source=instagram&utm_medium=afiliado&utm_campaign=eliasjrdev' },
  { icon: <FaRobot />, label: 'Acesse a verdent AI', url: 'https://www.verdent.ai/?id=700859' },
  { icon: <FaRobot />, label: 'Acesse a Genspark AI aqui', url: 'https://bit.ly/40P6O8H' },
  { icon: <FaRobot />, label: 'Acesse a Emergent aqui', url: 'https://app.emergent.sh/?utm_shift=redirect&via=costa' },
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