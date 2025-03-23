# AI 应用聚合平台

一个现代化平台，聚合AI驱动的应用程序和模板，为用户提供无缝界面，通过统一的仪表盘体验发现和利用各种AI功能。

[English](README.md) | [中文文档](README-CN.md)

# ✨ 特性
- AI模板库：浏览并访问精选的AI应用模板集合
- 安全认证：通过Clerk认证实现基于角色的访问控制
- 响应式设计：在桌面、平板和移动设备上提供无缝体验
- 交互式仪表盘：用户友好的界面，用于管理和与AI应用交互
- Google生成式AI集成：利用强大的AI功能进行内容生成

# 🛠️ 技术栈
- 前端：Next.js 15 (App Router)、React 19、TypeScript
- 样式：Tailwind CSS、shadcn/ui组件、class-variance-authority
- 认证：带中间件保护的Clerk
- AI集成：Google生成式AI (Gemini)
- 构建工具：Turbopack、Bun
- 代码质量：ESLint、TypeScript严格模式

# 🚀 快速开始
## 前提条件
- Bun (或Node.js 22+)
- Google生成式AI API密钥
- Clerk账户和凭证

## 安装
1. 克隆仓库
```
git clone https://github.com/yourusername/ai-application-aggregator.git
cd ai-application-aggregator
```
2. 安装依赖
```
bun install
```
3. 创建.env.local文件并设置必要的环境变量
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
GOOGLE_GENERATIVE_AI_KEY=your_gemini_api_key
```
4. 启动开发服务器
```
bun run dev
```
5. 在浏览器中打开 http://localhost:3000

# 📂 项目结构
```
src/
├── app/                    # Next.js App Router 页面
│   ├── (auth)/             # 认证路由
│   ├── (data)/             # 数据和模板
│   └── dashboard/          # 主仪表盘界面
├── components/             # 可复用组件
│   └── ui/                 # UI组件
├── lib/                    # 工具函数
└── middleware.ts          # 路由保护中间件
```

# 🌐 使用方法
1. 使用认证页面登录
2. 浏览仪表盘查看可用的AI模板
3. 选择模板与各种AI功能进行交互
4. 创建和管理你的个人AI工作流

# 📝 许可证
本项目采用MIT许可证 - 详情请参阅LICENSE文件。

# 🤝 贡献
欢迎贡献！请随时提交Pull Request。

使用Next.js和AI技术构建 ❤️