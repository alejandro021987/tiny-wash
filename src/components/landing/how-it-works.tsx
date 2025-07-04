import Image from 'next/image';

const steps = [
  {
    title: '1. Agregá tu ropa y detergente',
    description: 'Poné tus prendas, un poco de detergente y agua. ¡Es ideal para cargas pequeñas y delicadas!',
    image: 'https://storage.googleapis.com/tinywash-valenmarket/washing-machine/wash_2_clean.png',
  },
  {
    title: '2. Encendé y dejalo lavar',
    description: 'Gracias a su batería interna, solo tenés que presionar un botón y dejar que su motor silencioso haga el trabajo.',
    image: 'https://storage.googleapis.com/tinywash-valenmarket/washing-machine/wash_3.1_clean.png',
  },
  {
    title: '3. Disfrutá tu ropa limpia',
    description: 'En minutos, tendrás ropa fresca y lista para usar donde quiera que estés. ¡Así de simple!',
    image: 'https://storage.googleapis.com/tinywash-valenmarket/washing-machine/wash_4_clean.png',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Tan Fácil Como Contar Hasta 3</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Lavar nunca fue tan simple. Mirá cómo funciona TinyWash.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
              <div className="relative w-full aspect-square mb-6">
                 <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-md"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 font-headline">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
