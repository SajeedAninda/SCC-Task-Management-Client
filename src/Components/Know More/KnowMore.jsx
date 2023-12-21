import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Lottie from "lottie-react";
import knowLottie from "../../assets/knowLottie.json"

const KnowMore = () => {
    return (
        <div className='bg-white'>
            <div>
                <h1 className='text-center text-4xl font-bold pt-8 text-[#363636]'>Know More</h1>
            </div>
            <div className='w-[90%] h-fit mx-auto flex flex-col-reverse md:flex-row gap-4 md:gap-0 justify-between items-center py-8'>
                <div className='flex-1 flex justify-end'>
                    <Lottie animationData={knowLottie} loop={true} />
                </div>
                <div className='flex-1'>
                    <Accordion style={{ backgroundColor: '#ffffff', border: "2px solid #363636", padding: "8px", marginBottom: '2px' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography style={{ fontSize: '24px', color: '#363636', fontWeight: 'bold', fontFamily: 'Lora' }}>How can I create a new task on the task management website?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ fontSize: '16px', color: '#363636', fontWeight: 'bold', fontFamily: 'Lora' }}>
                                To create a new task, log in to the website, navigate to the Dashboard where you will find create task button, and fill in the required details such as title, description, and dealine etc.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ backgroundColor: '#ffffff', marginBottom: '2px', border: "2px solid #363636", padding: "8px" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography style={{ fontSize: '24px', color: '#363636', fontWeight: 'bold', fontFamily: 'Lora' }}> What is the purpose of a task management website?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ fontSize: '16px', color: '#363636', fontWeight: 'bold', fontFamily: 'Lora' }}>
                                A task management website is designed to help individuals and teams organize, prioritize, and track their tasks and projects efficiently. It serves as a centralized platform for collaboration and productivity.                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ backgroundColor: '#ffffff', marginBottom: '2px', border: "2px solid #363636", padding: "8px" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography style={{ fontSize: '24px', color: '#363636', fontWeight: 'bold', fontFamily: 'Lora' }}>Can I access my tasks from different devices using this task management website?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ fontSize: '16px', color: '#363636', fontWeight: 'bold', fontFamily: 'Lora' }}>
                                Yes, this task management websites is cloud-based, allowing users to access their tasks from various devices such as computers, smartphones, and tablets. This ensures seamless collaboration and flexibility. Just login and use
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ backgroundColor: '#ffffff', marginBottom: '2px', border: "2px solid #363636", padding: "8px" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography style={{ fontSize: '24px', color: '#363636', fontWeight: 'bold', fontFamily: 'Lora' }}>Are task management websites suitable for both personal and professional use?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ fontSize: '16px', color: '#363636', fontWeight: 'bold', fontFamily: 'Lora' }}>
                                Absolutely. Task management websites cater to both personal and professional users. Individuals can use them to manage personal to-do lists, while teams can collaborate on projects and tasks in a shared workspace. Many platforms offer features that scale to the needs of individuals and businesses alike.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </div>
            </div>
        </div>
    );
};

export default KnowMore;