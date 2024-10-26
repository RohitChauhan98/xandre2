"use client";

import Footer from "@/components/ui/Footer";
import Navbar from "@/components/navbars/Navbar";
import ButtonDark from "@/components/ui/buttons/ButtonDark";
import { useState } from "react";

const features = [
  {
    title: "Comprehensive Platform",
    description:
      "Xandre is a unified platform that caters to a diverse range of travel and lifestyle needs, offering bookings for homes, apartments, flights, rental cars, real estate services, and healthcare. This comprehensive approach provides users with a seamless and convenient experience.",
  },
  {
    title: "Personalized Service",
    description:
      "Our dedicated concierge team provides personalized assistance, ensuring that every guest's needs are met with exceptional care and attention. From booking flights and accommodations to recommending local attractions, our concierge service goes above and beyond to enhance the guest experience.",
  },
  {
    title: "Curated Experiences",
    description:
      "Xandre offers a wide range of curated experiences designed to enrich guests' journeys. From cultural tours and adventure activities to exclusive events, our experiences provide unique and unforgettable memories.",
  },
  {
    title: "Global Reach",
    description:
      "With an extensive network of properties and services, Xandre offers a wide range of options to suit travelers' preferences and budgets. Whether you're seeking a luxurious villa in the Mediterranean or a cozy apartment in a bustling city, Xandre has something to offer.",
  },
  {
    title: "Commitment to Quality",
    description:
      "Xandre is committed to providing the highest quality services and experiences to our customers. We prioritize customer satisfaction and strive to exceed expectations in every aspect of our business.",
  },
];

const Section_Data: { [key: string]: string } = {
  "About Xandre": `Xandre is a leading online booking service that goes beyond traditional travel platforms. We offer a comprehensive range of services, including luxury vacation homes, real estate, and healthcare, all designed to elevate your travel experience.

Our commitment to personalized luxury sets us apart. From concierge assistance and tailored dining experiences to curated wellness programs, we provide exceptional service that exceeds your expectations. 

Convenience is at the heart of Xandre. Our innovative group pay option makes luxury travel more accessible, allowing you to share the cost of bookings with friends and family. With our global network of properties and services, you can find the perfect accommodations and experiences wherever your journey takes you.`,

  "How it works": `Booking with Xandre is simple and straightforward:

1. Search & Discover: Browse our curated selection of properties and experiences worldwide.
2. Personalize: Choose your preferred dates, additional services, and special requirements.
3. Book & Pay: Secure your reservation with our flexible payment options, including group pay.
4. Concierge Support: Connect with your dedicated concierge who will handle all the details.
5. Experience: Enjoy your perfectly planned stay with 24/7 support from our team.`,

  "Terms & Conditions": `Our terms and conditions outline the rules, guidelines, and agreements between Xandre and our users. These include booking policies, cancellation terms, payment procedures, and user responsibilities. For detailed information, please visit our full Terms & Conditions page.`,

  "Contact Us": `Get in touch with our dedicated support team:
 Customer Service: Available 24/7 at support@xandre.com
 Concierge Team: concierge@xandre.com
 Property Management: properties@xandre.com
 Business Inquiries: business@xandre.com
 Press: media@xandre.com`,

  Services: `Discover our comprehensive range of services:
 Luxury Vacation Rentals
 Private Villa Bookings
 Real Estate Services
 Healthcare & Wellness Programs
 Concierge Services
 Travel Insurance
 Local Experiences & Activities
 Transportation Services
 Property Management`,

  "Career Opportunities": `Join our dynamic team at Xandre:
 Technology & Development
 Customer Experience
 Property Management
 Marketing & Communications
 Business Development
 Operations & Finance
 Local Market Experts

We offer competitive benefits, remote work options, and opportunities for growth.`,

  "Add your property": `Partner with Xandre to list your property:
 Access our global network of luxury travelers
 Benefit from our professional property management
 Receive dedicated marketing support
 Enjoy competitive commission rates
 Get 24/7 support from our team
 Use our smart pricing optimization`,

  "Business Opportunities": `Explore partnership opportunities with Xandre:
 Property Management Partnerships
 Travel Agency Collaborations
 Local Experience Providers
 Transportation Services
 Healthcare Provider Network
 Technology Integration Partners
 Marketing Affiliates`,

  Investors: `Xandre offers exciting investment opportunities:
 Company Overview
 Financial Performance
 Growth Strategy
 Market Analysis
 Investment Opportunities
 Quarterly Reports
 Investor Relations Contact`,

  "Traveler's Insurance": `Protect your journey with Xandre's comprehensive insurance options:
 Trip Cancellation Coverage
 Medical Emergency Protection
 Lost Baggage Protection
 Flight Delay Compensation
 Adventure Sports Coverage
 Property Damage Protection
 24/7 Emergency Assistance`,

  XanPay: `Our innovative payment solution offers:
 Group Payment Options
 Multiple Currency Support
 Secure Transaction Processing
 Flexible Payment Plans
 Digital Wallet Integration
 Loyalty Program
 Corporate Account Management`,

  Denga: `Denga is our premium membership program offering:
 Priority Booking Access
 Exclusive Discounts
 Dedicated Concierge
 Airport Lounge Access
 Special Event Invitations
 Luxury Transport Services
 Wellness Program Access`,

  Legal: `Important legal information:
 Privacy Policy
 Cookie Policy
 User Agreement
 Property Listing Terms
 Intellectual Property Rights
 Dispute Resolution
 Regulatory Compliance`,
};

