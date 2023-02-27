import React from "react";

export default function Phrase(){
    const phrases = [
        {
            author: 'Seneca',
            phrase: 'We are more often frightened than hurt; and we suffer more from imagination than from reality.',
        },
        {
            author: 'Seneca',
            phrase: 'It is not that we have a short time to live, but that we waste a lot of it.'
        },
        {
            author: 'Marcus Aurelius',
            phrase: 'The happiness of your life depends upon the quality of your thoughts.'
        },
        {
            author: 'Epictetus',
            phrase: 'Do not waste your time on what you cannot control or influence.'
        },
        
    ];

    const chooser = ()=> {
        let i = phrases.length;
        let index = Math.floor(Math.random()*i);

        return {phrase: phrases[index].phrase, author: phrases[index].author};
    };




    return(
        <>
            <h1>"{chooser().phrase}"</h1>
            <h3>—{chooser().author}</h3>
        </>
    )
}