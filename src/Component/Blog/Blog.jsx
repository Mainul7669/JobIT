import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className="container">

            <h4 className='text-center my-5'>Blog Section</h4>

            <div className="row ">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>When should you use context API?</Accordion.Header>
                            <Accordion.Body>
                            While shifting statistics between different tiers of react additives however with out using props at each degree, we ought to use context api. Facts may be shared among additives the use of context instead of having to be manually surpassed down every level. It could be particularly useful for information associated with consumer authentication, internationalization, or theming.

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>What is a custom hook?</Accordion.Header>
                            <Accordion.Body>
                            A custom hook is a characteristic that makes use of react's built-in hooks (like usestate, useeffect, and usecontext) to create some reusable top judgment that can be shared throughout special components for your react software. By using using custom hooks, you may extract not unusual not unusual sense from additives and keep away from duplicating code. Custom hooks ought to continually start with the word "use" and might absorb arguments to personalize their conduct.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What is useRef?</Accordion.Header>
                            <Accordion.Body>
                            Useref is a hook that returns a mutable ref object whose . Modern-day assets is initialized to the surpassed argument (initialvalue). The again object will persist for the complete lifetime of the aspect, and may be used to store any mutable cost, similar to an instance property on a category component. It is commonly used to get right of entry to or modify dom elements, save a preceding charge to examine with the modern-day fee in a useeffect, or to maintain a connection with a setinterval or settimeout characteristic.

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>What is useMemo?</Accordion.Header>
                            <Accordion.Body>
                            Usememo is a hook that permits you to memoize the end result of a function in order that it is handiest recomputed while one of the dependencies changes. It takes  arguments: a characteristic and an array of dependencies. The characteristic is handiest re-completed if one of the dependencies has modified because the remaining time it become called. Usememo may be used to optimize steeply-priced calculations or to save you needless re-renders of components.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
    );
}


export default Blog;