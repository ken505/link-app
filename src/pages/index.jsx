import classes from "../styles/Home.module.css";
import { LocalHead } from "src/components/LocalHead/LocalHead";
import { Headline } from "src/components/Headline/Headline";
import { Links } from "src/components/Links/Links";
// import { SnsShare } from "src/components/SnsShare/SnsShare";

export default function Home() {
  return (
    <div className={classes.container}>
      <LocalHead
        title="Ken's links"
        cardSize="summary"
        ogUrl="https://link-app-pink.vercel.app/"
        ogTitle="Ken's links"
        ogDescription="This is a site that collects my various SNS accounts, self-introduction, and high-resolution images of cats ๐"
        ogImage="https://user-images.githubusercontent.com/68226398/118977762-7d737280-b9b1-11eb-891d-9c6e1cab1c2f.jpg"
      />
      {/* <h1 className="text-red-500">hello world</h1> */}
      <Headline title="Sorry, Please go to the new site ๐โโ๏ธ" />
      {/* <img className={classes.icon} src="/images/ken.jpg" /> */}
      <Links />
      {/* <div className={classes.SnsShareiconGridIndex}>
        <SnsShare
          url={"https://link-app-pink.vercel.app/"}
          title={"Ken's links ๐"}
        />
      </div> */}
    </div>
  );
}

// <Tab title="Ken's links" name="link" content="Link collection"/>
// metatag ใซ props ใๆใใใใจใใใฉใฆใถๅดใงๆใใใใ
// meta tag ใฎๆๅณใๅ็ขบ่ชใใฆใใจใฉใผใฎ่ฉณ็ดฐใ่ชฟในใใ
