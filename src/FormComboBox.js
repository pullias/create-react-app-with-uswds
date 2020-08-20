import React from "react";

function FormComboBox() {
  return (
    <form className="usa-form">
      <label className="usa-label" htmlFor="fruit">
        Select a fruit
      </label>
      <div className="usa-combo-box">
        <select className="usa-select" name="fruit" id="fruit">
          <option value>Select a fruit</option>
          <option value="apple">Apple</option>
          <option value="apricot">Apricot</option>
          <option value="avocado">Avocado</option>
          <option value="banana">Banana</option>
          <option value="blackberry">Blackberry</option>
          <option value="blood orange">Blood orange</option>
          <option value="blueberry">Blueberry</option>
          <option value="boysenberry">Boysenberry</option>
          <option value="breadfruit">Breadfruit</option>
        </select>
      </div>
    </form>
  );
}
export default FormComboBox;
