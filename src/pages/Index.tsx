
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, Gift, Sparkles } from "lucide-react";
import TreasureChest from "@/components/TreasureChest";
import PrizeCard from "@/components/PrizeCard";

type Prize = "100 reais" | "50 reais" | "payout aumentado";

const Index = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedChest, setSelectedChest] = useState<number | null>(null);
  const [revealedPrize, setRevealedPrize] = useState<Prize | null>(null);
  const [gamePhase, setGamePhase] = useState<'initial' | 'spinning' | 'selecting' | 'revealed'>('initial');
  const [chestPositions, setChestPositions] = useState<number[]>([0, 1, 2, 3, 4, 5]);

  const prizes = ["100 reais", "50 reais", "payout aumentado"] as Prize[];
  const topPrizes = ["5000 reais no pix", "2000 reais no pix", "1000 reais no pix", "100 reais", "50 reais", "payout aumentado"];

  const startSorteio = () => {
    setGamePhase('spinning');
    setIsSpinning(true);
    setSelectedChest(null);
    setRevealedPrize(null);
    
    // Embaralha as posições dos baús durante o spinning
    const shuffleInterval = setInterval(() => {
      setChestPositions(prev => {
        const newPositions = [...prev];
        // Troca duas posições aleatórias
        const idx1 = Math.floor(Math.random() * 6);
        const idx2 = Math.floor(Math.random() * 6);
        [newPositions[idx1], newPositions[idx2]] = [newPositions[idx2], newPositions[idx1]];
        return newPositions;
      });
    }, 200); // Troca posições a cada 200ms
    
    // Para o spinning após 1.5 segundos (mais rápido)
    setTimeout(() => {
      clearInterval(shuffleInterval);
      setIsSpinning(false);
      setGamePhase('selecting');
    }, 1500);
  };

  const selectChest = (chestIndex: number) => {
    if (gamePhase !== 'selecting') return;
    
    setSelectedChest(chestIndex);
    
    // Simula a seleção do prêmio aleatório
    const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
    
    setTimeout(() => {
      setRevealedPrize(randomPrize);
      setGamePhase('revealed');
    }, 1000);
  };

  const resetGame = () => {
    setGamePhase('initial');
    setIsSpinning(false);
    setSelectedChest(null);
    setRevealedPrize(null);
    setChestPositions([0, 1, 2, 3, 4, 5]); // Reseta as posições dos baús
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Partículas flutuantes */}
      <div className="floating-particles">
        {Array.from({ length: 15 }, (_, index) => (
          <div key={index} className="particle"></div>
        ))}
      </div>
      {/* Header com prêmios */}
      <header className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Logo */}
          <div className="text-center mb-8">
            <img 
              src="/lovable-uploads/1fdd9773-c404-4b9f-861e-257bf15f36ec.png" 
              alt="Vollax Invest" 
              className="mx-auto h-16 md:h-20 opacity-90 animate-fade-in-up"
            />
          </div>

          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold gradient-gold bg-clip-text text-transparent mb-4 animate-fade-in-up">
              🎰 Sorteio dos Baús Premiados
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-accent animate-fade-in-up treasure-glow" style={{animationDelay: '0.2s'}}>
              💎 ESCOLHA SEU BAÚ E GANHE PRÊMIOS INCRÍVEIS! 💎
            </p>
          </div>

          {/* Cards de prêmios principais */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {topPrizes.map((prize, index) => (
              <PrizeCard key={index} prize={prize} index={index} />
            ))}
          </div>
        </div>
      </header>

      {/* Área principal do jogo */}
      <main className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Botão de sorteio */}
          <div className="text-center mb-12">
            <Button 
              onClick={gamePhase === 'revealed' ? resetGame : startSorteio}
              disabled={gamePhase === 'spinning' || gamePhase === 'selecting'}
              size="lg"
              className="px-12 py-6 text-xl font-bold gradient-gold hover:scale-105 transition-all duration-300 treasure-glow animate-pulse-glow"
            >
              <Gift className="mr-3 h-6 w-6" />
              {gamePhase === 'revealed' ? 'Jogar Novamente' : 'Sortear Baú Premiado'}
            </Button>
            
            {gamePhase === 'selecting' && (
              <p className="mt-4 text-lg text-accent animate-pulse">
                ✨ Clique no baú que você deseja abrir! ✨
              </p>
            )}
          </div>

          {/* Grid de baús */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            {chestPositions.map((originalIndex, currentIndex) => (
              <TreasureChest
                key={originalIndex}
                index={originalIndex}
                isSpinning={isSpinning}
                isSelected={selectedChest === originalIndex}
                onClick={() => selectChest(originalIndex)}
                canSelect={gamePhase === 'selecting'}
              />
            ))}
          </div>

          {/* Resultado do prêmio */}
          {revealedPrize && (
            <Card className="max-w-md mx-auto p-8 text-center gradient-premium border-accent treasure-glow prize-reveal">
              <div className="mb-6">
                <Trophy className="h-16 w-16 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-accent mb-2">🎉 Parabéns! 🎉</h3>
                <p className="text-lg text-muted-foreground">Você ganhou:</p>
              </div>
              
              <div className="py-6 px-4 rounded-lg gradient-gold text-background">
                <p className="text-3xl font-bold">
                  {revealedPrize === "payout aumentado" ? "🚀 PAYOUT AUMENTADO" : `💰 ${revealedPrize.toUpperCase()}`}
                </p>
              </div>
              
              <div className="mt-6 flex items-center justify-center text-sm text-muted-foreground">
                <Sparkles className="h-4 w-4 mr-2" />
                <span>Prêmio creditado automaticamente!</span>
                <Sparkles className="h-4 w-4 ml-2" />
              </div>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
