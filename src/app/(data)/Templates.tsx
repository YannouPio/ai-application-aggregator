export default  [
    {
        name:'博客标题',
        desc:'一个根据您的博客信息生成博客标题的AI工具',
        category:'博客',
        icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt:'Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format',
        slug:'generate-blog-title',
        form:[
            {
                label:'输入您的博客主题',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'输入博客大纲',
                field:'textarea',
                name:'outline',
                
            }
        ]
    },
    {
        name: '博客内容',
        desc: '一个AI工具，可以根据您选择的语言生成引人注目和具有病毒式传播潜力的博客文章内容。',
        category: '博客',
        icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
        slug: 'blog-content-generation',
        aiPrompt: 'Generate Blog Content based on topic and outline in rich text editor format',
        form: [
            {
                label: '输入您的博客主题',
                field: 'input',
                name: 'topic',
                required:true
            },
            {
                label: '在此输入博客大纲',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: '博客主题创意',
        desc: '一个AI工具，可作为您的个人博客文章标题创作助手，生成吸引人的标题创意。',
        category: '博客',
        icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
        slug: 'blog-topic-idea',
        aiPrompt: 'Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format',
        form: [
            {
                label: '输入您的领域',
                field: 'input',
                name: 'niche',
                required:true
            },
        ]
    },
    {
        name: 'Bilibili SEO标题',
        desc: '一个AI工具，帮助您创建优化的Bilibili视频标题，提高排名和点击率。',
        category: 'Bilibili工具',
        icon: 'https://github.com/luestr/IconResource/blob/main/App_icon/120px/Bilibili.png?raw=true',
        slug: 'youtube-seo-title',
        aiPrompt: 'Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline and give me result in HTML tags format',
        form: [
            {
                label: '输入您的Bilibili视频主题关键词',
                field: 'input',
                name: 'keywords',
                required:true
            },
            {
                label: '在此输入Bilibili描述大纲',
                field: 'textarea',
                name: 'outline'
            }
        ]

    },
    {

        name: 'Bilibili描述',
        desc: '一个AI工具，帮助您生成引人入胜的Bilibili视频描述，提高观看率和互动。',
        category: 'Bilibili工具',
        icon: 'https://github.com/luestr/IconResource/blob/main/App_icon/120px/Bilibili.png?raw=true',
        slug: 'youtube-description',
        aiPrompt: 'Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format',
        form: [
            {
                label: '输入您的视频主题/标题',
                field: 'input',
                name: 'topic',
                required:true
            },
            {
                label: '在此输入Bilibili大纲',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Bilibili标签',
        desc: '一个AI工具，根据您的视频内容生成相关的Bilibili标签，提高视频的可发现性。',
        category: 'Bilibili工具',
        icon: 'https://github.com/luestr/IconResource/blob/main/App_icon/120px/Bilibili.png?raw=true',
        slug: 'youtube-tag',

        aiPrompt: 'Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format',

        form: [
            {
                label: '输入您的Bilibili标题',
                field: 'input',
                name: 'title',
                required:true
            },
            {
                label: '在此输入Bilibili视频大纲（可选）',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },

    {
        name: '重写文章（无抄袭）',
        desc: '使用此工具重写现有文章或博客文章，可以绕过AI检测器，并且保证无抄袭。',
        icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png',
        category: '重写工具',
        slug: 'rewrite-article',
        aiPrompt: 'Rewrite give article without any Plagiarism in rich text editor format',
        form: [
            {
                label: '🤖 提供您要重写的文章/博客帖子或任何其他内容。',
                field: 'textarea',
                name: 'article',
                required:true
            }
        ]
    },
    {
        name: '文本优化',
        desc: '这个实用工具可以完善您的写作，消除错误和冗余，使结果清晰易读。它还提供全面的语调分析并建议更好的词汇选择。',
        icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png',
        category: '写作助手',
        slug: 'text-improver',
        aiPrompt: 'Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format',
        form: [
            {
                label: '输入您想要重写或改进的文本',
                field: 'textarea',
                name: 'textToImprove'
            }
        ]
    },
    {
        name: '为文本添加表情符号',
        desc: '一个AI工具，可以为您的文本智能添加适合的表情符号，使内容更加生动有趣。',
        icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
        category: '博客',
        slug: 'add-emoji-to-text',
        aiPrompt: 'Add Emoji to outline text depends on outline and rewrite it in rich text editor format',
        form: [
            {
                label: '输入要添加表情符号的文本',
                field: 'textarea',
                name: 'outline',
                required:true
            }
        ]
    },
    {
        name: '小红书帖子生成器',
        desc: '一个AI工具，根据您提供的关键词生成吸引人的小红书帖子内容。',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111843.png',
        category: '社交媒体',
       
        slug: 'instagram-post-generator',
        aiPrompt: 'Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format',
        form: [
            {
                label: '输入您帖子的关键词',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
    {
        name: '小红书标签生成器',
        desc: '一个AI工具，根据您提供的关键词生成相关的小红书标签，提高帖子的可见度。',
        icon: 'https://cdn-icons-png.flaticon.com/128/1073/1073501.png',
        category: '社交媒体',
       
        slug: 'instagram-hash-tag-generator',
        aiPrompt: 'Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format',
        form: [
            {
                label: '输入您的小红书标签关键词',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
    {
        name: '英语语法检查',
        desc: 'AI模型，通过提供文本来纠正您的英语语法',
        icon:'https://cdn-icons-png.flaticon.com/128/12596/12596700.png',
        category: '英语',
       
        slug: 'english-grammer-checker',
        aiPrompt: 'Rewrite the inputText by correcting the grammer and give output in  in rich text editor format',
        form: [
            {
                label: '输入需要修正语法的文本',
                field: 'input',
                name: 'inputText',
                required:true
            },
           
        ]
    },
    {
        name: '编写代码',
        desc: 'AI模型，可以用任何编程语言生成代码',
        icon:'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
        category: '编程',
       
        slug: 'write-code',
        aiPrompt: 'Depends on user codeDescription write a code and give output in  in rich text editor format in code block ',
        form: [
            {
                label: '输入您想要的代码描述及编程语言',
                field: 'textarea',
                name: 'codeDesscripton',
                required:true
            },
           
        ]
    },
    {
        name: '解释代码',
        desc: 'AI模型，可以解释任何编程语言的代码',
        icon:'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
        category: '编程',
       
        slug: 'explain-code',
        aiPrompt: 'Depends on user codeDescription explain code line by line and give output in  in rich text editor format in code block ',
        form: [
            {
                label: '输入您想要理解的代码',
                field: 'textarea',
                name: 'codeDesscripton',
                required:true
            },
           
        ]
    },
]