
import { Card } from "@/components/ui/card";
import { DollarSign, TrendingUp } from "lucide-react";

interface PrizeCardProps {
  prize: string;
  index: number;
}

const PrizeCard = ({ prize, index }: PrizeCardProps) => {
  const isPayout = prize.includes("payout");
  const isTopPrize = prize.includes("5000") || prize.includes("2000") || prize.includes("1000");
  
  return (
    <Card 
      className={`
        p-4 text-center transition-all duration-300 hover:scale-105 animate-fade-in-up
        ${isTopPrize ? 'gradient-gold text-background treasure-glow' : 'gradient-premium border-accent/30'}
        ${isPayout ? 'border-2 border-accent' : ''}
      `}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-col items-center space-y-2">
        {isPayout ? (
          <TrendingUp className={`h-6 w-6 ${isTopPrize ? 'text-background' : 'text-accent'}`} />
        ) : (
          <DollarSign className={`h-6 w-6 ${isTopPrize ? 'text-background' : 'text-accent'}`} />
        )}
        
        <div className="text-sm font-bold">
          {isPayout ? (
            <div>
              <div className="text-xs opacity-80">🚀</div>
              <div>PAYOUT</div>
              <div>AUMENTADO</div>
            </div>
          ) : (
            <div>
              <div className="text-lg">💰</div>
              <div>{prize.replace(' no pix', '')}</div>
              {prize.includes('pix') && (
                <div className="text-xs opacity-80 mt-1">no PIX</div>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default PrizeCard;
