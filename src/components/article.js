import React from "react";
import { useSelector } from 'react-redux';
import {selectArticles} from './article-slice';
import { useParams, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Article() {
    const articles = useSelector(selectArticles);
    const {title} = useParams();
    const article = articles[title];
    const history = useNavigate();

    const goBack = () => {
        console.log(history(-1));
    }


    return article ? (
        <div className="bg-default vh-100">
            <Helmet>
                <title>{article.title}</title>
                <meta name="description" content="Learn how to get out of addictions and become the best version of yourself in this article"></meta>
            </Helmet>
            <div className="margins">
                <div style={{backgroundImage: `url(${article.image})`, backgroundPositionY:'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                    <h1 className="title-spacing">{article.title}</h1>
                </div>
                <span><Link style={{all: 'unset', cursor:'pointer', textDecoration:'underline', color:'#5865f2'}} to='/articles'>{'< '}Go Back</Link></span>
                <p>{article.body}</p>
            </div>
            <div className="link-pupop">
                <Link className="link-button" to='/plans'>Break Addictions</Link>
            </div>
        </div>
    ) : <p>Not found</p>


} 