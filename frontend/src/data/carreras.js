export const carreras = [
    {
        id: 1,
        nombre: "Profesorado de Educación Física",
        duracion: "3 años",
        tipo: "Profesorado",
        descripcion: "Formación integral para ejercer la docencia en Educación Física en todos los niveles educativos. Desarrolla competencias pedagógicas, didácticas y deportivas para promover la actividad física y el desarrollo saludable.",
        turno: "Mañana",
        modalidad: "Presencial",
        
        planEstudio: {
            primerAño: [
                { nombre: "Pedagogía" },
                { nombre: "Anatomía Funcional" },
                { nombre: "Psicología del Desarrollo" },
                { nombre: "Práctica Deportiva I" },
                { nombre: "Expresión Corporal" }
            ],
            segundoAño: [
                { nombre: "Didáctica General", },
                { nombre: "Fisiología del Ejercicio" },
                { nombre: "Práctica Deportiva II" },
                { nombre: "Psicomotricidad" },
                { nombre: "Didáctica de la Educación Física I" },
                { nombre: "Práctica Docente I" }
            ],
            tercerAño: [
                { nombre: "Didáctica de la Educación Física II", descripcion: "Estrategias avanzadas de enseñanza deportiva" },
                { nombre: "Deportes Alternativos", descripcion: "Hockey, handball y deportes no convencionales" },
                { nombre: "Recreación y Tiempo Libre", descripcion: "Planificación de actividades recreativas" },
                { nombre: "Primeros Auxilios", descripcion: "Atención de emergencias en actividad física" },
                { nombre: "Práctica Docente II", descripcion: "Residencia docente con práctica intensiva" },
                { nombre: "Trabajo Final", descripcion: "Proyecto integrador de la carrera" }
            ]
        },
        
        imagen: "/images/educacion-fisica.jpg",
        pdfPlan: "/pdfs/plan-educacion-fisica.pdf"
    },
    {
        id: 2,
        nombre: "Tecnicatura Superior en Laboratorio",
        duracion: "4 años",
        tipo: "Tecnicatura",
        descripcion: "Formación técnica y científica para desempeñarse en laboratorios de análisis clínicos, bioquímicos, industriales y de investigación. Capacitación en técnicas analíticas, bioseguridad y gestión de calidad.",
        turno: "Noche",
        modalidad: "Semi-presencial",
        
        planEstudio: {
            primerAño: [
                { nombre: "Química General e Inorgánica", descripcion: "Fundamentos de química y reacciones inorgánicas" },
                { nombre: "Biología General", descripcion: "Estructura y función de los seres vivos" },
                { nombre: "Matemática Aplicada", descripcion: "Cálculos y estadística para laboratorio" },
                { nombre: "Física Aplicada", descripcion: "Principios físicos aplicados al análisis de laboratorio" },
                { nombre: "Introducción al Laboratorio", descripcion: "Técnicas básicas, instrumentación y bioseguridad" }
            ],
            segundoAño: [
                { nombre: "Química Orgánica", descripcion: "Compuestos orgánicos y sus reacciones" },
                { nombre: "Bioquímica", descripcion: "Procesos químicos en organismos vivos" },
                { nombre: "Microbiología General", descripcion: "Estudio de microorganismos y técnicas de cultivo" },
                { nombre: "Análisis Químico Cuantitativo", descripcion: "Técnicas de cuantificación de sustancias" },
                { nombre: "Técnicas Instrumentales I", descripcion: "Manejo de equipos: espectrofotómetros, centrífugas" },
                { nombre: "Práctica Profesional I", descripcion: "Pasantías en laboratorios clínicos" }
            ],
            tercerAño: [
                { nombre: "Análisis Clínicos I", descripcion: "Hematología y hemostasia" },
                { nombre: "Análisis Clínicos II", descripcion: "Bioquímica clínica y uroanálisis" },
                { nombre: "Inmunología", descripcion: "Sistema inmune y técnicas serológicas" },
                { nombre: "Técnicas Instrumentales II", descripcion: "Equipos avanzados: cromatografía, electroforesis" },
                { nombre: "Control de Calidad", descripcion: "Sistemas de gestión de calidad en laboratorio" },
                { nombre: "Práctica Profesional II", descripcion: "Pasantías en laboratorios industriales" }
            ],
            cuartoAño: [
                { nombre: "Parasitología", descripcion: "Identificación de parásitos y técnicas de diagnóstico" },
                { nombre: "Toxicología", descripcion: "Análisis de sustancias tóxicas y drogas" },
                { nombre: "Biotecnología", descripcion: "Técnicas moleculares y cultivo celular" },
                { nombre: "Gestión de Laboratorio", descripcion: "Administración, costos y normativas" },
                { nombre: "Bioseguridad Avanzada", descripcion: "Manejo de materiales peligrosos y residuos" },
                { nombre: "Práctica Profesional III", descripcion: "Residencia intensiva en laboratorio" },
                { nombre: "Trabajo Final Integrador", descripcion: "Proyecto de investigación o mejora en laboratorio" }
            ]
        },
        
        imagen: "/images/laboratorio.jpg",
        pdfPlan: "/pdfs/plan-laboratorio.pdf"
    },
    {
        id: 3,
        nombre: "Tecnicatura en Programación",
        duracion: "3 años",
        tipo: "Tecnicatura",
        descripcion: "Formación en desarrollo de software, programación web y móvil, bases de datos y metodologías ágiles. Preparación para trabajar como desarrollador full-stack en la industria tecnológica.",
        turno: "Tarde",
        modalidad: "Presencial",
        
        planEstudio: {
            primerAño: [
                { nombre: "Introducción a la Programación", descripcion: "Lógica de programación y algoritmos básicos" },
                { nombre: "Matemática Discreta", descripcion: "Fundamentos matemáticos para computación" },
                { nombre: "Sistemas Operativos", descripcion: "Arquitectura y funcionamiento de sistemas operativos" },
                { nombre: "Base de Datos I", descripcion: "Diseño y modelado de bases de datos relacionales" },
                { nombre: "Inglés Técnico I", descripcion: "Comprensión de documentación técnica en inglés" }
            ],
            segundoAño: [
                { nombre: "Programación Orientada a Objetos", descripcion: "Paradigma POO y patrones de diseño" },
                { nombre: "Desarrollo Web", descripcion: "HTML, CSS, JavaScript y frameworks modernos" },
                { nombre: "Base de Datos II", descripcion: "SQL avanzado y optimización de consultas" },
                { nombre: "Estructuras de Datos", descripcion: "Listas, árboles, grafos y algoritmos" },
                { nombre: "Redes y Comunicaciones", descripcion: "Protocolos de red y arquitecturas cliente-servidor" },
                { nombre: "Práctica Profesional I", descripcion: "Pasantías en empresas de tecnología" }
            ],
            tercerAño: [
                { nombre: "Desarrollo Mobile", descripcion: "Aplicaciones para iOS y Android" },
                { nombre: "Ingeniería de Software", descripcion: "Metodologías ágiles y gestión de proyectos" },
                { nombre: "Seguridad Informática", descripcion: "Protección de aplicaciones y datos" },
                { nombre: "Cloud Computing", descripcion: "Servicios en la nube y DevOps" },
                { nombre: "Testing y QA", descripcion: "Pruebas automatizadas y control de calidad" },
                { nombre: "Proyecto Final", descripcion: "Desarrollo de aplicación completa" }
            ]
        },
        
        imagen: "/images/programacion.jpg",
        pdfPlan: "/pdfs/plan-programacion.pdf"
    },
    {
        id: 4,
        nombre: "Profesorado de Educación Inicial",
        duracion: "4 años",
        tipo: "Profesorado",
        descripcion: "Formación docente especializada en educación de niños de 45 días a 5 años. Desarrollo de estrategias pedagógicas para el nivel inicial, estimulación temprana y trabajo con familias.",
        turno: "Mañana",
        modalidad: "Presencial",
        
        planEstudio: {
            primerAño: [
                { nombre: "Pedagogía", descripcion: "Teorías educativas y corrientes pedagógicas" },
                { nombre: "Psicología Evolutiva", descripcion: "Desarrollo cognitivo en la primera infancia" },
                { nombre: "Didáctica del Nivel Inicial", descripcion: "Estrategias de enseñanza para la primera infancia" },
                { nombre: "Literatura Infantil", descripcion: "Cuentos, poesías y recursos literarios" },
                { nombre: "Juego y Creatividad", descripcion: "El juego como herramienta pedagógica" }
            ],
            segundoAño: [
                { nombre: "Alfabetización Inicial", descripcion: "Procesos de lectoescritura en la primera infancia" },
                { nombre: "Matemática y su Didáctica", descripcion: "Enseñanza de conceptos matemáticos básicos" },
                { nombre: "Expresión Corporal y Musical", descripcion: "Movimiento, ritmo y expresión artística" },
                { nombre: "Ciencias Naturales en el Jardín", descripcion: "Exploración del entorno natural" },
                { nombre: "Prácticas Pedagógicas I", descripcion: "Observación y análisis de clases" },
                { nombre: "Educación para la Salud", descripcion: "Cuidado, higiene y prevención" }
            ],
            tercerAño: [
                { nombre: "Arte Plástico y Visual", descripcion: "Técnicas de expresión plástica para niños" },
                { nombre: "Ciencias Sociales en el Jardín", descripcion: "Identidad, familia y comunidad" },
                { nombre: "Tecnología Educativa", descripcion: "Recursos digitales para el nivel inicial" },
                { nombre: "Educación Inclusiva", descripcion: "Atención a la diversidad en el aula" },
                { nombre: "Prácticas Pedagógicas II", descripcion: "Diseño e implementación de actividades" },
                { nombre: "Trabajo con Familias", descripcion: "Comunicación y vínculo con las familias" }
            ],
            cuartoAño: [
                { nombre: "Gestión Institucional", descripcion: "Organización y administración del jardín" },
                { nombre: "Investigación Educativa", descripcion: "Metodología de investigación en educación" },
                { nombre: "Ética Profesional Docente", descripcion: "Derechos del niño y responsabilidad docente" },
                { nombre: "Educación Sexual Integral", descripcion: "ESI en el nivel inicial" },
                { nombre: "Residencia Docente", descripcion: "Práctica intensiva con grupos a cargo" },
                { nombre: "Trabajo Final", descripcion: "Proyecto pedagógico integral" }
            ]
        },
        
        imagen: "/images/educacion-inicial.jpg",
        pdfPlan: "/pdfs/plan-educacion-inicial.pdf"
    },
    {
        id: 5,
        nombre: "Tecnicatura en Enfermería",
        duracion: "3 años",
        tipo: "Tecnicatura",
        descripcion: "Formación profesional para brindar cuidados de enfermería en instituciones de salud públicas y privadas. Atención integral del paciente en diferentes contextos de salud.",
        turno: "Noche",
        modalidad: "Presencial",
        
        planEstudio: {
            primerAño: [
                { nombre: "Anatomía y Fisiología", descripcion: "Estructura y funcionamiento del cuerpo humano" },
                { nombre: "Microbiología e Inmunología", descripcion: "Agentes infecciosos y sistema inmune" },
                { nombre: "Fundamentos de Enfermería", descripcion: "Principios básicos del cuidado de enfermería" },
                { nombre: "Bioética", descripcion: "Principios éticos en la práctica de enfermería" },
                { nombre: "Prácticas Hospitalarias I", descripcion: "Introducción al ambiente hospitalario" }
            ],
            segundoAño: [
                { nombre: "Enfermería Médico-Quirúrgica", descripcion: "Cuidados en pacientes adultos" },
                { nombre: "Farmacología", descripcion: "Medicamentos y administración segura" },
                { nombre: "Enfermería Materno-Infantil", descripcion: "Atención en embarazo, parto y neonatología" },
                { nombre: "Nutrición y Dietoterapia", descripcion: "Alimentación saludable y terapéutica" },
                { nombre: "Primeros Auxilios", descripcion: "Atención de emergencias y urgencias" },
                { nombre: "Prácticas Hospitalarias II", descripcion: "Rotación por servicios de internación" }
            ],
            tercerAño: [
                { nombre: "Enfermería Pediátrica", descripcion: "Cuidados del niño sano y enfermo" },
                { nombre: "Salud Mental", descripcion: "Atención en salud mental y psiquiatría" },
                { nombre: "Cuidados Críticos", descripcion: "Enfermería en terapia intensiva" },
                { nombre: "Salud Pública", descripcion: "Atención primaria y prevención" },
                { nombre: "Administración en Enfermería", descripcion: "Gestión de servicios de enfermería" },
                { nombre: "Residencia Final", descripcion: "Práctica profesional intensiva" }
            ]
        },
        
        imagen: "/images/enfermeria.jpg",
        pdfPlan: "/pdfs/plan-enfermeria.pdf"
    },
    {
        id: 6,
        nombre: "Tecnicatura en Diseño Gráfico",
        duracion: "3 años",
        tipo: "Tecnicatura",
        descripcion: "Formación en diseño visual, identidad corporativa, diseño editorial y multimedia. Desarrollo de competencias creativas y técnicas para la comunicación visual.",
        turno: "Tarde",
        modalidad: "Semi-presencial",
        
        planEstudio: {
            primerAño: [
                { nombre: "Fundamentos del Diseño", descripcion: "Principios básicos de composición y color" },
                { nombre: "Dibujo Técnico", descripcion: "Representación gráfica y perspectiva" },
                { nombre: "Tipografía", descripcion: "Historia y aplicación de la tipografía" },
                { nombre: "Fotografía Digital", descripcion: "Técnicas fotográficas y edición" },
                { nombre: "Software de Diseño I", descripcion: "Photoshop e Illustrator básico" }
            ],
            segundoAño: [
                { nombre: "Diseño Editorial", descripcion: "Maquetación de libros, revistas y publicaciones" },
                { nombre: "Identidad Visual", descripcion: "Creación de marcas y sistemas de identidad" },
                { nombre: "Diseño Web", descripcion: "Interfaces digitales y experiencia de usuario" },
                { nombre: "Ilustración Digital", descripcion: "Técnicas de ilustración vectorial y bitmap" },
                { nombre: "Software de Diseño II", descripcion: "InDesign y herramientas avanzadas" },
                { nombre: "Práctica Profesional I", descripcion: "Pasantías en estudios de diseño" }
            ],
            tercerAño: [
                { nombre: "Diseño Publicitario", descripcion: "Campañas gráficas y piezas publicitarias" },
                { nombre: "Motion Graphics", descripcion: "Animación y diseño en movimiento" },
                { nombre: "Packaging", descripcion: "Diseño de envases y embalajes" },
                { nombre: "Gestión de Proyectos", descripcion: "Planificación y presupuestación" },
                { nombre: "Portfolio y Marca Personal", descripcion: "Desarrollo de identidad profesional" },
                { nombre: "Proyecto Final", descripcion: "Campaña integral de comunicación visual" }
            ]
        },
        
        imagen: "/images/diseno-grafico.jpg",
        pdfPlan: "/pdfs/plan-diseno-grafico.pdf"
    },
    {
        id: 7,
        nombre: "Profesorado de Historia",
        duracion: "4 años",
        tipo: "Profesorado",
        descripcion: "Formación docente en Historia para nivel secundario. Análisis crítico de procesos históricos, metodología de la investigación histórica y didáctica específica.",
        turno: "Noche",
        modalidad: "Presencial",
        
        planEstudio: {
            primerAño: [
                { nombre: "Historia Antigua", descripcion: "Civilizaciones antiguas hasta la caída del Imperio Romano" },
                { nombre: "Introducción a la Historia", descripcion: "Teoría y métodos de la historia" },
                { nombre: "Geografía Histórica", descripcion: "Espacio geográfico y procesos históricos" },
                { nombre: "Pedagogía General", descripcion: "Fundamentos de la educación" },
                { nombre: "Antropología Cultural", descripcion: "Culturas y sociedades humanas" }
            ],
            segundoAño: [
                { nombre: "Historia Medieval", descripcion: "Europa y otras civilizaciones medievales" },
                { nombre: "Historia Moderna", descripcion: "Del Renacimiento a la Revolución Industrial" },
                { nombre: "Historia Americana I", descripcion: "Culturas precolombinas y conquista" },
                { nombre: "Didáctica General", descripcion: "Estrategias de enseñanza y aprendizaje" },
                { nombre: "Sociología de la Educación", descripcion: "Sociedad, cultura y educación" },
                { nombre: "Práctica Docente I", descripcion: "Observación en instituciones educativas" }
            ],
            tercerAño: [
                { nombre: "Historia Contemporánea", descripcion: "Siglos XIX y XX, guerras mundiales" },
                { nombre: "Historia Americana II", descripcion: "Independencias y formación de estados" },
                { nombre: "Historia Argentina I", descripcion: "Desde la colonia hasta 1880" },
                { nombre: "Didáctica de la Historia", descripcion: "Enseñanza de la historia en secundaria" },
                { nombre: "Epistemología de las Ciencias Sociales", descripcion: "Teoría del conocimiento histórico" },
                { nombre: "Práctica Docente II", descripcion: "Planificación de clases" }
            ],
            cuartoAño: [
                { nombre: "Historia Argentina II", descripcion: "De 1880 a la actualidad" },
                { nombre: "Historia Reciente", descripcion: "Dictaduras, democracia y globalización" },
                { nombre: "Historiografía", descripcion: "Escuelas y corrientes historiográficas" },
                { nombre: "Metodología de la Investigación", descripcion: "Investigación histórica y fuentes" },
                { nombre: "Residencia Docente", descripcion: "Práctica intensiva con cursos a cargo" },
                { nombre: "Trabajo Final", descripcion: "Investigación histórica o proyecto pedagógico" }
            ]
        },
        
        imagen: "/images/historia.jpg",
        pdfPlan: "/pdfs/plan-historia.pdf"
    },
    {
        id: 8,
        nombre: "Tecnicatura en Administración de Empresas",
        duracion: "3 años",
        tipo: "Tecnicatura",
        descripcion: "Formación en gestión administrativa, recursos humanos, contabilidad y finanzas. Preparación para desempeñarse en áreas administrativas de organizaciones públicas y privadas.",
        turno: "Mañana",
        modalidad: "Semi-presencial",
        
        planEstudio: {
            primerAño: [
                { nombre: "Introducción a la Administración", descripcion: "Teorías y principios administrativos" },
                { nombre: "Contabilidad I", descripcion: "Fundamentos de contabilidad básica" },
                { nombre: "Matemática Financiera", descripcion: "Cálculos financieros y comerciales" },
                { nombre: "Derecho Empresarial", descripcion: "Marco legal de las organizaciones" },
                { nombre: "Informática Aplicada", descripcion: "Office y herramientas de gestión" }
            ],
            segundoAño: [
                { nombre: "Contabilidad II", descripcion: "Contabilidad de costos y gestión" },
                { nombre: "Recursos Humanos", descripcion: "Gestión de personal y relaciones laborales" },
                { nombre: "Marketing", descripcion: "Estrategias de comercialización" },
                { nombre: "Economía", descripcion: "Micro y macroeconomía aplicada" },
                { nombre: "Administración Financiera", descripcion: "Gestión de finanzas empresariales" },
                { nombre: "Práctica Profesional I", descripcion: "Pasantías en empresas" }
            ],
            tercerAño: [
                { nombre: "Gestión de Proyectos", descripcion: "Planificación y control de proyectos" },
                { nombre: "Análisis de Estados Contables", descripcion: "Interpretación de información financiera" },
                { nombre: "Administración de Operaciones", descripcion: "Logística y producción" },
                { nombre: "Comercio Exterior", descripcion: "Importación, exportación y aduanas" },
                { nombre: "Emprendedorismo", descripcion: "Creación y gestión de nuevos negocios" },
                { nombre: "Proyecto Final", descripcion: "Plan de negocios o mejora organizacional" }
            ]
        },
        
        imagen: "/images/administracion.jpg",
        pdfPlan: "/pdfs/plan-administracion.pdf"
    },
    {
        id: 9,
        nombre: "Tecnicatura en Turismo",
        duracion: "3 años",
        tipo: "Tecnicatura",
        descripcion: "Formación en gestión turística, hotelería, agencias de viajes y eventos. Desarrollo de competencias para la planificación y gestión de servicios turísticos.",
        turno: "Tarde",
        modalidad: "Presencial",
        
        planEstudio: {
            primerAño: [
                { nombre: "Introducción al Turismo", descripcion: "Conceptos fundamentales y tipos de turismo" },
                { nombre: "Geografía Turística", descripcion: "Destinos y recursos turísticos mundiales" },
                { nombre: "Patrimonio Cultural", descripcion: "Valoración y conservación del patrimonio" },
                { nombre: "Inglés Turístico I", descripcion: "Comunicación en inglés para turismo" },
                { nombre: "Informática Turística", descripcion: "Sistemas de reservas y gestión" }
            ],
            segundoAño: [
                { nombre: "Gestión de Agencias de Viajes", descripcion: "Operación y administración de agencias" },
                { nombre: "Hotelería y Gastronomía", descripcion: "Gestión de establecimientos hoteleros" },
                { nombre: "Marketing Turístico", descripcion: "Promoción de destinos y servicios" },
                { nombre: "Planificación de Eventos", descripcion: "Organización de eventos y congresos" },
                { nombre: "Inglés Turístico II", descripcion: "Inglés avanzado para el sector" },
                { nombre: "Práctica Profesional I", descripcion: "Pasantías en empresas turísticas" }
            ],
            tercerAño: [
                { nombre: "Turismo Sustentable", descripcion: "Gestión ambiental y responsabilidad social" },
                { nombre: "Guía de Turismo", descripcion: "Técnicas de guiado e interpretación" },
                { nombre: "Legislación Turística", descripcion: "Marco legal del sector turístico" },
                { nombre: "Gestión de Proyectos Turísticos", descripcion: "Desarrollo de emprendimientos turísticos" },
                { nombre: "Portugués Turístico", descripcion: "Comunicación en portugués" },
                { nombre: "Proyecto Final", descripcion: "Diseño de circuito o producto turístico" }
            ]
        },
        
        imagen: "/images/turismo.jpg",
        pdfPlan: "/pdfs/plan-turismo.pdf"
    },
    {
        id: 10,
        nombre: "Profesorado de Inglés",
        duracion: "4 años",
        tipo: "Profesorado",
        descripcion: "Formación docente en inglés para todos los niveles educativos. Desarrollo de competencias lingüísticas, pedagógicas y culturales para la enseñanza del idioma inglés.",
        turno: "Noche",
        modalidad: "Presencial",
        
        planEstudio: {
            primerAño: [
                { nombre: "Inglés I", descripcion: "Gramática y fonética nivel intermedio" },
                { nombre: "Comprensión Lectora I", descripcion: "Estrategias de lectura en inglés" },
                { nombre: "Producción Oral I", descripcion: "Desarrollo de habilidades orales" },
                { nombre: "Pedagogía", descripcion: "Fundamentos de la educación" },
                { nombre: "Fonética y Fonología", descripcion: "Sistema sonoro del inglés" }
            ],
            segundoAño: [
                { nombre: "Inglés II", descripcion: "Gramática avanzada y estructuras complejas" },
                { nombre: "Comprensión Lectora II", descripcion: "Análisis de textos literarios" },
                { nombre: "Producción Escrita", descripcion: "Escritura académica en inglés" },
                { nombre: "Literatura Inglesa I", descripcion: "Literatura británica clásica" },
                { nombre: "Didáctica General", descripcion: "Estrategias de enseñanza" },
                { nombre: "Práctica Docente I", descripcion: "Observación de clases de inglés" }
            ],
            tercerAño: [
                { nombre: "Inglés III", descripcion: "Nivel avanzado C1" },
                { nombre: "Literatura Norteamericana", descripcion: "Literatura de Estados Unidos" },
                { nombre: "Cultura de Países Anglófonos", descripcion: "Historia y cultura de países de habla inglesa" },
                { nombre: "Didáctica del Inglés I", descripcion: "Metodologías de enseñanza del inglés" },
                { nombre: "Lingüística Aplicada", descripcion: "Adquisición de segundas lenguas" },
                { nombre: "Práctica Docente II", descripcion: "Planificación de clases de inglés" }
            ],
            cuartoAño: [
                { nombre: "Inglés IV" },
                { nombre: "Literatura Inglesa II" },
                { nombre: "Didáctica del Inglés II" },
                { nombre: "Traducción" },
                { nombre: "TIC en la enseñanza del inglés" },
                { nombre: "Residencia Docente" },
                { nombre: "Trabajo Final" }
            ]
        },
        
        imagen: "/images/ingles.jpg",
        pdfPlan: "/pdfs/plan-ingles.pdf"
    }
]