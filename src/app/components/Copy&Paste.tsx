import React from "react";
import { RiFileCopyLine, RiCheckLine } from "react-icons/ri";
import { FaPaste } from "react-icons/fa";

export const copyText = (text: string, cb?: () => void) => {
  if (navigator.clipboard && navigator.permissions) {
    navigator.clipboard.writeText(text).then(cb);
  } else if (document.queryCommandSupported("copy")) {
    const ele = document.createElement("textarea");
    ele.value = text;
    document.body.appendChild(ele);
    ele.select();
    document.execCommand("copy");
    document.body.removeChild(ele);
    cb?.();
  }
};

export function CopyToClipboard({
  targetId,
  className,
}: {
  targetId: string;
  className?: string;
}) {
  const [copied, setCopied] = React.useState(false);

  const handleCopyClick = () => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const textToCopy = targetElement.textContent;
      if (textToCopy) {
        copyText(textToCopy, () => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
      }
    }
  };

  return (
    <button className="bg-white text-green p-3 rounded-md" onClick={handleCopyClick}>
      {copied ? (
        <div className="center gap-2">
          <RiCheckLine className={className} width={15} height={15} />
          <p className="text-sm">Copied</p>
        </div>
      ) : (
        <div className="center gap-2">
            <RiFileCopyLine className={className} width={15} height={15}/>
            <p className="text-sm">Copy invite link</p>
        </div>
      )}
    </button>
  );
}
interface Props {
  targetId: string;
  onPaste?: (value: string) => void;
}

export function PasteFromClipboard({ targetId, onPaste }: Props) {
  const [pasted, setPasted] = React.useState(false);

  const handlePasteClick = async () => {
    try {
      const clipboardData = await navigator.clipboard.readText();
      const targetElement = document.getElementById(targetId);

      if (
        targetElement &&
        (targetElement instanceof HTMLInputElement ||
          targetElement instanceof HTMLTextAreaElement)
      ) {
        targetElement.value = clipboardData;
        setPasted(true);
        setTimeout(() => setPasted(false), 2000);

        onPaste && onPaste(clipboardData);
      } else {
        console.error("Target element not found or not an input field.");
      }
    } catch (error) {
      console.error("Failed to read clipboard data: ", error);
    }
  };

  return (
    <button type="button" className="text-xl" onClick={handlePasteClick}>
      {pasted ? (
      <div className="center gap-2">
         <FaPaste />
         <p>Pasted</p>
      </div>) : (
      <div className="center gap-2">
         <FaPaste />
         <p>Paste</p>
      </div>)
      }
    </button>
  );
}