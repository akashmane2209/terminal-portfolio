import React, { useEffect, useState } from 'react';

function WhoAmI() {
  const START_DATE = new Date('11-01-2019');
  const today = new Date();
  const [experience, setExperience] = useState<number[]>([]);
  const calculateExperience = () => {
    const startMonth = START_DATE.getFullYear() * 12 + START_DATE.getMonth();
    const endMonth = today.getFullYear() * 12 + today.getMonth();
    const monthInterval = endMonth - startMonth;
    const yearsOfExperience = Math.floor(monthInterval / 12);
    const monthsOfExperience = monthInterval % 12;
    setExperience([yearsOfExperience, monthsOfExperience]);
  };

  useEffect(() => {
    calculateExperience();
  }, []);
  return (
    <div>
      My name is Akash, I currently live in Bangalore, India 🇮🇳 and work as a
      frontend engineer at{' '}
      <a
        className="font-medium underline"
        href="https://razorpay.com"
        target="_blank"
        rel="noreferrer"
      >
        Razorpay
      </a>
      , a fintech startup that provides thousands of customer payment solutions
      to accept, process, and disburse payments, provide credit lines, corporate
      credit cards and much more. I have a professional experience of{' '}
      {experience[0]}.{experience[1]} years and enjoy working on solving complex
      problems!
      <br />
      <br />I am currently working with the{' '}
      <a
        className="font-medium underline"
        href="https://razorpay.com/magic/"
        target="_blank"
        rel="noreferrer"
      >
        Magic Checkout
      </a>{' '}
      team helping with improving the accuracy of analytics & building new &
      exciting features
    </div>
  );
}

export default WhoAmI;
