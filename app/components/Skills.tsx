// app/components/Skills.tsx

import React from 'react';

// --- Data for Skills ---
const programmingLanguages = [
  { name: 'Python', percentage: 90 },
  { name: 'JavaScript', percentage: 55 },
  { name: 'R', percentage: 10 },
  { name: 'SQL', percentage: 55 },
  { name: 'Java', percentage: 10 },
];

const frameworks = [
  { name: 'TensorFlow', percentage: 10 },
  { name: 'PyTorch', percentage: 10 },
  { name: 'Scikit-learn', percentage: 100 },
  { name: 'Keras', percentage: 15 },
  { name: 'OpenCV', percentage: 50 },
];

const webTechnologies = [
  { name: 'React', percentage: 85 },
  { name: 'Node.js', percentage: 80 },
  { name: 'FastAPI', percentage: 25 },
  { name: 'Flask', percentage: 80 },
  { name: 'Docker', percentage: 40 },
];

const tools = [
  'Jupyter Notebook', 'Git', 'AWS', 'Google Cloud', 'MongoDB', 
  'PostgreSQL', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 
  'Streamlit', 'Gradio', 'MLflow', 'Weights & Biases', 'Linux'
];

const aiDomains = [
  'Machine Learning', 'Deep Learning', 'Natural Language Processing', 
  'Computer Vision', 'Data Science', 'Neural Networks', 'Reinforcement Learning', 
  'MLOps', 'Time Series Analysis', 'Generative AI', 'Large Language Models', 
  'Transfer Learning'
];
// --- End of Data ---


// Helper component for the progress bars
const SkillBar = ({ skill, percentage }: { skill: string; percentage: number }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1">
      <span className="text-base font-medium text-blue-900">{skill}</span>
      <span className="text-sm font-medium text-blue-700">{percentage}%</span>
    </div>
    <div className="w-full bg-blue-100 rounded-full h-2.5">
      <div 
        // CHANGED: Progress bar color
        className="bg-blue-600 h-2.5 rounded-full" 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="bg-white py-20 px-4 sm:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900">Skills & Expertise</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise in AI and software development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Programming Languages */}
          {/* CHANGED: Card background color */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-blue-900">Programming Languages</h3>
            {programmingLanguages.map(skill => (
              <SkillBar key={skill.name} skill={skill.name} percentage={skill.percentage} />
            ))}
          </div>

          {/* AI/ML Frameworks */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-blue-900">AI/ML Frameworks</h3>
            {frameworks.map(skill => (
              <SkillBar key={skill.name} skill={skill.name} percentage={skill.percentage} />
            ))}
          </div>

          {/* Web Technologies */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-blue-900">Web Technologies</h3>
            {webTechnologies.map(skill => (
              <SkillBar key={skill.name} skill={skill.name} percentage={skill.percentage} />
            ))}
          </div>
        </div>

        {/* Tags Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tools & Technologies */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-blue-900">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                    {tools.map(tool => (
                        // CHANGED: Tag background and text color
                        <span key={tool} className="bg-blue-200 text-blue-800 text-sm font-medium px-3 py-1 rounded-md">
                            {tool}
                        </span>
                    ))}
                </div>
            </div>

            {/* AI Domains */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-blue-900">AI Domains</h3>
                <div className="flex flex-wrap gap-2">
                    {aiDomains.map(domain => (
                        <span key={domain} className="bg-blue-200 text-blue-800 text-sm font-medium px-3 py-1 rounded-md">
                            {domain}
                        </span>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;