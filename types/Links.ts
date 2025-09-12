
export type navLinks = {
    name: string;
    link: string;
}

export type socialLinks = navLinks & {
    icon: React.ReactElement;
    color: "red" | "blue" | "black" | "green";
    position: "top-right"| "top-left" | "right-center" | "left-center" | "bottom-left" | "bottom-right"
    labelDirection: "left" | "right";
    platform: "github" | "twitter" | "linkedin" | "gmail" | "whatsapp" | "youtube";
    latestContent?: {
        type: "commit" | "post" | "video" | "email";
        title: string;
        description?: string;
        date: string;
        url?: string;
        repo?: string;
    };
};
