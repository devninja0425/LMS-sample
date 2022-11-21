import React from "react";
import { createPortal } from "react-dom";

import cardImg from "/images/card.jpg";

import LoginModal from "../../components/Auth/LoginModal/LoginModal";
import SignupModal from "../../components/Auth/SignupModal/SignupModal";
import CourseCard from "../../components/Cards/CourseCard/CourseCard";
import BigVerticalCourseCard from "../../components/Cards/BigVerticalCourseCard/BigVerticalCourseCard";
import CarouselLayout from "../../components/CarouselComponents/CarouselLayout/CarouselLayout";
import MedVerticalCourseCard from "../../components/Cards/MedVerticalCourseCard/MedVerticalCourseCard";

import { BigVerticalCourseCardData } from "../../fakedata/fakedata";

const Test = () => {
  const moreCourses = [
    {
      img: cardImg,
      ttl: "Learn Python: The Complete Python Programming CourseLearn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!Rating: 4.3 out of 53675 reviews14.5 total hours146 lecturesAll LevelsCurrent price: ₹649Original price: ₹3,399",
      authDet: "Koushil Mankali, Nani",
      prc: 649,
      oldprc: 1338,
      stars: { a: 5, b: 1, c: 1, d: 1, e: 1 },
      noOfRats: 9,
    },
    {
      img: cardImg,
      ttl: "Learn Python: The Complete Python Programming CourseLearn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!Rating: 4.3 out of 53675 reviews14.5 total hours146 lecturesAll LevelsCurrent price: ₹649Original price: ₹3,399",
      authDet: "Koushil Mankali, Nani",
      prc: 649,
      oldprc: 1338,
      stars: { a: 5, b: 1, c: 1, d: 1, e: 1 },
      noOfRats: 9,
    },
  ];

  return (
    <>
      <div style={{ width: "80%", margin: "auto" }}>
        <CarouselLayout>
          {BigVerticalCourseCardData?.map((item) => {
            return <BigVerticalCourseCard data={item} key={item.id} />;
          })}
        </CarouselLayout>
      </div>
      <div style={{ width: "80%", margin: "auto" }}>
        {BigVerticalCourseCardData?.map((item) => {
          return <MedVerticalCourseCard data={item} key={item.id} />;
        })}
      </div>
      {/* {createPortal(<LoginModal />, document.getElementById("modal"))} */}
      {/* {createPortal(<SignupModal />, document.getElementById("modal"))} */}
      {/* <h1>Test Page</h1> */}
      {/* <hr /> */}
      {/* <div style={{ display: "flex" }}>
        {moreCourses?.map((item) => {
          return <CourseCard key={item.id} data={item} />;
        })}
      </div> */}
    </>
  );
};

export default Test;
