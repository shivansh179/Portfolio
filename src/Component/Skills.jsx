import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Skills = () => {
    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/uc?export=download&id=1Kh1gpVGrGTCtSNf9la7lmtMW9RUCrOkH';  // Replace with the correct Google Drive download link
        link.setAttribute('download', 'Resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const skills = [
        { name: 'Web Design', progress: 95 },
        { name: 'HTML/CSS', progress: 99 },
        { name: 'JavaScript', progress: 80 },
        { name: 'React JS', progress: 80 },
        { name: 'Tailwind', progress: 65 },
        { name: 'Bootstrap', progress: 80 },
    ];

    return (
        <div className="container mx-auto py-16 px-4 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-8">My Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-start mb-4">
                        <span className="mb-2">{skill.name}</span>
                        <ProgressBar now={skill.progress} label={`${skill.progress}%`} className="w-full" />
                    </div>
                ))}
            </div>
            <button className="mt-8 px-6 py-2 bg-blue-500 text-white font-semibold rounded" onClick={downloadResume}>
                Download Resume
            </button>
        </div>
    );
};

export default Skills;
