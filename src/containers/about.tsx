import { TeamData, type TeamMember } from "@/utils/helper";
import { useState, useCallback } from "react";
import { GraduationCapIcon, WrenchIcon, MoveRightIcon } from "lucide-react";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const TeamCard = ({ member }: { member: TeamMember }) => {
  const [open, setOpen] = useState(false);

  const handleDialogOpenChange = useCallback((isOpen: boolean) => {
    setOpen(isOpen);
  }, []);

  return (
    <Dialog open={open} onOpenChange={handleDialogOpenChange}>
      <DialogTrigger asChild>
        <div className="relative w-full max-w-xs mx-auto space-y-2 overflow-hidden group cursor-pointer">
          <div className="w-full shadow hover:shadow-lg relative overflow-hidden rounded-xl transition-all duration-300">
            <img
              src={member.image}
              alt={member.name}
              className="w-full aspect-square md:aspect-[4/5] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 w-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="text-white text-base font-normal underline flex items-center gap-1">
                View details <MoveRightIcon className="w-4 h-4" />
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-md text-neutral-700">{member.name}</h3>
            <p className="font-bold text-xs text-pink-500 uppercase">
              {member.position}
            </p>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent
        className="max-w-[95vw] sm:max-w-xl md:max-w-2xl p-0 gap-0 overflow-hidden"
        showCloseButton={true}
      >
        <div className="flex flex-col md:flex-row max-h-[85vh] overflow-y-auto">
          {/* Left: Image */}
          <div className="w-full md:w-[40%] bg-neutral-100 flex items-center shrink-0">
            <img
              src={member.image}
              alt={member.name}
              className="w-full aspect-[4/3] md:aspect-auto md:h-full object-cover"
            />
          </div>

          {/* Right: Details */}
          <div className="flex flex-col justify-center w-full md:w-[60%] p-5 md:p-6 space-y-4">
            <div>
              <DialogTitle className="text-2xl md:text-3xl font-bold text-neutral-900">
                {member.name}
              </DialogTitle>
              <p className="text-sm font-semibold text-pink-500 uppercase mt-1">
                {member.position}
              </p>
            </div>

            <DialogDescription className="text-sm text-neutral-600 leading-relaxed">
              {member.description}
            </DialogDescription>

            {/* Education */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-neutral-800 flex items-center gap-1.5">
                <GraduationCapIcon className="size-4 text-pink-500" />
                Education
              </h4>
              <ul className="space-y-1">
                {member.education.map((edu, i) => (
                  <li
                    key={i}
                    className="text-sm text-neutral-600 flex items-start gap-2"
                  >
                    <span className="mt-1.5 size-1.5 rounded-full bg-pink-400 shrink-0" />
                    {edu}
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-neutral-800 flex items-center gap-1.5">
                <WrenchIcon className="size-4 text-pink-500" />
                Skills & Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-pink-200 text-pink-600 bg-pink-50 text-xs px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center container mx-auto min-h-screen px-4 md:px-6 py-20 space-y-8"
    >
      <h2 className="text-xl md:text-2xl text-center font-bold text-pink-500 uppercase">
        About the Team
      </h2>

      <p className="max-w-2xl text-sm md:text-base text-center text-neutral-500">
        Three specialists, one shared obsession: making digital products that
        feel as good as they function. We met over a conviction that design
        should be fearless and code should be clean.
      </p>

      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {TeamData.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
};

export default About;
