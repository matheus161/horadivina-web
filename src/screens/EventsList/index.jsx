import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Helper/Loading";
import { EVENTS_GET } from "../../../api";
import useFetch from "../../hooks/useFetch";
import NewsItem from "../../components/NewsItem";
import Error from "../../components/Helper/Error";
import styles from "./styles.module.css";

function NewsList() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { data, loading, error, request } = useFetch();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [institution, setInstitution] = useState("");

  async function fetchNews(page) {
    try {
      setIsLoading(true);
      const storedInstitution = JSON.parse(
        window.localStorage.getItem("INSTITUTION")
      );
      setInstitution(storedInstitution);
      const { url, options } = EVENTS_GET({
        id: storedInstitution._id,
        page: page,
      });
      const { response, json } = await request(url, options);
      setNews(json);
      setTotalPage(Math.floor(json.totalitens / 5));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage <= totalPage) {
      setCurrentPage(newPage);
    }
  };

  if (error) return <Error error={error} />;
  if (isLoading || loading) return <Loading />;
  return (
    <>
      <Link
        to="/events/add"
        state={{ institution: institution }}
        className={styles.customLink}
      >
        <button className={styles.addButton}>Adicionar Evento</button>
      </Link>
      {news.paginatedResults && news.paginatedResults.length > 0 ? (
        <>
          <ul>
            {news.paginatedResults.map((data) => (
              <li key={data._id} className={styles.institutionItemContainer}>
                <NewsItem item={data} />
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDelete(data._id)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          <div className={styles.pagination}>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 0}
              className={styles.paginationButton}
            >
              Anterior
            </button>
            <span
              className={styles.paginationInfo}
            >{`${currentPage} de ${totalPage}`}</span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPage}
              className={styles.paginationButton}
            >
              Próxima
            </button>
          </div>
        </>
      ) : (
        <p>Nenhuma notícia encontrada.</p>
      )}
    </>
  );
}

export default NewsList;
