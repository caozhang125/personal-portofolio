export interface ISections {
    sections: Section[];
}

export interface Section {
    id: number,
    title: string,
    pages: Page[];
}

export interface Page {
    id:          number;
    title:       string;
    description: string;
    author:      string;
    img:         string;
}


