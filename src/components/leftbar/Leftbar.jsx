import React from "react";

import friendsMenuIcon from "../../assets/1.png";
import groupsMenuIcon from "../../assets/2.png";
import marketMenuIcon from "../../assets/3.png";
import watchMenuIcon from "../../assets/4.png";
import memoriesMenuIcon from "../../assets/5.png";
import eventsMenuIcon from "../../assets/6.png";
import gamingMenuIcon from "../../assets/7.png";
import galleryMenuIcon from "../../assets/8.png";
import videosMenuIcon from "../../assets/9.png";
import messagesMenuIcon from "../../assets/1.png";
import tutorialsMenuIcon from "../../assets/11.png";
import coursesMenuIcon from "../../assets/12.png";
import fundMenuIcon from "../../assets/13.png";

import "./leftbar.scss";

const leftbarMenuItems = [
  {
    mainTitle: "",
    items: [
      {
        icon: friendsMenuIcon,
        title: "Friends",
      },
      {
        icon: groupsMenuIcon,
        title: "Groups",
      },
      {
        icon: marketMenuIcon,
        title: "Marketplace",
      },
      {
        icon: watchMenuIcon,
        title: "Watch",
      },
      {
        icon: memoriesMenuIcon,
        title: "Memories",
      },
    ],
  },
  {
    mainTitle: "Your shortcuts",
    items: [
      {
        icon: eventsMenuIcon,
        title: "Events",
      },
      {
        icon: gamingMenuIcon,
        title: "Gaming",
      },
      {
        icon: galleryMenuIcon,
        title: "Gallery",
      },
      {
        icon: videosMenuIcon,
        title: "Videos",
      },
      {
        icon: messagesMenuIcon,
        title: "Messages",
      },
    ],
  },
  {
    mainTitle: "Others",
    items: [
      {
        icon: tutorialsMenuIcon,
        title: "Fundraiser",
      },
      {
        icon: coursesMenuIcon,
        title: "Tutorials",
      },
      {
        icon: fundMenuIcon,
        title: "Courses",
      },
    ],
  },
];

const IndividualMenuItem = ({ icon, title }) => {
  return (
    <div className="item">
      <img src={icon} alt="menu icon" />
      <span>{title}</span>
    </div>
  );
};

const SectionMenuItems = ({ mainTitle, items }) => {
  return (
    <div className="menu">
      {mainTitle && <span>{mainTitle}</span>}
      {!mainTitle && (
        <div className="user">
          <img
            src={
              "data:image/jpeg;base64,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"
            }
            alt=""
          />
          <span>Wibu Hao</span>
        </div>
      )}

      {items.map((item) => {
        return <IndividualMenuItem icon={item.icon} title={item.title} />;
      })}
    </div>
  );
};

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        {leftbarMenuItems.map((section) => {
          return (
            <SectionMenuItems
              mainTitle={section.mainTitle}
              items={section.items}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Leftbar;
