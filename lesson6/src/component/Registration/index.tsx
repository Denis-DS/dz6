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

  const roles = [
    {
      key: "cahs",
      value: "Cahs",
      isChecked: nameOfRole === "cahs",
      setNameOfRole
    },
    {
      key: "card",
      value: "Card",
      isChecked: nameOfRole === "card",
      setNameOfRole
    },
    {
      key: "checkbook",
      value: "Checkbook",
      isChecked: nameOfRole === "checkbook",
      setNameOfRole
    }
  ];

  const singInSubmit = (elem: React.FormEvent<HTMLFormElement>) => {
    elem.preventDefault();
    setName("");
    setAdress("");
    setPhone("");
    setIsAgreePolicy(false);
    setNameOfRole("");
    alert("Order was confirmed");
  };
  return (
    <form className={style.Form} onSubmit={singInSubmit} action="">
      <h1>Order form:</h1>
      <input
        type="text"
        placeholder="Name"
        required={true}
        id="name"
        value={name}
        onChange={e => setName(e.target.value)}
        className={classnames(style.input, {
          [style.Error]: name !== myName
        })}
      />
      <input
        type="number"
        placeholder="Phone"
        required={true}
        id="phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        className={classnames(style.input, {})}
      />
      <textarea
        className={classnames(style.input)}
        id="adress"
        placeholder="Adress"
        required={true}
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
          required={true}
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
