import { Droplets, Usb, Shirt, Truck } from 'lucide-react';

const features = [
  {
    icon: <Droplets className="h-10 w-10 text-primary" />,
    title: 'Capacidad Compacta de 1L',
    description: 'Tamaño perfecto para cargas pequeñas, prendas delicadas, ropa de bebé o para lavar donde vayas.',
  },
  {
    icon: <Usb className="h-10 w-10 text-primary" />,
    title: 'Batería Recargable por USB',
    description: 'Llevá tu TinyWash a donde quieras gracias a su batería de larga duración. Recargalo fácilmente con cualquier cargador USB.',
  },
  {
    icon: <Shirt className="h-10 w-10 text-primary" />,
    title: 'Cuidadoso con tus Prendas',
    description: 'El ciclo de lavado suave protege tus prendas delicadas, extendiendo su vida útil.',
  },
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: 'Envío Gratis a Todo el País',
    description: 'Recibí tu TinyWash en la puerta de tu casa, sin costo de envío a cualquier punto de Argentina.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Equipado con Funciones Potentes</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            TinyWash está diseñado para tu comodidad y eficiencia, haciendo que lavar la ropa sea una tarea más simple.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-md transition-transform hover:scale-105 hover:-translate-y-2">
              {feature.icon}
              <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
