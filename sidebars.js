// @ts-check

/**
 * Creating a sidebar enables you to:
 * - Create an ordered group of docs
 * - Render a sidebar for each doc of that group
 * - Provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Chapter 1: Introduction',
      items: [
        'chapter1/1introduction',
        'chapter1/2keyfeatures',
        'chapter1/3systemrequirments',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 2: Getting Started with CircuitVerse',
      items: [
        'chapter2/1gettingstarted',
        'chapter2/2cvforeducators',
        'chapter2/3lmsintegration',
        'chapter2/5ssointegration',
        'chapter2/4bestpracticescv',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 3: Simulator Interface',
      items: [
        'chapter3/1introduction',
        'chapter3/2understandingcvsimulator',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 4: Circuit Elements Library',
      items: [
        'chapter4/1introduction',
        'chapter4/2input',
        'chapter4/3output',
        'chapter4/4gates',
        'chapter4/5muxandplex',
        'chapter4/6sequentialelements',
        'chapter4/7annotation',
        'chapter4/8misc',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 5: Subcircuits and Edit Layout',
      items: [
        'chapter5/usingsubcircuits',
        'chapter5/usingeditlayout',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 6: Timing Diagrams and Delay',
      items: [
        'chapter6/delayvsclock',
        'chapter6/timingdiagram',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 7: Building Circuit Simulations within CircuitVerse',
      items: [
        'chapter7/1cvdesignprocess',
        'chapter7/2buildwithcv',
        'chapter7/3testcircuits',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 8: Support Resources',
      items: [
        'chapter8/1onlineforums',
        'chapter8/2cvfaq',
        'chapter8/3cverrormessages',
        'chapter8/4shortcuts',
      ],
    },
  ],
};

export default sidebars;
