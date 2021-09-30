import React from "react";
import "../assets/styles/components/Categories.scss";

const Categories = ({ title = "Mi lista", children }) => (
    <div className='categories'>
        <h2 className='category__title'>{title}</h2>
        {children}
    </div>
);

export default Categories;
