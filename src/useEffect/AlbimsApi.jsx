import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './style.css'

export const AlbimsApi = () => {

    const [album, setAlbum] = useState([])

    useEffect(() => {
        const getAlbum = async () => {
            const getApi = await fetch(`https://jsonplaceholder.typicode.com/albums`)
            const getFetch = await getApi.json()
            setAlbum(getFetch)
        }
        getAlbum()
    }, [])

    return (
            <table>
                <tr>
                    <th>Month</th>
                    <th>Savings</th>
                </tr>
                {
                album.map(albums =>
                    <tr key={albums.id}>
                        <td>{albums.id}</td>
                         <td>{albums.title}</td>
                    </tr>
                )
            }
               
            </table>

           

    )
}
