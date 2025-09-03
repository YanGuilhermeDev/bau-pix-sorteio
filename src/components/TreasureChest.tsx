
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
      {/* Baú de Tesouro Pirata Realístico 3D */}
      <div className="w-full h-full flex flex-col items-center justify-center relative perspective-1000">
        
        {/* Tampa do baú arqueada */}
        <div className="relative w-28 h-14 mb-0">
          {/* Tampa curvada superior */}
          <div className="absolute top-0 w-28 h-10 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-800 transform-gpu rounded-t-3xl" 
               style={{
                 boxShadow: 'inset 0 3px 6px rgba(255, 193, 7, 0.4), 0 6px 15px rgba(0, 0, 0, 0.5)'
               }}>
            {/* Reflexo dourado na tampa curvada */}
            <div className="absolute top-2 left-4 right-4 h-2 bg-gradient-to-r from-yellow-200/80 via-yellow-300/90 to-yellow-200/80 rounded-full blur-sm"></div>
            
            {/* Dobradiças ornamentadas */}
            <div className="absolute top-3 left-3 w-4 h-3 bg-gradient-to-br from-yellow-700 to-amber-900 rounded-lg border-2 border-amber-600 shadow-md">
              <div className="absolute top-0.5 left-1 w-2 h-1 bg-yellow-400 rounded-full"></div>
            </div>
            <div className="absolute top-3 right-3 w-4 h-3 bg-gradient-to-bl from-yellow-700 to-amber-900 rounded-lg border-2 border-amber-600 shadow-md">
              <div className="absolute top-0.5 right-1 w-2 h-1 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
          
          {/* Fechadura pirata elaborada */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
            <div className="w-6 h-6 bg-gradient-to-br from-amber-600 via-yellow-700 to-amber-900 rounded-lg border-3 border-amber-500 shadow-xl relative">
              {/* Buraco da fechadura */}
              <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-amber-900 rounded-full shadow-inner border border-amber-800"></div>
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1.5 bg-amber-900 rounded-b-sm"></div>
              
              {/* Ornamentos dourados */}
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-yellow-400 rounded-full shadow-sm"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full shadow-sm"></div>
            </div>
          </div>
        </div>
        
        {/* Corpo principal do baú pirata */}
        <div className="relative w-28 h-18">
          {/* Face frontal arqueada */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 rounded-lg border-3 border-amber-500 shadow-2xl"
               style={{
                 borderRadius: '12px 12px 20px 20px'
               }}>
            
            {/* Tábuas de madeira simuladas */}
            <div className="absolute top-1 left-2 right-2 h-0.5 bg-amber-800 rounded-full shadow-inner"></div>
            <div className="absolute top-4 left-2 right-2 h-0.5 bg-amber-800 rounded-full shadow-inner"></div>
            <div className="absolute top-7 left-2 right-2 h-0.5 bg-amber-800 rounded-full shadow-inner"></div>
            <div className="absolute bottom-4 left-2 right-2 h-0.5 bg-amber-800 rounded-full shadow-inner"></div>
            <div className="absolute bottom-1 left-2 right-2 h-0.5 bg-amber-800 rounded-full shadow-inner"></div>
            
            {/* Bandas metálicas piratas */}
            <div className="absolute top-2 left-1 right-1 h-2 bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 rounded-full shadow-inner border border-yellow-400"
                 style={{
                   background: 'linear-gradient(135deg, #fbbf24, #f59e0b, #d97706, #f59e0b, #fbbf24)'
                 }}>
              <div className="absolute top-0.5 left-2 right-2 h-0.5 bg-yellow-200 rounded-full"></div>
            </div>
            <div className="absolute bottom-2 left-1 right-1 h-2 bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 rounded-full shadow-inner border border-yellow-400"
                 style={{
                   background: 'linear-gradient(135deg, #fbbf24, #f59e0b, #d97706, #f59e0b, #fbbf24)'
                 }}>
              <div className="absolute top-0.5 left-2 right-2 h-0.5 bg-yellow-200 rounded-full"></div>
            </div>
            
            {/* Cantoneiras ornamentadas de pirata */}
            <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-gradient-to-br from-yellow-500 to-amber-700 rounded-tl-lg border-2 border-amber-400 shadow-lg">
              <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
            </div>
            <div className="absolute top-0.5 right-0.5 w-4 h-4 bg-gradient-to-bl from-yellow-500 to-amber-700 rounded-tr-lg border-2 border-amber-400 shadow-lg">
              <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
            </div>
            <div className="absolute bottom-0.5 left-0.5 w-4 h-4 bg-gradient-to-tr from-yellow-500 to-amber-700 rounded-bl-lg border-2 border-amber-400 shadow-lg">
              <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
            </div>
            <div className="absolute bottom-0.5 right-0.5 w-4 h-4 bg-gradient-to-tl from-yellow-500 to-amber-700 rounded-br-lg border-2 border-amber-400 shadow-lg">
              <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
            </div>
            
            {/* Símbolo de tesouro pirata no centro */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-10 border-2 border-amber-400 rounded-xl bg-gradient-to-br from-amber-700/30 to-amber-900/50 shadow-inner">
              {/* Caveira pirata estilizada */}
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-amber-800 rounded-t-full border border-yellow-600"></div>
              <div className="absolute top-2.5 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-amber-800 rounded-full"></div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-amber-800 rounded-full"></div>
              
              {/* Moedas simuladas */}
              <div className="absolute top-1 left-2 w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-sm"></div>
              <div className="absolute top-2 right-2 w-1 h-1 bg-yellow-300 rounded-full"></div>
              <div className="absolute bottom-1 left-3 w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-sm"></div>
            </div>
            
            {/* Pés ornamentados do baú */}
            <div className="absolute -bottom-1 left-3 w-3 h-3 bg-gradient-to-br from-amber-600 to-amber-900 rounded-full shadow-xl border border-amber-500"></div>
            <div className="absolute -bottom-1 right-3 w-3 h-3 bg-gradient-to-br from-amber-600 to-amber-900 rounded-full shadow-xl border border-amber-500"></div>
          </div>
          
          {/* Sombra lateral direita para profundidade 3D */}
          <div className="absolute top-1 -right-1.5 w-3 h-16 bg-gradient-to-r from-amber-900/70 to-amber-900/30 transform skew-y-6 rounded-r-xl shadow-lg"></div>
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
