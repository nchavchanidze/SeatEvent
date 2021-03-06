import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import AuthorCard from "../Abstract Submission/AuthorCard";
import KeywordCard from "../Abstract Submission/KeywordCard";
import Layout from "../../Layouts/Layout";
import Heading from "./Heading";
import Background from "../../Assets/Images/Abstract/background.jpg";


const AbstractEdit = (props) => {
  const { id } = useParams();
  console.log(id);

  const abstracts = {
    1: {
      title: "Network with fellow senior data leaders 1",
      pending: true,
    },
    2: {
      title: "Network with fellow senior data leaders 2",
      pending: true,
    },
    3: {
      title: "Network with fellow senior data leaders 3",
      pending: true,
    },
    4: {
      title: "Network with fellow senior data leaders 4",
      pending: true,
    },
    5: {
      title: "Network with fellow senior data leaders 5",
      pending: true,
    },
  };

  const abstract = abstracts[id];

  console.log(abstract)

  const [title, setTitle] = useState(abstract.title);
  const [topic, setTopic] = useState("");
  const [presentationPreference, setPresentationPreference] = useState("");

  const [intro, setIntro] = useState("");
  const [objectives, setObjectives] = useState("");
  const [methods, setMethods] = useState("");
  const [results, setResults] = useState("");
  const [conclusion, setConclusion] = useState("");
  const [counter, setCounter] = useState([]);

  const [authors, setAuthors] = useState([]);
  const [authorsValue, setAuthorsValue] = useState("");

  const [keywords, setKeywords] = useState([]);
  const [keywordsValue, setKeywordsValue] = useState("");


  const handleAuthor = (
    e,
    authors,
    setAuthors,
    authorsValue,
    setAuthorsValue
  ) => {
    e.preventDefault();
    if (authorsValue === "") {
      alert("Add Authors");
    } else {
      const id = authors.length ? authors[authors.length - 1].id + 1 : 0;
      setAuthors([...authors, { id: id, message: authorsValue }]);
      setAuthorsValue("");
    }
  };

  const deleteAuthor = (id, authors, setAuthors) => {
    setAuthors(authors.filter((author) => author.id !== id));
  };

  const handleKeyword = (
    e,
    keywords,
    setKeywords,
    keywordsValue,
    setKeywordsValue
  ) => {
    e.preventDefault();
    if (keywordsValue === "") {
      alert("Add Keyword");
    } else {
      const id = keywords.length ? keywords[keywords.length - 1].id + 1 : 0;
      setKeywords([...keywords, { id: id, keyword: keywordsValue }]);
      setKeywordsValue("");
    }
  };

  const deleteKeyword = (id, keywords, setKeywords) => {
    setKeywords(keywords.filter((keyword) => keyword.id !== id));
  };

  const dataParser = useCallback(() => {
    let res = [];
    let data = intro + objectives + methods + results + conclusion;
    let str = data.replace(/(<([^>\t\n\r\\.\\?\\!]+)>)/gi, "").split(" ");
    str.map((s) => {
      let parsedStr = s.trim();
      return res.push(parsedStr);
    });
    setCounter(res.length);
  }, [intro, objectives, methods, results, conclusion]);

  const toolbarOptions = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],
      ["link", "image"],
      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction
      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
      ["clean"],
    ],
  };

  useEffect(() => {
    dataParser();
  }, [dataParser]);

  return (
    <Layout>
      <Heading title="Edit Your Abstract" background={Background} />
      <AbstractWrapper>
        <InputForm>
          <InputWrapper>
            <label>
              <span>Title</span>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Enter Title"
              />
            </label>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="topic">
              <span>
                Topic <span className="required">*</span>
              </span>
              <Select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                required
                name="topic"
              >
                <option defaultValue={"DEFAULT"}>Please Select</option>
                <option value="notSpecified">Not specified</option>
                <option value="select-1">Select 1</option>
                <option value="select-2">Select 2</option>
                <option value="select-3">Select 3</option>
              </Select>
            </label>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="preference">
              <span>
                Presentation preference <span className="required">*</span>
              </span>
              <Select
                value={presentationPreference}
                onChange={(e) => setPresentationPreference(e.target.value)}
                required
                name="preference"
              >
                <option defaultValue={"DEFAULT"}>Please Select</option>
                <option value="notSpecified">Not specified</option>
                <option value="select-1">Select 1</option>
                <option value="select-2">Select 2</option>
                <option value="select-3">Select 3</option>
              </Select>
            </label>
          </InputWrapper>
          <InputWrapper>
            <label>
              <span>Authors</span>
              <AuthorWrapper>
                <Input
                  onChange={(e) => setAuthorsValue(e.target.value)}
                  value={authorsValue}
                  placeholder="Enter Authors"
                />

                <AddButton
                  onClick={(e) =>
                    handleAuthor(
                      e,
                      authors,
                      setAuthors,
                      authorsValue,
                      setAuthorsValue
                    )
                  }
                >
                  Add Authors
                </AddButton>
              </AuthorWrapper>
            </label>
            {authors.map((author) => (
              <AuthorCard
                key={author.id}
                author={author.message}
                id={author.id}
                deleteAuthor={(id) => deleteAuthor(id, authors, setAuthors)}
              />
            ))}
          </InputWrapper>
          <InputWrapper>
            <label>
              <span>Keywords</span>
              <AuthorWrapper>
                <Input
                  onChange={(e) => setKeywordsValue(e.target.value)}
                  value={keywordsValue}
                  placeholder="Enter Keywords"
                />

                <AddButton
                  onClick={(e) =>
                    handleKeyword(
                      e,
                      keywords,
                      setKeywords,
                      keywordsValue,
                      setKeywordsValue
                    )
                  }
                >
                  Add Keyword
                </AddButton>
              </AuthorWrapper>
            </label>
            {keywords.length === 0 ? (
              <></>
            ) : (
              <KeywordsWrapper>
                {keywords.map((keyword) => (
                  <KeywordCard
                    key={keyword.id}
                    keyword={keyword.keyword}
                    id={keyword.id}
                    deleteKeyword={(id) =>
                      deleteKeyword(id, keywords, setKeywords)
                    }
                  />
                ))}
              </KeywordsWrapper>
            )}
          </InputWrapper>
          <InputWrapper>
            <label>
              <span>
                Introduction <span className="required">*</span>
              </span>
            </label>
            <RichText
              theme="snow"
              value={intro}
              onChange={setIntro}
              modules={toolbarOptions}
            />
            <Counter className={counter > 250 ? "over" : ""}>
              {counter} / 250
            </Counter>
          </InputWrapper>
          <InputWrapper>
            <label>
              <span>
                Objectives <span className="required">*</span>
              </span>
            </label>
            <RichText
              theme="snow"
              value={objectives}
              onChange={setObjectives}
              modules={toolbarOptions}
            />
            <Counter className={counter > 250 ? "over" : ""}>
              {counter} / 250
            </Counter>
          </InputWrapper>
          <InputWrapper>
            <label>
              <span>
                Methods <span className="required">*</span>
              </span>
            </label>
            <RichText
              theme="snow"
              value={methods}
              onChange={setMethods}
              modules={toolbarOptions}
            />
            <Counter className={counter > 250 ? "over" : ""}>
              {counter} / 250
            </Counter>
          </InputWrapper>
          <InputWrapper>
            <label>
              <span>
                Results <span className="required">*</span>
              </span>
            </label>
            <RichText
              theme="snow"
              value={results}
              onChange={setResults}
              modules={toolbarOptions}
            />
            <Counter className={counter > 250 ? "over" : ""}>
              {counter} / 250
            </Counter>
          </InputWrapper>
          <InputWrapper>
            <label>
              <span>
                Conclusion <span className="required">*</span>
              </span>
            </label>
            <RichText
              theme="snow"
              value={conclusion}
              onChange={setConclusion}
              modules={toolbarOptions}
            />
            <Counter className={counter > 250 ? "over" : ""}>
              {counter} / 250
            </Counter>
          </InputWrapper>
          <InputWrapper>
            <label>
              <span>
                Upload your Abstract <span className="required">*</span>
              </span>
              <Input
                type="file"
                id="absract"
                name="absract"
                accept=".doc, .docx"
              />
            </label>
          </InputWrapper>
          <Button type="submit" value="Submit Abstract" />
        </InputForm>
      </AbstractWrapper>
    </Layout>
  );
};

