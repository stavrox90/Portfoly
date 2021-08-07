import React, { useState } from 'react'

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

export default function ErrorPage({ children }) {
    return (
        <>
            <h1>ErrorPage</h1>
            {children}
        </>
    )
}