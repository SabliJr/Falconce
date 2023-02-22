import React from "react";

const Article = ({ article }) => {
  //   console.log(article.id);
  return (
    <div className='articleDiv'>
      <img src={article.imgURL} alt='articleImg' className='articleImg' />
      <h3>
        <a href={article.link} target='_blank' rel='noopener noreferrer'>
          {article.title}.
        </a>
      </h3>
      <p>{article.description.slice(0, 70)}...</p>
      <div>
        <h6>Source: {article.source}</h6>
      </div>
    </div>
  );
};

export default Article;
