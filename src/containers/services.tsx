import { ServicesData, type Service } from "@/utils/helper";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const ServiceCard = ({ service }: { service: Service }) => {
  const Icon = service.icon;

  return (
    <Card className="group hover:shadow-[0_8px_30px_rgba(236,72,153,0.15)] hover:-translate-y-1 hover:ring-pink-200/50 transition-all duration-300">
      <CardHeader className="flex-row items-start gap-4 space-y-0">
        <div className="shrink-0 flex items-center justify-center size-10 rounded-lg bg-pink-50 text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
          <Icon className="size-5" />
        </div>
        <h3 className="font-semibold text-neutral-800">{service.title}</h3>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-neutral-500 leading-relaxed">
          {service.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {service.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="border-pink-200 text-pink-600 bg-pink-50 text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  return (
    <section
      id="services"
      className="w-full min-h-screen flex flex-col items-center justify-center mx-auto px-6 py-20 space-y-8"
    >
      <h2 className="text-xl md:text-2xl text-center font-bold text-pink-500 uppercase">
        Services
      </h2>

      <p className="max-w-xl text-sm md:text-base text-center text-neutral-500">
        Quality work at student rates — fast turnaround, no corporate overhead.
      </p>

      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6">
        {ServicesData.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
