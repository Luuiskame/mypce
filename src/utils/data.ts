import visibilityDilemma from "../assets/images/visibility-dilemma.jpg";
import engagementGap from "../assets/images/engagement-gap.jpg";
import resultsInHibernation from "../assets/images/results-in-hibernation.jpg";

const services = [
  {
    title: "Estrategia de Marketing Digital",
    features: [
      "Segmentación de audiencia avanzada",
      "Insights basados en datos",
      "Creación de contenido personalizado",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6">
      <path d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
    </svg>`,
  },
  {
    title: "Publicidad Atractiva",
    features: [
      "Narrativa creativa",
      "Visuales impactantes",
      "Medios interactivos",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6">
      <path d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z"/>
    </svg>`,
  },
  {
    title: "Resultados con Mypce",
    features: [
      "Analítica integral",
      "Seguimiento de objetivos",
      "Optimización de conversiones",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6">
      <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/>
    </svg>`,
  },
];

const solutions = [
  {
    title: "El Dilema de Visibilidad",
    painPoint:
      "Tu marca está perdiéndose en el vasto mar de redes sociales, luchando por ser vista por tu audiencia objetivo en Honduras.",
    agitatepainPoint:
      "Es frustrante cuando tu contenido cuidadosamente diseñado no logra destacarse. Tus clientes potenciales están ahí, pero no pueden encontrarte entre el ruido digital.",
    solution:
      "Nuestras estrategias de marketing digital enfocadas y personalizadas en Honduras cortan a través del desorden, asegurando que tu marca no solo sea vista, sino recordada. Mira nuestro video para descubrir cómo hacemos que tu presencia sea imposible de ignorar.",
    img: visibilityDilemma,
  },
  {
    title: "La Brecha de Compromiso",
    painPoint:
      "A pesar de tus esfuerzos en publicidad digital y redes sociales, el compromiso de tu audiencia sigue siendo bajo y las interacciones no se traducen en conexiones significativas.",
    agitatepainPoint:
      "Es frustrante ver cómo los competidores logran conectar fácilmente con su audiencia mientras tu marca lucha por generar conversaciones. Tu contenido merece mejores resultados, y tenemos la solución.",
    solution:
      "Nuestras tácticas probadas de marketing digital en Honduras encienden conversaciones, convirtiendo a los espectadores pasivos en participantes activos. Descubre cómo cerramos la brecha de compromiso y mejoramos los resultados en las plataformas sociales en nuestro video explicativo.",
    img: engagementGap,
  },
  {
    title: "Resultados en Hibernación",
    painPoint:
      "Tus esfuerzos en marketing digital y publicidad no se traducen en resultados tangibles, dejando la duda de si tu inversión realmente está generando valor para tu marca en el mercado hondureño.",
    agitatepainPoint:
      "Es desalentador ver que las métricas muestran poco crecimiento o impacto. Tu tiempo y recursos son valiosos, y es hora de liberarte del ciclo de resultados estancados.",
    solution:
      "Nuestro enfoque basado en datos y nuestra experiencia trabajando con MYPCE aseguran que cada acción tenga un propósito, generando resultados medibles. Sumérgete en nuestra guía en video para ver cómo convertimos tus actividades en redes sociales y publicidad digital en un motor poderoso para el éxito de tu marca.",
    img: resultsInHibernation,
  },
];

const faqs = [
  {
    question: "¿Cómo puede el marketing digital en redes sociales beneficiar mi negocio?",
    answer:
      "El marketing digital en redes sociales puede beneficiar significativamente a tu negocio al aumentar el reconocimiento de marca, mejorar la publicidad, atraer a tu audiencia objetivo, dirigir tráfico a tu sitio web y generar prospectos. Además, facilita la interacción directa con tus clientes, fortaleciendo la lealtad a la marca y proporcionando valiosos insights sobre el comportamiento del consumidor.",
  },
  {
    question: "¿Qué diferencia a Mypce de otras agencias?",
    answer:
      "Mypce se destaca por combinar estrategias personalizadas, decisiones basadas en datos y un compromiso firme con la colaboración. Nuestra experiencia en marketing digital y publicidad nos permite comprender tus objetivos únicos y ofrecer soluciones a medida que generan resultados medibles.",
  },
  {
    question: "¿Cómo miden el éxito de las campañas en redes sociales?",
    answer:
      "Utilizamos un enfoque integral para medir el éxito de las campañas, que incluye el seguimiento de indicadores clave de rendimiento como métricas de interacción, tasas de conversión, alcance y retroalimentación de los clientes. Estas herramientas nos permiten ajustar las estrategias de marketing digital y publicidad para optimizar los resultados.",
  },
  {
    question: "¿Pueden dar ejemplos de campañas exitosas en redes sociales?",
    answer:
      "Por supuesto. Contamos con un portafolio de campañas exitosas en marketing digital que demuestran cómo nuestras estrategias en publicidad han ayudado a diversas empresas a alcanzar sus objetivos en redes sociales. Te invitamos a consultar nuestros estudios de caso para conocer más detalles.",
  },
  {
    question: "¿Ofrecen estrategias personalizadas para redes sociales?",
    answer:
      "Absolutamente. Nuestro equipo se especializa en desarrollar estrategias personalizadas que se adaptan a las necesidades de tu marca, industria y audiencia objetivo. Con un enfoque en marketing digital y publicidad, garantizamos que nuestras soluciones se alineen con tus metas específicas.",
  },
  {
    question: "¿Cómo manejan comentarios o reseñas negativas en redes sociales?",
    answer:
      "Adoptamos un enfoque proactivo en la gestión de la reputación online. Nuestras herramientas de monitoreo permiten detectar menciones en tiempo real, lo que nos ayuda a responder rápidamente con empatía y buscar soluciones. Así convertimos los desafíos en oportunidades para mejorar nuestras estrategias de marketing digital y publicidad.",
  },
  {
    question: "¿Con qué plataformas de redes sociales trabajan?",
    answer:
      "Trabajamos con una amplia variedad de plataformas, incluyendo Facebook, Instagram, Twitter, LinkedIn, Pinterest y TikTok. Nuestras estrategias de marketing digital y publicidad se adaptan a las plataformas que mejor se alinean con tu audiencia objetivo.",
  },
  {
    question: "¿Con qué frecuencia recibiré informes sobre el rendimiento de mis campañas en redes sociales?",
    answer:
      "Proveemos informes detallados y regulares sobre el rendimiento de tus campañas, con opciones de entrega semanal, quincenal o mensual. Esto te permite mantener un control constante sobre las estrategias de marketing digital y publicidad implementadas.",
  },
  {
    question: "¿Hay soporte continuo si tengo preguntas o necesito ajustes en mi estrategia?",
    answer:
      "Claro que sí. Ofrecemos soporte continuo para atender cualquier consulta o realizar ajustes en tu estrategia. Nuestro equipo está siempre disponible para asegurarse de que las soluciones de marketing digital y publicidad evolucionen junto a las necesidades de tu negocio.",
  },
  {
    question: "¿Puedo ver una demostración o recibir una consulta antes de decidir trabajar con su agencia?",
    answer:
      "Por supuesto. Ofrecemos consultas gratuitas y demostraciones personalizadas para mostrarte nuestro enfoque en marketing digital y publicidad, así como para analizar tus necesidades y determinar cómo Mypce puede impulsar el crecimiento de tu negocio.",
  },
];


export { services, solutions, faqs };
