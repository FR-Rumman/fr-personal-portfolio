import { ArrowUpRight, Github } from "lucide-react"
import {AnimatedBorderButton} from '@/components/AnimatedBorderButton'


const projects =[
    {
        tittle: "rumman",
        description: " lorem jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
        Image: "#",
        tags: ["React", "typescript", "NodeJs" ],
        link: "#",
        github: "#",
    },
    {
        tittle: "rumman",
        description: " lorem jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
        Image: "#",
        tags: ["React", "typescript", "NodeJs" ],
        link: "#",
        github: "#",
    },
    {
        tittle: "rumman",
        description: " lorem jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
        Image: "#",
        tags: ["React", "typescript", "NodeJs" ],
        link: "#",
        github: "#",
    },
    {
        tittle: "rumman",
        description: " lorem jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
        Image: "#",
        tags: ["React", "typescript", "NodeJs" ],
        link: "#",
        github: "#",
    },
    {
        tittle: "rumman",
        description: " lorem jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
        Image: "#",
        tags: ["React", "typescript", "NodeJs" ],
        link: "#",
        github: "#",
    },

]

export const Projects = () => {
    return <section id="projects" className=" py-32 relative overflow-hidden">

        {/* Bg glows */}
        < div className=" absolute top-1/4 right-0 w-96 bg-primary/5 rounded-full blur-3xl"/>
        <div className=" absolute bottom-1/4 left-0 w-64 bg-highlight/5 rounded-full blur-3xl"/>
        <div className=" container mx-auto px-6 relative z-10">
           {/* section Header  */}
           <div className=" text-center mx-auto max-w-3xl mb-16" >
            <span className=" text-primary text-sm font-medium tracking-wider uppercase animate-fade-in">Featurd Work </span>
            <h2 className=" text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-dealy-100 text-primary">
                Projects that
                <span className=" font-serif italic font-normal text-white"> make an impact</span>
            </h2>
            <p className=" to-muted-foreground animate-fade-in animation-delay-100">
                A selstion of my recent work, from comples web applications to 
                Innovation tools that sove real-world problems.
            </p>
           </div>
            {/* Projects Grid */}
            <div className=" grid md:grid-cols-2 gap-8">
                {projects.map((projects, idx) =>(
                    <div key={idx} 
                         className=" group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                         style={{animationDelay: `${(idx + 1)*100}`}}       
                    >
                        {/* Image */}
                        <div className=" relative overflow-hidden aspect-video">
                            <img src={projects.Image} alt={projects.tittle}
                            className=" w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 "
                            />
                            <div className=" absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"/>
                            {/* overly links  */}
                            <div className=" absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-110 transition-opacity duration-300">
                                <a href={projects.link} className=" p-3 rounded-full glass hover:text-primary transition-all " >
                                    <ArrowUpRight className=" w-5 h-5"/>
                                </a>
                                <a href={projects.github} className=" p-3 rounded-full glass hover:text-primary transition-all ">
                                    <Github className=" w-5 h-5"/>
                                </a>
                            </div>
                     </div>
                     {/* Content */}
                     <div className=" p-6 space-y-4">
                        <div className=" flex items-start justify-between">
                            <h3 className=" text-xl font-semibold group-hover:text-primary transition-colors">{projects.tittle}</h3>
                            <ArrowUpRight
                            className=" w-5 h-5 to-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover: translate-y-1 transition-all"
                            />
                        </div>
                        <p className=" to-muted-foreground text-sm">{projects.description}</p>
                        <div className=" flex flex-wrap gap-2">{projects.tags.map((tag, tagIdx)=>(
                            <span
                            key={tagIdx} 
                             className=" px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 to-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                        ))}
                        </div>
                     </div>
                    </div>
                ))}
            </div>
                {/* view all CAT button */}
                <div className=" text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedBorderButton>
                        View All Projects
                        <ArrowUpRight className=" w-5 h-5"/>
                    </AnimatedBorderButton>
                </div>
         </div>
     </section>
}