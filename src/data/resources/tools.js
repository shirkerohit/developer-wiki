const category =
    [
        {
            title: "GitHub Copilot",
            description: "AI pair programmer to assist with coding.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://github.com/features/copilot",
            tags: ["ai", "coding", "development"]
        },
        {
            title: "Postman",
            description: "Platform for API development and testing.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://www.postman.com/",
            tags: ["api", "testing", "productivity"]
        },
        {
            title: "Figma",
            description: "Collaborative interface design and prototyping tool.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://www.figma.com/",
            tags: ["design", "ui", "collaboration"]
        },
        {
            title: "Docker",
            description: "Platform to develop, ship, and run applications in containers.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://www.docker.com/",
            tags: ["containers", "development", "productivity"]
        },
        {
            title: "Visual Studio Code",
            description: "Source-code editor with powerful tools for developers.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://code.visualstudio.com/",
            tags: ["editor", "development", "productivity"]
        },
        {
            title: "Jenkins",
            description: "Open-source automation server for continuous integration and delivery.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://www.jenkins.io/",
            tags: ["ci", "automation", "development"]
        },
        {
            title: "Terraform",
            description: "Infrastructure as Code tool for building and managing infrastructure.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://www.terraform.io/",
            tags: ["infrastructure", "automation", "development"]
        },
        {
            title: "Kubernetes",
            description: "Container orchestration platform for automating application deployment.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://kubernetes.io/",
            tags: ["containers", "orchestration", "automation"]
        },
        {
            title: "Ansible",
            description: "IT automation tool for configuration management, provisioning, and deployment.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://www.ansible.com/",
            tags: ["automation", "deployment", "configuration"]
        },
        {
            title: "Jira Software",
            description: "Agile project management tool for planning and tracking software development.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://www.atlassian.com/software/jira",
            tags: ["project-management", "agile", "development"]
        },
        {
            title: "JSFiddle",
            description: "Online editor for testing and sharing web development code snippets.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://jsfiddle.net/",
            tags: ["web-development", "coding", "testing"]
        },
        {
            title: "CodePen",
            description: "Online code editor and community for front-end developers.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://codepen.io/",
            tags: ["web-development", "front-end", "design"]
        },
        {
            title: "CodeSandbox",
            description: "Online IDE for rapid web application prototyping and development.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://codesandbox.io/",
            tags: ["web-development", "coding", "collaboration"]
        },
        {
            title: "PyCharm",
            description: "Integrated development environment for Python development.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://www.jetbrains.com/pycharm/",
            tags: ["python", "development", "ide"]
        },
        {
            title: "Robo 3T",
            description: "GUI for managing and querying MongoDB databases.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://robomongo.org/",
            tags: ["database", "mongoDB", "productivity"]
        },

        {
            title: "PhpStorm",
            description: "A powerful IDE for PHP and web development.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://www.jetbrains.com/phpstorm/",
            tags: ["php", "development", "ide"]
        },
        {
            title: "DataGrip",
            description: "Database IDE for developers working with SQL and databases.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://www.jetbrains.com/datagrip/",
            tags: ["sql", "database", "ide"]
        },
        {
            title: "Bluefish Editor",
            description: "Powerful text editor targeted towards programmers and web developers.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "http://bluefish.openoffice.nl/",
            tags: ["editor", "web-development", "coding"]
        },
        {
            title: "RStudio",
            description: "IDE designed specifically for R and statistical computing.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://posit.co/products/open-source/rstudio/",
            tags: ["data-science", "r", "development"]
        },
        {
            title: "Spyder",
            description: "Scientific Python IDE designed for data analysis and machine learning.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://www.spyder-ide.org/",
            tags: ["python", "data-science", "ide"]
        },
        {
            title: "Brackets",
            description: "Lightweight yet powerful code editor for web design and development.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "http://brackets.io/",
            tags: ["web-development", "editor", "html"]
        },
        {
            title: "Eclipse",
            description: "Popular IDE for Java and other programming languages.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://www.eclipse.org/",
            tags: ["java", "development", "ide"]
        },
        {
            title: "NetBeans",
            description: "IDE for Java, PHP, HTML5, and more.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://netbeans.apache.org/",
            tags: ["java", "php", "ide"]
        },
        {
            title: "Qt Creator",
            description: "Cross-platform C++ IDE for GUI development.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://www.qt.io/product/development-tools",
            tags: ["c++", "gui", "ide"]
        },
        {
            title: "Godot Engine",
            description: "Open-source game engine with an integrated development environment.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://godotengine.org/",
            tags: ["game-development", "engine", "open-source"]
        },
        {
            title: "Unity Editor",
            description: "Cross-platform game engine for creating interactive experiences.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://unity.com/",
            tags: ["game-development", "3d", "editor"]
        },
        {
            title: "Obsidian",
            description: "Knowledge management and note-taking tool for developers.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://obsidian.md/",
            tags: ["productivity", "notes", "markdown"]
        },
        {
            title: "Atom",
            description: "Hackable text editor for developers.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://atom.io/",
            tags: ["editor", "development", "customizable"]
        },
        {
            title: "GIMP",
            description: "Open-source image editor for designers and developers.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://www.gimp.org/",
            tags: ["design", "image-editing", "open-source"]
        },

        {
            title: "DBeaver",
            description: "Universal database tool for developers and database administrators.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://dbeaver.io/",
            tags: ["database", "sql", "management"]
        },
        {
            title: "SQLite Studio",
            description: "A lightweight, open-source SQLite database manager.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://sqlitestudio.pl/",
            tags: ["database", "sqlite", "management"]
        },
        {
            title: "TablePlus",
            description: "Modern, native, and friendly GUI tool for relational databases.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://tableplus.com/",
            tags: ["database", "sql", "gui"]
        },
        {
            title: "Apache JMeter",
            description: "Open-source tool for performance and load testing.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://jmeter.apache.org/",
            tags: ["testing", "performance", "load-testing"]
        },
        {
            title: "Xcode",
            description: "IDE for macOS and iOS development.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://developer.apple.com/xcode/",
            tags: ["ios", "macos", "development"]
        },
        {
            title: "WebStorm",
            description: "JetBrains IDE for modern JavaScript development.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://www.jetbrains.com/webstorm/",
            tags: ["javascript", "development", "ide"]
        },
        {
            title: "Pencil",
            description: "Open-source prototyping and wireframing tool.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://pencil.evolus.vn/",
            tags: ["wireframing", "design", "prototyping"]
        },
        {
            title: "Postico",
            description: "Modern PostgreSQL client for macOS.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://eggerapps.at/postico/",
            tags: ["database", "postgresql", "client"]
        },
        {
            title: "pgAdmin",
            description: "Comprehensive PostgreSQL database management tool.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://www.pgadmin.org/",
            tags: ["database", "postgresql", "management"]
        },
        {
            title: "Metabase",
            description: "Open-source business intelligence tool for analyzing data.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://www.metabase.com/",
            tags: ["data-analysis", "business-intelligence", "open-source"]
        },
        {
            title: "Sublime Merge",
            description: "Git client built by the creators of Sublime Text.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://www.sublimemerge.com/",
            tags: ["git", "version-control", "development"]
        },
        {
            title: "Helm",
            description: "Tool for managing Kubernetes applications.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://helm.sh/",
            tags: ["kubernetes", "orchestration", "containers"]
        },
        {
            title: "Zsh",
            description: "Powerful shell for developers with advanced scripting capabilities.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://www.zsh.org/",
            tags: ["shell", "scripting", "productivity"]
        },
        {
            title: "Oh My Zsh",
            description: "Framework for managing Zsh configuration with plugins and themes.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://ohmyz.sh/",
            tags: ["shell", "zsh", "customization"]
        },
        {
            title: "Asciinema",
            description: "Tool for recording and sharing terminal sessions.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://asciinema.org/",
            tags: ["terminal", "recording", "sharing"]
        },
        {
            title: "CyberChef",
            description: "Web-based tool for encryption, encoding, and data analysis.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://gchq.github.io/CyberChef/",
            tags: ["data", "analysis", "encryption"]
        },
        {
            title: "YAML Lint",
            description: "Tool for validating YAML syntax.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://yamllint.com/",
            tags: ["yaml", "validation", "syntax"]
        },
        {
            title: "Regex101",
            description: "Online regex editor and debugger with real-time results.",
            category: "tools",
            contributor: {
                name: "Rohit S",
                github: "https://github.com/shirkerohit"
            },
            url: "https://regex101.com/",
            tags: ["regex", "testing", "development"]
        },
    ];

export default category;