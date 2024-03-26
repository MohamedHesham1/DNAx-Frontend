import { defineEnum } from '../utils/defineEnum';

export const Enums = Object.freeze({
  // Subject
  Subject: defineEnum([
    {
      value: 'Tourism',
      label: 'Tourism',
    },
    {
      value: 'Energy',
      label: 'Energy',
    },
    {
      value: 'Mining and minerals',
      label: 'Mining and minerals',
    },
    {
      value: 'Industry and manufacturing',
      label: 'Industry and manufacturing',
    },
    {
      value: 'Transportation and logistics services',
      label: 'Transportation and logistics services',
    },
    {
      value: 'Financial services',
      label: 'Financial services',
    },
    {
      value: 'Health care',
      label: 'Health care',
    },
    {
      value: 'Sports',
      label: 'Sports',
    },
    {
      value: 'Law',
      label: 'Law',
    },
    {
      value: 'Entertainment & Design',
      label: 'Entertainment & Design',
    },
    {
      value: 'Real estate',
      label: 'Real estate',
    },
    {
      value: 'Human capital and innovation',
      label: 'Human capital and innovation',
    },
    {
      value: 'Environmental services',
      label: 'Environmental services',
    },
    {
      value: 'Chemicals',
      label: 'Chemicals',
    },
    {
      value: 'Pharmaceuticals and biotechnology',
      label: 'Pharmaceuticals and biotechnology',
    },
    {
      value: 'Agriculture and food industries',
      label: 'Agriculture and food industries',
    },
    {
      value: 'Aviation and defence',
      label: 'Aviation and defence',
    },
    {
      value: 'Information and Communication Technology',
      label: 'Information and Communication Technology',
    },
    {
      value: 'Business Management',
      label: 'Business Management',
    },
    {
      value: 'Retail and wholesale trade',
      label: 'Retail and wholesale trade',
    },
    {
      value: 'Other (write a subject)',
      label: 'Other (write a subject)',
    },
  ]),
  // Audience
  Audience: defineEnum([
    {
      value: 'Early childhood education',
      label: 'Early childhood education',
    },
    {
      value: 'Primary education',
      label: 'Primary education',
    },
    {
      value: 'Lower secondary education',
      label: 'Lower secondary education',
    },
    {
      value: 'Upper secondary education',
      label: 'Upper secondary education',
    },
    {
      value: 'Post-secondary non-tertiary education',
      label: 'Post-secondary non-tertiary education',
    },
    {
      value: 'Short-cycle tertiary education',
      label: 'Short-cycle tertiary education',
    },
    {
      value: 'Bachelor’s or equivalent level',
      label: 'Bachelor’s or equivalent level',
    },
  ]),
  // LevelOfPracticalKnowledge
  LevelOfPracticalKnowledge: defineEnum([
    {
      value: 'Advanced',
      label: 'Advanced',
    },
    {
      value: 'Intermediate',
      label: 'Intermediate',
    },
    {
      value: 'Beginner',
      label: 'Beginner',
    },
  ]),
  // Model
  Model: defineEnum([
    {
      value: 'gpt-3.5-turbo',
      label: 'gpt-3.5-turbo',
    },
    {
      value: 'gpt-4',
      label: 'gpt-4',
    },
    {
      value: 'gpt-4-turbo-preview',
      label: 'gpt-4-turbo-preview',
    },
  ]),
  // Language
  Language: defineEnum([
    {
      value: 'Arabic',
      label: 'Arabic',
    },
    {
      value: 'English',
      label: 'English',
    },
    {
      value: 'Arabic translation from English',
      label: 'Arabic translation from English',
    },
  ]),
    // intro_type
    IntroType: defineEnum([
      {
        value: 'Normal',
        label: 'Normal',
      },
      {
        value: 'story or scenarios form',
        label: 'story or scenarios form',
      },
      {
        value: 'facts & numbers',
        label: 'facts & numbers',
      },
      {
        value: 'Problem-Oriented',
        label: 'Problem-Oriented',
      },
    ]),
});