import React from "react";
import './toggle.css'

export default function Toggle(props) {
   const { isOn, handleToggle, onColor } = props

   return (
      <>
         <input
            id="gfToggle"
            checked={isOn}
            onChange={handleToggle}
            type='checkbox'
            className="toggle-checkbox"
            name='gfToggle'
         />
         <label
            className="toggle-label"
            style={{ background: isOn && onColor }}
            htmlFor={'gfToggle'}
         >
            <span className={'toggle-btn'} />
         </label>
      </>
   )
}