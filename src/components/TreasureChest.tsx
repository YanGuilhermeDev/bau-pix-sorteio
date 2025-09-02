
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
        relative aspect-square p-6 cursor-pointer transition-all duration-300 border-2
        ${isSpinning ? 'chest-spin' : 'chest-bounce'}
        ${isSelected ? 'border-accent treasure-glow scale-110' : 'border-border hover:border-accent/50'}
        ${canSelect ? 'hover:scale-105' : ''}
        ${isHovered && canSelect ? 'treasure-glow' : ''}
        gradient-chest
      `}
      onClick={canSelect ? onClick : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Baú do tesouro */}
      <div className="w-full h-full flex flex-col items-center justify-center relative">
        {/* Tampa do baú */}
        <div className="w-20 h-10 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-t-2xl border-3 border-amber-300 mb-1 relative shadow-2xl">
          {/* Reflexo na tampa */}
          <div className="absolute top-1 left-2 right-2 h-2 bg-gradient-to-r from-yellow-200/80 to-transparent rounded-full"></div>
          {/* Dobradiças */}
          <div className="absolute top-2 left-1 w-2 h-1 bg-amber-800 rounded-full"></div>
          <div className="absolute top-2 right-1 w-2 h-1 bg-amber-800 rounded-full"></div>
          {/* Fechadura ornamentada */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full border-2 border-amber-600">
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-amber-300 rounded-full"></div>
          </div>
        </div>
        
        {/* Base do baú */}
        <div className="w-20 h-14 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-b-2xl border-3 border-amber-500 relative shadow-2xl">
          {/* Detalhes metálicos ornamentados */}
          <div className="absolute top-2 left-2 right-2 h-1 bg-gradient-to-r from-amber-300 to-amber-400 rounded-full shadow-inner"></div>
          <div className="absolute bottom-2 left-2 right-2 h-1 bg-gradient-to-r from-amber-300 to-amber-400 rounded-full shadow-inner"></div>
          {/* Cantos decorativos */}
          <div className="absolute top-1 left-1 w-2 h-2 bg-amber-400 rounded-full"></div>
          <div className="absolute top-1 right-1 w-2 h-2 bg-amber-400 rounded-full"></div>
          <div className="absolute bottom-1 left-1 w-2 h-2 bg-amber-400 rounded-full"></div>
          <div className="absolute bottom-1 right-1 w-2 h-2 bg-amber-400 rounded-full"></div>
          {/* Padrão central */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-6 border-2 border-amber-400 rounded-lg opacity-40"></div>
        </div>
        
        {/* Brilho mágico */}
        {(isHovered && canSelect) || isSelected ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/30 to-transparent rounded-lg animate-pulse"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 via-yellow-300/40 to-amber-400/20 rounded-lg blur-sm animate-pulse"></div>
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
