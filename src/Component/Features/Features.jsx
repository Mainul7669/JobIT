import { faCircleDollarToSlot, faDollar, faDollarSign, faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Features = ({ feature }) => {
    const { company_logo, company_name, remote_or_onsite, location, salary, job_title, fulltime_or_parttime, id } = feature;

    const navigate = useNavigate();


    return (





        <div className=' col-12 col-md-6   md: my-3    ' >
            <Card className=' rounded m-3 px-5 py-5 '  >

                <img className=' mb-3 img-fluid' style={{ width: '120px', height: '40px' }} src={company_logo} alt="" />
                <h3 className='md:my-1 fs-5'>{job_title}</h3>
                <h5 className='md:my-1 fs-6'>{company_name}</h5>
                <div className='md:my-2'>
                    <button className='bg-white my-2 px-4 me-4 p-2 fs-6 rounded-1 fw-bold  ' style={{
                        color: "#7E90FE ",
                        border: '1px solid #7E90FE'


                    }}>{remote_or_onsite}</button>
                    <button className='bg-white my-2  me-4 p-2 px-4 fs-6 rounded-1 fw-bold  ' style={{
                        color: "#7E90FE ",
                        border: '1px solid #7E90FE'

                    }}>{fulltime_or_parttime}</button>

                </div>
                <div className='fs-6 lh-lg' style={{color: '#757575'}}> 
                <FontAwesomeIcon icon= {faLocationDot} />        {location}                                                                         <FontAwesomeIcon icon={faDollarSign} />      Salary: {salary}   
                </div>

                <button onClick={() => navigate(`jobDetails/${id}`)} className='px py-2 fs-6 border-0 rounded-1 text-white fw-bold w-25 ' style={{
                    background: ` linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)`
                }}>View Details</button>

            </Card>











        </div>

    );
};

export default Features;