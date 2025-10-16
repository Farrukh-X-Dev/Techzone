import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const faqs = [
    {
      question: "Why Choose TECHZONE Learning?",
      answer: "At TECHZONE Learning, we offer industry-relevant courses led by expert trainers, flexible learning options, and globally recognized certifications. Our affordable programs focus on practical skills and career growth, empowering students to achieve their goals. Join a community of successful learners and take your career to the next level with TECHZONE Learning!"
    },
    {
      question: "How does Techzone Learning help upgrade skills?",
      answer: "TECHZONE Learning is a leading education platform offering industry-focused courses in IT, digital marketing, artificial intelligence, and more. With expert instructors, flexible learning options, and globally recognized certifications, we help you gain practical skills and advance your career. Whether you’re a beginner or a professional, TECHZONE Learning provides the tools to upgrade your expertise and stay ahead in today’s competitive job market."
    },
    {
      question: "What courses does Techzone Learning offer?",
      answer: "At TECHZONE Learning, we offer a wide range of courses to help you enhance your skills and advance your career. Our courses include Graphics Design, Video Editing, Digital Marketing (DM), Web Development, Web Designing, UI/UX Design, ASP .NET, MYSQL, PHP, MS Office, CIT, MERN Stack, TikTok Shop Management, Python with AI, Python for Data Analysis, Python Web Development, Shopify Development, and Language Courses in English, Chinese, and German. Whether you want to master programming, design, or digital marketing, we have the right course for you."
    },
    {
      question: "Where is TECHZONE Learning Located?",
      answer: "TECHZONE Learning is conveniently located at 605 Shahrah-e-Faisal, 6 Block, P.E.C.H.S., Karachi, 75400. Our central location in Karachi makes it easy for students to access our high-quality training programs in IT, digital marketing, web development, and more. Visit us today to start upgrading your skills!"
    },
    {
      question: "Where can I access Techzone Learning courses?",
      answer: "At TECHZONE Learning, our programs are primarily offered in-person for an interactive and hands-on learning experience. However, we also provide online courses upon customer request, with prices that may vary for online learning. Whether you prefer learning at our Karachi campus or remotely, we ensure flexible options to suit your needs."
    },
    {
      question: "What makes Techzone Learning different?",
      answer: "TECHZONE Learning stands out from other training institutes by offering market-driven courses designed to equip you with the skills needed for today’s job market. We not only help you start earning online but also provide job placement opportunities to ensure your career growth. With a focus on practical learning and real-world applications, TECHZONE Learning prepares you for success in various industries."
    },
    {
      question: "How do I enroll in a course at TECHZONE Learning?",
      answer: "To enroll in a course at TECHZONE Learning, simply register your number on our Facebook page or call us directly. Our counselors will then get in touch with you to schedule a meeting and guide you through the enrollment process."
    },
    {
      question: "Does Techzone Learning provide course refunds?",
      answer: "Techzone Learning does not provide refunds for course payments. However, we allow you to exchange your course for another one of your choice, ensuring flexibility in your learning journey."
    },
    {
      question: "Can I learn at my own pace with Techzone?",
      answer: "Techzone Learning typically enrolls students in small batches of 8-10, ensuring personalized attention and better understanding. If you require additional support, we can arrange individual sessions with the instructor to meet your specific learning needs. This flexibility ensures an optimized and tailored learning experience for every student."
    },
    {
      question: "How does Techzone ensure instructor quality?",
      answer: "Techzone Learning carefully selects instructors with advanced educational qualifications, extensive practical experience, and the ability to effectively manage and engage students in a classroom setting. This ensures high-quality teaching and a comprehensive learning experience for all students."
    },
    {
      question: "Does Techzone Learning offer job placement?",
      answer: "Yes, Techzone Learning offers job placement support and career counseling. After completing the Final Project and passing the course, students can submit their CV when requested by our management. We then connect them with relevant job opportunities. If a student is unable to secure a job after completing their course, they have the opportunity to gain valuable experience through an internship at Techzone Learning, enhancing their skills and employability."
    },
    {
      question: "Does Techzone update courses for industry trends?",
      answer: "Yes, Techzone Learning ensures all courses are advanced and regularly updated to align with the latest industry trends and technological advancements. This guarantees our students gain relevant and up-to-date skills to excel in their careers."
    }
  ];
  

const splitWords = (t) => t.trim().split(/\s+/);

export default function FAQs() {
  const [open, setOpen] = useState(-1);
  return (
    <section className="max-w-3xl mx-auto p-6">
      <style>
        {`
        @keyframes unblur {0%{opacity:0;filter:blur(6px);transform:translateY(6px)}60%{opacity:.8;filter:blur(2px);transform:translateY(2px)}100%{opacity:1;filter:blur(0);transform:none}}
        .char{opacity:0;filter:blur(6px);display:inline-block}
        .reveal{animation-name:unblur;animation-duration:420ms;animation-fill-mode:forwards;animation-timing-function:cubic-bezier(.2,.9,.2,1)}
      `}</style>

      <h2 className="text-center text-4xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
        Got question? <br /> We've got answers
      </h2>

      <div className="space-y-3">
        {faqs.map((data, i) => {
          const words = splitWords(data.answer);
          return (
            <div key={i} className="bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg shadow-sm ">
              <button
                onClick={() => setOpen((p) => (p === i ? -1 : i))}
                className="w-full flex items-center p-4 gap-3 text-left"
                aria-expanded={open === i}
              >
                <span className={`w-8 h-8 flex items-center transition-all duration-700 ease-in-out justify-center rounded-md text-sm font-bold ${open===i ? 'bg-blue-300 text-blue-700' : 'bg-blue-100'}`}>
                  {open === i ? <Plus size={18}/> : <Minus size={18} />}
                </span>
                <span className=" text-white  text-2xl">{data.question}</span>
              </button>

              <div className={`${open === i ? 'block' : 'hidden'} px-4 pb-4`}>
                <p className="text-white font-medium text-xl leading-7">
                  {words.map((w, wi) => (
                    <span key={wi} className="inline-block mr-2">
                      {w.split("").map((ch, ci) => {
                        const baseWordDelay = 80;
                        const charDelay = 20;
                        const delay = wi * baseWordDelay + ci * charDelay;
                        return (
                          <span
                            key={ci}
                            className={`char ${open === i ? "reveal" : ""}`}
                            style={{ animationDelay: `${delay}ms` }}
                          >
                            {ch}
                          </span>
                        );
                      })}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
