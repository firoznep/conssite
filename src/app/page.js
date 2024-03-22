import styles from "./page.module.css";
import PicSlider from "@/components/picSlider/PicSlider";

export default function Home() {
  return (
    <>
      <div className={styles.videoWrapper}>
        <div className={styles.title}>
          <h1>
            BUILDING AT THE <br /> HIGHEST LEVEL
          </h1>
        </div>
        <video
          className={styles.videoMain}
          width={"320"}
          height={"240"}
          loop
          muted
          autoPlay={true}
        >
          {/* <source src="/vp1.webm" type="video/webm" /> */}
          <source src="/vp2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <PicSlider />
    </>
  );
}
