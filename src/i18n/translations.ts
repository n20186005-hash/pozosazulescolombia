export type Locale = "zh" | "en" | "es";

export const translations = {
  zh: {
    nav: {
      about: "关于",
      visiting: "游览信息",
      transportation: "交通方式",
      history: "历史科普",
      location: "位置",
      tips: "贴士",
    },
    hero: {
      tagline: "博亚卡的蓝色秘境",
      title: "Pozos Azules",
      subtitle: "翡翠碧潭 · 自然奇观",
      cta: "规划你的行程",
    },
    rating: {
      label: "游客评分",
      reviews: "条评价",
      source: "Google 评论",
    },
    about: {
      title: "关于 Pozos Azules",
      p1: "Pozos Azules（蓝色深潭）坐落于哥伦比亚著名的遗产小镇莱瓦镇郊外，是一项旨在支持该地区旅游业发展、兼具生态保护与观赏价值的私人倡议项目。在广袤的半干旱丛林与黄沙交织的安第斯地貌中，占地约 60 公顷的园区内分布着 7 座色彩极度饱和的蓝绿色深潭。",
      p2: "这种强烈的'荒漠绿洲'视觉反差，使其成为了不仅适合漫步探索，更是摄影与地质爱好者的绝佳取景地。远离城市喧嚣，这里展现出自然与人工交织的独特色彩奇观。",
      highlights: {
        title: "亮点",
        items: [
          "60 公顷自然与人工交织的色彩奇观",
          "7 座蓝绿色深潭",
          "半干旱安第斯地貌",
          "绝佳的摄影取景地",
          "日间色彩游与夜间观星",
        ],
      },
      management: {
        title: "景点管理",
        content: "Pozos Azules 是一项私人倡议项目，旨在支持该地区旅游业发展。门票收入主要用于维护周边生态环境、改善游客设施（如步道、观景台、卫生间等）以及支持社区发展项目。管理方致力于在保护自然环境的同时，为游客提供安全、优质的游览体验。",
      },
    },
    visiting: {
      title: "游览体验",
      hours: {
        title: "开放时间",
        content: "每日开放",
        note: "建议上午前往，光线最佳",
      },
      price: {
        title: "门票",
        content: "20,000 COP / 人（约合5美元）",
        note: "大型旅游团队需提前预订才可享受折扣",
      },
      duration: {
        title: "建议游览时长",
        content: "1.5 - 3 小时",
        note: "含徒步、骑马或摄影时间",
      },
      experience: {
        title: "游览体验",
        content: "日间色彩游、夜间观星行、社交与活动",
        note: "日间适合欣赏蓝绿色，夜间适合观星",
      },
      bring: {
        title: "建议携带",
        items: ["高倍数防晒霜", "遮阳帽", "舒适的防滑步行鞋", "充足的饮用水", "相机", "现金（门票与零食）"],
      },
    },
    transportation: {
      title: "交通指南",
      fromAirport: {
        title: "第一段：从机场到小镇",
        content: "降落于哥伦比亚首都波哥大埃尔多拉多国际机场 (BOG) 后，需先前往波哥大长途巴士站（Terminal de Transporte）。乘坐前往莱瓦镇 (Villa de Leyva) 的大巴，车程约 3 - 4 小时。",
      },
      selfDrive: {
        title: "第二段：从小镇到景点",
        content: "景点距离镇中心非常近。自驾或出租车：走莱瓦镇至圣索菲亚 (Santa Sofía) 的公路，在行驶至 2公里处 的标识转弯即可到达；或者沿化石路 (Ruta de los Fósiles) 行驶约 3 公里。",
      },
      publicTransport: {
        title: "特色交通方式",
        content: "强烈推荐在镇上租用 ATV（全地形车）或骑马穿越荒漠前往，这是当地最经典、体验感最强的抵达方式。也可以乘坐出租车，车程约 10-15 分钟。",
      },
      otherWays: {
        title: "其他建议",
        content: "部分酒店提供 shuttle 服务，建议提前咨询。也可以选择骑山地自行车从镇上前往景点，体验感更佳。",
      },
    },
    history: {
      title: "历史与科普",
      p1: "许多游客惊叹于这里的自然之美，但 Pozos Azules 实际上是人工开凿与地质化学反应共同创造的奇迹。首座深坑（最初作为农业蓄水沟渠）建于近 30 年前。直到 20 世纪末，当地陆续建成了 7 座深坑。",
      p2: "这些水池并不是立刻变蓝的。雨水流经周边沟壑时，溶解了土壤中富含的硒、硫、硫酸铜等高浓度矿物质。富矿水汇聚在坑中，在阳光的折射下，每座深潭大约需要历经 5 年的时间，才能逐渐沉淀、演化成如今令人惊叹的亮蓝色或蓝绿色。",
      p3: "随着莱瓦镇旅游业的繁荣，2000 年，这片已经完成'色彩蜕变'的奇观正式向公众开放，迅速成为当地最受瞩目的生态地标。",
    },
    location: {
      title: "位置与交通",
      address: "JFJ3+9H Villa de Leyva, 博亚卡哥伦比亚",
      mapHint: "点击地图在 Google Maps 中打开",
      openMaps: "在 Google Maps 中查看",
    },
    contact: {
      title: "联系方式",
      phone: "+57 312 5493486",
      phoneNote: "建议提前致电确认开放情况",
    },
    tips: {
      title: "实用信息与安全贴士",
      items: [
        "⚠️ 绝对禁止下水：尽管潭水色彩诱人，但由于水中硫、硒等矿物质浓度极高，对人体皮肤具有毒害和强刺激作用，严禁游泳或触碰潭水。",
        "旱季（12月-3月、7月-8月）是最佳游览时节，水位稳定，色彩最纯粹。建议晴天上午前往，光线反应最佳。",
        "雨后水质可能会短暂混入泥土变色，建议选择晴天前往。",
        "荒漠地带日照强烈，请务必准备高倍数防晒霜、遮阳帽、舒适的防滑步行鞋，并自带充足的饮用水。",
        "附近没有餐厅，建议在比利亚德莱瓦镇用餐后再前往。周末和节假日游客较多，工作日前往可享受更清静的体验。",
      ],
    },
    gallery: {
      title: "精彩照片",
      viewMore: "在 Google Maps 查看更多相片",
    },
    reviews: {
      title: "游客评价",
      subtitle: "来自 Google Maps 的真实评价",
      loadMore: "查看更多评价",
      viewMore: "在 Google Maps 查看更多评价",
    },
    faq: {
      title: "常见问题",
      subtitle: "关于 Pozos Azules 的一切疑问",
      items: [
        {
          question: "为什么 Pozos Azules 这么出名？",
          answer: "它能成为游客必打卡的热门地标，主要有以下几个核心原因：\n\n1. 极其反常的绿松石色（且会变色）\n这些水池呈现出一种令人难以置信的亮蓝色或蓝绿色。这不是因为水质清澈见底，而是因为土壤中富含极高浓度的矿物质（包括硫、硒和硫酸铜）。光线反应：这种颜色在阳光直射下（晴天）最为耀眼。如果遇到阴天，水面会变成深绿色；如果是暴雨过后，甚至会暂时混入泥土变成褐色。\n\n2. \"荒漠绿洲\"的强烈视觉反差\n莱瓦镇周边的地貌非常特殊，属于半干旱的荒漠地带，黄沙、干枯的植被与松树交织。在这片看似极度缺水、色彩单调的背景下，突然出现几口色彩极度饱和的蓝色水池，视觉冲击力极强，这让它在社交媒体上极具传播力。\n\n3. 出人意料的\"人工身世\"\n许多游客以为这是大自然的鬼斧神工，但其实它们最初是人工开凿的。大约在 30 年前（20世纪70年代），当地农场主为了收集雨水灌溉而挖了这些深坑。没想到随着时间推移，地下矿物质不断渗出并与雨水混合，最终\"无心插柳\"形成了今天这副奇特的景观。\n\n4. 完美的周边游玩生态\n它距离莱瓦镇（哥伦比亚最著名的殖民风格遗产小镇之一）仅约 3 公里。因为距离近且地貌特殊，这里形成了一条非常成熟的户外体验路线：游客通常不是坐大巴去，而是骑马、租 ATV（全地形车）或者骑山地自行车穿越荒漠前往。这种结合了西部野外探险的体验感，大大拉高了景点的综合吸引力。\n\n一个重要提示：尽管水看起来非常诱人，但这里是绝对禁止下水游泳的。因为水中重金属和矿物质浓度过高，对人体皮肤有毒害作用。它纯粹是一个\"视觉系\"景点。"
        },
        {
          question: "最佳游览时间是什么时候？",
          answer: "旱季（12月-3月、7月-8月）是最佳游览时节，水位较低，潭水颜色最为清澈。建议上午前往，光线最佳，更容易拍出惊艳的照片。周末和节假日游客较多，工作日前往可享受更清静的体验。"
        },
        {
          question: "如何到达 Pozos Azules？",
          answer: "从比利亚德莱瓦镇中心出发，可乘出租车或参加当地旅行团，车程约 15-20 分钟。也可以选择骑马、租 ATV（全地形车）或者骑山地自行车穿越荒漠前往，体验感更佳。"
        },
        {
          question: "门票价格是多少？",
          answer: "约 10,000 - 15,000 COP（哥伦比亚比索），价格可能随季节调整。建议携带现金，因为附近可能没有刷卡设备。"
        },
        {
          question: "可以在池子里游泳吗？",
          answer: "不可以。尽管水看起来非常诱人，但这里是绝对禁止下水游泳的。因为水中重金属和矿物质浓度过高，对人体皮肤有毒害作用。它纯粹是一个\"视觉系\"景点。不过你可以在安全区域欣赏美景和拍照。"
        },
      ],
    },
    footer: {
      text: "© 2026 Pozos Azules 旅行指南 ·保留所有权利。",
      made: "本网站是一个独立的第三方旅游资讯项目。我们与当地政府或其他官方机构没有任何关联。为探索者而制",
      linksTitle: "相关链接",
      links: [
        { name: "莱瓦镇市政厅", url: "https://www.villadeleyva-boyaca.gov.co/" },
        { name: "博亚卡省政府", url: "https://www.boyaca.gov.co/" },
        { name: "哥伦比亚旅游局莱瓦镇专页", url: "https://colombia.travel/zh/villa-de-leyva" },
        { name: "哥伦比亚古生物研究中心", url: "https://cipaleo.com/" },
        { name: "哥伦比亚国家旅游局官方门户", url: "https://colombia.travel/es" },
        { name: "哥伦比亚国家移民局", url: "https://www.migracioncolombia.gov.co/" },
      ],
    },
  },
  en: {
    nav: {
      about: "About",
      visiting: "Experience",
      transportation: "Transportation",
      history: "History & Science",
      location: "Location",
      tips: "Tips",
    },
    hero: {
      tagline: "Colombia's Desert Emerald · 60-Hectare Natural & Artificial Color Wonder",
      title: "Pozos Azules",
      subtitle: "Blue-Green Pools · Color Magic",
      cta: "Plan Your Visit",
    },
    rating: {
      label: "Visitor Rating",
      reviews: "reviews",
      source: "Google Reviews",
    },
    about: {
      title: "About Pozos Azules",
      p1: "Pozos Azules (Blue Pools) is located just outside Villa de Leyva, a famous heritage town in Colombia. It is a private initiative project aimed at supporting tourism development in the region, combining ecological protection with viewing value. Within the vast 60-hectare park, set against the semi-arid jungle and yellow sand interwoven Andean landscape, there are 7 intensely saturated blue-green deep pools.",
      p2: "This strong visual contrast of 'desert oasis' makes it not only suitable for walking exploration, but also an excellent shooting location for photographers and geology enthusiasts. Away from the city noise, it showcases a unique color wonder where nature and artificiality intertwine.",
      highlights: {
        title: "Highlights",
        items: [
          "60-hectare natural & artificial color wonder",
          "7 blue-green deep pools",
          "Semi-arid Andean landscape",
          "Excellent photography location",
          "Daytime color tour & night stargazing",
        ],
      },
      management: {
        title: "Management",
        content: "Pozos Azules is a private initiative project aimed at supporting tourism development in the region. Entrance fees are mainly used to maintain the surrounding ecological environment, improve visitor facilities (such as trails, viewing platforms, restrooms, etc.), and support community development projects. The management is committed to protecting the natural environment while providing visitors with a safe and high-quality experience."
      },
    },
    visiting: {
      title: "Visiting Experience",
      hours: {
        title: "Opening Hours",
        content: "Open Daily",
        note: "Morning visits recommended for best light",
      },
      price: {
        title: "Admission",
        content: "20,000 COP / person (approx. $5 USD)",
        note: "Large tour groups need advance booking for discounts",
      },
      duration: {
        title: "Suggested Duration",
        content: "1.5 - 3 Hours",
        note: "Including hiking, horseback riding or photo time",
      },
      experience: {
        title: "Experience Options",
        content: "Daytime color tour, night stargazing, social & events",
        note: "Daytime for best blue-green colors, nighttime for stargazing",
      },
      bring: {
        title: "What to Bring",
        items: ["High-SPF sunscreen", "Sun hat", "Comfortable non-slip walking shoes", "Plenty of drinking water", "Camera", "Cash (for entry & snacks)"],
      },
    },
    transportation: {
      title: "Transportation Guide",
      fromAirport: {
        title: "Phase 1: From Airport to Town",
        content: "After landing at El Dorado International Airport (BOG) in Bogotá, the capital of Colombia, you need to go to the Bogotá Long-Distance Bus Terminal (Terminal de Transporte). Take a bus to Villa de Leyva, about 3-4 hours drive.",
      },
      selfDrive: {
        title: "Phase 2: From Town to Attraction",
        content: "The attraction is very close to the town center. By car or taxi: Take the road from Villa de Leyva to Santa Sofía, turn at the sign at the 2-kilometer mark; or drive along the Fossil Road (Ruta de los Fósiles) for about 3 kilometers.",
      },
      publicTransport: {
        title: "Special Transportation",
        content: "It is highly recommended to rent an ATV (all-terrain vehicle) or ride a horse through the desert to get there. This is the most classic and experience-rich way to arrive locally. You can also take a taxi, about 10-15 minutes drive.",
      },
      otherWays: {
        title: "Other Suggestions",
        content: "Some hotels provide shuttle service, it is recommended to consult in advance. You can also choose to ride a mountain bike from the town to the attraction for a better experience.",
      },
    },
    history: {
      title: "History & Science",
      p1: "Many visitors marvel at the natural beauty here, but Pozos Azules is actually a miracle created by artificial excavation and geochemical reactions. The first pit (originally as an agricultural water storage ditch) was built nearly 30 years ago. Until the late 20th century, 7 pits were built in the area.",
      p2: "These pools did not turn blue immediately. When rainwater flows through the surrounding gullies, it dissolves high concentrations of minerals such as selenium, sulfur, and copper sulfate rich in the soil. The mineral-rich water converges in the pits, and under the refraction of sunlight, each deep pool takes about 5 years to gradually settle and evolve into the amazing bright blue or blue-green color today.",
      p3: "With the prosperity of Villa de Leyva's tourism industry, in 2000, this wonder that had completed its 'color transformation' was officially opened to the public, quickly becoming the most eye-catching ecological landmark in the area.",
    },
    location: {
      title: "Location & Directions",
      address: "JFJ3+9H Villa de Leyva, Boyacá, Colombia",
      mapHint: "Click map to open in Google Maps",
      openMaps: "Open in Google Maps",
    },
    contact: {
      title: "Contact",
      phone: "+57 312 5493486",
      phoneNote: "Call ahead to confirm availability",
    },
    tips: {
      title: "Practical Info & Safety Tips",
      items: [
        "⚠️ ABSOLUTELY NO SWIMMING: Although the pool water looks tempting, due to the extremely high concentration of minerals such as sulfur and selenium in the water, which are toxic and strongly irritating to human skin, swimming or touching the pool water is strictly prohibited.",
        "The dry season (Dec-Mar, Jul-Aug) offers the best experience — stable water levels and purest colors. It is recommended to go on sunny mornings for the best light reaction.",
        "After rain, the water quality may temporarily mix with mud and change color, so it is recommended to choose sunny days to go.",
        "The desert area has strong sunlight, please be sure to prepare high-SPF sunscreen, sun hat, comfortable non-slip walking shoes, and bring plenty of drinking water.",
        "No restaurants on site — eat in Villa de Leyva before heading out. Weekdays are much less crowded than weekends and holidays for a more peaceful visit.",
      ],
    },
    gallery: {
      title: "Photo Gallery",
      viewMore: "View More Photos on Google Maps",
    },
    reviews: {
      title: "Visitor Reviews",
      subtitle: "Real reviews from Google Maps",
      loadMore: "Load more reviews",
      viewMore: "View More Reviews on Google Maps",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about Pozos Azules",
      items: [
        {
          question: "Why is Pozos Azules so famous?",
          answer: "It has become a must-visit landmark for several core reasons:\n\n1. Extremely unusual turquoise color (and it changes!) These pools display an incredible bright blue or blue-green color. This isn't because the water is crystal clear, but because the soil is rich in extremely high concentrations of minerals (including sulfur, selenium, and copper sulfate). Light reaction: This color is most dazzling under direct sunlight (sunny days). If it's cloudy, the water surface turns dark green; if after heavy rain, it may even temporarily mix with mud and turn brown.\n\n2. Strong visual contrast of \"desert oasis\"\nThe landscape around Villa de Leyva is very special, belonging to a semi-arid desert area, with yellow sand, dry vegetation and pine trees interwoven. Against this backdrop that seems extremely water-scarce and monotonous in color, several pools of extremely saturated blue water suddenly appear, creating a strong visual impact that makes it highly viral on social media.\n\n3. Surprising \"artificial origin\"\nMany tourists think this is Mother Nature's handiwork, but actually they were originally manually excavated. About 30 years ago (1970s), local farmers dug these deep pits to collect rainwater for irrigation. Unexpectedly, over time, underground minerals kept seeping out and mixing with rainwater, ultimately \"accidentally\" forming today's peculiar landscape.\n\n4. Perfect surrounding tourism ecosystem\nIt's only about 3 kilometers from Villa de Leyva (one of Colombia's most famous colonial heritage towns). Because of the close distance and special landform, a very mature outdoor experience route has formed here: tourists usually don't go by bus, but ride horses, rent ATVs (all-terrain vehicles) or ride mountain bikes through the desert. This experience combined with western wilderness adventure greatly enhances the comprehensive attractiveness of the attraction.\n\nAn important reminder: Although the water looks very tempting, swimming is absolutely prohibited here. Because the concentration of heavy metals and minerals in the water is too high, it is toxic to human skin. It is purely a \"visual\" attraction."
        },
        {
          question: "When is the best time to visit?",
          answer: "The dry season (Dec-Mar, Jul-Aug) offers the best experience — lower water levels reveal the most vivid blue-green colors. Morning visits are recommended for the best light and to capture stunning photos. Weekdays are much less crowded than weekends and holidays for a more peaceful visit."
        },
        {
          question: "How to get to Pozos Azules?",
          answer: "From Villa de Leyva town center, you can take a taxi or join a local tour, about 15-20 minutes drive. You can also choose to ride a horse, rent an ATV (all-terrain vehicle) or ride a mountain bike through the desert for a better experience."
        },
        {
          question: "What is the admission price?",
          answer: "Approximately 10,000 - 15,000 COP (Colombian Pesos), prices may vary by season. It's recommended to bring cash as there may not be card facilities nearby."
        },
        {
          question: "Can you swim in the pools?",
          answer: "No. Although the water looks very tempting, swimming is absolutely prohibited here. Because the concentration of heavy metals and minerals in the water is too high, it is toxic to human skin. It is purely a \"visual\" attraction. However, you can enjoy the beautiful scenery and take photos in safe areas."
        },
      ],
    },
    footer: {
      text: "© 2026 Pozos Azules Travel Guide · All rights reserved.",
      made: "This website is an independent third-party travel information project. We have no affiliation with local government or other official institutions. Made for explorers",
      linksTitle: "Related Links",
      links: [
        { name: "Villa de Leyva City Hall", url: "https://www.villadeleyva-boyaca.gov.co/" },
        { name: "Boyacá Government", url: "https://www.boyaca.gov.co/" },
        { name: "Colombia Travel - Villa de Leyva", url: "https://colombia.travel/zh/villa-de-leyva" },
        { name: "Colombian Paleontology Research Center", url: "https://cipaleo.com/" },
        { name: "Colombia National Tourism Portal", url: "https://colombia.travel/es" },
        { name: "Colombian National Immigration", url: "https://www.migracioncolombia.gov.co/" },
      ],
    },
  },
  es: {
    nav: {
      about: "Acerca de",
      visiting: "Experiencia",
      transportation: "Transporte",
      history: "Historia y Ciencia",
      location: "Ubicación",
      tips: "Consejos",
    },
    hero: {
      tagline: "Esmeralda del Desierto de Colombia · 60 Hectáreas de Maravilla de Color Natural y Artificial",
      title: "Pozos Azules",
      subtitle: "Piscinas Azul-Verde · Magia de Color",
      cta: "Planifica tu Visita",
    },
    rating: {
      label: "Calificación",
      reviews: "reseñas",
      source: "Google Reviews",
    },
    about: {
      title: "Acerca de Pozos Azules",
      p1: "Pozos Azules (Piscinas Azules) se encuentra a las afueras de Villa de Leyva, un famoso pueblo patrimonial de Colombia. Es un proyecto de iniciativa privada destinado a apoyar el desarrollo turístico en la región, combinando protección ecológica con valor de observación. Dentro del vasto parque de 60 hectáreas, ambientado en el paisaje andino de matorral semiárido y arena amarilla entrelazada, hay 7 pozas profundas de color azul-verde intensamente saturado.",
      p2: "Este fuerte contraste visual de 'oasis del desierto' hace que no solo sea adecuado para caminatas de exploración, sino también una excelente ubicación para fotógrafos y entusiastas de la geología. Lejos del ruido de la ciudad, muestra una maravilla de color única donde la naturaleza y lo artificial se entrelazan.",
      highlights: {
        title: "Aspectos Destacados",
        items: [
          "60 hectáreas de maravilla de color natural y artificial",
          "7 pozas profundas azul-verde",
          "Paisaje andino semiárido",
          "Excelente ubicación para fotografía",
          "Tour de colores diurnos y observación de estrellas nocturnas",
        ],
      },
      management: {
        title: "Gestión",
        content: "Pozos Azules es un proyecto de iniciativa privada destinado a apoyar el desarrollo turístico en la región. Los ingresos por entrada se utilizan principalmente para mantener el entorno ecológico circundante, mejorar las instalaciones para visitantes (como senderos, miradores, baños, etc.) y apoyar proyectos de desarrollo comunitario. La gestión se compromete a proteger el medio ambiente natural mientras proporciona a los visitantes una experiencia segura y de alta calidad."
      },
    },
    visiting: {
      title: "Experiencia de Visita",
      hours: {
        title: "Horario",
        content: "Abierto todos los días",
        note: "Se recomienda visitar por la mañana para mejor luz",
      },
      price: {
        title: "Entrada",
        content: "20.000 COP / persona (aprox. $5 USD)",
        note: "Los grupos grandes de turistas necesitan reserva anticipada para obtener descuentos",
      },
      duration: {
        title: "Duración Sugerida",
        content: "1.5 - 3 Horas",
        note: "Incluyendo caminata, paseo a caballo o tiempo para fotos",
      },
      experience: {
        title: "Opciones de Experiencia",
        content: "Tour de colores diurno, observación de estrellas nocturna, social y eventos",
        note: "Diurno para los mejores colores azul-verde, nocturno para observación de estrellas",
      },
      bring: {
        title: "Qué Llevar",
        items: ["Protector solar de alto FPS", "Sombrero para el sol", "Zapatos cómodos antideslizantes para caminar", "Suficiente agua potable", "Cámara", "Efectivo (para entrada y snacks)"],
      },
    },
    transportation: {
      title: "Guía de Transporte",
      fromAirport: {
        title: "Fase 1: Del Aeropuerto al Pueblo",
        content: "Después de aterrizar en el Aeropuerto Internacional El Dorado (BOG) en Bogotá, la capital de Colombia, necesita ir primero a la Terminal de Autobuses de Larga Distancia de Bogotá (Terminal de Transporte). Tome un autobús a Villa de Leyva, aproximadamente 3-4 horas de viaje.",
      },
      selfDrive: {
        title: "Fase 2: Del Pueblo al Atractivo",
        content: "El atractivo está muy cerca del centro del pueblo. En auto o taxi: Tome la carretera de Villa de Leyva a Santa Sofía, gire en el letrero en la marca de 2 kilómetros; o conduzca a lo largo de la Ruta de los Fósiles (Ruta de los Fósiles) por aproximadamente 3 kilómetros.",
      },
      publicTransport: {
        title: "Transporte Especial",
        content: "Se recomienda encarecidamente alquilar un ATV (vehículo todo terreno) o montar a caballo a través del desierto para llegar allí. Esta es la forma más clásica y con mayor experiencia para llegar localmente. También puede tomar un taxi, aproximadamente 10-15 minutos en auto.",
      },
      otherWays: {
        title: "Otras Sugerencias",
        content: "Algunos hoteles proporcionan servicio de transporte, se recomienda consultar con anticipación. También puede elegir montar una bicicleta de montaña desde el pueblo al atractivo para una mejor experiencia.",
      },
    },
    history: {
      title: "Historia y Ciencia",
      p1: "Muchos visitantes se maravillan con la belleza natural aquí, pero Pozos Azules es actualmente un milagro creado por excavación artificial y reacciones geoquímicas. El primer pozo (originalmente como una zanja de almacenamiento de agua agrícola) fue construido hace casi 30 años. Hasta finales del siglo XX, se construyeron 7 pozos en el área.",
      p2: "Estas piscinas no se volvieron azules inmediatamente. Cuando el agua de lluvia fluye a través de las zanjas circundantes, disuelve altas concentraciones de minerales como selenio, azufre y sulfato de cobre ricos en el suelo. El agua rica en minerales converge en los pozos, y bajo la refracción de la luz solar, cada pozo profundo toma aproximadamente 5 años para asentarse gradualmente y evolucionar al impresionante color azul brillante o azul-verde de hoy.",
      p3: "Con la prosperidad de la industria turística de Villa de Leyva, en 2000, esta maravilla que había completado su 'transformación de color' fue oficialmente abierta al público, convirtiéndose rápidamente en el hito ecológico más destacado en el área.",
    },
    location: {
      title: "Ubicación y Cómo Llegar",
      address: "JFJ3+9H Villa de Leyva, Boyacá, Colombia",
      mapHint: "Haz clic en el mapa para abrir en Google Maps",
      openMaps: "Abrir en Google Maps",
    },
    contact: {
      title: "Contacto",
      phone: "+57 312 5493486",
      phoneNote: "Llama antes para confirmar disponibilidad",
    },
    tips: {
      title: "Información Práctica y Consejos de Seguridad",
      items: [
        "⚠️ ABSOLUTAMENTE NO NADAR: Aunque el agua de la piscina se ve tentadora, debido a la concentración extremadamente alta de minerales como azufre y selenio en el agua, que son tóxicos e irritantes fuertes para la piel humana, está estrictamente prohibido nadar o tocar el agua de la piscina.",
        "La temporada seca (dic-mar, jul-ago) ofrece la mejor experiencia: niveles de agua estables y colores más puros. Se recomienda ir en mañanas soleadas para la mejor reacción de luz.",
        "Después de la lluvia, la calidad del agua puede mezclarse temporalmente con barro y cambiar de color, por lo que se recomienda elegir días soleados para ir.",
        "El área desértica tiene luz solar fuerte, por favor asegúrese de preparar protector solar de alto FPS, sombrero para el sol, zapatos cómodos antideslizantes para caminar, y traiga suficiente agua potable.",
        "No hay restaurantes en el sitio — coma en Villa de Leyva antes de salir. Los días laborables son mucho menos concurridos que los fines de semana y festivos para una visita más tranquila.",
      ],
    },
    gallery: {
      title: "Galería de Fotos",
      viewMore: "Ver Más Fotos en Google Maps",
    },
    reviews: {
      title: "Reseñas de Visitantes",
      subtitle: "Reseñas reales de Google Maps",
      loadMore: "Ver más reseñas",
      viewMore: "Ver Más Reseñas en Google Maps",
    },
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "Todo lo que necesitas saber sobre Pozos Azules",
      items: [
        {
          question: "¿Por qué Pozos Azules es tan famoso?",
          answer: "Se ha convertido en un destino obligatorio por varias razones fundamentales:\n\n1. Color turquesa extremadamente inusual (¡y cambia!) Estas piscinas muestran un color azul brillante o azul-verdoso increíble. Esto no se debe a que el agua sea cristalina, sino porque el suelo es rico en concentraciones extremadamente altas de minerales (incluyendo azufre, selenio y sulfato de cobre). Reacción a la luz: Este color es más deslumbrante bajo luz solar directa (días soleados). Si está nublado, la superficie del agua se vuelve verde oscuro; si es después de fuertes lluvias, incluso puede mezclarse temporalmente con barro y volverse marrón.\n\n2. Fuerte contraste visual de \"oasis del desierto\"\nEl paisaje alrededor de Villa de Leyva es muy especial, pertenece a una zona semidesértica, con arena amarilla, vegetación seca y pinos entrelazados. Contra este fondo que parece extremadamente árido y monótono en color, aparecen repentinamente varias piscinas de agua azul extremadamente saturada, creando un fuerte impacto visual que lo hace muy viral en las redes sociales.\n\n3. Sorpresa de \"origen artificial\"\nMuchos turistas creen que esto es obra de la Madre Naturaleza, pero en realidad fueron excavadas manualmente originalmente. Hace unos 30 años (década de 1970), los agricultores locales cavaron estos pozos profundos para recolectar agua de lluvia para riego. Inesperadamente, con el tiempo, los minerales subterráneos siguieron filtrándose y mezclándose con el agua de lluvia, formando finalmente \"accidentalmente\" el paisaje peculiar de hoy.\n\n4. Ecosistema turístico circundante perfecto\nEstá a solo unos 3 kilómetros de Villa de Leyva (uno de los pueblos patrimoniales coloniales más famosos de Colombia). Debido a la cercanía y la forma especial del terreno, aquí se ha formado una ruta de experiencia al aire libre muy madura: los turistas generalmente no van en autobús, sino que montan a caballo, alquilan ATV (vehículos todo terreno) o montan bicicletas de montaña a través del desierto. Esta experiencia combinada con la aventura de la naturaleza occidental mejora enormemente el atractivo integral del sitio.\n\nUn recordatorio importante: Aunque el agua se ve muy tentadora, está estrictamente prohibido nadar aquí. Debido a que la concentración de metales pesados y minerales en el agua es demasiado alta, es tóxica para la piel humana. Es puramente un atractivo \"visual\"."
        },
        {
          question: "¿Cuál es el mejor momento para visitar?",
          answer: "La temporada seca (dic-mar, jul-ago) ofrece la mejor experiencia: niveles de agua más bajos revelan los colores azul-verdosos más vívidos. Se recomiendan las visitas matutinas para obtener la mejor luz y capturar fotos impresionantes. Los días laborables son mucho menos concurridos que los fines de semana y festivos para una visita más tranquila."
        },
        {
          question: "¿Cómo llegar a Pozos Azules?",
          answer: "Desde el centro del pueblo de Villa de Leyva, puedes tomar un taxi o unirte a un tour local, aproximadamente 15-20 minutos en auto. También puedes elegir montar a caballo, alquilar un ATV (vehículo todo terreno) o montar una bicicleta de montaña a través del desierto para una mejor experiencia."
        },
        {
          question: "¿Cuál es el precio de entrada?",
          answer: "Aproximadamente 10,000 - 15,000 COP (Pesos Colombianos), los precios pueden variar según la temporada. Se recomienda llevar efectivo ya que puede que no haya instalaciones para tarjetas cerca."
        },
        {
          question: "¿Se puede nadar en las piscinas?",
          answer: "No. Aunque el agua se ve muy tentadora, está estrictamente prohibido nadar aquí. Debido a que la concentración de metales pesados y minerales en el agua es demasiado alta, es tóxica para la piel humana. Es puramente un atractivo \"visual\". Sin embargo, puedes disfrutar del hermoso paisaje y tomar fotos en áreas seguras."
        },
      ],
    },
    footer: {
      text: "© 2026 Guía de Viaje Pozos Azules · Todos los derechos reservados.",
      made: "Este sitio web es un proyecto independiente de información turística de terceros. No tenemos afiliación con el gobierno local u otras instituciones oficiales. Hecho para exploradores",
      linksTitle: "Enlaces Relacionados",
      links: [
        { name: "Alcaldía de Villa de Leyva", url: "https://www.villadeleyva-boyaca.gov.co/" },
        { name: "Gobernación de Boyacá", url: "https://www.boyaca.gov.co/" },
        { name: "Colombia Travel - Villa de Leyva", url: "https://colombia.travel/zh/villa-de-leyva" },
        { name: "Centro de Investigación Paleontológica", url: "https://cipaleo.com/" },
        { name: "Portal Nacional de Turismo", url: "https://colombia.travel/es" },
        { name: "Migración Colombia", url: "https://www.migracioncolombia.gov.co/" },
      ],
    },
  },
};

