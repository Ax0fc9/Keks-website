/* ==========================================================================
   KEKS AMMAN - PREMIUM INTERACTIVE APPLICATION LOGIC
   Fully Bilingual (AR/EN), Shopping Cart, WhatsApp checkout,
   Custom Canvas Confetti & Timeline slider
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. CONFIGURATION & CONSTANTS
// --------------------------------------------------------------------------
const CONFIG = {
    whatsappNumber: "962781124849", 
    currency: " JD",
    minOrderValue: 10.00, // Jordanian Dinars minimum for luxury delivery
};

// --------------------------------------------------------------------------
// 2. PRODUCT DATA DEFINITIONS
// --------------------------------------------------------------------------
const PRODUCTS = [
    {
        id: "namoura-box",
        category: "boxes",
        tag: "Royal Gift | هدية ملكية 🎁",
        titleAr: "بوكس النمورة الملكي",
        titleEn: "Namoura Royal Box",
        descAr: "بوكس النمورة الملكي الفاخر المناسب للمناسبات والأعياد، يحتوي على تشكيلة فاخرة من حبات التمر والترافلز بحشوات الشوكولاتة والفستق واللوز والورد.",
        descEn: "The Royal Namoura Box, perfect for celebrations and Eid, containing a luxurious selection of chocolate dates and truffles filled with premium pistachio, almond, and rose.",
        visualChar: "🎁",
        image: "Keks1.png",
        hasSizes: true,
        prices: {
            medium: 18.00,
            large: 28.00,
            giant: 38.00
        }
    },
    {
        id: "almond-truffle",
        category: "classic",
        tag: "Rich Chocolate | شوكولاتة غنية 🍫",
        titleAr: "ترافل الشوكولاتة باللوز",
        titleEn: "Almond Chocolate Truffle",
        descAr: "ترافلز الشوكولاتة البلجيكية الغنية محشوة بالكراميل وتُوجت بحبة لوز مقرمشة ومحمصة بعناية.",
        descEn: "Rich Belgian chocolate truffles filled with caramel and topped with a perfectly roasted crunchy almond.",
        visualChar: "🍫",
        image: "Keks2.png",
        hasSizes: true,
        prices: {
            medium: 1.25,
            large: 9.50, // Box of 8
            giant: 13.50 // Box of 12
        }
    },
    {
        id: "rose-truffle",
        category: "special",
        tag: "Elegant Floral | الورد والفستق 🌸",
        titleAr: "ترافل الورد والفستق الحلبي",
        titleEn: "Rose & Pistachio White Truffle",
        descAr: "شوكولاتة بيضاء فاخرة محشوة بحشوة الفستق الغنية ومزينة بالفستق الحلبي المقرمش وزهرة الورد الدمشقي المجففة.",
        descEn: "Premium white chocolate truffles stuffed with rich pistachio cream, decorated with ground pistachios and a dried Damascus rose bud.",
        visualChar: "🌸",
        image: "Keks3.png%20.png",
        hasSizes: true,
        prices: {
            medium: 1.25,
            large: 9.50, // Box of 8
            giant: 13.50 // Box of 12
        }
    },
    {
        id: "stuffed-petit-four",
        category: "special",
        tag: "Traditional Twist | لمسة تقليدية ✨",
        titleAr: "بيتيفور محشي فاخر",
        titleEn: "Stuffed Gourmet Petit Four",
        descAr: "حبات البيتيفور الهشة والناعمة تذوب في الفم، محشوة بالكريمة الغنية ومغموسة بالشوكولاتة البلجيكية الداكنة والبيضاء ومزينة بالفستق المقرمش.",
        descEn: "Meltingly soft petit four cookies filled with rich cream, dipped in Belgian dark and white chocolate, and topped with crunchy pistachios.",
        visualChar: "🍪",
        image: "Keks4.png",
        hasSizes: true,
        prices: {
            medium: 1.00,
            large: 8.50, // Box of 9
            giant: 15.00 // Large Box of 18
        }
    },
    {
        id: "gourmet-dates",
        category: "classic",
        tag: "Premium Dates | تمور فاخرة 👑",
        titleAr: "تمر فاخر بالشوكولاته والمكسرات",
        titleEn: "Gourmet Stuffed Dates",
        descAr: "تمور المجهول الفاخرة المحشوة بالجوز (عين الجمل) أو الفستق الحلبي، ومغطاة بطبقة غنية من شوكولاتة الحليب الفاخرة أو شوكولاتة الفستق الأخضر.",
        descEn: "Premium Medjool dates stuffed with walnuts or pistachios, and covered with a rich layer of gourmet milk chocolate or green pistachio chocolate.",
        visualChar: "🌴",
        image: "Keks5.png",
        hasSizes: true,
        prices: {
            medium: 1.50,
            large: 11.00, // Box of 8
            giant: 16.00 // Box of 12
        }
    },
    {
        id: "royal-selection",
        category: "boxes",
        tag: "Ultimate Luxury | فخامة مطلقة 👑",
        titleAr: "بوكس التشكيلة الملكية",
        titleEn: "Keks Royal Selection Box",
        descAr: "التشكيلة الملكية الفاخرة تجمع كل إبداعات كيكس: ترافلز الشوكولاتة باللوز، ترافلز الشوكولاتة البيضاء بالورد، والتمور الفاخرة، والبيتيفور المبتكر.",
        descEn: "The ultimate Keks Royal Box containing a selection of all our creations: almond truffles, rose white truffles, gourmet stuffed dates, and elegant petit fours.",
        visualChar: "👑",
        image: "Keks6.png",
        hasSizes: true,
        prices: {
            medium: 22.00,
            large: 32.00,
            giant: 45.00
        }
    },
    {
        id: "pistachio-cheesecake",
        category: "special",
        tag: "Creamy Delight | تشيز كيك فاخر 🎂",
        titleAr: "تشيز كيك البستاشيو الفاخر",
        titleEn: "Premium Pistachio Cheesecake",
        descAr: "تشيز كيك غني وناعم بنكهة البستاشيو (الفستق الحلبي) الأصلي الفاخر، مغطى بالكامل بكريمة الفستق الغنية وحواف مزينة بالفستق الحلبي المقرمش.",
        descEn: "Rich, creamy, and smooth cheesecake infused with authentic premium pistachio flavor, topped with rich pistachio spread and garnished with crushed pistachios.",
        visualChar: "🎂",
        image: "PistachioCheesecake.jpg",
        hasSizes: true,
        prices: {
            medium: 10.00, // Small (6 persons)
            large: 17.50,  // Medium (9 persons)
            giant: 25.00   // Large (12 persons)
        }
    },
    {
        id: "mothers-chocolate-cake",
        category: "boxes",
        tag: "Perfect Gift | إهداء راقي 💝",
        titleAr: "كيكة الشوكولاتة بالإهداء الفاخر",
        titleEn: "Luxury Celebration Chocolate Cake",
        descAr: "كيكة الشوكولاتة الملكية الغنية المقدمة داخل بوكس ذهبي فاخر بغطاء شفاف وشريطة أنيقة، مثالية للمناسبات الخاصة وهدايا التعبير عن الحب وعيد الأم.",
        descEn: "Royal chocolate cake presented in a premium transparent gold-topped gift box with an elegant ribbon. Ideal for special occasions, gifts, and Mother's Day.",
        visualChar: "💝",
        image: "MothersCake.png",
        hasSizes: true,
        prices: {
            medium: 15.00, // Small
            large: 18.00,  // Medium
            giant: 20.00   // Large
        }
    },
    {
        id: "stuffed-cookies-collection",
        category: "classic",
        tag: "Warm & Gooey | كوكيز محشي 🍪",
        titleAr: "كوكيز كيكس المحشي الفاخر",
        titleEn: "Luxury Stuffed Cookies Collection",
        descAr: "كوكيز محشو عملاق مقرمش من الخارج وغني بالشوكولاتة البلجيكية الساخنة السائلة التي تذوب مع كل قضمة لتعطيك سعادة لا توصف.",
        descEn: "Giant cookies, crispy on the outside, warm and gooey on the inside, stuffed with premium Belgian chocolate that melts with every single bite.",
        visualChar: "🍪",
        image: "StuffedCookies.png",
        hasSizes: true,
        prices: {
            medium: 1.25,  // 1 Piece
            large: 9.50,   // Box of 8
            giant: 14.00   // Box of 12
        }
    },
    {
        id: "pistachio-profiterole-tart",
        category: "special",
        tag: "Gourmet French | تارت فرنسي 🥧",
        titleAr: "تارت بروفترول البستاشيو الفرنسي",
        titleEn: "French Profiterole Pistachio Tart",
        descAr: "مزيج ساحر يجمع بين عجينة التارت الهشة والبروفترول الفرنسي الفاخر، مغطى بالكامل بكريمة الفستق الحلبي الغنية ورشة فستق مقرمشة.",
        descEn: "An exceptional tasting experience blending a crispy pastry tart crust with French profiteroles, covered in rich green pistachio cream and crushed pistachios.",
        visualChar: "🥧",
        image: "PistachioTart.png",
        hasSizes: true,
        prices: {
            medium: 18.00,
            large: 28.00,
            giant: 38.00
        }
    },
    {
        id: "keks-signature-cake-board",
        category: "boxes",
        tag: "Event Catering | ضيافة فاخرة 🍰",
        titleAr: "لوحة كعكات كيكس المميزة",
        titleEn: "Keks Signature Cake Board",
        descAr: "ثلاثية من أفخر أنواع الكيك الفردية لضيافة حفلاتكم ومناسباتكم السعيدة: أوبرا كيك الملوكية، براوني نوتيلا بالفراولة، وبلوبري كيك الشهية.",
        descEn: "A premium trio of individual gourmet cakes for hosting your parties and events: elegant Opera Cake, rich Nutella Brownie topped with strawberry, and delicious Blueberry Cake.",
        visualChar: "🍰",
        image: "CakeBoard.png",
        hasSizes: true,
        prices: {
            medium: 15.00,
            large: 22.00,
            giant: 30.00
        }
    }
];

// --------------------------------------------------------------------------
// 3. DICTIONARY TRANSLATIONS FOR BILINGUAL SUPPORT (AR / EN)
// --------------------------------------------------------------------------
const TRANSLATIONS = {
    ar: {
        "nav-home": "الرئيسية",
        "nav-story": "قصة كيكس",
        "nav-menu": "قائمة الحلويات",
        "nav-oven": "مطبخنا الفاخر",
        "nav-instagram": "تابعنا",
        "hero-mini-tag": "👑 تمور فاخرة وشوكولاتة وترافلز بالأردن",
        "hero-main-title": `إبداعات الحلويات الفاخرة <br><span class="text-gradient">صُنعت بكل حب وإتقان!</span>`,
        "hero-desc": "مرحباً بكم في كيكس! نقدم لكم تشكيلة ملكية فاخرة من تمور المجهول المحشوة، وترافلز الشوكولاتة البلجيكية الغنية، والبيتيفور المبتكر المصنوع يدوياً بأجود المكونات الطبيعية في عمّان. نخبز ونحضر كل قطعة بكل شغف لتسعد حواسكم في كل مناسبة وجمع عائلية دافئة.",
        "hero-cta-order": "اطلب الآن <i class='fa-solid fa-cookie'></i>",
        "hero-cta-story": "اكتشف قصتنا <i class='fa-solid fa-arrow-left'></i>",
        "hero-stat-age": "شغف بالتميز",
        "hero-stat-love": "مكونات طبيعية 100%",
        "hero-stat-flavors": "إبداعات ملكية",
        "badge-spin": "اضغط ودوّرني! ✨",
        "story-subtitle": "رحلتنا في عالم الحلويات الفاخرة",
        "story-title": "قصة الإبداع والتميز في كيكس 🌴🍫",
        "story-description": "قصة شغف بدأت في عمّان لصنع أرقى إبداعات الحلويات التي تمزج عراقة تمور المجهول والنمورة والبيتيفور بفخامة الشوكولاتة البلجيكية المبتكرة.",
        "menu-subtitle": "تشكيلة ملكية فاخرة",
        "menu-title": "استكشف قائمة إبداعات كيكس 🌴🍫",
        "menu-description": "اختر مقاسك المفضل من إبداعاتنا الفريدة (بالقطعة، أو علبة وسط، أو العلبة الملكية الفاخرة)، أو اختر من بوكسات وتشكيلات كيكس الفاخرة للمشاركة والإهداء!",
        "filter-all": "الكل 🌴",
        "filter-classic": "التشكيلة الفاخرة ✨",
        "filter-special": "ترافلز الورد والمكسرات 🌸",
        "filter-boxes": "بوكسات الضيافة والإهداء 🎁",
        "oven-tag": "✨ إتقان وحرفية عالية في الصنع",
        "oven-title": "مطبخ كيكس الفاخر: جودة بلا تنازل! 👩‍🍳🏡",
        "oven-desc": "نحن في كيكس نؤمن بأن الفخامة تكمن في التفاصيل. لا نستخدم مواد حافظة ولا نكهات صناعية. نختار حبات تمر المجهول الفاخرة واحدة تلو الأخرى، ونستخدم أجود أنواع الشوكولاتة البلجيكية، والفستق الحلبي المقرمش، وبتلات الورد الجوري الطبيعي المجفف، لنحضر لكم تحفة فنية تأسر القلوب وتذوب في الفم.",
        "notice-title": "معلومات التوصيل والطلب بالأردن 🇯🇴",
        "notice-desc": "الحد الأدنى للطلب للتوصيل هو <strong>10 دنانير أردنية</strong>. نصلكم طازجاً وبأسرع وقت بسيارات توصيل مخصصة ومجهزة للحفاظ على جودة وشكل علب التغليف الفاخرة.",
        "insta-subtitle": "تابعوا إبداعاتنا وصورنا الحية",
        "insta-title": "عائلتنا على انستغرام 📸✨",
        "insta-description": "تابعوا حسابنا الرسمي لمشاهدة فيديوهات التحضير الفاخرة، وآراء زبائننا، والطلب المباشر Direct Message لعروضنا الحصرية!",
        "cart-title": "سلة طلباتك الفاخرة",
        "cart-empty-title": "سلتك فارغة حالياً",
        "cart-empty-desc": "تصفح قائمة إبداعات كيكس وأضف التمور والترافلز والبيتيفور اللذيذ لبدء تحضير طلبك الفاخر!",
        "cart-subtotal": "المجموع الفرعي",
        "btn-checkout": "تأكيد الطلب وإرساله للواتساب",
        "checkout-title": "تفاصيل التوصيل والطلب الفاخر",
        "form-name": "الاسم الكامل *",
        "form-phone": "رقم الهاتف *",
        "form-address": "عنوان التوصيل بالتفصيل *",
        "form-time": "وقت التوصيل المفضل",
        "form-notes": "ملاحظات إضافية أو كتابة عبارة إهداء على البوكس",
        "opt-evening": "الفترة المسائية (4 عصراً - 9 مساءً) - الأفضل للتوصيل للمنزل",
        "opt-noon": "الفترة الصباحية والظهر (11 ظهراً - 4 عصراً)",
        "opt-custom": "تنسيق خاص لاحقاً عبر الواتساب",
        "summary-title": "ملخص طلبك النهائي:",
        "summary-total": "المجموع الإجمالي:",
        "foot-links": "روابط سريعة",
        "foot-contact": "معلومات الاتصال بالبوتيك",
        "foot-loc": "عمان، المملكة الأردنية الهاشمية 🇯🇴",
        "foot-deliv": "توصيل سريع لكافة مناطق عمان الكبرى",
        "foot-hours": "الطلبات متاحة 24/7 والتوصيل يومي",
        "btn-add-cart": "إضافة للسلة",
        "lbl-size": "التعبئة:",
        "lbl-medium": "حبة واحدة",
        "lbl-large": "علبة وسط",
        "lbl-giant": "علبة ملكية",
        "lbl-fixed": "بوكس فاخر",
        "lbl-quantity": "الكمية:",
        "alert-min-order": "متبقي <strong>{amount} JD</strong> للوصول للحد الأدنى للتوصيل (10 د.أ)",
        "alert-min-reached": "🎉 لقد وصلت للحد الأدنى للتوصيل! جاهز للطلب الفاخر الآن",
        "original-polaroid-caption": "قائمة الأسعار والعلب الرسمية المعتمدة لكيكس 📋🌸",
        "original-polaroid-caption-2": "العروض الخاصة وبوكسات التقديم والضيافة المميزة 🎁✨",
        "foot-about": "مشروع حلويات وبوتيك تمر فاخر في عمان، الأردن. نتميز بدمج التراث المحلي كتمور المجهول الفاخرة والنمورة بلمسات فريدة من الشوكولاتة البلجيكية الراقية وترافلز الورد لتناسب كافة أوقاتكم ومناسباتكم السعيدة."
    },
    en: {
        "nav-home": "Home",
        "nav-story": "Keks Story",
        "nav-menu": "Our Menu",
        "nav-oven": "Luxury Kitchen",
        "nav-instagram": "Follow Us",
        "hero-mini-tag": "👑 Luxury Stuffed Dates, Truffles & Confectionery in Jordan",
        "hero-main-title": `Artisan Dessert Creations <br><span class="text-gradient">Handcrafted with Passion!</span>`,
        "hero-desc": "Welcome to Keks! We present a royal selection of premium stuffed Medjool dates, rich Belgian chocolate truffles, and innovative artisan petit fours handcrafted in Amman, Jordan. We prepare every single piece with passion to sweeten your gatherings and special events.",
        "hero-cta-order": "Order Now <i class='fa-solid fa-cookie'></i>",
        "hero-cta-story": "Our Story <i class='fa-solid fa-arrow-left'></i>",
        "hero-stat-age": "Artisan Excellence",
        "hero-stat-love": "100% Pure Ingredients",
        "hero-stat-flavors": "Royal Formulations",
        "badge-spin": "Spin & Taste! ✨",
        "story-subtitle": "A Journey of Elegant Sweets",
        "story-title": "The Craftsmanship & Passion of Keks 🌴🍫",
        "story-description": "A story of passion that started in Amman to elevate traditional Middle Eastern desserts like stuffed dates, namoura, and petit fours into luxurious chocolate art.",
        "menu-subtitle": "Luxury Signature Collection",
        "menu-title": "Explore Keks Royal Catalog 🌴🍫",
        "menu-description": "Choose your preferred packaging (1 Piece, Medium Box, or Royal Box), or explore our signature pre-packed Keks gift boxes, perfect for sharing and corporate gifting!",
        "filter-all": "All 🌴",
        "filter-classic": "Royal Collection ✨",
        "filter-special": "Truffles & Dates 🌸",
        "filter-boxes": "Luxury Gift Boxes 🎁",
        "oven-tag": "✨ Premium Quality & Unmatched Craftsmanship",
        "oven-title": "Keks Boutique Kitchen: Quality without Compromise! 👩‍🍳🏡",
        "oven-desc": "At Keks, we believe luxury lies in details. We use no preservatives or artificial flavors. We handpick each premium Medjool date, and combine it with the finest Belgian chocolate, crunchy local pistachios, and organic dried Damascus rose petals to deliver a masterpiece that melts in your mouth.",
        "notice-title": "Delivery & Orders in Jordan 🇯🇴",
        "notice-desc": "The minimum order value for delivery is <strong>10.00 JD</strong>. We deliver in custom-equipped vehicles to preserve the exquisite presentation and freshness of your luxury gift boxes.",
        "insta-subtitle": "Follow our visual updates and events",
        "insta-title": "Keks Amman on Instagram 📸✨",
        "insta-description": "Follow our official account to watch our luxury preparations, delightful customer stories, and direct messaging for exclusive collections!",
        "cart-title": "Your Premium Cart",
        "cart-empty-title": "Your Cart is Empty",
        "cart-empty-desc": "Browse our gourmet catalog and add truffles, stuffed dates, and petit fours to start preparing your luxury order!",
        "cart-subtotal": "Subtotal",
        "btn-checkout": "Confirm & Send Order via WhatsApp",
        "checkout-title": "Luxury Delivery & Order Details",
        "form-name": "Full Name *",
        "form-phone": "Phone Number *",
        "form-address": "Detailed Delivery Address *",
        "form-time": "Preferred Delivery Time",
        "form-notes": "Additional Notes or Custom Gift Card Inscription",
        "opt-evening": "Evening slot (4 PM - 9 PM) - Best for home delivery",
        "opt-noon": "Morning & Afternoon slot (11 AM - 4 PM)",
        "opt-custom": "Special timing coordination via WhatsApp",
        "summary-title": "Your Final Order Summary:",
        "summary-total": "Grand Total:",
        "foot-links": "Quick Links",
        "foot-contact": "Boutique Contact",
        "foot-loc": "Amman, Hashemite Kingdom of Jordan 🇯🇴",
        "foot-deliv": "Express delivery across Greater Amman",
        "foot-hours": "Orders accepted 24/7, daily delivery",
        "btn-add-cart": "Add to Cart",
        "lbl-size": "Packaging:",
        "lbl-medium": "1 Piece",
        "lbl-large": "Medium Box",
        "lbl-giant": "Royal Box",
        "lbl-fixed": "Luxury Box",
        "lbl-quantity": "Quantity:",
        "alert-min-order": "<strong>{amount} JD</strong> remaining to reach the minimum order (10 JD)",
        "alert-min-reached": "🎉 Minimum order reached! Ready to checkout",
        "original-polaroid-caption": "Official Approved Keks Prices & Packages Menu 📋🌸",
        "original-polaroid-caption-2": "Special Offers, Presentation & Hospitality Boxes 🎁✨",
        "foot-about": "A luxury dessert boutique in Amman, Jordan, specializing in blending rich local heritage like Medjool dates and Namoura with fine Belgian chocolate, dried rose truffles, and artisan petit fours to elevate your gatherings and special events."
    }
};

// --------------------------------------------------------------------------
// 4. APPLICATION STATE VARIABLES
// --------------------------------------------------------------------------
let currentLanguage = "ar";
let cart = [];
let activeStorySlide = 1;
const totalStorySlides = 6;
let storyAutoPlayTimer = null;

// --------------------------------------------------------------------------
// 5. APPLICATION INITIALIZATION & CORE EVENTS
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    // 1. Language Init (which also renders products & triggers scroll reveals)
    setLanguage(currentLanguage);

    // 2. Bind Core UI Event Listeners
    setupEventListeners();

    // 3. Timeline comic slider autoplay init
    startStoryAutoplay();
});

// --------------------------------------------------------------------------
// 6. UI EVENT LISTENERS BINDING
// --------------------------------------------------------------------------
function setupEventListeners() {
    // Scroll header effect
    window.addEventListener("scroll", () => {
        const header = document.getElementById("main-header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Language Toggle
    const langBtn = document.getElementById("lang-toggle-btn");
    langBtn.addEventListener("click", () => {
        const nextLang = currentLanguage === "ar" ? "en" : "ar";
        setLanguage(nextLang);
    });

    // Mobile Navigation Toggle
    const mobileToggle = document.getElementById("mobile-nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    mobileToggle.addEventListener("click", () => {
        mobileToggle.classList.toggle("open");
        navMenu.classList.toggle("open");
    });

    // Close mobile menu on clicking links
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            mobileToggle.classList.remove("open");
            navMenu.classList.remove("open");
            
            // Set active class
            document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // Cart Drawer Toggle
    const cartTrigger = document.getElementById("cart-trigger-btn");
    const cartClose = document.getElementById("cart-close-btn");
    const cartBackdrop = document.getElementById("cart-drawer-backdrop");
    const emptyShopBtn = document.getElementById("empty-shop-btn");

    const openCart = () => {
        document.getElementById("cart-drawer").classList.add("open");
        cartBackdrop.classList.add("open");
    };

    const closeCart = () => {
        document.getElementById("cart-drawer").classList.remove("open");
        cartBackdrop.classList.remove("open");
    };

    cartTrigger.addEventListener("click", openCart);
    cartClose.addEventListener("click", closeCart);
    cartBackdrop.addEventListener("click", closeCart);
    emptyShopBtn.addEventListener("click", closeCart);

    // Timeline steps clicking in Story section
    document.querySelectorAll(".timeline-step").forEach(step => {
        step.addEventListener("click", () => {
            const slideNum = parseInt(step.getAttribute("data-slide"));
            goToStorySlide(slideNum);
            stopStoryAutoplay(); // Stop autoplay on manual interaction
        });
    });

    // Story Navigation arrows
    document.getElementById("story-prev-btn").addEventListener("click", () => {
        let prevSlide = activeStorySlide - 1;
        if (prevSlide < 1) prevSlide = totalStorySlides;
        goToStorySlide(prevSlide);
        stopStoryAutoplay();
    });

    document.getElementById("story-next-btn").addEventListener("click", () => {
        let nextSlide = activeStorySlide + 1;
        if (nextSlide > totalStorySlides) nextSlide = 1;
        goToStorySlide(nextSlide);
        stopStoryAutoplay();
    });

    // Menu category filters clicking
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const filterVal = btn.getAttribute("data-filter");
            renderProducts(filterVal);
        });
    });

    // Checkout modal trigger & closes
    const checkoutBtn = document.getElementById("cart-checkout-btn");
    const checkoutModal = document.getElementById("checkout-modal");
    const checkoutBackdrop = document.getElementById("checkout-modal-backdrop");
    const checkoutClose = document.getElementById("checkout-close-btn");

    checkoutBtn.addEventListener("click", () => {
        if (getCartTotal() >= CONFIG.minOrderValue) {
            closeCart();
            openCheckoutModal();
        }
    });

    const closeCheckoutModal = () => {
        checkoutModal.classList.remove("open");
        checkoutBackdrop.classList.remove("open");
    };

    checkoutClose.addEventListener("click", closeCheckoutModal);
    checkoutBackdrop.addEventListener("click", closeCheckoutModal);

    // Form Submission for WhatsApp order placement
    const checkoutForm = document.getElementById("checkout-form");
    checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();
        sendOrderToWhatsApp();
    });
}

// --------------------------------------------------------------------------
// 7. LANGUAGE SWITCHING CONTROLLER (AR / EN)
// --------------------------------------------------------------------------
function setLanguage(lang) {
    currentLanguage = lang;
    const isRtl = lang === "ar";
    
    // Update HTML attributes
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr");
    
    // Update header language button text
    const langBtnText = document.querySelector("#lang-toggle-btn .lang-text");
    langBtnText.textContent = isRtl ? "English" : "العربية";
    
    // Translate all standard elements containing [data-key] attributes
    document.querySelectorAll("[data-key]").forEach(elem => {
        const key = elem.getAttribute("data-key");
        if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
            elem.innerHTML = TRANSLATIONS[lang][key];
        }
    });

    // Dynamically translate special elements manually
    translateSpecialUI();

    // Re-render menu products to reflect language changes
    const activeFilter = document.querySelector(".filter-btn.active")?.getAttribute("data-filter") || "all";
    renderProducts(activeFilter);

    // Re-render cart item titles to reflect selected language
    renderCart();
}

function translateSpecialUI() {
    const isRtl = currentLanguage === "ar";
    
    // 1. Title Meta
    document.title = isRtl ? "Keks Amman | كيكس عمّان - تمور فاخرة وحلويات مبتكرة" : "Keks Amman | Premium Sweets, Dates & Truffles Jordan";

    // 2. Hero titles
    document.getElementById("hero-main-title").innerHTML = TRANSLATIONS[currentLanguage]["hero-main-title"];
    document.getElementById("hero-desc").textContent = TRANSLATIONS[currentLanguage]["hero-desc"];
    document.getElementById("hero-mini-tag").innerHTML = TRANSLATIONS[currentLanguage]["hero-mini-tag"];

    // 3. Input placeholders translation
    const inputs = {
        "client-name": isRtl ? "مثال: أحمد محمد" : "e.g. John Doe",
        "client-phone": isRtl ? "مثال: 079XXXXXXXX" : "e.g. 079XXXXXXXX",
        "client-address": isRtl ? "مثال: عمان، شارع المدينة المنورة، بناء 12" : "e.g. Amman, Madina Street, Building 12",
        "client-notes": isRtl ? "مثال: يرجى كتابة عبارة 'عيد ميلاد سعيد' على العلبة" : "e.g. Write 'Happy Birthday' on the box",
    };

    for (let id in inputs) {
        const inputElem = document.getElementById(id);
        if (inputElem) inputElem.setAttribute("placeholder", inputs[id]);
    }

    // 4. Delivery static notes text
    document.getElementById("delivery-notes-text").innerHTML = TRANSLATIONS[currentLanguage]["notice-desc"];
    document.getElementById("footer-about-text").innerHTML = TRANSLATIONS[currentLanguage]["foot-about"];

    // 5. Polaroids captions
    const polaroidCaptions = document.querySelectorAll(".original-polaroid .polaroid-caption");
    if (polaroidCaptions.length > 0) {
        polaroidCaptions[0].innerHTML = TRANSLATIONS[currentLanguage]["original-polaroid-caption"];
    }
    if (polaroidCaptions.length > 1) {
        polaroidCaptions[1].innerHTML = TRANSLATIONS[currentLanguage]["original-polaroid-caption-2"];
    }
}

// --------------------------------------------------------------------------
// 8. RENDER SHOP COOKIES DYNAMICALLY
// --------------------------------------------------------------------------
function renderProducts(categoryFilter) {
    const grid = document.getElementById("products-grid");
    if (!grid) return;

    grid.innerHTML = "";
    const isRtl = currentLanguage === "ar";

    // Filter items based on selected category
    const filteredProducts = PRODUCTS.filter(prod => {
        if (categoryFilter === "all") return true;
        return prod.category === categoryFilter;
    });

    filteredProducts.forEach(prod => {
        // Create dynamic DOM card element
        const card = document.createElement("div");
        card.className = `product-card reveal-on-scroll ${prod.category}`;
        card.setAttribute("id", `product-card-${prod.id}`);

        // Tags ribbon
        let tagHtml = "";
        if (prod.tag) {
            const displayTag = isRtl ? prod.tag.split("|")[1].trim() : prod.tag.split("|")[0].trim();
            tagHtml = `<span class="product-tag font-arabic">${displayTag}</span>`;
        }

        // Setup size selection panel
        let optionsHtml = "";
        let defaultPrice = 0;
        
        if (prod.hasSizes) {
            defaultPrice = prod.prices.medium; // default medium selected
            optionsHtml = `
                <div class="product-options-row">
                    <div class="options-label font-arabic">${TRANSLATIONS[currentLanguage]["lbl-size"]}</div>
                    <div class="size-selectors" data-product-id="${prod.id}">
                        <button class="size-btn active" data-size="medium" data-price="${prod.prices.medium}">${TRANSLATIONS[currentLanguage]["lbl-medium"]}</button>
                        <button class="size-btn" data-size="large" data-price="${prod.prices.large}">${TRANSLATIONS[currentLanguage]["lbl-large"]}</button>
                        <button class="size-btn" data-size="giant" data-price="${prod.prices.giant}">${TRANSLATIONS[currentLanguage]["lbl-giant"]}</button>
                    </div>
                </div>
            `;
        } else {
            // Fixed pricing (Giant only or Box standard)
            defaultPrice = prod.prices.giant || prod.prices.fixed;
            const sizeLabel = prod.prices.giant ? TRANSLATIONS[currentLanguage]["lbl-giant"] : TRANSLATIONS[currentLanguage]["lbl-fixed"];
            optionsHtml = `
                <div class="product-options-row">
                    <div class="options-label font-arabic">${TRANSLATIONS[currentLanguage]["lbl-size"]}</div>
                    <div class="size-selectors" data-product-id="${prod.id}">
                        <button class="size-btn active" data-size="${prod.prices.giant ? 'giant' : 'fixed'}" data-price="${defaultPrice}" disabled>${sizeLabel}</button>
                    </div>
                </div>
            `;
        }

        // Product title & desc translations
        const title = isRtl ? prod.titleAr : prod.titleEn;
        const desc = isRtl ? prod.descAr : prod.descEn;

        card.innerHTML = `
            ${tagHtml}
            <div class="product-image-container" style="height: 240px; overflow: hidden; position: relative;">
                <img src="${prod.image}" alt="${title}" class="product-real-img" style="width: 100%; height: 100%; object-fit: cover; transition: transform var(--transition-slow);">
            </div>
            
            <div class="product-body">
                <h3 class="product-title font-arabic">${title}</h3>
                <p class="product-desc font-arabic">${desc}</p>
                
                ${optionsHtml}
                
                <div class="product-footer">
                    <div class="product-price-wrapper">
                        <span class="price-amount font-english" id="price-display-${prod.id}">${defaultPrice.toFixed(2)}${CONFIG.currency}</span>
                    </div>
                    <button class="add-cart-btn" data-product-id="${prod.id}" aria-label="Add to cart">
                        <i class="fa-solid fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });

    // Bind item specific actions (size triggers & add-to-cart clicks)
    bindProductCardEvents();

    // Re-bind scroll reveal elements since cards were dynamically replaced or updated
    setupScrollReveal();
}

function bindProductCardEvents() {
    // 1. Size toggle adjustments
    document.querySelectorAll(".size-selectors button").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const selectorsRow = btn.parentElement;
            const productId = selectorsRow.getAttribute("data-product-id");
            
            // Toggle active classes on siblings
            selectorsRow.querySelectorAll("button").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            // Update price display
            const price = parseFloat(btn.getAttribute("data-price"));
            document.getElementById(`price-display-${productId}`).textContent = price.toFixed(2) + CONFIG.currency;
        });
    });

    // 2. Add to Cart clicks
    document.querySelectorAll(".add-cart-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const productId = btn.getAttribute("data-product-id");
            const product = PRODUCTS.find(p => p.id === productId);
            
            // Get active selected size & price
            const activeSizeBtn = document.querySelector(`.size-selectors[data-product-id="${productId}"] button.active`);
            const size = activeSizeBtn.getAttribute("data-size");
            const price = parseFloat(activeSizeBtn.getAttribute("data-price"));

            addToCart(product, size, price, e);
        });
    });
}

// --------------------------------------------------------------------------
// 9. SHOPPING CART ENGINE & BUSINESS RULES
// --------------------------------------------------------------------------
function addToCart(product, size, price, event) {
    // Generate unique key in cart combining ID and Size
    const cartItemId = `${product.id}-${size}`;
    const existingItem = cart.find(item => item.cartItemId === cartItemId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            cartItemId: cartItemId,
            id: product.id,
            titleAr: product.titleAr,
            titleEn: product.titleEn,
            visualChar: product.visualChar,
            size: size,
            unitPrice: price,
            quantity: 1,
            isBox: product.category === "boxes"
        });
    }

    // Interactive Confetti Burst Reward on adding to cart
    triggerConfetti(event);

    // Refresh UI
    renderCart();

    // Visual Bounce feedback on the shopping cart badge
    const badge = document.getElementById("cart-badge-count");
    badge.style.animation = "none";
    setTimeout(() => {
        badge.style.animation = "wobble 0.5s ease";
    }, 10);
}

function updateQuantity(cartItemId, newQty) {
    const itemIndex = cart.findIndex(item => item.cartItemId === cartItemId);
    if (itemIndex === -1) return;

    if (newQty <= 0) {
        cart.splice(itemIndex, 1);
    } else {
        cart[itemIndex].quantity = newQty;
    }

    renderCart();
}

function removeFromCart(cartItemId) {
    cart = cart.filter(item => item.cartItemId !== cartItemId);
    renderCart();
}

function getCartCount() {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartTotal() {
    return cart.reduce((total, item) => total + (item.quantity * item.unitPrice), 0);
}

function renderCart() {
    const isRtl = currentLanguage === "ar";
    const totalCount = getCartCount();
    const totalAmount = getCartTotal();

    // 1. Update Floating Header Badges
    document.getElementById("cart-badge-count").textContent = totalCount;
    document.getElementById("cart-badge-total").textContent = totalAmount.toFixed(2) + CONFIG.currency;
    document.getElementById("cart-total-val").textContent = totalAmount.toFixed(2) + CONFIG.currency;

    // 2. Toggle Empty / Filled States
    const emptyState = document.getElementById("cart-empty-state");
    const itemsList = document.getElementById("cart-items-list");
    const checkoutBtn = document.getElementById("cart-checkout-btn");

    if (cart.length === 0) {
        emptyState.style.display = "flex";
        itemsList.style.display = "none";
        checkoutBtn.disabled = true;
    } else {
        emptyState.style.display = "none";
        itemsList.style.display = "flex";
        itemsList.innerHTML = "";

        // Loop and build cart item rows
        cart.forEach(item => {
            const title = isRtl ? item.titleAr : item.titleEn;
            const sizeLabel = TRANSLATIONS[currentLanguage][`lbl-${item.size}`] || item.size;
            const totalItemPrice = item.quantity * item.unitPrice;

            const row = document.createElement("div");
            row.className = "cart-item";
            row.innerHTML = `
                <div class="cart-item-visual">
                    <span>${item.visualChar}</span>
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-title font-arabic">${title}</h4>
                    <div class="cart-item-meta font-arabic">
                        ${TRANSLATIONS[currentLanguage]["lbl-size"]} ${sizeLabel} | 
                        ${item.unitPrice.toFixed(2)}${CONFIG.currency}
                    </div>
                    <div class="cart-item-actions">
                        <div class="quantity-selector">
                            <button class="qty-btn" onclick="updateQuantity('${item.cartItemId}', ${item.quantity - 1})" aria-label="Decrease quantity">-</button>
                            <span class="qty-val font-english">${item.quantity}</span>
                            <button class="qty-btn" onclick="updateQuantity('${item.cartItemId}', ${item.quantity + 1})" aria-label="Increase quantity">+</button>
                        </div>
                        <button class="item-remove-btn font-arabic" onclick="removeFromCart('${item.cartItemId}')">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                        <span class="cart-item-price font-english">${totalItemPrice.toFixed(2)}${CONFIG.currency}</span>
                    </div>
                </div>
            `;
            itemsList.appendChild(row);
        });
    }

    // 3. Minimum Order Business Limit Progress Updates
    const deliveryProgressContainer = document.getElementById("delivery-progress-container");
    const deliveryProgressText = document.getElementById("delivery-progress-text");
    const deliveryProgressBar = document.getElementById("delivery-progress-bar-fill");

    if (cart.length === 0) {
        deliveryProgressContainer.style.display = "none";
        checkoutBtn.disabled = true;
    } else {
        deliveryProgressContainer.style.display = "block";
        
        if (totalAmount < CONFIG.minOrderValue) {
            const remaining = CONFIG.minOrderValue - totalAmount;
            
            // Set alert text
            deliveryProgressText.innerHTML = TRANSLATIONS[currentLanguage]["alert-min-order"]
                .replace("{amount}", remaining.toFixed(2));
            
            // Set bar fill %
            const percent = (totalAmount / CONFIG.minOrderValue) * 100;
            deliveryProgressBar.style.width = `${percent}%`;
            deliveryProgressBar.style.backgroundColor = "var(--clr-pink-accent)";
            
            // Block Checkout button
            checkoutBtn.disabled = true;
        } else {
            // Reached delivery limit
            deliveryProgressText.innerHTML = TRANSLATIONS[currentLanguage]["alert-min-reached"];
            deliveryProgressBar.style.width = "100%";
            deliveryProgressBar.style.backgroundColor = "var(--clr-success)";
            
            // Allow checkout
            checkoutBtn.disabled = false;
        }
    }
}

// Attach cart methods to window to enable simple inline HTML onclick execution
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;

// --------------------------------------------------------------------------
// 10. CHECKOUT DIALOG / MODAL ACTIONS
// --------------------------------------------------------------------------
function openCheckoutModal() {
    const isRtl = currentLanguage === "ar";
    const totalAmount = getCartTotal();

    // 1. Populate summary list inside modal
    const summaryList = document.getElementById("modal-order-summary-list");
    summaryList.innerHTML = "";

    cart.forEach(item => {
        const title = isRtl ? item.titleAr : item.titleEn;
        const sizeLabel = TRANSLATIONS[currentLanguage][`lbl-${item.size}`] || item.size;
        const itemTotal = item.quantity * item.unitPrice;

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${item.quantity} × ${title} (${sizeLabel})</span>
            <strong class="font-english">${itemTotal.toFixed(2)}${CONFIG.currency}</strong>
        `;
        summaryList.appendChild(li);
    });

    // 2. Set grand total
    document.getElementById("modal-order-summary-total").textContent = totalAmount.toFixed(2) + CONFIG.currency;

    // 3. Open modal window
    document.getElementById("checkout-modal").classList.add("open");
    document.getElementById("checkout-modal-backdrop").classList.add("open");
}

// --------------------------------------------------------------------------
// 11. GENERATE WHATSAPP ORDER RECEIPTS
// --------------------------------------------------------------------------
function sendOrderToWhatsApp() {
    const name = document.getElementById("client-name").value.trim();
    const phone = document.getElementById("client-phone").value.trim();
    const address = document.getElementById("client-address").value.trim();
    const deliveryTime = document.getElementById("client-time").value;
    const notes = document.getElementById("client-notes").value.trim();

    if (!name || !phone || !address) {
        alert(currentLanguage === "ar" ? "يرجى تعبئة كافة الحقول المطلوبة!" : "Please fill out all required fields!");
        return;
    }

    const totalAmount = getCartTotal();
    const isRtl = currentLanguage === "ar";

    // Build the beautiful, structured order receipt message
    let msg = "";
    
    if (isRtl) {
        msg += `👑 *طلب جديد من بوتيك كيكس عمّان!* 👑\n`;
        msg += `---------------------------------\n`;
        msg += `👤 *الاسم الكامل:* ${name}\n`;
        msg += `📞 *رقم الهاتف:* ${phone}\n`;
        msg += `📍 *عنوان التوصيل:* ${address}\n`;
        msg += `🕒 *وقت التوصيل المفضل:* ${deliveryTime}\n`;
        msg += `---------------------------------\n`;
        msg += `📦 *تفاصيل سلة المشتريات الفاخرة:*\n`;
        
        cart.forEach(item => {
            const sizeLabel = TRANSLATIONS.ar[`lbl-${item.size}`] || item.size;
            msg += `- ${item.quantity} × ${item.titleAr} (${sizeLabel}) - ${(item.quantity * item.unitPrice).toFixed(2)} د.أ\n`;
        });
        
        msg += `---------------------------------\n`;
        if (notes) {
            msg += `💬 *ملاحظات وإهداء:* ${notes}\n`;
            msg += `---------------------------------\n`;
        }
        msg += `💰 *المجموع الإجمالي للطلب:* ${totalAmount.toFixed(2)} د.أ\n`;
        msg += `---------------------------------\n`;
        msg += `🌴🍫 *تم التحضير بكل حب وإتقان في مطبخ كيكس!* ✨👑`;
    } else {
        msg += `👑 *New Order from Keks Amman Boutique!* 👑\n`;
        msg += `---------------------------------\n`;
        msg += `👤 *Full Name:* ${name}\n`;
        msg += `📞 *Phone Number:* ${phone}\n`;
        msg += `📍 *Delivery Address:* ${address}\n`;
        msg += `🕒 *Preferred Time:* ${deliveryTime}\n`;
        msg += `---------------------------------\n`;
        msg += `📦 *Luxury Cart Items Details:*\n`;
        
        cart.forEach(item => {
            const sizeLabel = TRANSLATIONS.en[`lbl-${item.size}`] || item.size;
            msg += `- ${item.quantity} × ${item.titleEn} (${sizeLabel}) - ${(item.quantity * item.unitPrice).toFixed(2)} JD\n`;
        });
        
        msg += `---------------------------------\n`;
        if (notes) {
            msg += `💬 *Order Notes & Gift Inscription:* ${notes}\n`;
            msg += `---------------------------------\n`;
        }
        msg += `💰 *Grand Total Amount:* ${totalAmount.toFixed(2)} JD\n`;
        msg += `---------------------------------\n`;
        msg += `🌴🍫 *Handcrafted with Love & Passion by Keks Amman!* ✨👑`;
    }

    // URL Encode the final receipt text
    const encodedMessage = encodeURIComponent(msg);
    
    // WhatsApp endpoint URL builder
    let whatsappUrl = "";
    if (CONFIG.whatsappNumber) {
        whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMessage}`;
    } else {
        // Uses standard WhatsApp share link so they can search/select who to send it to
        whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    }

    // Open WhatsApp in a new tab/application directly
    window.open(whatsappUrl, "_blank");

    // Clear cart and close modal
    cart = [];
    renderCart();
    
    document.getElementById("checkout-modal").classList.remove("open");
    document.getElementById("checkout-modal-backdrop").classList.remove("open");
    document.getElementById("checkout-form").reset();

    // Thank you notification
    alert(isRtl ? 
        "تم توليد الفاتورة بنجاح! سيتم تحويلك الآن لتطبيق واتساب لإرسال تفاصيل طلبك مباشرة لبدء تحضيره الفاخر." : 
        "Order receipt generated! You will be redirected to WhatsApp to send your details and start preparing your luxury desserts."
    );
}

// --------------------------------------------------------------------------
// 12. KEKS' CRAFTSMANSHIP JOURNEY TIMELINE STORY CONTROLLER
// --------------------------------------------------------------------------
function goToStorySlide(slideNum) {
    activeStorySlide = slideNum;

    // 1. Manage slide active visibility
    document.querySelectorAll(".story-comic-window .story-slide").forEach(slide => {
        slide.classList.remove("active");
    });
    document.getElementById(`story-slide-${slideNum}`).classList.add("active");

    // 2. Manage timeline step buttons
    document.querySelectorAll(".story-timeline-navigation .timeline-step").forEach(step => {
        step.classList.remove("active");
    });
    
    const currentStepBtn = document.querySelector(`.story-timeline-navigation .timeline-step[data-slide="${slideNum}"]`);
    if (currentStepBtn) {
        currentStepBtn.classList.add("active");
        
        // Auto scroll mobile step selectors to view
        currentStepBtn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }

    // 3. Manage progress dots
    const dots = document.querySelectorAll(".story-progress-indicator .dot");
    dots.forEach((dot, index) => {
        if (index === slideNum - 1) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

function startStoryAutoplay() {
    stopStoryAutoplay();
    storyAutoPlayTimer = setInterval(() => {
        let nextSlide = activeStorySlide + 1;
        if (nextSlide > totalStorySlides) nextSlide = 1;
        goToStorySlide(nextSlide);
    }, 6500); // 6.5 seconds auto rotate slides
}

function stopStoryAutoplay() {
    if (storyAutoPlayTimer) {
        clearInterval(storyAutoPlayTimer);
        storyAutoPlayTimer = null;
    }
}

// --------------------------------------------------------------------------
// 13. HIGH-END INTERACTION: CANVAS CONFETTI EXPLOSIONS
// --------------------------------------------------------------------------
function triggerConfetti(event) {
    const canvas = document.getElementById("confetti-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    
    // Set canvas sizing
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Source coordinates from clicked button, or defaults to center
    let startX = window.innerWidth / 2;
    let startY = window.innerHeight / 2;

    if (event && event.clientX && event.clientY) {
        startX = event.clientX;
        startY = event.clientY;
    }

    // Confetti particles configuration
    const colors = ["#FF6F91", "#FF9671", "#FFD1DC", "#D4AF37", "#5D4037", "#F5B041"];
    const particles = [];
    const particleCount = 45;

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: startX,
            y: startY,
            vx: (Math.random() - 0.5) * 12,
            vy: (Math.random() - 0.8) * 14 - 4, // upward momentum bias
            size: Math.random() * 8 + 6,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10,
            alpha: 1,
            decay: Math.random() * 0.015 + 0.015
        });
    }

    let animationFrameId;

    function updateAndDraw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let activeParticlesCount = 0;

        particles.forEach(p => {
            if (p.alpha <= 0) return;
            
            activeParticlesCount++;

            // Apply gravity and physics
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.35; // gravity pull
            p.vx *= 0.98; // air friction
            p.rotation += p.rotationSpeed;
            p.alpha -= p.decay;

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.globalAlpha = p.alpha;
            ctx.fillStyle = p.color;

            // Draw clean geometric rectangles representing confetti
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size / 1.5);
            ctx.restore();
        });

        if (activeParticlesCount > 0) {
            animationFrameId = requestAnimationFrame(updateAndDraw);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            cancelAnimationFrame(animationFrameId);
        }
    }

    // Launch loop
    updateAndDraw();
}

// --------------------------------------------------------------------------
// 14. INTERSECTION OBSERVER SCROLL REVEALS
// --------------------------------------------------------------------------
function setupScrollReveal() {
    // Add scroll classes to elements that haven't been revealed yet
    const elementsToReveal = document.querySelectorAll(".reveal-on-scroll:not(.revealed)");
    
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15 // trigger when 15% visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                // Stop observing once animation triggered
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToReveal.forEach(elem => {
        observer.observe(elem);
    });
}
