export interface TocItem {
    pageTitle: string;
    pageMeta: TocItemMeta;
    dirName: string;
    fileName: string;
    viewOnRelativePath: string;
}

export interface TocItemMeta {
    summary?: string[];
    category: string;
    date?: string[];
}
