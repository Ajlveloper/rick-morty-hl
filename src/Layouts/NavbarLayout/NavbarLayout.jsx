import styles from "./styles.module.css";
import { Container, Select, TextField } from "../../Components";
import { NavLink } from "react-router-dom";
import { INPUT_TEXT, NAVBAR_TEXT } from "../../Common/messages";
import { ROUTES_PATH } from "../../Common/path";
import { useDispatch } from "react-redux";
import { filterByStatus, setCurrentPage, setQuery } from "../../Redux/actions";
import { LABEL_TEXT, STATUS_TYPES } from "../../Common/types";

const { START, WISHLIST } = NAVBAR_TEXT;

const { FILTERS } = LABEL_TEXT;
const NavbarLayout = () => {
  const dispatch = useDispatch();

  const submitHandler = (value) => {
    dispatch(setQuery(value));
    dispatch(setCurrentPage(1))

  };
  const onChangeSelectHandler = ({ target }) => {
    dispatch(filterByStatus(target?.value));
    dispatch(setCurrentPage(1))

  };
  return (
    <div className={styles.navbar}>
      <Container customStyles={styles.navbarContainer}>
        <div className={styles.navbarLink}>
          <NavLink to={ROUTES_PATH.START}>{START}</NavLink>
        </div>
        <div className={styles.navbarLink}>
          <NavLink to={ROUTES_PATH.WISHLIST}>{WISHLIST}</NavLink>
        </div>
        <Select label={FILTERS.STATUS} items={STATUS_TYPES} onChangeSelect={onChangeSelectHandler} />
        <TextField
          placeholder={INPUT_TEXT.PLACEHOLDER}
          onSubmit={submitHandler}
          button
        />
      </Container>
    </div>
  );
};

export default NavbarLayout;
