export interface Paper {
    title: string;
    description: string;
    publishedAt: string;
    downloadLink: string;
    previewLink?: string;
    type: "Mine" | "External";
    originalLink?: string;
}

export const PAPERS: Paper[] = [
    {
        title: "Attention Is All You Need",
        description: "The OG paper that introduced the transformer architecture.",
        publishedAt: "2017-06-12",
        downloadLink: "/papers_pdf/attention_paper.pdf",
        previewLink: "/papers_pdf/attention_paper.pdf",
        type: "External",
        originalLink: "https://arxiv.org/abs/1706.03762",
    },
];
