import React from "react";
import Table from "react-bootstrap/Table";

export const CoffeeMachineFuncs = props => {
    const { funcs } = props;

    return (
        <Table striped hover responsive>
            <tbody>
                {funcs.map((funcItem, index) => {
                    return (
                        <tr key={index}>
                            <td>{funcItem.value}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};
