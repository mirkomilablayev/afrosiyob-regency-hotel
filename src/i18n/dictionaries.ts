export type Language = 'uz' | 'en' | 'ru';

export type Dictionary = typeof dictionaries.en;

export const dictionaries = {
    uz: {
        navbar: {
            brand: "Afrosiyob Regency",
            callHotel: "Qo'ng'iroq",
            bookDirect: "Band qilish",
        },
        hero: {
            welcome: "Toshkentga xush kelibsiz",
            title: "Afrosiyob Regency Hotel",
            subtitle: "Toshkent markazida qulay dam olish",
            bookStay: "Xonani band qilish",
            callHotel: "Qo'ng'iroq qilish"
        },
        highlights: {
            tag: "Nima uchun bizni tanlaysiz",
            title: "Mehmonxona afzalliklari",
            wifi: "Bepul Wi-Fi",
            parking: "Avtoturargoh",
            sauna: "Sauna",
            rooms: "Qulay xonalar",
            reception: "24/7 Qabulxona",
            airport: "Aeroportga yaqin"
        },
        about: {
            tag: "Mehmonxona haqida",
            title: "Hashamat va qulaylik uyg'unligi",
            desc1: "Afrosiyob Regency mehmonxonasi qulay xonalar, zamonaviy qulayliklar hamda Toshkent markazi va aeroportga oson borish imkoniyatini taqdim etadi.",
            desc2: "Ushbu mehmonxona biznes va dam olish maqsadida sayohat qiluvchilar uchun mos, u sizga O'zbekiston markazida unutilmas qulayliklarni bag'ishlash uchun barpo etilgan.",
            stats: {
                luxury: "Hashamatli",
                reception: "Qabulxona",
                rooms: "Qulay xonalar"
            }
        },
        rooms: {
            tag: "Turar joylar",
            title: "Premium xonalarimiz",
            desc: "Sizning dam olishingizni unutilmas qilish uchun xos va hashamatli qulayliklarni his eting.",
            bookNow: "Band qilish",
            from: "dan",
            night: "/ kecha",
            types: {
                double: "Ikki kishilik xona (Double)",
                twin: "Ikki kishilik xona (Twin)",
                deluxe: "Lyuks xona (Deluxe)"
            },
            features: {
                kingBed: "Katta yotoq (King-size)",
                cityView: "Shahar manzarasi",
                wifi: "Bepul Wi-Fi",
                roomService: "Xona xizmati",
                twinBeds: "Ikkita yakkalik yotoq",
                desk: "Ish stoli",
                suite: "Katta syut",
                panoramic: "Panoramali manzara",
                living: "Yashash maydoni",
                minibar: "Premium minibar"
            }
        },
        reviews: {
            tag: "Ular nima deydilar",
            title: "Mehmonlar sharhlari",
            overall: "Umumiy reyting",
            verified: "Tasdiqlangan",
            review1: "Toza xonalar va samimiy xodimlar. Juda qulay joylashuv.",
            author1: "Germaniyalik mehmon",
            review2: "Qulay yashash va doim yordamga tayyor xodimlar.",
            author2: "Qozog'istonlik mehmon"
        },
        gallery: {
            tag: "Kashf eting",
            title: "Fotogalereya",
            desc: "Afrosiyob Regency mehmonxonasining go'zalligini fotogalereyamiz orqali o'rganing va o'z orzuingizdagi ta'tilni tasavvur qiling."
        },
        booking: {
            tag: "Band qilish",
            title: "Xonangizni band qiling",
            desc: "Buyurtma so'rovini yuboring va biz WhatsApp orqali darhol tasdiqlaymiz. Eng yaxshi narx kafolatlanadi.",
            checkin: "Kelish sanasi",
            checkout: "Ketish sanasi",
            guests: "Mehmonlar",
            adults: "Kattalar",
            adult: "Katta",
            more: "Ko'proq",
            roomType: "Xona turi",
            phone: "Telefon raqami",
            submit: "Band qilishni so'rash",
            whatsappMsg: "Mehmonxona band qilish so'rovi:"
        },
        location: {
            tag: "Joylashuv",
            title: "Bizni Toshkentdan toping",
            desc: "Shahar markazida qulay joylashgan Afrosiyob Regency mehmonxonasini havo, poyezd yoki avtomobilda kelishdan qat'iy nazar topish juda oson."
        },
        contact: {
            tag: "Biz bilan bog'lanish",
            title: "Biz yordam berishga tayyormiz",
            desc: "Savolingiz bormi yoki xona xarid qilmoqchimisiz? Bizning qo'llab-quvvatlash jamoamizga telefon yoki messenjerlar orqali murojaat qiling.",
            address: "Manzil",
            addressText: "Toshkent, Yakkasaroy tumani, Damariq mahalla",
            phone: "Telefon raqami",
            available: "24/7 mavjud",
            fastBooking: "Tezkor band qilish",
            fastBookingDesc: "Eng yaxshi narx va kafolatli xarid uchun to'g'ridan-to'g'ri bog'laning.",
            callNow: "Hozir qo'ng'iroq qilish",
            whatsapp: "WhatsApp",
            telegram: "Telegram"
        },
        footer: {
            desc: "Toshkent markazida qulay yashash va hashamatli xizmatlardan bahramand bo'ling.",
            quickLinks: "Tezkor havolalar",
            home: "Bosh sahifa",
            about: "Biz haqimizda",
            rooms: "Xonalar",
            amenities: "Qulayliklar",
            gallery: "Galereya",
            contact: "Aloqa ma'lumotlari",
            rights: "Barcha huquqlar himoyalangan.",
            privacy: "Maxfiylik siyosati",
            terms: "Xizmat shartlari"
        },
        mobileBar: {
            call: "Qo'ng'iroq",
            whatsapp: "WhatsApp",
            book: "Band qilish"
        }
    },
    en: {
        navbar: {
            brand: "Afrosiyob Regency",
            callHotel: "Call Hotel",
            bookDirect: "Book Direct",
        },
        hero: {
            welcome: "Welcome to Tashkent",
            title: "Afrosiyob Regency Hotel",
            subtitle: "Comfortable stay in the heart of Tashkent",
            bookStay: "Book Your Stay",
            callHotel: "Call Hotel"
        },
        highlights: {
            tag: "Why Stay With Us",
            title: "Hotel Highlights",
            wifi: "Free WiFi",
            parking: "Free Parking",
            sauna: "Sauna",
            rooms: "Comfortable Rooms",
            reception: "24/7 Reception",
            airport: "Near Airport"
        },
        about: {
            tag: "About Our Hotel",
            title: "A Perfect Blend of Luxury",
            desc1: "Afrosiyob Regency Hotel offers comfortable rooms, modern amenities, and convenient access to Tashkent city center and airport.",
            desc2: "Perfect for business and leisure travelers, our hotel is designed to provide you with an unforgettable stay in the heart of Uzbekistan.",
            stats: {
                luxury: "Luxury Hotel",
                reception: "Reception",
                rooms: "Comfortable Rooms"
            }
        },
        rooms: {
            tag: "Accommodations",
            title: "Our Premium Rooms",
            desc: "Experience the ultimate comfort and luxury tailored to make your stay unforgettable.",
            bookNow: "Book Now",
            from: "from",
            night: "/ night",
            types: {
                double: "Double Room",
                twin: "Twin Room",
                deluxe: "Deluxe Room"
            },
            features: {
                kingBed: "King-size bed",
                cityView: "City view",
                wifi: "Free Wi-Fi",
                roomService: "Room service",
                twinBeds: "Two single beds",
                desk: "Work desk",
                suite: "Grand suite",
                panoramic: "Panoramic view",
                living: "Living area",
                minibar: "Premium minibar"
            }
        },
        reviews: {
            tag: "What They Say",
            title: "Guest Reviews",
            overall: "Overall Rating",
            verified: "Verified Guest",
            review1: "Clean rooms and friendly staff. Very convenient location.",
            author1: "Guest from Germany",
            review2: "Comfortable stay and helpful reception staff.",
            author2: "Guest from Kazakhstan"
        },
        gallery: {
            tag: "Discover",
            title: "Photo Gallery",
            desc: "Explore the beauty of Afrosiyob Regency Hotel through our photo gallery and imagine your perfect stay."
        },
        booking: {
            tag: "Reservation",
            title: "Book Your Stay",
            desc: "Send a booking request and we will confirm your reservation immediately via WhatsApp. Best price guaranteed.",
            checkin: "Check-in Date",
            checkout: "Check-out Date",
            guests: "Guests",
            adults: "Adults",
            adult: "Adult",
            more: "More",
            roomType: "Room Type",
            phone: "Phone Number",
            submit: "Request Booking",
            whatsappMsg: "Hotel Booking Request:"
        },
        location: {
            tag: "Location",
            title: "Find Us in Tashkent",
            desc: "Located conveniently in the heart of the city, Afrosiyob Regency Hotel is easy to find whether you arrive by air, train, or car."
        },
        contact: {
            tag: "Contact Us",
            title: "We Are Here to Help",
            desc: "Have a question or want to book a room? Reach out to our dedicated support team via phone or messengers.",
            address: "Address",
            addressText: "Yakkasaray district, Damarik mahalla, Tashkent",
            phone: "Phone Number",
            available: "Available 24/7",
            fastBooking: "Fast Booking",
            fastBookingDesc: "Book directly with us for the best price guarantee and flexible cancellation policies.",
            callNow: "Call Now",
            whatsapp: "WhatsApp",
            telegram: "Telegram"
        },
        footer: {
            desc: "Your comfortable stay in Tashkent. Experience luxury, modern amenities, and world-class hospitality.",
            quickLinks: "Quick Links",
            home: "Home",
            about: "About",
            rooms: "Rooms",
            amenities: "Amenities",
            gallery: "Gallery",
            contact: "Contact Info",
            rights: "All rights reserved.",
            privacy: "Privacy Policy",
            terms: "Terms of Service"
        },
        mobileBar: {
            call: "Call",
            whatsapp: "WhatsApp",
            book: "Book"
        }
    },
    ru: {
        navbar: {
            brand: "Afrosiyob Regency",
            callHotel: "Позвонить",
            bookDirect: "Бронь",
        },
        hero: {
            welcome: "Добро пожаловать в Ташкент",
            title: "Afrosiyob Regency Hotel",
            subtitle: "Комфортное проживание в центре Ташкента",
            bookStay: "Забронировать",
            callHotel: "Позвонить в отель"
        },
        highlights: {
            tag: "Почему мы",
            title: "Преимущества отеля",
            wifi: "Бесплатный Wi-Fi",
            parking: "Парковка",
            sauna: "Сауна",
            rooms: "Уютные номера",
            reception: "24/7 Ресепшн",
            airport: "Рядом с аэропортом"
        },
        about: {
            tag: "Об отеле",
            title: "Сочетание роскоши и комфорта",
            desc1: "Отель Afrosiyob Regency предлагает комфортабельные номера, современные удобства и удобный доступ к центру Ташкента.",
            desc2: "Идеально подходит для деловых путешественников и туристов, наш отель призван обеспечить вам незабываемое пребывание.",
            stats: {
                luxury: "Роскошный",
                reception: "Ресепшн",
                rooms: "Уютные номера"
            }
        },
        rooms: {
            tag: "Размещение",
            title: "Наши премиальные номера",
            desc: "Испытайте максимальный комфорт и роскошь, чтобы сделать ваше пребывание незабываемым.",
            bookNow: "Забронировать",
            from: "от",
            night: "/ ночь",
            types: {
                double: "Двухместный номер (Double)",
                twin: "Двухместный номер (Twin)",
                deluxe: "Люкс номер (Deluxe)"
            },
            features: {
                kingBed: "Большая кровать",
                cityView: "Вид на город",
                wifi: "Бесплатный Wi-Fi",
                roomService: "Обслуживание номеров",
                twinBeds: "Две кровати",
                desk: "Рабочий стол",
                suite: "Гранд люкс",
                panoramic: "Панорамный вид",
                living: "Гостиная зона",
                minibar: "Мини-бар"
            }
        },
        reviews: {
            tag: "Отзывы",
            title: "Что говорят гости",
            overall: "Общий рейтинг",
            verified: "Проверенный гость",
            review1: "Чистые номера и приветливый персонал. Очень удобное расположение.",
            author1: "Гость из Германии",
            review2: "Комфортное пребывание и отзывчивый персонал на ресепшене.",
            author2: "Гость из Казахстана"
        },
        gallery: {
            tag: "Узнайте",
            title: "Фотогалерея",
            desc: "Изучите красоту отеля Afrosiyob Regency через нашу фотогалерею и представьте свое идеальное пребывание."
        },
        booking: {
            tag: "Бронирование",
            title: "Забронируйте номер",
            desc: "Отправьте запрос, и мы немедленно подтвердим ваше бронирование по WhatsApp. Лучшая цена гарантирована.",
            checkin: "Дата заезда",
            checkout: "Дата выезда",
            guests: "Гости",
            adults: "Взрослых",
            adult: "Взрослый",
            more: "Больше",
            roomType: "Тип номера",
            phone: "Номер телефона",
            submit: "Оставить заявку",
            whatsappMsg: "Заявка на бронирование:"
        },
        location: {
            tag: "Расположение",
            title: "Найдите нас в Ташкенте",
            desc: "Отель Afrosiyob Regency удобно расположен в центре города, его легко найти, независимо от того, прибываете ли вы на самолете, поезде или автомобиле."
        },
        contact: {
            tag: "Свяжитесь с нами",
            title: "Мы готовы помочь",
            desc: "Есть вопрос или хотите забронировать номер? Свяжитесь с нашей службой поддержки по телефону или через мессенджеры.",
            address: "Адрес",
            addressText: "Ташкент, Яккасарайский район, махалля Дамарик",
            phone: "Номер телефона",
            available: "Доступно 24/7",
            fastBooking: "Быстрое бронирование",
            fastBookingDesc: "Бронируйте напрямую у нас, чтобы получить гарантию лучшей цены.",
            callNow: "Позвонить сейчас",
            whatsapp: "WhatsApp",
            telegram: "Telegram"
        },
        footer: {
            desc: "Комфортное проживание в Ташкенте. Насладитесь роскошью и современными удобствами.",
            quickLinks: "Быстрые ссылки",
            home: "Главная",
            about: "Об отеле",
            rooms: "Номера",
            amenities: "Удобства",
            gallery: "Галерея",
            contact: "Контакты",
            rights: "Все права защищены.",
            privacy: "Политика конфиденциальности",
            terms: "Условия использования"
        },
        mobileBar: {
            call: "Звонок",
            whatsapp: "WhatsApp",
            book: "Бронь"
        }
    }
};
