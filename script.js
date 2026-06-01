const state = {
  lang: "en",
  theme: "light",
  mindMapZoom: 1,
  mindMapPanX: 0,
  mindMapPanY: 0,
  aiNotSelections: {},
  mythDrops: {},
  conceptDrops: {},
  checkpointChoices: {}
};

const preCheckStorageKey = "demystifyAI.preCheckState";

const i18n = {
  en: {
    pageTitle: "Demystifying AI for Educators",
    title: "Demystifying AI for Educators",
    subtitle: "Hands-on activities, quizzes, and classroom-safe AI decision practice.",
    precheckBadge: "Start here",
    navHome: "Home",
    navInfographic: "Infographic",
    navMindMap: "Mind Map",
    navVideo: "Video",
    navResources: "Resources",
    navAssistant: "Ask AI",
    navExercises: "Exercises",
    navAssessments: "Assessments",
    infographicTitle: "Module Infographic",
    infographicIntro: "Start with this infographic to get a quick overview of what this module covers.",
    mindmapTitle: "Module Mind Map",
    mindmapIntro: "Explore the module structure using the zoom controls or your mouse wheel.",
    zoomOut: "Zoom Out",
    zoomReset: "Reset",
    zoomIn: "Zoom In",
    heroHeading: "Learn AI by Doing",
    heroText: "Use interactive classification, matching, and scenario tasks to build practical AI literacy for school settings.",
    mindmapCaption: "Visual map of core AI concepts for educators",
    exercisesTitle: "Exercises & Activities",
    aiOrNotTitle: "AI or Not AI? Classification Exercise",
    aiOrNotIntro: "Read each classroom technology example and classify it.",
    mythFactTitle: "Myth vs Fact Matching",
    mythFactIntro: "Drag each statement card into the correct bucket.",
    mythLabel: "Myth",
    factLabel: "Fact",
    checkAnswers: "Check Answers",
    opportunityTitle: "Opportunity Scan for Teacher Tasks",
    opportunityIntro: "Select routine tasks to discover safe AI support opportunities.",
    vocabTitle: "AI Vocabulary Builder",
    vocabIntro: "Flip cards to reveal educator-friendly definitions and examples.",
    assessmentsTitle: "Assessments & Quizzes",
    preCheckTitle: "Pre-Module Knowledge Check",
    mcqTitle: "Multiple Choice & Scenario Quiz",
    conceptTitle: "Drag-and-Drop Concept Matching",
    conceptIntro: "Match each AI concept with the best classroom description.",
    checkpointTitle: "Formative Checkpoint",
    checkpointIntro: "Choose exactly 3 appropriate and 3 inappropriate school uses of AI.",
    validate: "Validate",
    submit: "Submit",
    gateTitle: "Pre-Module Knowledge Check",
    gateText: "Complete the short knowledge check before exploring the rest of the site. You can also skip it once, and we will remember your choice.",
    gateStart: "Take the check",
    gateSkip: "Skip for now",
    mediaTitle: "Short Visual Explainer",
    mediaIntro: "Use this short video to launch a classroom discussion on where AI appears in daily teaching.",
    resourcesTitle: "Downloadable Study Resources",
    resourcesIntro: "Download the full module study material and presentation slides.",
    downloadContentLabel: "Download Full Study Material",
    downloadSlidesLabel: "Download Slides",
    assistantTitle: "Experimental AI Teaching Assistant",
    assistantIntro: "Prototype mode: this assistant works offline with module knowledge only (no external LLM API).",
    assistantInputLabel: "Ask a question about this module",
    assistantPlaceholder: "Ask anything about AI concepts, safe use, myths, or classroom scenarios...",
    assistantAsk: "Ask Assistant",
    assistantClear: "Clear",
    assistantDefaultResponse: "Type a question to get a module-grounded answer.",
    assistantEmpty: "Please type a question first.",
    assistantNoMatch: "I am in experimental mode and limited to this module. Try asking about: safe AI classroom use, myths vs facts, hallucinations, bias, formative checkpoint, or teacher oversight.",
    assistantSourcePrefix: "Module answer",
    assistantPrompt1: "What is a safe use of AI in class?",
    assistantPrompt2: "How can I reduce hallucinations?",
    assistantPrompt3: "Will AI replace teachers?",
    assistantPrompt4: "What does human in the loop mean?",
    footerText: "Designed for practical, safe, and ethical AI literacy in education.",
    classifyAI: "AI",
    classifyNot: "Not AI",
    correct: "Correct",
    incorrect: "Try again",
    selectedAppropriate: "Appropriate",
    selectedInappropriate: "Inappropriate"
  },
  ar: {
    pageTitle: "تبسيط الذكاء الاصطناعي للمعلمين",
    title: "تبسيط الذكاء الاصطناعي للمعلمين",
    subtitle: "أنشطة عملية واختبارات لدعم اتخاذ قرارات آمنة لاستخدام الذكاء الاصطناعي في المدارس.",
    precheckBadge: "ابدأ من هنا",
    navHome: "الرئيسية",
    navInfographic: "الإنفوجرافيك",
    navMindMap: "الخريطة الذهنية",
    navVideo: "الفيديو",
    navResources: "الموارد",
    navAssistant: "اسأل الذكاء الاصطناعي",
    navExercises: "التمارين",
    navAssessments: "التقييمات",
    infographicTitle: "الإنفوجرافيك الخاص بالمحور",
    infographicIntro: "ابدأ بهذا الإنفوجرافيك للحصول على نظرة سريعة حول محتوى هذا المحور.",
    mindmapTitle: "الخريطة الذهنية للمحور",
    mindmapIntro: "استكشف بنية المحور باستخدام أزرار التكبير أو عجلة الفأرة.",
    zoomOut: "تصغير",
    zoomReset: "إعادة ضبط",
    zoomIn: "تكبير",
    heroHeading: "تعلم الذكاء الاصطناعي بالممارسة",
    heroText: "استخدم أنشطة تفاعلية للتصنيف والمطابقة والسيناريوهات لبناء فهم عملي للذكاء الاصطناعي في البيئة التعليمية.",
    mindmapCaption: "خريطة مرئية لمفاهيم الذكاء الاصطناعي الأساسية للمعلمين",
    exercisesTitle: "التمارين والأنشطة",
    aiOrNotTitle: "هل هذا ذكاء اصطناعي أم لا؟",
    aiOrNotIntro: "اقرأ كل مثال تقني داخل الصف ثم صنفه.",
    mythFactTitle: "مطابقة خرافة أم حقيقة",
    mythFactIntro: "اسحب كل بطاقة إلى الفئة الصحيحة.",
    mythLabel: "خرافة",
    factLabel: "حقيقة",
    checkAnswers: "تحقق من الإجابات",
    opportunityTitle: "استكشاف فرص استخدام الذكاء الاصطناعي لمهام المعلم",
    opportunityIntro: "اختر المهام المتكررة لاكتشاف فرص استخدام آمن وفعّال.",
    vocabTitle: "بناء مفردات الذكاء الاصطناعي",
    vocabIntro: "اقلب البطاقات لرؤية تعريفات وأمثلة مناسبة للمعلمين.",
    assessmentsTitle: "التقييمات والاختبارات",
    preCheckTitle: "اختبار قبلي سريع",
    mcqTitle: "اختبار اختيارات متعددة وسيناريوهات",
    conceptTitle: "مطابقة المفاهيم بالسحب والإفلات",
    conceptIntro: "طابق كل مفهوم ذكاء اصطناعي مع الوصف المناسب داخل المدرسة.",
    checkpointTitle: "نقطة تحقق تكوينية",
    checkpointIntro: "اختر 3 استخدامات مناسبة و3 استخدامات غير مناسبة للذكاء الاصطناعي في المدرسة.",
    validate: "تحقق",
    submit: "إرسال",
    gateTitle: "اختبار قبلي سريع",
    gateText: "أكمل اختبار المعرفة القصير قبل استكشاف بقية الموقع. يمكنك أيضًا تخطيه مرة واحدة، وسنتذكر اختيارك.",
    gateStart: "ابدأ الاختبار",
    gateSkip: "تخطي الآن",
    mediaTitle: "مقطع توضيحي قصير",
    mediaIntro: "استخدم هذا الفيديو لبدء نقاش صفي حول وجود الذكاء الاصطناعي في الممارسة اليومية.",
    resourcesTitle: "موارد قابلة للتنزيل",
    resourcesIntro: "حمّل المادة الدراسية الكاملة للمحور وشرائح العرض التقديمي.",
    downloadContentLabel: "تنزيل المادة الدراسية الكاملة",
    downloadSlidesLabel: "تنزيل الشرائح",
    assistantTitle: "مساعد تدريس بالذكاء الاصطناعي (تجريبي)",
    assistantIntro: "وضع نموذجي: يعمل هذا المساعد دون اتصال وبالاعتماد على معرفة هذا المحور فقط (من دون ربط خارجي بنماذج LLM).",
    assistantInputLabel: "اطرح سؤالًا مرتبطًا بهذا المحور",
    assistantPlaceholder: "اسأل عن مفاهيم الذكاء الاصطناعي أو الاستخدام الآمن أو الخرافات أو السيناريوهات الصفية...",
    assistantAsk: "اسأل المساعد",
    assistantClear: "مسح",
    assistantDefaultResponse: "اكتب سؤالًا لتحصل على إجابة مبنية على محتوى المحور.",
    assistantEmpty: "يرجى كتابة سؤال أولًا.",
    assistantNoMatch: "أنا في وضع تجريبي ومحدود بمحتوى هذا المحور. جرّب السؤال عن: الاستخدام الآمن في الصف، خرافة أم حقيقة، الهلوسة، التحيز، التحقق التكويني، أو إشراف المعلم.",
    assistantSourcePrefix: "إجابة من المحور",
    assistantPrompt1: "ما الاستخدام الآمن للذكاء الاصطناعي في الصف؟",
    assistantPrompt2: "كيف أقلل الهلوسة؟",
    assistantPrompt3: "هل سيستبدل الذكاء الاصطناعي المعلمين؟",
    assistantPrompt4: "ماذا يعني الإنسان ضمن الحلقة؟",
    footerText: "مصمم لتعزيز الوعي العملي والآمن والأخلاقي للذكاء الاصطناعي في التعليم.",
    classifyAI: "ذكاء اصطناعي",
    classifyNot: "ليس ذكاء اصطناعي",
    correct: "صحيح",
    incorrect: "حاول مرة أخرى",
    selectedAppropriate: "مناسب",
    selectedInappropriate: "غير مناسب"
  }
};

