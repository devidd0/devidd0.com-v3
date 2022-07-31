import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  solarizedlight,
  a11yDark,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import toast from "react-hot-toast";
import copy from "copy-to-clipboard";
const Component = (props) => {
  const { theme } = useTheme();
  console.log(theme);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }, [copied]);
  return (
    <div className="relative">
      <SyntaxHighlighter
        language={props.node.language}
        style={theme == "white" ? solarizedlight : a11yDark}
      >
        {props.node.code}
      </SyntaxHighlighter>
      <div
        onClick={() => {
          copy(props.node.code);
          toast.success('Code Block Copied')
        }}
        className="absolute top-2 right-2 hover:scale-[1.1] cursor-pointer transition-transform"
      >
        <HiOutlineClipboardCopy size={21} />
      </div>
    </div>
  );
};
export default Component;
