import { Github, Linkedin } from 'lucide-react';

export default function CreatorBadge() {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 py-8 mt-12 border-t border-gray-200">
      <p className="text-lg font-semibold text-gray-800">
        Creator - Dhiraj Malwade
      </p>
      <div className="flex items-center gap-4">
        <a 
          href="https://github.com/nemestron/brand-buddy-ai" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-600 hover:text-black transition-colors duration-200"
        >
          <Github className="w-6 h-6" />
        </a>
        <a 
          href="https://www.linkedin.com/in/dhiraj-malwade-6a8385399/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
        >
          <Linkedin className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
