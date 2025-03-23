# AI Application Aggregator

A modern platform that aggregates AI-powered applications and templates, providing users with a seamless interface to discover and utilize various AI capabilities through a unified dashboard experience.

[English](README.md) | [中文文档](README-CN.md)

# ✨ Features
- AI Template Library: Browse and access a curated collection of AI application templates
- Secure Authentication: Role-based access control through Clerk authentication
- Responsive Design: Seamless experience across desktop, tablet, and mobile devices
- Interactive Dashboard: User-friendly interface to manage and interact with AI applications
- Google Generative AI Integration: Leverage powerful AI capabilities for content generation

# 🛠️ Tech Stack
- Frontend: Next.js 15 (App Router), React 19, TypeScript
- Styling: Tailwind CSS, shadcn/ui components, class-variance-authority
- Authentication: Clerk with middleware protection
- AI Integration: Google Generative AI (Gemini)
- Build Tools: Turbopack, Bun
- Code Quality: ESLint, TypeScript strict mode

# 🚀 Getting Started
## Prerequisites
- Bun (or Node.js 22+)
- Google Generative AI API key
- Clerk account and credentials

## Installation
1. Clone the repository
```
git clone https://github.com/yourusername/ai-application-aggregator.git
cd ai-application-aggregator
```
2. Install dependencies
```
bun install
```
3. Create a .env.local file with required environment variables
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
GOOGLE_GENERATIVE_AI_KEY=your_gemini_api_key
```
4. Start the development server
```
bun run dev
```
5. Open http://localhost:3000 in your browser

# 📂 Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── (auth)/             # Authentication routes
│   ├── (data)/             # Data and templates
│   └── dashboard/          # Main dashboard interface
├── components/             # Reusable components
│   └── ui/                 # UI components
├── lib/                    # Utility functions
└── middleware.ts          # Route protection middleware
```

# 🌐 Usage
1. Sign in using the authentication page
2. Navigate the dashboard to browse available AI templates
3. Select templates to interact with various AI functionalities
4. Create and manage your personal AI workflows

# 📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

# 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

Built with ❤️ using Next.js and AI technologies