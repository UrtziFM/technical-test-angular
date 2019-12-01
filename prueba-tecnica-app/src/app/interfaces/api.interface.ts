export interface IWordLang{
    name: string;
    description: string;
    audio?: string;
}


export interface IWords {
    id: number|string;
    image: string;
    es: IWordLang;
    en: IWordLang;
}