import { Box } from "@radix-ui/themes";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdown = `# Welcome to The HIVE!
 
i was thinking we can have general announcements and info up here and have it cycle through

it supports **markdown**, and you can even include images
![image](https://empathybytes.library.gatech.edu/sites/default/files/2023-04/hive-exterior%20%281%29.jpg)

and tables
| like | this |
|------|------|
| 1    | 2    |
`;

export default function Notices({}) {
    // const mdRef = useRef(null);

    // useEffect(() => {
    //     // find Markdown's height and slowly scroll to the bottom
    //     const mdRef = mdRef.current;
    // }, []);

    return (
        <Box
            width="100%"
            height="100%"
            maxWidth="100%"
            maxHeight="100%"
            p="8"
            overflow="auto"
        >
            <Markdown
                className="prose prose-invert prose-neutral prose-2xl prose-headings:font-bold"
                remarkPlugins={[remarkGfm]}
            >
                {markdown}
            </Markdown>
            {/* <div className="h-0" ref={mdRef} /> */}
        </Box>
    );
}