const datasets = {
  aiOrNot: [
    {
      id: "a1",
      text: {
        en: "A tool that auto-generates personalized feedback based on student writing patterns.",
        ar: "أداة تولد تغذية راجعة مخصصة تلقائيًا بناءً على أنماط كتابة الطلاب."
      },
      answer: "ai"
    },
    {
      id: "a2",
      text: {
        en: "A teacher manually updating grades in a spreadsheet.",
        ar: "معلم يقوم يدويًا بتحديث الدرجات في جدول بيانات."
      },
      answer: "not"
    },
    {
      id: "a3",
      text: {
        en: "A chatbot answering student FAQs with natural language.",
        ar: "روبوت محادثة يجيب عن أسئلة الطلاب المتكررة باللغة الطبيعية."
      },
      answer: "ai"
    },
    {
      id: "a4",
      text: {
        en: "A static PDF posted to the LMS with no adaptation.",
        ar: "ملف PDF ثابت على منصة التعلم دون أي تكييف."
      },
      answer: "not"
    }
  ],
  mythFact: [
    {
      id: "m1",
      text: {
        en: "AI will replace all teachers within a few years.",
        ar: "الذكاء الاصطناعي سيستبدل جميع المعلمين خلال سنوات قليلة."
      },
      type: "myth"
    },
    {
      id: "m2",
      text: {
        en: "AI can support lesson preparation, but teachers remain responsible for judgment and ethics.",
        ar: "يمكن للذكاء الاصطناعي دعم إعداد الدروس، لكن يبقى المعلم مسؤولًا عن الحكم والأخلاقيات."
      },
      type: "fact"
    },
    {
      id: "m3",
      text: {
        en: "AI outputs should always be reviewed for bias and factual accuracy.",
        ar: "يجب دائمًا مراجعة مخرجات الذكاء الاصطناعي للتحيز والدقة العلمية."
      },
      type: "fact"
    },
    {
      id: "m4",
      text: {
        en: "If an answer sounds fluent, it is always correct.",
        ar: "إذا بدا الجواب سلسًا فهو صحيح دائمًا."
      },
      type: "myth"
    }
  ],
  tasks: [
    {
      title: {
        en: "Drafting parent newsletter summaries",
        ar: "صياغة ملخصات نشرات أولياء الأمور"
      },
      insight: {
        en: "AI can generate first drafts. Teacher should verify tone, family context, and sensitive details before sharing.",
        ar: "يمكن للذكاء الاصطناعي إنشاء مسودة أولية. يجب على المعلم مراجعة النبرة وسياق الأسرة والتفاصيل الحساسة قبل النشر."
      }
    },
    {
      title: {
        en: "Creating differentiated reading questions",
        ar: "إنشاء أسئلة قراءة متدرجة"
      },
      insight: {
        en: "AI can suggest leveled questions quickly. Teacher aligns language level, curriculum goals, and learner needs.",
        ar: "يمكن للذكاء الاصطناعي اقتراح أسئلة متدرجة بسرعة. ويقوم المعلم بمواءمة مستوى اللغة وأهداف المنهج واحتياجات المتعلمين."
      }
    },
    {
      title: {
        en: "Detecting student misconceptions from exit tickets",
        ar: "اكتشاف مفاهيم الطلاب الخاطئة من بطاقات الخروج"
      },
      insight: {
        en: "AI can cluster patterns across responses. Teacher interprets root causes and decides instructional interventions.",
        ar: "يمكن للذكاء الاصطناعي تجميع الأنماط عبر الإجابات. ويقوم المعلم بتفسير الأسباب الجذرية وتحديد التدخلات التعليمية."
      }
    },
    {
      title: {
        en: "Final grading decisions",
        ar: "اتخاذ قرارات التقدير النهائية"
      },
      insight: {
        en: "High-stakes decisions should stay with educators. AI may assist with analytics, not final authority.",
        ar: "القرارات عالية التأثير يجب أن تبقى بيد المعلمين. يمكن للذكاء الاصطناعي المساعدة تحليليًا دون سلطة نهائية."
      }
    }
  ],
  vocab: [
    {
      term: { en: "Prompt", ar: "الموجّه" },
      definition: {
        en: "The instruction given to an AI system.",
        ar: "التعليمات التي نقدمها لنظام الذكاء الاصطناعي."
      },
      example: {
        en: "Example: 'Create three grade-6 discussion questions about climate change.'",
        ar: "مثال: «أنشئ ثلاث أسئلة نقاش للصف السادس حول التغير المناخي»."
      }
    },
    {
      term: { en: "Bias", ar: "التحيز" },
      definition: {
        en: "Systematic unfairness in data or model output.",
        ar: "انحياز منهجي في البيانات أو مخرجات النموذج."
      },
      example: {
        en: "Example: Content examples that ignore diverse student backgrounds.",
        ar: "مثال: أمثلة محتوى تتجاهل تنوع خلفيات الطلاب."
      }
    },
    {
      term: { en: "Hallucination", ar: "الهلوسة" },
      definition: {
        en: "Confident but incorrect AI output.",
        ar: "مخرجات واثقة لكنها غير صحيحة."
      },
      example: {
        en: "Example: AI invents a policy that your school never adopted.",
        ar: "مثال: يختلق الذكاء الاصطناعي سياسة لم تعتمدها المدرسة أصلًا."
      }
    },
    {
      term: { en: "Human in the Loop", ar: "الإنسان ضمن الحلقة" },
      definition: {
        en: "A human reviews or approves AI-supported work.",
        ar: "وجود إنسان يراجع أو يعتمد العمل المدعوم بالذكاء الاصطناعي."
      },
      example: {
        en: "Example: Teacher approves generated feedback before students receive it.",
        ar: "مثال: المعلم يوافق على التغذية الراجعة قبل إرسالها للطلاب."
      }
    }
  ],
  preCheck: [
    {
      id: "p1",
      q: {
        en: "Which statement best describes AI in schools?",
        ar: "أي عبارة تصف الذكاء الاصطناعي في المدارس بشكل أدق؟"
      },
      options: [
        { en: "A replacement for all teaching", ar: "بديل كامل للتدريس" },
        { en: "A support tool that needs teacher oversight", ar: "أداة دعم تحتاج لإشراف المعلم" },
        { en: "Always objective and unbiased", ar: "موضوعي دائمًا ومن دون تحيز" }
      ],
      answer: 1
    },
    {
      id: "p2",
      q: {
        en: "Before using AI output with students, teachers should...",
        ar: "قبل استخدام مخرجات الذكاء الاصطناعي مع الطلاب يجب على المعلم..."
      },
      options: [
        { en: "Publish immediately", ar: "النشر فورًا" },
        { en: "Verify accuracy and appropriateness", ar: "التحقق من الدقة والملاءمة" },
        { en: "Assume it matches local policy", ar: "افتراض توافقها مع السياسة المحلية" }
      ],
      answer: 1
    }
  ],
  mcq: [
    {
      id: "q1",
      q: {
        en: "Scenario: An AI tool gives instant writing feedback. What is the best teacher action?",
        ar: "سيناريو: أداة ذكاء اصطناعي تقدم تغذية راجعة فورية للكتابة. ما أفضل إجراء من المعلم؟"
      },
      options: [
        { en: "Use feedback as-is for grading", ar: "استخدام التغذية الراجعة كما هي للتقييم" },
        { en: "Review samples, adapt criteria, then approve", ar: "مراجعة عينات وتكييف المعايير ثم اعتمادها" },
        { en: "Turn it off completely", ar: "إيقاف الأداة تمامًا" }
      ],
      answer: 1
    },
    {
      id: "q2",
      q: {
        en: "Which is an appropriate use of AI?",
        ar: "أي مما يلي استخدام مناسب للذكاء الاصطناعي؟"
      },
      options: [
        { en: "Generating rubric draft ideas", ar: "توليد أفكار أولية لسلم التقدير" },
        { en: "Making final disciplinary decisions", ar: "اتخاذ قرارات انضباط نهائية" },
        { en: "Collecting student data without consent", ar: "جمع بيانات الطلاب دون موافقة" }
      ],
      answer: 0
    },
    {
      id: "q3",
      q: {
        en: "Best way to reduce AI hallucinations in class materials?",
        ar: "أفضل طريقة لتقليل هلوسة الذكاء الاصطناعي في المواد الصفية؟"
      },
      options: [
        { en: "Ask shorter prompts and fact-check outputs", ar: "استخدم موجهات أوضح وتحقق من الحقائق" },
        { en: "Trust any fluent answer", ar: "الثقة بأي إجابة سلسة" },
        { en: "Avoid reviewing references", ar: "تجنب مراجعة المراجع" }
      ],
      answer: 0
    }
  ],
  conceptPairs: [
    {
      id: "c1",
      term: { en: "Machine Learning", ar: "تعلم الآلة" },
      desc: {
        en: "Improves performance by learning from examples.",
        ar: "يحسن الأداء عبر التعلم من الأمثلة."
      }
    },
    {
      id: "c2",
      term: { en: "Generative AI", ar: "الذكاء الاصطناعي التوليدي" },
      desc: {
        en: "Creates new text, images, or media.",
        ar: "ينتج نصوصًا أو صورًا أو وسائط جديدة."
      }
    },
    {
      id: "c3",
      term: { en: "NLP", ar: "معالجة اللغة الطبيعية" },
      desc: {
        en: "Understands and works with human language.",
        ar: "يفهم اللغة البشرية ويتعامل معها."
      }
    }
  ],
  checkpoint: [
    {
      id: "u1",
      text: {
        en: "Using AI to draft lesson plan options before teacher review",
        ar: "استخدام الذكاء الاصطناعي لصياغة خيارات خطة درس قبل مراجعة المعلم"
      },
      label: "good"
    },
    {
      id: "u2",
      text: {
        en: "Automatically assigning final grades with no human review",
        ar: "إسناد الدرجات النهائية تلقائيًا دون مراجعة بشرية"
      },
      label: "bad"
    },
    {
      id: "u3",
      text: {
        en: "Translating family communication drafts then checking cultural accuracy",
        ar: "ترجمة مسودات التواصل مع الأسر ثم التحقق من الدقة الثقافية"
      },
      label: "good"
    },
    {
      id: "u4",
      text: {
        en: "Uploading sensitive student records to unknown AI apps",
        ar: "رفع سجلات طلاب حساسة إلى تطبيقات ذكاء اصطناعي غير معروفة"
      },
      label: "bad"
    },
    {
      id: "u5",
      text: {
        en: "Generating practice quiz variants for revision",
        ar: "توليد نسخ تدريبية مختلفة للاختبارات للمراجعة"
      },
      label: "good"
    },
    {
      id: "u6",
      text: {
        en: "Using AI surveillance to label student behavior risk without transparency",
        ar: "استخدام مراقبة الذكاء الاصطناعي لتصنيف مخاطر السلوك دون شفافية"
      },
      label: "bad"
    }
  ]
};

