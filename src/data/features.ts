import {
    Zap, // Bu ikonu kullanmıyoruz ama orijinal dosyada olduğu için bırakıldı.
    Shield, // Bu ikonu kullanmıyoruz ama orijinal dosyada olduğu için bırakıldı.
    Heart, // Bu ikonu kullanmıyoruz ama orijinal dosyada olduğu için bırakıldı.
    Coffee, // Bu ikonu kullanmıyoruz ama orijinal dosyada olduğu için bırakıldı.
    Smile, // Bu ikonu kullanmıyoruz ama orijinal dosyada olduğu için bırakıldı.
    Type, // Bu ikonu kullanmıyoruz ama orijinal dosyada olduğu için bırakıldı.
    TabletSmartphone, // Bu ikonu kullanmıyoruz ama orijinal dosyada olduğu için bırakıldı.
    CodeXml, // Bu ikonu kullanmıyoruz ama orijinal dosyada olduğu için bırakıldı.

    // Yeni eklenen ikonlar
    ChartLine,        // Hızlı Değerleme
    CalendarCheck,    // 21 Gün Garanti
    Handshake,        // Uzman Danışmanlar
    Checklist,        // Sıfır Stres
    TrendingUp,       // Yüksek Kazanç
    Info,             // Şeffaf Süreç (Lucide'da "InfoCircle" yerine genellikle "Info" kullanılır)
} from 'lucide-astro';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Zap; // Buradaki "Zap" sadece tip tanımı içindir, herhangi bir Lucide ikonu olabilir.

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: ChartLine,
                title: 'Hızlı Değerleme',
                description: 'Piyasa değerini anında öğrenin.'
            },
            {
                icon: CalendarCheck,
                title: '21 Gün Garanti',
                description: 'Belirlenen sürede hızlı ve güvenli satış.'
            },
            {
                icon: Handshake,
                title: 'Uzman Danışmanlar',
                description: 'Alanında yetkin, güvenilir destek.'
            },
            {
                icon: Checklist,
                title: 'Sıfır Stres',
                description: 'Evrak ve süreç takibi bize ait.'
            },
            {
                icon: TrendingUp,
                title: 'Yüksek Kazanç',
                description: 'Gayrimenkulünüzü değerinde satın.'
            },
            {
                icon: Info,
                title: 'Şeffaf Süreç',
                description: 'Her adımda tam bilgilendirme.'
            }
        ]
    },
    // Orijinal features.ts dosyasındaki secondary listesi değişmeden bırakıldı.
    secondary: {
        id: 'secondary',
        features: [
            {
                icon: Heart,
                title: 'Made with Love',
                description: 'Crafted with attention to detail'
            },
            {
                icon: Coffee,
                title: 'Always Fresh',
                description: 'Regular updates and improvements'
            },
            {
                icon: Smile,
                title: 'User Friendly',
                description: 'Intuitive and easy to use'
            }
        ]
    }
};
