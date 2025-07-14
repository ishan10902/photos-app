import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const View = () => {
    const [photo, changePhoto] = useState(
        []
    )
    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos").then(
            (response)=>{
                changePhoto(response.data)
            }
        ).catch()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <h1 align="center">VIEW PHOTO</h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row g-3">
                            {photo.map(
                                (value, index) => {
                                    return (
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">ALBUMID:{value.albumId}</h5>
                                                    <p class="card-text">ID:{value.id}</p>
                                                    <p class="card-text">TITLE:{value.title}</p>
                                                    <p class="card-text">THUMBNAIL URL:{value.thumbnailUrl}</p>
                                                    <p class="card-text">URL:{value.url}</p>

                                                </div>
                                            </div>

                                        </div>

                                    )
                                }
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View
