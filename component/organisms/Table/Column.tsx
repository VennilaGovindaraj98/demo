import React from "react";
import classname from "classnames";
import styles from "@/component/organisms/Table/table.module.css";

interface ColumnParms {
  tableHeadings: string[];
}
function Column(props: ColumnParms) {
  const { tableHeadings } = props;
  const tableHeading = classname(styles.table_heading);
  return (
    <tr>
      {tableHeadings.map((heading) => (
        <th className={tableHeading}>{heading}</th>
      ))}
    </tr>
  );
}

export default Column;