export type LinkItem = { name: string; url: string };

export type FAQItem = { question: string; answer: string };

export type Translations = {
  nav: { about: string; visiting: string; transportation: string; history: string; location: string; tips: string };
  hero: { tagline: string; title: string; subtitle: string; cta: string };
  rating: { label: string; reviews: string; source: string };
  about: {
    title: string;
    p1: string;
    p2: string;
    highlights: { title: string; items: string[] };
    management: { title: string; content: string };
  };
  visiting: {
    title: string;
    hours: { title: string; content: string; note: string };
    price: { title: string; content: string; note: string };
    duration: { title: string; content: string; note: string };
    experience: { title: string; content: string; note: string };
    bring: { title: string; items: string[] };
  };
  transportation: {
    title: string;
    fromAirport: { title: string; content: string };
    selfDrive: { title: string; content: string };
    publicTransport: { title: string; content: string };
    otherWays: { title: string; content: string };
  };
  history: { title: string; p1: string; p2: string; p3: string };
  location: { title: string; address: string; mapHint: string; openMaps: string };
  contact: { title: string; phone: string; phoneNote: string };
  tips: { title: string; items: string[] };
  gallery: { title: string; viewMore: string };
  reviews: { title: string; subtitle: string; loadMore: string; viewMore: string };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  footer: { text: string; made: string; linksTitle: string; links: LinkItem[] };
};
