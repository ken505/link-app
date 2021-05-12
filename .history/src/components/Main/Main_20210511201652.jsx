import classes from "./Main.module.css";
import { Headline } from "../Headline/Headline";
import { Links } from "../Links/Links";

export function Main() {
  return (
    <main className={classes.main}>
      <Headline title="Welcome to Ken's links !" />
      <Links />
    </main>
  );
}
