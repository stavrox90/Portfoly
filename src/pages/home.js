import React, { useState, useEffect } from 'react'
import { Container, Grid, Paper, Typography } from '@material-ui/core'
import NoteCard from '../components/cards/NoteCard'

const someFunction = ({ notes }) => {

    return (
        <>
        <Container>
            <Grid container spacing={3}>
                {
                    notes.map((note, id) => (
                        <Grid item key={id} xs={12} sm={6} md={4}>
                            <NoteCard note={note} />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
        </>
    )
}


export default function HomePage({ children }) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    fetch('_iRvYX7_db.json', {
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => (setData(data), setLoading(false)))
    .catch(e => alert('error', e))
    }, [])

    if (loading) {return <h1>loading...</h1>}

    return (
        <>
                {someFunction(data)}
                {children}
        </>
    )
}