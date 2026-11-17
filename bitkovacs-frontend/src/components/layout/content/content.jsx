import { Children, Fragment } from "react";
import "./content.css";

const separators =
  "memory,memory_alt,save,sim_card,hard_drive,hard_disk,computer,mode_fan,developer_board,cable,router,usb,sd_card,terminal,code,dns,hub,lan,power,sensors,sdk,bolt".split(
    ",",
  );

function Content({ children }) {
  const childArr = Children.toArray(children);

  return (
    <main className="content">
      {childArr.map((child, i) => (
        <Fragment key={i}>
          {i > 0 && (
            <div className="contentSeparator">
              {[...separators, ...separators, ...separators].map((x, index) => (
                <span className="material-symbols-outlined" style={{animationDelay: `${index*0.2}s`}}>{x}</span>
              ))}
            </div>
          )}
          {child}
        </Fragment>
      ))}
    </main>
  );
}

export default Content;
