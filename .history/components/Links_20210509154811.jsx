import Image from "next/image";
import classes from "./Links.module.css";
import Link from "next/link";
// import { Twittersvg } from "./Twittersvg";

const ITEMS = [
  {
    href: "https://twitter.com/ken_tsx",
    title: "Twitter",
    src: "/twitter.svg",
    width: {{21}},
    height: "21",
  },
  {
    href: "https://www.instagram.com/ken.tsx/",
    title: "Instagram",
    src: "/insta.svg",
    description: "Account for cat photos",
  },
  {
    href: "https://zenn.dev/ken505",
    title: "Zenn",
    src: "/twitter.svg",
  },
  {
    href: "https://note.com/ken505",
    title: "note",
    src: "/twitter.svg",
  },
  {
    href: "https://github.com/ken505",
    title: "Github",
    src: "/twitter.svg",
  },
  {
    href: "https://my-links-phi.vercel.app/posts/aboutMe",
    title: "About Ken",
    src: "/twitter.svg",
  },
  { href: "/photos", title: "Photos", src: "/twitter.svg" },
];

// リンクタグの中にはチルドレンは一つ、っていうルールなのね。。
export function Links() {
  return (
    <div className={classes.grid}>
      {ITEMS.map((item) => {
        return (
          <Link href={item.href} key={item.href}>
            <a>
              <h2 className={classes.card}>
                <Image
                  className={classes.image}
                  src={item.src}
                  alt="twitter Logo"
                  width={21}
                  height={21}
                />
                {item.title}
                {/* <p>{item.description}</p> */}
              </h2>
            </a>
          </Link>
        );
      })}
    </div>
  );
}
// css も map で回ってるけどこれはいいのか？？

// Image の補足
// Image を使って public の svg を呼びに行ってるよ。
// 色はとりあえず svg の fill に指定してる。
// Image を使うとデプロイできないので一旦保留。なんで？

{
  /* <Image
className={classes.image}
src="/insta.svg"
alt="instaglam Logo"
width={22}
height={22}
/> */
}
