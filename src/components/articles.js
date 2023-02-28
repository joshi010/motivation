import React from "react";
import { useSelector } from "react-redux";
import { selectArticles } from './article-slice';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Articles() {
    const articles = useSelector(selectArticles);
    const filteredArticles = Object.values(articles);
    return(
        <div className="vh-100 bg-default center-x">
            <Helmet>
                <title>Articles That Will Motivate You</title>
                
            </Helmet>
            <section className="margins">
                <h1 style={{padding: '50px 0'}}>Articles</h1>
                <div className="grid-cont">
                    {filteredArticles.map((article) => {
                        return(
                            <div className="art" key={article.slug}>
                                <div className="image-cont">
                                    <img src={article.image} alt={article.title}/>
                                </div>
                                <div style={{width: '90%', display: "flex", flexDirection:'column', justifyContent: 'center', alignItems:'center'}}>
                                    <h2><Link className="react-link" title={`go to ${article.title}`} to={`/articles/${article.slug}`}>{article.title}</Link></h2>
                                    <h3>{article.type}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
            
        </div>
    )
}