import { Zap, Shield, Heart, Coffee, Smile, Type, TabletSmartphone, CodeXml } from 'lucide-astro';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Zap;

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
        icon: ChartLine, // Piyasa değeri ve analizi için
        title: 'Hızlı Değerleme',
        description: 'Piyasa değerini anında öğrenin.'
    },
    {
        icon: CalendarCheck, // Belirlenen süre ve garanti için
        title: '21 Gün Garanti',
        description: 'Belirlenen sürede hızlı ve güvenli satış.'
    },
    {
        icon: Handshake, // Güvenilir danışmanlar ve destek için
        title: 'Uzman Danışmanlar',
        description: 'Alanında yetkin, güvenilir destek.'
    },
    {
        icon: Checklist, // Süreç takibi ve stresin azalması için
        title: 'Sıfır Stres',
        description: 'Evrak ve süreç takibi bize ait.'
    },
    {
        icon: TrendingUp, // Yüksek kazanç ve değer artışı için
        title: 'Yüksek Kazanç',
        description: 'Gayrimenkulünüzü değerinde satın.'
    },
    {
        icon: InfoCircle, // Şeffaflık ve bilgilendirme için
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
