import React from 'react';

 export const Accordion = () => {
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    );
};
export const AccordionTitle = () => {
    return (
        <div>
            <h3>Menu</h3>

        </div>
    );
};
export const AccordionBody = () => {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
};
