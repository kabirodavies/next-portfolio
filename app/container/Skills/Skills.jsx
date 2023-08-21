"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaAngleDoubleRight } from "react-icons/fa"

import { AppWrap, MotionWrap } from '../../wrapper'; 
import { getSkills, getExperiences } from '@/sanity/sanity-utils';
import './Skills.scss';

const Skills = () => {
  const [skills, setSkills] = useState([]); // Get getSkills
  const [experience, setExperience] = useState([]); // Get getExperiences
  const [selectedCompany, setSelectedCompany] = useState(null); // Track the currently selected company

  useEffect(() => {
    async function fetchSkills() {
      const skillData = await getSkills();
      setSkills(skillData);
    }
    fetchSkills();
  }, []);

  useEffect(() => {
    async function fetchExperiences() {
      const experienceData = await getExperiences();
      setExperience(experienceData);

      // Find the latest job in the experiences array
      const latestJob = experienceData[0];
      setSelectedCompany(latestJob.company);
    }
    fetchExperiences();
  }, []);

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
  };


  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>
      <div className='app__skills-container'>
        {/* Skills Section */}
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={skill.name}
              >
                <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                <Image
                src={skill.icon} alt={skill.name} width={250} height={100} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

         {/* Experiences Section */}
         
         <div className='jobs'>
            {/* <div className='btn-cont'> */}
            <div className='app__skills-exp'>
              {experience.map((exp) => (
                <button
                key={exp._id}
                onClick={() => handleCompanyClick(exp.company)}
                className={`job-btn ${selectedCompany === exp.company && 'active-btn'} `}
                >
                  {exp.company}
                </button>
              ))}
            </div>

            {/* job info */}
            
            <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className='job-info'
            >
              <h3>{experience.find((exp) => exp.company === selectedCompany)?.role}</h3>
              
              <h4 className=''>
                <a href={experience.find((exp) => exp.company === selectedCompany)?.companyLink}
                target='_blank'
                rel='noopener noreferrer'
                >
                  {selectedCompany}
                </a>
              </h4>
              
              <p className='job-date'>{experience.find((exp) => exp.company === selectedCompany)?.year}</p>

              {experience
              .find((exp) => exp.company === selectedCompany)
              ?.responsibilities.map((responsibility, index) => (
                <div key={index} className='job-desc'>
                  <FaAngleDoubleRight className='job-icon' />
                  <p>{responsibility}</p>
                </div>
              ))}
            </motion.div>
          </div>
      </div>
    </>
  )
}
export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
   'skill',
   'app__whitebg'
);