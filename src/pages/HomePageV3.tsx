import React from 'react';
import { V3HeroAsymmetric } from '@/components/home/V3HeroAsymmetric';
import { V3TerroirBar } from '@/components/home/V3TerroirBar';
import { V3BentoShowcase } from '@/components/home/V3BentoShowcase';
import { V3SensoryAromaWheel } from '@/components/home/V3SensoryAromaWheel';
import { V3CraftsmanshipStory } from '@/components/home/V3CraftsmanshipStory';
import { V3CommunityJournal } from '@/components/home/V3CommunityJournal';
import { BotanicalGrowthCanvas } from '@/components/ui/BotanicalGrowthCanvas';
import { BotanicalSectionDivider } from '@/components/ui/BotanicalSectionDivider';

export const HomePageV3: React.FC = () => {
  return (
    <div className="relative flex flex-col w-full overflow-hidden bg-[#FAF8F5]">
      {/* Hand-Drawn Artisanal Botanical Canvas (Scroll-Linked Growth from Earth) */}
      <BotanicalGrowthCanvas />

      {/* Foreground Content Stack */}
      <div className="relative z-10 flex flex-col w-full">
        {/* 1. Asymmetric 7/5 Hero with Editorial Weight */}
        <V3HeroAsymmetric />

        {/* 2. Quiet Terroir & Quality Pillars Bar */}
        <V3TerroirBar />

        {/* Botanical Section Divider 1 */}
        <BotanicalSectionDivider className="mt-8 mb-4 sm:my-10" />

        {/* 3. Asymmetric Bento Showcase ("One Thing Leads") */}
        <V3BentoShowcase />

        {/* Botanical Section Divider 2 */}
        <BotanicalSectionDivider className="my-8 sm:my-12" />

        {/* 4. Interactive Sensory Aromatherapy Wheel */}
        <V3SensoryAromaWheel />

        {/* 5. Editorial Chronicle of the Alembic & Harvest */}
        <V3CraftsmanshipStory />

        {/* Botanical Section Divider 3 */}
        <BotanicalSectionDivider className="my-8 sm:my-12" />

        {/* 6. Authentic Visual Community Journal */}
        <V3CommunityJournal />
      </div>
    </div>
  );
};
