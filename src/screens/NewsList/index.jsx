import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Helper/Loading";
import { NEWS_GET, NEWS_REMOVE } from "../../../api";
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
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState("");

  async function fetchNews(page) {
    try {
      setIsLoading(true);
      const storedInstitution = JSON.parse(
        window.localStorage.getItem("INSTITUTION")
      );
      setInstitution(storedInstitution);
      const { url, options } = NEWS_GET({
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

  const handleDelete = async (itemId) => {
    setItemToDelete(itemId);
    setConfirmationModalOpen(true);
  };

  const confirmDelete = async () => {
    const token = window.localStorage.getItem("TOKEN");
    const { url, options } = NEWS_REMOVE({
      id: itemToDelete,
      token: token,
    });

    try {
      const { response, json } = await request(url, options);
      if (response.status === 200) {
        setConfirmationModalOpen(false); // Close the confirmation modal
        fetchNews(currentPage); // Refetch the updated list
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (error) return <Error error={error} />;
  if (isLoading || loading) return <Loading />;
  return (
    <>
      <Link
        to="/news/add"
        state={{ institution: institution }}
        className={styles.customLink}
      >
        <button className={styles.addButton}>Adicionar Notícia</button>
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

      {confirmationModalOpen && (
        <div className={styles.overlay}>
          <div
            className={`${styles.confirmationModal} ${styles.centeredModal}`}
          >
            <p>Deseja realmente excluir esta instituição?</p>
            <div className={styles.buttonContainer}>
              <button className={styles.confirmButton} onClick={confirmDelete}>
                Sim
              </button>
              <button
                className={styles.cancelButton}
                onClick={() => setConfirmationModalOpen(false)}
              >
                Não
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NewsList;
