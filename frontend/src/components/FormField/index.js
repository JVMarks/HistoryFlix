import React from "react";
//import {FormFieldBase} from "./styles";

function FormField({ label, type, name, value, onChange }) {
  return (
      //<FormFieldBase>
    <div>
      <label>
        {label}: 
        <input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
    //</FormFieldBase>
  )
}

export default FormField;