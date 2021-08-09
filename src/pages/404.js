import React, { useState } from "react";
import { Paper, Typography } from "@material-ui/core";
import ErrorCard from "../components/cards/ErrorCard";

// const [data, setData] = useState({});
// const [loading, setLoading] =useState(true)

// useEffect(() => {
//   fetch('_iRvYX7_db.json', {
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     }
//   })
//   .then(res => res.json())
//   .then((data, s) => (setData(data), setLoading(false)))
//   .catch(e => console.log('error', e))
// }, [])

// // function getIcon(icon) {
// //   const val = icon.replace(/['"]+/g, '')
// //   return val
// // }

// if (loading) {return <h1>loading...</h1>}

// TODO: Error handling page

export default function ErrorPage({ children }) {
  return (
    <>
      <ErrorCard />
      {children}
    </>
  );
}
