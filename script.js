(function () {
  "use strict";

  const productImages = {
    activatedCarbon: "assets/product-activated-carbon.jpg",
    carbonFiber: "assets/product-carbon-fiber.jpg",
    filter: "assets/product-filter.jpg"
  };

  const originalProductCategories = [
    "Activated carbon for special application",
    "Pelletized activated carbon from coal for desulfurization and denitrification",
    "Activated Carbon Filter"
  ];

  const originalProductItems = [
    ["Activated carbon for special application"],
    ["Pellelized activated carbon from coal for desulfurization and denitrification 2.0 mm"],
    ["Pellelized activated carbon from coal for desulfurization and denitrification 4.0 mm"],
    ["Ligneous pelletized activated carbon 4.0mm for gas purification"],
    ["Ligneous pelletized activated carbon 3.0mm for gas purification"],
    ["Activated Carbon Filter"],
    ["Granular activated carbon from coal for desulfuration 4.75-9.5mm"],
    ["Granular activated carbon from coal for desulfuration 2.36-4.75mm"],
    ["Activated Carbon Fiber"],
    ["Impregnated Activated Carbon"],
    ["Acid Washing Activated Carbon"],
    ["Activated carbon for purification with catalyst carrier"],
    ["Activated carbon for dehydrating glycerin"],
    ["Citric acid purification activated carbon"],
    ["Activated carbon for purifying oil and fat"],
    ["Activated carbon for sugar"],
    ["Activated carbon for food additive"],
    ["Activated carbon for sugar with high molasses value"],
    ["Activated carbon for glutamate purification"],
    ["Activated carbon for Biochemical"],
    ["activated carbon for refining with alcohol"],
    ["Wooden columnar activated carbon for gas purification"],
    ["Impregnated Activated Carbon for desulfurization"],
    ["Wooden columnar activated carbon for solvent recovery"],
    ["Activated carbon for refined desulfurization of alcohol"],
    ["activated carbon for Tannic acid"],
    ["activated carbon for  Oil refining"],
    ["Coconut shell column activated carbon"]
  ];

  const footerProductLabels = {
    en: [
      "Activated carbon for special application",
      "Pelletized activated carbon from coal for desulfurization and denitrification 2.0 mm",
      "Pelletized activated carbon from coal for desulfurization and denitrification 4.0 mm",
      "Ligneous pelletized activated carbon 4.0mm for gas purification",
      "Ligneous pelletized activated carbon 3.0mm for gas purification",
      "Activated Carbon Filter"
    ],
    zh: [
      "特殊用途活性炭",
      "煤质柱状脱硫脱硝活性炭 2.0 mm",
      "煤质柱状脱硫脱硝活性炭 4.0 mm",
      "木质柱状气体净化活性炭 4.0 mm",
      "木质柱状气体净化活性炭 3.0 mm",
      "活性炭过滤器"
    ],
    ja: [
      "特殊用途活性炭",
      "石炭系ペレット状脱硫脱硝活性炭 2.0 mm",
      "石炭系ペレット状脱硫脱硝活性炭 4.0 mm",
      "木質ペレット状ガス浄化用活性炭 4.0 mm",
      "木質ペレット状ガス浄化用活性炭 3.0 mm",
      "活性炭フィルター"
    ],
    ko: [
      "특수 용도 활성탄",
      "석탄계 펠릿 탈황·탈질 활성탄 2.0 mm",
      "석탄계 펠릿 탈황·탈질 활성탄 4.0 mm",
      "목질 펠릿 가스 정화용 활성탄 4.0 mm",
      "목질 펠릿 가스 정화용 활성탄 3.0 mm",
      "활성탄 필터"
    ]
  };

  const localizedProductCategories = {
    en: originalProductCategories,
    zh: [
      "特殊用途活性炭",
      "煤质柱状脱硫脱硝活性炭",
      "活性炭过滤器"
    ],
    ja: [
      "特殊用途活性炭",
      "石炭系ペレット状脱硫脱硝活性炭",
      "活性炭フィルター"
    ],
    ko: [
      "특수 용도 활성탄",
      "석탄계 펠릿 탈황·탈질 활성탄",
      "활성탄 필터"
    ]
  };

  const localizedProductItems = {
    en: originalProductItems,
    zh: [
      ["特殊用途活性炭"],
      ["煤质柱状脱硫脱硝活性炭 2.0 mm"],
      ["煤质柱状脱硫脱硝活性炭 4.0 mm"],
      ["木质柱状气体净化活性炭 4.0 mm"],
      ["木质柱状气体净化活性炭 3.0 mm"],
      ["活性炭过滤器"],
      ["煤质颗粒脱硫活性炭 4.75-9.5 mm"],
      ["煤质颗粒脱硫活性炭 2.36-4.75 mm"],
      ["活性炭纤维"],
      ["浸渍活性炭"],
      ["酸洗活性炭"],
      ["催化剂载体净化用活性炭"],
      ["甘油脱水用活性炭"],
      ["柠檬酸净化用活性炭"],
      ["油脂净化用活性炭"],
      ["糖用活性炭"],
      ["食品添加剂用活性炭"],
      ["高糖蜜值糖用活性炭"],
      ["谷氨酸净化用活性炭"],
      ["生化用活性炭"],
      ["酒精精制用活性炭"],
      ["木质柱状气体净化活性炭"],
      ["脱硫用浸渍活性炭"],
      ["木质柱状溶剂回收活性炭"],
      ["酒精精脱硫用活性炭"],
      ["单宁酸用活性炭"],
      ["油脂精制用活性炭"],
      ["椰壳柱状活性炭"]
    ],
    ja: [
      ["特殊用途活性炭"],
      ["石炭系ペレット状脱硫脱硝活性炭 2.0 mm"],
      ["石炭系ペレット状脱硫脱硝活性炭 4.0 mm"],
      ["木質ペレット状ガス浄化用活性炭 4.0 mm"],
      ["木質ペレット状ガス浄化用活性炭 3.0 mm"],
      ["活性炭フィルター"],
      ["石炭系粒状脱硫活性炭 4.75-9.5 mm"],
      ["石炭系粒状脱硫活性炭 2.36-4.75 mm"],
      ["活性炭繊維"],
      ["添着活性炭"],
      ["酸洗浄活性炭"],
      ["触媒担体精製用活性炭"],
      ["グリセリン脱水用活性炭"],
      ["クエン酸精製用活性炭"],
      ["油脂精製用活性炭"],
      ["糖用活性炭"],
      ["食品添加物用活性炭"],
      ["高糖蜜価糖用活性炭"],
      ["グルタミン酸精製用活性炭"],
      ["生化学用活性炭"],
      ["アルコール精製用活性炭"],
      ["木質柱状ガス浄化用活性炭"],
      ["脱硫用添着活性炭"],
      ["木質柱状溶剤回収用活性炭"],
      ["アルコール精密脱硫用活性炭"],
      ["タンニン酸用活性炭"],
      ["油精製用活性炭"],
      ["ヤシ殻柱状活性炭"]
    ],
    ko: [
      ["특수 용도 활성탄"],
      ["석탄계 펠릿 탈황·탈질 활성탄 2.0 mm"],
      ["석탄계 펠릿 탈황·탈질 활성탄 4.0 mm"],
      ["목질 펠릿 가스 정화용 활성탄 4.0 mm"],
      ["목질 펠릿 가스 정화용 활성탄 3.0 mm"],
      ["활성탄 필터"],
      ["석탄계 입상 탈황 활성탄 4.75-9.5 mm"],
      ["석탄계 입상 탈황 활성탄 2.36-4.75 mm"],
      ["활성탄 섬유"],
      ["첨착 활성탄"],
      ["산세척 활성탄"],
      ["촉매 담체 정제용 활성탄"],
      ["글리세린 탈수용 활성탄"],
      ["구연산 정제용 활성탄"],
      ["유지 정제용 활성탄"],
      ["당용 활성탄"],
      ["식품 첨가제용 활성탄"],
      ["고당밀가 당용 활성탄"],
      ["글루탐산 정제용 활성탄"],
      ["생화학용 활성탄"],
      ["알코올 정제용 활성탄"],
      ["목질 원주형 가스 정화용 활성탄"],
      ["탈황용 첨착 활성탄"],
      ["목질 원주형 용제 회수용 활성탄"],
      ["알코올 정밀 탈황용 활성탄"],
      ["탄닌산용 활성탄"],
      ["유지 정제용 활성탄"],
      ["야자각 원주형 활성탄"]
    ]
  };

  const translations = {
    en: {
      brandName: "Shanghai Shengjin Enterprise Co., Ltd.",
      languageLabel: "Language",
      nav: {
        home: "Home",
        company: "Company Profile",
        products: "Products",
        catalog: "E-Catalog",
        applications: "Applications",
        certificate: "Certificate",
        contact: "Contact Us"
      },
      hero: {
        eyebrow: "Industrial filtration materials",
        title: "Reliable Activated Carbon Solutions for Global Industrial Applications",
        subtitle: "We provide customized activated carbon products for filtration, purification, environmental protection, and industrial treatment applications.",
        productsBtn: "View Products",
        contactBtn: "Contact Us",
        card1Title: "Stable Supply",
        card1Text: "Export-ready industrial grades",
        card2Title: "Custom Specs",
        card2Text: "Particle size, iodine value, ash and moisture"
      },
      about: {
        kicker: "Company Profile",
        title: "Shanghai Shengjin Enterprise Co., Ltd.",
        p1: "Shanghai Shengjin Enterprise Co., Ltd. is mainly engaged in developing, producing, and selling activated carbon products.",
        p2: "Our company owns advanced technology, sophisticated equipment, a professional technical team, modern management and qualified testing methods.",
        p3: "The products are applied in food, medicine, water treatment, chemical industry and environmental protection fields.",
        metric1: "Multi-industry",
        metric1Text: "Solutions for environmental and process applications",
        metric2: "Customizable",
        metric2Text: "Grades, particle sizes and packing options",
        metric3: "Export-focused",
        metric3Text: "Documentation support for global buyers"
      },
      products: {
        kicker: "Products",
        title: "Product Categories",
        intro: "",
        applicationLabel: "Applications",
        action: "Send Inquiry",
        breadcrumbHome: "Home",
        breadcrumbProducts: "Products",
        categoryTitle: "CATEGORY",
        centerTitle: "PRODUCTS CENTER",
        searchPlaceholder: "Search products",
        searchButton: "Search",
        categories: [
          "Activated carbon for special application",
          "Pelletized activated carbon from coal for desulfurization and denitrification",
          "Activated Carbon Filter",
          "Granular activated carbon from coal for desulfuration",
          "Activated Carbon Fiber",
          "Impregnated Activated Carbon",
          "Acid Washing Activated Carbon"
        ],
        note1Title: "Packing Options",
        note1Text: "20 kg bags, 500 kg bags, 1000 kg bags or customized packing by request.",
        note2Title: "Testing Standard",
        note2Text: "Product testing can be arranged according to GB/T 12496 and ASTM methods.",
        note3Title: "Custom Specification",
        note3Text: "Specifications can be adjusted according to customer requirements and application conditions.",
        items: [
          ["Activated Carbon for Special Application", "Special grades developed for catalytic carrier, supercapacitor, glycerol, citric acid, alcohol, food additive, oil refining, tannic acid, biochemical and glutamate purification uses.", "Fine chemical purification, food additives, catalyst carrier, biochemical processing"],
          ["Pelletized Activated Carbon from Coal for Desulfurization and Denitrification", "Coal-based cylindrical carbon for gas purification, supplied in common 2.0 mm and 4.0 mm pellet specifications for stable bed operation.", "Desulfurization, denitrification, gas purification, exhaust treatment"],
          ["Ligneous Pelletized Activated Carbon for Gas Purification", "Wood-based pelletized activated carbon in 3.0 mm and 4.0 mm grades for continuous gas stream purification.", "Gas purification, odor control, industrial air treatment"],
          ["Activated Carbon Filter", "Activated carbon filter products for purification equipment, replacement filter assemblies and filtration system projects.", "Water filters, air filters, filtration equipment"],
          ["Granular Activated Carbon from Coal for Desulfuration", "Coal-based granular activated carbon designed for sulfur removal and fixed-bed adsorption operation.", "Desulfuration, industrial gas treatment, adsorption columns"],
          ["Activated Carbon Fiber", "High-surface-area fiber material with fast adsorption speed and compact installation advantages.", "Solvent recovery, precision filtration, air purification"],
          ["Impregnated Activated Carbon", "Activated carbon impregnated with functional agents for targeted removal performance in demanding gas treatment conditions.", "Hydrogen sulfide control, odor removal, special gas purification"],
          ["Acid Washing Activated Carbon", "Acid-washed activated carbon with reduced ash and improved cleanliness for sensitive purification processes.", "Food processing, beverage purification, high-purity liquid treatment"],
          ["Activated Carbon for Purification with Catalyst Carrier", "Activated carbon grade suitable as a catalyst carrier and purification medium where pore structure and mechanical strength are important.", "Catalyst carrier, chemical purification, process treatment"],
          ["Activated Carbon for Dehydrating Glycerin", "Special activated carbon for glycerol method decolorization and dehydration-related purification steps.", "Glycerin refining, decolorization, chemical processing"],
          ["Activated Carbon for Citric Acid Purification", "Purification grade activated carbon for citric acid processing and removal of color bodies or organic impurities.", "Citric acid purification, food ingredient processing"],
          ["Activated Carbon for Oil and Fat Refining", "Activated carbon for refining edible oils, fats and related process streams where color and trace impurities need control.", "Oil refining, fat refining, edible oil processing"],
          ["Activated Carbon for Sugar", "Activated carbon for sugar liquid purification, color removal and quality control in sugar-related production.", "Sugar refining, syrup decolorization, food processing"],
          ["Activated Carbon for Food Additive", "Food-related purification grade activated carbon intended for additive and ingredient processing applications.", "Food additives, ingredient purification, color removal"],
          ["Activated Carbon for Glutamate Purification", "Activated carbon grade used for glutamate and monosodium glutamate purification processes.", "Glutamate purification, MSG production, fermentation processing"],
          ["Activated Carbon for Biochemical", "Activated carbon for biochemical production streams, fermentation liquids and purification workflows.", "Biochemical processing, fermentation, liquid purification"],
          ["Impregnated Activated Carbon for Desulfurization", "Impregnated carbon configured for enhanced desulfurization performance in gas-phase treatment systems.", "Desulfurization, gas purification, emission control"],
          ["Activated Carbon for Alcohol Desulfurization", "Activated carbon designed for sulfur removal in alcohol-related purification and refining applications.", "Alcohol desulfurization, solvent purification"],
          ["Activated Carbon for Tannic Acid", "Special activated carbon for tannic acid production and purification processes.", "Tannic acid purification, fine chemical processing"],
          ["Coconut Shell Column Activated Carbon", "Column-shaped activated carbon based on coconut shell raw material with high hardness and adsorption performance.", "Gas purification, water treatment, solvent recovery"]
        ]
      },
      applications: {
        kicker: "Applications",
        title: "Applications",
        intro: "Activated carbon products are used in purification, filtration and treatment applications.",
        items: [
          ["Food and additive purification", "Activated carbon for sugar, citric acid, glutamate, edible oil and food additive purification."],
          ["Gas purification", "Pelletized and granular activated carbon for desulfurization, denitrification and gas purification."],
          ["Water treatment", "Activated carbon filter and carbon media for water purification systems."],
          ["Solvent recovery", "Wooden columnar activated carbon and carbon fiber for solvent recovery and adsorption."]
        ]
      },
      certificate: {
        kicker: "Certificate",
        title: "Certificate of honor",
        intro: "Enterprise certificates and quality documentation.",
        item1: "ISO9001",
        item2: "SGS",
        item3: "Quality Management System Certificate",
        item4: "Certificate of honor"
      },
      catalog: {
        kicker: "E-Catalog",
        title: "Download",
        intro: "Download the PDF catalogue for activated carbon product information.",
        download: "Download"
      },
      contact: {
        kicker: "Contact Us",
        title: "Send your activated carbon inquiry",
        intro: "Share the product type, application, specification target and estimated quantity. Our team will prepare a response for your procurement review.",
        companyLabel: "Company Name",
        addressLabel: "Address",
        address: "C158, No. 1501 Zhangyang Road, Pudong New Area, Shanghai, China",
        emailLabel: "Email",
        phoneLabel: "Tel",
        faxLabel: "Fax",
        personLabel: "Contact Person",
        personValue: "Mr. Zhao"
      },
      form: {
        name: "Name",
        company: "Company",
        email: "Email",
        country: "Country / Region",
        interest: "Product Interest",
        message: "Message",
        submit: "Submit Inquiry",
        success: "Thank you. Your inquiry has been prepared. Please contact us by email or WhatsApp.",
        required: "Please complete name, valid email and message before submitting."
      },
      footer: {
        brief: "A B2B supplier of activated carbon and filtration materials for industrial purification and environmental treatment projects.",
        quickLinks: "Quick Links",
        categories: "Product Categories",
        contact: "Contact",
        copyright: "© 2026 Shanghai Shengjin Enterprise Co., Ltd. All rights reserved."
      }
    },
    zh: {
      brandName: "上海晟锦实业有限公司",
      languageLabel: "语言",
      nav: {
        home: "首页",
        company: "公司概要",
        products: "产品中心",
        catalog: "电子目录",
        applications: "应用领域",
        certificate: "企业资质",
        contact: "联系我们"
      },
      hero: {
        eyebrow: "工业过滤材料",
        title: "面向全球工业应用的可靠活性炭解决方案",
        subtitle: "我们提供用于过滤、净化、环保处理和工业工艺处理的定制化活性炭产品。",
        productsBtn: "查看产品",
        contactBtn: "联系我们",
        card1Title: "稳定供应",
        card1Text: "适合出口项目的工业级产品",
        card2Title: "规格定制",
        card2Text: "粒径、碘值、灰分和水分等参数可沟通"
      },
      about: {
        kicker: "公司概要",
        title: "上海晟锦实业有限公司",
        p1: "上海晟锦实业有限公司主要从事活性炭产品的开发、生产和销售。",
        p2: "公司拥有先进技术、精良设备、专业技术团队、现代化管理和合格的检测方法。",
        p3: "产品应用于食品、医药、水处理、化工和环境保护等领域。",
        metric1: "多行业应用",
        metric1Text: "覆盖环保处理和工业工艺应用",
        metric2: "支持定制",
        metric2Text: "等级、粒径和包装方案可协商",
        metric3: "面向出口",
        metric3Text: "为全球买家提供单证支持"
      },
      products: {
        kicker: "产品中心",
        title: "产品分类",
        intro: "",
        applicationLabel: "应用场景",
        action: "发送询盘",
        breadcrumbHome: "首页",
        breadcrumbProducts: "产品中心",
        categoryTitle: "产品分类",
        centerTitle: "产品中心",
        searchPlaceholder: "搜索产品",
        searchButton: "搜索",
        categories: [
          "Activated carbon for special application",
          "Pelletized activated carbon from coal for desulfurization and denitrification",
          "Activated Carbon Filter",
          "Granular activated carbon from coal for desulfuration",
          "Activated Carbon Fiber",
          "Impregnated Activated Carbon",
          "Acid Washing Activated Carbon"
        ],
        note1Title: "包装选项",
        note1Text: "可提供 20 kg 袋、500 kg 袋、1000 kg 袋或按客户要求定制包装。",
        note2Title: "检测标准",
        note2Text: "产品检测可按 GB/T 12496 和 ASTM 方法安排。",
        note3Title: "规格定制",
        note3Text: "规格可根据客户要求和实际应用工况进行调整。",
        items: [
          ["特殊用途活性炭", "覆盖催化剂载体、超级电容、甘油法脱色、柠檬酸净化、酒类脱硫、食品添加剂、油脂精制、单宁酸、生化和谷氨酸净化等用途。", "精细化工净化、食品添加剂、催化剂载体、生化处理"],
          ["煤质柱状脱硫脱硝活性炭", "煤质圆柱状活性炭，常见 2.0 mm、4.0 mm 规格，适合稳定床层运行。", "脱硫、脱硝、气体净化、废气处理"],
          ["木质柱状气体净化活性炭", "木质柱状活性炭，常见 3.0 mm、4.0 mm 规格，用于连续气流净化。", "气体净化、异味控制、工业空气处理"],
          ["活性炭过滤器", "用于净化设备、替换滤芯组件和过滤系统项目的活性炭过滤产品。", "水过滤、空气过滤、过滤设备"],
          ["煤质颗粒脱硫活性炭", "煤质颗粒活性炭，适用于脱硫和固定床吸附运行。", "脱硫、工业气体处理、吸附塔"],
          ["活性炭纤维", "高比表面积纤维材料，吸附速度快，适合紧凑型安装。", "溶剂回收、精密过滤、空气净化"],
          ["浸渍活性炭", "经功能助剂浸渍处理，用于要求更高的定向气体净化工况。", "硫化氢控制、异味去除、特殊气体净化"],
          ["酸洗活性炭", "酸洗处理降低灰分并提升洁净度，适合敏感净化流程。", "食品加工、饮料净化、高纯液体处理"],
          ["催化剂载体净化用活性炭", "适合作为催化剂载体和净化介质，重视孔结构与机械强度。", "催化剂载体、化工净化、工艺处理"],
          ["甘油脱水用活性炭", "用于甘油法脱色及相关脱水、净化步骤的专用活性炭。", "甘油精制、脱色、化工处理"],
          ["柠檬酸净化用活性炭", "用于柠檬酸生产净化，帮助去除色素和有机杂质。", "柠檬酸净化、食品配料加工"],
          ["油脂精制用活性炭", "用于食用油、油脂及相关工艺液的精制，控制色度和微量杂质。", "油脂精制、食用油加工"],
          ["糖用活性炭", "用于糖液净化、脱色和糖品生产中的质量控制。", "制糖、糖浆脱色、食品加工"],
          ["食品添加剂用活性炭", "用于食品添加剂和食品配料加工的净化级活性炭。", "食品添加剂、配料净化、脱色"],
          ["谷氨酸净化用活性炭", "用于谷氨酸和味精生产净化工艺的活性炭产品。", "谷氨酸净化、味精生产、发酵处理"],
          ["生化用活性炭", "用于生化生产液、发酵液和净化流程的活性炭。", "生化处理、发酵、液体净化"],
          ["脱硫用浸渍活性炭", "面向气相处理系统增强脱硫性能的浸渍活性炭。", "脱硫、气体净化、排放控制"],
          ["酒类脱硫活性炭", "用于酒类相关净化与精制工艺中脱硫处理的活性炭。", "酒类脱硫、溶剂净化"],
          ["单宁酸用活性炭", "用于单宁酸生产和净化流程的专用活性炭。", "单宁酸净化、精细化工处理"],
          ["椰壳柱状活性炭", "以椰壳为原料的柱状活性炭，硬度高，吸附性能好。", "气体净化、水处理、溶剂回收"]
        ]
      },
      applications: {
        kicker: "应用领域",
        title: "应用领域",
        intro: "活性炭产品用于净化、过滤和处理等应用场景。",
        items: [
          ["食品和添加剂净化", "用于糖、柠檬酸、谷氨酸、食用油和食品添加剂净化。"],
          ["气体净化", "柱状和颗粒活性炭用于脱硫、脱硝和气体净化。"],
          ["水处理", "活性炭过滤器和炭材料用于水净化系统。"],
          ["溶剂回收", "木质柱状活性炭和活性炭纤维用于溶剂回收与吸附。"]
        ]
      },
      certificate: {
        kicker: "企业资质",
        title: "荣誉证书",
        intro: "企业证书和质量文件。",
        item1: "ISO9001",
        item2: "SGS",
        item3: "质量管理体系证书",
        item4: "荣誉证书"
      },
      catalog: {
        kicker: "电子目录",
        title: "下载",
        intro: "下载电子版目录，查看活性炭产品信息。",
        download: "下载"
      },
      contact: {
        kicker: "联系我们",
        title: "发送您的活性炭询盘",
        intro: "请提供产品类型、应用场景、目标规格和预计数量。我们将为您的采购评估准备回复。",
        companyLabel: "公司名称",
        addressLabel: "地址",
        address: "中国上海市浦东新区张杨路1501号C158",
        emailLabel: "邮箱",
        phoneLabel: "电话",
        faxLabel: "传真",
        personLabel: "联系人",
        personValue: "赵先生"
      },
      form: {
        name: "姓名",
        company: "公司",
        email: "邮箱",
        country: "国家 / 地区",
        interest: "感兴趣产品",
        message: "留言",
        submit: "提交询盘",
        success: "谢谢。您的询盘已准备好，请通过邮箱或 WhatsApp 联系我们。",
        required: "提交前请填写姓名、有效邮箱和留言。"
      },
      footer: {
        brief: "面向工业净化和环保处理项目的活性炭及过滤材料供应商。",
        quickLinks: "快速链接",
        categories: "产品分类",
        contact: "联系方式",
        copyright: "© 2026 上海晟锦实业有限公司. All rights reserved."
      }
    },
    ja: {
      brandName: "上海晟錦実業有限公司",
      languageLabel: "言語",
      nav: {
        home: "ホーム",
        company: "会社概要",
        products: "製品",
        catalog: "電子カタログ",
        applications: "用途",
        certificate: "証明書",
        contact: "お問い合わせ"
      },
      hero: {
        eyebrow: "産業用ろ過材料",
        title: "グローバルな産業用途に対応する信頼性の高い活性炭ソリューション",
        subtitle: "ろ過、浄化、環境保護、産業処理用途向けに、カスタマイズ可能な活性炭製品を提供します。",
        productsBtn: "製品を見る",
        contactBtn: "お問い合わせ",
        card1Title: "安定供給",
        card1Text: "輸出案件に対応する産業グレード",
        card2Title: "仕様対応",
        card2Text: "粒度、ヨウ素価、灰分、水分などを相談可能"
      },
      about: {
        kicker: "会社概要",
        title: "上海晟錦実業有限公司",
        p1: "上海晟錦実業有限公司は、主に活性炭製品の開発、生産、販売を行っています。",
        p2: "当社は先進技術、精密設備、専門技術チーム、現代的な管理体制、適切な試験方法を備えています。",
        p3: "製品は食品、医薬、水処理、化学工業、環境保護分野で使用されています。",
        metric1: "多分野対応",
        metric1Text: "環境処理とプロセス用途に対応",
        metric2: "カスタム対応",
        metric2Text: "グレード、粒度、包装条件を相談可能",
        metric3: "輸出重視",
        metric3Text: "グローバルバイヤー向け書類サポート"
      },
      products: {
        kicker: "製品",
        title: "製品カテゴリー",
        intro: "",
        applicationLabel: "用途",
        action: "問い合わせる",
        breadcrumbHome: "ホーム",
        breadcrumbProducts: "製品",
        categoryTitle: "カテゴリー",
        centerTitle: "製品センター",
        searchPlaceholder: "製品検索",
        searchButton: "検索",
        categories: [
          "Activated carbon for special application",
          "Pelletized activated carbon from coal for desulfurization and denitrification",
          "Activated Carbon Filter",
          "Granular activated carbon from coal for desulfuration",
          "Activated Carbon Fiber",
          "Impregnated Activated Carbon",
          "Acid Washing Activated Carbon"
        ],
        note1Title: "包装オプション",
        note1Text: "20 kg 袋、500 kg 袋、1000 kg 袋、またはご要望に応じた包装に対応します。",
        note2Title: "試験基準",
        note2Text: "GB/T 12496 および ASTM 方法に基づく製品試験に対応できます。",
        note3Title: "仕様調整",
        note3Text: "お客様の要求と用途条件に応じて仕様を調整できます。",
        items: [
          ["特殊用途活性炭", "触媒担体、スーパーキャパシタ、グリセリン脱色、クエン酸精製、アルコール脱硫、食品添加物、油脂精製、タンニン酸、生化学、グルタミン酸精製などに対応します。", "精密化学精製、食品添加物、触媒担体、生化学処理"],
          ["石炭系ペレット状脱硫脱硝活性炭", "石炭系円柱状活性炭で、一般的な 2.0 mm、4.0 mm 仕様に対応し、安定した充填層運転に適しています。", "脱硫、脱硝、ガス浄化、排ガス処理"],
          ["木質ペレット状ガス浄化用活性炭", "木質ペレット状活性炭で、3.0 mm、4.0 mm グレードを中心に連続ガス浄化に使用されます。", "ガス浄化、臭気対策、産業空気処理"],
          ["活性炭フィルター", "浄化装置、交換用フィルター部材、ろ過システム案件向けの活性炭フィルター製品です。", "水フィルター、空気フィルター、ろ過設備"],
          ["石炭系粒状脱硫活性炭", "脱硫および固定床吸着運転に適した石炭系粒状活性炭です。", "脱硫、産業ガス処理、吸着塔"],
          ["活性炭繊維", "高比表面積の繊維材料で、吸着速度が速く、省スペース設置に適しています。", "溶剤回収、精密ろ過、空気浄化"],
          ["添着活性炭", "機能性薬剤を添着し、高度な選択除去が求められるガス処理条件に対応します。", "硫化水素対策、臭気除去、特殊ガス浄化"],
          ["酸洗浄活性炭", "酸洗浄により灰分を低減し、清浄性を高めたグレードです。", "食品加工、飲料浄化、高純度液体処理"],
          ["触媒担体精製用活性炭", "孔構造と機械強度が重視される触媒担体および精製媒体向けグレードです。", "触媒担体、化学精製、プロセス処理"],
          ["グリセリン脱水用活性炭", "グリセリン法脱色および関連する脱水・精製工程向けの特殊活性炭です。", "グリセリン精製、脱色、化学処理"],
          ["クエン酸精製用活性炭", "クエン酸製造工程で色素や有機不純物の除去を支援する精製グレードです。", "クエン酸精製、食品原料加工"],
          ["油脂精製用活性炭", "食用油、油脂および関連工程液の色度や微量不純物を管理するための活性炭です。", "油脂精製、食用油加工"],
          ["糖用活性炭", "糖液の精製、脱色、糖製品生産における品質管理に使用されます。", "製糖、シロップ脱色、食品加工"],
          ["食品添加物用活性炭", "食品添加物および食品原料加工向けの精製グレード活性炭です。", "食品添加物、原料精製、脱色"],
          ["グルタミン酸精製用活性炭", "グルタミン酸および MSG 製造の精製工程に使用される活性炭です。", "グルタミン酸精製、MSG 製造、発酵処理"],
          ["生化学用活性炭", "生化学製造液、発酵液、精製工程に使用される活性炭です。", "生化学処理、発酵、液体精製"],
          ["脱硫用添着活性炭", "ガス処理システムで脱硫性能を高めるための添着活性炭です。", "脱硫、ガス浄化、排出管理"],
          ["アルコール脱硫用活性炭", "アルコール関連の精製・処理工程で硫黄分除去に使用されます。", "アルコール脱硫、溶剤精製"],
          ["タンニン酸用活性炭", "タンニン酸の製造および精製工程向けの特殊活性炭です。", "タンニン酸精製、精密化学処理"],
          ["ヤシ殻ペレット状活性炭", "ヤシ殻を原料とした柱状活性炭で、高い硬度と吸着性能を備えています。", "ガス浄化、水処理、溶剤回収"]
        ]
      },
      applications: {
        kicker: "用途",
        title: "用途",
        intro: "活性炭製品は浄化、ろ過、処理用途に使用されます。",
        items: [
          ["食品・添加物精製", "糖、クエン酸、グルタミン酸、食用油、食品添加物の精製に使用されます。"],
          ["ガス浄化", "ペレット状および粒状活性炭は脱硫、脱硝、ガス浄化に使用されます。"],
          ["水処理", "活性炭フィルターと炭素材は水浄化システムに使用されます。"],
          ["溶剤回収", "木質柱状活性炭と活性炭繊維は溶剤回収と吸着に使用されます。"]
        ]
      },
      certificate: {
        kicker: "証明書",
        title: "栄誉証明書",
        intro: "企業証明書および品質文書。",
        item1: "ISO9001",
        item2: "SGS",
        item3: "品質管理体系証明書",
        item4: "栄誉証明書"
      },
      catalog: {
        kicker: "電子カタログ",
        title: "ダウンロード",
        intro: "活性炭製品情報の電子版カタログをダウンロードできます。",
        download: "ダウンロード"
      },
      contact: {
        kicker: "お問い合わせ",
        title: "活性炭の問い合わせを送信",
        intro: "製品タイプ、用途、目標仕様、予定数量をお知らせください。調達検討用の回答を準備します。",
        companyLabel: "会社名",
        addressLabel: "住所",
        address: "中国上海市浦東新区張楊路1501号C158",
        emailLabel: "メール",
        phoneLabel: "電話",
        faxLabel: "ファックス",
        personLabel: "担当者",
        personValue: "趙 様"
      },
      form: {
        name: "お名前",
        company: "会社",
        email: "メール",
        country: "国 / 地域",
        interest: "関心のある製品",
        message: "メッセージ",
        submit: "問い合わせを送信",
        success: "ありがとうございます。お問い合わせ内容が準備されました。メールまたは WhatsApp でご連絡ください。",
        required: "送信前にお名前、有効なメール、メッセージを入力してください。"
      },
      footer: {
        brief: "産業浄化および環境処理プロジェクト向けの活性炭・ろ過材料サプライヤーです。",
        quickLinks: "クイックリンク",
        categories: "製品カテゴリー",
        contact: "連絡先",
        copyright: "© 2026 上海晟錦実業有限公司. All rights reserved."
      }
    },
    ko: {
      brandName: "상하이 성진실업유한공사",
      languageLabel: "언어",
      nav: {
        home: "홈",
        company: "회사 개요",
        products: "제품",
        catalog: "전자 카탈로그",
        applications: "응용 분야",
        certificate: "인증 자료",
        contact: "문의하기"
      },
      hero: {
        eyebrow: "산업용 여과 소재",
        title: "글로벌 산업 응용을 위한 신뢰성 높은 활성탄 솔루션",
        subtitle: "여과, 정화, 환경 보호 및 산업 처리 용도에 맞춘 맞춤형 활성탄 제품을 제공합니다.",
        productsBtn: "제품 보기",
        contactBtn: "문의하기",
        card1Title: "안정 공급",
        card1Text: "수출 프로젝트에 적합한 산업용 등급",
        card2Title: "맞춤 사양",
        card2Text: "입도, 요오드가, 회분, 수분 조건 협의 가능"
      },
      about: {
        kicker: "회사 소개",
        title: "상하이 성진실업유한공사",
        p1: "상하이 성진실업유한공사는 주로 활성탄 제품의 개발, 생산 및 판매에 종사합니다.",
        p2: "회사는 선진 기술, 정밀 설비, 전문 기술팀, 현대적 관리 및 적합한 시험 방법을 갖추고 있습니다.",
        p3: "제품은 식품, 의약, 수처리, 화학 산업 및 환경 보호 분야에 적용됩니다.",
        metric1: "다양한 산업",
        metric1Text: "환경 및 공정 응용을 위한 솔루션",
        metric2: "맞춤 가능",
        metric2Text: "등급, 입도 및 포장 옵션 협의 가능",
        metric3: "수출 중심",
        metric3Text: "글로벌 바이어를 위한 문서 지원"
      },
      products: {
        kicker: "제품",
        title: "제품 카테고리",
        intro: "",
        applicationLabel: "응용 분야",
        action: "문의 보내기",
        breadcrumbHome: "홈",
        breadcrumbProducts: "제품",
        categoryTitle: "카테고리",
        centerTitle: "제품 센터",
        searchPlaceholder: "제품 검색",
        searchButton: "검색",
        categories: [
          "Activated carbon for special application",
          "Pelletized activated carbon from coal for desulfurization and denitrification",
          "Activated Carbon Filter",
          "Granular activated carbon from coal for desulfuration",
          "Activated Carbon Fiber",
          "Impregnated Activated Carbon",
          "Acid Washing Activated Carbon"
        ],
        note1Title: "포장 옵션",
        note1Text: "20 kg 포대, 500 kg 포대, 1000 kg 포대 또는 고객 요청에 따른 맞춤 포장이 가능합니다.",
        note2Title: "시험 기준",
        note2Text: "GB/T 12496 및 ASTM 방법에 따라 제품 시험을 진행할 수 있습니다.",
        note3Title: "맞춤 사양",
        note3Text: "고객 요구와 적용 조건에 따라 사양을 조정할 수 있습니다.",
        items: [
          ["특수 용도 활성탄", "촉매 담체, 슈퍼커패시터, 글리세린 탈색, 구연산 정제, 알코올 탈황, 식품 첨가제, 유지 정제, 탄닌산, 생화학 및 글루탐산 정제 용도를 포함합니다.", "정밀화학 정제, 식품 첨가제, 촉매 담체, 생화학 처리"],
          ["석탄계 펠릿 탈황·탈질 활성탄", "석탄계 원통형 활성탄으로 2.0 mm, 4.0 mm 규격을 중심으로 안정적인 충전층 운전에 적합합니다.", "탈황, 탈질, 가스 정화, 배기가스 처리"],
          ["목질 펠릿 가스 정화용 활성탄", "목질 펠릿 활성탄으로 3.0 mm, 4.0 mm 등급을 중심으로 연속 가스 정화에 사용됩니다.", "가스 정화, 악취 제어, 산업 공기 처리"],
          ["활성탄 필터", "정화 장비, 교체 필터 부품 및 여과 시스템 프로젝트용 활성탄 필터 제품입니다.", "물 필터, 공기 필터, 여과 장비"],
          ["석탄계 입상 탈황 활성탄", "탈황 및 고정층 흡착 운전에 적합한 석탄계 입상 활성탄입니다.", "탈황, 산업 가스 처리, 흡착탑"],
          ["활성탄 섬유", "고비표면적 섬유 소재로 흡착 속도가 빠르고 컴팩트한 설치에 적합합니다.", "용제 회수, 정밀 여과, 공기 정화"],
          ["첨착 활성탄", "기능성 약제를 첨착하여 까다로운 가스 처리 조건에서 표적 제거 성능을 높입니다.", "황화수소 제어, 악취 제거, 특수 가스 정화"],
          ["산세척 활성탄", "산세척으로 회분을 줄이고 청정도를 높인 등급입니다.", "식품 가공, 음료 정화, 고순도 액체 처리"],
          ["촉매 담체 정제용 활성탄", "기공 구조와 기계적 강도가 중요한 촉매 담체 및 정제 매체용 등급입니다.", "촉매 담체, 화학 정제, 공정 처리"],
          ["글리세린 탈수용 활성탄", "글리세린법 탈색 및 관련 탈수·정제 단계에 사용하는 특수 활성탄입니다.", "글리세린 정제, 탈색, 화학 처리"],
          ["구연산 정제용 활성탄", "구연산 생산 공정에서 색소와 유기 불순물 제거를 지원하는 정제 등급입니다.", "구연산 정제, 식품 원료 가공"],
          ["유지 정제용 활성탄", "식용유, 유지 및 관련 공정액의 색도와 미량 불순물 관리를 위한 활성탄입니다.", "유지 정제, 식용유 가공"],
          ["당용 활성탄", "당액 정제, 탈색 및 당 제품 생산 품질 관리에 사용됩니다.", "제당, 시럽 탈색, 식품 가공"],
          ["식품 첨가제용 활성탄", "식품 첨가제 및 식품 원료 가공에 사용하는 정제 등급 활성탄입니다.", "식품 첨가제, 원료 정제, 탈색"],
          ["글루탐산 정제용 활성탄", "글루탐산 및 MSG 생산 정제 공정에 사용하는 활성탄입니다.", "글루탐산 정제, MSG 생산, 발효 처리"],
          ["생화학용 활성탄", "생화학 생산액, 발효액 및 정제 공정에 사용하는 활성탄입니다.", "생화학 처리, 발효, 액체 정제"],
          ["탈황용 첨착 활성탄", "가스 처리 시스템에서 탈황 성능을 높이도록 구성한 첨착 활성탄입니다.", "탈황, 가스 정화, 배출 제어"],
          ["알코올 탈황용 활성탄", "알코올 관련 정제 및 처리 공정에서 황 성분 제거에 사용됩니다.", "알코올 탈황, 용제 정제"],
          ["탄닌산용 활성탄", "탄닌산 생산 및 정제 공정용 특수 활성탄입니다.", "탄닌산 정제, 정밀화학 처리"],
          ["야자각 펠릿 활성탄", "야자각 원료 기반의 원통형 활성탄으로 높은 경도와 흡착 성능을 갖습니다.", "가스 정화, 수처리, 용제 회수"]
        ]
      },
      applications: {
        kicker: "응용 분야",
        title: "응용 분야",
        intro: "활성탄 제품은 정화, 여과 및 처리 분야에 사용됩니다.",
        items: [
          ["식품 및 첨가제 정화", "당, 구연산, 글루탐산, 식용유 및 식품 첨가제 정화에 사용됩니다."],
          ["가스 정화", "펠릿 및 입상 활성탄은 탈황, 탈질 및 가스 정화에 사용됩니다."],
          ["수처리", "활성탄 필터와 탄소 매체는 물 정화 시스템에 사용됩니다."],
          ["용제 회수", "목질 원주형 활성탄과 활성탄 섬유는 용제 회수 및 흡착에 사용됩니다."]
        ]
      },
      certificate: {
        kicker: "인증 자료",
        title: "명예 인증서",
        intro: "기업 인증서 및 품질 문서.",
        item1: "ISO9001",
        item2: "SGS",
        item3: "품질경영시스템 인증서",
        item4: "명예 인증서"
      },
      catalog: {
        kicker: "전자 카탈로그",
        title: "다운로드",
        intro: "활성탄 제품 정보 전자 카탈로그를 다운로드할 수 있습니다.",
        download: "다운로드"
      },
      contact: {
        kicker: "문의하기",
        title: "활성탄 문의 보내기",
        intro: "제품 유형, 응용 분야, 목표 사양 및 예상 수량을 알려 주세요. 구매 검토를 위한 답변을 준비하겠습니다.",
        companyLabel: "회사명",
        addressLabel: "주소",
        address: "중국 상하이시 푸둥신구 장양로 1501호 C158",
        emailLabel: "이메일",
        phoneLabel: "전화",
        faxLabel: "팩스",
        personLabel: "담당자",
        personValue: "자오 선생님"
      },
      form: {
        name: "이름",
        company: "회사",
        email: "이메일",
        country: "국가 / 지역",
        interest: "관심 제품",
        message: "메시지",
        submit: "문의 제출",
        success: "감사합니다. 문의 내용이 준비되었습니다. 이메일 또는 WhatsApp으로 연락해 주세요.",
        required: "제출 전에 이름, 유효한 이메일 및 메시지를 입력해 주세요."
      },
      footer: {
        brief: "산업 정화 및 환경 처리 프로젝트를 위한 활성탄 및 여과 소재 공급업체입니다.",
        quickLinks: "빠른 링크",
        categories: "제품 카테고리",
        contact: "연락처",
        copyright: "© 2026 상하이 성진실업유한공사. All rights reserved."
      }
    }
  };

  const imageCycle = [
    productImages.activatedCarbon,
    productImages.carbonFiber,
    productImages.activatedCarbon,
    productImages.activatedCarbon,
    productImages.activatedCarbon,
    productImages.activatedCarbon,
    productImages.filter,
    productImages.activatedCarbon
  ];

  const html = document.documentElement;
  const productGrid = document.getElementById("product-grid");
  const productCategoryList = document.getElementById("product-category-list");
  const applicationGrid = document.getElementById("application-grid");
  const footerProducts = document.getElementById("footer-products");
  const interestSelect = document.getElementById("interest");
  const languageSelect = document.getElementById("language-select");
  const footerLanguageSelect = document.getElementById("footer-language-select");
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNav = document.getElementById("site-nav");
  const form = document.getElementById("inquiry-form");
  const statusMessage = document.getElementById("form-status");
  const productSearchInput = document.querySelector(".product-search input");
  const productSearchButton = document.querySelector(".product-search button");

  function getValue(path, source) {
    return path.split(".").reduce((value, key) => {
      if (value && Object.prototype.hasOwnProperty.call(value, key)) {
        return value[key];
      }
      return "";
    }, source);
  }

  function createProductCard(item, index, lang) {
    const labels = translations[lang].products;
    const article = document.createElement("article");
    article.className = "product-card";
    article.dataset.productName = item[0].toLowerCase();
    article.innerHTML = `
      <div class="product-media">
        <img src="${imageCycle[index % imageCycle.length]}" alt="${item[0]}" loading="lazy" onerror="this.hidden=true">
      </div>
      <div class="product-body">
        <h3>${item[0]}</h3>
        <a class="btn secondary" href="#contact">${labels.action}</a>
      </div>
    `;
    return article;
  }

  function createApplicationCard(item, index) {
    const article = document.createElement("article");
    article.className = "application-card";
    article.innerHTML = `
      <span class="application-number">${String(index + 1).padStart(2, "0")}</span>
      <h3>${item[0]}</h3>
      <p>${item[1]}</p>
    `;
    return article;
  }

  function renderDynamicContent(lang) {
    const dictionary = translations[lang];

    const productItems = localizedProductItems[lang] || originalProductItems;
    const productCategories = localizedProductCategories[lang] || originalProductCategories;

    productGrid.replaceChildren(...productItems.map((item, index) => createProductCard(item, index, lang)));
    productCategoryList.replaceChildren(
      ...productCategories.map((category) => {
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.href = "#products";
        link.textContent = category;
        item.append(link);
        return item;
      })
    );
    applicationGrid.replaceChildren(...dictionary.applications.items.map(createApplicationCard));

    footerProducts.replaceChildren(
      ...(footerProductLabels[lang] || footerProductLabels.en).map((label) => {
        const link = document.createElement("a");
        link.href = "#products";
        link.textContent = label;
        return link;
      })
    );

    interestSelect.replaceChildren(
      ...productItems.map((item) => {
        const option = document.createElement("option");
        option.value = item[0];
        option.textContent = item[0];
        return option;
      })
    );
  }

  function applyTranslations(lang) {
    const dictionary = translations[lang] || translations.en;
    html.lang = lang === "zh" ? "zh-CN" : lang;

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const value = getValue(node.dataset.i18n, dictionary);
      if (value) {
        node.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
      node.dataset.i18nAttr.split(";").forEach((entry) => {
        const [attribute, path] = entry.split(":");
        const value = getValue(path, dictionary);
        if (attribute && value) {
          node.setAttribute(attribute, value);
        }
      });
    });

    renderDynamicContent(lang);
    languageSelect.value = lang;
    footerLanguageSelect.value = lang;
    localStorage.setItem("siteLanguage", lang);
  }

  function closeMenu() {
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const lang = languageSelect.value;
    const dictionary = translations[lang] || translations.en;
    const name = form.elements.name;
    const email = form.elements.email;
    const message = form.elements.message;
    const valid = name.value.trim() && isValidEmail(email.value.trim()) && message.value.trim();

    [name, email, message].forEach((field) => field.classList.remove("field-error"));

    if (!name.value.trim()) {
      name.classList.add("field-error");
    }
    if (!isValidEmail(email.value.trim())) {
      email.classList.add("field-error");
    }
    if (!message.value.trim()) {
      message.classList.add("field-error");
    }

    statusMessage.classList.toggle("error", !valid);
    statusMessage.textContent = valid ? dictionary.form.success : dictionary.form.required;

    if (valid) {
      form.reset();
      applyTranslations(lang);
      statusMessage.textContent = dictionary.form.success;
    }
  }

  function filterProducts() {
    const query = productSearchInput.value.trim().toLowerCase();
    productGrid.querySelectorAll(".product-card").forEach((card) => {
      const matches = !query || card.dataset.productName.includes(query);
      card.hidden = !matches;
    });
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      closeMenu();
    }
  });

  languageSelect.addEventListener("change", (event) => applyTranslations(event.target.value));
  footerLanguageSelect.addEventListener("change", (event) => applyTranslations(event.target.value));
  productSearchButton.addEventListener("click", filterProducts);
  productSearchInput.addEventListener("input", filterProducts);
  form.addEventListener("submit", handleSubmit);

  applyTranslations(localStorage.getItem("siteLanguage") || "en");
}());
