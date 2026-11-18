"use client";

import { useState } from "react";
import { projects, type ProjectCategory } from "@/lib/data";
import ProjectCard from "./project-card";

type Filter = "All projects" | ProjectCategory;
const filters: Filter[] = ["All projects", "Hardware", "Embedded & DSP", "Software & Data"];

export default function ProjectExplorer(){
  const [filter,setFilter]=useState<Filter>("All projects");
  const visible = projects.filter(project => filter === "All projects" || project.category === filter);
  return <>
    <div className="mb-7 flex flex-wrap items-center gap-2" role="group" aria-label="Filter projects by discipline">
      {filters.map(item=><button type="button" key={item} aria-pressed={filter===item} className="filter-chip" onClick={()=>setFilter(item)}>{item}</button>)}
      <span aria-live="polite" className="ml-auto hidden font-mono-ui text-[11px] tracking-[.08em] text-faint sm:block">{visible.length.toString().padStart(2,"0")} PROJECTS</span>
    </div>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
      {visible.map(project => <ProjectCard key={project.slug} project={project}/>)}
    </div>
  </>;
}
