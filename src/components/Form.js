import React from "react";

export default function Form(props) {
    return (
        <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done {props.subject}?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    )
}
