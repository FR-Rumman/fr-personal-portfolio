import { Code2, Lightbulb, Rocket, Users} from "lucide-react"

const highlights=[
    {
        icon: Code2,
        tittle: "clean code",
        description: " writing naintainable, scalable code that hande the test of time.",
    },
    {
        icon: Rocket,
        tittle: "Perfomance",
        description: "  Optimizing for speed and delivering lightning-fast user experience",
    },
    {
        icon: Users,
        tittle: "Collaboration",
        description: " working closely with teams to bring ideas to life",
    },
    {
        icon: Lightbulb,
        tittle: "Innovation",
        description: " Staying ahead with the latest tecnologies and the best practice",
    },

]

export const About = () => {
    return <section id="about" className=" py-32 relative overflow-hidden">
        <div className=" container mx-auto px-6 relative z-10">
            <div className=" grid lg:grid-cols-2 gap-16 items-center">
                 {/* left column  */}
                 <div className=" space-y-8">
                   <div className=" animate-fade-in">
                     <span className=" text-primary text-sm font-medium tracking-wider uppercase">
                        About me
                    </span>
                   </div>
                    
                        <h2 className=" text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-primary">
                            Building the future,
                            <span className=" font-serif italic font-normal text-white" >One components at a time</span>
                        </h2>
                        <div className=" space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I'm a passionate software engineer with hands-on experience building scalable backend systems using Spring Boot and modern databases, alongside frontend experience with React. What began as curiosity about the web has grown into delivering reliable, production-ready applications.
                            </p>
                            <p>
                                My expertise lies in building scalable backend systems with Spring Boot, complemented by frontend development using React. I focus on creating reliable applications that are both technically sound and user-friendly.
                            </p>
                            <p>
                                Outside of coding, I spend time learning new technologies, refining my problem-solving skills, and staying up to date with modern software development practices.
                            </p>

                        </div>

                    <div className=" glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                        <p className=" text-lg font-medium italic text-foreground">
                            "My mission is to build digital products that go beyond functionality—solutions that are enjoyable to use, reliable in production, and easy for developers to maintain."
                        </p>
                    </div>

                    
                 </div>
            {/* Right column */}
            <div className=" grid sm:grid-cols-2 gap-6">
                {highlights.map((item, idx)=>(
                    
                   <div key={idx} className=" glass p-6 rounded-2xl animate-fade-in  "
                   style={{animationDelay: `${(idx + 1)*100}`}}
                   >
                    <div className=" w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                        <item.icon className=" w-6 h-6 text-primary"/>
                    </div>
                    <h3 className=" text-lg font-semibold mb-2 ">{item.tittle}</h3>
                    <p className=" text-sm to-muted-foreground">{item.description}</p>
                   </div>
                ))}
            </div>
                
            </div>
        </div>
    </section>
}