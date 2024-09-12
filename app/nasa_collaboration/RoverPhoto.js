import styles from "./page.module.css";

export const RoverPhoto = ({ src, date, roverName }) => {
  return (
    <>
      <p>Date {date}</p>
      <img className={styles.nasaPicOfTheDayImg} src={src} alt=""></img>
      <p>{roverName}</p>
    </>
  );
};
