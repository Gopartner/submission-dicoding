import React from 'react';

const Article = ({ title, content }) => {
  return (
    <article className="p-4 md:w-1/2">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p>{content}</p>
    </article>
  );
};

export default Article;

