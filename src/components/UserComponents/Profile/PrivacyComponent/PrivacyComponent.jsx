import { useState } from "react";

import Button1 from "../../../../utils/Buttons/Button1/Button1";
import CustomCheckboxUtil from "../../../../utils/FormUtils/CustomCheckboxUtil/CustomCheckboxUtil";

import css from "./PrivacyComponent.module.css";

const PrivacyComponent = () => {
  const [data, setData] = useState([
    {
      id: 1,
      txt: "Show your profile to logged-in users",
      name: "show-profile",
      checked: false,
    },
    {
      id: 2,
      txt: "Show courses you're taking on your profile page",
      name: "show-courses",
      checked: false,
    },
  ]);

  const changeHandler = (item) => {
    const newData = data?.map((dataItem) => {
      if (item.name === dataItem.name) {
        dataItem.checked = item.checked;
      }
      return dataItem;
    });
    setData(newData);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("values", data);
  };

  return (
    <div className={css.outerDiv}>
      <form onSubmit={submitHandler}>
        {data?.map((item) => {
          return (
            <CustomCheckboxUtil
              key={item.id}
              label={item.txt}
              name={item.name}
              id={item.name}
              state={item.checked}
              onChange={changeHandler}
            />
          );
        })}

        <Button1
          type="submit"
          txt="Save"
          bck="var(--light-gray2)"
          color="var(--white)"
          hovBck="var(--gray)"
          extraCss={{
            padding: "0.5rem",
            fontSize: "1rem",
            margin: "2rem 0rem",
          }}
        />
      </form>
    </div>
  );
};

export default PrivacyComponent;
