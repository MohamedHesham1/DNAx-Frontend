import { useEffect, useState } from "react";
import { Enums } from "../services/enums";
import { Api } from "../services/api";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const ModelForm = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [topic, setTopic] = useState("");
  const [subject, setSubject] = useState("");
  const [audience, setAudience] = useState("");
  const [introType, setIntroType] = useState("");
  const [tester, setTester] = useState("");

  const [levelOfPracticalKnowledge, setLevelOfPracticalKnowledge] =
    useState("");

  const [otherSubject, setOtherSubject] = useState("");
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState("");
  const [language, setLanguage] = useState("");
  const [formData, setFormData] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    const payload = {
      topic,
      subject,
      other_subject: otherSubject,
      audience,
      level_of_practical_knowledge: levelOfPracticalKnowledge,
      intro_type: introType,
      model,
      language,
      tester
    };

    const { data } = await Api.post("/api/process", { ...payload });
    setFormData(data);

    if (data) {
      setLoading(false);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate(`/login`);
    setIsLoggedIn(false);
  };

  useEffect(() => {}, [formData]);

  const handleClear = () => {
    setTopic("");
    setSubject("");
    setAudience("");
    setLevelOfPracticalKnowledge("");
    setModel("");
    setLanguage("");
    setIntroType("");
    setTester("");
    setFormData({});
  };

  return (
    <div className="mx-auto">
      <header className="py-4 px-6 bg-gray-600 text-white flex justify-between items-center">
        <h1 className="text-2xl font-bold">DNAx</h1>
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-md shadow-md text-white font-medium focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Logout
          </button>
        )}
      </header>

      {loading && <LoadingSpinner />}
      <div className="flex flex-col my-16 px-24 items-start h-full md:flex-row space-y-4 md:space-y-0">
        <form
          onSubmit={handleSubmit}
          className="flex-1 md:mr-2 p-4 bg-white shadow-md rounded-md"
        >
          <div className="mb-4">
            <label
              htmlFor="topic"
              className="block text-sm font-medium text-gray-700"
            >
              Topic:
            </label>
            <input
              type="text"
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="mt-1 bg-[#EFEFEF] block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="introType"
              className="block text-sm font-medium text-gray-700"
            >
              Introduction Type:
            </label>
            <select
              id="introType"
              value={introType}
              onChange={(e) => setIntroType(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            >
              <option value="">Select</option>
              {Enums.IntroType.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject:
            </label>
            <select
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            >
              <option value="">Select Subject</option>
              {Enums.Subject.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {subject === "Other (write a subject)" && (
            <div className="mb-4">
              <label
                htmlFor="otherSubject"
                className="block text-sm font-medium text-gray-700"
              >
                Other subject:
              </label>
              <input
                type="text"
                id="otherSubject"
                value={otherSubject}
                onChange={(e) => setOtherSubject(e.target.value)}
                className="mt-1 bg-[#EFEFEF] block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>
          )}

          <div className="mb-4">
            <label
              htmlFor="audience"
              className="block text-sm font-medium text-gray-700"
            >
              Audience:
            </label>
            <select
              id="audience"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              required
            >
              <option value="">Select Audience</option>
              {Enums.Audience.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="levelOfPracticalKnowledge"
              className="block text-sm font-medium text-gray-700"
            >
              Level of Practical Knowledge:
            </label>
            <select
              id="levelOfPracticalKnowledge"
              value={levelOfPracticalKnowledge}
              onChange={(e) => setLevelOfPracticalKnowledge(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              required
            >
              <option value="">Select Level</option>
              {Enums.LevelOfPracticalKnowledge.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="model"
              className="block text-sm font-medium text-gray-700"
            >
              Model:
            </label>
            <select
              id="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              required
            >
              <option value="">Select Model</option>
              {Enums.Model.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="tester"
              className="block text-sm font-medium text-gray-700"
            >
              Tester Name:
            </label>
            <input
              type="text"
              id="tester"
              value={tester}
              onChange={(e) => setTester(e.target.value)}
              className="mt-1 bg-[#EFEFEF] block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>

          <div className="mb-4 flex items-center">
            <span className="block text-sm font-medium text-gray-700 mr-2">
              Language:
            </span>
            {Enums.Language.map((option) => (
              <div key={option.value} className="flex items-center mr-4">
                <input
                  type="radio"
                  id={option.value}
                  name="language"
                  value={option.value}
                  checked={language === option.value}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="mr-2"
                  required
                />
                <label htmlFor={option.value} className="text-sm text-gray-700">
                  {option.label}
                </label>
              </div>
            ))}
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out"
            >
              Clear
            </button>
          </div>
        </form>

        {/* Display section */}
        <div className="flex-1 p-6 bg-white shadow-md rounded-md">
          <label htmlFor="result" className="text-lg font-medium mb-2">
            Result
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 md:mb-4 resize-none h-[400px]"
            readOnly
            id="result"
            style={{
              height: `${Math.max(
                30,
                formData?.sentence?.split("\n").length * 20
              )}px`,
            }}
            value={formData?.sentence}
          />

          <label htmlFor="word-count" className="text-lg font-medium mb-2">
            Word count
          </label>
          <input
            type="text"
            id="word-count"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            readOnly
            value={formData?.count}
          />
        </div>
      </div>
    </div>
  );
};

export default ModelForm;
