const courses = [
    {
        "title": "Udemy Web Development test",
        "description": "Comprehensive web development courses.",
        "category": "courses",
        "contributor": {
            "name": "udemy",
            "github": "https://github.com/udemy"
        },
        "url": "https://udemy.com",
        "tags": ["learning", "web-development", "courses"]
    },
    {
        "title": "Coursera Web Development Specialization",
        "description": "Complete web development courses including front-end and back-end.",
        "category": "courses",
        "contributor": {
            "name": "coursera",
            "github": "https://github.com/coursera"
        },
        "url": "https://coursera.org",
        "tags": ["learning", "web-development", "courses"]
    },
    {
        "title": "freeCodeCamp Web Development",
        "description": "Free coding lessons covering HTML, CSS, JavaScript, and more.",
        "category": "courses",
        "contributor": {
            "name": "freeCodeCamp",
            "github": "https://github.com/freeCodeCamp"
        },
        "url": "https://freecodecamp.org",
        "tags": ["learning", "web-development", "courses"]
    },
    {
        "title": "Codecademy Web Development",
        "description": "Interactive coding platform focusing on web development skills.",
        "category": "courses",
        "contributor": {
            "name": "codecademy",
            "github": "https://github.com/codecademy"
        },
        "url": "https://codecademy.com",
        "tags": ["learning", "web-development", "courses"]
    },
    {
        "title": "The Odin Project",
        "description": "Full-stack web development curriculum covering everything from HTML to back-end.",
        "category": "courses",
        "contributor": {
            "name": "theodinproject",
            "github": "https://github.com/TheOdinProject"
        },
        "url": "https://theodinproject.com",
        "tags": ["learning", "web-development", "courses"]
    },
    {
        "title": "Pluralsight Web Development Path",
        "description": "A guided learning path focused on web development skills.",
        "category": "courses",
        "contributor": {
            "name": "pluralsight",
            "github": "https://github.com/pluralsight"
        },
        "url": "https://pluralsight.com",
        "tags": ["learning", "web-development", "courses"]
    },
    {
        "title": "edX Web Development Courses",
        "description": "University-level web development courses, including full-stack options.",
        "category": "courses",
        "contributor": {
            "name": "edX",
            "github": "https://github.com/edx"
        },
        "url": "https://edx.org",
        "tags": ["learning", "web-development", "courses"]
    },
    {
        "title": "LinkedIn Learning Web Development",
        "description": "Professional web development courses from industry experts.",
        "category": "courses",
        "contributor": {
            "name": "linkedinlearning",
            "github": "https://github.com/LinkedInLearning"
        },
        "url": "https://linkedin.com/learning",
        "tags": ["learning", "web-development", "courses"]
    },
    {
        "title": "Mozilla Developer Network (MDN)",
        "description": "Comprehensive web development documentation and tutorials.",
        "category": "courses",
        "contributor": {
            "name": "mozilla",
            "github": "https://github.com/mdn"
        },
        "url": "https://developer.mozilla.org",
        "tags": ["learning", "web-development", "courses"]
    },

    {
        "title": "Udacity Front-End Web Developer Nanodegree",
        "description": "Comprehensive front-end development course covering HTML, CSS, JavaScript, and more.",
        "category": "courses",
        "contributor": {
            "name": "udacity",
            "github": "https://github.com/udacity"
        },
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011",
        "tags": [
            "learning",
            "web-development",
            "courses"
        ]
    },
    {
        "title": "Khan Academy Web Development",
        "description": "Free interactive tutorials in HTML, CSS, and JavaScript.",
        "category": "courses",
        "contributor": {
            "name": "khanacademy",
            "github": "https://github.com/Khan"
        },
        "url": "https://www.khanacademy.org/computing/computer-programming",
        "tags": [
            "learning",
            "web-development",
            "courses"
        ]
    },
    {
        "title": "Treehouse Techdegree Program",
        "description": "A structured, project-based learning program for web development and design.",
        "category": "courses",
        "contributor": {
            "name": "teamtreehouse",
            "github": "https://github.com/teamtreehouse"
        },
        "url": "https://teamtreehouse.com/techdegree",
        "tags": [
            "learning",
            "web-development",
            "courses"
        ]
    },
    {
        "title": "MIT OpenCourseWare Web Programming",
        "description": "Free online courses in web development, including full-stack programming.",
        "category": "courses",
        "contributor": {
            "name": "MIT",
            "github": "https://github.com/mitocw"
        },
        "url": "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-148-introduction-to-web-programming-fall-2011/",
        "tags": [
            "learning",
            "web-development",
            "courses"
        ]
    },
    {
        "title": "W3Schools Web Development Tutorials",
        "description": "Free tutorials covering HTML, CSS, JavaScript, SQL, and more.",
        "category": "courses",
        "contributor": {
            "name": "w3schools",
            "github": "https://github.com/w3schools"
        },
        "url": "https://www.w3schools.com",
        "tags": [
            "learning",
            "web-development",
            "courses"
        ]
    },
    {
        "title": "The Complete Web Developer Course 2.0 (Udemy)",
        "description": "A comprehensive web development course including HTML, CSS, JavaScript, Node.js, and more.",
        "category": "courses",
        "contributor": {
            "name": "udemy",
            "github": "https://github.com/udemy"
        },
        "url": "https://www.udemy.com/course/the-complete-web-developer-course-2/",
        "tags": [
            "learning",
            "web-development",
            "courses"
        ]
    },
    {
        "title": "Codewars",
        "description": "Practice coding through challenges in various languages, including web development languages.",
        "category": "courses",
        "contributor": {
            "name": "codewars",
            "github": "https://github.com/Codewars"
        },
        "url": "https://www.codewars.com",
        "tags": [
            "learning",
            "web-development",
            "courses"
        ]
    },
    {
        "title": "Scrimba Web Development Bootcamp",
        "description": "Interactive web development tutorials for building full-stack applications.",
        "category": "courses",
        "contributor": {
            "name": "scrimba",
            "github": "https://github.com/scrimba"
        },
        "url": "https://scrimba.com/learn/learnfrontend",
        "tags": [
            "learning",
            "web-development",
            "courses"
        ]
    },
    {
        "title": "General Assembly Web Development Immersive",
        "description": "An immersive web development course that includes full-stack training with project-based learning.",
        "category": "courses",
        "contributor": {
            "name": "generalassembly",
            "github": "https://github.com/generalassembly"
        },
        "url": "https://generalassemb.ly/education/web-development-immersive",
        "tags": [
            "learning",
            "web-development",
            "courses"
        ]
    },
    {
        "title": "Stanford Web Development (CS142)",
        "description": "Stanford's online web development course covering both front-end and back-end development.",
        "category": "courses",
        "contributor": {
            "name": "stanford",
            "github": "https://github.com/stanford"
        },
        "url": "https://online.stanford.edu/courses/cs142-web-applications",
        "tags": [
            "learning",
            "web-development",
            "courses"
        ]
    },
]


export default courses;