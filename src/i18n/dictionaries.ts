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
                double: "Ikki kishilik xona",
                twin: "Ikki yotoqli xona",
                deluxe: "Lyuks xona"
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
            author2: "Qozog'istonlik mehmon",
            review3: "Ajoyib xizmat ko'rsatish va chiroyli interyer. Shved stoli nonushtasi juda yoqdi — har kuni yangi taomlar va mevalar. Xodimlar doim yordam berishga tayyor edi.",
            author3: "Rossiyalik mehmon",
            review4: "Hashamatli tajriba. Spa va fitnes markazi a'lo darajada edi, xodimlar e'tiborli. Xonamdagi panoramali manzara meni lol qoldirdi — Toshkent kechalari ajoyib ko'rindi.",
            author4: "BAA dan mehmon",
            review5: "Ajoyib shahar manzarali katta xonalar. Dam olishingiz uchun kerak bo'lgan hamma narsa bor. Mehmonxona juda ozoda va xodimlar ingliz tilida ham muloqot qila olishadi.",
            author5: "Turkiyalik mehmon",
            review6: "Shahar markazida joylashgan bo'lishiga qaramay, xonalar juda tinch va qulay. Kechki ovqatlar restoranda juda mazali edi. Qayta kelishni rejalashtiryapman!",
            author6: "Rossiyalik mehmon",
            review7: "Birinchi marta O'zbekistonga keldim va bu mehmonxona ajoyib taassurot qoldirdi. Milliy oshxona va zamonaviy qulayliklarning uyg'unligi zo'r. Aeroportdan transfer ham o'z vaqtida edi.",
            author7: "BAA dan mehmon",
            review8: "Ishbilarmonlik safari uchun bul yerda qoldim va mehmonxona barcha ehtiyojlarimni qondirdi. Tez internet, qulay ish stoli va professional xizmat. Keyingi safarimda ham shu yerda qolaman.",
            author8: "Turkiyalik mehmon"
        },
        gallery: {
            tag: "Kashf eting",
            title: "Fotogalereya",
            desc: "Afrosiyob Regency mehmonxonasining go'zalligini fotogalereyamiz orqali o'rganing va o'z orzuingizdagi ta'tilni tasavvur qiling.",
            images: {
                lobby: "Mehmonxona foyesi",
                restaurant: "Restoran hududi",
                spa: "Hashamatli Spa",
                breakfast: "Shved stoli nonushtasi",
                fitness: "Fitnes markazi",
                sunset: "Quyosh botish manzarasi"
            }
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
        faq: {
            tag: "Ma'lumotlar",
            title: "Ko'p so'raladigan savollar",
            q1: "Kelish va ketish vaqtlari qanday?",
            a1: "Kelish vaqti 14:00 dan, ketish vaqti esa 12:00 gacha. Ehtiyojingizga qarab erta kelish yoki kech ketish imkoniyatlarini taklif qilishimiz mumkin.",
            q2: "Bekor qilish siyosati qanday?",
            a2: "Aksariyat xaridlarda kelish kuningizdan 24 soat oldin bepul bekor qilishingiz mumkin. Katta bayramlar damlarida qoidalar o'zgarishi mumkin.",
            q3: "Aeroportdan transfer xizmati bormi?",
            a3: "Ha, biz aeroportdan mehmonxonagacha pullik transfer xizmatini taklif qilamiz. Iltimos, band qilish vaqtida yoki biz bilan oldindan bog'lanib, bu haqda xabar bering.",
            q4: "Mehmonxonada avtoturargoh bormi?",
            a4: "Ha, mehmonlarimiz uchun 24/7 qo'riqlanadigan xavfsiz va bepul avtoturargoh mavjud."
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
            author2: "Guest from Kazakhstan",
            review3: "Excellent service and beautifully decorated interior. The buffet breakfast was outstanding every day — fresh dishes and seasonal fruits. Staff always went above and beyond.",
            author3: "Guest from Russia",
            review4: "A truly luxurious experience. The spa and fitness center were exceptional and the staff was incredibly attentive. The panoramic view from my room over nighttime Tashkent was breathtaking.",
            author4: "Guest from UAE",
            review5: "Spacious rooms with a fantastic city view. Everything needed for a comfortable stay was available. The hotel is spotlessly clean, and staff communicate well in English too.",
            author5: "Guest from Turkey",
            review6: "Despite being right in the city center, the rooms were surprisingly peaceful and restful. Dinners at the restaurant were absolutely delicious. Already planning to come back!",
            author6: "Guest from Russia",
            review7: "First time visiting Uzbekistan and this hotel left a wonderful impression. The blend of traditional cuisine and modern comfort is excellent. Airport transfer was prompt and professional.",
            author7: "Guest from UAE",
            review8: "Stayed here for a business trip and the hotel met all my needs perfectly. Fast internet, comfortable work desk, and professional service throughout. Will definitely return on my next visit.",
            author8: "Guest from Turkey"
        },
        gallery: {
            tag: "Discover",
            title: "Photo Gallery",
            desc: "Explore the beauty of Afrosiyob Regency Hotel through our photo gallery and imagine your perfect stay.",
            images: {
                lobby: "Hotel Lobby",
                restaurant: "Restaurant Area",
                spa: "Luxury Spa",
                breakfast: "Buffet Breakfast",
                fitness: "Fitness Center",
                sunset: "Sunset View"
            }
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
        faq: {
            tag: "Information",
            title: "Frequently Asked Questions",
            q1: "What are the check-in and check-out times?",
            a1: "Check-in is from 14:00, and check-out is until 12:00. We can arrange early check-in or late check-out upon request, subject to availability.",
            q2: "What is your cancellation policy?",
            a2: "For most reservations, you can cancel for free up to 24 hours before your arrival date. Policies may vary during major holidays and events.",
            q3: "Do you provide airport transfer?",
            a3: "Yes, we offer an airport transfer service for an additional fee. Please request this during booking or contact us in advance.",
            q4: "Is there parking available at the hotel?",
            a4: "Yes, we provide free, secure 24/7 guarded parking for all our guests."
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
            author2: "Гость из Казахстана",
            review3: "Отличное обслуживание и красивый интерьер. Завтрак-шведский стол был превосходен каждый день — свежие блюда и сезонные фрукты. Персонал всегда был готов помочь.",
            author3: "Гость из России",
            review4: "Поистине роскошный опыт. Спа и фитнес-центр были великолепны, персонал внимательный и отзывчивый. Панорамный вид на ночной Ташкент из номера был просто захватывающим.",
            author4: "Гость из ОАЭ",
            review5: "Просторные номера с потрясающим видом на город. Всё необходимое для комфортного проживания было в наличии. Отель идеально чистый, персонал хорошо говорит по-английски.",
            author5: "Гость из Турции",
            review6: "Несмотря на расположение в самом центре города, номера оказались очень тихими и уютными. Ужины в ресторане были просто великолепны. Уже планирую вернуться снова!",
            author6: "Гость из России",
            review7: "Первый раз в Узбекистане, и этот отель произвёл на меня прекрасное впечатление. Сочетание национальной кухни и современного комфорта — на высшем уровне. Трансфер из аэропорта был точным.",
            author7: "Гость из ОАЭ",
            review8: "Останавливался здесь в деловой поездке, и отель полностью удовлетворил все мои потребности. Быстрый интернет, удобный рабочий стол и профессиональный сервис. Обязательно вернусь.",
            author8: "Гость из Турции"
        },
        gallery: {
            tag: "Узнайте",
            title: "Фотогалерея",
            desc: "Изучите красоту отеля Afrosiyob Regency через нашу фотогалерею и представьте свое идеальное пребывание.",
            images: {
                lobby: "Лобби отеля",
                restaurant: "Территория ресторана",
                spa: "Роскошный Спа",
                breakfast: "Завтрак Шведский стол",
                fitness: "Фитнес-центр",
                sunset: "Вид на закат"
            }
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
        faq: {
            tag: "Информация",
            title: "Часто задаваемые вопросы",
            q1: "Какое время заезда и выезда?",
            a1: "Время заезда — с 14:00, время выезда — до 12:00. При наличии возможности мы можем организовать ранний заезд или поздний выезд по запросу.",
            q2: "Какова ваша политика отмены бронирования?",
            a2: "В большинстве случаев вы можете бесплатно отменить бронирование за 24 часа до даты заезда. Правила могут меняться в период праздников и крупных мероприятий.",
            q3: "Предоставляете ли вы трансфер от/до аэропорта?",
            a3: "Да, мы предлагаем услугу трансфера из аэропорта за дополнительную плату. Пожалуйста, сообщите нам об этом при бронировании или свяжитесь с нами заранее.",
            q4: "Есть ли парковка на территории отеля?",
            a4: "Да, для всех наших гостей предоставляется бесплатная охраняемая парковка 24/7."
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