const assistantKnowledge = [
  {
    keywords: {
      en: ["safe use", "appropriate use", "classroom", "teacher review"],
      ar: ["استخدام آمن", "استخدام مناسب", "الصف", "مراجعة المعلم"]
    },
    answer: {
      en: "A safe classroom use is asking AI to draft ideas (questions, rubric ideas, or lesson options) and then having the teacher verify accuracy, age-appropriateness, and policy alignment before use.",
      ar: "من الاستخدامات الآمنة في الصف: أن يولّد الذكاء الاصطناعي أفكارًا أولية (أسئلة، أفكار لسلم التقدير، أو خيارات درس)، ثم يراجع المعلم الدقة والملاءمة العمرية والتوافق مع سياسة المدرسة قبل الاستخدام."
    }
  },
  {
    keywords: {
      en: ["replace teachers", "replace all teachers", "teacher role"],
      ar: ["يستبدل المعلمين", "بديل للمعلم", "دور المعلم"]
    },
    answer: {
      en: "In this module, the claim that AI will replace all teachers is a myth. AI supports preparation and analysis, while teachers remain responsible for pedagogy, ethics, and final decisions.",
      ar: "وفق هذا المحور، القول إن الذكاء الاصطناعي سيستبدل جميع المعلمين هو خرافة. الذكاء الاصطناعي يدعم التحضير والتحليل، بينما يبقى المعلم مسؤولًا عن التربية والأخلاقيات والقرارات النهائية."
    }
  },
  {
    keywords: {
      en: ["hallucination", "wrong answer", "fact-check", "accuracy"],
      ar: ["هلوسة", "إجابة خاطئة", "تحقق", "دقة"]
    },
    answer: {
      en: "To reduce hallucinations: use clearer prompts, ask for sources when possible, and always fact-check outputs before sharing with students.",
      ar: "لتقليل الهلوسة: استخدم موجهات أوضح، واطلب مصادر عند الإمكان، وتحقق دائمًا من الحقائق قبل مشاركة المخرجات مع الطلاب."
    }
  },
  {
    keywords: {
      en: ["bias", "fairness", "unfair", "diverse"],
      ar: ["تحيز", "عدالة", "غير منصف", "تنوع"]
    },
    answer: {
      en: "Bias means systematic unfairness in data or model outputs. In school settings, teachers should review whether examples and feedback are fair across different student backgrounds.",
      ar: "التحيز يعني عدم إنصاف منهجي في البيانات أو مخرجات النموذج. في البيئة المدرسية، يجب على المعلم مراجعة عدالة الأمثلة والتغذية الراجعة عبر خلفيات الطلاب المختلفة."
    }
  },
  {
    keywords: {
      en: ["human in the loop", "teacher oversight", "approve"],
      ar: ["الإنسان ضمن الحلقة", "إشراف المعلم", "اعتماد"]
    },
    answer: {
      en: "Human in the loop means a person (teacher) reviews or approves AI-supported work before it affects learners.",
      ar: "الإنسان ضمن الحلقة يعني أن شخصًا (المعلم) يراجع أو يعتمد العمل المدعوم بالذكاء الاصطناعي قبل أن يؤثر في المتعلمين."
    }
  },
  {
    keywords: {
      en: ["sensitive data", "privacy", "student records", "consent"],
      ar: ["بيانات حساسة", "خصوصية", "سجلات الطلاب", "موافقة"]
    },
    answer: {
      en: "Avoid uploading sensitive student records to unknown AI apps, and never collect/share student data without consent and policy compliance.",
      ar: "تجنب رفع سجلات طلاب حساسة إلى تطبيقات ذكاء اصطناعي غير معروفة، ولا تجمع أو تشارك بيانات الطلاب دون موافقة والالتزام بالسياسات."
    }
  },
  {
    keywords: {
      en: ["tasks", "teacher tasks", "opportunity scan", "routine"],
      ar: ["مهام", "مهام المعلم", "فرص", "متكررة"]
    },
    answer: {
      en: "The module suggests AI support for routine tasks like drafting parent communication, generating differentiated questions, and identifying response patterns. Final high-stakes judgments stay with educators.",
      ar: "يقترح المحور دعم الذكاء الاصطناعي للمهام المتكررة مثل صياغة التواصل مع أولياء الأمور، وتوليد أسئلة متدرجة، واكتشاف الأنماط في الإجابات. أما الأحكام النهائية عالية التأثير فتبقى بيد المعلمين."
    }
  },
  {
    keywords: {
      en: ["concepts", "machine learning", "generative ai", "nlp"],
      ar: ["مفاهيم", "تعلم الآلة", "الذكاء الاصطناعي التوليدي", "معالجة اللغة الطبيعية"]
    },
    answer: {
      en: "Quick concept recap: Machine Learning learns from examples, Generative AI creates new content, and NLP helps systems understand and work with human language.",
      ar: "ملخص سريع للمفاهيم: تعلم الآلة يتعلم من الأمثلة، والذكاء الاصطناعي التوليدي ينتج محتوى جديدًا، ومعالجة اللغة الطبيعية تساعد الأنظمة على فهم اللغة البشرية والتعامل معها."
    }
  }
];

