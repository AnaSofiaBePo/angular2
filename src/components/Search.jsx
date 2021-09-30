import React from "react";
import "../assets/styles/components/Search.scss";

const SearchTitleMain = "¿Qué quieres ver hoy?";
const SearchPlaceholder = "Buscar...";

const Search = () => (
    <section className='search'>
        <h2 className='search__title'> {SearchTitleMain} </h2>
        <input className='search__input' type='text' placeholder={SearchPlaceholder} />
        <span className='search__icon'> </span>
    </section>
);

export default Search;
