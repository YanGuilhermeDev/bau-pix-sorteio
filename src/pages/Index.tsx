
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

  const prizes = ["100 reais", "50 reais", "payout aumentado"] as Prize[];
  const topPrizes = ["5000 reais no pix", "2000 reais no pix", "1000 reais no pix", "100 reais", "50 reais", "payout aumentado"];

  const startSorteio = () => {
    setGamePhase('spinning');
    setIsSpinning(true);
    setSelectedChest(null);
    setRevealedPrize(null);
    
    // Para o spinning após 3 segundos
    setTimeout(() => {
      setIsSpinning(false);
      setGamePhase('selecting');
    }, 3000);
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
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header com prêmios */}
      <header className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold gradient-gold bg-clip-text text-transparent mb-4 animate-fade-in-up">
              🎰 Sorteio dos Baús Premiados
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Escolha seu baú e ganhe prêmios incríveis!
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
            {Array.from({ length: 6 }, (_, index) => (
              <TreasureChest
                key={index}
                index={index}
                isSpinning={isSpinning}
                isSelected={selectedChest === index}
                onClick={() => selectChest(index)}
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
