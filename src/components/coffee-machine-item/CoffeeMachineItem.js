import React from "react";
import { Helmet } from "react-helmet";
import { CoffeeMachineTop } from "./coffee-machine-top/CoffeeMachineTop";
import { CoffeeMachineLifestyle } from "./coffee-machine-lifestyle/CoffeeMachineLifestyle";
import { CoffeeMachineDetails } from "./coffee-machine-details/CoffeeMachineDetails";
import { CoffeeMachineAbout } from "./coffee-machine-about/CoffeeMachineAbout";
import "./CoffeeMachineItem.scss";

export const CoffeeMachineItem = props => {
    const { machine, coffee } = props;
    const machineContent = machine.content[0];
    const machineColors = machine.content[0].machine_colors;
    const machineTopUsp = machine.nespresso_usp;
    const lifestyleImages = machine.lifestyle[0].machine_lifestylevisual;
    const machineGallery = machine.content[0].machine_gallery;
    const machineFaq = machine.faq;
    const machineCoffeeIds = machine.machineclass.boer.id;
    return (
        <>
            <Helmet>
                <title>{machineContent.machine_name}</title>
            </Helmet>
            <CoffeeMachineTop
                thumbUrl={machineContent.machine_gallery[0].thumbUrl}
                machineName={machineContent.machine_name}
                machineSubline={machineContent.machine_subline}
                machineDescription={machineContent.machine_description_full}
                machineTopUsp={machineTopUsp}
                machinePrice={machineContent.nesOAMachine_price}
                machineColors={machineColors}
                coffee={coffee}
                machineCoffeeIds={machineCoffeeIds}
            />
            <CoffeeMachineLifestyle
                lifestyleImages={lifestyleImages}
                machineContent={machineContent}
                machineLifestyleMain={
                    machine.lifestyle[0].machine_lifestyle_main
                }
            />
            <CoffeeMachineDetails
                usp={machineContent.usp}
                machineName={machineContent.machine_name}
            />
            <CoffeeMachineAbout
                machineName={machineContent.machine_name}
                funcs={machine.functionality}
                specs={machine.specifications}
                machineGallery={machineGallery}
                machineFaq={machineFaq}
            />
        </>
    );
};
