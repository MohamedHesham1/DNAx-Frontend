import { useState } from 'react';
import { Enums } from '../services/enums'; // Import the enums

const ModelForm = () => {
  const [subject, setSubject] = useState('');
  const [audience, setAudience] = useState('');
  const [levelOfPracticalKnowledge, setLevelOfPracticalKnowledge] =
    useState('');
  const [model, setModel] = useState('');
  const [language, setLanguage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Form submitted:', {
      subject,
      audience,
      levelOfPracticalKnowledge,
      model,
      language,
    });

    // Submit the form data to your backend or perform the desired action here
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50 px-4'>
      <div className='max-w-md w-full bg-white shadow-md overflow-hidden rounded-xl'>
        <div className='px-6 py-8'>
          <h2 className='text-2xl font-bold mb-4'>Model Form</h2>
          <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
            <div>
              <label htmlFor='subject' className='mb-2 block'>
                Subject
              </label>
              <select
                id='subject'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
              >
                <option value=''>Select Subject</option>
                {Enums.Subject.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor='audience' className='mb-2 block'>
                Audience
              </label>
              <select
                id='audience'
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
              >
                <option value=''>Select Audience</option>
                {Enums.Audience.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor='levelOfPracticalKnowledge' className='mb-2 block'>
                Level of Practical Knowledge
              </label>
              <select
                id='levelOfPracticalKnowledge'
                value={levelOfPracticalKnowledge}
                onChange={(e) => setLevelOfPracticalKnowledge(e.target.value)}
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
              >
                <option value=''>Select Level</option>
                {Enums.LevelOfPracticalKnowledge.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor='model' className='mb-2 block'>
                Model
              </label>
              <select
                id='model'
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
              >
                <option value=''>Select Model</option>
                {Enums.Model.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor='language' className='mb-2 block'>
                Language
              </label>
              <select
                id='language'
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
              >
                <option value=''>Select Language</option>
                {Enums.Language.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <button
                type='submit'
                className='w-full py-2 px-4 font-semibold text-white rounded-md bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModelForm;
