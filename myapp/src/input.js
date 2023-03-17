import React from "react";

export default function Input() {
  return (
    <>
      <div className="input-list">
        <ul>
          <div className="list d-flex">
            <div className="task-write">
              <h4 className="complete">
                <li>Buy new sewatshirt</li>
              </h4>
            </div>
            <div className="round">
              <input type="checkbox" id={`checkbox1`} checked="checked" />
              <label htmlFor={`checkbox1`}></label>;
            </div>
          </div>
          <div className="list d-flex">
            <div className="task-write">
              <h4 className="complete">
                <li>Go for a walk</li>
              </h4>
            </div>
            <div className="round">
              <input type="checkbox" id={`checkbox1`} checked="checked" />
              <label htmlFor={`checkbox1`}></label>;
            </div>
          </div>

          <div className="list d-flex">
            <div className="task-write">
              <h4 className="incomplete">
                <li>Complete React Practical</li>
              </h4>
            </div>
            <div className="round">
              <input type="checkbox" id={`checkbox1`} />
              <label htmlFor={`checkbox1`}></label>;
            </div>
          </div>

          <div className="list d-flex">
            <div className="task-write">
              <h4 className="incomplete">
                <li>Start Redux</li>
              </h4>
            </div>
            <div className="round">
              <input type="checkbox" id={`checkbox1`} />
              <label htmlFor={`checkbox1`}></label>;
            </div>
          </div>
          <div className="list d-flex">
            <div className="task-write">
              <h4 className="incomplete">
                <li>Learn all concepts correctly</li>
              </h4>
            </div>
            <div className="round">
              <input type="checkbox" id={`checkbox1`} />
              <label htmlFor={`checkbox1`}></label>;
            </div>
          </div>
          <div className="list d-flex">
            <div className="task-write">
              <h4 className="incomplete">
                <li>Submit practical</li>
              </h4>
            </div>
            <div className="round">
              <input type="checkbox" id={`checkbox1`} />
              <label htmlFor={`checkbox1`}></label>;
            </div>
          </div>
          <div className="list d-flex">
            <div className="task-write">
              <h4 className="incomplete">
                <li>Go to home</li>
              </h4>
            </div>
            <div className="round">
              <input type="checkbox" id={`checkbox1`} />
              <label htmlFor={`checkbox1`}></label>;
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}
