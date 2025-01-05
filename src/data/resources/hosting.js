const hostings = [
    {
        title: "Hostinger",
        description: "Affordable web hosting with a user-friendly interface and excellent performance.",
        category: "hostings",
        contributor: {
            name: "Hostinger",
            github: "https://github.com/hostinger"
        },
        url: "https://www.hostinger.com/",
        tags: ["shared hosting", "cloud hosting", "VPS", "WordPress hosting"]
    },
    {
        title: "Bluehost",
        description: "Popular hosting provider known for its strong integration with WordPress and reliable customer support.",
        category: "hostings",
        contributor: {
            name: "Bluehost",
            github: "https://github.com/bluehost"
        },
        url: "https://www.bluehost.com/",
        tags: ["shared hosting", "WordPress hosting", "VPS", "dedicated servers"]
    },
    {
        title: "SiteGround",
        description: "Renowned for top-notch performance and exceptional customer service, offering a range of hosting solutions.",
        category: "hostings",
        contributor: {
            name: "SiteGround",
            github: "https://github.com/siteground"
        },
        url: "https://www.siteground.com/",
        tags: ["shared hosting", "cloud hosting", "WordPress hosting"]
    },
    {
        title: "HostGator",
        description: "Versatile hosting services with scalable options and a 99.9% uptime guarantee.",
        category: "hostings",
        contributor: {
            name: "HostGator",
            github: "https://github.com/hostgator"
        },
        url: "https://www.hostgator.com/",
        tags: ["shared hosting", "VPS", "dedicated servers", "WordPress hosting"]
    },
    {
        title: "InMotion Hosting",
        description: "Business-class hosting with a focus on speed and reliable customer support.",
        category: "hostings",
        contributor: {
            name: "InMotion Hosting",
            github: "https://github.com/inmotionhosting"
        },
        url: "https://www.inmotionhosting.com/",
        tags: ["shared hosting", "VPS", "dedicated servers", "WordPress hosting"]
    },
    {
        title: "A2 Hosting",
        description: "High-performance hosting solutions with a commitment to speed and reliability.",
        category: "hostings",
        contributor: {
            name: "A2 Hosting",
            github: "https://github.com/a2hosting"
        },
        url: "https://www.a2hosting.com/",
        tags: ["shared hosting", "VPS", "dedicated servers", "WordPress hosting"]
    },
    {
        title: "DreamHost",
        description: "User-friendly hosting with a strong emphasis on privacy and security, offering a range of services.",
        category: "hostings",
        contributor: {
            name: "DreamHost",
            github: "https://github.com/dreamhost"
        },
        url: "https://www.dreamhost.com/",
        tags: ["shared hosting", "VPS", "dedicated servers", "WordPress hosting"]
    },
    {
        title: "WP Engine",
        description: "Managed WordPress hosting provider offering high-performance solutions tailored for WordPress sites.",
        category: "hostings",
        contributor: {
            name: "WP Engine",
            github: "https://github.com/wpengine"
        },
        url: "https://wpengine.com/",
        tags: ["managed WordPress hosting", "performance", "security"]
    },
    {
        title: "GoDaddy",
        description: "Comprehensive hosting services with a wide range of options, including domain registration and website building tools.",
        category: "hostings",
        contributor: {
            name: "GoDaddy",
            github: "https://github.com/godaddy"
        },
        url: "https://www.godaddy.com/",
        tags: ["shared hosting", "VPS", "dedicated servers", "WordPress hosting"]
    },
    {
        title: "IONOS",
        description: "Affordable hosting solutions with a focus on scalability and performance, suitable for both beginners and professionals.",
        category: "hostings",
        contributor: {
            name: "IONOS",
            github: "https://github.com/ionos"
        },
        url: "https://www.ionos.com/",
        tags: ["shared hosting", "VPS", "dedicated servers", "WordPress hosting"]
    },

    {
        title: "Google Cloud Platform (GCP)",
        description: "Comprehensive cloud hosting and infrastructure platform by Google with cutting-edge AI/ML tools.",
        category: "hostings",
        contributor: {
            name: "Google",
            github: "https://github.com/google"
        },
        url: "https://cloud.google.com/",
        tags: ["cloud hosting", "compute", "AI/ML", "big data"]
    },
    {
        title: "Amazon Web Services (AWS)",
        description: "Leading cloud platform offering a vast array of hosting, storage, and computing services.",
        category: "hostings",
        contributor: {
            name: "Amazon",
            github: "https://github.com/aws"
        },
        url: "https://aws.amazon.com/",
        tags: ["cloud hosting", "scalable", "enterprise", "compute"]
    },
    {
        title: "Microsoft Azure",
        description: "Enterprise-grade cloud hosting platform with services for AI, machine learning, and IoT.",
        category: "hostings",
        contributor: {
            name: "Microsoft",
            github: "https://github.com/Azure"
        },
        url: "https://azure.microsoft.com/",
        tags: ["cloud hosting", "enterprise", "AI", "compute"]
    },
    {
        title: "IBM Cloud",
        description: "Cloud hosting platform with a focus on AI-driven solutions and enterprise-level services.",
        category: "hostings",
        contributor: {
            name: "IBM",
            github: "https://github.com/IBM"
        },
        url: "https://www.ibm.com/cloud",
        tags: ["cloud hosting", "AI", "enterprise", "hybrid cloud"]
    },
    {
        title: "DigitalOcean",
        description: "Developer-focused cloud hosting provider with simple and scalable solutions.",
        category: "hostings",
        contributor: {
            name: "DigitalOcean",
            github: "https://github.com/digitalocean"
        },
        url: "https://www.digitalocean.com/",
        tags: ["cloud hosting", "developer-friendly", "VPS", "Kubernetes"]
    },
    {
        title: "Linode (Akamai)",
        description: "Reliable and affordable cloud hosting solution designed for developers and businesses.",
        category: "hostings",
        contributor: {
            name: "Linode",
            github: "https://github.com/linode"
        },
        url: "https://www.linode.com/",
        tags: ["cloud hosting", "VPS", "developer-friendly", "scalable"]
    },
    {
        title: "Alibaba Cloud",
        description: "Global cloud computing service provider, a leader in Asia for hosting and big data solutions.",
        category: "hostings",
        contributor: {
            name: "Alibaba",
            github: "https://github.com/alibaba"
        },
        url: "https://www.alibabacloud.com/",
        tags: ["cloud hosting", "enterprise", "Asia", "compute"]
    },
    {
        title: "Oracle Cloud Infrastructure (OCI)",
        description: "High-performance cloud hosting solution with an emphasis on enterprise applications.",
        category: "hostings",
        contributor: {
            name: "Oracle",
            github: "https://github.com/oracle"
        },
        url: "https://www.oracle.com/cloud/",
        tags: ["cloud hosting", "enterprise", "databases", "scalable"]
    },
    {
        title: "Vultr",
        description: "Developer-friendly cloud platform offering compute, storage, and Kubernetes solutions.",
        category: "hostings",
        contributor: {
            name: "Vultr",
            github: "https://github.com/vultr"
        },
        url: "https://www.vultr.com/",
        tags: ["cloud hosting", "VPS", "scalable", "developer-friendly"]
    },
    {
        title: "OVHcloud",
        description: "Europe's leading cloud hosting provider offering scalable and secure solutions for businesses.",
        category: "hostings",
        contributor: {
            name: "OVHcloud",
            github: "https://github.com/ovh"
        },
        url: "https://www.ovhcloud.com/",
        tags: ["cloud hosting", "Europe", "scalable", "enterprise"]
    },
    {
        title: "Hetzner Online",
        description: "Germany-based hosting provider offering powerful and affordable dedicated servers and cloud solutions.",
        category: "hostings",
        contributor: {
            name: "Hetzner",
            github: "https://github.com/hetznercloud"
        },
        url: "https://www.hetzner.com/",
        tags: ["cloud hosting", "dedicated servers", "Europe", "affordable"]
    },
];

export default hostings;