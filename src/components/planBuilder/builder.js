import React, {useState, useRef} from "react";
import './builder.css';

export default function Builder() {
    const [index, setIndex] = useState(0);
    const [slides, setSlides] = useState([]);
    const [titles, setTitles] = useState();
    const [newSlide, setNewSlide] = useState({});
    const [click, setClick] = useState(false);
    const textRef = useRef(null);
    const [renderedcode, setRenderedcode] = useState('');
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setNewSlide((prevstate) => ({...prevstate, [name]: value}));

    }

    const handleTitleChange = (e) => {
        const {name, value} = e.target;
        setTitles((prevstate) => ({...prevstate, [name]: value}));

        console.log(titles);
    }

    const handleAdd = () => {
        setIndex(index + 1);
        setSlides([...slides, newSlide]);
        setNewSlide({});

    }

    const handleAdd2 = () => {
        setIndex(index + 1);
        setSlides([...slides, newSlide]);
        setNewSlide({});

        setClick(true);

    }

    const handleRemove = () => {
        const newSlides = [...slides];
        newSlides.pop();
        
        setSlides(newSlides); 
        setIndex(index - 1);

    }
    
    const renderCode = () => {
        

        let slidesCopy = [...slides];
        slidesCopy.shift();
        slidesCopy.forEach(x => {
            if(x.list){
                x.list = x.list.split(',');
            }
            setRenderedcode(prevstate => prevstate + `${JSON.stringify(x)},`)
        });
    }

    const handleCopy = () => {
        const range = document.createRange();
        range.selectNodeContents(textRef.current);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
    }


    return (
        <div className="vh-100 bg-default">
            <div className="margins">
                <h1 className="section-title">Plan Builder</h1>
                
                <div className="force-elements-builder">
                    <input className="title-input-builder" maxLength={50} name="title" type='text' onChange={handleTitleChange} placeholder="Title for Your Plan"/>
                    <textarea maxLength={140} type='text' name="description" onChange={handleTitleChange} placeholder="Descritption"/>
                    <input className="everything-else" maxLength={60} type='text' onChange={handleTitleChange} name="slug" placeholder="Slug: title-for-your-plan"/>
                    {
                        index > 2  ? (
                            !click ? (
                                <div style={{width: '100%', display:'flex', justifyContent:'center'}}>
                                    <button style={{margin: '0 auto'}} className="link-button" onClick={handleAdd2}>Done</button>
                                </div>

                            ) : 
                                <div style={{width: '100%', display:'flex', justifyContent:'center'}}>
                                    <button style={{margin: '0 auto'}} className="link-button" onClick={renderCode}>Render</button>
                                </div>
                            
                        ) : ''
                    }
                    {
                        click ? (
                            <div style={{display:'flex'}}>
                                <p ref={textRef} className="render-code" style={{width:'90%'}}>
                                    {`${JSON.stringify(titles)}, content:[${renderedcode}]` }
                                </p>
                                <div className="copy-to-clip-board-button" onClick={handleCopy} style={{width:'10%'}}>
                                    Copy
                                </div>
                            </div>
                        ) : ''
                    }
                </div>

                

                <div style={{margin: '50px 0px', display:'flex', flexDirection:'column', gap:'20px'}}>

                {
                    slides.map((slide, i) => {
                        return(
                            <div className="slides-builder" key={i}>
                                {
                                    newSlide.key ? (
                                        <input className="slides-header" name="header" type="text" placeholder="Title" onChange={handleChange} required/>
                                        
                                    ) :  <input className="slides-header" name="header" type="text" placeholder="Title" onChange={handleChange} required />
                                }
                                {
                                    newSlide.list ? (
                                            console.log('h')
                                        ): 
                                        <>
                                            <textarea name="content" type="text" placeholder="Main Content" onChange={handleChange} />
                                            
                                        </>
                                }
                                {
                                    newSlide.content ? (
                                        <textarea name="side" type="text" placeholder="Side Content (Optional)" onChange={handleChange}/>
                                    ) : ''
                                }
                                {
                                    newSlide.side ? (
                                        <input name="link" type="text" placeholder="Enter Link"/>
                                    ) : ''
                                }
                                {
                                    newSlide.content || newSlide.key ? (
                                            console.log('lel')
                                        ) : <input name="list" type='text' placeholder="Write a list separated by commas (Optional)" onChange={handleChange}/>

                                    
                                }
                                {
                                    !newSlide.key ? (
                                        <input name="media" type="text" placeholder="Image URL (Optional)" onChange={handleChange} />

                                    ) : ''
                                }
                                {
                                    newSlide.list ? (
                                        console.log('list')
                                    ) :  
                                    
                                    <select name='key' onChange={handleChange}>
                                        <option value={null}>-No Question-  </option>
                                        <option value='identify'>Identify your goal</option>
                                        <option value='why'>Why are you doing this</option>
                                        <option value='triggers'>Identify your triggers</option>
                                        <option value='hobby'>Anticipate and Plan for Obstacles/hobby</option>
                                        <option value='obstacle'>Anticipate and Plan for Obstacles/person</option>
                                        <option value='week'>Achieving in a week</option>
                                        <option value='month'>Achieving in a month</option>
                                        <option value='month2'>Achieving in two months</option>
                                        <option value='month3'>Achieving in three months</option>
                                        <option value='date'>Choose a date</option>
                                    </select>
                                }



                            </div>
                        )
                    })
                }

                </div>
                <div style={{display:'flex', gap: 5}}>
                    {
                        index !== 0 ? (
                            <button className="link-button" onClick={handleRemove}>Remove</button>
                        ) : console.log('nose')
                    }
                    <button className="link-button" onClick={handleAdd}>Add Slide</button>
                </div>
            </div>
        </div>
    )
}