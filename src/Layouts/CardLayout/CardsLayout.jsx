import { useCallback, useEffect, useRef } from "react";
import { Card, NotFound } from "../../Components";
import styles from "./styles.module.css";
import { getCharacterDetailData, getCharacters } from "../../Api";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList, getCharacter, getCharacterDetail, setCharactersNextpage, setCurrentPage, setDetailId, setErrorDetail, setLoading } from "../../Redux/actions";
import CharacterDetail from "../CharacterDetail/CharacterDetail";
import { generateId } from "../../Common/utils";

const CardsLayout = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const observerRef = useRef();
  const isMounted = useRef();
  isMounted.current = true;

  const getDataCharacter = async (signal) => {
    try {
      dispatch(setLoading(true));
      const params = `?name=${state.query}&status=${state.filterByStatus}&page=${state.pageCurrent}`;
      const { data } = await getCharacters(params, signal);
      const results = [ ...data?.results?.map(result => ({ ...result, idKey: generateId() })) ];
      dispatch(getCharacter(state.pageCurrent > 1 ? [ ...state.characters, ...results] : results));
      dispatch(setCharactersNextpage(Boolean(data?.results)));
    } catch (error) {
      dispatch(getCharacter(state.pageCurrent > 1 ? state.characters : []));
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller
    if (isMounted.current) getDataCharacter({ signal });

    return () => {
      if (!isMounted.current) {
        controller.abort();
        isMounted.current = false
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.query, state.filterByStatus, state.pageCurrent, state.charactersNextPage]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const lastCharacterRef = useCallback((el) => {
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver((characters) => {
      const characterElements = characters[0] || {};
      if (characterElements.isIntersecting && state.charactersNextPage) {
        dispatch(setCurrentPage(state.pageCurrent + 1))
      } 
    }, {
      rootMargin: '100px',
      threshold: 1.0
    })

    if (el) observerRef.current.observe(el);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.loading])

  const detailHandler = async ({ target }) => {
    try {
      dispatch(setLoading(true));
      dispatch(setDetailId(target.value))
      const { data } = await getCharacterDetailData(target.value);
      dispatch(getCharacterDetail(data))
    } catch (error) {
      dispatch(setErrorDetail())
    } finally {
      dispatch(setLoading(false));
    }
  }

  const favoriteHandler = ({ target }) => {
    if (state.wishList?.find(item => item.id === +target.offsetParent.value)?.name) return;
    dispatch(addToWishList(target.offsetParent.value))
  }


  const cardList = (
    <div className={styles.cardsContainer}>
      {state?.characters?.length ? (
        state?.characters?.map(({ name, image, status, id, idKey }, index) => (
          <Card
            key={idKey}
            image={image}
            name={name}
            elementRef={state?.characters?.length === index + 1 ? lastCharacterRef : null}
            status={status}
            id={id}
            detailHandler={detailHandler}
            favoriteHandler={favoriteHandler}
          />
        ))
      ) : (
        <NotFound widthImage />
      )}
      <CharacterDetail show={state.characterId} { ...state.characterDetail } />
    </div>
  )

  return state?.characters?.length ? cardList : null
};

export default CardsLayout;
