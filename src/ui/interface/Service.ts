export interface Service {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    icon: string;
    subservice: Subservice[]
}

export interface Subservice {
    type: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
}