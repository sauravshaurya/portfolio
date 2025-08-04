// Application Configuration
const CONFIG = {
    // Personal Information
    personal: {
        name: "Saurav Shaurya",
        nameSecondary: "सौरव शौर्य",
        title: "Senior Software Engineer",
        company: "Torry Harris Business Solutions",
        email: "sauravshaurya@gmail.com",
        phone: "+91-8867717231",
        linkedin: "https://linkedin.com/in/sauravshaurya",
        github: "https://github.com/sauravshaurya",
        location: "Bangalore, India"
    },
    
    // About Me
    about: {
        description: "Experienced Senior Software Engineer with 6+ years of expertise in Microservices, Multi-tier architectures, and cloud-based platforms. I specialize in Spring Boot, Event-Driven Architecture, and have a proven track record of delivering secure, high-quality code while leading development teams and enhancing system scalability. I thrive in solving complex problems and am adaptable to drive innovation and efficiency in high-stakes environments.",
        interests: [
            "Microservices Architecture",
            "Event-Driven Systems", 
            "Cloud Native Development",
            "DevOps & Automation",
            "System Scalability"
        ],
        stats: [
            { number: "6+", label: "Years Experience" },
            { number: "2M+", label: "Events/Day" },
            { number: "99.9%", label: "System Uptime" }
        ]
    },
    
    // Work Experience Data
    experience: [
        {
            id: 1,
            position: "Senior Software Engineer (Backend and DevOps Engineer)",
            company: "Torry Harris Business Solutions",
            location: "Bangalore, India",
            duration: "Oct 2022 – Present",
            achievements: [
                "Developed cutting-edge microservices CI/CD architecture using GitHub Actions, ArgoCD, ArgoRollouts, Helm Charts, and Terraform for complex supply chain setup improving turn-around time for production deployment by 70%",
                "Implemented comprehensive monitoring solutions using Grafana, Prometheus, and Logzio ensuring 99.9% system uptime with full system observability",
                "Designed and developed event processing platform with microservices handling 2 million events per day utilizing Event Driven Architecture with 99.9% uptime and sub-200ms response times",
                "Led team of 5 members developing Customer Master Data Management System using Spring Boot and Apache Kafka"
            ],
            technologies: ["Spring Boot", "Apache Kafka", "GitHub Actions", "ArgoCD", "Helm", "Terraform", "Grafana", "Prometheus"]
        },
        {
            id: 2,
            position: "Software Engineer",
            company: "Torry Harris Business Solutions",
            location: "Bangalore, India",
            duration: "Jan 2020 – Oct 2022",
            achievements: [
                "Developed 2 proof of concepts for Microservices Architecture using Apache Kafka and Spring Cloud with Test Driven Development",
                "Established foundation of microservices platform including build server, image registry, monitoring platform reducing environment setup time from 3 days to 2 hours",
                "Fixed major bug in AKHQ open source project (used by 3k+ developers)",
                "Built code similarity analysis tool to reduce code length"
            ],
            technologies: ["Apache Kafka", "Spring Cloud", "TDD", "Docker", "Kubernetes"]
        },
        {
            id: 3,
            position: "Associate Software Engineer",
            company: "Torry Harris Business Solutions",
            location: "Bangalore, India",
            duration: "Oct 2018 – Dec 2019",
            achievements: [
                "Developed e-commerce landing page using ReactJS",
                "Designed and implemented 12+ RESTful APIs with comprehensive documentation handling 50K+ daily requests"
            ],
            technologies: ["ReactJS", "RESTful APIs", "JavaScript"]
        }
    ],
    
    // Projects Data
    projects: [
        {
            id: 1,
            title: "Microservices CI/CD Platform",
            description: "Built cutting-edge microservices CI/CD architecture using GitHub Actions, ArgoCD, ArgoRollouts, Helm Charts, and Terraform improving deployment time by 70%",
            technologies: ["GitHub Actions", "ArgoCD", "Helm", "Terraform", "Kubernetes"],
            type: "DevOps Platform",
            impact: "70% faster deployments"
        },
        {
            id: 2,
            title: "Event Processing Platform",
            description: "Designed and developed event processing platform handling 2 million events per day with sub-200ms response times using Event-Driven Architecture",
            technologies: ["Spring Boot", "Apache Kafka", "Microservices", "AWS"],
            type: "Event Platform",
            impact: "2M+ events/day"
        },
        {
            id: 3,
            title: "Customer Master Data Management",
            description: "Led team of 5 members developing Customer Master Data Management System using Spring Boot and Apache Kafka with comprehensive monitoring",
            technologies: ["Spring Boot", "Apache Kafka", "Grafana", "Prometheus"],
            type: "Data Management",
            impact: "99.9% uptime"
        }
    ],
    
    // Skills Data
    skills: {
        languages: ["Java", "JavaScript", "SQL", "Python"],
        ai: ["GitHub Copilot", "Cursor", "Claude MCP", "Spring AI"],
        backend: ["Spring Boot", "Apache Kafka", "RESTful APIs"],
        cloud: ["AWS", "Docker", "Kubernetes", "Helm"],
        devops: ["GitHub Actions", "Terraform", "ArgoCD", "ArgoRollouts"],
        monitoring: ["Grafana", "Prometheus", "Logzio"],
        databases: ["PostgreSQL", "Redis", "MariaDB"],
        soft: ["Problem-Solving", "Team Leadership", "Adaptability", "Creative Thinking"]
    },
    
    // Education
    education: {
        institution: "Sir M. Visvesvaraya Institute Of Technology",
        degree: "Bachelor of Engineering in Electrical and Electronics Engineering",
        duration: "Aug 2014 – Jul 2018",
        gpa: "3.5/4.0"
    },
    
    // UI Configuration
    ui: {
        theme: "light",
        animations: {
            enabled: true,
            duration: 300
        },
        navigation: {
            smoothScroll: true,
            offset: 80
        }
    }
}; 