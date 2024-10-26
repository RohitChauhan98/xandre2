// FAQs.tsx
import React, { useState } from 'react';
import openButton from '/public/assets/icons/openButton.png';
import closeButton from '/public/assets/icons/closeButton.png';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: 'What are the check-in and check-out time at Business Inn Sennichimae?',
    answer: 'Check-in is from 15:00, and check-out is until 11:00.',
  },
  {
    question: 'What is there to do at Business Inn Sennichimae?',
    answer: 'Guests can explore nearby attractions, dine at local restaurants, and more.',
  },
  {
    question: 'How far is Business Inn Sennichimae from the centre of Osaka?',
    answer: 'The hotel is located approximately 1.5 km from the city center.',
  },
  {
    question: 'What type of room can I book at Business Inn Sennichimae?',
    answer: 'Room options include Double, Twin, Family, and Triple rooms.',
  },
];

const FAQs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className="bg-white rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">The Policy</h2>
        <p className="mb-4">
          Guests are required to show a photo identification and credit card upon check-in.
          Please note that all Special Requests are subject to availability and additional charges may apply.
        </p>
        <p className="mb-4">
          Please inform Meander Osaka in advance of your expected arrival time.
          You can use the Special Requests box when booking, or contact the property directly with the contact details provided in your confirmation.
        </p>
        <p className="mb-4">
          This property will not accommodate hen, stag, or similar parties.
        </p>
        <p>Guests under the age of 18 can only check in with a parent or official guardian.</p>
      </div>

      <div className="faqs border-2 bg-white drop-shadow-lg rounded-lg my-8 p-6">
        <h2 className="text-2xl font-semibold mb-4">FAQs about Business Inn Sennichimae</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item border-t">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between w-full py-4 text-left text-lg font-medium"
              >
                <span>{faq.question}</span>
                {activeIndex === index ? <img  className='h-6 w-6' src={closeButton.src} alt="" /> : <img className='h-6 w-6' src={openButton.src} alt="" />}
              </button>
              {activeIndex === index && (
                <div className="faq-answer bg-gray-100 p-4 rounded-lg">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