const Title = styled.h1`
  margin: 30px auto 50px;
  text-align: center;
  font-family: "Urbanist", sans-serif;
  font-size: 44px;
  font-weight: 700;
  color: #39364f;
  text-transform: capitalize;
`;

const AbstractWrapper = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const InputForm = styled.form`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 25px;
  max-width: 600px;
  width: 100%;
  a {
    font-family: "Urbanist", sans-serif;
    font-size: 14px;
    color: #486ff8;
    font-weight: 600;
    transition: all 0.3s ease-out;
    &:hover {
      color: #486ff8;
      transition: all 0.3s ease-out;
    }
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  @media only screen and (max-width: 991.98px) {
    flex-wrap: wrap;
  }
  label {
    font-family: "Urbanist", sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #39364f;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    .required {
      color: #486ff8;
    }
  }
`;

const Input = styled.input`
  background-color: #f4f4f4;
  padding: 15px;
  border: none;
  border-radius: 5px;
  width: 100%;
  transition: all 0.3s ease-out;
  border: 2px solid transparent;
  &[type="email"] {
    font-family: "Urbanist", sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #39364f;
  }
  &::-webkit-input-placeholder {
    font-family: "Urbanist", sans-serif;
    font-size: 14px;
    color: #717488;
    font-weight: 400;
  }
  &:focus {
    box-shadow: none;
    outline: none;
    border: 2px solid #486ff8;
    transition: all 0.3s ease-out;
  }
  &[type="file"] {
    background-color: transparent;
    padding: 0;
    &::-webkit-file-upload-button {
      background-color: #486ff8;
      font-family: "Urbanist", sans-serif;
      font-size: 16px;
      font-weight: 700;
      color: #fff;
      border-radius: 5px;
      height: 50px;
      padding: 0 20px;
      /* display: flex; */
      /* justify-content: center; */
      /* align-items: center; */
      outline: none;
      border: 2px solid transparent;
      transition: all 0.3s ease-out;
      &:hover {
        border: 2px solid #486ff8;
        background-color: #fff;
        color: #486ff8;
        transition: all 0.3s ease-out;
      }
    }
  }
`;

const AuthorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

const KeywordsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  max-width: 600px;
  width: 100%;
`;

const AddButton = styled.button`
  background-color: #486ff8;
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  height: 50px;
  max-width: 120px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 2px solid transparent;
  transition: all 0.3s ease-out;
  &:hover {
    border: 2px solid #486ff8;
    background-color: #fff;
    color: #486ff8;
    transition: all 0.3s ease-out;
  }
`;

const Select = styled.select`
  background-color: #f4f4f4;
  padding: 15px;
  border: none;
  border-radius: 5px;
  width: 280px;
  transition: all 0.3s ease-out;
  border: 2px solid transparent;
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #39364f;
  width: 100%;
  option {
    transition: all 0.3s ease-out;
    &:hover {
      transition: all 0.3s ease-out;
    }
  }
  &::-webkit-input-placeholder {
    font-family: "Urbanist", sans-serif;
    font-size: 14px;
    color: #717488;
    font-weight: 400;
  }
  &:focus {
    box-shadow: none;
    outline: none;
    border: 2px solid #486ff8;
    transition: all 0.3s ease-out;
  }
`;

const Counter = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #39364f;
  &.over {
    color: #f00;
  }
`;

const RichText = styled(ReactQuill)`
  max-width: 600px;
  width: 100% !important;
  font-family: "Urbanist", sans-serif;
  p {
  }
  ul {
    list-style-type: disc;
    list-style: disc;
    /* padding-left: 32px !important; */
  }
  ol {
    list-style-type: decimal;
    list-style: decimal;
    /* padding-left: 32px !important; */
  }
  strong {
    font-weight: bold;
  }
  em,
  i {
    font-style: italic;
  }
  li {
  }
  .ql-editor {
    height: 400px;
    max-height: 400px;
  }
`;

const Button = styled.input`
  background-color: #486ff8;
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 2px solid transparent;
  transition: all 0.3s ease-out;
  &:hover {
    border: 2px solid #486ff8;
    background-color: #fff;
    color: #486ff8;
    transition: all 0.3s ease-out;
  }
`;

export default AbstractEdit;
