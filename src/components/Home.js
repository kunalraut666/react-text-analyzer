import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { toast, Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Home(props) {
    
    //setting style
    const textAreaStyle = {
        height: '200px',
        backgroundColor: props.mode === 'dark' ? 'rgb(32 37 41)' : props.mode === 'green' ? 'green' : props.mode === 'blue' ? 'blue': props.mode === 'red' ? 'red' : 'rgb(248 249 250)',
        color: (props.mode === 'dark' || props.mode === 'green' || props.mode === 'blue' || props.mode === 'red') ? 'white' : 'black',
        border: '1px solid',
      }
    
    //for changing text  
    const [text, setText] = useState('');
    const [showSummary, setShowSummary] = useState(false);
    const [showDensity, setShowDensity] = useState(false);
    const [showPreview, setShowPreview] = useState(false);


    // useEffect to hide summary, density, and preview when text is manually cleared
    useEffect(() => {
      if (text.trim() === '') {
          setShowSummary(false);
          setShowDensity(false);
          setShowPreview(false);
      }
  }, [text]);

    //change to uppercase method  
    const changeUpCase = (e) => {
        let upText = text.toUpperCase();
        setText(upText);
        toast.success("Converted To Upper Case!", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          transition: Bounce,
          // theme: "light",
          className: `${props.mode === 'dark' ? 'toast-custom-dark' : props.mode === 'green' ? 'toast-custom-green' : props.mode === 'blue' ? 'toast-custom-blue' : props.mode === 'red' ? 'toast-custom-red' : 'toast-custom-light'}`,
          pauseOnFocusLoss: false,
          icon: false,
          closeButton: false
        });
    }
    //change to lowercase method
    const changeLowCase = () => {
        let loText = text.toLowerCase();
        setText(loText);

        toast.success("Converted To Lower Case!", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          transition: Bounce,
          // theme: "light",
          className: `${props.mode === 'dark' ? 'toast-custom-dark' : props.mode === 'green' ? 'toast-custom-green' : props.mode === 'blue' ? 'toast-custom-blue' : props.mode === 'red' ? 'toast-custom-red' : 'toast-custom-light'}`,
          pauseOnFocusLoss: false,
          icon: false,
          closeButton: false
        });
    }
    //clear text method
    const clearText = () => {
        setText("");
        setShowSummary(false);
        setShowDensity(false);
        setShowPreview(false);

        toast.success("Text Cleared Successfully!", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          transition: Bounce,
          // theme: "light",
          className: `${props.mode === 'dark' ? 'toast-custom-dark' : props.mode === 'green' ? 'toast-custom-green' : props.mode === 'blue' ? 'toast-custom-blue' : props.mode === 'red' ? 'toast-custom-red' : 'toast-custom-light'}`,
          pauseOnFocusLoss: false,
          icon: false,
          closeButton: false
        });
    }

    const countWords = () => {
        if (typeof text !== 'string') {
            return 0; // Return 0 if text is not a string
          }
        // Remove leading and trailing whitespaces
        const trimmedText = text.trim();
        // Split text by whitespaces to count words
        const words = trimmedText.split(/\s+/);
        // Filter out empty strings to handle multiple spaces between words
        const filteredWords = words.filter(word => word !== '');
        // Return the number of words
        return filteredWords.length;
      };

      const calculateWordDensity = () => {
        const words = text.trim().split(/\s+/).map(word => word.replace(/[^\w\s]/gi, '').toLowerCase());
        const wordCount = words.length;
        const wordDensityMap = {};
    
        words.forEach(word => {
          if (word in wordDensityMap) {
            wordDensityMap[word]++;
          } else {
            wordDensityMap[word] = 1;
          }
        });
    
        const wordDensityList = Object.keys(wordDensityMap).map(word => ({
          word: word,
          density: (wordDensityMap[word] / wordCount) * 100
        }));
    
        return wordDensityList;
      };

      const calculateCaseCounts = () => {

        if (text.trim() === '') {
            return { upperCount: 0, lowerCount: 0 };
          }

        const words = text.trim().split(/\s+/);
        let upperCount = 0;
        let lowerCount = 0;
    
        words.forEach(word => {
          if (word.toUpperCase() === word) {
            upperCount++;
          } else if (word.toLowerCase() === word) {
            lowerCount++;
          }
        });
    
        return { upperCount, lowerCount };
      };

      const calculateSentences = () => {
        if (typeof text !== 'string') {
          return 0;
        }
        // Split the text into sentences based on common punctuation marks
        const sentences = text.trim().split(/[.!?]+/);
        // Remove empty sentences
        const filteredSentences = sentences.filter(sentence => sentence.trim() !== '');
        return filteredSentences.length;
      };

      const countParagraphs = () => {
        if (typeof text !== 'string') {
          return 0;
        }
        const paragraphs = text.split('\n').filter(paragraph => paragraph.trim() !== '');
        return paragraphs.length;
      };
    
      const countSpaces = () => {
        if (typeof text !== 'string') {
          return 0;
        }
        const spaces = text.split('').filter(char => char === ' ');
        return spaces.length;
      };
    
      const countPunctuation = () => {
        if (typeof text !== 'string') {
          return 0;
        }
        const punctuationMarks = text.split('').filter(char => /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(char));
        return punctuationMarks.length;
      };
    
      const countUppercaseLetters = () => {
        if (typeof text !== 'string') {
          return 0;
        }
        const uppercaseLetters = text.split('').filter(char => /[A-Z]/.test(char));
        return uppercaseLetters.length;
      };
    
      const countLowercaseLetters = () => {
        if (typeof text !== 'string') {
          return 0;
        }
        const lowercaseLetters = text.split('').filter(char => /[a-z]/.test(char));
        return lowercaseLetters.length;
      };

      const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));

        toast.success("Extra Space Removed!", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          transition: Bounce,
          // theme: "light",
          className: `${props.mode === 'dark' ? 'toast-custom-dark' : props.mode === 'green' ? 'toast-custom-green' : props.mode === 'blue' ? 'toast-custom-blue' : props.mode === 'red' ? 'toast-custom-red' : 'toast-custom-light'}`,
          pauseOnFocusLoss: false,
          icon: false,
          closeButton: false
        });
      }

      const handleCopyToClipBoard = () =>{
        navigator.clipboard.writeText(text);
        toast.success("Text Copied to Clipboard!", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition: Bounce,
            className: `${props.mode === 'dark' ? 'toast-custom-dark' : props.mode === 'green' ? 'toast-custom-green' : props.mode === 'blue' ? 'toast-custom-blue' : props.mode === 'red' ? 'toast-custom-red' : 'toast-custom-light'}`,
            pauseOnFocusLoss: false,
            icon: false,
            closeButton: false
        });
      }

    
    
    const toggleSummary = () => {
        setShowSummary(!showSummary);
    };
      
    const toggleDensity = () => {
        setShowDensity(!showDensity);
    };

    const togglePreview = () => {
        setShowPreview(!showPreview);
    };

  return (
    <>
    
      <div
        className="container grid"
        style={{
          color:
            props.mode === "dark" ||
            props.mode === "green" ||
            props.mode === "blue" || 
            props.mode === 'red'
              ? "white"
              : "black",

              paddingBottom: "200px"
        }}
      >
        <h2 className={"container my-3"}>{props.title}</h2>
        <div className="form-floating container my-4">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            style={textAreaStyle}
            onChange={(e) => setText(e.target.value)}
            value={text}
          ></textarea>
          <Button
            className={`btn btn-${props.mode === 'dark' ? 'dark' : props.mode === 'green' ? 'success' : props.mode === 'blue' ? 'primary': props.mode === 'red' ? 'danger' : 'light'} my-2`}
            onClick={() => {
              if (text.trim() === "") return; // Check if text is empty
              changeUpCase();
            }}
          >
            Uppercase
          </Button>

          <Button
            className={`btn btn-${props.mode === 'dark' ? 'dark' : props.mode === 'green' ? 'success' : props.mode === 'blue' ? 'primary': props.mode === 'red' ? 'danger' : 'light'} my-2 mx-1`}
            onClick={() => {
              if (text.trim() === "") return; // Check if text is empty
              changeLowCase();
            }}
          >
            Lowercase
          </Button>

          <Button
            className={`btn btn-${props.mode === 'dark' ? 'dark' : props.mode === 'green' ? 'success' : props.mode === 'blue' ? 'primary': props.mode === 'red' ? 'danger' : 'light'} my-2`}
            onClick={() => {
              if (text.trim() === "") return; // Check if text is empty
              clearText();
            }}
          >
            Clear
          </Button>

          <Button
            className={`btn btn-${props.mode === 'dark' ? 'dark' : props.mode === 'green' ? 'success' : props.mode === 'blue' ? 'primary': props.mode === 'red' ? 'danger' : 'light'} my-2 mx-1`}
            onClick={() => {
              if (text.trim() === "") return; // Check if text is empty
              toggleSummary();
            }}
          >
            {showSummary ? "Hide Summary" : "Show Summary"}
          </Button>

          <Button
            className={`btn btn-${props.mode === 'dark' ? 'dark' : props.mode === 'green' ? 'success' : props.mode === 'blue' ? 'primary': props.mode === 'red' ? 'danger' : 'light'} my-2 mx-1`}
            onClick={() => {
              if (text.trim() === "") return; // Check if text is empty
              toggleDensity();
            }}
          >
            {showDensity ? "Hide Density" : "Show Density"}
          </Button>

          <Button
            className={`btn btn-${props.mode === 'dark' ? 'dark' : props.mode === 'green' ? 'success' : props.mode === 'blue' ? 'primary': props.mode === 'red' ? 'danger' : 'light'} my-2 mx-1`}
            onClick={() => {
              if (text.trim() === "") return; // Check if text is empty
              togglePreview();
            }}
          >
            {showPreview ? "Hide Preview" : "Show Preview"}
          </Button>

          <Button
            className={`btn btn-${props.mode === 'dark' ? 'dark' : props.mode === 'green' ? 'success' : props.mode === 'blue' ? 'primary': props.mode === 'red' ? 'danger' : 'light'} my-2 mx-1`}
            onClick={() => {
              if (text.trim() === "") return; // Check if text is empty
              handleCopyToClipBoard();
            }}
          >
            Copy To Clipboard
          </Button>

          <Button
            className={`btn btn-${props.mode === 'dark' ? 'dark' : props.mode === 'green' ? 'success' : props.mode === 'blue' ? 'primary': props.mode === 'red' ? 'danger' : 'light'} my-2 mx-1`}
            onClick={() => {
              if (text.trim() === "") return; // Check if text is empty
              handleExtraSpaces();
            }}
          >
            Remove Extra Space
          </Button>
        </div>
        <div className="container">
          {showSummary && (
            <>
              <h4>Text Summary:</h4>
              <div className="row">
                <div className="col-md-6">
                  {/* <table  style={{ backgroundColor: props.mode === 'dark' ? 'rgb(32 37 41)' : props.mode === 'green' ? 'green' : props.mode === 'blue' ? 'blue' : 'white' }}> */}
                  <table
                    style={{
                      backgroundColor:
                        props.mode === "dark"
                          ? "rgb(32 37 41) !important"
                          : props.mode === "green"
                          ? "green !important"
                          : props.mode === "blue"
                          ? "blue !important"
                          : "white !important",

                          border: '1px solid',
              
                    }}
                  >
                    <thead>
                      <tr>
                        <th scope="col" style={{ border: '1px solid' }} >No. of Words</th>
                        <th scope="col" style={{ border: '1px solid' }} >No. of Characters</th>
                        <th scope="col" style={{ border: '1px solid' }} >No. of Uppercase words</th>
                        <th scope="col" style={{ border: '1px solid' }} >No. of Lowercase words</th>
                        <th scope="col" style={{ border: '1px solid' }} >No. of Sentences</th>
                        <th scope="col" style={{ border: '1px solid' }} >No. of Paragraphs</th>
                        <th scope="col" style={{ border: '1px solid' }} >No. of Spaces</th>
                        <th scope="col" style={{ border: '1px solid' }} >No. of Punctuations</th>
                        <th scope="col" style={{ border: '1px solid' }} >No. of Uppercase Letters</th>
                        <th scope="col" style={{ border: '1px solid' }} >No. of Lowercase Letters</th>
                        <th scope="col" style={{ border: '1px solid' }} >Average Time Taken to read</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ border: '1px solid' }} >{countWords()}</td>
                        <td style={{ border: '1px solid' }} >{text.length}</td>
                        <td style={{ border: '1px solid' }} >{calculateCaseCounts().upperCount}</td>
                        <td style={{ border: '1px solid' }} >{calculateCaseCounts().lowerCount}</td>
                        <td style={{ border: '1px solid' }} >{calculateSentences()}</td>
                        <td style={{ border: '1px solid' }} >{countParagraphs()}</td>
                        <td style={{ border: '1px solid' }} >{countSpaces()}</td>
                        <td style={{ border: '1px solid' }} >{countPunctuation()}</td>
                        <td style={{ border: '1px solid' }} >{countUppercaseLetters()}</td>
                        <td style={{ border: '1px solid' }} >{countLowercaseLetters()}</td>
                        <td style={{ border: '1px solid' }} >{(0.24 * countWords()).toFixed(2)} Min</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {showDensity && (
            <>
              <h4>Word Density:</h4>
              <div className="row">
                <div className="col-md-6">
                  <table style={{
                      backgroundColor:
                        props.mode === "dark"
                          ? "rgb(32 37 41) !important"
                          : props.mode === "green"
                          ? "green !important"
                          : props.mode === "blue"
                          ? "blue !important"
                          : "white !important",

                          border: '1px solid',
                          width: '100%'
              
                    }}>
                    <thead>
                      <tr>
                        <th scope="col" style={{ border: '1px solid' }} >Word</th>
                        <th scope="col" style={{ border: '1px solid' }} >Density (%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {calculateWordDensity().map((item, index) => (
                        <tr key={index}>
                          <td style={{ border: '1px solid' }} >{item.word}</td>
                          <td style={{ border: '1px solid' }} >{item.density.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
          {showPreview && (
            <>
              <p>Preview:</p>
              <textarea
                className="form-control"
                type="text"
                value={text}
                aria-label="readonly input example"
                readOnly
                style={textAreaStyle}
              ></textarea>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Home
