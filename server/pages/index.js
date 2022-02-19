"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
;// CONCATENATED MODULE: ./public/data/quizList.js
const quizList = [
    {
        question: `What is the difference between a library and a framework?`,
        choices: [
            {
                content: `No difference, they are the same.`,
                answerYn: false
            },
            {
                content: `A library calls our code, we call the framework.`,
                answerYn: false
            },
            {
                content: `A framework calls our code, we call the library.`,
                answerYn: true
            }, 
        ],
        desc: `The technical difference between a framework and library lies in a term called inversion of control.
    When you use a library, you are in charge of the flow of the application.
    You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow.
    It provides some places for you to plug in your code, but it calls the code you plugged in as needed.    
    `
    },
    {
        question: `NextJS is a framework.`,
        choices: [
            {
                content: `True`,
                answerYn: true
            },
            {
                content: `False`,
                answerYn: false
            }, 
        ],
        desc: `NextJS is an awwwwsome framework!!!`
    },
    {
        question: `If I want to create a /about URL what should I do?`,
        choices: [
            {
                content: `Create an 'about.jsx' file inside of the '/src' folder.`,
                answerYn: false
            },
            {
                content: `Create an 'about.jsx' file inside of the '/pages' folder.`,
                answerYn: true
            }, 
        ],
        desc: `We can make some URL by locating the file inside of the '/pages'.
    And then we can access the URL as '/{fileName}'.`
    },
    {
        question: `What is _app.jsx`,
        choices: [
            {
                content: `It's a file for the /app URL.`,
                answerYn: false
            },
            {
                content: `It's a blueprint that NextJS will use to build all our pages.`,
                answerYn: true
            }, 
        ],
        desc: `_app.jsx is like a Door-Keeper`
    },
    {
        question: `Can we use CSS in NextJS without installing anything else?`,
        choices: [
            {
                content: `True`,
                answerYn: true
            },
            {
                content: `False`,
                answerYn: false
            }, 
        ],
        desc: `We can use css by using module.xxx.css or styled-jsx!!`
    },
    {
        question: `Why do we use getServerSideProps?`,
        choices: [
            {
                content: `To run code on the backend after the page is rendered.`,
                answerYn: false
            },
            {
                content: `To run code on the backend before the page is rendered.`,
                answerYn: true
            }, 
        ],
        desc: `For the powerful SSR`
    },
    {
        question: `What file do we have to create to get a URL like this: /posts/:id`,
        choices: [
            {
                content: `src/pages/posts/id.jsx`,
                answerYn: false
            },
            {
                content: `src/pages/posts/{id}.jsx`,
                answerYn: false
            },
            {
                content: `src/pages/posts/[id].jsx`,
                answerYn: true
            }, 
        ],
        desc: `We can use the dynamic params by using '[]'.`
    },
    {
        question: `What file do we have to create to catch this URL: /posts/1/section/2/comments/3`,
        choices: [
            {
                content: `src/pages/posts/id/section/sectionId/comments/commentId.jsx`,
                answerYn: false
            },
            {
                content: `src/pages/posts/{id}/section/{sectionId}/comments/{commentId}.jsx`,
                answerYn: false
            },
            {
                content: `src/pages/posts/[...id].jsx`,
                answerYn: true
            }, 
        ],
        desc: `We can catch the multiple params by using '[...]'.`
    }, 
];
/* harmony default export */ const data_quizList = (quizList);

;// CONCATENATED MODULE: ./lib/shuffle.js
const shuffle = (quizList)=>{
    quizList.map((quiz)=>{
        quiz.choices.sort(()=>Math.random() - 0.5
        );
    });
    quizList.sort(()=>Math.random() - 0.5
    );
    return [
        ...quizList
    ];
};
/* harmony default export */ const lib_shuffle = (shuffle);

;// CONCATENATED MODULE: ./public/style/palette.js
const palette = {
    light: {
        primary: '#E5E3C9',
        secondary: '#94B49F'
    },
    dark: {
        primary: '#331B3F',
        secondary: '#ACC7B4'
    }
};
/* harmony default export */ const style_palette = (palette);

;// CONCATENATED MODULE: ./components/Header.js



