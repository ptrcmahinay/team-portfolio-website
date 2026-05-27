import { ProjectsData, type Project } from "@/utils/helper";
import { motion } from "motion/react";
import { useState, useCallback } from "react";
import { ExternalLinkIcon, GitBranchIcon } from "lucide-react";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const ProjectCard = ({ project }: { project: Project }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [open, setOpen] = useState(false);

  const handlePrev = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      api?.scrollPrev();
    },
    [api]
  );

  const handleNext = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      api?.scrollNext();
    },
    [api]
  );

  const handleDialogOpenChange = useCallback((isOpen: boolean) => {
    setOpen(isOpen);
  }, []);

  return (
    <Dialog open={open} onOpenChange={handleDialogOpenChange}>
      <DialogTrigger asChild>
        <div className="relative overflow-hidden rounded-xl group cursor-pointer shadow-2xl hover:shadow-[0_15px_40px_rgba(236,72,153,0.5)] transition-all duration-300">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
          <div className="absolute bottom-0 left-0 w-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <p className="text-white text-md font-semibold">{project.title}</p>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent
        className="max-w-3xl sm:max-w-4xl p-0 gap-0 overflow-hidden"
        showCloseButton={false}
      >
        <div className="flex flex-col md:flex-row max-h-[90vh] overflow-y-auto border border-right">
          {/* Left: Carousel */}
          <div className="relative md:flex-[1.3] flex items-center bg-black">
            <Carousel
              className="w-full"
              setApi={setApi}
              opts={{ loop: true }}
            >
              <CarouselContent>
                {project.images.map((img, index) => (
                  <CarouselItem key={index}>
                    <div className="flex items-center justify-center p-0">
                      <img
                        src={img}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {project.images.length > 1 && (
                <>
                  <CarouselPrevious
                    className="left-2 text-white border-white/30 bg-black/50 hover:bg-black/70 hover:text-white"
                    onClick={handlePrev}
                  />
                  <CarouselNext
                    className="right-2 text-white border-white/30 bg-black/50 hover:bg-black/70 hover:text-white"
                    onClick={handleNext}
                  />
                </>
              )}
            </Carousel>
          </div>

          {/* Right: Details */}
          <div className="flex flex-col justify-center md:flex-[3.7] w-full p-6 md:p-8 space-y-5">
            <DialogTitle className="text-2xl md:text-3xl font-bold text-neutral-900">
              {project.title}
            </DialogTitle>

            <DialogDescription className="text-sm text-neutral-600 leading-relaxed">
              {project.description}
            </DialogDescription>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-xs px-3 py-1 border-pink-200 text-pink-600 bg-pink-50"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Button variant="default" size="sm" className="gap-1.5 cursor-pointer">
                  <ExternalLinkIcon className="size-3.5" />
                  Live Demo
                </Button>
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Button variant="outline" size="sm" className="gap-1.5 cursor-pointer">
                  <GitBranchIcon className="size-3.5" />
                  Source Code
                </Button>
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Projects = () => {
  return (
    <motion.div
      id="projects"
      className="w-180 min-h-screen flex flex-col items-center justify-center container mx-auto px-6 py-20 space-y-8"
      initial={{ opacity: 1 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 1 },
      }}
      viewport={{ amount: 0.5 }}
    >
      <h2 className="text-xl md:text-2xl text-center font-bold text-pink-500 uppercase">
        Projects
      </h2>
      
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ProjectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects