import { useEffect, useState } from "react";
import { Enums } from "../services/enums";
import { Api } from "../services/api";

const ModelForm = () => {
  const [topic, setTopic] = useState("");
  const [subject, setSubject] = useState("");
  const [audience, setAudience] = useState("");
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
      model,
      language,
    };

    const { data } = await Api.post("/api/process", { ...payload });
    setFormData(data);

    if (data) {
      setLoading(false);
    }
  };

  useEffect(() => {}, [formData]);

  const handleClear = () => {
    setTopic("");
    setSubject("");
    setAudience("");
    setLevelOfPracticalKnowledge("");
    setModel("");
    setLanguage("");
    setFormData({});
  };

  return (
    <div className="mx-auto">
      {!loading ? (
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
                  <label
                    htmlFor={option.value}
                    className="text-sm text-gray-700"
                  >
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
            <h2 className="text-lg font-medium mb-2">DNA</h2>
            <textarea
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 md:mb-4 resize-none"
              readOnly
              style={{
                height: `${Math.max(
                  30,
                  formData?.sentence?.split("\n").length * 20
                )}px`,
              }}
              value={formData?.sentence}
            />

            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              readOnly
              value={formData?.count}
            />
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default ModelForm;
