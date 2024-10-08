"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Music, CreditCard, Banknote, Info, List, CreditCard as CreditCardIcon, DollarSign, Gift, AlertTriangle, BarChart, ShieldCheck, GraduationCap, PlayCircle, CheckCircle, Check } from "lucide-react"
import Link from "next/link"

const topics = [
  {
    id: "start",
    title: "Introduction to Credit",
    icon: <PlayCircle className="w-12 h-12 text-green-500" />,
    content:
      "Credit is a financial tool that allows you to borrow money with the agreement to pay it back later, often with interest. Understanding credit is crucial for making informed financial decisions and building a strong financial future.",
    details: [
      "Credit represents trust in your ability to repay borrowed money.",
      "It enables you to make large purchases and spread the cost over time.",
      "Responsible use of credit can help you build a positive financial reputation.",
      "Credit comes in various forms, including credit cards, loans, and lines of credit.",
      "Your creditworthiness is typically represented by a credit score.",
    ],
  },
  {
    id: "what-is-credit",
    title: "What is Credit?",
    icon: <DollarSign className="w-12 h-12 text-blue-500" />,
    content:
      "Credit is the ability to borrow money or access goods and services with the understanding that you'll pay later. It's based on the trust that you will repay what you owe.",
    details: [
      "Credit allows you to make purchases without immediate cash payment.",
      "It's a tool for financial flexibility and for building a credit history.",
      "Credit can be in the form of loans, credit cards, or other financial arrangements.",
      "Your creditworthiness determines your ability to obtain credit and the terms offered.",
      "Responsible use of credit can open doors to financial opportunities.",
    ],
  },
  {
    id: "types-of-credit",
    title: "Types of Credit",
    icon: <List className="w-12 h-12 text-blue-500" />,
    content:
      "There are two main types of credit: revolving credit and installment credit. Each has its own characteristics and uses.",
    details: [
      "Revolving Credit:",
      "Allows repeated borrowing up to a set limit.",
      "Examples include credit cards and lines of credit.",
      "Balances and payments can vary month to month.",
      "Installment Credit:",
      "A fixed loan amount repaid in regular installments.",
      "Examples include mortgages, auto loans, and personal loans.",
      "Typically has a set repayment term and fixed monthly payments.",
    ],
  },
  {
    id: "credit-cards",
    title: "Focus on Credit Cards",
    icon: <CreditCardIcon className="w-12 h-12 text-blue-500" />,
    content:
      "Credit cards are a common and versatile form of revolving credit. They offer convenience, potential rewards, and the ability to build a credit history.",
    details: [
      "Credit cards provide a revolving line of credit for purchases.",
      "They can be used for in-person, online, and international transactions.",
      "Many credit cards offer rewards programs, such as cashback or travel points.",
      "Credit cards can help build a credit history when used responsibly.",
      "They often come with additional benefits like purchase protection or travel insurance.",
    ],
  },
  {
    id: "how-credit-cards-work",
    title: "How Credit Cards Work",
    icon: <CreditCardIcon className="w-12 h-12 text-blue-500" />,
    content:
      "Credit cards allow you to borrow money up to a certain limit. When you make a purchase, you're borrowing from the card issuer, which you must repay.",
    details: [
      "You're given a credit limit, which is the maximum amount you can borrow.",
      "Each purchase reduces your available credit.",
      "You receive a monthly statement showing your purchases and minimum payment due.",
      "You can choose to pay the full balance, the minimum payment, or any amount in between.",
      "Interest is charged on unpaid balances, except during grace periods on some cards.",
    ],
  },
  {
    id: "important-terms",
    title: "Important Terms",
    icon: <Info className="w-12 h-12 text-blue-500" />,
    content:
      "Understanding key credit card terms is crucial for responsible use and avoiding unnecessary costs.",
    details: [
      "Interest: The cost of borrowing money, usually expressed as an Annual Percentage Rate (APR).",
      "Credit Limit: The maximum amount you can borrow on your credit card.",
      "Minimum Payment: The smallest amount you must pay each month to keep your account in good standing.",
      "Grace Period: The time between the end of a billing cycle and the payment due date, during which you can avoid interest on new purchases.",
      "Annual Fee: A yearly charge some cards impose for card membership.",
    ],
  },
  {
    id: "benefits",
    title: "Benefits",
    icon: <Gift className="w-12 h-12 text-blue-500" />,
    content:
      "Credit cards offer several benefits, including convenience for purchases and potential rewards.",
    details: [
      "Convenience: Easy to use for in-person and online purchases.",
      "Rewards: Many cards offer cashback, points, or miles on purchases.",
      "Build Credit: Responsible use can help improve your credit score.",
      "Purchase Protection: Many cards offer extended warranties or protection against theft or damage.",
      "Travel Benefits: Some cards offer travel insurance, airport lounge access, or no foreign transaction fees.",
    ],
  },
  {
    id: "risks",
    title: "Risks",
    icon: <AlertTriangle className="w-12 h-12 text-blue-500" />,
    content:
      "While credit cards offer benefits, they also come with risks, particularly related to debt accumulation and high-interest charges.",
    details: [
      "High Interest Rates: Credit card interest rates are often higher than other forms of credit.",
      "Debt Accumulation: Easy access to credit can lead to overspending and debt.",
      "Minimum Payment Trap: Paying only the minimum can lead to long-term debt and high interest costs.",
      "Impact on Credit Score: Late payments or high credit utilization can negatively affect your score.",
      "Fees: Late payment fees, over-limit fees, and annual fees can add up quickly.",
    ],
  },
  {
    id: "credit-scores",
    title: "Credit Scores",
    icon: <BarChart className="w-12 h-12 text-blue-500" />,
    content:
      "Your credit score is a numerical representation of your creditworthiness, based on your credit history.",
    details: [
      "Credit scores typically range from 300 to 850.",
      "Factors affecting your score include payment history, credit utilization, length of credit history, types of credit, and recent inquiries.",
      "A higher credit score can lead to better loan terms and lower interest rates.",
      "Regular checking of your credit report can help you spot errors or fraud.",
      "Improving your credit score takes time and consistent responsible use.",
    ],
  },
  {
    id: "responsible-use",
    title: "Responsible Use",
    icon: <ShieldCheck className="w-12 h-12 text-blue-500" />,
    content:
      "Using credit responsibly is key to maintaining good financial health and maximizing the benefits of credit.",
    details: [
      "Pay your bills on time, every time.",
      "Keep your credit utilization low, ideally below 30% of your limit.",
      "Don't apply for multiple credit products in a short time frame.",
      "Regularly review your credit report for accuracy.",
      "Create a budget and stick to it to avoid overspending.",
      "Consider setting up automatic payments to avoid late fees.",
      "Use credit as a tool, not extra income.",
    ],
  },
  {
    id: "end",
    title: "Being Smart with Credit",
    icon: <CheckCircle className="w-12 h-12 text-green-500" />,
    content:
      "Being a smart credit user involves understanding your financial situation, choosing the right products, using them responsibly, and regularly monitoring your credit report and score.",
    details: [
      "Educate yourself about personal finance and stay informed about credit laws and regulations.",
      "Choose credit cards that align with your spending habits and financial goals.",
      "Always read the fine print and understand the terms before accepting a credit offer.",
      "Use credit as a financial tool, not a way to live beyond your means.",
      "Regularly review your credit report and dispute any errors.",
      "Consider the long-term impact of credit decisions on your financial health.",
      "Seek professional advice if you're struggling with credit or debt management.",
    ],
  },
];