const styled = new String(`.header.jsx-b326b41dba5eb494{height:5vh;
background-color:${style_palette.light.primary};
color:${style_palette.light.secondary};
box-shadow:${style_palette.light.primary}66 0px 5px, ${style_palette.light.primary}4D 0px 10px, ${style_palette.light.primary}33 0px 15px, ${style_palette.light.primary}1A 0px 20px, ${style_palette.light.primary}0D 0px 25px;
display:-webkit-box;
display:-webkit-flex;
display:-ms-flexbox;
display:flex;
-webkit-justify-content:center;
justify-content:center;
-webkit-align-items:center;
-webkit-box-align:center;
-ms-flex-align:center;
align-items:center}`);
styled.__hash = "b326b41dba5eb494";
const Header = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `jsx-${styled.__hash}` + " " + "header",
                /*#__PURE__*/ children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: `jsx-${styled.__hash}`,
                    children: `Nico's Next Quiz 📚`
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: styled.__hash,
                children: styled
            })
        ]
    }));
};
/* harmony default export */ const components_Header = (Header);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/Radio.js



const Radio_styled = new String(`.rad-label.jsx-dbeacf94efe41c37{display:-webkit-box;
display:-webkit-flex;
display:-ms-flexbox;
display:flex;
-webkit-align-items:center;
-webkit-box-align:center;
-ms-flex-align:center;
align-items:center;
border-radius:100px;
padding:14px 16px;
margin:10px 0;
cursor:pointer;
-webkit-transition:0.3s;
transition:0.3s}
.rad-label.jsx-dbeacf94efe41c37:hover, .rad-label.jsx-dbeacf94efe41c37:focus-within{background:${style_palette.light.secondary}24}
.rad-input.jsx-dbeacf94efe41c37{position:absolute;
left:0;
top:0;
width:1px;
height:1px;
opacity:0;
z-index:-1}
.rad-design.jsx-dbeacf94efe41c37{width:14px;
height:14px;
border-radius:100px;
background:linear-gradient(to right bottom, hsl(154, 97%, 62%), hsl(225, 97%, 62%));
position:relative}
.rad-design.jsx-dbeacf94efe41c37::before{content:'';
display:inline-block;
width:inherit;
height:inherit;
border-radius:inherit;
background:hsl(0, 0%, 90%);
-webkit-transform:scale(1.1);
-moz-transform:scale(1.1);
-ms-transform:scale(1.1);
transform:scale(1.1);
-webkit-transition:0.3s;
transition:0.3s}
.rad-input.jsx-dbeacf94efe41c37:checked+.rad-design.jsx-dbeacf94efe41c37::before{-webkit-transform:scale(0);
-moz-transform:scale(0);
-ms-transform:scale(0);
transform:scale(0)}
.rad-text.jsx-dbeacf94efe41c37{color:hsl(0, 0%, 60%);
margin-left:14px;
font-size:18px;
-webkit-transition:0.3s;
transition:0.3s}
.rad-input.jsx-dbeacf94efe41c37:checked~.rad-text.jsx-dbeacf94efe41c37{color:hsl(0, 0%, 30%)}`);
Radio_styled.__hash = "dbeacf94efe41c37";
const Radio = ({ name , choice , onChange  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                onChange: onChange,
                className: `jsx-${Radio_styled.__hash}` + " " + "rad-label",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "radio",
                        name: name,
                        value: choice.answerYn,
                        className: `jsx-${Radio_styled.__hash}` + " " + "rad-input"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `jsx-${Radio_styled.__hash}` + " " + "rad-design"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `jsx-${Radio_styled.__hash}` + " " + "rad-text",
                        /*#__PURE__*/ children: choice.content
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: Radio_styled.__hash,
                children: Radio_styled
            })
        ]
    }));
};
/* harmony default export */ const components_Radio = (Radio);

;// CONCATENATED MODULE: ./components/Quiz.js





