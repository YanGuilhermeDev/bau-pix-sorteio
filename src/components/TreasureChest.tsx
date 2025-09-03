
import { useState } from "react";
import { Card } from "@/components/ui/card";

interface TreasureChestProps {
  index: number;
  isSpinning: boolean;
  isSelected: boolean;
  onClick: () => void;
  canSelect: boolean;
}

const TreasureChest = ({ index, isSpinning, isSelected, onClick, canSelect }: TreasureChestProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className={`
        relative aspect-square p-4 cursor-pointer transition-all duration-300 border-2
        ${isSpinning ? '' : 'chest-bounce'}
        ${isSelected ? 'border-accent treasure-glow scale-110' : 'border-border hover:border-accent/50'}
        ${canSelect ? 'hover:scale-105' : ''}
        ${isHovered && canSelect ? 'treasure-glow' : ''}
        gradient-chest
      `}
      onClick={canSelect ? onClick : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Baú do tesouro 3D */}
      <div className="w-full h-full flex flex-col items-center justify-center relative perspective-1000">
        
        {/* Tampa do baú com perspectiva */}
        <div className="relative w-24 h-12 mb-1">
          {/* Parte superior da tampa (vista de cima) */}
          <div className="absolute top-0 w-24 h-8 bg-gradient-to-br from-amber-500 via-yellow-600 to-amber-700 transform-gpu" 
               style={{
                 clipPath: 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)',
                 boxShadow: 'inset 0 2px 4px rgba(255, 193, 7, 0.3), 0 4px 12px rgba(0, 0, 0, 0.4)'
               }}>
            {/* Reflexo metálico na tampa */}
            <div className="absolute top-1 left-3 right-3 h-1 bg-gradient-to-r from-yellow-200 via-yellow-300 to-transparent rounded-full opacity-80"></div>
          </div>
          
          {/* Frente da tampa */}
          <div className="absolute bottom-0 w-24 h-6 bg-gradient-to-b from-amber-600 to-amber-800 rounded-t-lg border-2 border-amber-500 shadow-lg">
            {/* Dobradiças 3D */}
            <div className="absolute top-1 left-2 w-3 h-2 bg-gradient-to-br from-yellow-800 to-amber-900 rounded-sm shadow-inner border border-amber-700"></div>
            <div className="absolute top-1 right-2 w-3 h-2 bg-gradient-to-br from-yellow-800 to-amber-900 rounded-sm shadow-inner border border-amber-700"></div>
            
            {/* Fechadura elaborada */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <div className="w-5 h-5 bg-gradient-to-br from-amber-700 via-yellow-800 to-amber-900 rounded-full border-2 border-amber-600 shadow-lg">
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-inner"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-1 h-2 bg-amber-800 rounded-b-sm"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Corpo principal do baú com perspectiva 3D */}
        <div className="relative w-24 h-16">
          {/* Face frontal */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 rounded-lg border-2 border-amber-500 shadow-2xl">
            
            {/* Bandas metálicas horizontais */}
            <div className="absolute top-2 left-1 right-1 h-1.5 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 rounded-full shadow-inner border-t border-yellow-300"></div>
            <div className="absolute bottom-2 left-1 right-1 h-1.5 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 rounded-full shadow-inner border-t border-yellow-300"></div>
            
            {/* Cantoneiras metálicas nos cantos */}
            <div className="absolute top-1 left-1 w-3 h-3 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-tl-lg border border-amber-400 shadow-lg"></div>
            <div className="absolute top-1 right-1 w-3 h-3 bg-gradient-to-bl from-yellow-500 to-amber-600 rounded-tr-lg border border-amber-400 shadow-lg"></div>
            <div className="absolute bottom-1 left-1 w-3 h-3 bg-gradient-to-tr from-yellow-500 to-amber-600 rounded-bl-lg border border-amber-400 shadow-lg"></div>
            <div className="absolute bottom-1 right-1 w-3 h-3 bg-gradient-to-tl from-yellow-500 to-amber-600 rounded-br-lg border border-amber-400 shadow-lg"></div>
            
            {/* Padrão decorativo central */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-8 border-2 border-amber-400 rounded-lg bg-gradient-to-br from-amber-700/20 to-amber-900/40 shadow-inner">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-yellow-500 rounded-full bg-amber-800"></div>
            </div>
            
            {/* Pés do baú */}
            <div className="absolute -bottom-1 left-2 w-2 h-2 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full shadow-md"></div>
            <div className="absolute -bottom-1 right-2 w-2 h-2 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full shadow-md"></div>
          </div>
          
          {/* Sombra lateral direita para dar profundidade */}
          <div className="absolute top-1 -right-1 w-2 h-14 bg-gradient-to-r from-amber-900/60 to-amber-900/30 transform skew-y-12 rounded-r-lg"></div>
        </div>
        
        {/* Efeitos mágicos quando ativo */}
        {(isHovered && canSelect) || isSelected ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/40 to-transparent rounded-lg animate-pulse pointer-events-none"></div>
            <div className="absolute -inset-2 bg-gradient-conic from-amber-400/30 via-yellow-300/50 to-amber-400/30 rounded-xl blur-sm animate-pulse pointer-events-none"></div>
            
            {/* Partículas brilhantes */}
            <div className="absolute top-2 left-3 w-1 h-1 bg-yellow-300 rounded-full animate-pulse shadow-glow"></div>
            <div className="absolute top-4 right-2 w-0.5 h-0.5 bg-amber-200 rounded-full animate-pulse delay-300"></div>
            <div className="absolute bottom-6 left-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-700"></div>
          </>
        ) : null}
      </div>
      
      {/* Número do baú */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-accent text-background rounded-full flex items-center justify-center font-bold text-sm">
        {index + 1}
      </div>
      
      {/* Efeito de seleção */}
      {isSelected && (
        <div className="absolute inset-0 bg-accent/20 rounded-lg animate-pulse"></div>
      )}
    </Card>
  );
};

export default TreasureChest;
