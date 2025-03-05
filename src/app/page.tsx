import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div className="min-h-screen bg-white">
    {/* Header */}
    <header className="flex flex-wrap justify-between z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-4 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center">
        <Image src={'/logo.svg'} alt="logo" width={80} height={80} />
      </div>
      <div className="flex items-center">
        <Link href="/dashboard" className="flex items-center gap-x-2 font-medium text-gray-600 hover:text-gray-800">
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
          </svg>
          开始使用
        </Link>
      </div>
    </header>

    {/* Hero Section with Gray Gradient Background */}
    <div className="relative overflow-hidden">
      <div className="bg-gradient-to-br from-gray-600 to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[85rem] mx-auto">
          <div className="max-w-2xl text-center mx-auto">
            <h1 className="block font-bold text-white text-4xl md:text-5xl lg:text-6xl">
              AI内容生成器
            </h1>
          </div>
         
          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-200">
              通过我们的AI驱动应用，彻底改变您的内容创作方式，几秒钟内即可生成高质量、引人入胜的文本内容。
            </p>
          </div>
         
          <div className="mt-8 gap-3 flex justify-center">
            <Link 
              href="/dashboard" 
              className="inline-flex justify-center items-center gap-x-3 text-center bg-white hover:bg-gray-100 text-gray-700 font-medium rounded-md py-3 px-6 transition-all shadow-sm"
            >
              立即开始
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* Features Section */}
    <div className="max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-6">
        {/* Feature Card 1 */}
        <a className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 hover:bg-gradient-to-tl hover:from-gray-600/5 hover:to-gray-800/5">
          <div className="flex justify-center items-center size-12 bg-gradient-to-tl from-gray-600 to-gray-800 rounded-xl">
            <svg className="flex-shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="10" height="14" x="3" y="8" rx="2"/><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"/><path d="M8 18h.01"/></svg>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800">25+ 模板</h3>
            <p className="mt-1 text-gray-600">响应式设计，适合移动设备优先的网络项目</p>
          </div>
        </a>
       
        {/* Feature Card 2 */}
        <a className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 hover:bg-gradient-to-tl hover:from-gray-600/5 hover:to-gray-800/5">
          <div className="flex justify-center items-center size-12 bg-gradient-to-tl from-gray-600 to-gray-800 rounded-xl">
            <svg className="flex-shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800">富文本支持</h3>
            <p className="mt-1 text-gray-600">可用Markdown在线编辑及扩展</p>
          </div>
        </a>
       
        {/* Feature Card 3 */}
        <a className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 hover:bg-gradient-to-tl hover:from-gray-600/5 hover:to-gray-800/5">
          <div className="flex justify-center items-center size-12 bg-gradient-to-tl from-gray-600 to-gray-800 rounded-xl">
            <svg className="flex-shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800">免费使用</h3>
            <p className="mt-1 text-gray-600">谷歌Gemini 1.5 Flash模型支持</p>
          </div>
        </a>
      
        {/* Feature Card 4 */}
        <a className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 hover:bg-gradient-to-tl hover:from-gray-600/5 hover:to-gray-800/5">
          <div className="flex justify-center items-center size-12 bg-gradient-to-tl from-gray-600 to-gray-800 rounded-xl">
            <svg className="flex-shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800">7/24 支持</h3>
            <p className="mt-1 text-gray-600">每周7天，每天24小时随时联系我们</p>
          </div>
        </a>
      </div>
    </div>

   </div>
  );
}