const Quiz_styled = new String(`.quizContainer.jsx-b28b06f1a16b89de{height:95vh;
scroll-snap-align:center;
display:-webkit-box;
display:-webkit-flex;
display:-ms-flexbox;
display:flex;
-webkit-flex-direction:column;
-ms-flex-direction:column;
flex-direction:column;
-webkit-justify-content:center;
justify-content:center;
-webkit-align-items:center;
-webkit-box-align:center;
-ms-flex-align:center;
align-items:center;
letter-spacing:1px}
.quizBox.jsx-b28b06f1a16b89de{width:90%;
margin:15px;
background-color:${style_palette.light.primary};
color:${style_palette.light.secondary};
padding:5px;
border:1px solid ${style_palette.light.secondary};
border-radius:10px;
box-shadow:rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset}
.title.jsx-b28b06f1a16b89de{margin-left:5px;
border-bottom:1px dotted ${style_palette.light.secondary};
font-weight:bold}
.choiceWrapper.jsx-b28b06f1a16b89de{padding:15px}
.choice.jsx-b28b06f1a16b89de:not(:last-child){margin-bottom:20px}
.answerBox.jsx-b28b06f1a16b89de{background-color:${style_palette.light.secondary};
color:${style_palette.light.primary};
box-shadow:rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
visibility:hidden;
max-height:0;
-webkit-transition:max-height 4s;
transition:max-height 4s}
.answerBox.active.jsx-b28b06f1a16b89de{visibility:visible;
max-height:100vh;
margin:10px;
padding:10px;
border-radius:15px}
.answer.jsx-b28b06f1a16b89de{font-weight:bold}
.description.jsx-b28b06f1a16b89de{padding-left:15px}`);
Quiz_styled.__hash = "b28b06f1a16b89de";
const Quiz = ({ quiz , quizIndex  })=>{
    const { /*#__PURE__*/ 0: answerContent , 1: setAnswerContent  } = (0,external_react_.useState)('');
    const onChange = (e)=>{
        const answerYn = e.target.value;
        const quizBox = document.querySelector(`#answerBox${quizIndex}`);
        if (answerYn === 'true') {
            setAnswerContent('Correct!');
        } else {
            setAnswerContent('Wrong..');
        }
        quizBox.classList.add(`active`);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `jsx-${Quiz_styled.__hash}` + " " + "quizContainer",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `jsx-${Quiz_styled.__hash}` + " " + "quizBox",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `jsx-${Quiz_styled.__hash}` + " " + "title",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: `jsx-${Quiz_styled.__hash}`,
                                children: quiz.question
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `jsx-${Quiz_styled.__hash}` + " " + "choiceWrapper",
                            children: quiz.choices.map((choice, index)=>{
                                return(/*#__PURE__*/ jsx_runtime_.jsx(components_Radio, {
                                    name: `choice${quizIndex}`,
                                    choice: choice,
                                    onChange: onChange
                                }, index));
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            id: `answerBox${quizIndex}`,
                            className: `jsx-${Quiz_styled.__hash}` + " " + "answerBox",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: `jsx-${Quiz_styled.__hash}` + " " + "answer",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: `jsx-${Quiz_styled.__hash}`,
                                        children: answerContent
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: `jsx-${Quiz_styled.__hash}` + " " + "description",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: `jsx-${Quiz_styled.__hash}`,
                                        children: quiz.desc
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: Quiz_styled.__hash,
                children: Quiz_styled
            })
        ]
    }));
};
/* harmony default export */ const components_Quiz = (Quiz);

;// CONCATENATED MODULE: ./pages/index.js







const pages_styled = new String(`.homeContainer.jsx-fba8829812260316{height:100vh}
.quizListWrapper.jsx-fba8829812260316{height:95vh;
background-color:${style_palette.light.primary}66;
overflow:auto;
scroll-snap-type:y mandatory}`);
pages_styled.__hash = "fba8829812260316";
function Home({ shuffledQuizList  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `jsx-${pages_styled.__hash}` + " " + "homeContainer",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `jsx-${pages_styled.__hash}` + " " + "quizListWrapper",
                        /*#__PURE__*/ children: shuffledQuizList.map((quiz, index)=>{
                            return(/*#__PURE__*/ jsx_runtime_.jsx(components_Quiz, {
                                quiz: quiz,
                                quizIndex: index
                            }, index));
                        })
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: pages_styled.__hash,
                children: pages_styled
            })
        ]
    }));
};
const getServerSideProps = ()=>{
    const shuffledQuizList = lib_shuffle(data_quizList);
    return {
        props: {
            shuffledQuizList
        }
    };
};


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(274));
module.exports = __webpack_exports__;

})();