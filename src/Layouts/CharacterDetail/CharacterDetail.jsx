/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styles from "./styles.module.css";
import { BUTTON_TEXT, TEXT_DETAIL } from "../../Common/messages";
import Button from "../../Components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setDetailId } from "../../Redux/actions";
import { Loader, NotFound } from "../../Components";

const { NAME, SPECIES, EPISODES, GENDER, STATUS } = TEXT_DETAIL;

const CharacterDetail = ({
  image,
  name,
  species,
  episode,
  gender,
  status,
  show,
}) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const changeIdCharacter = () => {
    dispatch(setDetailId(""));
  };
  const loadingShow = <Loader color='secondary' customStyles={styles.loaderContainer} />;

  const content = (
    <>
      <div className={styles.detailImageContainer}>
        <img className={styles.detailImage} src={image} alt={name} />
      </div>
      <div className={styles.detailImageContainer}>
        <div className={styles.detailTextContainer}>
          <h2
            className={`${styles.detailText} ${styles.detailName}`}>
            <span>{NAME}</span>
            { name }
          </h2>
          <h3 className={`${styles.detailText}`}>
            <span>{SPECIES}</span>
            { species }
          </h3>
          <div className={styles.detailContinerLink}>
            <span>{EPISODES}</span>
            {episode &&
              episode?.map((item, index) => {
                return (
                  <a
                    className={`${styles.detailText} ${styles.detailLink}`}
                    target="_blank"
                    href={item}
                    key={item}
                  >
                    { EPISODES.slice(0, EPISODES.length-3) } {index + 1}
                  </a>
                );
              })}
          </div>
          <h3 className={`${styles.detailText}`}>
            <span>{ GENDER }</span>
            {gender}
          </h3>
          <h3 className={`${styles.detailText}`}>
            <span>{ STATUS }</span>
            {status}
          </h3>
        </div>
      </div>
      <Button stylesCustom={styles.buttonClose} onClick={changeIdCharacter}>
        {BUTTON_TEXT.close}
      </Button>
    </>
  );

  const notFound = (
    <div className={styles.notFoundContainer}>
      <NotFound widthImage />
      <Button stylesCustom={styles.buttonClose} onClick={changeIdCharacter}>
        {BUTTON_TEXT.close}
      </Button>
    </div>
  )

  return show ? (
    <div className={styles.detail}>
      <div className={styles.detailModal}>
        {state.loading ? loadingShow : state.isErrorDetail ? notFound : content}
      </div>
    </div>
  ) : null;
};

export default CharacterDetail;

CharacterDetail.defaultProps = {
  name: "",
  species: "",
  episodes: "",
  gender: "",
  status: "",
};
