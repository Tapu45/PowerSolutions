"use client";
import { useEffect, useCallback, useState, JSX } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeNode, CodeHighlightNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { $generateHtmlFromNodes, $generateNodesFromDOM } from "@lexical/html";
import { CAN_REDO_COMMAND, CAN_UNDO_COMMAND } from "lexical";
import {
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  UNDO_COMMAND,
  REDO_COMMAND,
  $createParagraphNode,
  $getRoot,
  DecoratorNode,
  DOMExportOutput,
  EditorConfig,
  LexicalNode,
  NodeKey,
  SerializedLexicalNode,
  Spread,
} from "lexical";
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
  $isListNode,
} from "@lexical/list";
import {
  $createHeadingNode,
  $createQuoteNode,
  $isHeadingNode,
} from "@lexical/rich-text";
import { $createCodeNode, $isCodeNode } from "@lexical/code";
import { TOGGLE_LINK_COMMAND, $isLinkNode } from "@lexical/link";
import {
  Bold,
  Italic,
  Strikethrough,
  List,
  ListOrdered,
  Quote,
  Undo,
  Redo,
  Link2,
  Image as ImageIcon,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Palette,
} from "lucide-react";
import { $setBlocksType } from "@lexical/selection";
import { $patchStyleText } from "@lexical/selection";

