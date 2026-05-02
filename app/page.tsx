'use client'; // Mark as client component

import { useState } from 'react';
import ClassSelectionPage from './class-selection/page';
import FinalizationPage from './finalization/page';
import ComingSoonPage from './coming-soon/page';

type HomeStep = 'class-selection' | 'finalization' | 'coming-soon';

export default function Home() {
  const [currentStep, setCurrentStep] = useState<HomeStep>('class-selection');

  const handleClassSelectionConfirm = () => {
    setCurrentStep('finalization');
  };

  const handleFinalizationComplete = () => {
    setCurrentStep('coming-soon');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'var(--cr-color-white)' }}>
      {currentStep === 'finalization' ? (
        <FinalizationPage onComplete={handleFinalizationComplete} />
      ) : currentStep === 'coming-soon' ? (
        <ComingSoonPage />
      ) : (
        <ClassSelectionPage onConfirm={handleClassSelectionConfirm} />
      )}
    </div>
  );
}