function t(key) {
  return i18n[state.lang][key] || key;
}

function setScoreText(targetId, label, value) {
  const node = document.getElementById(targetId);
  if (!node) return;

  // Isolate LTR numeric patterns so RTL rendering does not reorder or duplicate visually.
  if (label && label.trim()) {
    node.innerHTML = `<span>${label}:</span> <bdi dir="ltr">${value}</bdi>`;
    return;
  }

  node.innerHTML = `<bdi dir="ltr">${value}</bdi>`;
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function applyLanguage() {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("ar", state.lang === "ar");
  document.title = t("pageTitle");
  document.getElementById("langToggle").textContent = state.lang === "en" ? "AR" : "EN";

  const langToggle = document.getElementById("langToggle");
  const themeToggle = document.getElementById("themeToggle");
  if (langToggle) {
    langToggle.setAttribute("aria-label", state.lang === "en" ? "Switch language" : "تبديل اللغة");
  }
  if (themeToggle) {
    themeToggle.setAttribute("aria-label", state.lang === "en" ? "Toggle dark mode" : "تبديل الوضع الداكن");
  }

  const infographic = document.getElementById("moduleInfographic");
  const mindMap = document.getElementById("moduleMindMap");
  const moduleVideo = document.getElementById("moduleVideo");
  const moduleVideoSource = document.getElementById("moduleVideoSource");
  const contentDownload = document.getElementById("downloadContent");
  const slidesDownload = document.getElementById("downloadSlides");
  const assistantInput = document.getElementById("assistantQuestion");

  if (infographic) {
    infographic.src = state.lang === "en" ? "Infographic_EN.png" : "Infographic_AR.png";
    infographic.alt = state.lang === "en" ? "Infographic summary of module" : "ملخص إنفوجرافيك للمحور";
  }

  if (mindMap) {
    mindMap.src = state.lang === "en" ? "MindMap_EN.png" : "MindMap_AR.png";
    mindMap.alt = state.lang === "en" ? "Module concept mind map" : "خريطة ذهنية لمفاهيم المحور";
  }

  if (moduleVideo && moduleVideoSource) {
    moduleVideoSource.src = state.lang === "en" ? "Video_EN.mp4" : "Video_AR.mp4";
    moduleVideo.load();
  }

  if (contentDownload) {
    contentDownload.href = state.lang === "en" ? "Content_EN.pdf" : "Content_AR.pdf";
  }

  if (slidesDownload) {
    slidesDownload.href = state.lang === "en" ? "Slides_EN.pdf" : "Slides_AR.pdf";
  }

  if (assistantInput) {
    assistantInput.placeholder = t("assistantPlaceholder");
    assistantInput.setAttribute("aria-label", t("assistantInputLabel"));
  }

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    node.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.getAttribute("data-i18n-placeholder");
    node.setAttribute("placeholder", t(key));
  });

  renderAssistantPrompts();

  renderAll();
}

