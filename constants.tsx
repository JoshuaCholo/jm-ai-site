import React from 'react';
import { Project, FAQItem, ServiceItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Saving 300 Hours Every Month for a Global Logistics Team",
    image: "https://raw.githubusercontent.com/joshua-fasanya/assets/main/image_4c4fbe.png",
    category: "Workflow Automation",
    year: "2024",
    timeline: "3 Weeks",
    client: "Global Logistics Co.",
    challenge: "The team was spending 15 minutes manually creating folders and documents for every new shipment. With hundreds of shipments a day, they couldn't keep up.",
    solution: "We built a system that connects their database to their cloud storage. Now, everything is created automatically in 1 second.",
    beforeAfter: "The business saved $12,000 in monthly labor costs and can now handle 2x more shipments without hiring more staff.",
    keyResults: "100% Accuracy. $144k Annual Savings. Instant Onboarding.",
    clientReview: "Joshua didn't just fix a small problem; he fixed our entire business flow. We're growing faster than ever.",
    tools: ["Make.com", "Airtable", "Google Cloud"]
  },
  {
    id: 2,
    title: "Processing 10,000 Financial Documents Automatically",
    image: "https://raw.githubusercontent.com/joshua-fasanya/assets/main/image_4c38bb.png",
    category: "AI Data Processing",
    year: "2024",
    timeline: "5 Weeks",
    client: "Accounting Firm",
    challenge: "Entering data from $2.4M worth of invoices was causing too many human errors and slowing down payments.",
    solution: "We used AI to 'read' the invoices and enter the data automatically into their software with perfect accuracy.",
    beforeAfter: "Manual data entry is gone. The team now only spends time reviewing the results, not typing them in.",
    keyResults: "99% Faster. Zero Data Errors. Lower Costs.",
    clientReview: "This is the best investment we've made in our tech stack. The error rate dropped to almost zero.",
    tools: ["n8n", "OpenAI Vision", "Custom API"]
  },
  {
    id: 3,
    title: "The AI Receptionist That Increased Bookings by 4x",
    image: "https://raw.githubusercontent.com/joshua-fasanya/assets/main/image_4bd727.png",
    category: "AI Voice Agents",
    year: "2024",
    timeline: "4 Weeks",
    client: "Service Agency",
    challenge: "The agency was losing $400k because they couldn't answer the phone fast enough after office hours.",
    solution: "We installed an AI voice assistant that answers every call, answers questions, and books appointments 24/7.",
    beforeAfter: "No more missed calls. The agency is booking 4 times more appointments than before.",
    keyResults: "391% More Bookings. 24/7 Availability. Instant Response.",
    clientReview: "Our phone never stops ringing, and the AI handles it all. Our sales team is finally busy with the right people.",
    tools: ["Retell AI", "Make.com", "Cal.com"]
  },
  {
    id: 4,
    title: "Clinic CRM GoHighLevel Setup",
    image: "ghl-dashboard.png",
    category: "CRM Architecture",
    year: "2025",
    timeline: "2 Weeks",
    client: "Healthcare Practices",
    challenge: "Clinics struggle with fragmented patient communication, missed appointments, and manual lead tracking that hinders growth.",
    solution: "Full customization of GoHighLevel tailored for medical practices. Includes pipeline creation, automated appointment booking, patient follow-ups, SMS/Email automation, and lead tracking.",
    beforeAfter: "The clinic improved patient communication and significantly reduced no-shows. Operations are now centralized, saving hours of manual admin time every day.",
    keyResults: "Reduced No-Shows. Streamlined Operations. Centralized Patient Data. Smoother Experience.",
    clientReview: "The GoHighLevel setup Joshua implemented has completely changed how we handle our intake. It's night and day.",
    tools: ["GoHighLevel", "Zapier", "Twilio"]
  },
  {
    id: 5,
    title: "Missed Call Flow on Make.com",
    image: "missed-call-flow.png",
    category: "Workflow Automation",
    year: "2025",
    timeline: "1 Week",
    client: "Service-Based Businesses",
    challenge: "Businesses lose a significant percentage of potential revenue simply because they cannot answer every call in real-time.",
    solution: "Missed Call Flow on Make.com is an automated workflow designed to capture and respond to unanswered calls in real time. When a call is missed, the system triggers a sequence that logs the event, notifies the appropriate team or CRM, and automatically sends a follow-up message via SMS or email.",
    beforeAfter: "This ensures no lead or customer inquiry is lost, improves response time, and streamlines communication without manual intervention. The flow integrates telephony, messaging, and data tools to deliver a seamless recovery process.",
    keyResults: "100% Lead Capture. Real-time Notifications. Automated SMS Follow-up. Seamless CRM Integration.",
    clientReview: "The automation Joshua built ensures we never miss an opportunity. Every missed call gets an instant text back.",
    tools: ["Make.com", "Automated Workflow", "HighLevel", "Automation"]
  },
  {
    id: 6,
    title: "GHL Setup for J Cat Media",
    image: "jcat-media-ghl.png",
    category: "CRM Architecture",
    year: "2025",
    timeline: "2 Weeks",
    client: "J Cat Media LLC",
    challenge: "J Cat Media needed to streamline lead generation and client management to improve response times and prevent lead leakage.",
    solution: "This project involved a full GoHighLevel setup tailored for J Cat Media. The system included CRM customization, pipeline creation, automated workflows, email and SMS follow-ups, calendar integrations, and funnel connectivity.",
    beforeAfter: "The setup was designed to improve response times, automate nurturing sequences, and give the team clear visibility into leads and conversions, creating a scalable foundation for ongoing marketing and sales operations.",
    keyResults: "170+ Opportunities Tracked. Automated Nurturing Sequences. Improved Lead Visibility. Scalable CRM Foundation.",
    clientReview: "Joshua transformed our scattered leads into a high-visibility pipeline. We now have a clear foundation for growth.",
    tools: ["HighLevel", "Email Marketing", "CRM Automation", "CRM Software"]
  },
  {
    id: 7,
    title: "Make.com Fallback iPhone Routing",
    image: "make-fallback-routing.png",
    category: "Workflow Automation",
    year: "2025",
    timeline: "1 Week",
    client: "Critical Communication Teams",
    challenge: "Inconsistencies in primary messaging or alert channels can lead to missed high-priority business events and delayed responses.",
    solution: "Make.com Fallback iPhone Routing is an automation workflow designed to ensure uninterrupted communication by intelligently rerouting calls, messages, or notifications to an iPhone when a primary system, device, or channel fails. Built in Make.com, this solution monitors trigger conditions in real time and activates a fallback routing path.",
    beforeAfter: "The business now maintains a seamless, resilient communication safety net. No interaction is lost due to primary channel downtime, as the system automatically pivots to pre-configured fallback routes.",
    keyResults: "99.9% Uptime for Critical Alerts. Automated Failover Logic. Reduced Interaction Loss. Resilient System Architecture.",
    clientReview: "This fallback system is a game changer for our reliability. Even when our main tools have issues, my iPhone keeps the team connected to what matters.",
    tools: ["Make.com", "Email", "HighLevel", "AI Development", "Automated Workflow"]
  },
  {
    id: 8,
    title: "Twilio Studio - AI Voice Call + SMS Follow Up",
    image: "twilio-studio-flow.png",
    category: "AI Voice Agents",
    year: "2025",
    timeline: "1 Week",
    client: "Multi-Channel Service Agencies",
    challenge: "Businesses lose momentum when voice interactions don't lead to an immediate digital touchpoint or follow-up action.",
    solution: "Implemented a two-stage engagement solution using Twilio Studio. The project featured a dynamic AI voice call for intelligent interaction, seamlessly followed by an automated text message to ensure a reliable communication touchpoint.",
    beforeAfter: "Communication transitioned from a single-channel voice call to a multi-touchpoint experience. Callers now receive automatic SMS confirmation and follow-up links, ensuring significantly higher engagement and conversion.",
    keyResults: "Dynamic AI Interaction. Automated SMS Follow-up. Improved Customer Experience. Higher Lead Conversion.",
    clientReview: "The two-stage flow Joshua built is flawless. It makes our brand look incredibly professional and responsive by combining voice and text instantly.",
    tools: ["Twilio", "Twilio API", "SMS", "Automation", "Automated Workflow"]
  },
  {
    id: 9,
    title: "Lead to AI SMS + CRM Log",
    image: "n8n-lead-flow.png",
    category: "AI Automation",
    year: "2025",
    timeline: "1 Week",
    client: "Sales & Marketing Teams",
    challenge: "Manual lead tracking and delayed follow-ups were causing potential customers to drop off before the sales team could even reach out.",
    solution: "Lead to AI SMS + CRM Log is a high-speed lead response system built on n8n. It captures leads via webhooks, uses OpenAI to draft personalized SMS messages, sends them via Twilio, and logs all data in Google Sheets for real-time tracking.",
    beforeAfter: "Lead response time dropped from hours to seconds. Every lead is now instantly nurtured with AI-personalized content and documented automatically, ensuring zero lead leakage and higher conversion rates.",
    keyResults: "Instant Lead Engagement. AI-Personalized SMS. 100% Automated Logging. Enhanced Data Integrity.",
    clientReview: "The n8n workflow Joshua built for us is incredible. Our leads are getting texted within seconds of signing up, and we don't have to lift a finger to track them.",
    tools: ["n8n", "OpenAI", "Twilio", "Google Sheets", "Lead Management", "CRM Automation"]
  },
  {
    id: 10,
    title: "Facebook Ads Campaign for Plumbing Business",
    image: "plumbing-ads-performance.png",
    category: "Paid Media Strategy",
    year: "2024",
    timeline: "Ongoing",
    client: "Residential Service Providers",
    challenge: "The client was struggling with high customer acquisition costs (CAC) and inconsistent lead quality from traditional marketing channels.",
    solution: "Developed a multi-channel 'Direct Response' strategy combining localized Facebook/Meta Ads for brand awareness and Google Search Ads for high-intent emergency plumbing and HVAC queries. Used custom landing pages and GoHighLevel for attribution.",
    beforeAfter: "Before our intervention, lead costs were unpredictable and often exceeded $150. We achieved a stable cost-per-lead of under $45 with a conversion rate peaking at 38% for emergency search terms.",
    keyResults: "38.02% Peak Conv. Rate. $45 Avg. Cost Per Lead. 585+ Monthly Leads. Zero Waste Spend.",
    clientReview: "The transparency is what I love most. Joshua showed us exactly how many calls came from Facebook vs Google and optimized both to save us thousands.",
    tools: ["Meta Ads", "Google Ads", "GoHighLevel", "Landing Page Design", "Lead Generation", "Local Marketing"]
  },
  {
    id: 11,
    title: "Zapier Dentist Clinic Appointment Automation",
    image: "zapier-dentist-flow.png",
    category: "Workflow Automation",
    year: "2025",
    timeline: "1 Week",
    client: "Dental & Medical Practices",
    challenge: "Managing patient flow across multiple dentists (Dr. Smith, Dr. Matson) and appointment types was a manual process prone to human error and inconsistent tagging.",
    solution: "An advanced multi-path automation system built in Zapier. It monitors Acuity Scheduling for new bookings, then uses conditional logic (Paths) to intelligently route the data based on provider and appointment type (New Patient vs. Report of Findings), automatically applying precision tags in GoHighLevel.",
    beforeAfter: "The clinic's front-desk admin time was cut by 80%. Every patient is now instantly and correctly tagged, triggering specific automated follow-up sequences without a single manual click.",
    keyResults: "100% Automated Tagging. Multi-Provider Routing. Enhanced CRM Integrity. Instant Follow-up Triggering.",
    clientReview: "Joshua's logic-based workflow has simplified our intake process. We no longer worry about patients slipping through the cracks due to manual entry errors.",
    tools: ["Zapier", "Acuity Scheduling", "LeadConnector", "GoHighLevel", "Conditional Logic", "Workflow Automation"]
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do I need to change how I currently work?",
    answer: "Not at all. We build our systems around your current tools like Gmail, Slack, or your CRM. We make your current work easier, not harder."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most of our systems go live within 2 to 4 weeks. Most clients save enough time or money to pay for the project in the first two months."
  },
  {
    question: "What happens if I need help later?",
    answer: "We don't just 'build and leave.' We provide ongoing support and monitoring to make sure your systems are always running perfectly."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Meta Ads Integration",
    description: "High-performance Facebook and Instagram ad systems designed to feed your automation pipelines. We build the bridge from lead form to automated booking.",
    icon: "fab fa-facebook-f"
  },
  {
    title: "CRM Setup & Customization",
    description: "Full GoHighLevel setup. Custom sub-accounts, trigger links, and sales pipelines mapped to your revenue goals.",
    icon: "fas fa-database"
  },
  {
    title: "Workflow Automation",
    description: "Complex logic using Zapier and Make. We connect your calendars, emails, and tools into one cohesive machine.",
    icon: "fas fa-sync"
  },
  {
    title: "Lead Capture Systems",
    description: "Speed-to-lead is king. Instant SMS and email follow-ups the moment a lead touches your brand.",
    icon: "fas fa-bolt"
  },
  {
    title: "AI Video Creation",
    description: "Scaling your personality. AI-generated video messages for personalized lead nurturing that converts.",
    icon: "fas fa-robot"
  },
  {
    title: "AI Voice Receptionist",
    description: "Voice agents that answer calls, handle FAQs, and book calendar appointments without human intervention.",
    icon: "fas fa-phone-alt"
  }
];