import styles from "@/ui/components/Display/Display.module.css";
import { CSSProperties } from "react";

export interface Props {
  // ブロックコメントの最初にアスタリスクを一つ加えると、autodocs に反映される
  /** 背景色や背景画像を設定するプロパティを想定しています */
  cssProps: CSSProperties;
}

/** スタイルのプレビューを行うためのコンポーネントです。
 */
export function Display({ cssProps }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.display} style={cssProps}></div>
    </div>
  );
}