function normalizeText(value) {
  return value
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getTokens(value) {
  const stop = state.lang === "en"
    ? new Set(["the", "a", "an", "and", "or", "to", "of", "in", "for", "is", "are", "with", "on", "what", "how"])
    : new Set(["من", "في", "على", "عن", "ما", "كيف", "هل", "الى", "إلى", "هذا", "هذه", "مع", "او", "أو"]);

  return normalizeText(value)
    .split(" ")
    .filter((token) => token.length > 1 && !stop.has(token));
}

function getAssistantPrompts() {
  return [t("assistantPrompt1"), t("assistantPrompt2"), t("assistantPrompt3"), t("assistantPrompt4")];
}

function renderAssistantPrompts() {
  const wrap = document.getElementById("assistantPromptChips");
  if (!wrap) return;

  wrap.innerHTML = "";
  getAssistantPrompts().forEach((prompt) => {
    const chip = el("button", "assistant-chip", prompt);
    chip.type = "button";
    chip.addEventListener("click", () => {
      const input = document.getElementById("assistantQuestion");
      if (!input) return;
      input.value = prompt;
      input.focus();
      askAssistant();
    });
    wrap.append(chip);
  });
}

function setAssistantResponse(text, tone = "neutral") {
  const output = document.getElementById("assistantResponse");
  if (!output) return;

  output.textContent = text;
  output.classList.remove("is-hidden");
  output.classList.remove("is-neutral", "is-answer", "is-warning");
  if (tone === "answer") output.classList.add("is-answer");
  else if (tone === "warning") output.classList.add("is-warning");
  else output.classList.add("is-neutral");
}

function getAssistantAnswer(question) {
  const normalized = normalizeText(question);
  const tokens = getTokens(question);
  let best = null;
  let bestScore = 0;

  assistantKnowledge.forEach((entry) => {
    const pool = entry.keywords[state.lang];
    let score = 0;

    pool.forEach((phrase) => {
      const p = normalizeText(phrase);
      if (normalized.includes(p)) score += 4;
      const phraseTokens = p.split(" ").filter(Boolean);
      phraseTokens.forEach((token) => {
        if (tokens.includes(token)) score += 1;
      });
    });

    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  });

  if (!best || bestScore < 2) {
    return { text: t("assistantNoMatch"), tone: "warning" };
  }

  return {
    text: `${t("assistantSourcePrefix")}: ${best.answer[state.lang]}`,
    tone: "answer"
  };
}

function askAssistant() {
  const input = document.getElementById("assistantQuestion");
  if (!input) return;

  const question = input.value.trim();
  if (!question) {
    setAssistantResponse(t("assistantEmpty"), "warning");
    return;
  }

  const result = getAssistantAnswer(question);
  setAssistantResponse(result.text, result.tone);
}

function clearAssistant() {
  const input = document.getElementById("assistantQuestion");
  if (input) input.value = "";

  const output = document.getElementById("assistantResponse");
  if (!output) return;
  output.textContent = "";
  output.classList.remove("is-neutral", "is-answer", "is-warning");
  output.classList.add("is-hidden");
}

function applyTheme() {
  document.body.classList.toggle("dark", state.theme === "dark");
  document.getElementById("themeToggle").textContent = state.theme === "dark" ? "☀️" : "🌙";
}

function getPreCheckState() {
  try {
    return window.localStorage.getItem(preCheckStorageKey);
  } catch {
    return null;
  }
}

function setPreCheckState(value) {
  try {
    window.localStorage.setItem(preCheckStorageKey, value);
  } catch {
    // Ignore storage failures and keep the current session usable.
  }
}

function unlockPage() {
  document.body.classList.remove("precheck-locked");
}

function lockPage() {
  document.body.classList.add("precheck-locked");
}

function hidePreCheckGate() {
  document.getElementById("preCheckGate").classList.add("is-hidden");
}

function showPreCheckGate() {
  document.getElementById("preCheckGate").classList.remove("is-hidden");
  lockPage();
}

function beginPreCheck() {
  hidePreCheckGate();
  unlockPage();
  document.getElementById("preCheckSection").scrollIntoView({ behavior: "smooth", block: "start" });
  const firstQuestion = document.querySelector("#preCheckForm input");
  if (firstQuestion) {
    firstQuestion.focus({ preventScroll: true });
  }
}

function completePreCheckFlow() {
  setPreCheckState("completed");
  hidePreCheckGate();
  unlockPage();
}

function skipPreCheckFlow() {
  setPreCheckState("skipped");
  hidePreCheckGate();
  unlockPage();
}

function initPreCheckGate() {
  const storedState = getPreCheckState();
  if (storedState === "completed" || storedState === "skipped") {
    hidePreCheckGate();
    unlockPage();
    return;
  }

  showPreCheckGate();
}

function renderAiOrNot() {
  const wrap = document.getElementById("aiOrNotList");
  wrap.innerHTML = "";

  datasets.aiOrNot.forEach((item) => {
    const card = el("div", "statement");
    card.append(el("p", "", item.text[state.lang]));

    const actions = el("div", "actions");
    const aiBtn = el("button", "small-btn", t("classifyAI"));
    const notBtn = el("button", "small-btn", t("classifyNot"));

    aiBtn.type = "button";
    notBtn.type = "button";

    const selected = state.aiNotSelections[item.id];
    if (selected === "ai") aiBtn.classList.add("selected-ai");
    if (selected === "not") notBtn.classList.add("selected-not");

    aiBtn.onclick = () => {
      state.aiNotSelections[item.id] = "ai";
      renderAiOrNot();
      scoreAiOrNot();
    };
    notBtn.onclick = () => {
      state.aiNotSelections[item.id] = "not";
      renderAiOrNot();
      scoreAiOrNot();
    };

    actions.append(aiBtn, notBtn);
    card.append(actions);
    wrap.append(card);
  });
}

function scoreAiOrNot() {
  const total = datasets.aiOrNot.length;
  const done = Object.keys(state.aiNotSelections).length;
  if (done < total) {
    setScoreText("aiOrNotScore", "", `${done}/${total}`);
    return;
  }

  const correct = datasets.aiOrNot.filter((it) => state.aiNotSelections[it.id] === it.answer).length;
  setScoreText("aiOrNotScore", t("correct"), `${correct}/${total}`);
}

function createDraggableItem(id, label, cls) {
  const item = el("div", `draggable-item ${cls || ""}`, label);
  item.draggable = true;
  item.dataset.id = id;
  item.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", id);
  });
  return item;
}

