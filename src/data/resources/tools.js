const category =
    [
        {
            title: "GitHub Copilot",
            description: "AI pair programmer to assist with coding.",
            category: "tools",
            contributor: {
                name: "github",
                github: "https://github.com/github"
            },
            url: "https://github.com/features/copilot",
            tags: ["ai", "coding", "development"]
        },
        {
            title: "Postman",
            description: "Platform for API development and testing.",
            category: "tools",
            contributor: {
                name: "postman",
                github: "https://github.com/postmanlabs"
            },
            url: "https://www.postman.com/",
            tags: ["api", "testing", "productivity"]
        },
        {
            title: "Figma",
            description: "Collaborative interface design and prototyping tool.",
            category: "tools",
            contributor: {
                name: "figma",
                github: "https://github.com/figma"
            },
            url: "https://www.figma.com/",
            tags: ["design", "ui", "collaboration"]
        },
        {
            title: "Docker",
            description: "Platform to develop, ship, and run applications in containers.",
            category: "tools",
            contributor: {
                name: "docker",
                github: "https://github.com/docker"
            },
            url: "https://www.docker.com/",
            tags: ["containers", "development", "productivity"]
        },
        {
            title: "Visual Studio Code",
            description: "Source-code editor with powerful tools for developers.",
            category: "tools",
            contributor: {
                name: "microsoft",
                github: "https://github.com/microsoft/vscode"
            },
            url: "https://code.visualstudio.com/",
            tags: ["editor", "development", "productivity"]
        },
        {
            title: "Jenkins",
            description: "Open-source automation server for continuous integration and delivery.",
            category: "tools",
            contributor: {
                name: "jenkins",
                github: "https://github.com/jenkinsci"
            },
            url: "https://www.jenkins.io/",
            tags: ["ci", "automation", "development"]
        },
        {
            title: "Terraform",
            description: "Infrastructure as Code tool for building and managing infrastructure.",
            category: "tools",
            contributor: {
                name: "hashicorp",
                github: "https://github.com/hashicorp/terraform"
            },
            url: "https://www.terraform.io/",
            tags: ["infrastructure", "automation", "development"]
        },
        {
            title: "Kubernetes",
            description: "Container orchestration platform for automating application deployment.",
            category: "tools",
            contributor: {
                name: "kubernetes",
                github: "https://github.com/kubernetes/kubernetes"
            },
            url: "https://kubernetes.io/",
            tags: ["containers", "orchestration", "automation"]
        },
        {
            title: "Ansible",
            description: "IT automation tool for configuration management, provisioning, and deployment.",
            category: "tools",
            contributor: {
                name: "ansible",
                github: "https://github.com/ansible/ansible"
            },
            url: "https://www.ansible.com/",
            tags: ["automation", "deployment", "configuration"]
        },
        {
            title: "Jira Software",
            description: "Agile project management tool for planning and tracking software development.",
            category: "tools",
            contributor: {
                name: "atlassian",
                github: "https://github.com/atlassian"
            },
            url: "https://www.atlassian.com/software/jira",
            tags: ["project-management", "agile", "development"]
        },
        {
            title: "JSFiddle",
            description: "Online editor for testing and sharing web development code snippets.",
            category: "tools",
            contributor: {
                name: "jsfiddle",
                github: "https://github.com/jsfiddle"
            },
            url: "https://jsfiddle.net/",
            tags: ["web-development", "coding", "testing"]
        },
        {
            title: "CodePen",
            description: "Online code editor and community for front-end developers.",
            category: "tools",
            contributor: {
                name: "codepen",
                github: "https://github.com/CodePen"
            },
            url: "https://codepen.io/",
            tags: ["web-development", "front-end", "design"]
        },
        {
            title: "CodeSandbox",
            description: "Online IDE for rapid web application prototyping and development.",
            category: "tools",
            contributor: {
                name: "codesandbox",
                github: "https://github.com/codesandbox"
            },
            url: "https://codesandbox.io/",
            tags: ["web-development", "coding", "collaboration"]
        },
        {
            title: "PyCharm",
            description: "Integrated development environment for Python development.",
            category: "tools",
            contributor: {
                name: "jetbrains",
                github: "https://github.com/JetBrains"
            },
            url: "https://www.jetbrains.com/pycharm/",
            tags: ["python", "development", "ide"]
        },
        {
            title: "Robo 3T",
            description: "GUI for managing and querying MongoDB databases.",
            category: "tools",
            contributor: {
                name: "robo3t",
                github: "https://github.com/Studio3T/robomongo"
            },
            url: "https://robomongo.org/",
            tags: ["database", "mongoDB", "productivity"]
        },

        {
            title: "PhpStorm",
            description: "A powerful IDE for PHP and web development.",
            category: "tools",
            contributor: {
                name: "jetbrains",
                github: "https://github.com/JetBrains"
            },
            url: "https://www.jetbrains.com/phpstorm/",
            tags: ["php", "development", "ide"]
        },
        {
            title: "DataGrip",
            description: "Database IDE for developers working with SQL and databases.",
            category: "tools",
            contributor: {
                name: "jetbrains",
                github: "https://github.com/JetBrains"
            },
            url: "https://www.jetbrains.com/datagrip/",
            tags: ["sql", "database", "ide"]
        },
        {
            title: "Bluefish Editor",
            description: "Powerful text editor targeted towards programmers and web developers.",
            category: "tools",
            contributor: {
                name: "bluefish",
                github: "https://github.com/oliverschmidt/bluefish"
            },
            url: "http://bluefish.openoffice.nl/",
            tags: ["editor", "web-development", "coding"]
        },
        {
            title: "RStudio",
            description: "IDE designed specifically for R and statistical computing.",
            category: "tools",
            contributor: {
                name: "rstudio",
                github: "https://github.com/rstudio"
            },
            url: "https://posit.co/products/open-source/rstudio/",
            tags: ["data-science", "r", "development"]
        },
        {
            title: "Spyder",
            description: "Scientific Python IDE designed for data analysis and machine learning.",
            category: "tools",
            contributor: {
                name: "spyder",
                github: "https://github.com/spyder-ide/spyder"
            },
            url: "https://www.spyder-ide.org/",
            tags: ["python", "data-science", "ide"]
        },
        {
            title: "Brackets",
            description: "Lightweight yet powerful code editor for web design and development.",
            category: "tools",
            contributor: {
                name: "adobe",
                github: "https://github.com/adobe/brackets"
            },
            url: "http://brackets.io/",
            tags: ["web-development", "editor", "html"]
        },
        {
            title: "Eclipse",
            description: "Popular IDE for Java and other programming languages.",
            category: "tools",
            contributor: {
                name: "eclipse",
                github: "https://github.com/eclipse"
            },
            url: "https://www.eclipse.org/",
            tags: ["java", "development", "ide"]
        },
        {
            title: "NetBeans",
            description: "IDE for Java, PHP, HTML5, and more.",
            category: "tools",
            contributor: {
                name: "apache",
                github: "https://github.com/apache/netbeans"
            },
            url: "https://netbeans.apache.org/",
            tags: ["java", "php", "ide"]
        },
        {
            title: "Qt Creator",
            description: "Cross-platform C++ IDE for GUI development.",
            category: "tools",
            contributor: {
                name: "qt",
                github: "https://github.com/qt"
            },
            url: "https://www.qt.io/product/development-tools",
            tags: ["c++", "gui", "ide"]
        },
        {
            title: "Godot Engine",
            description: "Open-source game engine with an integrated development environment.",
            category: "tools",
            contributor: {
                name: "godot",
                github: "https://github.com/godotengine/godot"
            },
            url: "https://godotengine.org/",
            tags: ["game-development", "engine", "open-source"]
        },
        {
            title: "Unity Editor",
            description: "Cross-platform game engine for creating interactive experiences.",
            category: "tools",
            contributor: {
                name: "unity",
                github: "https://github.com/Unity-Technologies"
            },
            url: "https://unity.com/",
            tags: ["game-development", "3d", "editor"]
        },
        {
            title: "Obsidian",
            description: "Knowledge management and note-taking tool for developers.",
            category: "tools",
            contributor: {
                name: "obsidian",
                github: "https://github.com/obsidianmd"
            },
            url: "https://obsidian.md/",
            tags: ["productivity", "notes", "markdown"]
        },
        {
            title: "Atom",
            description: "Hackable text editor for developers.",
            category: "tools",
            contributor: {
                name: "github",
                github: "https://github.com/atom"
            },
            url: "https://atom.io/",
            tags: ["editor", "development", "customizable"]
        },
        {
            title: "GIMP",
            description: "Open-source image editor for designers and developers.",
            category: "tools",
            contributor: {
                name: "gimp",
                github: "https://github.com/GNOME/gimp"
            },
            url: "https://www.gimp.org/",
            tags: ["design", "image-editing", "open-source"]
        },

        {
            title: "DBeaver",
            description: "Universal database tool for developers and database administrators.",
            category: "tools",
            contributor: {
                name: "dbeaver",
                github: "https://github.com/dbeaver/dbeaver"
            },
            url: "https://dbeaver.io/",
            tags: ["database", "sql", "management"]
        },
        {
            title: "SQLite Studio",
            description: "A lightweight, open-source SQLite database manager.",
            category: "tools",
            contributor: {
                name: "sqlitestudio",
                github: "https://github.com/pawelsalawa/sqlitestudio"
            },
            url: "https://sqlitestudio.pl/",
            tags: ["database", "sqlite", "management"]
        },
        {
            title: "TablePlus",
            description: "Modern, native, and friendly GUI tool for relational databases.",
            category: "tools",
            contributor: {
                name: "tableplus",
                github: "https://github.com/TablePlus"
            },
            url: "https://tableplus.com/",
            tags: ["database", "sql", "gui"]
        },
        {
            title: "Apache JMeter",
            description: "Open-source tool for performance and load testing.",
            category: "tools",
            contributor: {
                name: "apache",
                github: "https://github.com/apache/jmeter"
            },
            url: "https://jmeter.apache.org/",
            tags: ["testing", "performance", "load-testing"]
        },
        {
            title: "Xcode",
            description: "IDE for macOS and iOS development.",
            category: "tools",
            contributor: {
                name: "apple",
                github: "https://github.com/apple"
            },
            url: "https://developer.apple.com/xcode/",
            tags: ["ios", "macos", "development"]
        },
        {
            title: "WebStorm",
            description: "JetBrains IDE for modern JavaScript development.",
            category: "tools",
            contributor: {
                name: "jetbrains",
                github: "https://github.com/JetBrains"
            },
            url: "https://www.jetbrains.com/webstorm/",
            tags: ["javascript", "development", "ide"]
        },
        {
            title: "Pencil",
            description: "Open-source prototyping and wireframing tool.",
            category: "tools",
            contributor: {
                name: "evolus",
                github: "https://github.com/evolus/pencil"
            },
            url: "https://pencil.evolus.vn/",
            tags: ["wireframing", "design", "prototyping"]
        },
        {
            title: "Postico",
            description: "Modern PostgreSQL client for macOS.",
            category: "tools",
            contributor: {
                name: "eggerapps",
                github: "https://github.com/eggerapps"
            },
            url: "https://eggerapps.at/postico/",
            tags: ["database", "postgresql", "client"]
        },
        {
            title: "pgAdmin",
            description: "Comprehensive PostgreSQL database management tool.",
            category: "tools",
            contributor: {
                name: "pgadmin",
                github: "https://github.com/postgres/pgadmin"
            },
            url: "https://www.pgadmin.org/",
            tags: ["database", "postgresql", "management"]
        },
        {
            title: "Metabase",
            description: "Open-source business intelligence tool for analyzing data.",
            category: "tools",
            contributor: {
                name: "metabase",
                github: "https://github.com/metabase/metabase"
            },
            url: "https://www.metabase.com/",
            tags: ["data-analysis", "business-intelligence", "open-source"]
        },
        {
            title: "Sublime Merge",
            description: "Git client built by the creators of Sublime Text.",
            category: "tools",
            contributor: {
                name: "sublimehq",
                github: "https://github.com/sublimehq"
            },
            url: "https://www.sublimemerge.com/",
            tags: ["git", "version-control", "development"]
        },
        {
            title: "Helm",
            description: "Tool for managing Kubernetes applications.",
            category: "tools",
            contributor: {
                name: "helm",
                github: "https://github.com/helm/helm"
            },
            url: "https://helm.sh/",
            tags: ["kubernetes", "orchestration", "containers"]
        },
        {
            title: "Zsh",
            description: "Powerful shell for developers with advanced scripting capabilities.",
            category: "tools",
            contributor: {
                name: "zsh",
                github: "https://github.com/zsh-users"
            },
            url: "https://www.zsh.org/",
            tags: ["shell", "scripting", "productivity"]
        },
        {
            title: "Oh My Zsh",
            description: "Framework for managing Zsh configuration with plugins and themes.",
            category: "tools",
            contributor: {
                name: "ohmyzsh",
                github: "https://github.com/ohmyzsh/ohmyzsh"
            },
            url: "https://ohmyz.sh/",
            tags: ["shell", "zsh", "customization"]
        },
        {
            title: "Asciinema",
            description: "Tool for recording and sharing terminal sessions.",
            category: "tools",
            contributor: {
                name: "asciinema",
                github: "https://github.com/asciinema/asciinema"
            },
            url: "https://asciinema.org/",
            tags: ["terminal", "recording", "sharing"]
        },
        {
            title: "CyberChef",
            description: "Web-based tool for encryption, encoding, and data analysis.",
            category: "tools",
            contributor: {
                name: "gchq",
                github: "https://github.com/gchq/CyberChef"
            },
            url: "https://gchq.github.io/CyberChef/",
            tags: ["data", "analysis", "encryption"]
        },
        {
            title: "YAML Lint",
            description: "Tool for validating YAML syntax.",
            category: "tools",
            contributor: {
                name: "yamllint",
                github: "https://github.com/adrienverge/yamllint"
            },
            url: "https://yamllint.com/",
            tags: ["yaml", "validation", "syntax"]
        },
        {
            title: "Regex101",
            description: "Online regex editor and debugger with real-time results.",
            category: "tools",
            contributor: {
                name: "firasdib",
                github: "https://github.com/firasdib/Regex101"
            },
            url: "https://regex101.com/",
            tags: ["regex", "testing", "development"]
        },
    ];

export default category;