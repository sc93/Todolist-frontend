import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Main from "../../components/Main/Main";
import TodolistTemplate from "../../components/TodoList/TodolistTemplate";

const MainContainer = () => {
    const { user } = useSelector(({ user }) => ({
        user: user.user,
    }));
    const [TodoList, setTodoList] = useState([]);
    useEffect(() => {
        if (user) {
            setTodoList([
                {
                    date: "202012",
                    list: [
                        {
                            todo_id: 3,
                            title: "test4",
                            body: "test44",
                            todo_date: "20201205",
                            writer_date: "20201205",
                        },
                        {
                            todo_id: 7,
                            title: "test8",
                            body: "test88",
                            todo_date: "20201215",
                            writer_date: "20201225",
                        },
                        {
                            todo_id: 10,
                            title: "test11",
                            body: "test1111",
                            todo_date: "20201225",
                            writer_date: "20201225",
                        },
                        {
                            todo_id: 11,
                            title: "test1212",
                            body: "test1212",
                            todo_date: "20201218",
                            writer_date: "20201218",
                        },
                        {
                            todo_id: 12,
                            title: "test1212",
                            body: "test1212",
                            todo_date: "20201218",
                            writer_date: "20201218",
                        },
                        {
                            todo_id: 13,
                            title: "test1212",
                            body: "test1212",
                            todo_date: "20201218",
                            writer_date: "20201218",
                        },
                        {
                            todo_id: 14,
                            title: "test1212",
                            body: "test1212",
                            todo_date: "20201218",
                            writer_date: "20201218",
                        },
                    ],
                },
                {
                    date: "202010",
                    list: [
                        {
                            todo_id: 0,
                            title: "test1",
                            body: "test11",
                            todo_date: "20201005",
                            writer_date: "20201005",
                        },
                    ],
                },
                {
                    date: "202009",
                    list: [
                        {
                            todo_id: 1,
                            title: "test2",
                            body: "test22",
                            todo_date: "20200905",
                            writer_date: "20200905",
                        },
                    ],
                },
                {
                    date: "202008",
                    list: [
                        {
                            todo_id: 2,
                            title: "test3",
                            body: "test3",
                            todo_date: "20200805",
                            writer_date: "20200805",
                        },
                    ],
                },
                {
                    date: "202003",
                    list: [
                        {
                            todo_id: 4,
                            title: "test5",
                            body: "test55",
                            todo_date: "20200305",
                            writer_date: "20200305",
                        },
                    ],
                },
            ]);
        }
    }, [user]);
    return user ? <TodolistTemplate todolist={TodoList} /> : <Main />;
};

export default MainContainer;