function hookDropzone(zone, onDrop) {
  zone.addEventListener("dragover", (e) => e.preventDefault());
  zone.addEventListener("drop", (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    onDrop(id, zone);
  });
}

function renderMythFact() {
  const pool = document.getElementById("mythFactCards");
  const mythDrop = document.getElementById("mythDrop");
  const factDrop = document.getElementById("factDrop");

  pool.innerHTML = "";
  mythDrop.innerHTML = "";
  factDrop.innerHTML = "";

  const data = shuffle(datasets.mythFact);

  data.forEach((item) => {
    const label = item.text[state.lang];
    const drop = state.mythDrops[item.id];
    const node = createDraggableItem(item.id, label);
    if (!drop) pool.append(node);
    if (drop === "myth") mythDrop.append(node);
    if (drop === "fact") factDrop.append(node);
  });

  hookDropzone(pool, (id) => {
    delete state.mythDrops[id];
    renderMythFact();
  });
  hookDropzone(mythDrop, (id) => {
    state.mythDrops[id] = "myth";
    renderMythFact();
  });
  hookDropzone(factDrop, (id) => {
    state.mythDrops[id] = "fact";
    renderMythFact();
  });
}

function checkMythFact() {
  const total = datasets.mythFact.length;
  if (Object.keys(state.mythDrops).length !== total) {
    setScoreText("mythFactResult", t("incorrect"), `${Object.keys(state.mythDrops).length}/${total}`);
    return;
  }
  const score = datasets.mythFact.filter((item) => state.mythDrops[item.id] === item.type).length;
  setScoreText("mythFactResult", t("correct"), `${score}/${total}`);
}

