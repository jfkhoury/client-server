import React, { Component } from "react";

var ArtistList = ({ data }) => {
    return (
        <div className="artists--list">
            <ul>
                {data.map((artist, index) => {
                    return (
                        <li className="artists__list-item" key={index}>
                            <div>
                                <img src={artist.imageUrl} />
                            </div>
                            <div>
                                <span>{artist.name}</span>
                                <p>{artist.description}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ArtistList;
