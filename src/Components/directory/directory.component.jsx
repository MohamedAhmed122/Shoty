import React from "react";
import { connect } from "react-redux";

import "./directory.styles.scss";

import {selectSections} from '../../redux/directory/DirectorySelector'
import MenuItem from "../Menu-item/menu-component";

const Directory = ({ sections }) => {
  return (
    <div className="directory">
      {sections.map((section) => (
        <MenuItem key={section.id} section={section} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sections: selectSections(state)
});
export default connect(mapStateToProps)(Directory);
