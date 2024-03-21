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
    <form
      onSubmit={handleSubmit}
      className='flex flex-col space-y-4 max-w-md mx-auto p-4 bg-white shadow-md rounded-md'
    >
      <div className='mb-4'>
        <label
          htmlFor='subject'
          className='block text-sm font-medium text-gray-700'
        >
          Subject:
        </label>
        <select
          id='subject'
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2'
        >
          <option value=''>Select Subject</option>
          {Enums.Subject.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className='mb-4'>
        <label
          htmlFor='audience'
          className='block text-sm font-medium text-gray-700'
        >
          Audience:
        </label>
        <select
          id='audience'
          value={audience}
          onChange={(e) => setAudience(e.target.value)}
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2'
        >
          <option value=''>Select Audience</option>
          {Enums.Audience.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className='mb-4'>
        <label
          htmlFor='levelOfPracticalKnowledge'
          className='block text-sm font-medium text-gray-700'
        >
          Level of Practical Knowledge:
        </label>
        <select
          id='levelOfPracticalKnowledge'
          value={levelOfPracticalKnowledge}
          onChange={(e) => setLevelOfPracticalKnowledge(e.target.value)}
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2'
        >
          <option value=''>Select Level</option>
          {Enums.LevelOfPracticalKnowledge.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className='mb-4'>
        <label
          htmlFor='model'
          className='block text-sm font-medium text-gray-700'
        >
          Model:
        </label>
        <select
          id='model'
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2'
        >
          <option value=''>Select Model</option>
          {Enums.Model.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className='mb-4'>
        <label
          htmlFor='language'
          className='block text-sm font-medium text-gray-700'
        >
          Language:
        </label>
        <select
          id='language'
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2'
        >
          <option value=''>Select Language</option>
          {Enums.Language.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <button
        type='submit'
        className='w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out'
      >
        Submit
      </button>
    </form>
  );
};

export default ModelForm;