const MenuButton = ({
  onClick,
  isActive = false,
  disabled = false,
  children,
  title,
}: {
  onClick: () => void;
  isActive?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  title?: string;
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    title={title}
    className={`p-2 rounded-lg transition-colors ${
      isActive
        ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
    } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
  >
    {children}
  </button>
);

const COLOR_PALETTE = [
  "#000000", // Black
  "#EF4444", // Red
  "#F97316", // Orange
  "#EAB308", // Yellow
  "#22C55E", // Green
  "#0EA5E9", // Blue
  "#8B5CF6", // Purple
  "#EC4899", // Pink
];

// Custom Image Node Implementation
type SerializedImageNode = Spread<
  {
    src: string;
    altText: string;
    width?: number;
    height?: number;
  },
  SerializedLexicalNode
>;

class ImageNode extends DecoratorNode<JSX.Element> {
  __src: string;
  __altText: string;
  __width?: number;
  __height?: number;

  static getType(): string {
    return "image";
  }

  static clone(node: ImageNode): ImageNode {
    return new ImageNode(
      node.__src,
      node.__altText,
      node.__width,
      node.__height,
      node.__key
    );
  }

  constructor(
    src: string,
    altText?: string,
    width?: number,
    height?: number,
    key?: NodeKey
  ) {
    super(key);
    this.__src = src;
    this.__altText = altText || "";
    this.__width = width;
    this.__height = height;
  }

  createDOM(config: EditorConfig): HTMLElement {
    const div = document.createElement("div");
    div.style.display = "block";
    div.style.margin = "1em 0";
    return div;
  }

  updateDOM(): false {
    return false;
  }

  exportDOM(): DOMExportOutput {
    const element = document.createElement("img");
    element.setAttribute("src", this.__src);
    element.setAttribute("alt", this.__altText);
    if (this.__width) {
      element.setAttribute("width", this.__width.toString());
    }
    if (this.__height) {
      element.setAttribute("height", this.__height.toString());
    }
    element.style.maxWidth = "100%";
    element.style.height = "auto";
    element.style.display = "block";
    return { element };
  }

  static importJSON(serializedNode: SerializedImageNode): ImageNode {
    const { src, altText, width, height } = serializedNode;
    return $createImageNode({ src, altText, width, height });
  }

  exportJSON(): SerializedImageNode {
    return {
      src: this.__src,
      altText: this.__altText,
      width: this.__width,
      height: this.__height,
      type: "image",
      version: 1,
    };
  }

  decorate(): JSX.Element {
    return (
      <img
        src={this.__src}
        alt={this.__altText}
        style={{
          maxWidth: "100%",
          height: "auto",
          display: "block",
          margin: "1em 0",
        }}
        width={this.__width}
        height={this.__height}
      />
    );
  }
}

function $createImageNode({
  src,
  altText = "",
  width,
  height,
}: {
  src: string;
  altText?: string;
  width?: number;
  height?: number;
}): ImageNode {
  return new ImageNode(src, altText, width, height);
}

function $isImageNode(node: LexicalNode | null | undefined): node is ImageNode {
  return node instanceof ImageNode;
}

// Toolbar Plugin
function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const [activeStates, setActiveStates] = useState({
    bold: false,
    italic: false,
    strikethrough: false,
    h1: false,
    h2: false,
    h3: false,
    bullet: false,
    number: false,
    quote: false,
    code: false,
    link: false,
  });
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const anchorNode = selection.anchor.getNode();
      const element =
        anchorNode.getKey() === "root"
          ? anchorNode
          : anchorNode.getTopLevelElementOrThrow();
      const elementKey = element.getKey();
      const elementDOM = editor.getElementByKey(elementKey);

      setActiveStates({
        bold: selection.hasFormat("bold"),
        italic: selection.hasFormat("italic"),
        strikethrough: selection.hasFormat("strikethrough"),
        h1: $isHeadingNode(element) && element.getTag() === "h1",
        h2: $isHeadingNode(element) && element.getTag() === "h2",
        h3: $isHeadingNode(element) && element.getTag() === "h3",
        bullet: $isListNode(element) && element.getListType() === "bullet",
        number: $isListNode(element) && element.getListType() === "number",
        quote: element.getType() === "quote",
        code: $isCodeNode(element),
        link: $isLinkNode(anchorNode) || $isLinkNode(anchorNode.getParent()),
      });
    }
  }, [editor]);

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        updateToolbar();
      });
    });
  }, [editor, updateToolbar]);

  useEffect(() => {
    return editor.registerCommand(
      CAN_UNDO_COMMAND,
      (payload) => {
        setCanUndo(payload);
        return false;
      },
      1
    );
  }, [editor]);

  useEffect(() => {
    return editor.registerCommand(
      CAN_REDO_COMMAND,
      (payload) => {
        setCanRedo(payload);
        return false;
      },
      1
    );
  }, [editor]);

  const formatHeading = (headingTag: string | undefined) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createHeadingNode(headingTag as "h1" | "h2" | "h3"));
      }
    });
  };

  const formatQuote = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createQuoteNode());
      }
    });
  };

  const formatCode = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createCodeNode());
      }
    });
  };

  const insertLink = () => {
    if (!activeStates.link) {
      const url = prompt("Enter URL:");
      if (url) {
        editor.dispatchCommand(TOGGLE_LINK_COMMAND, url);
      }
    } else {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    }
  };

  const insertImage = () => {
    const url = prompt("Enter image URL:");
    if (url) {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          const imageNode = $createImageNode({ src: url });
          selection.insertNodes([imageNode]);
        }
      });
    }
  };

  const setTextColor = (color: string) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $patchStyleText(selection, { color });
      }
    });
    setShowColorPicker(false);
  };

  const formatBulletList = () => {
    if (activeStates.bullet) {
      editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
    } else {
      editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
    }
  };

  const formatNumberedList = () => {
    if (activeStates.number) {
      editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
    } else {
      editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
    }
  };

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 p-3 flex flex-wrap gap-2 bg-gray-50 dark:bg-gray-800/50">
      {/* Text Formatting */}
      <div className="flex gap-1">
        <MenuButton
          onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")}
          isActive={activeStates.bold}
          title="Bold (Ctrl+B)"
        >
          <Bold className="w-4 h-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic")}
          isActive={activeStates.italic}
          title="Italic (Ctrl+I)"
        >
          <Italic className="w-4 h-4" />
        </MenuButton>
        <MenuButton
          onClick={() =>
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough")
          }
          isActive={activeStates.strikethrough}
          title="Strikethrough"
        >
          <Strikethrough className="w-4 h-4" />
        </MenuButton>

        {/* Text Color */}
        <div className="relative">
          <MenuButton
            onClick={() => setShowColorPicker(!showColorPicker)}
            title="Text Color"
          >
            <Palette className="w-4 h-4" />
          </MenuButton>
          {showColorPicker && (
            <div className="absolute top-full mt-2 left-0 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-3 shadow-lg z-50">
              <div className="grid grid-cols-4 gap-2">
                {COLOR_PALETTE.map((color) => (
                  <button
                    key={color}
                    onClick={() => setTextColor(color)}
                    className="w-6 h-6 rounded border-2 border-gray-300 hover:border-gray-500 transition-colors"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
              <input
                type="color"
                onChange={(e) => setTextColor(e.target.value)}
                className="w-full mt-2 h-8 rounded cursor-pointer"
                title="Custom color"
              />
            </div>
          )}
        </div>
      </div>

      <div className="w-px h-6 bg-gray-300 dark:bg-gray-600" />

      {/* Headings */}
      <div className="flex gap-1">
        <MenuButton
          onClick={() => formatHeading("h1")}
          isActive={activeStates.h1}
          title="Heading 1"
        >
          <Heading1 className="w-4 h-4" />
        </MenuButton>
        <MenuButton
          onClick={() => formatHeading("h2")}
          isActive={activeStates.h2}
          title="Heading 2"
        >
          <Heading2 className="w-4 h-4" />
        </MenuButton>
        <MenuButton
          onClick={() => formatHeading("h3")}
          isActive={activeStates.h3}
          title="Heading 3"
        >
          <Heading3 className="w-4 h-4" />
        </MenuButton>
      </div>

      <div className="w-px h-6 bg-gray-300 dark:bg-gray-600" />

      {/* Lists and Blocks */}
      <div className="flex gap-1">
        <MenuButton
          onClick={formatBulletList}
          isActive={activeStates.bullet}
          title="Bullet List"
        >
          <List className="w-4 h-4" />
        </MenuButton>
        <MenuButton
          onClick={formatNumberedList}
          isActive={activeStates.number}
          title="Ordered List"
        >
          <ListOrdered className="w-4 h-4" />
        </MenuButton>
        <MenuButton
          onClick={formatQuote}
          isActive={activeStates.quote}
          title="Blockquote"
        >
          <Quote className="w-4 h-4" />
        </MenuButton>
        <MenuButton
          onClick={formatCode}
          isActive={activeStates.code}
          title="Code Block"
        >
          <Code className="w-4 h-4" />
        </MenuButton>
      </div>

      <div className="w-px h-6 bg-gray-300 dark:bg-gray-600" />

      {/* Media and Links */}
      <div className="flex gap-1">
        <MenuButton
          onClick={insertLink}
          isActive={activeStates.link}
          title="Add Link"
        >
          <Link2 className="w-4 h-4" />
        </MenuButton>
        <MenuButton onClick={insertImage} title="Add Image">
          <ImageIcon className="w-4 h-4" />
        </MenuButton>
      </div>

      <div className="flex-1" />

      {/* Undo/Redo */}
      <div className="flex gap-1">
        <MenuButton
          onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)}
          disabled={!canUndo}
          title="Undo"
        >
          <Undo className="w-4 h-4" />
        </MenuButton>
        <MenuButton
          onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)}
          disabled={!canRedo}
          title="Redo"
        >
          <Redo className="w-4 h-4" />
        </MenuButton>
      </div>
    </div>
  );
}

// HTML Sync Plugin
function HTMLSyncPlugin({
  onChange,
  initialContent,
}: {
  onChange: (content: string) => void;
  initialContent: string;
}) {
  const [editor] = useLexicalComposerContext();
  const [isFirstRender, setIsFirstRender] = useState(true);

  // Load initial content
  useEffect(() => {
    if (initialContent && isFirstRender) {
      editor.update(() => {
        const parser = new DOMParser();
        const dom = parser.parseFromString(initialContent, "text/html");
        const nodes = $generateNodesFromDOM(editor, dom);
        const root = $getRoot();
        root.clear();
        root.append(...nodes);
      });
      setIsFirstRender(false);
    }
  }, [editor, initialContent, isFirstRender]);

  // Handle changes
  const handleChange = useCallback(
    (editorState: { read: (arg0: () => void) => void; }) => {
      editorState.read(() => {
        const htmlString = $generateHtmlFromNodes(editor);
        onChange(htmlString);
      });
    },
    [editor, onChange]
  );

  return <OnChangePlugin onChange={handleChange} ignoreSelectionChange />;
}

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

export default function RichTextEditor({
  content,
  onChange,
  placeholder = "Write something amazing...",
}: RichTextEditorProps) {
  const initialConfig = {
    namespace: "RichTextEditor",
    theme: {
      paragraph: "editor-paragraph",
      quote: "editor-quote",
      heading: {
        h1: "editor-heading-h1",
        h2: "editor-heading-h2",
        h3: "editor-heading-h3",
      },
      list: {
        nested: {
          listitem: "editor-nested-listitem",
        },
        ol: "editor-list-ol",
        ul: "editor-list-ul",
        listitem: "editor-listitem",
      },
      image: "editor-image",
      link: "editor-link",
      text: {
        bold: "editor-text-bold",
        italic: "editor-text-italic",
        strikethrough: "editor-text-strikethrough",
        underline: "editor-text-underline",
      },
      code: "editor-code",
      codeHighlight: {},
    },
    onError: (error: any) => {
      console.error(error);
    },
    nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      CodeNode,
      CodeHighlightNode,
      AutoLinkNode,
      LinkNode,
      ImageNode,
    ],
  };

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm">
      <LexicalComposer initialConfig={initialConfig}>
        <ToolbarPlugin />
        <div className="relative editor-content prose dark:prose-invert prose-sm max-w-none">
          <style>{`
            .editor-content h1 {
              font-size: 2em;
              font-weight: bold;
              margin: 0.67em 0;
              line-height: 1.2;
            }
            .editor-content h2 {
              font-size: 1.5em;
              font-weight: bold;
              margin: 0.75em 0;
              line-height: 1.2;
            }
            .editor-content h3 {
              font-size: 1.25em;
              font-weight: bold;
              margin: 0.83em 0;
              line-height: 1.2;
            }
            .editor-content ul {
              list-style-type: disc;
              padding-left: 2em;
              margin: 1em 0;
            }
            .editor-content ul li {
              margin: 0.5em 0;
            }
            .editor-content ol {
              list-style-type: decimal;
              padding-left: 2em;
              margin: 1em 0;
            }
            .editor-content ol li {
              margin: 0.5em 0;
            }
            .editor-content blockquote {
              border-left: 4px solid #0B8FD6;
              padding-left: 1em;
              margin: 1em 0;
              color: #666;
              font-style: italic;
            }
            .editor-content code {
              background-color: #f4f4f4;
              padding: 0.2em 0.4em;
              border-radius: 3px;
              font-family: 'Monaco', 'Courier New', monospace;
            }
            .editor-content pre {
              background-color: #f4f4f4;
              padding: 1em;
              border-radius: 5px;
              overflow-x: auto;
              margin: 1em 0;
            }
            .editor-content pre code {
              background-color: transparent;
              padding: 0;
            }
            .editor-content p {
              margin: 1em 0;
              line-height: 1.6;
            }
            .editor-content img {
              max-width: 100%;
              height: auto;
              display: block;
              margin: 1em 0;
            }
            .editor-content a {
              color: #3b82f6;
              text-decoration: underline;
            }
            .editor-content a:hover {
              color: #2563eb;
            }
            .dark .editor-content blockquote {
              color: #999;
            }
            .dark .editor-content code {
              background-color: #2d2d2d;
              color: #f8f8f2;
            }
            .dark .editor-content pre {
              background-color: #2d2d2d;
              color: #f8f8f2;
            }
            .ContentEditable__root {
              min-height: 400px;
              padding: 1.5rem;
              outline: none;
              font-size: 1rem;
              line-height: 1.75;
            }
            .editor-placeholder {
              color: #999;
              position: absolute;
              top: 1.5rem;
              left: 1.5rem;
              pointer-events: none;
              user-select: none;
            }
          `}</style>
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="ContentEditable__root" />
            }
            placeholder={
              <div className="editor-placeholder">{placeholder}</div>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <ListPlugin />
          <LinkPlugin />
          <HTMLSyncPlugin onChange={onChange} initialContent={content} />
        </div>
      </LexicalComposer>
    </div>
  );
}
