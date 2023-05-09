import { useDispatch, useSelector } from 'react-redux'
import { Card, NotFound } from '../../Components';
import styles from './styles.module.css'
import { getCharacterDetail, setDetailId, setErrorDetail, setLoading } from '../../Redux/actions';
import { getCharacterDetailData } from '../../Api';
import CharacterDetail from '../CharacterDetail/CharacterDetail';
import { NOT_DATA } from '../../Common/messages';

const WishListLayout = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const detailHandler = async ({ target }) => {
    try {
      dispatch(setLoading(true));
      dispatch(setDetailId(target.value))
      const { data } = await getCharacterDetailData(target.value);
      dispatch(getCharacterDetail(data))
      document.body.style.overflowY = 'hidden' 
    } catch (error) {
      dispatch(setErrorDetail())
    } finally {
      dispatch(setLoading(false));
    }
  }


  return (
    <div className={styles.cardsContainer}>
      {state?.wishList?.length ? (
        state?.wishList?.map(({ name, image, status, id }) => (
          <Card
            key={id}
            image={image}
            name={name}
            status={status}
            id={id}
            detailHandler={detailHandler}
          />
        ))
      ) : (
        <NotFound text={NOT_DATA} />
      )}
      <CharacterDetail show={state?.characterId} { ...state.characterDetail } />
    </div>
  )
}

export default WishListLayout