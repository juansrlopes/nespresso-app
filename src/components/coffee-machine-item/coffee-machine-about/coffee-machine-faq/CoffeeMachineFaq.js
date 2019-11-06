import React from "react";
import "./CoffeeMachineFaq.scss";

export const CoffeeMachineFaq = props => {
    const { machineFaq } = props;
    return (
        <>
            {machineFaq.map((faqItem, index) => {
                return (
                    <div key={index} className="machine-faq">
                        <h4
                            dangerouslySetInnerHTML={{
                                __html: faqItem.title
                            }}
                        ></h4>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: faqItem.answer
                            }}
                            className="machine-faq-list"
                        ></div>
                    </div>
                );
            })}
        </>
    );
};
