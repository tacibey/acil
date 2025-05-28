import {
    // Orijinalde olup kullanılmayan ikonlar (varsa)
    Zap,
    Shield,
    Heart,
    Coffee,
    Smile,
    Type,
    TabletSmartphone,
    CodeXml,

    // Yeni eklenen ve kullanılan ikonlar
    ChartLine,        // Hızlı Değerleme
    CalendarCheck,    // 21 Gün Garanti
    Handshake,        // Uzman Danışmanlar
    ClipboardCheck,   // Sıfır Stres (Checklist yerine bu kullanıldı)
    TrendingUp,       // Yüksek Kazanç
    Info,             // Şeffaf Süreç
} from 'lucide-astro';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Zap; // Bu tip tanımı için herhangi bir Lucide ikonu kullanılabilir.

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
                icon: ClipboardCheck, // Burası Checklist'ten ClipboardCheck olarak değiştirildi.
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
