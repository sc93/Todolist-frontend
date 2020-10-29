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
    ..DateInput_input__focused {
        cursor: pointer;
    }
`;

const DatePicker = ({ write_date }) => {
    const [date, setDate] = useState(null);
    const [focused, setFocused] = useState(null);

    useEffect(() => {
        // moment().locale("ko");
    }, []);
    return (
        <DatePickerBlock>
            <SingleDatePicker
                date={date} // momentPropTypes.momentObj or null
                onDateChange={(date) => setDate(date)} // PropTypes.func.isRequired
                focused={focused} // PropTypes.bool
                onFocusChange={({ focused }) => {
                    setFocused(focused);
                    console.log("??");
                }} // PropTypes.func.isRequired
                id="your_unique_id" // PropTypes.string.isRequired,
                readOnly={true}
                placeholder="할 날?"
            />
        </DatePickerBlock>
    );
};

export default DatePicker;
