// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
// import { CanceledError } from "axios";

// interface FetchGenreResponse {
//   count: number;
//   results: Genre[];
// }

// const useData = <T>() => {
//   const [data, setData] = useState<T[]>([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const controller = new AbortController();

//     apiClient
//       .get<FetchGenreResponse>("/genres", { signal: controller.signal })
//       .then((res) => setGenres(res.data.results))
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//       });

//     return () => controller.abort();
//   }, []);

//   return { genres, error };
// };

// export default useGenres;
