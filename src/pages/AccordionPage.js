import React from 'react';
import Accordion from '../components/Accordion';

export default function AccordionPage() {
    const articles = [
        {heading:"How to start CP?", content:"Learn a language's syntax. Java and C++ have good community support. Python is nice too. Then learn about Data Structures and Time Space Optimization. Then start grinding Leetcode. You can follow Striver's SDE sheet to have a good reference point of popular questions."},
        {heading:"How to start Web Dev?", content:"Learn basic HTML. Cover topics like Tables, anchor tags, image, links, etc. Then learn CSS from Code With Harry's playlist and MDN. Make a couple of static websites. Then start with JS. Learn it in depth. Focus on DOM manupulations, conditional rendering, etc. Then move to responsive web design."},
        {heading:"How earn from Web Dev?", content:"Learn a framework for either frontend or backend. JavaScript is a cool choice. Node.js and Express.js are popular choices for backend. Where as React.js and Angular.js are popular choices for frontend. With React Native you can even build Mobile Apps. Which will give you the tool to build complete solutions."},
        {heading:"How learn Machine Learning?", content:"Sorry fam. Don't know much about Machine Learning. What I know is, you must choose whether you want to learn it from an engineering POV or you want to learn it from a scientific POV. As engineers we usually use pre-trained models from cloud providers. But for building custom solutions which you can fine tune, you'll need in depth knowledge."}
    ]

    return (
        <div>
            <h1 className='text-center my-5 text-xl'>Accordion Page</h1>
            <Accordion danger data={articles} />
        </div>
    )
}
