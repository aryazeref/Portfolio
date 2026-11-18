import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Github } from "lucide-react";
import ProjectVisual from "@/components/project-visual";
import { projects } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return projects.map(({slug})=>({slug})); }

export async function generateMetadata({params}:Props):Promise<Metadata> {
  const {slug}=await params;
  const project=projects.find(p=>p.slug===slug);
  if (!project) return {title:"Project not found"};
  return {title:project.title,description:project.description,openGraph:{title:project.title,description:project.description}};
}

export default async function ProjectPage({params}:Props){
  const {slug}=await params;
  const project=projects.find(p=>p.slug===slug);
  if(!project) notFound();
  const index=projects.findIndex(p=>p.slug===slug);
  const next=projects[(index+1)%projects.length];
  return <main id="main" className="site-shell">
    <div className="detail-hero">
      <Link href="/#work" className="inline-flex items-center gap-2 text-[12px] text-[#b0c4c1] transition hover:text-acid"><ArrowLeft size={16}/> Back to all projects</Link>
      <div className="mt-14 flex flex-wrap items-center gap-3 font-mono-ui text-[11px] uppercase tracking-[.13em] text-acid"><span>{project.number} / {project.category}</span><span className="text-faint">·</span><span>{project.year}</span></div>
      <h1 className="detail-title mt-5 max-w-[960px]">{project.title}<span className="text-acid">.</span></h1>
      <p className="mt-7 max-w-[700px] text-[19px] leading-[1.65] text-[#b8cdca]">{project.subtitle}</p>
      <div className="mt-9 flex flex-wrap items-center gap-3">
        {project.github && <a className="button-primary" href={project.github} target="_blank" rel="noopener noreferrer"><Github size={17}/> View source <ArrowUpRight size={16}/></a>}
        <span className="font-mono-ui text-[11px] text-faint">{project.context}</span>
      </div>
    </div>
    <div className="mt-10 overflow-hidden rounded-[8px] border border-muted md:mt-12"><ProjectVisual type={project.visual} className="!min-h-[220px] md:!h-[440px]"/></div>
    <div className="grid gap-11 py-15 md:grid-cols-[.32fr_.68fr] md:gap-20 md:py-23">
      <aside className="space-y-8">
        <div><p className="tiny-label text-acid">Project type</p><p className="mt-3 text-[14px] font-semibold">{project.context}</p></div>
        <div><p className="tiny-label text-acid">Year</p><p className="mt-3 text-[14px] font-semibold">{project.year}</p></div>
        <div><p className="tiny-label text-acid">Technologies</p><div className="mt-3 flex flex-wrap gap-2">{project.tags.map(tag=><span className="pill" key={tag}>{tag}</span>)}</div></div>
      </aside>
      <div>
        <div className="eyebrow">Overview</div><p className="prose-copy mt-5">{project.description}</p>
        <div className="mt-12 grid gap-9 border-t border-muted pt-10 sm:grid-cols-2">
          <div><h2 className="text-[23px] font-bold tracking-[-.045em]">The challenge</h2><p className="prose-copy mt-3">{project.challenge}</p></div>
          <div><h2 className="text-[23px] font-bold tracking-[-.045em]">My approach</h2><p className="prose-copy mt-3">{project.approach}</p></div>
        </div>
        <div className="mt-12 border-t border-muted pt-10"><h2 className="text-[23px] font-bold tracking-[-.045em]">What I worked on</h2>
          <ul className="mt-5 space-y-4">{project.highlights.map(item=><li className="flex items-start gap-3 text-[14px] leading-[1.75] text-[#b0c6c2]" key={item}><Check size={18} className="mt-1 shrink-0 text-acid"/><span>{item}</span></li>)}</ul>
        </div>
        <div className="detail-panel mt-12"><div className="eyebrow">Outcome / takeaways</div><p className="prose-copy mt-4">{project.outcome}</p>{project.note&&<p className="mt-5 border-t border-muted pt-4 text-[12px] leading-6 text-faint">{project.note}</p>}</div>
      </div>
    </div>
    <Link href={`/projects/${next.slug}`} className="group mb-20 flex items-center justify-between gap-6 border-y border-muted py-8 md:mb-27">
      <div><span className="tiny-label text-acid">Next project</span><h3 className="mt-2 text-[clamp(27px,4vw,44px)] font-bold tracking-[-.055em] transition group-hover:text-acid">{next.title}</h3></div>
      <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-muted transition group-hover:border-[#c6f57c] group-hover:text-acid"><ArrowRight size={22}/></span>
    </Link>
  </main>;
}
