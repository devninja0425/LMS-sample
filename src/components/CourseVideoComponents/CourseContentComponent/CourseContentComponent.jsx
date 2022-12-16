import { useState } from "react";
import { Link } from "react-router-dom";

import CustomCheckboxUtil from "../../../utils/FormUtils/CustomCheckboxUtil/CustomCheckboxUtil";

import closeIcon from "/icons/close.png";
import playIcon from "/icons/play-button.png";
import downArrowIcon from "/icons/down-arrow.svg";
import openFolderIcon from "/icons/open-folder.png";

import css from "./CourseContentComponent.module.css";

const CourseContentComponent = (props) => {
  const { title = "", data = [] } = props;
  const [toggleBox, setToggleBox] = useState({});
  const [toggleDrpDwn, setToggleDrpDwn] = useState({});

  return (
    <div className={css.outterDiv}>
      <div className={css.innerDiv}>
        <div className={css.titleBox}>
          <span className={css.ttl}>{title}</span>
          <span className={css.imgBox}>
            <img src={closeIcon} alt="close icon" className={css.closeIcon} />
          </span>
        </div>
        <div className={css.bdy}>
          {data?.map((item, id) => {
            return (
              <div className={css.tab} key={`tab-${id}`}>
                <div
                  className={css.tabTitleBox}
                  onClick={() =>
                    setToggleBox((p) => {
                      return { ...p, [id]: !p[id] };
                    })
                  }
                >
                  <div className={css.tabTitleLeft}>
                    <div className={css.tabTtl}>{`Section ${id + 1}: ${
                      item.ttl
                    }`}</div>
                    <div className={css.tabDesc}>
                      <span>10/10</span>
                      <span></span>
                      <span>40 min</span>
                    </div>
                  </div>
                  <div className={css.tabTitleRight}>
                    <img
                      src={downArrowIcon}
                      alt="down arrow"
                      className={[
                        css.icon,
                        toggleBox[id] ? css.iconReverse : null,
                      ].join(" ")}
                    />
                  </div>
                </div>
                {toggleBox[id] ? (
                  <div className={css.tabBdy}>
                    {item.list?.map((subItem) => {
                      return (
                        <div
                          className={css.descBdy}
                          key={`subItem-${subItem.id}`}
                        >
                          <div className={css.descBdyLeft}>
                            <CustomCheckboxUtil
                              extraCss={{
                                width: "40px",
                                gap: "0",
                                margin: "0.5rem",
                              }}
                            />
                          </div>
                          <div className={css.descBdyRight}>
                            <div className={css.sbTtl}>{subItem.ttl}</div>
                            <div className={css.sbBox}>
                              <span className={css.subDur}>
                                <img src={playIcon} className={css.plyIcon} />
                                <span className={css.subDurTxt}>
                                  {subItem.dur}
                                </span>
                              </span>
                              <span className={css.subDrp}>
                                <div
                                  className={css.subDrpBox}
                                  // onClick={() => {
                                  //   console.log(subItem.id, !![subItem.id]);
                                  //   setToggleDrpDwn(() => {
                                  //     return {
                                  //       [subItem.id]: [subItem.id]
                                  //         ? !![subItem.id]
                                  //         : true,
                                  //     };
                                  //   });
                                  // }}
                                >
                                  <img
                                    src={openFolderIcon}
                                    alt="icon"
                                    className={css.subIcon}
                                  />
                                  <div className={css.subDrpTxt}>Resources</div>
                                  <img
                                    src={downArrowIcon}
                                    icon="dropdown icon"
                                    className={css.drowDownIcon}
                                  />
                                </div>
                                {toggleDrpDwn[subItem.id] ? (
                                  <div className={css.subDrpItemsBox}>
                                    {subItem?.resources?.map((resItem) => {
                                      return (
                                        <Link
                                          key={`resItem-${resItem.id}`}
                                          download={resItem.downloadable}
                                          to={resItem.link}
                                          className={css.resItem}
                                        >
                                          <img
                                            src={resItem.icon}
                                            alt="icon"
                                            className={css.resItemIcon}
                                          />
                                          <span className={css.resItemTxt}>
                                            {resItem.text}
                                          </span>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                ) : null}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseContentComponent;
