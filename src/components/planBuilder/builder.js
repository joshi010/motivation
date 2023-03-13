import React, {useState} from "react";
import './builder.css';

export default function Builder() {
    const [index, setIndex] = useState(0);
    const [slides, setSlides] = useState([]);
    const [newSlide, setNewSlide] = useState({});
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setNewSlide((prevstate) => ({...prevstate, [name]: value}));

    }

    const handleAdd = () => {
        setIndex(index + 1);
        setSlides([...slides, newSlide]);
        setNewSlide({});

        console.log(slides);
    }

    const handleRemove = () => {
        const newSlides = [...slides];
        newSlides.pop();
        
        setSlides(newSlides); 
        setIndex(index - 1);

    }


    return(
        <div className="vh-100 bg-default">
            <div className="margins">
                <h1 className="section-title">Plan Builder</h1>
                
                <div className="force-elements-builder">
                    <input className="title-input-builder" maxLength={50} name="title" type='text' placeholder="Title for Your Plan"/>
                    <textarea maxLength={140} type='text' name="description" placeholder="Descritption"/>
                    <input className="everything-else" maxLength={60} type='text' name="slug" placeholder="Slug: how-to-example"/>
                </div>

                <div style={{margin: '50px 0px', display:'flex', flexDirection:'column', gap:'20px'}}>

                {
                    slides.map((slide, i) => {
                        return(
                            <div className="slides-builder" key={i}>
                                <input className="slides-header" name="header" type="text" placeholder="Slide Title" onChange={handleChange} />
                                <textarea name="content" type="text" placeholder="Slide Content" onChange={handleChange} />
                                <textarea name="side" type="text" placeholder="Side Content (Optional)" onChange={handleChange}/>
                                <input name="media" type="text" placeholder="Image URL (Optional)" onChange={handleChange} />
                                <input name="list" type='text' placeholder="Write a list separated by commas (Optional)" onChange={handleChange}/>
                                <select name='key' onChange={handleChange}>
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

                            </div>
                        )
                    })
                }

                </div>
                <div>
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