function renderTasks() {
  const wrap = document.getElementById("taskList");
  wrap.innerHTML = "";

  datasets.tasks.forEach((task, idx) => {
    const chip = el("button", "task-chip", task.title[state.lang]);
    chip.type = "button";
    chip.onclick = () => {
      document.querySelectorAll(".task-chip").forEach((n) => n.classList.remove("active"));
      chip.classList.add("active");
      document.getElementById("taskInsight").textContent = task.insight[state.lang];
    };
    if (idx === 0) chip.click();
    wrap.append(chip);
  });
}

function renderVocab() {
  const wrap = document.getElementById("vocabGrid");
  wrap.innerHTML = "";

  datasets.vocab.forEach((v) => {
    const card = el("button", "vocab-card");
    card.type = "button";

    const inner = el("div", "vocab-inner");
    const front = el("div", "vocab-face front");
    const back = el("div", "vocab-face back");

    front.innerHTML = `<h4>${v.term[state.lang]}</h4><p>${state.lang === "en" ? "Tap to flip" : "اضغط للقلب"}</p>`;
    back.innerHTML = `<h4>${v.term[state.lang]}</h4><p>${v.definition[state.lang]}</p><p>${v.example[state.lang]}</p>`;

    inner.append(front, back);
    card.append(inner);
    card.onclick = () => card.classList.toggle("flipped");
    wrap.append(card);
  });
}

function renderQuiz(containerId, data, inputNamePrefix) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  data.forEach((q, idx) => {
    const block = el("div", "question");
    block.append(el("p", "", `${idx + 1}. ${q.q[state.lang]}`));
    q.options.forEach((opt, oIdx) => {
      const label = el("label", "option");
      const radio = el("input");
      radio.type = "radio";
      radio.name = `${inputNamePrefix}-${q.id}`;
      radio.value = oIdx;
      label.append(radio, document.createTextNode(opt[state.lang]));
      block.append(label);
    });
    container.append(block);
  });
}

function scoreQuiz(data, prefix, resultId) {
  let score = 0;
  data.forEach((q) => {
    const checked = document.querySelector(`input[name='${prefix}-${q.id}']:checked`);
    if (!checked) return;
    if (Number(checked.value) === q.answer) score += 1;
  });
  setScoreText(resultId, t("correct"), `${score}/${data.length}`);
}

function renderConceptMatch() {
  const terms = document.getElementById("conceptTerms");
  const targets = document.getElementById("conceptTargets");
  terms.innerHTML = "";
  targets.innerHTML = "";

  shuffle(datasets.conceptPairs).forEach((pair) => {
    if (!state.conceptDrops[pair.id]) {
      terms.append(createDraggableItem(pair.id, pair.term[state.lang]));
    }
  });

  datasets.conceptPairs.forEach((pair) => {
    const target = el("div", "concept-target");
    target.dataset.id = pair.id;
    target.append(el("p", "", pair.desc[state.lang]));
    if (state.conceptDrops[pair.id]) {
      target.append(createDraggableItem(pair.id, pair.term[state.lang]));
    }
    hookDropzone(target, (id) => {
      state.conceptDrops[pair.id] = id;
      renderConceptMatch();
    });
    targets.append(target);
  });

  hookDropzone(terms, (id) => {
    const key = Object.keys(state.conceptDrops).find((k) => state.conceptDrops[k] === id);
    if (key) delete state.conceptDrops[key];
    renderConceptMatch();
  });
}

function checkConcept() {
  const total = datasets.conceptPairs.length;
  const score = datasets.conceptPairs.filter((p) => state.conceptDrops[p.id] === p.id).length;
  setScoreText("conceptResult", t("correct"), `${score}/${total}`);
}

function renderCheckpoint() {
  const wrap = document.getElementById("checkpointList");
  wrap.innerHTML = "";

  datasets.checkpoint.forEach((item) => {
    const row = el("div", "checkpoint-item");
    row.append(el("span", "", item.text[state.lang]));

    const btnWrap = el("div", "choice-buttons");
    const goodBtn = el("button", "choice-btn good", t("selectedAppropriate"));
    const badBtn = el("button", "choice-btn bad", t("selectedInappropriate"));
    goodBtn.type = "button";
    badBtn.type = "button";

    if (state.checkpointChoices[item.id] === "good") goodBtn.classList.add("selected");
    if (state.checkpointChoices[item.id] === "bad") badBtn.classList.add("selected");

    goodBtn.onclick = () => {
      state.checkpointChoices[item.id] = "good";
      renderCheckpoint();
    };
    badBtn.onclick = () => {
      state.checkpointChoices[item.id] = "bad";
      renderCheckpoint();
    };

    btnWrap.append(goodBtn, badBtn);
    row.append(btnWrap);
    wrap.append(row);
  });
}

function checkCheckpoint() {
  const picks = Object.entries(state.checkpointChoices);
  const selectedGood = picks.filter(([, val]) => val === "good").length;
  const selectedBad = picks.filter(([, val]) => val === "bad").length;
  const total = datasets.checkpoint.length;

  if (selectedGood !== 3 || selectedBad !== 3) {
    setScoreText("checkpointResult", t("incorrect"), `${picks.length}/${total}`);
    return;
  }

  let correctGood = 0;
  let correctBad = 0;
  datasets.checkpoint.forEach((item) => {
    const pick = state.checkpointChoices[item.id];
    if (pick === "good" && item.label === "good") correctGood += 1;
    if (pick === "bad" && item.label === "bad") correctBad += 1;
  });

  setScoreText("checkpointResult", t("correct"), `${correctGood + correctBad}/${total}`);
}

