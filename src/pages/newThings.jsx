import Link from "next/link";
import classes from "../styles/Home.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { LocalHead } from "src/components/LocalHead/LocalHead";
import { Headline } from "src/components/Headline/Headline";

export default function NewThings() {
  return (
    <div className={classes.container}>
      <LocalHead title="New things" />
      <Headline title="New things" />
      <Link href="/">
        <h2 className={classes.backtolinks}>
          <IoIosArrowBack className={classes.IoIosArrowBack} />
          Back to links
        </h2>
      </Link>
      <img className={classes.icon} src="/images/ken.jpg" />

      <div className={classes.aTagGrid}>
        <div className={classes.border}>
          <h2 className={classes.title}>The app I made</h2>
          <ul className={classes.discription}>
            <li>
              <a href="https://fireworks-indol.vercel.app/">Fireworks 🎆</a>
            </li>
            <li>
              <a href="https://dnd-kit.vercel.app/">dnd - kit 🤖</a>
            </li>
            <li>
              <a href="https://react-countdown-chi.vercel.app/">React-countdown-clircle-timer ⏰</a>
            </li>
            <li>
              <a href="https://json-server-pearl.vercel.app/">
                Creating a mockapi with json-server 📦
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
