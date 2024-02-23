import React from 'react';
import articlesData from '../data/data-dummy.json';
import Article from './Article';
import Aside from './Aside';

const Main = () => {
  return (
    <main className="flex flex-wrap">
      <div id="content" className="w-full md:w-3/4 p-4">
        {articlesData.articles.map(article => (
          <Article key={article.id} title={article.title} content={article.content} />
        ))}
      </div>
      <Aside />
    </main>
  );
};

export default Main;

