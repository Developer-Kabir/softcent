import React from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const WorkFlow = () => {
    return (
        <div className='workflow'>
            <div className='container'>
                <h3 style={{ textAlign: 'center', marginTop: '90px' }}>Workflow</h3>
                <div className='pricing-underline'>
                    <p><img src="https://i.ibb.co/3yx1zHc/Underline-3.png" alt="" /></p>
                </div>

                <div style={{ marginTop: '60px' }} className='flex'>
                    <div className='acordian'>
                        <Accordion>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        1. Defining Goal
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Exercitation in fugiat est ut ad ea cupidatat ut in
                                        cupidatat occaecat ut occaecat consequat est minim minim
                                        esse tempor laborum consequat esse adipisicing eu
                                        reprehenderit enim.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        2. Product Design
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Exercitation in fugiat est ut ad ea cupidatat ut in
                                        cupidatat occaecat ut occaecat consequat est minim minim
                                        esse tempor laborum consequat esse adipisicing eu
                                        reprehenderit enim.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        3. Development
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Exercitation in fugiat est ut ad ea cupidatat ut in
                                        cupidatat occaecat ut occaecat consequat est minim minim
                                        esse tempor laborum consequat esse adipisicing eu
                                        reprehenderit enim.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        4. Testing
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        In ad velit in ex nostrud dolore cupidatat consectetur
                                        ea in ut nostrud velit in irure cillum tempor laboris
                                        sed adipisicing eu esse duis nulla non.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        5. Product Release
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        In ad velit in ex nostrud dolore cupidatat consectetur
                                        ea in ut nostrud velit in irure cillum tempor laboris
                                        sed adipisicing eu esse duis nulla non.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        6. Maintenance Support
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        In ad velit in ex nostrud dolore cupidatat consectetur
                                        ea in ut nostrud velit in irure cillum tempor laboris
                                        sed adipisicing eu esse duis nulla non.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className='ac-s-img'>
                        <img src="https://i.ibb.co/m8ZKwM6/ux-indonesia-q-C2n6-RQU4-Vw-unsplash-1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkFlow;