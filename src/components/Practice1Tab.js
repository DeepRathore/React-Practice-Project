import { useState } from "react";

function TabSection(props) {
  return (
    <>
      <div
        className={`${props.tabClass} ${props.activeLink === props.tabClass ? 'active-link' : ''}`}
        onClick={props.onClick}
      >
        <div className="name">Working {props.tabName}</div>
        <div className="content">{props.tabContent}</div>
      </div>
    </>
  );
}

function Practice1Tab() {
  const [activeClass, setActiveClass] = useState('tab1');

  const tabContent = [
    {
      name: "Why React?",
      description:
        "Component-based architecture:.",
      tabClass: 'tab1'
    },
    {
      name: "Core Feature",
      description: "Another feature description.",
      tabClass: 'tab2'
    },
    {
      name: "Related Responses",
      description: "Another feature description.",
      tabClass: 'tab3'
    },
    {
      name: "React Vs Js",
      description: "Another feature description.",
      tabClass: 'tab4'
    }
  ];

  const updateActiveLink = (value) => {
    setActiveClass(value);
  };

  return (
    <>
      <section className="container practice-content">
        {tabContent.map((tab, index) => (
          <TabSection
            key={index}
            tabName={tab.name}
            tabClass={tab.tabClass}
            tabContent={tab.description}
            activeLink={activeClass}
            onClick={() => updateActiveLink(tab.tabClass)}
          />
        ))}
      </section>
    </>
  );
}

export default Practice1Tab;
