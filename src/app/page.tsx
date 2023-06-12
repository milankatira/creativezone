import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import style from "./index.module.scss";
import { DeleteIcon, FileIcon, HomeIcon, StartIcon } from "./Image";

export default function Home() {
  return (
    <div className={style.main}>
      <div className={style.navbar}>
        <img src="/svg/logo.svg" alt="logo" className={style.logo} />
        <p>Files</p>
        <p>Edit</p>
        <p>Image</p>
        <p>Layer</p>
        <p>Select</p>
        <p>Filter</p>
        <p>View</p>
        <p>Window</p>

        <p className={style.darkmode__text}>Dark mode:</p>
        <img className={style.switch} src="svg/switch.svg" />
        <img className={style.user} src="svg/user.svg" />
      </div>
      <div className={style.container}>
        <div className={style.sidebar}>
          <p className={style.selected}>
            {" "}
            <HomeIcon color="#5552B9" /> Home
          </p>
          <p>
            <FileIcon /> Your Files
          </p>
          <p>
            {" "}
            <DeleteIcon /> Deleted Files
          </p>
          <p>
            <StartIcon />
            Starred
          </p>
        </div>
      </div>
    </div>
  );
}
