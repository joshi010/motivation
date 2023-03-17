import React, {useState} from "react";
import { useSelector } from "react-redux";
import { selectPlans } from "./components/plan-slice";
import { Link, useParams, useNavigate } from "react-router-dom";
import './plans.css';
import { jsPDF } from "jspdf";
import { Helmet } from "react-helmet";

export default function Plan(){
    const plans = useSelector(selectPlans);
    const { planTitle } = useParams();
    const plan = plans[planTitle];
    let slideArr = [];
    let length = plan.content.length;
    const length2 = length;
    plan.content.forEach(x => {
        slideArr.push(length);
        length--;
    });

    const [slidesArr, setSlidesArr] = useState(slideArr);
    const [index, setIndex] = useState(0);
    const [answer, setAnswer] = useState({});

    const handleNext = () => {
        if(index == 0){
            const newSlider = [...slideArr];
            newSlider[0] = 0;
            
            console.log(newSlider, index);
            setIndex(1);
            setSlidesArr(newSlider);
        } else {

            const newSlider = [...slidesArr];
            newSlider[index] = 0;
            newSlider.map(x => {
                if(x != 1){
                    x++;
                }
            })
            
            setIndex(index + 1);
            console.log(newSlider, index);
            setSlidesArr(newSlider);
        }

        console.log(answer);

    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setAnswer((prevstate) => ({...prevstate, [name]: value}));
    }

    const handleBack =  () => {
        const newSlider = [...slidesArr];
        newSlider[index-1] = Math.max(...newSlider) + 1;

        setIndex(index - 1);
        setSlidesArr(newSlider);
    }

    const handlekeydown = (e) => {
        if(e.key === 'Enter'){
            handleNext();
        }
    }

    const generatePdf = () => {
        const doc = new jsPDF();
// Set font style for the title and bold text
        doc.setFont('helvetica', 'bold');

        // Add the title "Action Plan: BetterSteps"
        doc.setFontSize(22);
        doc.text('Action Plan: BetterSteps', 20, 20);

        // Add the text "Your Goal:"
        doc.setFontSize(16);
        doc.text('Your Goal:', 20, 40);
        
        doc.setFont('helvetica', 'italics')
        doc.text(answer.identify, 50, 40);

        doc.setFont('helvetica', 'bold');
        // Add the text "Your Reasons:"
        doc.text('Your Reasons:', 20, 50);
        doc.setFont('helvetica', 'italics')
        doc.text(answer.why, 61, 50);

        doc.setFont('helvetica', 'bold');
        // Add the text "Things to Avoid:"
        doc.text('Things to Avoid:', 20, 60);
        doc.setFont('helvetica', 'italics');
        doc.text(answer.triggers, 65, 60);

        doc.setFont('helvetica', 'bold');
        // Add the text "Skills to develop:"
        doc.text('Skills to develop:', 20, 80);
        doc.setFont('helvetica', 'italics');
        doc.text(answer.hobby, 68, 80);

        doc.setFont('helvetica', 'bold');
        // Add the text "People that there is for you:"
        doc.text('People that is there for you:', 20, 90);
        doc.setFont('helvetica', 'italics');
        doc.text(answer.obstacle, 95, 90);

        doc.setFont('helvetica', 'bold');
        // Add the text "Steps to Achieve:"
        doc.text('Steps to Achieve:', 20, 110);

        // Add an unordered list of steps to achieve
        doc.setFontSize(14);
        doc.text('• Week 1:', 20, 120);
        doc.setFont('helvetica', 'italics');
        doc.text(answer.week, 46, 120)
        doc.setFont('helvetica', 'bold');
        doc.text('• Month 1:', 20, 130);
        doc.setFont('helvetica', 'italics');
        doc.text(answer.month, 46, 130)
        doc.setFont('helvetica', 'bold');
        doc.text('• Month 2:', 20, 140);
        doc.setFont('helvetica', 'italics');
        doc.text(answer.month2, 46, 140);
        doc.setFont('helvetica', 'bold');
        doc.text('• Month 3:', 20, 150);
        doc.setFont('helvetica', 'italics');
        doc.text(answer.month3, 46, 150)
        doc.setFont('helvetica', 'bold');

        // Add the text "Start Date:"
        doc.setFont('helvetica', 'bold');
        doc.text('Start Date:', 20, 170);
        doc.setFont('helvetica', 'normal');
        doc.text(answer.date, 50, 170);


        doc.setFont('helvetica', 'bold');
        let x = 20;
        let y = 180;
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 7; j++) {
            doc.rect(x, y, 7, 7);
            x += 10;
            }
            y += 10;
            x = 20;
        }
        
        y+= 5;
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 7; j++) {
            doc.rect(x, y, 7, 7);
            x += 10;
            }
            y += 10;
            x = 20;
        }
        
        
        x = 95;
        y = 180;
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 7; j++) {
            doc.rect(x, y, 7, 7);
            x += 10;
            }
            y += 10;
            x = 95;
        }
        
        y+= 5;
         for (let i = 0; i < 1; i++) {
            for (let j = 0; j < 6; j++) {
            doc.rect(x, y, 7, 7);
            x += 10;
            }
            y += 10;
            x = 20;
        }
        doc.setFontSize(12);
        doc.text('bettersteps.pagex.mx', 160, 285);
        doc.save('taking_action_plan_bettersteps.pdf');
    }


    return(

        <div className="vh-100 bg-default" style={{display: 'flex', alignItems: 'center'}}>
            <div className="margins">
                <div className="plan-info-container section-title"> 
                    {
                        plan.content.map((plan, i) => {
                            let style = {
                                zIndex: slideArr[i]
                            };

                            return(
                                <div className="plan-actual-content" key={i} style={{zIndex: slidesArr[i]}}>
                                        <h2 className="section-title-plans" style={{fontSize: 50}}>{plan.header}</h2>
                                    <div className="plan-content">
                                        {
                                            (plan.media || plan.list) && plan.content ? 
                                            (
                                                <>
                                                <div className="image-and-list-plans">
                                                    {
                                                        plan.list ? (
                                                            <div className="list-plans-cont" style={{width: '50%'}}>
                                                                <ul className="list-plans">
                                                                    {plan.list.map((x,i) => {
                                                                        return(
                                                                            <li className="plans-font-size plan-list-100" style={{display:'list-item'}} key={i}>{x}</li>
                                                                        )
                                                                    })}
                                                                </ul>
                                                            </div>
                                                        ) : console.log('no-list')
                                                    }
                                                    {
                                                        plan.media ? (
                                                            <div className="photo-media-plans">
                                                                {plan.media.map((x, i) => {
                                                                    return(
                                                                        <div className="photo-media-cont" key={i}>
                                                                            <img src={x} />
                                                                        </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        ) : console.log('no-media')
                                                    }
                                                </div>
                                                
                                                <div className="plans-font-size" style={{marginTop: 10}}>
                                                    <p style={{textAlign:'justify'}}>
                                                        {plan.content}
                                                     </p>
                                                </div>
                                                        
                                                </>
                                                
                                            )

                                            : plan.key ? (
                                                <>
                                                <div className="questionarie-plans">
                                                    <div className="plans-font-size" style={{textAlign: 'justify'}}><p>{plan.content}</p></div>
                                                </div>
                
                                                </>
                                            ) :
                                                                                        
                                            plan.content ? (
                                                <div className="plans-font-size" style={{marginTop: 10, maxWidth: '100%'}}>
                                                    <p style={{textAlign:'justify'}}>
                                                        {plan.content}
                                                    </p>
                                                </div>
                                                ) : plan.media || plan.list ? (
                                                    <div className="image-and-list-plans" style={{width: '100%'}}>
                                                    {
                                                        plan.list ? (
                                                            <div className="list-plans-cont">
                                                                <ul className="list-plans" style={{padding: '0 0 0 50px'}}>
                                                                    {plan.list.map((x,i) => {
                                                                        return(
                                                                            <li className="plans-font-size" style={{display:'list-item', maxWidth: '100%'}} key={i}>{x}</li>
                                                                        )
                                                                    })}
                                                                </ul>
                                                            </div>
                                                        ) : console.log('no-list')
                                                    }
                                                    {
                                                        plan.media ? (
                                                            <div className="photo-media-plans-2">
                                                                
                                                                <div className="photo-media-cont">
                                                                    <img src={plan.media} />
                                                                </div>
                                                                        
                                                                    
                                                                
                                                            </div>
                                                        ) : console.log('no-media')
                                                    }
                                                </div>
                                                ) : plan.key ? (
                                                    <div className="questionarie-plans">
                                                        <div className="plans-font-size" style={{textAlign: 'justify'}}><p>{plan.content}</p></div>
                                                        <input className="input-plan-quest" placeholder="Your Answer Here" type="text" name={plan.key} onChange={handleChange} onKeyDown={handlekeydown}></input>
                                                    </div>
                                                ) : plan.date ? (
                                                    <div>
                                                        <input type="date" name={plan.key} onChange={handleChange}  />
                                                    </div>
                                                ) : console.log('lel')

                                                
                                        }

                                    </div>
                                    {
                                        plan.side ? (
                                            <div className="plan-side">
                                                <p style={{textAlign: 'justify'}}>
                                                    <em>
                                                        {plan.side} 
                                                    </em>
                                                    <Link>Read Article</Link>
                                                </p>
                                            </div>
                                        ) : console.log('no-side')
                                    }
                                    {   
                                        plan.date ? (
                                            <div>
                                                <input type="date" name={plan.key} onChange={handleChange}  />
                                            </div>
                                        ) :
                                        plan.key ? (
                                            <input className="input-plan-quest" placeholder="Your Answer Here" type="text" name={plan.key} onChange={handleChange} onKeyDown={handlekeydown}></input>
                                        ) : ''
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className="next-plan-buttons">
                    {
                        index !== 0 ? (
                            <button onClick={handleBack} className="link-button" >Back</button>
                        ) : 0
                    }
                    {
                        index == length2 ? (
                            <button onClick={generatePdf} className="link-button">Print Action Plan</button>
                            
                        ) : <button onClick={handleNext} className="link-button">Next</button>

                    }
                </div>
            </div>
        </div>
    )
}