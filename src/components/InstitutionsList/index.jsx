import React, { useEffect, useState } from "react";
import InstitutionItem from "../InstitutionItem";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import useFetch from "../../hooks/useFetch";
import { INSTITUTION_GET } from "../../../api";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";

function InstitutionsList() {
  const [institutions, setInstitutions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { data, loading, error, request } = useFetch();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [adminId, setAdminId] = useState("");

  const handleLinkClick = (institution) => {
    window.localStorage.setItem("INSTITUTION", JSON.stringify(institution));
  };

  const handleDelete = (institutionId) => {
    // Lógica para excluir a instituição com o ID institutionId
    // Deve perguntar se realmente deseja excluir
    // chamar
  };

  async function fetchInstitutions(page) {
    try {
      setIsLoading(true);
      const storedInstitution = JSON.parse(
        window.localStorage.getItem("ADMIN")
      );
      setAdminId(storedInstitution);
      const { url, options } = INSTITUTION_GET({
        id: storedInstitution._id,
        page: page,
      });
      const { response, json } = await request(url, options);
      console.log("ADMIN", json);
      setInstitutions(json);
      setTotalPage(Math.floor(json.totalitens / 5));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchInstitutions(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage <= totalPage) {
      setCurrentPage(newPage);
    }
  };

  if (error) return <Error error={error} />;
  if (isLoading || loading) return <Loading />;
  return institutions.paginatedResults &&
    institutions.paginatedResults.length > 0 ? (
    <>
      <ul>
        {institutions.paginatedResults.map((data) => (
          <li key={data._id} className={styles.institutionItemContainer}>
            <Link
              to={`/institution/update`}
              onClick={() => handleLinkClick(data)}
              className={styles.customLink}
            >
              <InstitutionItem institution={data} />
            </Link>
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
        <span className={styles.paginationInfo}>{`${currentPage} de ${
          totalPage ? totalPage : 0
        }`}</span>
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
  );
}

export default InstitutionsList;
