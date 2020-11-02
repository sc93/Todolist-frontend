import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";
import "moment/locale/ko";

const DatePickerBlock = styled.div`
    margin-bottom: 1rem;
    .SingleDatePickerInput__withBorder {
        width: 152px;
    }
    .DateInput_input {
        cursor: pointer;
    }
`;

const DatePicker = ({ onChangeField, todo_date }) => {
    const [focused, setFocused] = useState(null);
    useEffect(() => {}, [todo_date]);
    const onDateChange = (date) => {
        onChangeField({ key: "date", value: date.format("YYYYMMDD") });
    };
    return (
        <DatePickerBlock>
            <SingleDatePicker
                date={!todo_date ? null : moment(todo_date)} // momentPropTypes.momentObj or null
                onDateChange={onDateChange} // PropTypes.func.isRequired
                focused={focused} // PropTypes.bool
                onFocusChange={({ focused }) => {
                    setFocused(focused);
                }} // PropTypes.func.isRequired
                id="your_unique_id" // PropTypes.string.isRequired,
                readOnly={true}
                placeholder="할 날?"
            />
        </DatePickerBlock>
    );
};

export default DatePicker;