const About_Sections = [
  "About Xandre",
  "How it works",
  "Terms & Conditions",
  "Contact Us",
  "Services",
  "Career Opportunities",
  "Add your property",
  "Business Opportunities",
  "Investors",
  "Traveler's Insurance",
  "XanPay",
  "Denga",
  "Legal",
];

export default function About() {
  const [currentSection, setCurrentSection] = useState<String>("About Xandre");

  return (
    <div>
      <div className="bg-[url('/assets/about_hero_mobile.jpg')] md:bg-[url('/assets/about_hero.jpg')] h-[300px] md:h-[450px] bg-no-repeat bg-cover">
        <div className="h-full w-full bg-black bg-opacity-10 relative">
          <div className="max-w-[1100px] mx-auto">
            <Navbar />
            <h3 className="text-white text-2xl md:text-4xl leading-normal md:leading-[52px] font-bold mt-10 md:mt-[90px] px-4 md:px-0">
              Beyond Booking.
              <br className="block md:hidden" /> Your Lifestyle Platform
            </h3>

            <p className="text-white text-[15px] md:text-[20px] leading-normal mt-[10px] md:leading-[52px] px-4 md:px-0">
              Where luxury meets <br className="block md:hidden" /> convenience
              and affordability.
            </p>
          </div>
        </div>
      </div>

      <div className="my-[22px] md:my-[100px] max-w-[1100px] w-full mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-0">
          <div className="md:col-span-4 overflow-x-auto scrollbar-hide md:overflow-visible">
            <div className="flex md:block whitespace-nowrap md:whitespace-normal md:w-[300px] md:px-6">
              {About_Sections.map((section) => (
                <div
                  onClick={() => setCurrentSection(section)}
                  className={`${currentSection === section ? "bg-lion-200 text-white" : "bg-white text-alice-blue-400"} flex h-[30px] md:h-[40px] text-[12px] md:text-[18px] leading-5 px-3 justify-center items-center rounded-sm cursor-pointer`}
                >
                  {section}
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-6 space-y-6 md:space-y-10">
            <h1 className="text-oxford-blue text-[18px] leading-[22px] md:text-[28px] md:leading-[34px] font-semibold">
              {currentSection}
            </h1>

            <p className="text-oxford-blue text-[11.5px] leading-[16px] md:text-[15px] md:leading-[22px]">
              {Section_Data[parseInt(currentSection.toString())]}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-glass-100 py-8 md:py-[52px]">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="space-y-6 md:space-y-10">
            <h1 className="text-lion-200 text-2xl md:text-3xl font-semibold">
              Why Xandre
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              {features.map((feature) => (
                <div key={feature.title} className="space-y-2">
                  <h2 className="text-black text-[15px] md:text-[16px] leading-[18px] md:leading-[20px] font-semibold">
                    {feature.title}
                  </h2>

                  <p className="text-black md:text-white-shade text-[11.5px] md:text-[15px] leading-[16px] md:leading-[22px]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[450px] md:h-[400px] bg-[url('/assets/about_booking_mobile.jpg')] md:bg-[url('/assets/about_booking.jpg')] bg-no-repeat bg-cover">
        <div className="px-4 md:px-[144px] py-8 md:py-20">
          <div className="max-w-[1100px] mx-auto">
            <h1 className="text-black  text-[25px] md:text-[35px] font-medium md:font-semibold w-[228px] md:w-[800px]">
              Ready for the next step? Let’s begin your Xandre Experience!
            </h1>
            <ButtonDark
              className="w-[270px] md:w-[320px] h-[48px] md:h-[56px] mt-8 md:mt-20"
              imgHeight={44}
              imgWidth={44}
            >
              Book a Reservation
            </ButtonDark>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
