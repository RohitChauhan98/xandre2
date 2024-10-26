import Navbar from "@/components/navbars/Navbar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import React from "react";
import search from "/public/assets/icons/search.png";
import location from "/public/assets/icons/location.png";
import downArrow from "/public/assets/icons/select-down.png";
import linkedin from "/public/assets/icons/linkedin_vector.svg";
import skills from "/public/assets/icons/skills.png";
import ButtonDark from "@/components/ui/buttons/ButtonDark";

const jobData = {
  title: "Financial Analyst",
  jobId: "ID-12956",
  location: "Okinawa, Japan",
  department: "Finance",
  description:
    "The Know Your Client (KYC) Analyst focuses on client onboarding (COB) and exceptions in line with regulatory standards and jurisdictions.The KYC Analyst provides regular communication to senior bank stakeholders on changes in KYC, Anti Money Laundering (‘AML’) and Anti Financial Crime (‘AFC’) areas and ensures any changes required are implemented with minimum disruptions.The KYC Analyst also assists the bank’s clients, managing all KYC and account opening requirements with appropriate governance and controls. They operate in an environment of strict adherence to Standard Operating procedures (‘SOP’s) and Operation Level Agreements (OLA’s) to achieve accurate and timely account opening to help execute trades",
  benefits: [
    "Best in class leave policy",
    "Gender neutral parental leaves",
    "100% reimbursement under childcare assistance benefit (gender neutral)",
    // ... other benefits
  ],
  responsibilities: [
    "The KYC Analyst focuses on client onboarding (CDB) and exceptions in line with regulatory standards and jurisdictions.",
    "The KYC Analyst provides regular communication to senior bank stakeholders on changes in KYC, Anti Money Laundering (AML) and Anti Financial Crime (AFC) areas.",
    // ... other responsibilities
  ],
  requirements: [
    "Should have more than 6 months experience in Corporates and with good communication and system knowledge",
    // ... other requirements
  ],
  supportDetails: [
    "Training and development to help you excel in your career",
    "Coaching and support from experts in your team",
    "A culture of continuous learning to aid progression",
    "A range of flexible benefits that you can tailor to suit your needs",
  ],
  aboutUs:
    "We strive for a culture in which we are empowered to excel together every day. This includes acting responsibly, thinking commercially, taking initiative and working collaboratively.",
};

const SectionTitle = ({ children }: { children: string }) => (
  <h3 className="text-[12px] leading-[36px] md:text-[15px] md:leading-[22px] font-semibold mb-4 mt-7">
    {children}
  </h3>
);

const ListItem = ({ children }: { children: string }) => (
  <li className="flex items-start mb-2 text-[11.5px] md:text-[15px] leading-[16px] md:leading-[22px]">
    <span className="mr-2">•</span>
    {children}
  </li>
);

const BenefitsList = ({ benefits }: { benefits: string[] }) => (
  <ul className="list-none pl-0">
    {benefits.map((benefit: string, index: number) => (
      <ListItem key={index}>{benefit}</ListItem>
    ))}
  </ul>
);

const ResponsibilitiesList = ({
  responsibilities,
}: {
  responsibilities: string[];
}) => (
  <ul className="list-none pl-0">
    {responsibilities.map((responsibility: string, index: number) => (
      <ListItem key={index}>{responsibility}</ListItem>
    ))}
  </ul>
);

