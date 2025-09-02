
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
      <div className="w-full h-full flex flex-col items-center justify-center">
        {/* Tampa do baú */}
        <div className="w-16 h-8 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-t-xl border-2 border-yellow-700 mb-1 relative">
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-yellow-400 rounded-sm"></div>
          {/* Fechadura */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-yellow-900 rounded-sm border border-yellow-700"></div>
        </div>
        
        {/* Base do baú */}
        <div className="w-16 h-12 bg-gradient-to-br from-yellow-700 to-yellow-900 rounded-b-xl border-2 border-yellow-800 relative">
          {/* Detalhes metálicos */}
          <div className="absolute top-1 left-1 right-1 h-1 bg-yellow-500 rounded-full opacity-60"></div>
          <div className="absolute bottom-1 left-1 right-1 h-1 bg-yellow-500 rounded-full opacity-60"></div>
        </div>
        
        {/* Brilho quando hovering */}
        {(isHovered && canSelect) || isSelected ? (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent rounded-lg animate-pulse"></div>
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
