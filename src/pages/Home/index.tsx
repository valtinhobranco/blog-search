import { ChangeEvent, useContext, useEffect, useState, useRef } from "react";
import Lottie from "react-lottie";

//? styles
import * as Styles from "./styles";

//? components
import Header from "../../components/Header";
import Button from "../../components/Button";
import { Context } from "../../contexts/Context";
import ContentBox from "../../components/ContentBox";
import ContainerBox from "../../components/ContainerBox";
import BackToTop from "../../components/BackToTop";

import loadingAnimation from "../../assets/lottie/loading.json";

import { api } from "../../api/pages/Home";
import { PostsTypes } from "../../types/pages/Home";

const Home = () => {
  const { state, dispatch } = useContext(Context);
  const [listPost, setListPost] = useState<PostsTypes[]>([]);
  const [listAllPost, setListAllPost] = useState<PostsTypes[]>([]);
  const [postItem, setPostItem] = useState<number>(3);
  const [loadingPost, setLoadingPost] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [itemFilter, setItemFilter] = useState<string>("");

  useEffect(() => {
    loadListPosts();
  }, [postItem]);

  const loadListPosts = async () => {
    setLoadingPost(true);
    let json = await api.getAllPosts();

    setListPost(json.slice(0, postItem));
    setListAllPost(json);
    setLoadingPost(false);
    {
      postItem < json.length ? setIsDisabled(false) : setIsDisabled(true);
    }
    setTimeout(() => {
      scrollToBottom();
    }, 200);
  };

  const scrollToBottom = () =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

  const showAllPosts = async () => {
    setLoadingPost(true);
    let json = await api.getAllPosts();
    setLoadingPost(false);
    setListPost(json);
    setListAllPost(json);

    setIsDisabled(true);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setItemFilter(e.target.value);
  };

  const filterPosts = !!itemFilter
    ? listAllPost.filter((post) => {
        return post.title.toLowerCase().includes(itemFilter.toLowerCase());
      })
    : listPost;

  const handleChangeName = () => {
    dispatch({
      type: "CHANGE_NAME",
      payload: {
        name: "Valtinho",
      },
    });
  };

  return (
    <>
      <Header addFirstPage>
        Artigos | Posts
        {state.user.name && `- ${state.user.name} ${state.user.lastName}`}
      </Header>
      <ContainerBox>
        <ContentBox>
          <input
            type="search"
            placeholder="Faça sua pesquisa"
            value={itemFilter}
            onChange={handleChangeInput}
          />

          {!!itemFilter && <p> pesquisar: {itemFilter}</p>}

          <Styles.Posts>
            {(filterPosts.length != 0 &&
              ((!loadingPost &&
                filterPosts.map((item, index) => {
                  const { title, body, cover } = item;
                  return (
                    <Styles.InfoData key={index}>
                      <img src={cover} alt="" />

                      <div className="post-content">
                        <h1> {title}</h1>
                        <p> {body}</p>
                      </div>
                    </Styles.InfoData>
                  );
                })) || (
                <Lottie options={defaultOptions} height={400} width={400} />
              ))) || <h1>Artigo Não Encontrado =( </h1>}
          </Styles.Posts>
          <Styles.ButtonGrid>
            {(!itemFilter && (
              <>
                <Button
                  onClick={() => setPostItem(postItem + 3)}
                  disabled={isDisabled}
                >
                  Ver mais posts
                </Button>
                <Button onClick={showAllPosts} disabled={isDisabled}>
                  Ver Todos
                </Button>

                <BackToTop />
              </>
            )) || <BackToTop />}
          </Styles.ButtonGrid>
        </ContentBox>
      </ContainerBox>
      <div />
    </>
  );
};

export default Home;
