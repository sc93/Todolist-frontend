import React from "react";
import HeaderContainer from "../container/common/HeaderContainer";
import EditorContainer from "../container/write/EditorContainer";
import WriteActionButtonsContainer from "../container/write/WriteActionButtonsContainer";

const WritePage = () => {
    return (
        <>
            <HeaderContainer />
            <EditorContainer />
            <WriteActionButtonsContainer />
        </>
    );
};

export default WritePage;
