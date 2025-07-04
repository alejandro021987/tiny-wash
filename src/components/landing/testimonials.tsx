import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sara L.',
    avatar: 'SL',
    image: 'https://placehold.co/40x40.png',
    title: '¡Un esencial de viaje!',
    text: "No puedo creer que antes viajaba sin esto. TinyWash es un salvavidas para viajes largos. Es súper fácil de usar y la ropa sale impecable.",
  },
  {
    name: 'Marcos C.',
    avatar: 'MC',
    image: 'https://placehold.co/40x40.png',
    title: 'Perfecto para mi departamento',
    text: "Mi depto no tiene lavarropas y esta es la solución perfecta. Es silencioso, compacto y lava mis prendas delicadas de la semana sin problemas.",
  },
  {
    name: 'Jéssica P.',
    avatar: 'JP',
    image: 'https://placehold.co/40x40.png',
    title: 'Un antes y un después para la ropa de bebé',
    text: "Lavar la ropita de bebé constantemente era una tarea pesada. TinyWash hace que sea mucho más fácil hacer lavados pequeños y frecuentes. ¡Súper recomendable para padres primerizos!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Amado por Clientes en Todo el Mundo</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No te quedes solo con nuestra palabra. Esto es lo que dicen nuestros clientes satisfechos.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col">
              <CardContent className="p-6 flex-grow">
                <div className="flex text-accent mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <h3 className="text-lg font-bold mb-2">{testimonial.title}</h3>
                <p className="text-muted-foreground">"{testimonial.text}"</p>
              </CardContent>
              <CardHeader className="p-6 pt-4 mt-auto bg-muted/50 rounded-b-lg">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint="person portrait" />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
