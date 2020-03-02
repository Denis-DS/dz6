import React from "react";
import style from "./style.module.scss";
import classnames from "classnames";

const OrderForm = () => {
  const myName = "Denis";

  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [adress, setAdress] = React.useState("");
  const [isAgreePolicy, setIsAgreePolicy] = React.useState(false);
  const [nameOfRole, setNameOfRole] = React.useState("");

  const classNamesFunc = (e: any) => {
    return classnames(style.input, {
      [style.Error]: e
    });
  };

  const valid = (elem: any) => {
    if (elem.validation) {
      return elem.validation !== elem.value;
    } else {
      return (
        elem.value.length < 10 ||
        elem.value.length === 11 ||
        elem.value.length > 12
      );
    }
  };

  const roles = [
    {
      key: "cahs",
      value: "Cahs",
      isChecked: nameOfRole === "cahs",
      name: "role",
      setNameOfRole
    },
    {
      key: "card",
      value: "Card",
      isChecked: nameOfRole === "card",
      name: "role",
      setNameOfRole
    },
    {
      key: "checkbook",
      value: "Checkbook",
      isChecked: nameOfRole === "checkbook",
      name: "role",
      setNameOfRole
    }
  ];

  const formDate = [
    {
      key: "name",
      text: "Name",
      validation: myName,
      value: name,
      type: "text",
      exsample: `example: Denis`,
      setValue: setName
    },
    {
      key: "phone",
      text: "Phone",
      value: phone,
      type: "number",
      exsample: "example: 380901231212 or 0901231212",
      setValue: setPhone
    }
  ];

  const singInSubmit = (elem: React.FormEvent<HTMLFormElement>) => {
    if (
      name === myName &&
      (phone.length > 10 || phone.length < 12) &&
      adress.length &&
      isAgreePolicy &&
      nameOfRole
    ) {
      setName("");
      setAdress("");
      setPhone("");
      setIsAgreePolicy(false);
      setNameOfRole("");
      alert("Order was confirmed");
      elem.preventDefault();
    } else {
      alert("Complete empty field");
      elem.preventDefault();
    }
  };
  return (
    <form className={style.Form} onSubmit={singInSubmit} action="">
      <h1>Order form:</h1>
      {formDate.map(elem => {
        return (
          <React.Fragment key={elem.key}>
            <input
              type={elem.type}
              placeholder={elem.text}
              className={classNamesFunc(valid(elem))}
              id={elem.key}
              value={elem.value}
              onChange={e => elem.setValue(e.target.value)}
            />
            <p>({elem.exsample})</p>
          </React.Fragment>
        );
      })}
      <textarea
        className={classNamesFunc(!adress.length)}
        id="adress"
        placeholder="Adress"
        value={adress}
        onChange={elem => setAdress(elem.target.value)}
      ></textarea>
      <div>
        {roles.map(role => {
          return (
            <div key={role.key}>
              <label htmlFor={role.key}>{role.value}</label>
              <input
                type="radio"
                value={role.key}
                checked={role.isChecked}
                onChange={() => role.setNameOfRole(role.key)}
              />
            </div>
          );
        })}
      </div>
      <label htmlFor="policy">
        <input
          checked={isAgreePolicy}
          onChange={() => {
            setIsAgreePolicy(!isAgreePolicy);
          }}
          type="checkbox"
          name="policy"
          id="policy"
        />
        Agree with the policy
      </label>
      <button type="submit">Order</button>
    </form>
  );
};

export default React.memo(OrderForm);
