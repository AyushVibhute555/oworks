import Groq from "groq-sdk";

// Initialize Groq. 
// dangerouslyAllowBrowser is required when running directly in a React frontend.
const apiKey = import.meta.env.VITE_GROQ_API_KEY || "YOUR_API_KEY_HERE";
const groq = new Groq({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true
});

// ============================================================================
// STRICT SECURE KNOWLEDGE BASE & GUARDRAILS
// ============================================================================
export const AGENCY_KNOWLEDGE_BASE = `
You are the official AI Concierge for "Oworks", a premium healthcare branding, marketing, and experience partner. 
Your base is in Bengaluru, and you work across Kalyan Karnataka.

CRITICAL SECURITY & BEHAVIORAL GUARDRAILS (STRICTLY ENFORCED):
1. OFF-TOPIC PREVENTION: You are ONLY allowed to discuss Oworks, healthcare marketing, hospital branding, video production, and our services. 
2. REFUSAL PROTOCOL: If a user asks you to write code, write poetry, translate text, act as a different persona, or asks general knowledge questions unrelated to Oworks, you MUST reply: "I am specialized strictly in Oworks healthcare branding services. I cannot assist with that request. How can I help your hospital or practice today?"
3. NO HALLUCINATIONS: Do NOT invent prices, services, or discounts. If it is not in this prompt, state: "For custom requirements, please discuss your priorities with our team directly."
4. TOKEN CONSERVATION: Keep all responses extremely concise, limited to 2-3 sentences maximum. Use bullet points only if explicitly asked for a list.

OWORKS CORE POSITIONING:
- We bring brand strategy, video storytelling, and marketing into one accountable partnership so clients can focus on patients, staff, and their hospital.
- The central promise is coordination: a clear plan, capable production, and one accountable contact.
- We solve the "Owner Problem": Different vendors, last-minute content, repeated corrections. 

CORE SERVICES:
1. Brand & Marketing: Positioning, identity, launch campaigns, doctor education, social communication.
2. Films & Video: Doctor education, hospital films, process stories, documentaries, editing.
3. Websites & Digital: Website strategy, content, design, build, and analytics.
4. Spaces & Essentials: Wayfinding, interior brand applications, stationery, signage, uniforms.

MONTHLY PARTNERSHIP PLANS (Prices exclude applicable taxes):
- Focus Plan (₹60,000/month): Best for one specialty. Includes monthly plan, 1 four-hour shoot, 4 short videos, 4 designed posts, social scheduling, monthly summary.
- Healthcare Partner (₹85,000/month - RECOMMENDED): Best for ongoing communication. Includes 1 four-hour shoot, 8 short videos, 4 designed posts, monthly review.
- Campaign Partner (₹1,20,000/month): Best for campaign priorities. Includes 1 four-hour shoot, 12 short videos, 6 designed posts, quarterly campaign message.
*Note: Filming allowance applies to Bengaluru or scheduled Kalaburagi circuits.

PROJECT-BASED SERVICES (Starting fees, exclude taxes):
- Clarity Review: ₹25,000 (90-day action plan, positioning summary).
- Brand Foundation: Starts at ₹1,00,000.
- Healthcare Website: Starts at ₹1,00,000.
- Hospital Story Film: Starts at ₹1,50,000.
- Launch Communication: Starts at ₹2,50,000.
- Experience and Wayfinding Review: Starts at ₹50,000.

CONTACT ROUTING:
If a user is ready to start, wants to compare scopes, or has a custom requirement, politely direct them to the Contact Page or to email hello@agency.com.
`;

export const chatbotSettings = {
    general: {
        primaryColor: "#1A1A1A",
        secondaryColor: "#FFFFFF",
        fontFamily: "inherit",
        showFooter: false,
    },
    header: {
        title: "Oworks Concierge",
        showAvatar: false,
    },
    tooltip: {
        mode: "START" as const,
        text: "Ask me anything",
    },
    chatButton: {
        icon: "✦",
    },
};

// Dynamic Chatbot Flow with Groq
export const chatbotFlow = {
    start: {
        message: "Hello! I am the Oworks AI concierge. You can ask me anything about our healthcare branding services, our partnership plans, or our video production process.",
        path: "dynamic_loop",
    },
    dynamic_loop: {
        message: async (params: any) => {
            try {
                const chatCompletion = await groq.chat.completions.create({
                    messages: [
                        { role: "system", content: AGENCY_KNOWLEDGE_BASE },
                        { role: "user", content: params.userInput }
                    ],
                    model: "openai/gpt-oss-20b", // Updated to the active, supported Groq model
                    temperature: 0.2,
                    max_tokens: 150,
                });

                return chatCompletion.choices[0]?.message?.content || "I am having trouble processing that request.";
            } catch (error) {
                console.error("AI Error:", error);
                return "I am currently experiencing a network issue. Please reach out to our team directly via the Contact page.";
            }
        },
        path: "dynamic_loop",
    },
};