function Apply() {
  return (
    <div>
      {/* Navbar and hero section */}
      <div className="bg-[url('/assets/apply_hero_mobile.jpg')] md:bg-[url('/assets/apply_hero.jpg')] h-[300px] md:h-[450px] bg-no-repeat bg-cover">
        <div className="h-full w-full bg-black bg-opacity-10 relative">
          <div className="max-w-[1100px] mx-auto px-4 md:px-0">
            <Navbar />
            <h3 className="text-white md:w-[555px] text-[20px] md:text-[34px] leading-sm md:leading-[52px] font-bold mt-10 md:mt-[90px]">
              Build your career <br className="block md:hidden" /> with Xandre
            </h3>

            <p className="text-white text-[14px] md:text-[20px] leading-normal md:leading-[52px] mt-[10px]">
              Opportunities for <br className="block md:hidden" />
              the future
            </p>
          </div>
        </div>
      </div>

      {/*main section*/}
      <div className="w-full flex flex-col pt-6 md:pt-10 justify-center items-center">
        {/* search jobs */}
        <section className="w-full md:w-[1100px] flex flex-col md:flex-row md:items-center gap-8 md:gap-6 px-5 py-8">
          <div className="flex border border-glass-300 items-center w-full md:w-[300px] h-[40px] px-2">
            <Image src={search.src} alt="search image" height={25} width={19} />
            <input
              type="text"
              className="px-4 py-[19px] text-[14px] text-input-300 h-full w-full outline-none"
              placeholder="Search Jobs"
            />
          </div>
          <div className="flex border border-glass-300 items-center w-full md:w-[300px] h-[40px] px-2">
            <Image
              src={location.src}
              alt="search image"
              height={22}
              width={18.21}
            />
            <input
              type="text"
              className="px-4 py-[19px] text-[14px] text-input-300 h-full w-full outline-none"
              placeholder="Search location"
            />
          </div>

          <div className="border border-glass-300 px-2 w-full md:w-[300px] h-[40px] outline-none flex items-center justify-between">
            <div className="flex h-full w-full items-center gap-3">
              <Image
                src={skills.src}
                alt="search image"
                height={20}
                width={15.45}
              />
              <p className="text-[14px] text-input-300">All teams</p>
            </div>
            <img
              src={downArrow.src}
              alt="down arrow"
              className=" h-[6px] w-[12px]"
            />
          </div>
          <ButtonDark
            className="w-full md:w-[220px] h-[40px]"
            imgWidth={28}
            imgHeight={28}
          >
            Search
          </ButtonDark>
        </section>

        {/* Job Info */}
        <section className="w-full md:w-[1100px] space-y-6 bg-input-100 md:bg-white px-5 py-8">
          <div className="space-y-6 md:space-y-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div className="space-y-3 md:space-y-5">
                <h1 className="text-[20px] md:text-[26px] leading-[24px]">
                  {jobData.title}
                </h1>
                <p className="text-[14px] leading-[20px] text-input-300">
                  Job ID: {jobData.jobId}
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 text-[14px] md:text-[20px] leading-[24px]">
              <div className="flex items-center gap-2">
                <Image
                  src={location.src}
                  alt="search image"
                  height={22}
                  width={18.21}
                />
                <span>{jobData.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={skills.src}
                  alt="search image"
                  height={22}
                  width={18.21}
                />
                <span>{jobData.department}</span>
              </div>
            </div>
          </div>

          <ButtonDark
            className="w-[246px] md:w-[220px] h-[40px]"
            imgWidth={28}
            imgHeight={28}
          >
            Apply Now
          </ButtonDark>

          <div className="space-y-4 md:space-y-8">
            <p className="text-[16px] md:text-[20px] leading-[24px]">
              About the Job
            </p>
            <p className="text-[12px] leading-[36px] md:text-[15px] md:leading-[16px] font-semibold">
              Role Description
            </p>
            <p className="text-[11.5px] md:text-[15px] leading-[16px] md:leading-[22px]">
              {jobData.description}
            </p>
            <div>
              <SectionTitle>What We'll Offer You</SectionTitle>
              <BenefitsList benefits={jobData.benefits} />
            </div>
            <div>
              <SectionTitle>Your Key Responsibilities</SectionTitle>
              <ResponsibilitiesList
                responsibilities={jobData.responsibilities}
              />
            </div>
            <div>
              <SectionTitle>Your Skills And Experience</SectionTitle>
              <BenefitsList benefits={jobData.requirements} />
            </div>
            <div>
              <SectionTitle>How We'll Support You</SectionTitle>
              <BenefitsList benefits={jobData.supportDetails} />
            </div>
            <div>
              <SectionTitle>About Us And Our Teams</SectionTitle>
              <p className="text-[11.5px] md:text-[15px] leading-[16px] md:leading-[22px]">
                {jobData.aboutUs}
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="w-full bg-glass-100 py-8 md:py-[60px] px-4 md:px-[77px]">
        <div className="max-w-[1100px] w-full mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0">
            <div className="space-y-4 md:space-y-[30px]">
              <h1 className="text-2xl md:text-3xl font-semibold text-oxford-blue">
                Apply Now
              </h1>
              <p className="text-oxford-blue text-[15px] leading-[22px] max-w-full md:w-[388px]">
                Manager, Fintech Data & Automation-Oracle Technical (Bangkok
                based, relocation support provided)
              </p>
            </div>
            <button className="w-[230px] h-[43px] md:h-[40px] bg-lion-200 rounded-full flex justify-center items-center gap-[10px]">
              <img
                src={linkedin.src}
                alt="logo"
                className=" h-[23px] w-[23px]"
              />
              <p className="text-white text-[15px] leading-[22px] font-semibold">
                Signup with LinkedIn
              </p>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-6 md:mt-[27px] gap-4 md:gap-y-[30px] md:gap-x-[25px]">
            {["First Name", "Last Name", "Email", "Phone Number"].map(
              (item, index) => (
                <input
                  type="text"
                  key={index}
                  className="px-4 py-[19px] text-[14px] text-input-300 h-[52px] w-full border-[0.4px] border-input-200"
                  placeholder={item}
                />
              ),
            )}
            <div>
              <p>Resume/CV</p>
              <input
                type="file"
                className="px-4 py-[19px] text-[14px] md:text-[18px] leading-[22px] text-input-300 h-[76px] w-full"
              />
            </div>
            <div>
              <p>Cover Letter</p>
              <input
                type="file"
                className="px-4 py-[19px] text-[14px] md:text-[18px] leading-[22px] text-input-300 h-[76px] w-full"
              />
            </div>
          </div>
          <ButtonDark
            className="w-[230px] h-[40px] mt-[40px] rounded-full"
            imgWidth={28}
            imgHeight={28}
          >
            Apply Now
          </ButtonDark>
        </div>
      </div>
      <Footer />
    </div >
  );
}

export default Apply;
