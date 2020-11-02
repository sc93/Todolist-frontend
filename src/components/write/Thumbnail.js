import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import palette from "../../lib/style/palette";
const ThumbnailBlock = styled.div`
    width: 100%;
    height: 200px;
    margin: 0 auto;
    label {
        width: 100%;
        height: 100%;
        display: inline-block;
        text-align: center;
        line-height: 10;
    }
`;
const StyledInputFile = styled.input`
    display: none;
    margin: 0 auto;
`;
const StyledImage = styled.img`
    width: 350px;
    height: 200px;
    object-fit: cover;
`;
const Thumbnail = ({ onChangeFile }) => {
    const [image, setImage] = useState(null);
    const imgRef = useRef(null);
    const onChangeThumbnail = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
            onChangeFile(e.target.files[0]);
        }
    };
    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onload = function (e) {
                imgRef.current.src = reader.result;
            };
            reader.readAsDataURL(image);
        }
    }, [image]);
    return (
        <ThumbnailBlock>
            <label htmlFor="selectFile">
                {!image ? (
                    "여기를 눌러 썸네일로 사용할 이미지를 선택해주세요."
                ) : (
                    <StyledImage src="" ref={imgRef} />
                )}
            </label>
            <StyledInputFile
                type="file"
                id="selectFile"
                accept=".jpg, .png"
                onChange={onChangeThumbnail}
                onError={() => {
                    alert("이미지 업로드 실패");
                }}
            />
        </ThumbnailBlock>
    );
};

export default Thumbnail;
