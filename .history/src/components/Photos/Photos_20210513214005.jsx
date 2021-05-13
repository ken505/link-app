import Link from "next/link";
import classes from "./Photos.modules.css";
import "tailwindcss/tailwind.css";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { GiCat } from "react-icons/gi";
import { ZennSvg } from "src/components/Links/Svgicons/ZennSvg";
import { NoteSvg } from "src/components/Links/Svgicons/NoteSvg";

const ITEMS = [
  {
    href: "https://twitter.com/ken_tsx",
    title: "Twitter",
    image: <FaTwitter className={classes.image} />,
  },
];
// リンクタグの中にはチルドレンは一つ、っていうルールなのね。。
export function Photos(item) {
  return (
    <div>
    <Itemmap />
    </div>
  );
}
// css も map で回ってるけどこれはいいのか？？

// 試行錯誤の記録😂
// const hideImage = (item.src || false)
// みたいな定義を最初つけたけど、不要だった。エラーは出なかったけど。
// 最初は Image を使って、 public の svg を呼びに行き、 src を map で回したけど、
// スタイルが svg データ内の fill に直接色を指定することしかできず、
// hover によるスタイルを反映できなかったため却下 😂
// <Image
// className={classes.image}
// src={item.src}
// alt={item.alt}
// width={item.width}
// height={item.height}
// // fill="white"
// />
