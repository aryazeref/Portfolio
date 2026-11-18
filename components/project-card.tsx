import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";
import ProjectVisual from "./project-visual";

export default function ProjectCard({project}:{project:Project}) {
  return <Link href={`/projects/${project.slug}`} className={`project-card group ${project.featured?"featured":""}`}>
    <ProjectVisual type={project.visual}/>
    <div className="project-copy">
      <div className="mb-6 flex items-center justify-between gap-3 font-mono-ui text-[10px] uppercase tracking-[.13em] text-[#9cb4b8]">
        <span>{project.number} / {project.category}</span><span>{project.year}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="mt-3">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.slice(0,4).map(tag=><span className="pill" key={tag}>{tag}</span>)}
      </div>
      <div className="mt-auto flex items-center justify-between gap-3 pt-7">
        <span className="font-mono-ui text-[11px] tracking-[.05em] text-[#b5c9c7]">EXPLORE CASE STUDY</span>
        <span className="project-arrow"><ArrowUpRight size={18}/></span>
      </div>
    </div>
  </Link>;
}