function renderAll() {
  renderAiOrNot();
  scoreAiOrNot();
  renderMythFact();
  renderTasks();
  renderVocab();
  renderQuiz("preCheckForm", datasets.preCheck, "pre");
  renderQuiz("mcqForm", datasets.mcq, "mcq");
  renderConceptMatch();
  renderCheckpoint();
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function getMindMapBounds(viewport, map, zoom) {
  const scaledWidth = map.offsetWidth * zoom;
  const scaledHeight = map.offsetHeight * zoom;
  const maxX = Math.max(0, (scaledWidth - viewport.clientWidth) / 2);
  const maxY = Math.max(0, (scaledHeight - viewport.clientHeight) / 2);
  return { maxX, maxY };
}

function clampMindMapPan(viewport, map, zoom, panX, panY) {
  const { maxX, maxY } = getMindMapBounds(viewport, map, zoom);
  return {
    x: clamp(panX, -maxX, maxX),
    y: clamp(panY, -maxY, maxY)
  };
}

function applyMindMapTransform(map, zoom, panX, panY) {
  map.style.transform = `translate3d(${panX}px, ${panY}px, 0) scale(${zoom})`;
}

function setMindMapZoom(value) {
  const viewport = document.getElementById("mindMapViewport");
  const map = document.getElementById("moduleMindMap");
  if (!viewport || !map) return;

  const nextZoom = clamp(value, 0.6, 3.2);
  const nextPan = clampMindMapPan(viewport, map, nextZoom, state.mindMapPanX, state.mindMapPanY);

  state.mindMapZoom = nextZoom;
  state.mindMapPanX = nextPan.x;
  state.mindMapPanY = nextPan.y;
  applyMindMapTransform(map, state.mindMapZoom, state.mindMapPanX, state.mindMapPanY);
}

function initMindMapZoom() {
  const viewport = document.getElementById("mindMapViewport");
  const map = document.getElementById("moduleMindMap");
  const zoomInBtn = document.getElementById("zoomInMindMap");
  const zoomOutBtn = document.getElementById("zoomOutMindMap");
  const resetBtn = document.getElementById("resetMindMap");

  if (!viewport || !map || !zoomInBtn || !zoomOutBtn || !resetBtn) return;

  const step = 0.15;
  const dragState = {
    active: false,
    pointerId: null,
    startX: 0,
    startY: 0,
    startPanX: 0,
    startPanY: 0
  };

  const updateTransform = () => {
    const nextPan = clampMindMapPan(viewport, map, state.mindMapZoom, state.mindMapPanX, state.mindMapPanY);
    state.mindMapPanX = nextPan.x;
    state.mindMapPanY = nextPan.y;
    applyMindMapTransform(map, state.mindMapZoom, state.mindMapPanX, state.mindMapPanY);
  };

  const zoomAtPoint = (newZoom, clientX, clientY) => {
    const targetZoom = clamp(newZoom, 0.6, 3.2);
    if (targetZoom === state.mindMapZoom) return;

    const rect = viewport.getBoundingClientRect();
    const pointX = clientX - rect.left - viewport.clientWidth / 2;
    const pointY = clientY - rect.top - viewport.clientHeight / 2;
    const zoomRatio = targetZoom / state.mindMapZoom;

    state.mindMapPanX = pointX - zoomRatio * (pointX - state.mindMapPanX);
    state.mindMapPanY = pointY - zoomRatio * (pointY - state.mindMapPanY);
    state.mindMapZoom = targetZoom;

    updateTransform();
  };

  const resetView = () => {
    state.mindMapZoom = 1;
    state.mindMapPanX = 0;
    state.mindMapPanY = 0;
    updateTransform();
  };

  zoomInBtn.addEventListener("click", () => {
    const rect = viewport.getBoundingClientRect();
    zoomAtPoint(state.mindMapZoom + step, rect.left + rect.width / 2, rect.top + rect.height / 2);
  });
  zoomOutBtn.addEventListener("click", () => {
    const rect = viewport.getBoundingClientRect();
    zoomAtPoint(state.mindMapZoom - step, rect.left + rect.width / 2, rect.top + rect.height / 2);
  });
  resetBtn.addEventListener("click", resetView);

  viewport.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();
      const wheelFactor = event.deltaY > 0 ? 0.92 : 1.08;
      zoomAtPoint(state.mindMapZoom * wheelFactor, event.clientX, event.clientY);
    },
    { passive: false }
  );

  viewport.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    dragState.active = true;
    dragState.pointerId = event.pointerId;
    dragState.startX = event.clientX;
    dragState.startY = event.clientY;
    dragState.startPanX = state.mindMapPanX;
    dragState.startPanY = state.mindMapPanY;
    viewport.classList.add("is-grabbing");
    viewport.setPointerCapture(event.pointerId);
  });

  viewport.addEventListener("pointermove", (event) => {
    if (!dragState.active || dragState.pointerId !== event.pointerId) return;
    const dx = event.clientX - dragState.startX;
    const dy = event.clientY - dragState.startY;
    state.mindMapPanX = dragState.startPanX + dx;
    state.mindMapPanY = dragState.startPanY + dy;
    updateTransform();
  });

  const stopDragging = (event) => {
    if (!dragState.active || dragState.pointerId !== event.pointerId) return;
    dragState.active = false;
    dragState.pointerId = null;
    viewport.classList.remove("is-grabbing");
    if (viewport.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }
  };

  viewport.addEventListener("pointerup", stopDragging);
  viewport.addEventListener("pointercancel", stopDragging);
  viewport.addEventListener("dblclick", resetView);

  map.addEventListener("load", updateTransform);
  window.addEventListener("resize", updateTransform);

  resetView();
}

function attachHandlers() {
  document.getElementById("langToggle").addEventListener("click", () => {
    state.lang = state.lang === "en" ? "ar" : "en";
    applyLanguage();
  });

  document.getElementById("themeToggle").addEventListener("click", () => {
    state.theme = state.theme === "light" ? "dark" : "light";
    applyTheme();
  });

  document.getElementById("startPreCheck").addEventListener("click", beginPreCheck);
  document.getElementById("skipPreCheck").addEventListener("click", skipPreCheckFlow);

  document.getElementById("checkMythFact").addEventListener("click", checkMythFact);
  document.getElementById("submitPreCheck").addEventListener("click", () => {
    scoreQuiz(datasets.preCheck, "pre", "preCheckResult");
    completePreCheckFlow();
  });
  document.getElementById("submitMcq").addEventListener("click", () => scoreQuiz(datasets.mcq, "mcq", "mcqResult"));
  document.getElementById("checkConcept").addEventListener("click", checkConcept);
  document.getElementById("checkCheckpoint").addEventListener("click", checkCheckpoint);

  document.getElementById("askAssistant").addEventListener("click", askAssistant);
  document.getElementById("clearAssistant").addEventListener("click", clearAssistant);
  document.getElementById("assistantQuestion").addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      event.preventDefault();
      askAssistant();
    }
  });
}

function boot() {
  attachHandlers();
  initMindMapZoom();
  applyTheme();
  applyLanguage();
  initPreCheckGate();
}

boot();
