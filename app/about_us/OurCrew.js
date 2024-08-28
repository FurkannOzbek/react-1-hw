import styles from "./OurCrew.module.css";

const OurCrew = () => {
  return (
    <>
      <p className={styles.crewP}>
        Our crew is the heart and soul of Galactica. We are a diverse team of seasoned space
        explorers, engineers, and visionaries who are united by a common goal: to make space travel
        accessible and exciting for all.
      </p>
      <div className={styles.crewCards}>
        <div className={styles.crewCard}>
          <img src="/crew/img-2.png" className={styles.crewCardImg} />
          <div className={styles["crew-card-content"]}>
            <h3 className={styles.crewCardH3}>Sarah Vega</h3>
            <h3 className={styles.crewCardH4}>Captain</h3>
            <p className={styles.crewCardP}>
              A former NASA astronaut with over 15 years of experience, Captain Vega leads our
              missions with unparalleled expertise and a passion for space exploration.
            </p>
          </div>
        </div>
        <div className={styles.crewCard}>
          <img src="/crew/image-mark-shuttleworth.png" className={styles.crewCardImg} />
          <div className={styles["crew-card-content"]}>
            <h3 className={styles.crewCardH3}>Dr. Leo Redding</h3>
            <h4 className={styles.crewCardH4}>Chief Astrophysicist</h4>
            <p className={styles.crewCardP}>
              Our chief astrophysicist, Dr. Redding, is a renowned scientist who has contributed to
              major space discoveries. He ensures that every journey is as educational as it is
              exhilarating.
            </p>
          </div>
        </div>
        <div className={styles.crewCard}>
          <img src="/crew/hana-lee.png" className={styles.crewCardImg} />
          <div className={styles["crew-card-content"]}>
            <h3 className={styles.crewCardH3}>Hana Lee</h3>
            <h4 className={styles.crewCardH4}>Chief Engineer</h4>
            <p className={styles.crewCardP}>
              With her extensive background in aerospace engineering, Hana Lee is responsible for
              the state-of-the-art technology that powers our spacecraft. Her innovation ensures
              that our travelers are always in safe hands.
            </p>
          </div>
        </div>
        <div className={styles.crewCard}>
          <img src="/crew/image-douglas-hurley.png" className={styles.crewCardImg} />
          <div className={styles["crew-card-content"]}>
            <h3 className={styles.crewCardH3}>Alex Santos</h3>
            <h4 className={styles.crewCardH4}>Mission Specialist</h4>
            <p className={styles.crewCardP}>
              As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs
              smoothly. With a background in both science and adventure tourism, Alex is the perfect
              guide for our space travelers.
            </p>
          </div>
        </div>
        <div className={styles.crewCard}>
          <img src="/crew/Maya-Patel.png" className={styles.crewCardImg} />
          <div className={styles["crew-card-content"]}>
            <h3 className={styles.crewCardH3}> Maya Patel</h3>
            <h4 className={styles.crewCardH4}>Crew Member</h4>
            <p className={styles.crewCardP}>
              Maya brings a unique blend of technical skills and customer service experience to the
              team. She’s always ready to assist with any needs and to make sure every traveler has
              an unforgettable experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCrew;