export function ResourcesPageComponent() {
  const [openModal, setOpenModal] = useState<string | null>(null)
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set())

  const handleTopicClick = (topicId: string) => {
    setOpenModal(topicId)
    setCompletedTopics(prev => new Set(prev).add(topicId))
  }

  const progressPercentage = (completedTopics.size / topics.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-blue-200 to-white relative overflow-hidden flex flex-col">
      <header className="bg-white shadow-lg relative z-10 border-b-4 border-blue-300 rounded-b-[2rem]">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-3xl font-bold text-blue-700 flex items-center">
              credit<span className="text-blue-500">JAM</span>
              <Music className="inline-block ml-2 text-blue-600 w-8 h-8" />
            </Link>
            <nav className="space-x-2 flex items-center">
              <Link href="/about" passHref>
                <Button variant="ghost" className="text-blue-700 hover:text-blue-500 font-semibold group transition-all duration-300 ease-in-out text-lg rounded-full px-6 py-2 hover:bg-blue-100">
                  About
                  <CreditCard className="w-0 h-0 group-hover:w-6 group-hover:h-6 ml-0 group-hover:ml-2 transition-all duration-300 ease-in-out text-blue-400" />
                </Button>
              </Link>
              <Link href="/guide" passHref>
                <Button variant="ghost" className="text-blue-700 hover:text-blue-500 font-semibold group transition-all duration-300 ease-in-out text-lg rounded-full px-6 py-2 hover:bg-blue-100">
                  Guide
                  <Banknote className="w-0 h-0 group-hover:w-6 group-hover:h-6 ml-0 group-hover:ml-2 transition-all duration-300 ease-in-out text-blue-400" />
                </Button>
              </Link>
              <Link href="/form" passHref>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-bold shadow-md transition-all duration-300 hover:shadow-lg">
                  Get Started
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
        <h2 className="text-5xl font-extrabold text-blue-800 mb-12 text-center">Guide to Credit!</h2>
        <div className="relative">
          <div className="overflow-x-auto whitespace-nowrap pb-8 pt-4 px-4 scrollbar-hide">
            <div className="inline-flex space-x-8">
              {topics.map((topic, index) => (
                <div key={topic.id} className="inline-block">
                  <div 
                    className="w-64 h-80 bg-white rounded-2xl shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col justify-between p-6 relative"
                    onClick={() => handleTopicClick(topic.id)}
                  >
                    <div className="text-center mb-2">
                      <span className="text-3xl font-bold text-blue-500">
                        {index + 1}
                      </span>
                      <span className="text-sm text-blue-400"> / {topics.length}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center flex-grow">
                      {topic.icon}
                      <h3 className="text-lg font-semibold text-blue-800 text-center mt-4 line-clamp-2">{topic.title}</h3>
                    </div>
                    {completedTopics.has(topic.id) && (
                      <div className="absolute bottom-2 right-2">
                        <Check className="w-8 h-8 text-green-500" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-xl font-bold text-blue-800 mb-2">
            Progress: {completedTopics.size} / {topics.length} topics completed
          </p>
          <div className="w-full max-w-md mx-auto bg-gray-200 rounded-full h-4 overflow-hidden">
            <div 
              className="bg-green-500 h-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </main>

      {topics.map((topic) => (
        <Dialog key={topic.id} open={openModal === topic.id} onOpenChange={() => setOpenModal(null)}>
          <DialogContent className="bg-white max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-blue-800 flex items-center">
                {topic.icon}
                <span className="ml-4">{topic.title}</span>
              </DialogTitle>
            </DialogHeader>
            <div className="mt-6">
              <p className="text-blue-900 mb-6 text-lg">{topic.content}</p>
              <h4 className="text-2xl font-semibold text-blue-700 mb-4">Key Points:</h4>
              <ul className="list-disc pl-8 space-y-3 mb-6">
                {topic.details.map((detail, index) => (
                  <li key={index} className="text-blue-800 text-lg">{detail}</li>
                ))}
              </ul>
            </div>
          </DialogContent>
        </Dialog>
      ))}

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}