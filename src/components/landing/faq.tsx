import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: '¿Cuánta ropa puede lavar a la vez?',
    answer:
      'TinyWash es perfecto para esas cargas de ropa pequeñas y urgentes. Su diseño compacto es ideal para lavar prendas delicadas, ropa interior o la ropita de tu bebé, cuidando cada fibra y dejándola impecable.',
  },
  {
    question: '¿Qué necesito para que funcione?',
    answer:
      '¡Nada más que tu TinyWash! Viene con una batería interna de 3000mAh que te da la libertad de lavar en cualquier lugar. Cuando necesites recargarla, simplemente conectala a cualquier puerto USB-A (cargador portátil, notebook, adaptador de pared) con el cable incluido.',
  },
  {
    question: '¿Hace mucho ruido?',
    answer:
      '¡Para nada! TinyWash tiene un motor súper silencioso, lo que lo hace perfecto para usar en departamentos, residencias de estudiantes o incluso en la oficina sin molestar a nadie.',
  },
  {
    question: '¿Cuánto dura un ciclo de lavado?',
    answer:
      'TinyWash te da el control con dos modos de lavado. El Modo Rápido (5 minutos) es perfecto para refrescar tus prendas en un instante. Para una limpieza más profunda, el Modo Intenso (10 minutos) realiza un ciclo repetido para asegurar que todo quede impecable.',
  },
  {
    question: '¿Puedo usar detergente común?',
    answer:
      'Sí, podés usar detergente líquido común. Recomendamos usar solo unas gotitas, ya que al ser un espacio compacto, rinde muchísimo.',
  },
  {
    question: '¿Cuáles son las especificaciones técnicas?',
    answer: (
      <div className="space-y-2">
        <p>¡Claro! Aquí tenés los detalles técnicos de tu TinyWash:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Modelo:</strong> MC-116</li>
          <li><strong>Voltaje:</strong> 5V</li>
          <li><strong>Potencia:</strong> 15W</li>
          <li><strong>Capacidad de batería:</strong> 3000mAh</li>
          <li><strong>Peso neto del producto:</strong> 525g</li>
          <li><strong>Dimensiones:</strong> 12.5 cm x 12.5 cm x 20.5 cm</li>
          <li><strong>Capacidad de lavado:</strong> 1L</li>
        </ul>
      </div>
    ),
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/50">
      <div className="container max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Preguntas Frecuentes</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ¿Tenés preguntas? Tenemos las respuestas.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
