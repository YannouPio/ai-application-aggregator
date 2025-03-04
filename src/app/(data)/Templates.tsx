export default  [
    {
        name:'博客标题',
        desc:'一个根据您的博客信息生成博客标题的AI工具',
        category:'博客',
        icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt:'根据给定的领域和大纲，以项目符号形式提供5个博客主题创意',
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
        aiPrompt: '基于主题和大纲生成博客内容',
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
        aiPrompt: '根据领域生成前5个博客主题创意，仅以项目符号形式呈现（无描述）',
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
        slug: 'bilibili-seo-title',
        aiPrompt: '根据关键词和大纲，提供5个最佳SEO优化且排名靠前的标题创意，以项目符号形式呈现',
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
        slug: 'bilibili-description',
        aiPrompt: '根据主题和大纲，生成包含表情符号的4-5行视频描述',
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
        slug: 'bilibili-tag',

        aiPrompt: '根据标题和大纲，以项目符号形式生成10个视频标签',

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
        name: '重写文章',
        desc: '使用此工具重写现有文章或博客文章，可以绕过AI检测器，并且保证无抄袭。',
        icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png',
        category: '重写工具',
        slug: 'rewrite-article',
        aiPrompt: '重写给定文章，确保无任何抄袭',
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
        aiPrompt: '根据给定的textToImprove，专业地重写文本，消除任何语法错误',
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
        aiPrompt: '根据大纲内容为文本添加表情符号并重写',
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
       
        slug: 'rednote-post-generator',
        aiPrompt: '根据给定关键词生成3个帖子内容',
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
       
        slug: 'rednote-hash-tag-generator',
        aiPrompt: '根据给定关键词生成15个标签',
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
        aiPrompt: '重写输入文本，纠正语法错误',
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
        aiPrompt: '根据用户的代码描述编写代码',
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
        aiPrompt: '根据用户提供的代码逐行解释',
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